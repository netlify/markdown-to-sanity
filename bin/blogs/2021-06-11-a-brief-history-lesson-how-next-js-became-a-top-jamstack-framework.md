---
title: "How Next.js Became a Top Jamstack Framework"
description: "This is an excerpt from our new e-book, How to Deploy Next.js on
  the Jamstack: The Definitive Guide."
authors:
  - Charlotte Dillon
date: 2021-06-14
lastmod: 2021-06-11
topics:
  - insights
tags:
  - next
  - nextjs
  - jamstack
  - guide
tweet: ""
format: blog
relatedposts:
  - Try the new Essential Next.js plugin, now with auto-install!
  - How to Deploy Next.js Sites to Netlify
seo:
  metatitle: How to Deploy Next.js on the Jamstack | Guide Excerpt
  metadescription: 'Learn how to get the most out of Next.js and the Jamstack in
    this free ebook, "How to Deploy Next.js on the Jamstack: The Definitive
    Guide."  '
  ogimage: /img/blog/enterprise-next.js-black-1200-x-635.png
---
*This is an excerpt from our new e-book, [How to Deploy Next.js on the Jamstack: The Definitive Guide](https://www.netlify.com/resources/guides/next-js-on-the-jamstack/).*

Next.js has become one of the most popular frameworks for building React apps. It’s no surprise, then, that we’re seeing more and more Jamstack applications built on Next.js.

If you’re a long-time Next.js user and had read those sentences in 2016, you’d probably have shaken your head in disbelief.

That’s because when Next.js initially came onto the scene, it wasn’t very compatible with a core Jamstack principle: prerendering statically generated sites. Prerendering demands that the entire frontend is prebuilt into highly optimized static pages and assets during a build process. It’s what makes Jamstack applications speedy and secure, since prebuilt sites can be served directly from a CDN, reducing the cost, complexity, and risk of dynamic servers as critical infrastructure. With this pattern, any server-side processes are abstracted to microservices—everything runs in the browser. Next.js could be used for Jamstack applications, but it wasn’t a very popular use case.

Next.js brought server-side rendering to React, which is primarily a client-side rendering library. So initially, Next.js was exciting because it did the opposite—it runs the initial view on the server. Early Next.js users, first and foremost, were excited because rendering components on the server side in React, leads to better performance for users, and massive SEO improvements over client-side rendered applications.

These two data-fetching strategies—the Jamstack’s preferred method of static site generation (SSG) and Next.js’ method of server side rendering (SSR), are seemingly opposite approaches to building applications.

But in March 2020, Next.js 9.3 introduced better support for building static sites as well. So now if you were to use Next.js, you could build both a server-side rendering application and a static site generated application and get the best of both worlds. Finally prerender, one of the core principles behind the Jamstack. And as of 2021, Next.js has introduced support for hybrid models, allowing you to SSG when you want to and SSR when you want to.

**So: what does the hybrid model mean for building Jamstack applications on Next.js? Can we get the benefits of the Jamstack and the benefits of Next.js?**

In short, *yes.* That said, there’s a bunch of different ways to approach building a Jamstack application with Next.js, with different tradeoffs to keep in mind. In [How to Deploy Next.js on the Jamstack: The Definitive Guide](https://www.netlify.com/resources/guides/next-js-on-the-jamstack/), we cover important aspects of Next.js for Jamstack developers, and provide resources (and click-to-deploy starter projects) that’ll help you get the most of Next.js and the Jamstack.

<p style="text-align:center"><a href="https://www.netlify.com/resources/guides/next-js-on-the-jamstack/" class="button">Get the Next.js Guide</a></p>
