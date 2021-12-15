---
title: Tracking down a CGO crash in production
description: At Netlify we’ve been expanding our adoption of Go-based services
  for the backend infrastructure that powers our core services. In this article,
  we explore a fault we encountered in a production service as we were scaling
  it to handle new traffic patterns. We uncover an exception we hit in some CGO
  code and explore how we went about debugging it.
authors:
  - Mike Heffner
date: 2021-03-18
lastmod: 2021-03-18
topics:
  - insights
tags:
  - Rust
  - Go
  - Edge
  - Engineering
tweet: ""
format: blog
relatedposts:
  - "Shipping Node.js at Netlify"
  - "From Unstable to Reliable: A Release Engineering Journey"
seo:
  metadescription: Learn more about Netlify's adoption of Go-based services for backend infrastructure of our core services. Learn about our process debugging CGO exceptions and resolving for production.
  metatitle: How We Tracked Down a CGO Crash in Production at Netlify
---
At Netlify we’ve been expanding our adoption of Go-based services for the backend infrastructure that powers our core services. In this article, we explore a fault we encountered in a production service as we were scaling it to handle new traffic patterns. In particular, we uncovered some of the difficulties and concerns with using a CGO binding to a C++ implementation, but discovered better means to debug these failures more efficiently in the future.

## History of the origin

When a customer loads a Netlify site, their browser contacts one of many edge nodes in the [Netlify Edge network](https://www.netlify.com/products/edge/). If that node does not have a cached version of the content they are requesting, the edge node must make a request to the origin to serve it. Unlike a traditional CDN, Netlify maintains the origin for all site content.

To provide some context for the service we were working on, we need to take a short overview of how this origin service has evolved at Netlify.

The first version of Netlify was built as a Ruby on Rails application. Rails provided the ability to iterate quickly on early features as the Jamstack space was evolving. The team could focus on easing the friction for early Jamstack developers to ship sites quickly on the platform and less on complicated infrastructure.

One of the earlier features of Netlify was the [redirect and proxy](https://docs.netlify.com/routing/redirects/) support. Redirects provide a number of features that can help when building sites, including:

* serving regional content based on different locales
* easing the import/migration of sites by remapping content URLs to their new homes
* facilitating fast iteration micro-site development models, where many smaller sites are stitched together under a single domain.

Some sites make heavy use of redirects, upwards up 10k+ redirect rules for single sites. When content is requested for the first time from the origin we can evaluate thousands or more rules in a single request. The initial version of redirects was implemented in Ruby as part of the early Rails stack. As the site scaled, it proved too expensive and generated a lot of garbage that took overhead to collect in the Ruby VM. The team decided to move the most costly portions of the redirect rule matching engine into a C++ library, internally known as libredirect, and incorporate it into the app using the Ruby extensions API.

As the Jamstack model grew in popularity and the Netlify platform continued to scale, more processing was pushed to the edge. This included the need to process redirect rules at the edge, where most edge services were implemented as Go services. A [CGO](https://golang.org/cmd/cgo/) binding to the same library was built so that redirect rules could be evaluated at the edge and maintain the same compatibility as those executed at the origin.

This brings us to the project we are working on today which will extract the remaining origin request path from our Rails application and move it to a set of Go service tiers. This work includes architecture changes to the storage systems backing origin, including moving to systems with better availability and scalability stories. We plan to cover this work in more depth in future articles here. A requirement for this work is handling the redirects processing still done at the origin and moving it to the new origin Go services. We took the same approach of adopting the CGO bindings that we use at the edge to ensure compatibility.

## Testing a new service

A goal we set for our new service was to build it out incrementally and handle delivering content for Netlify sites of increasing feature complexity. The [LaunchDarkly](https://launchdarkly.com/) service has been an important part of our iterative approach as it has allowed us to dark launch new code paths and slowly increase the traffic exposed to them. Additionally, we execute requests against the original origin service alongside our new implementation. We verify in real-time if there are any differences in behavior and fallback to the original implementation. This provides us the necessary guardrails to ensure we don’t change the behavior for content requests.

During our rollout of the redirect parsing, we had scaled up to 60% of our target traffic when our monitoring systems notified us of high request latency. The log monitoring identified that our service pods were exiting with a segmentation fault and getting restarted. We used the `kubectl logs` command’s `--previous` flag to dump the full log data from the exited pods which neatly gave us a fault backtrace that resembled the following:



```
fatal error: unexpected signal during runtime execution
[signal SIGSEGV: segmentation violation code=0x1 addr=0x7f5a402cc2e0 pc=0x7f58b2677b16]

runtime stack:
runtime.throw(0x1501c59, 0x2a)
	/usr/local/go/src/runtime/panic.go:1116 +0x72
runtime.sigpanic()
	/usr/local/go/src/runtime/signal_unix.go:726 +0x4ac

goroutine 12655254 [syscall]:
runtime.cgocall(0x118b6d0, 0xc0007cddb0, 0xc000729000)
	/usr/local/go/src/runtime/cgocall.go:133 +0x5b fp=0xc0007cdd80 sp=0xc0007cdd48 pc=0x463cbb
github.com/netlify/libredirect/go._Cfunc_MatcherMatch(0x7f58402c2910, 0x7f5864cff240, 0x7f5864c69c90, 0x7f582ccceb30, 0x7f5864d08e00, 0x178ce000178cd, 0x0)
	_cgo_gotypes.go:387 +0x4e fp=0xc0007cddb0 sp=0xc0007cdd80 pc=0xf3cbee
github.com/netlify/libredirect/go.(*Matcher).Match.func4(0xc0007ce080, 0x7f5864cff240, 0x7f5864c69c90, 0x7f582ccceb30, 0x7f5864d08e00, 0x178cd, 0x178ce, 0x7f58882c32a0)
	/root/go/pkg/mod/github.com/netlify/libredirect@v1.1.5/go/redirector.go:204 +0x96 fp=0xc0007cde00 sp=0xc0007cddb0 pc=0xf3f856
github.com/netlify/libredirect/go.(*Matcher).Match(0xc0007ce080, 0x1784dc0, 0xc0009cc008, 0x0)
	/root/go/pkg/mod/github.com/netlify/libredirect@v1.1.5/go/redirector.go:204 +0x305 fp=0xc0007cded8 sp=0xc0007cde00 pc=0xf3dd05

```

*1. Segfault crash backtrace*

It was clear that the faults were coming from the libredirect library that we were invoking via the CGO bindings. At the report of high request latency, we disabled the feature flag and request latency returned to normal, and the pods stopped restarting. This clearly identified that the new code path we were testing was leading to the new segfault behavior.



## Go race detector

As part of this project, we had developed an exhaustive integration testing framework that modeled the multiple service tiers for serving origin content. After hitting the segfault in production, we adapted the framework to add a stress test that specifically exercised the request path we expected to be problematic in production. After tweaking some of the test parameters we were able to reproduce the same segfault we hit in production.

We initially suspected a race condition that impacted the data objects that the libredirect CGO bindings were accessing could be at fault here. Go tooling provides a [race detector](https://blog.golang.org/race-detector) that can identify data races at runtime if you rebuild your code with the `-race` flag. We first checked if rerunning our unit test suite with the `-race` flag set would trigger any detected race conditions, but it came up empty. However, many of the tests used mocked interfaces, so we rebuilt the service with the `-race` flag and ran it through our stress test integration environment again. This confirmed the hypothesis that there was a race condition triggered in the redirects code path we were running in production. There's a difficult balance to strike when testing complex systems, swinging too far towards abstractions and mocked interfaces can mask race conditions that only present themselves under realistic workloads.

The team was able to quickly patch the conditions detected by the race detector, primarily by cloning the objects shared across the concurrent goroutine boundaries. A quick test showed that the changes did in fact fix the race conditions detected by the race detector during our stress test run. Unfortunately, continued stress testing of the service demonstrated we had not completely resolved the segfault.

## Shared pointers and Go finalizers

Our attention then turned to the actual libredirect code and the CGO binding implementation. Something that stuck out to us was the use of the C++ `shared_ptr<>` or “[smart pointers](https://docs.microsoft.com/en-us/cpp/cpp/smart-pointers-modern-cpp?view=msvc-160)”. The `shared_ptr` class maintains a reference counted pointer to an object and only when all references pass out of scope will the pointer be deallocated. In the case of this code, the pointer was pulled out of the shared_ptr and passed around externally, which can be dangerous as that can maintain a non-counted reference to the object. While we could not prove that the use, in this case, had the potential to crash, we thought it best to fix it to avoid future misuse.

To our surprise, when we reran our stress test with the shared_ptr change in place we found it difficult to hit the segfault again. In our initial stress tests, we would trip a segfault within 2-3 minutes, but now we were running the stress test much longer without an issue. However, after running the stress test for a much longer duration we were still able to periodically trip the segfault.

We next turned our focus to the use of the Go runtime package function [SetFinalizer](https://golang.org/pkg/runtime/#SetFinalizer). We were using this function to deallocate internal data structures of the C++ libredirect library when the reference in our CGO bindings was garbage collected. Without the use of a finalizer function, our libredirect data structures would be lost and lead to memory leaks. A closer look at how the finalizers had been setup provided a clue to the problem:

```go
// (redirects.)Matcher (defined externally in libredirect)
type Matcher struct {
	b builder
}

func Parse(file string) redirects.Matcher {
	m := redirects.New()
	m.Parse(file)

	runtime.SetFinalizer(&m, func(p *redirects.Matcher) {
		m.Free()
	})

	return m
}

func main() {
	m := Parse("/tmp/test.json")

	req := http.NewRequest("GET", "/test", nil)
	m.Match(req)
}

```

*2. Example code that segfaulted*

To test our hypothesis, we added several repeated calls to `runtime.GC()` right after the return of the `Parse()` function and before the call to `Match`. When we rebuilt and reran our stress test against this change, the service crashed immediately.

The problem was that our libredirect library was returning a struct by copy and then we were returning another copy from our `Parse` routine. However, in the `Parse` routine, we were setting up a finalizer to run when the struct, allocated in `Parse`, left scope and was garbage collected. Since the struct was returned by copy, that struct was lost following the completion of the `Parse` routine. If we got unlucky and a GC cycle ran before we could call Match, or our stress test forced calls to `runtime.GC()`, the parsed redirect rules returned from libredirect would be deallocated before we had the chance to invoke the `Match()` method. If we made the simple change to simply return a reference from `Parse`, as seen below, it was enough to prevent the early deallocation of the libredirect object.

```go
// (redirects.)Matcher (defined externally in libredirect)
type Matcher struct {
	b builder
}

func Parse(file string) *redirects.Matcher {
	m := redirects.New()
	m.Parse(file)

	runtime.SetFinalizer(&m, func(p *redirects.Matcher) {
		m.Free()
	})

	return &m
}

func main() {
	m := Parse("/tmp/test.json")

	req := http.NewRequest("GET", "/test", nil)
	m.Match(req)
}

```

*3. Same code with the fixed pointer return*

We rebuilt and reran our test suites with this change applied. After extensive runs, we were unable to reproduce the original crash and deemed it safe to return to production. Since the final change was shipped to production and the feature flag was increased to 100%, we have not seen another segfault.

## GDB backtrace debugging

We were somewhat lucky in this scenario to be able to identify potentially problematic code and confirm it quickly in our test environment. The default backtrace stacks that Go prints on a segfault can make it difficult to debug particular issues, especially when using externally compiled code linked with CGO. We can see a call stack leading into CGO code, but not much past that point.

Had we been unable to reproduce this in our test environment or unable to stumble upon a fix, we would have used [gdb](https://golang.org/doc/gdb) to debug a full crash dump. To enable Go to write a core dump instead of printing a backtrace, you can set `GOTRACEBACK=crash` at runtime. You can then open this core dump with gdb for better debugging.

## Conclusion

This production crash provided an opportunity to dive deeper into our CGO integration with the redirect library we use in several projects. During the debugging analysis, we identified several code improvements to the redirect library that will make it safer to use across projects. For example, all memory structures returned from the library now use pointer references to make it more difficult to set up a finalizer on an object that leaves scope before it is referenced. This change will be shipped to our Go services that run at the edge.

Finally, as part of our work to build [Netlify Edge Handlers](https://www.netlify.com/products/edge/edge-handlers/), we have built a Rust implementation of our redirect handling that we will incorporate into our Rust-based edge handler framework. This work will allow us to execute redirect rule parsing at the edge and eventually remove the need to process redirects closer to origin, thereby deprecating our C++ implementation.

If you found this article interesting and would like to help us build better systems, come [join us](https://www.netlify.com/careers/)!
