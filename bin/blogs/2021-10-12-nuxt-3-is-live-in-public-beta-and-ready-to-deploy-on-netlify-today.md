---
title: Nuxt 3 is live in public beta and ready to deploy on Netlify today
description: Learn what's new in Nuxt 3 and how to deploy Nuxt on Netlify with one click.
authors:
  - Ben Hong
date: 2021-10-12
lastmod: 2021-10-12
topics:
  - news
tweet: ""
format: blog
seo:
  metatitle: Deploy Nuxt 3 to Netlify
  metadescription: Nuxt 3, in public beta, works out of the box on Netlify with
    zero configuration.
  ogimage: /v3/img/blog/nuxt3-3.png
---
We’ve been [watching the horizon for Nuxt 3](https://www.netlify.com/blog/2021/09/15/nuxt-3-is-on-the-horizon/), and the long awaited day is here: Nuxt 3 public beta is live! 🎉

With this release, developers are now able to try out Nuxt 3 with all of its latest features such as:

* Smaller core – Nuxt 3 will be 20% lighter than Nuxt2 in KB
* Faster dev environment – Cold starts will be optimized with dynamic SSR code-splitting
* Latest Vue 3 features – With support for new features like syntax support for script setup
* SSR Support – With the new Nitro engine, users will be able to achieve SSR support with Nuxt and Netlify


The most exciting thing is you can deploy a Nuxt 3 project on Netlify today with one click!

[![Deploy on Nuxt 3 on Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/nuxt-starter#NODE_VERSION=14&AWS_LAMBDA_JS_RUNTIME=nodejs14.x)

Alternatively, if you want to do it yourself instead of clicking the button, all you need to do is run:

```bash
# Scaffold your Nuxt 3 project
npx nuxi init my-nuxt3-app

# Change directory in new project
cd my-nuxt3-app

# Install dependencies
npm install

# Run local dev server
npm run dev
```

That’s it!

Want to learn more about Nuxt 3 and Netlify? Be sure to check out:

* The [Nuxt 3 announcement post](https://nuxtjs.org/announcements/nuxt3-beta/) from the Nuxt team
* The Nuxt website at: [https://nuxtjs.org/](https://v3.nuxtjs.org/)
* Deploying Nuxt on Netlify: [https://v3.nuxtjs.org/docs/deployment/netlify](https://v3.nuxtjs.org/docs/deployment/netlify)
