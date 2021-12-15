---
title: Run Gatsby 4 with DSG and SSR on Netlify today
description: "Learn how to run Gatsby 4 on Netlify with new rendering modes,
  including Deferred Static Generation and Server-side Rendering. "
authors:
  - Matt Kane
date: 2021-09-16
lastmod: 2021-09-16
topics:
  - news
tags:
  - Gatsby
  - DPR
  - SSR
tweet: ""
format: blog
seo:
  ogimage: /v3/img/blog/run_gatsby_4_on_netlify.png
---
Along with the Gatsby community, we’ve been watching the news and announcements from GatsbyCamp Fall edition with starry-eyed anticipation. On our side of the Gatsbyverse, we’ve been doing the work to ensure that Gatsby 4 will work “out of the box” on Netlify.


Here’s what you need to know about [Gatsby 4](https://www.gatsbyjs.com/gatsby-4/) and how to try it out on Netlify today!

## Gatsby 4 introduces new render modes

It seems that Gatsby has broken free of its static-site generator (SSG) roots and is embracing server-side rendering. In addition to SSG, Gatsby 4 introduces two new render modes—DSG and SSR—letting you balance fresh content alongside fast build and render times.

### Static Site Generation (SSG)

[SSG](https://v4.gatsbyjs.com/docs/conceptual/rendering-options/#static-site-generation-ssg) is the original render mode used in all previous versions of Gatsby: every page is generated at build time. Pages are served super-fast, but for large numbers of pages build times can be slow.

_Best used for: your most popular pages that don’t change often._

### Deferred Static Generation (DSG)

Many sites have lots of pages that don’t get much traffic, whether that’s old blog posts or niche reference docs. But building all of those infrequently visited pages can add substantial time to the build process. That’s when, at Netlify, we tend to recommend [Distributed Persistent Rendering](https://www.netlify.com/blog/2021/04/14/distributed-persistent-rendering-a-new-jamstack-approach-for-faster-builds/), to build certain pages on the fly and cache them at the edge, dramatically reducing build times for large sites. [Deferred Static Generation (DSG)](https://v4.gatsbyjs.com/docs/conceptual/rendering-options/#deferred-static-generation-dsg) seems to be Gatsby’s implementation of this same [DPR](https://github.com/jamstack/jamstack.org/discussions/549) concept! 

Add `defer: true` to the arguments when you create the page and it will hold off on rendering until the first user requests the page. The data is still sourced at build time and saved as a snapshot, so it doesn’t need to hit any APIs when rendering and every user will see the same page. The first user may need to wait a little longer for the page, but the rendered page is then stored so future requests are speedy.
 
_Best used for: long-tail content and archives._

### Server-Side Rendering (SSR)

Some pages change often and need to always be up to date. Others need custom content for each user. For these types of pages, Gatsby’s old model of data sourcing at build time was not a great choice. In Gatsby 4, you now have a way to skip the Gatsby data layer for these rapidly-changing pages and hit your APIs at render time. Adding a getServerData function to the page enables [SSR mode](https://v4.gatsbyjs.com/docs/conceptual/rendering-options/#server-side-rendering-ssr), letting you deliver a unique page to each user.

_Best used for: custom pages, A/B testing, and pages that change often._

## Get started with Gatsby 4 on Netlify

If you’re familiar with Netlify’s [Essential Gatsby plugin](https://www.netlify.com/blog/2021/08/18/try-the-essential-gatsby-pluginnow-with-auto-install/), you know it typically installs automatically and makes Gatsby work out of the box on Netlify with zero configuration. 

To support Gatsby 4, we’ve created a separate beta version of this plugin which you can manually install. 

To find more information and all the instructions you need, [visit the README on GitHub](https://github.com/netlify/netlify-plugin-gatsby/#readme).