---
title: Top 10 Netlify Build Plugins
description: Netlify recently announced Build Plugins, which allow you to
  customize your build process with one click from the UI, and we list the top
  10 most popular Build Plugins by installs.
authors:
  - Lauren Sell
date: 2020-06-22
lastmod: 2020-06-22T00:00:00.000Z
topics:
  - tools
tags:
  - Build Plugins
  - Gatsby
  - NextJS
  - Performance
  - Accessibility
tweet: ""
format: blog
relatedposts:
  - Netlify Build Plugins Are Here!
  - "What's a Netlify Build Plugin Series: Part 1 - Using Build Plugins"
seo:
  ogimage: /img/blog/plugins-og-37.png
  metadescription: Netlify recently announced Build Plugins which allows
    developers to customize the build process with one click from the UI. Check
    out this list of the top 10 most popular Build Plugins by installs.
  metatitle: Discover the Top 10 Netlify Build Plugins
---
Nearly one month after [Netlify announced the general availability of Build Plugins](https://www.youtube.com/watch?v=w9yrrQBBKos), we’ve seen a huge spike in activity from the community and partners installing plugins and building their own to share with the community.

Netlify Build Plugins let you customize your build process and automate build tasks—such as caching files, checking for broken links, triggering testing, and much more— with one-click from the UI. For a comprehensive overview of Build Plugins, check out [Tara Manicsic’s blog post](https://www.netlify.com/blog/2020/05/27/netlify-build-plugins-are-here/), including tutorials and highlighted third-party plugins like Cypress, Speedcurve and Sentry.

To give you a taste of what’s possible with Build Plugins, we’ve compiled the Top 10 most installed plugins to date. You can also [check out the full catalog](https://app.netlify.com/plugins) available in the UI, and even [create your own Build Plugin](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/) to share with your team or the community.

## Top 10 Netlify Build Plugins

### 1. Gatsby Cache

Persist the Gatsby cache between Netlify builds for huge build speed improvements!

[Install Gatsby Cache plugin](https://app.netlify.com/plugins/netlify-plugin-gatsby-cache/install) | [Git Repo](https://github.com/jlengstorf/netlify-plugin-gatsby-cache)

### 2. Sitemap

Automatically generate a sitemap for your site on PostBuild in Netlify.

[Install Sitemap plugin](https://app.netlify.com/plugins/@netlify/plugin-sitemap/install) | [Git Repo](https://github.com/netlify-labs/netlify-plugin-sitemap)


### 3. Image Optim

Optimize images as part of your Netlify build process. Optimizes PNG, JPEG, GIF and SVG file formats.

[Install Image Optim plugin](https://app.netlify.com/plugins/netlify-plugin-image-optim/install) | [Git Repo](https://github.com/chrisdwheatley/netlify-plugin-image-optim)


### 4. Next.js Cache

Cache the .next build folder between builds.

[Install Next.js Cache plugin](https://app.netlify.com/plugins/netlify-plugin-cache-nextjs/install)
 | [Git Repo](https://github.com/pizzafox/netlify-cache-nextjs)

### 5. Sitemap Submit

Automatically submit your sitemap to Google and Bing after every production build!

[Install Sitemap Submit plugin](https://app.netlify.com/teams/lauren-wedvpv8/plugins/netlify-plugin-submit-sitemap/install) | [Git Repo](https://github.com/netlify-labs/netlify-plugin-sitemap)


### 6. A11y

Build a more accessible web! Run your critical pages through pa11y and fail build if accessibility failures are found.

[Install A11y plugin](https://app.netlify.com/plugins/netlify-plugin-a11y/install) | [Git Repo](https://github.com/netlify-labs/netlify-plugin-a11y)


### 7. Minify HTML

Add HTML minification as a post-processing optimization in Netlify.

[Install Minify HTML plugin](https://app.netlify.com/plugins/netlify-plugin-minify-html/install) | [Git Repo](https://github.com/philhawksworth/netlify-plugin-minify-html)


### 8. Lighthouse

Automatically run a Lighthouse audit on your site after every build.

[Install Lighthouse plugin](https://app.netlify.com/plugins/@netlify/plugin-lighthouse/install) | [Git Repo](https://github.com/netlify-labs/netlify-plugin-lighthouse)


### 9. Hugo cache resources

Persist Hugo resources folder between Netlify builds for huge build speed improvements.

[Install Hugo cache resources plugin](https://app.netlify.com/plugins/netlify-plugin-hugo-cache-resources/install) | [Git Repo](https://github.com/cdeleeuwe/netlify-plugin-hugo-cache-resources)


### 10. AMP server side render

A Netlify plugin to server-side render your AMP pages.

[Install AMP server side render plugin](https://app.netlify.com/plugins/netlify-plugin-amp-server-side-rendering/install) | [Git Repo](https://github.com/martinbean/netlify-plugin-amp-server-side-rendering)


We’re just scratching the surface of what Build Plugins can do, and there are dozens more plugins available in the catalog. If you don't see what you're looking for, you can easily build your own plugins to share with the team or the community.
