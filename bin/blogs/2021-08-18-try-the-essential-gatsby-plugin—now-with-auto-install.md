---
title: Try the Essential Gatsby plugin—now with auto-install
description: 'The Essential Gatsby plugin makes Gatsby work "out of the box" on
  Netlify, with support for Gatsby Functions. '
authors:
  - Netlify
date: 2021-08-18
lastmod: 2021-08-18
topics:
  - news
tags:
  - Gatsby
  - Plugins
tweet: ""
format: blog
seo:
  metatitle: Deploy Gatsby on Netlify with Zero Configuration
  metadescription: "The Essential Gatsby plugin auto-detects when you're deploying
    a Gatsby site to Netlify and handles the configuration for you. Complete
    with support for Gatsby Functions. "
  ogimage: /v3/img/blog/og-essential-gatsby.png
---
The Essential Gatsby plugin is available today in General Availability with in-app auto-detection! 

Now, when you deploy a new Gatsby project, Netlify will auto-detect your framework and install the Essential Gatsby plugin so everything will work “out of the box” with zero configuration. 

This saves you a round trip to the build plugins library, and enables features like:

* Gatsby Functions
* Incremental Builds, and
* Image Caching

Gatsby continues to be one of the most popular frameworks for [Jamstack](https://www.netlify.com/jamstack/) developers, and we’re excited to make running Gatsby on Netlify even easier for developers!

## How to get started

Create a "New site from Git" and let Netlify do the rest!

![Screenshot of Netlify app reads: Seems like this is a Gatsby site. To enable key features of Gatsby on Netlify, we'll automatically install the Essential Gatsby Build Plugin. ](/v3/img/blog/gatsby-site-autodetection.png "Netlify auto-detects Gatsby and installs the Essential Gatsby plugin. ")

The only catch is: if you’ve been using [the old Gatsby cache plugin](https://www.gatsbyjs.com/plugins/gatsby-plugin-netlify-cache/) you should [uninstall it](https://docs.netlify.com/configure-builds/build-plugins/#remove-a-plugin), as it’s now officially deprecated. All of the goodness from that plugin has now been rolled into the new Essential Gatsby plugin—along with new support for Gatsby Functions.

## Learn more

If you want to learn more or get involved, you can:

* [Check out the docs](https://docs.netlify.com/configure-builds/common-configurations/gatsby/#netlify-integration) for common Gatsby configurations
* [Visit the plugin README on the repo](https://github.com/netlify/netlify-plugin-gatsby#readme) where you can watch or file issues!
* Learn how to [run Gatsby Functions on Netlify](https://www.netlify.com/blog/2021/06/03/how-to-enable-gatsby-functions-on-netlify/)

Or, deploy a Gatsby starter template in 1 minute! Click the button below to deploy a starter blog and get started today.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-blog)
