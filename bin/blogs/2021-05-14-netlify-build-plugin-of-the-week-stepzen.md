---
title: "Netlify Build Plugin of the Week: StepZen"
description: Building dynamic applications on the Jamstack is even easier with
  the StepZen plugin, which deploys a StepZen GraphQL API with any Netlify
  build.
authors:
  - Netlify
date: 2021-05-14
lastmod: 2021-05-14
topics:
  - tools
tags:
  - Build Plugins
  - GraphQL
  - stepzen
  - APIs
tweet: ""
format: blog
relatedposts:
  - "What's a Netlify Build Plugin Series: Part 1 - Using Build Plugins"
  - "Netlify Build Plugin of the Week: Hugo Cache"
seo:
  metatitle: Create GraphQL APIs in your Netlify Builds with StepZen Plugin
  metadescription: Building dynamic applications on the Jamstack is even easier
    with the StepZen plugin, which deploys a StepZen GraphQL API with any
    Netlify build.
  ogimage: /v3/img/blog/netlify-stepzen-og.png
---
Welcome to our series highlighting [Netlify Build Plugins](https://www.netlify.com/products/build/plugins/)! This week, we’re featuring the [StepZen plugin](https://app.netlify.com/plugins/netlify-plugin-stepzen/install). [StepZen](https://stepzen.com/) enables you to quickly build a GraphQL API that unifies data from multiple sources into a single endpoint. With only one endpoint to query, building dynamic applications on the Jamstack becomes even easier.

The data you need to power your web apps and sites comes from more than one place, and often takes multiple shapes and sizes. For example, if you have an eCommerce site, you might need to integrate and assemble data from systems like Shopify, your CMS, various databases, and shipping services like UPS and FedEx. Even if you have a simpler sites like a blog, you need to assemble data from GitHub, WordPress, Cloudinary, and so on. StepZen unifies that data--whether it's from REST, various databases, or other backends--into a single endpoint or GraphQL API. Linked types in the GraphQL schema make it easy to access the data from multiple backends in a single query. In other words, with a single query, you can ask for exactly the data you need, unlock the data in any backend, and deliver experiences faster than ever.

Using the [StepZen Netlify build plugin](https://app.netlify.com/plugins/netlify-plugin-stepzen/install), the deployment of that endpoint is simple and seamless, and happens within your Netlify build. You can build your site using your site editor tool (like Hugo or Gatsby), and then get the data via queries to your unified GraphQL endpoint running on StepZen.

![Netlify Build Plugin: StepZen](/v3/img/blog/netlify-stepzen-plugin.png)

Plugin: StepZen

Deploy a unified GraphQL endpoint in your Netlify Builds via StepZen

[Install now](https://app.netlify.com/plugins/netlify-plugin-stepzen/install)

**\
Looking for more ways to power up your builds? [Check out our entire catalog of Build Plugins](https://app.netlify.com/plugins). Learn more about what’s possible with plugins and even [create your own](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/).**
