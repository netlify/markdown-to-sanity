---
title: "Netlify Build Plugin of the Week: Sentry"
description: "Learn how to automatically run Sentry's full-stack error
  monitoring test suite with each Netlify deploy. "
authors:
  - Netlify
date: 2021-04-09
lastmod: 2021-04-09
topics:
  - tools
relatedposts:
  - "How Outfit7 uses Netlify and Sentry for Mobile App Development"
  - "Netlify Build Plugin of the Week: Lighthouse"
tags:
  - sentry
  - monitoring
  - build plugins
tweet: ""
format: blog
seo:
  metatitle: Automatically run Sentry tests for each Netlify deploy with the Sentry plugin
  metadescription: "With the Sentry Build plugin, Sentry is notified of each
    Netlify deploy. This means Sentry is automatically aware of new releases,
    and can upload source maps to Sentry and send Sentry commits that label
    suspicious code and even assign someone to amend it. "
  ogimage: /img/blog/netlify-sentry-og.png
---
Welcome to our series highlighting [Netlify Build Plugins](https://www.netlify.com/products/build/plugins/)! This week, we’re featuring the [Sentry Build Plugin](https://app.netlify.com/plugins/@sentry/netlify-build-plugin/install?_ga=2.138027705.840142728.1617633649-239428312.1617387404). [Sentry](https://sentry.io/) is a full-stack error monitoring tool that shows you every crash in your stack as it happens, along with the details teams need to prioritize, identify, reproduce, and fix those issues.

With the Sentry Build Plugin, Sentry is notified of each Netlify deploy. This means Sentry is automatically aware of new releases, and can upload source maps to Sentry and send Sentry commits that label suspicious code and even assign someone to amend it. And if you see your Sentry monitoring does reveal anything suspicious, Netlify makes it easy to instantly roll back to a previous, more performant version of your site.

This plugin is an easy way to get even deeper insight into how code errors impact your users. With Netlify and Sentry, the team at Outfit7 is able to deliver updates to web integrations quickly, resolve errors efficiently, and optimize engineering work throughout the entire web application development process. Learn more about how [Outfit 7 uses Netlify and the Sentry Build Plugin](https://www.netlify.com/blog/2020/10/29/how-outfit7-uses-netlify-and-sentry-for-mobile-app-development/) for mobile app development.

![Automatically run Sentry tests for each Netlify deploy with the Sentry plugin](/img/blog/netlify-sentry-build-plugin.png "Automatically run Sentry tests for each Netlify deploy with the Sentry plugin")

**Plugin: Sentry Build Plugin** <br>
Automatically run Sentry tests for every Netlify deploy <br>
By: Sentry <br>
**[Install now](https://app.netlify.com/plugins/@sentry/netlify-build-plugin/install)**

Looking for more ways to power up your builds? [Check out our entire catalog of Build Plugins](https://app.netlify.com/plugins). Learn more about what’s possible with plugins and even [create your own](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/).
