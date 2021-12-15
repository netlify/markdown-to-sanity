---
title: "Next.js 101: What you should know"
description: What's so exciting about Next.js? Should I be using it for my
  project? Here's a primer to help figure out if it's right for you.
authors:
  - Cassidy Williams
date: 2020-06-18
lastmod: 2021-11-16
topics:
  - tutorials
tags:
  - Next.js
tweet: ""
format: blog
relatedposts:
  - 2 Ways to Create Server-Rendered Routes Using Next.js and Netlify
  - "Gatsby 101: Features, Benefits, and Trade-Offs"
seo:
  metatitle: "Next.js 101: What Features You Should Know About"
  metadescription: Learn what's so exciting about Next.js. Help know if you should
    be using it for your project. This post dives into a variety of Next
    features like routing, API, CLI, and more. Check it out!
  ogimage: /v3/img/blog/next101.png
---
Chances are if you pay attention to the web development space, you might have been hearing quite a bit about Next.js.

Why the hype? What’s so exciting about it? Nobody knows. Just kidding. I know. And I’ll tell you.

## Why does Next.js exist? Isn’t it just bloat on top of React?

Anyone who knows me knows I love React, and I stick to vanilla React as often as I can. But! There are a couple problems that Next.js solves:

* The initial page load can be slow for the user, because all JavaScript has to load first before anything is on the page.
* You might have trouble with Search Engine Optimization (SEO) since search engines have to run and index your application to get any information.

There are two ways to solve these problems, with Server Side Rendering (SSR), or with a statically generated site. Next.js can do both!

## What features should I know about?

Next.js is pretty dang packed with a lot of nice features that will make your applications sparkle.

### Development experience nice-to-haves

Out of the box, Next.js has great things like hot code reloading and a variety of styling options (styled-jsx, CSS Modules, Sass, and moooore), TypeScript support, built-in support for environment variables, and automatic code splitting (meaning pages only load the JavaScript they need, and no more). My favorite part about having these features is that you don’t have to do anything to set them up, they just work!

### Routing

As for pages in your application, the entire routing structure is filesystem-based! Whenever you put a JavaScript file in the `pages/` directory, it is automatically a route, no configuration needed (so a `contact.js` will become `example.com/contact`). Along with this, you can include dynamic routes (as in, ones with variable names, [check out an example here](https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/?utm_source=blog&utm_medium=next101-cs&utm_campaign=devex)), and do [shallow routing](https://nextjs.org/docs/routing/shallow-routing) (meaning you can change the URL without calling data fetching methods again).

Along with regular pages, you can set up API routing as well! With the `pages/api/` directory, any file you put in there will be treated as an API endpoint.

### The API

There are a few components and hooks that Next.js provides for devs to work with.

* `next/link`: Enables client-side transitions between routes
* `next/head`: Allows developers to append elements to the `<head>` of the rendered page
* `next/router`: A hook for accessing the `router` object inside components on your application
* `next/amp`: Allows you to create [AMP pages](https://developers.google.com/amp). I bet you're AMPed up about that.

### Performance measurement

There is a built-in performance relayer that allows you to analyze and measure your page performance. It allows you to track your own custom metrics, as well as [Web Vitals](https://web.dev/vitals/).

### The CLI

The Next.js command line interface is nice and simple to use. It allows you to:

* Create optimized production builds (`next build`)
* Run the application in development mode (`next dev`)
* Run the application in production mode after building (`next start`)
* Export your Next.js app as a static site (`next export`)

### Custom configuration

If you want to customize more advanced behavior in your application, you can create a `next.config.js` file (which is really a regular Node.js module). That config file allows you to customize all sorts of things, like adding support for custom page extensions, indicating static optimization benefits, and setting up custom build directories.

## Why would I use Next.js instead of something like Gatsby?

There is an excellent CodePen here by Rachel Smith that answers that for you:

<p class="codepen" data-height="380" data-theme-id="light" data-default-tab="result" data-user="rachsmith" data-slug-hash="YweZbG" style="height: 382px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="It depends">
  <span>See the Pen <a href="https://codepen.io/rachsmith/pen/YweZbG">
  It depends</a> by Rachel Smith (<a href="https://codepen.io/rachsmith">@rachsmith</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

But for real though, it really does depend on what you want. The developer experience for Next.js is solid, and it also is for Gatsby (and it also is for several other frameworks out there). If you want a static site, you can use any of these frameworks easily. If you want something more server-render-y, Next.js has a lot of support for that (but you might need to use [next-on-netlify](https://github.com/FinnWoelm/next-on-netlify) for that; I illustrate how in [this blog post](https://www.netlify.com/blog/2020/06/10/2-ways-to-create-server-rendered-routes-using-next.js-and-netlify/?utm_source=blog&utm_medium=next101ssr-cs&utm_campaign=devex)), which might be a game-changer for you.

## I love it already! How do I get started?

Luckily, there’s already a ton of resources and examples out there in the world. If you’d like to get started using Next.js on Netlify, here’s a set of blog posts that might be useful for you:

* [Building a Markdown blog with Next 9.4 and Netlify](https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/?utm_source=blog&utm_medium=next101mdblog-cs&utm_campaign=devex)
* [2 Ways to Create Server-Rendered Routes Using Next.js and Netlify](https://www.netlify.com/blog/2020/06/10/2-ways-to-create-server-rendered-routes-using-next.js-and-netlify/?utm_source=blog&utm_medium=next101ssr-cs&utm_campaign=devex)
* [Add a Netlify-powered contact form to your Next.js site](https://www.netlify.com/blog/2020/05/26/add-a-netlify-powered-contact-form-to-your-next.js-site/?utm_source=blog&utm_medium=next101contact-cs&utm_campaign=devex)
* [Improve your SEO and Social Sharing Cards with Next.js](https://www.netlify.com/blog/2020/05/08/improve-your-seo-and-social-sharing-cards-with-next.js/?utm_source=blog&utm_medium=next101seo-cs&utm_campaign=devex)

Or, if you would rather not read and just dive into code, click the button below to deploy a Next.js site to Netlify right away and get a repository going on your chosen Git platform.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=blog&utm_medium=next101starter-cs&utm_campaign=devex)
