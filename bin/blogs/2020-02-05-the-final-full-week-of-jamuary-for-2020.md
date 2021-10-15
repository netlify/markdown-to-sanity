---
title: The final full week of JAMuary for 2020
description: A look at the posts about JAMstack in week four of JAMuary 2020.
authors:
  - Phil Hawksworth
date: '2020-02-12'
topics:
  - insights
tags:
  - JAMstack
  - JAMuary
tweet: ''
format: blog
seo:
  metadescription: >-
    Check out Netlify's JAMuary Series - Recap of Week 4, 2020. Exploring
    questions about security, scale, performance, and functionality when using
    JAMstack.
  metatitle: JAMstack JAMuary Series - Week 4 Recap - Deeper questions about JAMstack
---

As we approached the end of January, we had to face up to the fact that we were also coming to the end of JAMuary, which brought us so many great articles about things from around the JAMstack ecosystem.

Here, we'll look at  the posts from week 4 of JAMuary, led impressively by the work of our very own Divya (although she also inspired other people to start sharing [JAMstack content](https://dev.to/t/jamuary) throughout the month)

(A recap of post from weeks [one](/blog/2020/01/13/talking-about-jamstack-this-jamuary/?utm_source=blog&utm_medium=jamuary4-pnh&utm_campaign=devex), [two](/blog/2020/01/22/lets-keep-talking-about-jamstack-this-jamuary/?utm_source=blog&utm_medium=jamuary4-pnh&utm_campaign=devex), and [three](/blog/2020/02/04/spreading-the-jamuary-love/?utm_source=blog&utm_medium=jamuary4-pnh&utm_campaign=devex) are also available)


## JAMuary digest  22nd – 28th



**[JAMuary 22nd – What makes the JAMstack secure?](https://dev.to/shortdiv/what-makes-the-jamstack-secure-2b43)**

A improved security profile is a key benefit of the JAMstack.  By simplifying the journey each request for assets must make, and serving things statically  directly from a CDN or a simplified file server, we radically decrease the opportunities for attack. Security through this sort of simplicity, is often overlooked. As Divya points out:

> As trivial as this may seem, reducing a website’s vulnerability to attack can be achieved by simply going static. In a static setup, files are read only

Divya also talks about the costs of taking on the burden of securing every API, service, or piece of dynamic infrastructure yourself. Rather than perhaps leaning on the dedicated teams of API vendors who specialise in that as their core business. Noting that this can be an never ending endeavour and that:

> This is especially the case in monolithic server side setups where countless third party plugins are exposed to enable administrators easy access to content and configurations. However convenient they may be, they create a massive surface area for malware penetration.




**[JAMuary 23rd – Are your keys secure on the JAMstack?](https://dev.to/shortdiv/are-your-keys-secure-on-the-jamstack-pin)**

The thriving API economy has been steadily augmenting what can be achieved with the JAMstack. There are countless services we can utilise either at build time, or directly from the browser.

If we are accessing APIs directly from the browser, we need to be cautious about including secrets tor keys required by those APIs in ways that expose them to the public.

Many might think that this is either difficult or impossible to overcome. But here, Divya describes some commonly used patterns for keeping your API keys secret. Amongst these she describes Netlify's ability to proxy and sign requests directly at the CDN-level, and using JSON Web Signature (JWS), observing:

> In either of these instances, access to an end server is verified at the edge nodes and doesn’t require a full round trip to authentication servers. This means that requests can be made secure without the burden of extra load time.

Further reading: [Netlify rewrites and proxies](https://docs.netlify.com/routing/redirects/rewrites-proxies/?utm_source=blog&utm_medium=jamuary4-pnh&utm_campaign=devex#signed-proxy-redirects)


**[JAMuary 24th – Why is a JAMstack site fast?](https://dev.to/shortdiv/is-a-jamstack-site-really-fast-3ome)**

Along with _security_ we associate _speed_ with the JAMstack.. But why is that?  In this post, Divya talks about the role that caching can play in speeding up a site. While not unique to the JAMstack, caching is universally recognised as being difficult to get right. As Divya comments:

> ...a poorly executed caching strategy can cause unexpected errors and redundant trips to the server that add time to page load. In the context of the JAMstack, the cache is automatically populated and persisted with every new site build. 

This is such a huge benefit of the pre-generated nature of JAMstack sites. It makes them incredibly well suited to a workflow where we cache everything coming from our builds. A deployment becomes the task of getting _everything_ to the CDN.

This superpower was one of the things identified by the founders of Netlify who set about building automation of this previously dreaded task. Enabled by this model, they were aware that it brought opportunities to operationalize the management of caching and relieve developers of this burden. 

Further reading: [Better Living Through Caching](https://www.netlify.com/blog/2017/02/23/better-living-through-caching/?utm_source=blog&utm_medium=jamuary4-pnh&utm_campaign=devex)



**[JAMuary 25th – What more can a CDN do on the JAMstack?](https://dev.to/shortdiv/what-more-can-a-cdn-do-on-the-jamstack-5cgj)**

More than just Content Delivery Networks, modern CDNs are gaining impressive advanced capabilities. In this post, Divya talks about some examples of these capabilities which have lead to the term Application Delivery Network (ADN) gaining popularity. At Netlify we often talk about our [Netlify Edge advanced delivery network](https://www.netlify.com/products/edge/?utm_source=blog&utm_medium=jamuary4-pnh&utm_campaign=devex).

> The emergence of edge computing bolstered modern CDNs with the capability to handle crucial business logic like redirects and authentication at the edge. By forgoing the extra trip to the origin server, edge logic at the CDN layer brings the server ever closer to the user.

Paring the exciting possibilities delivered by ADNs with the model of pre-rendering assets for rapid delivery brings all sorts of exciting possibilities as Divya points out.

Further reading: [Branch deploys](https://docs.netlify.com/site-deploys/overview/?utm_source=blog&utm_medium=jamuary4-pnh&utm_campaign=devex#branch-deploy-controls), [Split Testing](https://docs.netlify.com/site-deploys/split-testing/?utm_source=blog&utm_medium=jamuary4-pnh&utm_campaign=devex), [Redirects and rewrites](https://docs.netlify.com/routing/redirects/?utm_source=blog&utm_medium=jamuary4-pnh&utm_campaign=devex)


**[JAMuary 26th – Can I run a server with the JAMstack model?](https://dev.to/shortdiv/can-i-run-a-server-with-the-jamstack-model-3i69)**

The JAMstack does not mean an end to servers. It doesn't mean an end to ops teams or backend engineering. The JAMstack is thriving thanks to many services which offer APIs built and maintained by teams focussing on precisely those. That's not going away.

But when we think of our project teams, might we start to think that some of the more server-based specialist roles could be going away? Divya addresses this on this post, noting:

> Often, within the JAMstack model, functionality is outsourced to external services in order to avoid the burden of having to build custom functionality. However, building custom logic for your application and running a separate server for it counts as JAMstack so long as the backend is decoupled from the frontend.

This decoupling is a huge enabler. It provides increased focus and better defined areas of responsibilities. We profit from this model here at Netlify with one engineering team dedicated to providing the API which another engineering team, (who focus on frontend development) consume in our own JAMstack site: [app.netlify.com](https://app.netlify.com?utm_source=blog&utm_medium=jamuary4-pnh&utm_campaign=devex)


**[JAMuary 27th –  Does the JAMstack still use servers?](https://dev.to/shortdiv/does-the-jamstack-still-use-servers-2b88)**

Wait. Are there servers or not? In this post, Divya helpfully addresses this common point of confusion about the JAMstack which arises more and more as JAMstack and serverless are so often seen together.

> Taken at face value, the assertion to move away from servers is a touch misleading. However, the main premise of the JAMstack is a departure from traditional approaches to web development where content is rendered dynamically on a server. 


**[JAMuary 28th – Can I create a rich content experience on the JAMstack?](https://dev.to/shortdiv/can-i-create-a-rich-content-experience-on-the-jamstack-42h5)**

Our final post from this week makes a wonderful point about the importance of good authoring experiences.

> A rich authoring experience demands collaboration between code and content. This way, content creators can craft content that supports the work of developers and vice versa.

The ability to decouple content authoring tools from the code and tooling which generated views of that content has given rise to some powerful multi-platform publishing opportunities. And to a process where the designed and developed page templates can be safeguarded from design attrition.

But that has also brought the need for other creative approaches to letting authors preview their content and craft it to their exacting requirements.

Divya expands on this, talking about technologies like MDX and JSX.


## Still more to come

This digest brings us almost up to date and to the end of JAMuary. Keep a look out for the final digest and retrospective on a month of great JAMstack content from Divya and others on [dev.to](https://dev.to/t/jamuary)

And if you're hungry for more JAMstack content, you might want to check out one of the [2 JAMstack Conferences](https://jamstackconf.com?utm_source=blog&utm_medium=jamuary4-pnh&utm_campaign=devex) happening this year.
