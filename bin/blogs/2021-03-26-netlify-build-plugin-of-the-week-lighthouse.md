---
title: "Netlify Build Plugin of the Week: Lighthouse"
description: With the Netlify Lighthouse build plugin, you don’t have to make an
  extra trip to the command line or Lighthouse UI. Netlify will automatically
  generate a Lighthouse report for every deploy.
authors:
  - Netlify
date: 2021-03-26
lastmod: 2021-03-26
topics:
  - tools
tags:
  - Build Plugins
  - lighthouse
tweet: ""
format: blog
relatedposts:
  - "Netlify Build Plugin of the Week: Cypress"
  - Netlify Build Plugins Are Here!
seo:
  metatitle: Automatically generate Lighthouse reports with every Netlify deploy
  metadescription: With the Netlify Lighthouse build plugin, you don’t have to
    make an extra trip to the command line or Lighthouse UI. Netlify will
    automatically generate a Lighthouse report for every deploy.
  ogimage: /v3/img/blog/lighthouse_build_plugin.png
---
Welcome to our series highlighting [Netlify Build Plugins](https://www.netlify.com/products/build/plugins/)! This week, we’re featuring the [Netlify Lighthouse plugin](https://github.com/netlify-labs/netlify-plugin-lighthouse). If you’re auditing your sites for performance, SEO, or accessibility, you’re probably familiar with [Lighthouse](https://developers.google.com/web/tools/lighthouse). It’s a hugely popular open-source tool from Google that helps users improve the quality of their web pages. There’s a lot of different ways to use Lighthouse, from [Chrome DevTools](https://developers.google.com/web/tools/lighthouse#devtools) to the web UI to the command line. You can also run it as a Node module to integrate Lighthouse into your CI systems.

With the [Netlify Lighthouse plugin](https://github.com/netlify-labs/netlify-plugin-lighthouse), you don’t have to make an extra trip to the command line or Lighthouse UI. Netlify will automatically generate a Lighthouse report for every deploy.

If you’re using Jamstack for improved site performance, this plugin is an easy way to regularly monitor the metrics that matter to your team, and ensure your performance doesn’t degrade over time. With a one-click install in Netlify’s UI, the plugin automatically runs Lighthouse reports for each deploy, so you can easily monitor how each deploy affects your SEO, site speed, site accessibility and more. And if you see your Lighthouse scores degrade after a deploy, Netlify makes it easy to instantly roll back to a previous, more performant version of your site.

[![Netlify's Build Plugin of the Week: Lighthouse](/v3/img/blog/lighthouse-inline-image.png)](https://app.netlify.com/plugins/@netlify/plugin-lighthouse/install)

**Plugin:** Lighthouse Build plugin <br>
Automatically generates a Lighthouse report for every Netlify deploy <br>
By Netlify <br>
**[Install now](https://app.netlify.com/plugins/@netlify/plugin-lighthouse/install)**


Looking for more ways to power up your builds? [Check out our entire catalog of Build Plugins](https://app.netlify.com/plugins). Learn more about what’s possible with plugins and even [create your own](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/).
