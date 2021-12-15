---
title: Try the new Essential Next.js plugin, now with auto-install!
description: It's now easier to build Next.js on Netlify than ever before, with
  auto-installation of our latest and greatest plugin.
authors:
  - Cassidy Williams
date: 2021-03-16
lastmod: 2021-11-16
topics:
  - news
tags:
  - Next.js
  - Build Plugins
tweet: ""
format: blog
relatedposts:
  - "Next.js 101: What you should know"
  - |
    How to Deploy Next.js Sites to Netlify
seo:
  metatitle: Try the new Essential Next.js plugin, now with auto-install!
  metadescription: It's now easier to build Next.js on Netlify than ever before,
    with auto-installation of our latest and greatest plugin.
  ogimage: /v3/img/blog/nextessential.png
---



Chances are, if you've used Next.js on Netlify, you've encountered either the `next-on-netlify` npm package, or the Next.js Build Plugin to enable some of its Node-driven features.

Today, we're happy to announce that the two have become one, to form the **Essential Next.js Plugin**!

With this plugin, you enable features like:

* Support for `getServerSideProps` and `getStaticProps` with fallbacks (via [Netlify Functions](https://www.netlify.com/products/functions/?utm_source=blog&utm_medium=functionsnext-cs&utm_campaign=devex-cs))
* Preview Mode
* Internationalized Routing
* [Incremental Static Regeneration](https://www.netlify.com/blog/2021/03/08/incremental-static-regeneration-its-benefits-and-its-flaws/?utm_source=blog&utm_medium=isrnext-cs&utm_campaign=devex-cs)
* and more!

And, that's not all, we now *auto-detect* when you use Next.js on Netlify, so **you don't have to manually install anything** to get all of the features you love in Next.js working on the platform. 

## What do I do next?

Ha! That's a pun.
What does this mean for you if you already use the old version of the plugin, or the `next-on-netlify` package? Technically, you don't have to do anything, this won't break your current projects. But, if you want to use the latest and greatest changes:

* You can go ahead and uninstall the package, and remove it from your netlify.toml.
* If you have a `next.config.json`, make sure to set `target: "serverless"`, but if you don't have anything else in that file, you can remove it.
* Install the new plugin either in the UI or [manually in your netlify.toml](https://github.com/netlify/netlify-plugin-nextjs#installation-and-configuration):

![Install the Essential Next.js plugin](/v3/img/blog/essentialnext.png "Install the Essential Next.js plugin")

For a new site deployed with Next.js, Netlify will automatically install this plugin.

This means that **you don't have to do anything** — just build and deploy your site to Netlify as usual and we'll handle the rest.

If you'd like to learn more or get involved:

* [Check out the docs](https://docs.netlify.com/configure-builds/common-configurations/next-js/) if you need more guidance.
* [File any issues you see on the plugin repo](https://github.com/netlify/netlify-plugin-nextjs), or make a PR if you see improvements that can be made!
* Got a business using Next.js? [Check out our press release](https://www.netlify.com/press/netlify-announces-next-js-integration-enabling-next-js-10-for-enterprise-teams/?utm_source=blog&utm_medium=press-cs&utm_campaign=devex-cs) for more information about how our collaboration and security tools can make your apps even better.

You can get started with a new Next.js project here!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=blog&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

(Clicking this button will clone a starter repo to your Git provider of choice, and deploy it instantly to Netlify)

