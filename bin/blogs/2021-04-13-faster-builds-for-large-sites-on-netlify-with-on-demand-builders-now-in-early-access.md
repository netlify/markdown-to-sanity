---
title: "Faster builds for large sites on Netlify with On-demand Builders: Now in
  early access"
description: On-demand Builders improve build times for large sites on Netlify.
  They help the Jamstack support larger websites and faster development
  cycles across any JavaScript framework.
authors:
  - Asavari Tayal
date: 2021-04-14
lastmod: 2021-04-13
topics:
  - news
tags:
  - Build
  - Incremental Static Regeneration
  - Next
  - Nuxt
  - Eleventy
  - Jamstack
tweet: ""
format: blog
relatedposts:
  - "Distributed Persistent Rendering: A new Jamstack approach for faster builds"
seo:
  metatitle: "Get Faster Builds for Large Sites on Netlify: On-demand Builders"
  metadescription: Learn how On-demand Builders improve build times for large
    sites on Netlify. They help the Jamstack support larger websites and more
    dynamic apps across any JavaScript framework.
  ogimage: /img/blog/odb-early-access-1-.png
---
Today we’re excited to announce On-demand Builders, a new solution to improve build times for large sites on Netlify. Along with the proposal for [Distributed Persistent Rendering (DPR)](https://www.netlify.com/blog/2021/04/14/distributed-persistent-rendering-a-new-jamstack-approach-for-faster-builds/), this release represents the first step forward in a significant evolution of the [Jamstack architecture](https://www.netlify.com/jamstack/) to support larger websites and faster development cycles—across any JavaScript framework.

## Reducing build times so teams can iterate more quickly

As Jamstack architecture continues to grow in popularity, we’re seeing developers build increasingly large websites on Netlify. One of the reasons Jamstack is so popular is how well it delivers performance benefits at scale. When you pre-render as much content as possible up front and serve that content via a global multi-redundant edge network, your site visitors get fast page load times and great experiences. 

However, when you put hundreds of thousands of assets through a sequential build process, things start to get a little dicey. The pre-rendering step becomes a bottleneck, leaving development teams waiting around for builds to complete. Ultimately, this slows down the speed of iteration—and nobody wants that.

So, how can developers with huge sites get around long build times?

Until now, if you wanted to significantly reduce your build time, you could either break your site into several microsites (sharding) or you could rely on framework-specific caching constructs. Today we’re introducing **On-demand Builders**, a brand new approach that enables you to incrementally build your site and is designed to work with any framework.

With On-demand Builders you can split your site’s assets into two groups:

* **Critical content**, that is automatically compiled and deployed as part of your traditional Netlify build process.
* **Deferred content**, built using an on-demand builder when a site visitor requests it for the first time. This content is then cached at the edge, so it’s available to load more quickly for subsequent visitors. 

On-demand Builders are currently available in early access with documented constraints. We’re enthusiastic about the future of this solution, here’s why: 

First, shorter builds mean your whole team can be more productive and iterate faster.

Second, On-demand Builders are flexible enough to work across multiple frameworks. We’ve already proven the benefits with Eleventy and are looking forward to seeing examples from the Nuxt community.

Last but not least, we’re excited about what On-demand Builders mean for Next.js on Netlify. In the past, Netlify has supported Incremental Static Regeneration (ISR) for Next.js, but there were notable performance trade-offs. With On-demand Builders, Next.js developers can now take advantage of caching for better performance.

## Example use cases

Netlify’s new On-demand Builders are ideal for web projects with many pages or assets. Some examples include:

* E-commerce sites
* Publishing or media sites
* Dynamic applications that generate content based on the user request, such as customized images or pages

For example, if you’re deploying a large e-commerce site with thousands of products, you may choose to deploy your critical pages like your homepage, campaign pages, and most popular categories immediately and then allow product detail pages for less-frequently visited categories to be built upon request. 

## How On-demand Builders work today

On-demand Builders are configured using Netlify’s serverless functions. You can write a function that generates and returns the desired content, and pass this function as a parameter to the `builder()` method provided as part of the `@netlify/functions` package.

```javascript
const { builder } = require('@netlify/functions');
async function myfunction(event, context) {
   // logic to generate the required content
}

exports.handler = builder(myfunction);
```

Similar to Netlify Functions, the builder will automatically receive an endpoint relative to the base URL of your site. This endpoint can be called directly or by redirecting traffic from another URL. The first call to the builder will invoke the function and return the generated page. All subsequent calls will return the cached page until the next refresh.

[Learn more and see code samples in the docs](https://docs.netlify.com/configure-builds/on-demand-builders/).

## Constraints and caveats

While we’re encouraged about the possibilities with On-demand Builders, we also want you to be aware of some constraints with the current implementation while it’s in early access.

### Caching specific to the edge node

Currently, the cached response for a specific builder invocation is local to the edge node that served the request. That means the performance benefits of caching only apply to other site visitors from the same geographic region. And, it’s possible that site visitors from different parts of the globe see different versions of a page if the source data changes between multiple builder executions.

### Dropped cache

If the builder is not invoked for an extended period of time, its response may be cleared from the cache. When this happens, the builder will execute again upon the next request. 

Our long-term plan for On-demand Builders is to persist the responses globally to achieve an eventually consistent state for your site — but we’re not there yet. 

## Try On-demand Builders today!

Today’s release aims to address the pressing issues facing developers building large sites. It is our first step towards realizing the full potential of [Distributed Persistent Rendering](https://www.netlify.com/blog/2021/04/14/distributed-persistent-rendering-a-new-jamstack-approach-for-faster-builds/).

[Review the docs](https://docs.netlify.com/configure-builds/on-demand-builders/) and give new On-demand Builders a try today!
