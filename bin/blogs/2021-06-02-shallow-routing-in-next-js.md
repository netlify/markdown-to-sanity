---
title: Shallow Routing in Next.js
description: Learn what Next.js shallow routing is, and how it works!
authors:
  - Cassidy Williams
date: 2021-06-02
lastmod: 2021-11-16
topics:
  - tutorials
tags:
  - Next.js
  - shallow routing
tweet: ""
format: blog
relatedposts:
  - Migrating an existing Next.js project to Netlify
  - Try the new Essential Next.js plugin, now with auto-install!
seo:
  metatitle: How to Change URLs with Shallow Routing in Next.js
  ogimage: /v3/img/blog/shallowrouting.png
  metadescription: Learn how to change your Next.js website's URL without re-running data fetching methods with shallow routing.
---



Hello!

Normally, I like to go deep with my posts, but let's not this time: Let's talk about shallow routing in Next.js!

## What the heck is shallow routing?

Shallow routing is when you change your website's URL without re-running data fetching methods again. In the case of Next.js, it means you have one page component that covers multiple URLs! This is particularly useful for adding query strings, and routes that might explain the content of your pages as they change to user behavior.

## How do I use it?

If you'd like to use shallow routing in your applications, you don't do shallow routing with the `<Link>` component built into the framework, which is what you might expect. Use the built-in `useRouter` hook, and add `{ shallow: true }` to your `router.push` commands, like so!

```js

useEffect(() => {
  router.push('/some-other-route', undefined, { shallow: true })
}, [someVariable])

```

Wanna see it in action? In [this Choose Your Own Adventure](https://next-adventure.netlify.app/) app, you can navigate through the story **without** querying the database multiple times for new characters to be a part of it!
The code for the routing [is here](https://github.com/cassidoo/next-adventure/blob/master/pages/s/%5B...story%5D.js#L21-L23), and you can see how the entire project was built [in this demo video](https://www.youtube.com/watch?v=mMU-j0WoTCs&t=3020s).

## Can I do this myself?

Heck yeah you can! Here's a starter project for ya to get building:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=blog&utm_medium=shallownext-cs&utm_campaign=devex-cs)

(Clicking this button will deploy a Next.js starter project to Netlify, and clone it to your chosen Git provider)

