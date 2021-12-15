---
title: How to enable Gatsby Functions on Netlify
description: "Try out new Gatsby Functions on Netlify with this early release of
  the Essential Gatsby plugin, which includes support for incremental builds and
  image caching. "
authors:
  - Netlify
date: 2021-06-03
lastmod: 2021-06-03
topics:
  - tools
tags:
  - Gatsby
  - Build Plugins
  - Serverless functions
  - incremental builds
  - image caching
tweet: ""
format: blog
relatedposts:
 - "Netlify Build Plugin of the Week: Gatsby Cache Plugin"
 - "Incremental Static Regeneration: Its Benefits and Its Flaws"
seo:
  metatitle: How to Enable Gatsby Functions on Netlify
  metadescription: Try out new Gatsby Functions on Netlify with this early release of
    the Essential Gatsby plugin, which includes support for incremental builds and
    image caching. 
  ogimage: /v3/img/blog/gatsby_functions_on_netlify.png
---
Starting today, you can try out new Gatsby Functions on Netlify using an early release of the Essential Gatsby plugin!

We’re excited to give you a first look at this new plugin which includes support for Gatsby Functions, incremental builds, and image caching.

## Here’s how to get started with the Essential Gatsby plugin

First, install the plugin in your Gatsby site as a dev dependency:

```
npm install -D @netlify/plugin-gatsby
```

Next, add the plugin to your `netlify.toml`:

```toml
[[plugins]]
package = "@netlify/plugin-gatsby"
```

Commit these changes, push to your repo, and Netlify will rebuild your site with full [Gatsby Functions](https://github.com/gatsbyjs/gatsby/discussions/30735) support!

> Note: most Netlify plugins are available for one-click install with the in-app Plugins directory. This new plugin hasn’t been published to the directory yet, so you’ll need to install it directly with npm instead of through the Netlify UI.

## See Gatsby Functions in action on Netlify

Gatsby Functions provide access to serverless functions within the Gatsby file structure. This allows you to quickly set up a serverless API for your Gatsby sites. For example, you can create a file in your Gatsby site at `/src/api/hello-world.js` with the following content:

```js
export default function handler(req, res) {
  res.status(200).json({ hello: `world` })
}
```

This will be available at the route `https://[YOUR_GATSBY_SITE].netlify.app/api/hello-world` and return the JSON `{“hello”:”world”}`.

To see Gatsby Functions fully supported on Netlify, check out the demo site:

* Demo site: [https://netlify-plugin-gatsby-demo.netlify.app/](https://netlify-plugin-gatsby-demo.netlify.app/)
* Source code: [https://github.com/netlify/netlify-plugin-gatsby/tree/main/demo](https://github.com/netlify/netlify-plugin-gatsby/tree/main/demo)

This site shows Gatsby Functions fully supported on Netlify using the Essential Gatsby plugin, and the source code is a great starting point for learning how Gatsby Functions can work!

## Try out the Essential Gatsby plugin and send feedback

Building a brand new Gatsby project on Netlify? We suggest you use the new Essential Gatsby plugin! This plugin is officially supported by Netlify and makes Gatsby work on Netlify “out of the box.”

Currently using the legacy Gatsby cache plugin ([netlify-plugin-gatsby-cache](https://github.com/jlengstorf/netlify-plugin-gatsby-cache#readme)) on your site? We recommend you [uninstall it](https://docs.netlify.com/configure-builds/build-plugins/#remove-a-plugin) and make the switch to the newer, officially supported Essential Gatsby plugin.

Here’s how to uninstall the legacy Gatsby cache plugin:

If you installed the Gatsby cache plugin through the Netlify UI, you can navigate to **Sites > Plugins** and then find the Gatsby cache plugin from your list of installed plugins. Then, click **Options > Uninstall** plugin to remove it.

Otherwise, you will need to remove the Gatsby cache plugin from your `netlify.toml` file and run `npm uninstall netlify-plugin-gatsby-cache` before installing the new Essential Gatsby plugin.


Once you get the new plugin running, please send us your feedback! You can open issues or discussions on the plugin repo and help us make Netlify’s Gatsby support even better!

* Plugin repository: [https://github.com/netlify/netlify-plugin-gatsby](https://github.com/netlify/netlify-plugin-gatsby)
* Package on npm: [https://www.npmjs.com/package/@netlify/plugin-gatsby](https://www.npmjs.com/package/@netlify/plugin-gatsby)
* Gatsby Functions docs: [https://www.gatsbyjs.com/docs/how-to/functions/](https://www.gatsbyjs.com/docs/how-to/functions/)

We can’t wait to see what you’ll build!
