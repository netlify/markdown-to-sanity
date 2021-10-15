---
title: Migrating an existing Next.js project to Netlify
description: If you're wanting to migrate or import a Next.js project to
  Netlify, here's a handy guide to get you started!
authors:
  - Cassidy Williams
date: 2021-05-04
lastmod: 2021-05-04
topics:
  - tutorials
tags:
  - nextjs
  - migration
tweet: ""
format: blog
relatedposts:
  - "Next.js 101: What you should know"
  - Try the new Essential Next.js plugin, now with auto-install!
seo:
  metadescription: If you're wanting to migrate or import a Next.js project to
    Netlify, here's a handy guide to get you started!
  metatitle: Migrating an existing Next.js project to Netlify
  ogimage: /img/blog/migrating.png
---
Hellloooo!

So, you have a Next.js project that works flawlessly, and you want to put it on Netlify for the first time. Fun! Here's some things you might have to do.

## Add a `netlify.toml` file

You'll need a `netlify.toml` file added at the top level of your project to make sure everything is imported correctly.

```toml
[build]
  command = "npm run build"
  publish = "out"
```

You can also do this in the Netlify UI if you don't want to make this file by filling in the build command and publish directory!

![Basic build settings on Netlify, with command npm run build and directory out](/img/blog/screen-shot-2021-05-04-at-4.56.03-pm.png "Basic build settings on Netlify")

If you aren't using the defaults for your Next.js publish or functions directory, you can change the values here! For example:

```toml
[build]
  command   = "npm run build"
  functions = "my_functions_dir"
  publish   = "my_publish_dir"
```

If you would like to customize even more build settings, [check out the docs](https://docs.netlify.com/configure-builds/get-started/#basic-build-settings) for more information on this!

## Update your `next.config.json`

If you have a `next.config.json` file, you need to add `target: serverless` to it. If you don't have one, you don't need to do this. The reason for this is because we don't want to mess up any existing `next.config.js` content you might already have!

Also, your redirects and rewrites in this file will need to be moved. Which brings us to...

## Redirects

You can define your custom redirects and rewrites in a `_redirects` file at the top level of your project (or you can use redirects in your `netlify.toml` file, too). There's more information for how these can be structured [in the docs](https://docs.netlify.com/routing/redirects/)!

## Anything else?

Honestly, probably not. Each of these steps are optional, depending on your project! We [auto-install the Essential Next.js Build Plugin](https://github.com/netlify/netlify-plugin-nextjs) to all new Next.js projects on the platform, which will enable server-side rendering and other framework-specific features in your builds. If you have any problems with it, [you can uninstall it](https://docs.netlify.com/configure-builds/build-plugins/#remove-a-plugin), or file an issue on the repo, or ask questions in [our community](https://answers.netlify.com/)!

## What if I don't have an existing Next.js project?

Been there! Here's a starter project for ya to get going:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-starter&utm_source=blog&utm_medium=nextmigration-cs&utm_campaign=devex-cs)

(Clicking this button will deploy a Next.js starter project to Netlify, and clone it to your chosen Git provider, PLUS because it's brand new, you can completely ignore the previous parts of this post)