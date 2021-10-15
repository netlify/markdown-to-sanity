---
title: The New Target Static Mode in Nuxt
description: Nuxt has created a new static configuration option, which works extremely well for Jamstack sites, in particular creating automatic dynamic routes. This post goes over the new feature.
authors:
  - Sarah Drasner
date: 2020-09-10
lastmod: 2020-09-10
topics:
  - tutorials
tags:
  - Nuxt
  - Static
  - Nuxt Configuration
  - Jamstack
tweet: ""
format: blog
relatedposts:
  - Create a Blog with Contentful and Nuxt
  - How to Deploy a Vue Site
seo:
  metatitle: Learn More About Target Static Mode in Nuxt
  metadescription: Nuxt has created a new static configuration option, which works extremely well for Jamstack sites, in particular creating automatic dynamic routes. Learn more about the feature in this post.
---

As of v2.14.0 of [Nuxt.js](https://nuxtjs.org/), you may notice a new configuration while setting up a new Nuxt project. When following the prompts, you’ll see a prompt for “Deployment Target”, and one of the options is “Static/Jamstack hosting”:

![terminal view of static mode option](/img/blog/target.png)

If you’re on an older project, you can set this manually by upgrading your version of Nuxt to ^2.14.0 in `package.json` and in `nuxt.config.js`, adding

```js
 target: 'static',
```

You also must use universal rendering mode:

```js
 mode: 'universal',
```

What does this do? The most amazing feature is that you no longer have to declare dynamic routes and create functions for their creation, it will automatically create them for you!

When creating dynamic pages in Nuxt, you’ll create a directory with an underscore of the unique identifier you’ll be using to associate the page, I typically use an `id`. So my pages directory would look like this:

![directory view for a dynamic page in a nuxt site](/img/blog/pagesdirectory.png)

And then I use `this.$route.params.id` to gather the unique id of the item and then create a computed property to filter my dataset for the rest of the object values.

Previously, I would have to then tell my `nuxt.config.js` file to gather all of the ids from the dataset and create pages from them using the [`generate.routes` option](https://nuxtjs.org/guides/configuration-glossary/configuration-generate#routes). Here’s an example:

```js
import data from './static/storedata.json'
let dynamicRoutes = () => {
  return new Promise(resolve => {
    resolve(data.map(el => `product/${el.id}`))
  })
}

export default {
  ...
  generate: {
    routes: dynamicRoutes
  },
}
```

Now none of this configuration in nuxt.config.js necessary! Declare that your target is static and Nuxt takes care of the rest! 🎉 You no longer need HTTP calls to your API on client-side navigation. This process preloads the content and reduces the HTML size served for optimal performance.

If you want to exclude routes, you can use the [`generate.exclude`](https://nuxtjs.org/guides/configuration-glossary/configuration-generate#exclude) option. You can also keep using `generate.routes` to add extra routes if you have a special configuration.

You can deploy straightaway [from this repo](https://github.com/netlify-labs/nuxt-static-example) or the button below:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-labs/nuxt-static-example?utm_source=github&utm_medium=nuxtstatic-sd&utm_campaign=devex)

Now you can prebuild all of your dynamic routes with excellent performance for your end user.
