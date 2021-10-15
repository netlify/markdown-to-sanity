---
title: Enabling AMP in your Next.js projects
description: Want to use AMP in your Next.js projects? Want to know more about
  what AMP is? Learn both now!
authors:
  - Cassidy Williams
date: 2020-12-19
lastmod: 2020-12-19
topics:
  - tutorials
tags:
  - nextjs
  - blogvent
  - amp
tweet: ""
format: blog
relatedposts:
  - "Next.js: Should I use SSR or SSG?"
  - |
    How to Deploy Next.js Sites to Netlify
seo:
  metatitle: Enabling AMP in your Next.js projects
  metadescription: Want to use AMP in your Next.js projects? Want to know more
    about what AMP is? Learn both now!
  ogimage: /img/blog/blogvent19.png
---
Welcome to Blogvent, day 19!

Did you know that Next.js supports AMP out of the box? Here's how you can build with it!

## What is AMP?
[AMP](https://amp.dev/) stands for Accelerated Mobile Pages. It's an open source framework developed originally by Google, optimized for mobile web browsing, to help webpages load faster. It works by:

- Executing AMP JavaScript asynchronously
- Statically sizing resources like images, ads, and iframes
- Stopping extensions from blocking page rendering
- Only allowing third-party JavaScript in sandboxed framers
- Only allowing inline CSS + minimizing style recalculations
- Only running GPU-accelerated animations
- Controlling all resource downloads
- Using the [preconnect API](https://www.w3.org/TR/resource-hints/#dfn-preconnect) to pre-render a page before a user navigates to it

## How do I add it to my Next.js application?
Add the following line to your page component:
```js
export const config = { amp: true }
```

This enables AMP for your page! That `amp` property can be either `true` or `'hybrid'`. When it's `true`, that means your page will be AMP-only, and if it's `'hybrid'` the page will have both an AMP version and an HTML version.

### AMP-only pages
AMP-only pages will have no React code run client-side, and [AMP Optimizer](https://github.com/ampproject/amp-toolbox/tree/master/packages/optimizer) is automatically applied to it.

### Hybrid AMP
In this mode, you can use the `useAmp()` hook by importing it at the top of your page:
```js
// at the top
import { useAmp } from 'next/amp'

// in your component
let isAmp = useAmp() // returns true or false
```

With this, you can return AMP components or HTML based on if `isAmp` is true or false.

As for the AMP components you can use on the page, in both modes, they're built in! Use a component from the [AMP Component Catalogue](https://amp.dev/documentation/components/) and Next.js will detect it and automatically import it for you.

## Caveats
You do get all the benefits mentioned above when using AMP in your Next.js projects, but there are two things you can't use currently:

- CSS Modules - You can only use CSS-in-JS libraries with AMP pages.
- TypeScript - AMP doesn't have built in types for TypeScript yet.

These things are actively being worked on at the time of writing, but as of right now you cannot use these.

## I'd like to build something with Next.js + AMP!
Heck yeah! Here's a starter application to try this out yourself:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-starter&utm_source=blog&utm_medium=nextstarteramp-cs&utm_campaign=devex)

(Clicking this button will deploy a Next.js starter project to Netlify, and clone it to your chosen Git provider)

You can also [read more about AMP here](https://amp.dev/)!
