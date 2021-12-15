---
title: "Netlify Build Plugin of the Week: Inline Critical CSS"
description: If you’re using the Jamstack for speedy content delivery, inlining
  critical CSS can make your content render even faster. This
  community-contributed Netlify Build plugin extracts and inlines your critical
  above-the-fold CSS, and is built on top of the popular critical package.
authors:
  - Netlify
date: 2021-03-19
lastmod: 2021-03-19
topics:
  - tools
tags:
  - CSS
  - Build Plugins
tweet: ""
format: blog
relatedposts:
  - Netlify Build Plugins Are Here!
  - "What's a Netlify Build Plugin Series: Part 1 - Using Build Plugins"
seo:
  ogimage: /v3/img/blog/netlify-plugin-inline-critical-css.png
  metadescription: If you’re using the Jamstack for speedy content delivery,
    inlining critical CSS can make your content render even faster. This
    community-contributed Netlify Build plugin extracts and inlines your
    critical above-the-fold CSS, and is built on top of the popular critical
    package.
  metatitle: Learn about our popular Netlify Build plugin that inlines critical
    CSS to speed up your content rendering.
---
Welcome to our series highlighting [Netlify Build Plugins](https://www.netlify.com/products/build/plugins/)! Netlify Build Plugins are community-contributed scripts that can be used to perform all kinds of clever actions each time your site is built and deployed. They can automate workflows and tasks, manage notifications, and kick off events. This week, we’re highlighting the Inline Critical CSS plugin, contributed by Tom Bonnike, who is also an engineer at Shopify. The plugin extracts and inlines your critical above-the-fold CSS, and is built on top of the popular [`critical` package](https://github.com/addyosmani/critical).

If you’re using the Jamstack for [speedy content delivery](https://www.netlify.com/products/edge/), inlining critical CSS can make your content render even faster. Inlining the critical CSS directly into the HTML document eliminates additional requests and can be used to deliver a “one roundtrip” critical path where only the HTML is a blocking resource. You can use this plugin together with Bonnike’s [Inline Source plugin](http://app.netlify.com/plugins/netlify-plugin-inline-source/install) to inline your other assets/sources such as small images, SVGs or render-blocking scripts.

![Netlify Build Plugin of the Week: Inline Critical CSS](/v3/img/blog/build-plugin-critical-css.png)

**Plugin: Inline Critical CSS Netlify Build plugin** <br>
Automatically extract and inline the critical CSS of your pages in order to render content to the user as fast as possible. <br>
**By [Tom Bonnike](https://www.npmjs.com/package/netlify-plugin-inline-critical-css)** <br>
**[Install now](https://app.netlify.com/plugins/netlify-plugin-inline-critical-css/install)** 

And if you’re interested in learning more about [Netlify Build Plugins](https://www.netlify.com/products/build/plugins/), check out our [directory of community plugins](https://app.netlify.com/plugins), or learn how to [create your own](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/).
