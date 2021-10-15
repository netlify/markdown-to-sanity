---
title: "Can Dynamic Sites Go Serverless? "
description: "How one dev let go of her server and migrated her dynamic sites to
  a microservices architecture on the Jamstack. "
authors:
  - Moriel Schottlender
date: 2021-05-27
lastmod: 2021-05-26
topics:
  - tutorials
tags:
  - serverless
  - Jamstack
  - migration
  - functions
tweet: ""
format: blog
seo:
  metatitle: Can Dynamic Sites Go Serverless?
  metadescription: How incremental builds, performance benefits, and Netlify's
    ease-of-use allowed one dev to migrate dynamic sites to a microservices
    architecture on the Jamstack.
  ogimage: /img/blog/moriel-dynamic_posts.png
---
### Why I migrated my dynamic sites to a serverless architecture

*This is a contributed post by Moriel Schottlender. Moriel is a physicist turned software engineer turned systems architect, currently working on modernizing Wikipedia’s architecture. She’s an open source enthusiast, right-to-left language support evangelist, and a general domain hoarder. You can find her as [@mooeypoo](https://twitter.com/mooeypoo) on Twitter, [Polywork](https://www.polywork.com/mooeypoo), and most other social platforms.*

*\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\__*

Like most web developers these days, I've heard of serverless applications and Jamstack for a while. As a primarily JavaScript/Node developer, I was always curious and excited to check whether I should jump on the bandwagon, let my traditional hosting server go, and design for modern distribution.

When a project at work came up that involved creating a quick UI prototype with a query to an external GraphQL service, I thought I'd give it a try with Netlify. The experience was life changing. Within 10 minutes of switching to Netlify, I had a working prototype with a CI pipeline, a 1-line definition that gave me an API proxy, and the ability to pre-test Pull Requests before merging. The gains of switching to the all-in-one service that Netlify offers were obvious, even with a really small prototype.

The idea of serverless for a tool that is mostly static content is appealing. Generating assets on build and treating the delivery of pages as a [distributed CDN](https://www.netlify.com/products/edge/) (generated on-build rather than on-request) means huge gains in performance for the client.

I was excited about the possibilities of migrating some personal projects to Netlify, saving myself the need (and hassle) of running them on shared- and virtual private servers, and reducing the mental and operational overhead that traditional web server operations entail.

But I wasn't convinced my use case was a valid one for migration.

The projects I wanted to migrate to a serverless architecture are dynamic tools, not blogs or fairly static pages, and they're not relying on constant updates. The majority of the tools I build and host are one-offs that generate content on demand depending on some user input, so on-build generation isn't really an advantage for me. On top of that, my tools are usually ones where I build often during the development phase, but then, once they reach stability, they basically stay as-is, untouched except for rare bug fixes and maintenance.

These factors made the two main advantages of Netlify that I had experienced with my work project — generation on-build and [continuous CI](https://www.netlify.com/products/workflow/) — potentially irrelevant for my use case.

So, should I migrate at all?

## Not the usual serverless migration

I build mostly one-off tools that take some input, crunch the data, and output something back.

Take [Neutrality.wtf](http://neutrality.wtf), for example. It accepts a URL given by the user, and then fetches the page server-side (to avoid CORS), parses the target, performs fairly heavy analysis and replacements on the structure, re-serializes and outputs the HTML for display. This operation is fairly heavy, and cannot be done on build.

When examining the usual benefits in migrating to serverless architecture — and Netlify specifically — I had a couple of questions:

* **Since most of my pages are created on-demand, would a static site help?** I wasn’t convinced I needed to ship pre-built assets: I wouldn’t really win the speed benefit, since 99% of the requested pages are created on-demand, rather than on-build.
* **Did I need the CI/CD benefit?** While having the site automatically update from GitHub is great, these types of tools only really benefit from that for the short amount of time I spend developing them. Once they're stable, I don't really update the code that much.
* **Is my project more server than serverless?** The whole point of serverless microservice architecture is that the server is only used when needed — making the operation and delivery fast and efficient. But with my dynamic tool, the operation is effectively sending all requests to the microservice. Is serverless architecture even a good fit in this case?
* **What would a microservice architecture cost?** With a full server, I was probably paying more than what I'd pay if the server "only worked when needed" as it would on a microservice architecture, but the fee was known. It would remain constant no matter how much traffic I got. I was worried that in moving to a serverless architecture, I wouldn’t be able to predict the pricing. What would my worker resources or cost look like if I suddenly went viral?
* **How would I cache serverless function results?** In general, serverless architecture doesn't offer great solutions for caching serverless functions' results. If even one of the urls in any of my tools goes viral, the system will crunch the data again and again in a way that, I feared, will completely deplete my time and service allocations, or, I thought, would end up being unpredictably expensive.

I was excited about modernizing my tools, but I wasn't completely convinced that my use case actually fits migrating to serverless applications.

## The benefits of serverless architecture

Regardless of technology used, the specific architecture of a serverless application has incredible strong benefits that could potentially tip the scales for me and make a rewrite of my tools useful.

Serverless architecture, and microservices in general, encourage encapsulation of the business logic that is a bit harder to be disciplined about when working on a monolithic traditional server tool. The idea that specific operations can be "spooled up" when needed means that the architecture encourages encapsulation and independence as much as possible. This may not fit all tools all the time (and there are some benefits, occasionally, for a service-monolith, in some cases) but in my small one-off tools, the idea of encapsulation meant potentially providing the behavior outside of the web page itself, as a standalone tool that can serve other interfaces and products.

As an open source tool advocate, this was an appealing bonus for me. There was no question in my mind that my tools fit the use case of the architecture itself — but the architecture doesn't have to be completely serverless; one could write a decoupled "service" architected tool while still using a traditional server — so the question of whether I should go serverless was not quite answered.

I had to explore further.

## The overhead of managing my own server

Running websites or web tools on a server requires managing everything that surrounds the delivery of the tool. This includes setting up caching, setting up SSL certificates, setting up storage, managing deployments, sorting out performance or location of the server for best delivery to the target audience, installing packages and upgrading them, and more and more.

Each tool requires the above, and while these management tasks are individually small, they add up to quite a bit of overhead. As a result, I often have a huge TODO list for myself for random upgrades, updates, tweaks and code debt fixes for the several tools I run, and every time I have some free time I need to weigh to myself whether I want to fix up a tool that works (but needs some TLC) or build a new tool from a brand new idea.

If you're anything like me, your priorities tend towards "build this new thing"! So that list of TLC updates keeps growing and growing.

This is what eventually tipped the scales for me completely and made me a full serverless convert. Not only was I willing to migrate my tools over to Netlify, I was excited to spend the time to rewrite many of them for the new serverless architecture (and in many cases new development language). Netlify's series of out-of-the-box products eliminated 90% of the server maintenance and tooling upgrades that took up so much of my TODO list.

Here's a couple of the main benefits:

### 1. Seamless serverless deployment

You can (and I did) deploy out of GitHub in a standard hosting server, but the sheer ease-of-use Netlify offers — and the integration with CI and CD tools right out of the box with incredibly easy configuration — means I don't need to deal with all of this myself on the server side. No more doing my own deploy pipelines, no more coming into a tool that's been stagnant for a few months and realizing I need to upgrade half the environment to be able to redo deployment. No surprises. Netlify manages this for me. When you have 5 or 6 tools running that get random updates every few months, that's a huge decrease in mental overhead.

### 2. Netlify gave me HTTPS out of the box

None of my tools use private information, but privacy in general — how you behave online, not just your identity — is extremely important, and becomes even more so in the modern web. I wanted to migrate as many of my old tools to use SSL. There are free certificate services out there, and I've used them, but they all require some sort of fiddling with — a cron job to renew, some external service to rely on that occasionally needs updating, some setting-up in the server. It's not a lot, but it's there, and when you have multiple tools, it's fairly significant overhead.

\
Netlify does this whole thing for me. It offers [TLS out of the box](https://docs.netlify.com/domains-https/https-ssl/), so I don't need to worry about certificates or settings or updates. It's just there. I didn't even realize how much time and mental overhead this saved me.

### 3. On-Demand Builders made caching functions easy

Initially, caching was a bit of a challenge. As I mentioned before, my tools usually require a bit of a heavy operation in the back end, and are designed to be shared. If even one analyzed URL gets shared and becomes semi-viral, the server might work overtime and kill my performance — or, in the case of serverless architecture, will make the microservice work on every request, eating up the quotas, and risking problems if there is a large uptick of requests, in case some URL became viral.

So I set up several layers of caching on all my tools; a server-side cache with relatively low TTL, a wrapper service that provided caching based on URL and queries, and browser cache.\
\
And then Netlify announced [On-demand Builders](https://docs.netlify.com/configure-builds/on-demand-builders/), and the ability to create static assets from post-build generation (AKA — caching the microservice results). That was a game changer. This meant that not only do I have a solution to caching serverless functions (if you look this up online, that's not an entirely easy/sorted problem to solve) — I also had the opportunity to utilize this caching in the distributed serverless service that Netlify offers, which would mean I don't need several layers of caching service anymore, and I don't need to deal with solving (and handling) this myself for all my tools. Yes, please.

All of the above meant that migrating to Netlify would basically remove the majority of extra overhead from my tool development workflow. I will no longer need to deal with the "extras" of the serving of the behavior — I will be free to develop random tools to my heart’s content, reducing the size of my "TODO" maintenance list to things that are more systemic, like adding features and fixing behavior, rather than fixing environment and updating external services.

Even better, with the amount of tools I have, I can stop paying and maintaining my own hosting server — and having to upgrade and handle it, or respond to the hosting company's random upgrade/changes. Freedom!

I was free to buy random domains and use them for one-off tools to my heart's content. A web developer's dream!

### 4. Jamstack drastically simplified the architecture

Migrating from a static server to serverless microservice architecture turned out to also significantly simplify the project and architecture, and made it significantly faster to respond and easier to maintain. You can see the change in the before and after architecture diagrams:

![Traditional hosting vs. Microservices architecture with Netlify](/img/blog/traditional-hosting-architecture.jpg "Old site architecture on a traditional hosting server")



![Serverless Netlify functions diagram](/img/blog/netlify-serverless-architecture.jpg "New site architecture with serverless Netlify functions")



The most obvious difference is that in my static server, the server itself responded to all requests, and I had to set up layers of caching in order to fortify it in case of a sudden uptick. The caching strategy was a mixed one -- I used an external service for the results and static pages, and used a local file cache deeper in the operation to fortify the operation even more. Switching to serverless architecture meant I could stop dealing with Yet Another Service beyond the hosting for the cache, and ensured that the majority of the initial requests are delivered immediately without invoking the microservice or server itself.

That also meant that the new architecture forced me to be a lot more disciplined in my separation of logic. While the original architecture attempted some separation of concerns, it still had some leaked logic and interface work deeper in the process. The new architecture allowed me to completely decouple the frontend from the backend, which meant that the entire "business logic" of the operation (the analysis the tools does) was now encapsulated in a standalone package, invoked by the microservice. All the static pages and chrome of the site were then completely separated, allowing me to swap the presentation or add more contexts easily.

## Migration results: it was even better than I expected

So, after much consideration, I took the plunge and rewrote the first of my tools for serverless architecture and deployed it on Netlify. Right off the bat, I saw some bonus features I didn't realize how much would make my life easier.

[Netlify dev tools](https://www.netlify.com/products/dev/) meant I could run my site locally as if it's on Netlify — including any routes, SSL, and functions.

Migrating to Jamstack meant rewriting the hackathon-style PHP code into JavaScript and Node. Sharing the inherent (but generalized) behavior [as an NPM package](https://www.npmjs.com/package/@mooeypoo/dom-word-replacer) allowed me to be a good open source denizen and allow others to create other tools based off of mine, and made the decoupling of the logic from the UI easy to create and maintain. Even better, I could now use the new NPM package I made in other contexts than just the webpage — which meant I could expand the tool to be served in spaces like a browser extension, an Electron app or a mobile app.

The whole experience — migrating the tool, setting it up on Netlify, and developing locally and remotely using the Netlify deployment operation — was seamless, and saved me time, effort, and mental overhead.

## Next steps

So, what's next? I plan to migrate all my tools to serverless applications on Netlify, as soon as I'm able to rewrite them. This will mean modernizing them both technically and operationally (some of those tools could use some feature tweaking!) and I can get rid of my server, maintain my long-term tools better, and expand my tools' reach and performance without much worry.

Netlify — and serverless — isn't just beneficial for blogs and traditional websites. It's also a huge benefit for dynamic tools that rely on "server-side" (microservice) generation and serving. If you have tools or services like this, I highly encourage you to think about the gains you can have by migrating to a service and serverless architecture, and save yourself the mental overhead of managing the operations.
