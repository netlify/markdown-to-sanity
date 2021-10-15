---
title: 2 Ways to Create Server-Rendered Routes Using Next.js and Netlify
description: Using the next-on-netlify package, you can use some of Next.js's
  server-side routing features on Netlify with ease.
authors:
  - Cassidy Williams
date: 2020-06-10
lastmod: 2021-03-17
topics:
  - tutorials
tags:
  - nextjs
  - server side rendering
tweet: ""
format: blog
relatedposts:
  - Handy new features in Next.js 9.4
  - "Dos maneras de crear rutas generadas por el servidor mediante Next.js y Netlify"
seo:
  metatitle: 2 Ways to Create Server-Rendered Routes Using Next.js and Netlify
  metadescription: Learn how to use the next-on-netlify package in this tutorial,
    so that you can use some of Next.js&#x27;s server-side features on Netlify
    with ease. Check it out!
  ogimage: /img/blog/ssrroutes.png
blog_i18n:
  key: next-netlify-server-routes
  lang: en
---
Next.js has a lot of cool features. And, if you’re exporting your site to Netlify as a static site using some of their new functions like [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation), chances are you’re a happy camper without a care in the world.

But, there are those of us who live in the shadows, who want to do some sneaky server-side rendering while still subscribing to the Jamstack philosophy. When you export your Next.js app, Next.js calls `getStaticProps` for each page that exports it, and passes the result to the page’s component. This export works for a *lot* of cases, and you can even include [dynamic routing](https://nextjs.org/docs/routing/dynamic-routes) this way. But, if you don’t necessarily know what your routes will be, or if you want to use query strings, that’s when things start to get sticky.

You can use the older `getInitialProps` API instead of `getStaticProps` + `getStaticPaths`, but then you have to think about a few things:

- `getInitialProps` cannot be used alongside the newer `getStaticProps` or `getStaticPaths`.
- `getInitialProps` will be called on every client-side navigation, which is good for fetching often, but if you’d like to only fetch data when you’re building the site, you’ll want to switch to `getStaticProps`.
- `getInitialProps` has to fetch from an API, while `getStaticProps` can use Node.js-specific libraries or the file system (which has its pros and cons).
- Unfortunately, Next.js doesn’t like query strings in their routing for static sites, which complicates some server-side workflows. That being said, query strings only work with `getInitialProps` and not `getStaticProps`, so it feels like you have to use old APIs when you do it, but it’s still a perfectly valid option.

When you want to use query strings in your URLs, since you can’t set it up in a static site, that’s where [`next-on-netlify`](https://github.com/FinnWoelm/next-on-netlify) comes in. This package has a very straightforward system built to make your server-rendered apps use [Netlify Functions](https://www.netlify.com/products/functions/?utm_source=blog&utm_medium=functionsnext-cs&utm_campaign=devex) to power them!

Now, with the latest version of Next.js, `getStaticPaths` has a new beta feature for "[incremental static re-generation](https://nextjs.org/blog/next-9-4#incremental-static-regeneration-beta)," meaning you can add new pages at runtime. This is a feature that definitely doesn’t feel Jamstack-y in my opinion (which could probably be a whole blog post in itself), because it updates content after building and adds new pages at runtime. With `next-on-netlify`, you can still take advantage of this feature if you want to push your site in that direction, but it's still being figured out as a solution. Using it can occasionally lead to 500 errors (which can be fixed on refresh, see the demo at the end of the post). This feature is very new for Next.js, and worth keeping an eye on as it matures.

## Installing `next-on-netlify` into your project

Anyway! To set up `next-on-netlify`, you can set it up in 3 simple steps after installing it via npm:

### 1. Update your `next.config.js` to target `serverless`:

```js
module.exports = {
  // Target must be serverless
  target: 'serverless'
};
```

### 2. Update your scripts in your `package.json` to include `next-on-netlify`:

```json
  "scripts": {
    "dev": "next",
    "build": "next build",
    "postbuild": "next-on-netlify"
    ...
  },

```

### 3. Update your `netlify.toml` to tell Netlify how to build everything:

```toml
[build]
  command   = "npm run build"
  functions = "out_functions"
  publish   = "out_publish"

```

And voilà, you have an app that can run non-static Next.js on Netlify! The `next-on-netlify` package is being actively developed as Next.js updates, and the folks behind it have been awesome at establishing well-documented code if you'd like to see how it works under the hood.

## Demos

If you'd like to see both methods (the `getInitialProps` way and the `getStaticProps` way), check out these two implementations of the same project here:

[https://sonnet-18.netlify.app/](https://sonnet-18.netlify.app/)

[https://sonnet-18-incremental.netlify.app/](https://sonnet-18-incremental.netlify.app/)

Notice how, even though the app does the same thing for both versions, the URLs are formatted differently! It's because of how those two functions work.

If you'd like to check out the repo:
[https://github.com/cassidoo/sonnet-18](https://github.com/cassidoo/sonnet-18)

The `master` branch is for the `getInitialProps` version, and the `static-props` branch is for the `getStaticProps` version. Notice the different folder structure for the `compare` path for each method!

And of course, if you'd like to deploy it yourself:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/sonnet-18&utm_source=github&utm_medium=sonnet18-cs&utm_campaign=devex)


(This will open up a dialog for you to start a new Netlify website based on this project, and will make a new repository based on this project in your account.)

