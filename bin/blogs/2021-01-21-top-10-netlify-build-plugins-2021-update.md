---
title: Top 10 Netlify Build Plugins - 2021 Update
description: "With Netlify Build Plugins, developers can hook automations
  directly into the CI/CD infrastructure. Fail a build if it doesn't meet
  accessibility standards, audit web performance after the build, or install
  utilities to work with modern frameworks like Next.js. Here's a look at the
  Top 10 Netlify Build Plugins, at the top of 2021. "
authors:
  - Melanie Crissey
date: 2021-01-25
lastmod: 2021-01-26
topics:
  - tools
tags:
  - Build Plugins
  - Accessibility
  - Performance
  - Next.js
tweet: ""
format: blog
relatedposts:
  - Top 10 Netlify Build Plugins
  - How Algolia Created Its Netlify Build Plugin
seo:
  metatitle: Discover Netlify's Top 10 Build Plugins of 2021
  metadescription: "With Netlify Build Plugins, developers can hook automations directly into the CI/CD infrastructure and developer workflow. Explore the Top 10 Netlify Build Plugins, at the top of 2021."
  ogimage: /img/blog/top-10-netlify-build-plugins-2021-ogimg.png
---
Last May, Netlify announced the general availability of Build Plugins. Since then, a number of [technical partners have launched new plugins](https://www.netlify.com/blog/2020/10/07/tech-partners-create-custom-build-plugins-to-reach-developers-in-their-workflow/), allowing automated workflows to run on top of Netlify’s CI/CD infrastructure.

For example, you can now run end-to-end tests with the Cypress plugin or [index your site for search with Algolia](https://www.netlify.com/blog/2021/01/20/how-algolia-created-its-netlify-build-plugin/), directly from your Netlify build.

With an expanding catalog of available plugins and integrations, we wanted to take this moment to check on the leaderboard.

Here’s a look at the most popular Netlify build plugins to-date, and some notes on their standing [compared to last June](https://www.netlify.com/blog/2020/06/22/top-10-netlify-build-plugins/).

## Top 10 Netlify Build Plugins

### 1. Gatsby Cache

   Holding strong at #1, this plugin by Jason Lengstorf allows you to persist the Gatsby cache between Netlify builds for huge build speed improvements.

   [Install Gatsby Cache plugin](https://app.netlify.com/plugins/netlify-plugin-gatsby-cache/install) | [Git repo](https://github.com/jlengstorf/netlify-plugin-gatsby-cache)

### 2. Submit Sitemap

   New to our Top 10, this plugin by Cassius lets you automatically submit your sitemap to Google, Bing, and Yandex after every production build.

   [Install Submit Sitemap plugin](https://app.netlify.com/plugins/netlify-plugin-submit-sitemap/install) | [Git repo](https://github.com/cdeleeuwe/netlify-plugin-submit-sitemap#readme)

### 3. Sitemap plugin

   Another popular sitemap option, this plugin by Netlify Labs automatically generates a sitemap on PostBuild.

   [Install Sitemap plugin](https://app.netlify.com/plugins/@netlify/plugin-sitemap/install) | [Git repo](https://github.com/netlify-labs/netlify-plugin-sitemap#readme)

### 4. Image Optim

   For performance-minded developers, the Image Optim plugin by Chris Draycott-Wheatley automatically optimizes images during the build in PNG, JPEG, GIF, or SVG file formats.

   [Install Image Optim plugin](https://app.netlify.com/plugins/netlify-plugin-image-optim/install) | [Git repo](https://github.com/chrisdwheatley/netlify-plugin-image-optim#readme)

### 5. Next on Netlify

   New to our list, and quickly climbing the charts in terms of popularity, the Next on Netlify plugin lets you build and deploy Next.js applications with server-side rendering, no extra configuration required.

   [Install Next on Netlify](https://app.netlify.com/plugins/@netlify/plugin-nextjs/install) | [Git repo](https://github.com/netlify/netlify-plugin-nextjs#readme)

### 6. Next.js Cache

   Still very popular, the Next.js Cache plugin from Jonah Snider, aka pizzafox, caches the `.next` folder between builds.

   [Install Next.js Cache plugin](https://app.netlify.com/plugins/netlify-plugin-cache-nextjs/install) | [Git repo](https://github.com/pizzafox/netlify-cache-nextjs)


### 7. Minify HTML

   By Phil Hawksworth, this framework-agnostic utility adds HTML minification as a post-processing optimisation.

   [Install Minify HTML](https://app.netlify.com/plugins/netlify-plugin-minify-html/install) | [Git repo](https://github.com/philhawksworth/netlify-plugin-minify-html#readme)

### 8. Lighthouse

   Another fun one in the performance space, the Lighthouse plugin by Netlify Labs generates a Lighthouse audit report for every build, so you can watch for improvements or degradations in page speed as part of your workflow.

   [Install Lighthouse plugin](https://app.netlify.com/plugins/@netlify/plugin-lighthouse/install) | [Git repo](https://github.com/netlify-labs/netlify-plugin-lighthouse#readme)
   
### 9. A11y

Build a more accessible web! The A11y plugin by sw-yx runs your critical pages through [Pa11y](https://pa11y.org/) and fails the build if accessibility failures are found.

  [Install A11y plugin](https://app.netlify.com/plugins/netlify-plugin-a11y/install) | [Git repo](https://github.com/netlify-labs/netlify-plugin-a11y#readme)

### 10. Inline Critical CSS

   New to our Top 10 list, the Inline Critical CSS plugin by Tom Bonnike extracts the CSS for above-the-fold content and makes it inline CSS so that content can render as quickly as possible for users.

   [Install Inline Critical CSS plugin](https://app.netlify.com/plugins/netlify-plugin-inline-critical-css/install) | [Git repo](https://github.com/Tom-Bonnike/netlify-plugin-inline-critical-css#readme)


## Do more with plugins in 2021

First, thank you so much, plugin authors, for bringing these plugins to life!

While we’re seeing more framework-specific plugins rise through the ranks, it’s clear that optimizing performance, search, and accessibility remain popular concerns for Netlify developers.

Learn more about [what’s possible with plugins](https://www.netlify.com/products/build/plugins/). Check out the [updated list of event handlers](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/), from `onPreBuild` to `onEnd`. You may even feel inspired to roll your own!
