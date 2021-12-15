---
title: Automate your web workflows with the JAMstack
description: >-
  The JAMstack isn’t really a new concept. Developers have been building sites
  that utilize JS, APIs and Markup in some shape or form years before the term
  had even been formalized. Regardless, the JAMstack’s steady rise in popularity
  over the last few years points to a resurgence of static sites, and the desire
  for a simpler way of architecting applications. We dig into the benefits of
  this approach that make it so popular.
authors:
  - Divya Tagtachian
date: '2020-04-01'
lastmod: '2020-04-01'
topics:
  - tutorials
tags:
  - Jamstack
tweet: ''
format: blog
seo:
  metadescription: >-
    Explore this post to learn about core aspects that make working with the
    JAMstack so delightful. JAMstack is a modern way to build apps that are
    fast, and secure.
  metatitle: 'JAMstack Build Automation, Event Triggers, & Serverless Functions'
  ogimage: /v3/img/blog/jamstackflag.png
---
Configuration is often more work than it's worth. As frontend developers, focused on the front end, configuring builds adds an extra layer of cognitive burden and can take away from completing the primary task at hand. The JAMstack seeks to abstract configuration in favor of a more streamlined workflow where complexity can be built in piecemeal or even outsourced entirely to a separate [microservice](https://www.netlify.com/blog/2019/11/18/what-are-microservices/). Building in this manner can cause unneeded complexity in applications in a more conscientious fashion and enables them to better reason about logic in their applications.

To highlight what makes the JAMstack so easily configurable compared to other frameworks for building sites, we’ll examine a few key points: namely Build Automation, Event Triggers, APIs and Serverless Functions.

## Build Automation
Build automation is a key component of what makes the JAMstack architecture so compelling. Many JAMstack setups make use of modern Static Site Generators like [Hugo](https://gohugo.io/) and [11ty](https://www.11ty.dev/) and Frontend frameworks like React and [Vue](https://www.netlify.com/with/vue/) to speed up development. These frameworks not only help scaffold a project, they also provide the necessary tools to create production ready code. Deployment platforms like Netlify further streamline this workflow by [automating the build and deploy process](https://www.netlify.com/products/build/) so code can be shipped with little to no opportunity for error. To learn more about what’s possible with build automation, check out [this post where Phil Hawksworth walks you through how he built an auto-updating clock with Netlify](https://www.netlify.com/blog/2018/08/02/exploring-the-potential-of-friction-free-deployments/?utm_source=github&utm_medium=friction_free_deploys-div&utm_campaign=devex)


## Event Triggers/Webhooks
With an automated workflow, comes the ability to hook into events as they happen like whether a deploy failed or succeeded. This event-driven architecture is made possible with webhooks, which are simple ways to connect events and services that otherwise have no knowledge of one another. [IFTTT](https://ifttt.com/) is an example of such an event triggered workflow where changes that occur within web services like Gmail, and Instagram can in turn trigger changes to other services. 

An automated build process where updates to a Git repository sets off the build and deploy process, is another instance of webhooks in action. The popularity of this event-driven model has led to a rich, and fast growing ecosystem. Multiple web services now offer the ability to register their service as a webhook to get notified when events occur. This form of an event-driven model to automate tasks means static sites are a lot less “static” than we might once have expected. To learn more about how you can use webhooks to trigger new builds on Netlify, check out the [Build hooks docs](https://docs.netlify.com/configure-builds/build-hooks/?utm_source=github&utm_medium=hooks_docs-div&utm_campaign=devex)

## Serverless Functions
In direct contrast to traditional monolithic set ups that have to prematurely optimize for scale, the JAMstack is designed to scale only when needed. It does this by shirking infrastructure that needs to be available at all times with one that only runs when needed. [Serverless functions](https://www.netlify.com/products/functions/) make this workflow possible by offering the ability to invoke functions only when necessary. This coupled with a static infrastructure means that sites can be served quickly without the extra latency of a full site rebuild. Moving away from servers has the added benefit of significantly reduced cost and energy since servers no longer need to be provisioned and kept alive prematurely. To learn more about serverless functions and how you can take advantage of them in your sites, check out this post I wrote about [connecting your netlify forms to firebase via Netlify Functions](https://www.netlify.com/blog/2018/09/14/forms-and-functions/?utm_source=github&utm_medium=forms-div&utm_campaign=devex)

## Toast to JAMstack 
The formalization of the term [JAMstack](http://jamstack.org/) has brought with it a resurgence of static sites as an architecture for building fast and secure sites. Though complex, dynamic sites continue to be popular,  the JAMstack’s promise of simplicity and abstraction is undeniably appealing. Since its introduction 5 years ago, the JAMstack ecosystem has grown rapidly and we’re beginning to see widespread adoption in the [enterprise space](https://www.netlify.com/enterprise/). If you’re keen on learning more, be sure to check out [these handy Static Site Starter templates](https://www.staticgen.com/) to get started on creating your own JAMstack site. We look forward to see what you’ll build!