---
title: Adding Babel presets and plugins in Next.js
description: Want to add useful, fun, or experimental plugins and presets to
  your Next.js projects? Here's how!
authors:
  - Cassidy Williams
date: 2020-12-18
lastmod: 2020-12-18
topics:
  - tutorials
tags:
  - nextjs
  - blogvent
tweet: ""
format: blog
relatedposts:
  - "Next.js: Should I use SSR or SSG?"
seo:
  metadescription: Want to add useful, fun, or experimental plugins and presets to
    your Next.js projects? Here's how!
  metatitle: Adding Babel presets and plugins in Next.js
  ogimage: /img/blog/blogvent18.png
---
Welcome back, for Blogvent day 18!

Next.js comes with [several Babel presets built in](https://github.com/vercel/next.js/blob/canary/packages/next/build/babel/preset.ts), and chances are, it will cover most of what you'd like to use in your projects. But, it's nice and simple to add custom presets and plugins, if you so desire!

First, make a file at the root of your project called `.babelrc`. You will want to include the `next/babel` preset to keep the ones that are built in to the framework:

```json
{
  "presets": ["next/babel"],
  "plugins": []
}
```

If you want to add more presets than the `next/babel` one, you can add them to that array in an object, for example:

```json
{
  "presets": [
    ["next/babel", {
      "preset-env": {
        "loose": true,
        "modules": false
      },
    }]
  ],
  "plugins": []
}
```

If you'd like to add plugins, it's the same thing! If you don't want to custom configure them or anything, you can name them in the file:

```json
{
  "presets": ["next/babel"],
  "plugins": ["@babel/plugin-proposal-logical-assignment-operators"]
}
```

So if I had my `.babelrc` like this, I would be able to use [this plugin](https://babeljs.io/docs/en/babel-plugin-proposal-logical-assignment-operators) without any extra steps. Neat!

## I want to use this!
Of course you do! Here's a starter application to try this out yourself:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-starter&utm_source=blog&utm_medium=nextstarterbabel-cs&utm_campaign=devex)

(Clicking this button will deploy a Next.js starter project to Netlify, and clone it to your chosen Git provider)

Also, if you'd like to explore your plugin options, [check out this page](https://babeljs.io/docs/en/plugins) on the Babel Plugins website!
