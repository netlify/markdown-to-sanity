---
title: Ignore unnecessary builds to optimize your build times
description: Unnecessary builds can be incredibly wasteful and time consuming.
  In this post we dive into Netlify's ignore setting, a simple and easy way to
  ignore certain builds to conserve your overall  build time
authors:
  - Divya Tagtachian
date: 2020-04-27T00:00:00.000Z
lastmod: 2020-04-24T00:00:00.000Z
topics:
  - tutorials
tags:
  - Build
  - Deployments
tweet: ""
format: blog
relatedposts:
  - 'Intelligent deploy skipping: An automatic optimisation'
  - Gatsby Build Speed Improvements With Parallel Image Processing
seo:
  ogimage: /v3/img/blog/ignore-builds.jpg
  metadescription: Unnecessary builds can be incredibly wasteful and time
    consuming. In this post we dive into Netlify's ignore config setting. Check out this simple and
    easy way to conserve build times.
  metatitle: How to Ignore Builds - Optimize your Netlify Build Times
---
At Netlify, we try hard to optimize your builds by determining how your site has changed at any given update. To save users from the pain of wasted build minutes, Netlify tries to intelligently check for changes in a site’s base directory. It does this by comparing files in last known version to the latest updated version and automagically skips a build if no change is detected. If you’re keen on learning more about how Netlify skips builds, check out [this concise primer on Netlify’s deploy skipping feature](https://www.netlify.com/blog/2019/10/10/intelligent-deploy-skipping-an-automatic-optimisation/)

Though Netlify works hard to prevent unnecessary builds, it doesn’t always know when a build is undesired (like in the case of dependabot version bumps). In cases like these, Netlify offers users control over how and what gets built with the ignore setting in the configuration. With this, users have a more fine-grained control over their site builds and can appropriately ignore any and all unnecessary builds. 

Ignoring unnecessary builds and updates is as easy as adding an ignore attribute to your configuration like so:

```toml
[build]
  ignore = “git diff —quiet HEAD^ HEAD sub_dir/“
```

If you’re specifically looking to ignore dependabot updates, you can lean on Git log to surface changes in a commit and ignore the build appropriately like so: 

```toml
[build]
  ignore = "git log -1 --pretty=%B | grep dependabot"
```

For reference, an exit-code of 1 indicates the contents have changed, while an exit code of 0 indicates that no relevant changes have been detected. As a result, the former will continue the build per usual while the latter will exit the build and return early.

This process of ignoring builds can be incredibly handy when building fast and helps significantly when it comes to conserving your build minutes. For more tips and tricks on optimizing your deployments, head on over to the [Netlify Community forum](https://community.netlify.com/t/common-issue-how-can-i-optimize-my-netlify-build-time/3907).