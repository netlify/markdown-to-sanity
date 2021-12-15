---
title: Use Next.js 12 on Netlify
description: You can use the latest and greatest features of Next.js 12 on Netlify today!
authors:
  - Cassidy Williams
date: 2021-10-27
lastmod: 2021-11-16
topics:
  - news
tags:
  - Next.js
tweet: ""
format: blog
relatedposts:
  - Preview what’s new with Next.js on Netlify
  - Build your own online shop with Next.js and Shopify
seo:
  metatitle: Use Next.js 12 on Netlify
  metadescription: You can use the latest and greatest features of Next.js 12 on Netlify today!
  ogimage: /v3/img/blog/use-nextjs-12-on-netlify-today.png
---

Yesterday Next.js 12 was released, and there are so many cool features coming out!

There's a new Rust compiler, which will make builds and refreshes nice and speedy, React 18 support, native ESM support, and a few other really neat things.

You can get started with a new Next.js 12 project here to try all of these projects out of the box!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

(Clicking this button will clone a starter repo to your Git provider of choice, and deploy it instantly to Netlify)

## Middleware support and the Edge

Out of the box, Netlify supports Middleware features with `next/server`! Middleware lets you run code before a request is completed. Based on the user's incoming request, you can modify the response they receive!

To use Next.js Middleware, if you're on the latest version of Next.js, create a `_middleware.js` or `_middleware.ts` file in your `pages/` directory. It will run on all routes within the `pages/` directory, similar to how `_app.js` works in wrapping all pages in that directory. Unlike `_app.js`, it can work on nested routes as well.

For example, let's say you want a page to show up differently based on a cookie in the user's request. You can use the `NextRequest` and `NextResponse` objects like so to rewrite the route:

```js
// pages/_middleware.js

import { NextRequest, NextResponse } from 'next/server'

export function middleware(req) {
  const someCookie = req.cookies['something']
  const res = NextResponse.rewrite(`/something/${someCookie}`)

  return res
}
```

As for geolocation, that requires access to [Edge Handlers](https://www.netlify.com/products/edge/edge-handlers/), which is in beta.

## Native support out of the box on Netlify

[Next.js works out of the box on Netlify](https://www.netlify.com/with/nextjs/) with zero configuration thanks to our open source build plugin! The latest version of it is in beta, which you can read more about [here](https://www.netlify.com/blog/2021/10/25/preview-whats-new-with-next.js-on-netlify/).

## Help 'n' tips 'n' fun

If you would like to learn more about Next.js, have questions about it, or would like to build your own plugins for your projects, check out [our community site](https://www.netlify.com/community/). There you'll find our [forums](https://answers.netlify.com/) full of helpful folks, [Jamstack Explorers](https://explorers.netlify.com/) (a free course platform with courses on Next.js, serverless functions, and more), the [Netlify docs site](https://docs.netlify.com/), and moooore!
