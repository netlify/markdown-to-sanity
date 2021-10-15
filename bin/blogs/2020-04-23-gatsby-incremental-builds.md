---
title: |
  Enable Gatsby Incremental Builds on Netlify
description: >
  Gatsby has added support for incremental builds. Learn how you can take
  advantage of it to speed up your Gatsby builds on Netlify today!
authors:
  - Jason Lengstorf
date: 2020-04-23T00:00:00.000Z
lastmod: 2021-03-12
topics:
  - tutorials
tags:
  - gatsby
  - performance
tweet: ""
format: blog
relatedposts:
  - "Activation des builds incrémentiels de Gatsby sur Netlify"
  - Migrate Your WordPress Site to the Jamstack
seo:
  metatitle: |
    Enable Gatsby Incremental Builds on Netlify
  metadescription: "Gatsby has added support for incremental builds. Learn how you can take
    advantage of it to speed up your Gatsby builds on Netlify today!"
blog_i18n:
  key: gatsby-incremental-builds
  lang: en
---

Gatsby recently released [incremental builds](https://www.gatsbyjs.org/docs/page-build-optimizations-for-incremental-data-changes/), an improvement that reduces the amount of work required to build a Gatsby site. In this post, we’ll learn **how to enable Gatsby incremental builds on Netlify.**

## Step 1: Upgrade to Gatsby v2.20.4 or higher

Gatsby introduced incremental builds in version 2.20.4, so make sure to upgrade your Gatsby site to the latest version.

```bash
# this will upgrade to the latest version of Gatsby
npm install gatsby@latest
```

## Step 2: Install cross-env

Most Windows command prompts will choke when you set environment variables as part of your build command. Cross-env will let us not worry about what environment we are using.

```bash
npm install cross-env
```

## Step 3: Add the Gatsby Cache Netlify Build Plugin

Incremental builds rely on Gatsby’s cache, so we need to enable `netlify-plugin-gatsby-cache`, which will persist Gatsby’s `public` and `.cache` directories between builds.

You can use this [one-click installation link](http://app.netlify.com/plugins/netlify-plugin-gatsby-cache/install) for the Netlify UI, or you can read up on [file-based Build Plugin installation](https://docs.netlify.com/configure-builds/build-plugins/#file-based-installation) in our docs.


## Step 4: Add the flag to enable Gatsby incremental builds

Finally, update your build command in `package.json` (or wherever you’ve set your build command) to include the incremental builds flag:

```diff-json
    "scripts": {
      "develop": "gatsby develop",
-     "build": "gatsby build"
+     "build": "cross-env GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=true gatsby build --log-pages"
    },
```

We’re adding the optional `--log-pages` flag here so we can see what Gatsby builds on each run — feel free to leave that out if you don’t want to see the extra logs.

## Step 5: Make a change in your CMS and see the incremental builds!

Once we’ve made the above changes, our Gatsby site will run with incremental builds enabled! This means that changes from a supported CMS — Gatsby supports Contentful, Sanity, DatoCMS and CosmicJS at the time of writing with WordPress and Drupal support in alpha — Gatsby will only rebuild the parts of the site affected by the changed data.

If we look at our build logs, the first build will show a full build with all of our pages:

```text
2:00:43 PM: info Done building in 41.429647017 sec
2:00:43 PM: info Built pages:
2:00:43 PM: Updated page: /design-research-program
2:00:43 PM: Updated page: /offline-plugin-app-shell-fallback/
2:00:43 PM: Updated page: /
2:00:43 PM: Updated page: /404/
2:00:43 PM: Updated page: /404.html
```

On repeat builds, we can see that the Gatsby build is _much_ faster and only rebuilds the page that was changed:

```text
2:03:56 PM: info Done building in 17.691847403 sec
2:03:56 PM: info Built pages:
2:03:56 PM: Updated page: /design-research-program
```

## You can use Gatsby incremental builds today!

If you’ve got a Gatsby site, you can enable incremental builds today!

Give it a try, and enjoy builds that make your blazing fast Gatsby site even more blazinger! 🔥
