---
title: "Next.js on Netlify: Now with support for On-demand Builders and
  Distributed Persistent Rendering"
description: "Render content on demand without giving up the benefits of the
  Jamstack! Today, we’re announcing a beta release of our Essential Next.js
  plugin to support On-demand Builders, helping you build large Next sites
  faster. "
authors:
  - Netlify
date: 2021-04-22
lastmod: 2021-04-21
topics:
  - news
tags:
  - next
  - on-demand builders
  - build
  - incremental static generation
tweet: ""
format: blog
relatedposts:
  - Try the new Essential Next.js plugin, now with auto-install!
  - "Faster builds for large sites on Netlify with On-demand Builders: Now in
    early access"
seo:
  metadescription: "Try out Netlify’s new On-demand Builders for a better Next.js
    experience, and render content on demand without losing the benefits of the
    Jamstack. "
  metatitle: How to Shorten Build Times for Large Next.js Jamstack Sites
  ogimage: /img/blog/next.js-on-netlify-2.png
---
Last week, we [introduced an RFC](https://github.com/jamstack/jamstack.org/discussions/549) for an architectural concept that we think is an exciting step forward for the Jamstack: Distributed Persistent Rendering (DPR). Alongside the RFC, we also released a new feature, [On-demand Builders](https://www.netlify.com/blog/2021/04/14/faster-builds-for-large-sites-on-netlify-with-on-demand-builders-now-in-early-access/), that helps us take the first step toward achieving DPR. Today, we’re announcing a beta release of our Essential Next.js plugin that introduces support for On-demand Builders in your Next.js site automatically!



Starting today, you can try out Netlify’s new On-demand Builders for an even better Next.js experience. We introduced automatic support for dynamic page rendering (commonly referred to as SSR or ISR) with the launch of the Essential Next.js plugin, and today we’re making the experience even better with the introduction of DPR for `next/image` and pages with `fallback: true`.



## Shorten build times and render content on demand without giving up the benefits of the Jamstack

On-demand Builders allow you to build a page on demand once, then serve the cached result to subsequent requests. This is similar to how server-based applications work, but without the complexity of configuring Varnish or managing caching rules. Your deployments retain the straightforward deployment strategy and easy rollbacks made possible by adopting a Jamstack architecture — all while gaining a powerful new tool for deploying large sites faster.

### Important differences between ISR and DPR

Incremental Static Regeneration (ISR) relies on a `revalidate` flag to update content on a set time schedule. On-demand Builders do not support the `revalidate` flag. We’re working on solutions to support revalidation that don’t reintroduce complexity and pitfalls that the Jamstack architecture removes through atomic, immutable deploys.

Keep an eye out for updates, though. 👀

## Try it out today!

To enable On-demand Builders for your Next.js site, install the beta version of the Essential Next.js plugin in your site:


```

npm install @netlify/plugin-nextjs@experimental-odb

```


We can’t wait to see what you build with Next.js on Netlify!
