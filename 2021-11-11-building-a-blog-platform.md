---
title: Architecting a blogging platform on the Jamstack with On-demand Builders
description: What if you wanted to build your own platform for users to generate content? On-demand Builders may be what you're looking for!
authors:
  - Cassidy Williams
  - Phil Hawksworth
date: 2021-11-12
lastmod: 2021-11-12
topics:
  - insights
tags:
  - Jamstack
  - Terminology
  - On-demand Builders
  - Build
  - Incremental Static Generation
tweet: ""
format: blog
relatedposts:
  - "Next.js on Netlify: Now with support for On-demand Builders and
  Distributed Persistent Rendering"
  - "Faster builds for large sites on Netlify with On-demand Builders: Now in
  early access"
seo:
  metatitle: Architecting a blogging platform on the Jamstack with On-demand Builders
  metadescription: What if you wanted to build your own platform for users to generate content? On-demand Builders may be what you're looking for!
  ogimage: /v3/img/blog/bloggingplatformog.png
---

I started a small discussion with the developer experience team here at Netlify, and and transcribed it for those interested and thinking about building larger-scale services.

## The question

How would you architect a blogging platform with the Jamstack? A platform where users can:

- Log in/Log out
- Create blog posts
- Publish them on their own URLs to share (like blogplatform.com/cassidoo/mypost)

Many people think that this is where server-side rendering rules, and the Jamstack falls short.

But behold, Phil Hawksworth had some good things to say!

## Phil's response

2 parts to this question:

### 1. Can Jamstack serve user-generated and user-centric content for many users?

Yep. [app.netlify.com](https://app.netlify.com/) does this with a statically served app shell, and an API for more than 2 millions users and teams. It's both dynamic, and personalized.

But... blog posts are better not served as JSON which is rendered client-side like the content in the [app.netlify.com](https://app.netlify.com/) example. So, question 2...

### 2. Can Jamstack deliver rendered content for user-generated and user-centric content?

Not at scale until the advent of [On-demand Builders (ODB)](https://docs.netlify.com/configure-builds/on-demand-builders/) and its friends.

> On-demand Builders are a type of serverless function that speed up build times for large sites by breaking content into two categories: critical content, which is automatically compiled at build time, and deferred content, which is built upon user request. On-demand builders enables you to incrementally build your site and is designed to work with any framework.

Now, it is pretty attractive as an architecture really. It's like a slight evolution of the [Virtual Lolly](https://github.com/philhawksworth/virtual-lolly) example I have, where we add auth and rendering via ODB.

![Diagram of blog platform site](/v3/img/blog/odbplatformarch.png)

With the number of core pages being generated in the build kept to a few hundred (like, the main boilerplate and UI pages, and perhaps the most popular few hundred blog post pages), it could easily be re-deployed with a time period of a few hours so a "fresh" view of the most popular posts and related articles could be pre-generated regularly enough to be fit for purpose.

All of the above architecture is viable right now, with the exception of a listing of latest posts per user on a URL like `/{USER}/POSTS`, which would need ODB to support expiring a URL so that it updates when a new post is added.
But that view could come from a [serverless function](https://docs.netlify.com/functions/overview/) or [edge handler](https://www.netlify.com/products/edge/edge-handlers/).
The blog post pages themselves via ODB are fine. (until we add ability to modify published posts, at which point the same logic as above applies).

## Thanks, Phil! Now what?

Whew! I love learning, don't you?

If you'd like to learn more about applications of On-demand Builders, the architecture they implement, serverless, and moooore, here's some good spots to get started:

- [Faster builds for large sites on Netlify with On-demand Builders: Now in early access](https://www.netlify.com/blog/2021/04/14/faster-builds-for-large-sites-on-netlify-with-on-demand-builders-now-in-early-access/)
- [Distributed Persistent Rendering RFC](https://github.com/jamstack/jamstack.org/discussions/549)
- [Using Deferred Static Generation (DSG) with Gatsby](https://v4.gatsbyjs.com/docs/how-to/rendering-options/using-deferred-static-generation/)
- [Up and Running with Serverless Functions: Free course](https://explorers.netlify.com/learn/up-and-running-with-serverless-functions)
- [Static First: Pre-Generated JAMstack Sites with Serverless Rendering as a Fallback](https://css-tricks.com/static-first-pre-generated-jamstack-sites-with-serverless-rendering-as-a-fallback/)
