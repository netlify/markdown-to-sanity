---
title: "July Changelog: What's New at Netlify? "
description: "Learn about product updates and announcements from the Netlify
  team, from improved support for monorepos on Netlify to our new backend
  database partners. "
authors:
  - Bradley Johnson
date: 2021-08-04
lastmod: 2021-08-03
topics:
  - news
tags:
  - changelog
  - Product
tweet: ""
format: blog
relatedposts:
  - "June Changelog: What's New at Netlify"
seo:
  metatitle: "July 2021 Changelog: What's new at Netlify?"
  metadescription: "Learn about product updates and announcements from the Netlify
    team, from improved support for monorepos to our new backend database
    partners. "
  ogimage: /v3/img/blog/july-changelog-og.png
---
Hi folks!

In July, the Netlify team shipped tons of product updates, new tutorials and also celebrated the growing Jamstack ecosystem with Netlify’s quarterly Partner Kickoff. You can read an [event recap here](https://www.netlify.com/blog/2021/07/26/netlifys-partner-recap-q3-2021/), where we announced [four new database partners](https://www.netlify.com/blog/2021/07/20/netlify-adds-four-database-backend-partners-to-its-enterprise-tech-showcase/): DataStax, Fauna, Nimbella, and StepZen.

Read on to discover what’s new at Netlify. And if you want product updates like this in your inbox, you can subscribe to our newsletter here 👇

{% renderFile './src/components/pages/blog/newsletter.vue' %}

## **Building e-commerce sites on Netlify with Shopify’s new Storefront APIs**

Shopify [recently announced](https://www.netlify.com/blog/2021/07/19/shopify-announces-enhanced-storefront-apis-a-first-look-with-gridsome-and-netlify/) enhancements to their Storefront API that makes it possible for store owners to access and manage their entire store and inventory via APIs. To catch you up on the latest changes, we published new tutorials for building e-commerce sites with the Shopify Storefront API and [Nuxt](https://www.netlify.com/blog/2021/07/21/building-an-e-commerce-site-with-nuxt-and-shopifys-new-storefront-cart-api-part-1/), [Gridsome](https://www.netlify.com/blog/2021/07/19/shopify-announces-enhanced-storefront-apis-a-first-look-with-gridsome-and-netlify/), and also one for [Eleventy and serverless functions](https://www.netlify.com/blog/2021/07/20/build-your-own-shop-with-the-shopify-storefront-api-eleventy-and-serverless-functions/). 

[Learn about using the Shopify Storefront API on Netlify](https://www.netlify.com/blog/2021/07/19/shopify-announces-enhanced-storefront-apis-a-first-look-with-gridsome-and-netlify/)

## **Deploy Previews: Announcing a new GitLab integration, 2x free BrowserStack testing minutes, feature improvements**

Netlify’s collaborative Deploy Previews help you gather better feedback from reviewers. Yesterday, Netlify announced a new [GitLab integration for Deploy Previews](https://www.netlify.com/blog/2021/08/03/new-netlify-integration-with-gitlab-for-fast-visual-feedback-on-deploy-previews/). We also announced that Netlify users get [2x free BrowserStack testing minutes](https://www.netlify.com/blog/2021/07/20/troubleshoot-qa-issues-faster-with-browserstack-and-deploy-previews/), and introduced [new feature improvements,](https://answers.netlify.com/t/collaborative-deploy-previews-improved-reviewer-signup-user-profile-settings-and-annotation-controls/40503) like adding text and emoji to screenshots, and personalizing your Netlify user settings from the Netlify Drawer. \
\
**[Read the GitLab announcement](https://www.netlify.com/blog/2021/08/03/new-netlify-integration-with-gitlab-for-fast-visual-feedback-on-deploy-previews/)**

## **Improved developer experience for monorepos, better caching for Yarn workspaces**

If you work with monorepos on Netlify, you may be glad to know there’s some [swanky new documentation](https://docs.netlify.com/configure-builds/common-configurations/monorepos/?_gl=1%2aysnbuz%2a_gcl_aw%2aR0NMLjE2MjUxNjc3NzAuQ2owS0NRanc1dVdHQmhDVEFSSXNBTDcwc0xMYmoyajR5dnFUOWc1MlRTSTRIOFY0UnpLMS1oa2dBV09IZjVIOEpHaXN1M3N4cjRMZk1hNGFBdFJQRUFMd193Y0I.&_ga=2.218366937.1125764212.1626707843-1785732219.1626471639&_gac=1.120443258.1625167770.Cj0KCQjw5uWGBhCTARIsAL70sLLbj2j4yvqT9g52TSI4H8V4RzK1-hkgAWOHf5H8JGisu3sxr4LfMa4aAtRPEALw_wcB) available on this topic. We’ve made some changes to the developer experience, too. Now, when you get started with a “New site from Git” you’ll find an optional field labeled “Base directory” to make configuration easier, and there’s also improved caching for Yarn workspaces. 

**[Read more about improvements to monorepos on Netlify](https://www.netlify.com/blog/2021/07/08/monorepos-on-netlify-how-docs-processes-led-to-developer-experience-improvements/)** 

## **What else is new at Netlify?**

### **[Build wicked fast sites with Astro](https://www.netlify.com/blog/2021/07/23/build-a-modern-shopping-site-with-astro-and-serverless-functions/)**

One of the hot new frameworks on the scene is Astro, and it’s all about shipping less client-side JavaScript. If you want to learn more, check out this handy [introduction to Astro.](https://www.netlify.com/blog/2021/07/08/build-wicked-fast-sites-with-astro-an-introduction/) When you’re ready to scale, there’s even a guide for building an e-commerce site with Astro and serverless functions. 

### **[Getting your e-commerce Jamstack site ready for Core Web Vitals](https://www.netlify.com/blog/2021/07/07/how-to-get-your-e-commerce-jamstack-site-ready-for-core-web-vitals/)**

Google’s latest ranking update includes the addition of three speed metrics to the search engine’s ranking algorithm. Learn what updates to Core Web Vitals you can expect in 2021, and how to optimize your Jamstack e-commerce website for them. 

### **[Easy access environment variables, managing environment variables with Netlify Dev](https://www.netlify.com/blog/2021/07/05/easy-access-environment-variables/)**

When you need to keep a sensitive variable in a safe place, environment variables can help. With Netlify, you can manage your environment variables centrally in your site’s deploy settings admin, and [access them in your local build](https://www.netlify.com/blog/2021/07/12/managing-environment-variables-from-your-terminal-with-netlify-cli/) if you run your site with Netlify Dev.

### **[Open proxy deprecation](https://answers.netlify.com/t/recent-change-open-proxy-deprecation/39921)**

As part of our mission to build a better web, Netlify recently deprecated the ability to create open proxies, which can be a vector for abuse. Odds are, you are not impacted. Only a few dozen customers had configured an open proxy, and all have already been contacted directly. <br>

### **[Improved support for big `netlify.toml` files ](https://answers.netlify.com/t/improved-support-for-big-netlify-toml-files/40038)**

While most Netlify sites do not require much configuration, customizing a site’s settings can be quite useful. In some instances, for example for sites with a long list of redirects, users with unusually large `netlify.toml` files might experience build failures. We have just fixed this problem, bringing full support for `netlify.toml` files of any size.

Until next time!