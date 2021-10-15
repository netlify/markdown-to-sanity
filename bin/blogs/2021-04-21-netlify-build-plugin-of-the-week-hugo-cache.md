---
title: "Netlify Build Plugin of the Week: Hugo Cache"
description: "Minimize Hugo build times by automatically caching Hugo resources
  after each Netlify build."
authors:
  - Netlify
date: 2021-04-21
lastmod: 2021-04-21
topics:
  - tools
tags:
  - Hugo
  - ssg
  - build
  - build plugins
tweet: ""
format: blog
relatedposts:
  - "What's a Netlify Build Plugin Series: Part 1 - Using Build Plugins"
  - "Netlify Build Plugin of the Week: Sentry"
seo:
  metatitle: "How to Minimize Hugo Build Times with Netlify's Build Plugin"
  metadescription: "Automatically reduce Hugo build times by caching the resources folder after each Netlify build with the Hugo cache plugin. Try it for free, today! "
  ogimage: /img/blog/hugo-build-plugin-of-the-week.png
---
Welcome to our series highlighting [Netlify Build Plugins](https://www.netlify.com/products/build/plugins/)! This week, we’re featuring the [Hugo Cache plugin](https://app.netlify.com/plugins/netlify-plugin-hugo-cache-resources/install?_ga=2.186423209.1274389752.1618838952-678168946.1618438211&_gac=1.260102399.1618847923.Cj0KCQjw1PSDBhDbARIsAPeTqrfXMko5nygXIy3GFmBzOoL32USF1FuS4IVUBtX3SIWfQ3dM6PXFnQ0aAlPcEALw_wcB). This plugin caches Hugo’s `resources` folder after each Netlify build. So if you’re processing a lot of images or other resources in your Hugo builds, this plugin can significantly improve build times by pulling the resources from the cache rather than generating them all over again.

![Netlify Build Plugin of the Week: Hugo Resources Cache](/img/blog/hugo-cache-netlify-plugin.png)

**Plugin: Hugo Cache Plugin** <br>
Persist Hugo resources folder between Netlify builds for huge build speed improvements! <br>
By: [cdeleeuwe](https://github.com/cdeleeuwe) <br>
**[Install now](https://app.netlify.com/plugins/netlify-plugin-hugo-cache-resources/install?_ga=2.186423209.1274389752.1618838952-678168946.1618438211&_gac=1.260102399.1618847923.Cj0KCQjw1PSDBhDbARIsAPeTqrfXMko5nygXIy3GFmBzOoL32USF1FuS4IVUBtX3SIWfQ3dM6PXFnQ0aAlPcEALw_wcB)**

Looking for more ways to power up your builds? Check out our [entire catalog of Build Plugins](https://app.netlify.com/plugins). Learn more about what’s possible with plugins and even [create your own](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/).
