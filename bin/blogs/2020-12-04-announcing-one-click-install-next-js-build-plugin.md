---
title: Announcing one-click install Next.js Build Plugin on Netlify
description: Today we're excited to bring you a build plugin for deploying
  Next.js on Netlify, making it faster and easier than ever before
  to get your sites deployed.
authors:
  - Cassidy Williams
date: 2020-12-07
lastmod: 2021-11-16
topics:
  - news
tags:
  - Next.js
tweet: ""
format: blog
relatedposts:
  - |
    How to Deploy Next.js Sites to Netlify
  - "Next.js: Should I use SSR or SSG?"
seo:
  ogimage: /v3/img/blog/buildpluginog.png
---



Hey devs!

We are super excited to share with you our latest [build plugin](https://www.netlify.com/products/build/plugins/) in the Netlify ecosystem, to make it even easier to deploy Next.js apps onto Netlify!

You may be familiar with our project [next-on-netlify](https://github.com/netlify/next-on-netlify), a utility for enabling server-side rendering (and other functionality) in Next.js on Netlify. It wraps your application in a tiny compatibility layer, so that pages can use Netlify Functions to be server-side rendered. To install `next-on-netlify`, it takes 3 steps.

We thought 3 steps was just too much.

## Introducing our one-click install Next.js build plugin!

With this new build plugin, you can use the features of Next.js that you know and love that normally only work with apps that are run with a Node server, without any code changes on your end. This is including, but not limited to:

* Server-side rendering
* Incremental Static Regeneration compatibility (via SSRed routes)
* Preview Mode
* And moooore!

## Wow! How do I get this?

You can install it from [the Netlify UI via the Plugins directory](https://app.netlify.com/plugins/@netlify/plugin-nextjs/install):

![Next.js Build Plugin in the UI](/v3/img/blog/nextplugin.png "Next.js Build Plugin in the UI")


Or you can install it in your `netlify.toml`:

```
...

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

## Wow! How does it work?

Under the hood, the plugin uses the `next-on-netlify` package to copy files from the `.next` directory to where Netlify expects them, and uses Netlify Functions to support server-side rendering any routes (both pages and API routes).

For Preview Mode, we use cookie-based redirects to allow developers to enter and exit Preview Mode for routes configured in their app.

For Incremental Static Regeneration, we currently server-side render those routes. We have some development in the works for caching those pages and including fallback pages, as well. When the additional functionality is added, you won't have to make any code changes to see the benefits.

## Can I see more?

Of course you can!

The Netlify team will be at [Reactathon](https://www.reactathon.com/speakers/profile/cassidy-williams) this next week where you can ask as many questions as your heart desires.

If you'd like to learn how to write Next.js, we have a Mission just for you on [Jamstack Explorers](https://explorers.netlify.com/learn/nextjs?utm_source=blog&utm_medium=nextjsmission-cs&utm_campaign=devex)!

If you'd like to learn more, here are some blog posts to get you started:

* [How to Deploy Next.js Sites to Netlify](https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/)
* [Next.js: Should I use SSR or SSG?](https://www.netlify.com/blog/2020/12/02/next.js-should-i-use-ssr-or-ssg/)
* [What is React Fast Refresh?](https://www.netlify.com/blog/2020/12/03/what-is-react-fast-refresh/)
* [A Spooky Adventure at Next.js Conf](https://www.netlify.com/blog/2020/10/27/a-spooky-adventure-at-next.js-conf/)
* [Preview Mode for Next.js fully supported on Netlify](https://www.netlify.com/blog/2020/10/27/preview-mode-for-next.js-now-fully-supported-on-netlify/)

Ready to try it for yourself? Click the button below to deploy a starter project for Next.js:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=blog&utm_medium=nextstarter-cs&utm_campaign=devex)

(This clones [a starter project for Next.js](https://github.com/netlify-templates/next-netlify-starter) to your GitHub and deploys it to Netlify)

Go get coding!

