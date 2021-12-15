---
title: Three Architectural Approaches for Headless eCommerce
description: Learn about eventual consistency and interoperability in Headless Commerce. Which architectural approach makes the most sense for your company?
authors:
  - Kalah Siegel
date: 2021-06-04
lastmod: 2021-06-03
topics:
  - insights
tags:
  - headless commerce
  - microservices
  - Architecture
  - Nacelle
  - E-commerce
  - E-commerce
tweet: ""
format: blog
seo:
  metatitle: "Three architectural approaches for eCommerce on the Jamstack "
  metadescription: "Adopting microservices? Learn which architectural makes the most sense for your company, and how eventual consistency and interoperability affect Headless Commerce architectures."
---
*This post originally appeared on the [Nacelle blog](https://nacelle.com/?utm_source=netlify&utm_medium=partner&utm_campaign=hcsblogpost).*

*\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\__*

At this year's [Headless Commerce Summit](https://headlesscommercesummit.com/), Nacelle [CEO Brian Anderson](https://nacelle.com/blog/lessons-from-over-20-shopify-plus-headless-commerce-builds?utm_source=netlify&utm_medium=partner&utm_campaign=hcsblogpost) and [Senior Sales Engineer Devin Saxon](https://nacelle.com/blog/5-common-headless-commerce-questions-answered?utm_source=netlify&utm_medium=partner&utm_campaign=hcsblogpost) hosted a conversation about **Eventual Consistency and Interoperability in Headless Commerce**. Here are some highlights and the recording, in case you missed the big show.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Qg6h-r9XgSk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Microservice vs. Monolithic eCommerce Architecture

Before talking about the best way to approach your headless build, you first need to set the stage by discussing microservice vs. monolithic architecture. Monolithic architecture is often synonymous with the traditional approach to building eCommerce webstores.

Monolithic systems are easy to get started with, proven to scale, and have ACID (atomicity, consistency, isolation, durability) guarantees. Monolithic architecture is especially popular with newer D2C merchants who can leverage this technology to compete with larger companies at a fair price with relative ease.

One of the most celebrated monolithic features is data consistency. If you save an object in one place, it’s updated throughout your monolithic system almost instantly.

However, there are some drawbacks to monolithic systems too. It can become very expensive to scale with a monolithic system, and it’s not ideal for bespoke services and [incorporating best-of-breed tools](https://nacelle.com/blog/is-a-best-of-breed-tech-stack-cost-effective?utm_source=netlify&utm_medium=partner&utm_campaign=hcsblogpost) from different vendors. It can also be difficult to push changes and become a hindrance to developers from a maintenance perspective.

Many merchants reach a point—especially if they’re ready to consider a headless commerce solution—where it’s time to make the switch to microservices, simply because it’s more conducive to their goals and engineering needs. Microservice architecture allows for tech stack decoupling which promotes best-of-breed strategy, the flexibility to quickly change tools, and the ability to tap into different vendors and datasets.

Microservice drawbacks include interoperability concerns, eventual consistency issues, and coming to terms with the fact that not all APIs are created equal, and poorly designed APIs and rate limits will need to be accounted for.

For example, because each microservice has its own database, an update in one system might not immediately be reflected in another (eventual consistency). This could cause major problems if there’s a discrepancy between, say, inventory or price changes on the backend and what’s being displayed to shoppers on the frontend.

The right headless commerce solution should address these microservices concerns and make them more tolerable.

## Three Ways To Go Headless

Adopting a headless commerce solution is not a one-size-fits-all answer and every brand is going to have to consider their unique needs in order to pick the best approach. In the Nacelle Discussion Lounge, Anderson and Saxon discussed three common ways to go headless and the appeal of each.

They ranked the solutions against a scorecard five categories: flexibility, data consistency, maintainability, ease of use, and cost—including both monetary cost and the cost of developer resources.

### Approach #1: Daisy Chain

![Daisy chain approach to building a headless commerce solution](https://images.ctfassets.net/yt02w0x62uoi/3pqkOHmo5Dcv7utGC7zBu8/9b93586757eeb48a67f2a02b255b8a1b/Daisy_chain.jpg)

The “Daisy Chain” approach to a headless commerce build seems simple on its surface. The Product Information Management (PIM) tool feeds into the CMS, which feeds directly into a PWA. In this instance, the CMS is acting as the layer that pairs product and content.

This setup leaves room for eventual consistency issues because the CMS is being treated as a middle layer and a backend system. The PIM and CMS need to be aligned, and the CMS and PWA need to be aligned. This creates two points in the “chain” primed for data flow bottlenecks as information tries to make its way to the frontend. Both infrastructures will always need to be on time and in sync.

![Daisy chain approach to building a headless commerce solution with PIM tied directly to PWA](https://images.ctfassets.net/yt02w0x62uoi/7vtBWmQ5gIOGygclV6YPVT/b516b092f6adfd5451ebd343a266ea0f/Daisy_chain2.jpg)

A workaround might be to tie the PIM directly into the PWA as well, but this creates more maintenance work for development teams and it’s likely not an efficient answer.

#### Approach Scorecard:

![Daisy chain headless commerce build rating](https://images.ctfassets.net/yt02w0x62uoi/5muKNuribEj8lREKsOQX15/60676ed1e741e5ee974caddcb88ece07/daisy_chain-rating.jpg)

- - -

### Approach #2: PIM + CMS + OMS + PWA

![PIM, CMS, OMS, PWA headless commerce build model](https://images.ctfassets.net/yt02w0x62uoi/4lBPmvCeumWagypdZHPzBF/0376e60525dda6f5643c1ad33461476c/PIM-_-CMS-_-OMS-_-PWA.jpg)

In this model, all of the backend systems (PIM, CMS, OMS, CRM, etc.) communicate independently and directly to the frontend. Unfortunately, now the frontend developer, or developers, are buried, managing several APIs and the accompanying rate limits, the CMS, and how the infrastructure works with every individual system.

It requires a breadth of knowledge and maintenance hours to effectively oversee the “spaghetti string” code that this scenario creates, because everything needs to pair with each other in addition to the frontend.

Plus, the opportunity for data flow bottlenecks are many. If someone wants to make an update to one system, it might not be reflected everywhere else for hours or even days. It’s flexible, because you can add as many systems as you need, but it’s astronomically expensive when you consider the drastic maintenance costs and pressure it puts on frontend developers, who should really just be focused on the frontend build.

#### Approach Scorecard:

![PIM, CMS, OMS, PWA headless commerce build rating](https://images.ctfassets.net/yt02w0x62uoi/19vkQMyAI5PQnp3Wx84n8r/275cdbad4f6af1d5d1cd8476cc8eff5e/2---PIM-_-CMS-_-OMS-_-PWA-rating-.jpg)

- - -

### Approach #3: Build With Abstraction Layer and Event Driven Core

![Headless commerce platform with a layer of abstraction between the frontend and backend](https://images.ctfassets.net/yt02w0x62uoi/47WTANg9CuhO1hRz0npx4G/bbcb7fa6a92bef6c477eeac49a3c8eab/Asbtraction-Layer.jpg)

Nacelle’s stance is that an abstraction layer and event-driven core is the best approach to headless commerce, and it’s how our headless commerce platform is built.

By using a layer of abstraction that sits between your backend systems and your frontend, you can account for interoperability. The abstraction layer does the work of ingesting data, and in the case of Nacelle’s platform, it delivers one robust API that can handle your pre-rendering needs on the frontend.

Any updates are indexed in the layer, and because events stored in memory are used as the source of truth, it can quickly rebuild anything that’s lost or out of sync. It’s a 5/5 for flexibility because there’s no stress on the frontend developer, it removes technical debt and spaghetti string code, and everything is indexed within the layer.

It is a more costly option up front, but maintenance considerations and the ability to have a truly flexible best-of-breed tech stack ultimately outweigh any upfront costs.

#### Approach Scorecard:

![Headless commerce build with an abstraction layer rating ](https://images.ctfassets.net/yt02w0x62uoi/AOh2ocCR63NywqCbQlmyu/f65d854a8c1dae36a6b4a53efbb6ee0c/3---Build-with-Abstraction-Layer-_Event-Driven-Core_-rating.jpg)

Ready to build a sandbox? Start [building on Nacelle today](http://dashboard.getnacelle.com/create-account?utm_source=netlify&utm_medium=partner&utm_campaign=hcsblogpost).
