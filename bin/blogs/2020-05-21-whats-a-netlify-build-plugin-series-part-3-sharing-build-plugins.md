---
title: "What's a Netlify Build Plugin Series: Part 3 - Sharing Build Plugins"
description: In part 3 of the `What is a Netlify Build Plugin` we'll go over how
  to share your lovely build plugins and find other plugins in the community!
authors:
  - Tara Z. Manicsic
date: 2020-05-26T00:00:00.000Z
lastmod: 2020-07-09
topics:
  - tutorials
tags:
  - Build Plugins
  - Build
tweet: ""
format: blog
relatedposts:
  - "What's a Netlify Build Plugin Series: Part 1 - Using Build Plugins"
  - "Top 10 Netlify Build Plugins"
seo:
  metadescription: Read part 3 of the What is a Netlify Build Plugin series where
    we'll go over how to share your lovely new build plugins and find other
    plugins to utilize within the community!
  metatitle: "What's a Netlify Build Plugin Series: Part 3 - Sharing Build Plugins"
  ogimage: /v3/img/blog/plugins-og-25.png
---
This is part 3 of a series on [Netlify Build Plugins](https://docs.netlify.com/configure-builds/build-plugins/) where we'll publish, share, and discover Build Plugins. If you've been following along, welcome back! If this is your introduction to the series, welcome! Let me fill you in on each part of the series. Here's the breakdown:

* **[Part 1: Using Build Plugins](https://www.netlify.com/blog/2020/04/30/whats-a-netlify-build-plugin-series-part-1-using-build-plugins/?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex)** We dig into the process of enabling Build Plugins through the UI. Then we take a look at how to incorporate them into our project both locally and in production builds. To round it out, we also look into how to disable Build Plugins and remove them from our projects.
* **[Part 2: Making Build Plugins](https://www.netlify.com/blog/2020/05/20/whats-a-netlify-build-plugin-series-part-3-making-build-plugins/?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex)** This post will walk through how to make a Build Plugin and will touch on each build event we can utilize. The Build Plugin we make will be the one we used in [Part 1](https://www.netlify.com/blog/2020/04/30/whats-a-netlify-build-plugin-series-part-1-using-build-plugins/?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex) (so meta, I know). This plugin will showcase other features like using inputs, handling errors, pulling in project constants, and more.
* **Part 3: Publishing & Sharing Build Plugins** (you are here) It helped me to see what awesome Build Plugins other developers were making. So, for this post not only will we point to other Build Plugins in the ecosystem but we’ll also see how to publish and share the Build Plugin we create. Sharing is caring after all.

In this post today, we'll cover a few things:

* Publishing Build Plugins
* Sharing your plugin
* Checking out some published and shared plugins

To get us started let's jump into publishing the Build Plugin we created in [part 1](https://www.netlify.com/blog/2020/04/30/whats-a-netlify-build-plugin-series-part-1-using-build-plugins/?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex).

> [🐙 Here's the repo for the plugin we're using](https://github.com/tzmanics/netlify-plugin-to-all-events).

## Publishing Plugins

In [part 2](https://www.netlify.com/blog/2020/05/20/whats-a-netlify-build-plugin-series-part-3-making-build-plugins/?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex) we covered creating the `package.json` requirements for our Build Plugin. Just to recap we want to include:

### `package.json` Pro Tips

* `name`: it should start with "netlify-plugin-" (e.g. "project-name" -> "netlify-plugin-project-name"), this should be the same as the "name" field in the plugins [`manifest.yml`](https://github.com/netlify/build#anatomy-of-a-plugin) file.

  > 💫 Extra bonus points if your Build Plugin's repo name matches this name field (for instance: <https://github.com/tzmanics/netlify-plugin-to-all-events>).

* `keywords`: this field should contain "netlify" and "netlify-plugin" keywords
* `repository` and `bugs`: these should be set to the plugins repo and the issues path of the repo respectively. These are displayed to users when an error occurs inside your plugin.

> [🐙 Feel free to checkout the demo projects `package.json` file to see what the complete file looks like](https://github.com/tzmanics/netlify-plugin-to-all-events/blob/master/package.json).

### Pushing the Publish

Using [npm](https://www.npmjs.com/) we can add the Build Plugin to the ecosystem to make it easier for the whole world to use it. To do this we run two commands:

* `npm login`: to login to npm in order to publish
* `npm publish`: too add the plugin to the npm registry

> 🧐 Each time we publish new updates we'll need to [update the version](https://docs.npmjs.com/about-semantic-versioning) of that package beforehand using `npm version <patch | minor | major>`.

![output of the publish commands](/v3/img/blog/publish.jpg)

With that the plugin will be available to be used by the masses.

## Spread the Plugin Love

npm is a huge registry so we'll want to add our plugin somewhere everyone who needs it can find it. May introduce you to the [Build Plugins repo](https://github.com/netlify/plugins) where you can find a list of [current plugins](https://github.com/netlify/plugins#community-plugins). There is a [Contributing](https://github.com/netlify/plugins#contributing) section that will list updated steps if they every change. For now, there are just a few simple steps.

1. Clone or Fork the [plugins repo](https://github.com/netlify/plugins#community-plugins).
2. Edit the [`plugins.json`](https://github.com/netlify/plugins/blob/master/plugins.json) file to add your plugin information including:

   * `author`: your name, username, or secret cool alias
   * `description`: a short description of what your plugin does
   * `name`: the plugin name
   * `package`: the name of the library as you would find it in the npm registry
   * `repo`: the plugin's git repository link
   * `version`: the current, published version of your plugin

   ```json
   {
     "author": "tzmanics",
     "description": "🔌A Netlify Build Plugin to show you how to use Netlify Build Plugins",
     "name": "Plugin To All Events",
     "package": "netlify-plugin-to-all-events",
     "repo": "https://github.com/tzmanics/netlify-plugin-to-all-events",
     "version": "1.3.1"
   },
   ```

   *This is what was added for the plugin we created in [part 2](https://www.netlify.com/blog/2020/05/20/whats-a-netlify-build-plugin-series-part-3-making-build-plugins/?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex).*

3. Once the amazing plugin information is added, we can run `npm run docs` in the base directory to generate the new code with our additions.

4. The last step is to push your code up and make a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request). We'll review your plugin, ping you with any questions, and get your plugin added to the master list.

Technically that's the last step, but you can always feel free to shout about your extraordinary plugin from the Twitter rooftops, or inside the [Netlify Community Build Plugins group](https://community.netlify.com/c/Netlify-support/build-plugins?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex). We're always stoked to hear about what you make!

## Look, Ma, More Plugins

If you had a look at the `plugins.json` file we just added to, you may have noticed some of the other fine Build Plugins in the list. We're really lucky to have some great devs in the community building out plugins for us all to use. I wanted to highlight a few here to let you know what's out there. Let's dive in.

| What it is                                                                              | What it does                                                      |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [Subfont 🔗](https://github.com/munter/netlify-plugin-subfont)                          | optimizes your site's font loading strategy for best performance  |
| [a11y 🔗](https://github.com/sw-yx/netlify-plugin-a11y)                                 | checks for accessibility failures                                 |
| [Fetch Feeds 🔗](https://github.com/philhawksworth/netlify-plugin-fetch-feeds)          | fetches and caches remote RSS and JSON feeds                      |
| [Prerender SPA 🔗](https://github.com/shortdiv/netlify-plugin-prerender-spa)            | prerenders your SPA into separate pages                           |
| [Visual Diff (Applitools) 🔗](https://github.com/jlengstorf/netlify-plugin-visual-diff) | checks for any visual changes and gets approval before going live |
| [Cypress 🔗](https://github.com/cypress-io/netlify-plugin-cypress)                      | runs Cypress end-to-end tests after build                         |

## Netlify Un-Unplugged

With this last part of the "What's a Netlify Build Plugin" series, we now have the tools to use, build, and share [Build Plugins](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex). Throughout this series I keep saying that the possibilities are endless. I truly believe there's so much that can be built. So, if you have ideas please share them with us [on Twitter](https://twitter.com/netlify) or in the [Netlify Community](https://community.netlify.com/c/Netlify-support/build-plugins?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex). Better yet, show us the awesome plugin that you created to share with the community! Happy coding 👩🏻‍💻!

## Resources for the Road

* [Part 1](https://www.netlify.com/blog/2020/04/30/whats-a-netlify-build-plugin-series-part-1-using-build-plugins/?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex) and [part 2](https://www.netlify.com/blog/2020/05/20/whats-a-netlify-build-plugin-series-part-3-making-build-plugins/?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex) of this series
* [Build Plugin Docs](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex)
* [Plugins repo](https://github.com/netlify/plugins)
* [Localize your environment variables by context with build plugins](https://www.netlify.com/blog/2020/05/21/localize-your-environment-variables-by-context-with-build-plugins/?utm_source=blog&utm_medium=what-plugin-3-tzm&utm_campaign=devex)