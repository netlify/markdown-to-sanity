---
title: Yarn support on Netlify
authors:
  - David Calavera
date: 2016-11-01T00:00:00.000Z
lastmod: 2021-05-07
topics:
  - news
image_style: contained
short_title: Introducing Yarn support on Netlify
description: Netlify now detects your yarn.lock files and stores the yarn cache for reusage.
tags:
  - Build
  - yarn
format: blog
image: /v3/img/blog/yarn-kitten-circle.png
cmsUserSlug: ""
---
> **Update, May 2021**: We've made a ton of improvements to our Yarn support since this blog post was written. Please check out [our docs](https://docs.netlify.com/configure-builds/manage-dependencies/#yarn) for the most current information.

We're very excited to announce full support for [Yarn](https://yarnpkg.com), the dependency manager, on Netlify.

Yarn is a dependency manager for JavaScript projects. Although Yarn launched only a month ago, its three main features: speed, security and reproducibility are making this new package to gain popularity very quickly. We've been following the project very closely and we started using it for our own projects almost since the day it launched. Supporting it as a first class dependency manager in our continuous delivery pipeline was just a matter of time.

If that wasn't enough reason for us to like Yarn, the project uses Netlify to host their webpage and leverages our [Deploy Previews feature.](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/)

Starting today, if you deploy a site that includes a `yarn.lock` file in the base of the repository, we'll use Yarn to install dependencies. We'll do this automatically, without you having to change any configuration options. After the initial dependency linking, we'll store Yarn's cache for your project so future builds can use it to resolve package changes. If your dependencies don't change between deploys, you'll see those resolutions drop to under a second.

![](/v3/img/blog/yarn-log.png)

We've got a few environment variables you can set to control yarn behavior too:

* `YARN_VERSION` to select a version of yarn to use.  Otherwise we default to 0.18.1 (Note for future readers: we periodically update our default yarn version to keep current so you should not have to specify a `YARN_VERSION` unless you are using very very recent features.)
* `YARN_FLAGS` to set flags that we'll use when we automatically run `yarn install` for your build upon finding `/yarn.lock`

You can set these either in the Build Environment Variables section of each site's settings, or via [netlify.toml](https://www.netlify.com/docs/continuous-deployment/#deploy-contexts) where you can if you choose use different settings for different branches.

We encourage everyone to give Yarn a try. Fast, secure and reproducible resolution will change the way you approach dependency management.