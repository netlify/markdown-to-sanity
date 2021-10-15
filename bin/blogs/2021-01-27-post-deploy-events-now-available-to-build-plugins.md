---
title: Post-deploy Events Now Available to Build Plugins
description: Netlify Build plugins can now run tasks after assets are deployed,
  opening the door to live performance and acceptance testing and timely
  connections with other services.
authors:
  - Jessica Parsons
date: 2021-01-28
lastmod: 2021-01-28
topics:
  - news
tags:
  - build plugins
tweet: ""
format: blog
relatedposts:
  - "Top 10 Netlify Build Plugins - 2021 Update"
  - "Netlify Build Plugins Are Here!"
seo:
  metatitle: "Get Post-deploy Events - Now Available in Netlify Build Plugins"
  metadescription: "Netlify Build Plugins can now run tasks after assets are deployed. Learn how this opens the door to production perf and acceptance testing and timely connections with other services."
  ogimage: /img/blog/post-deploy-events-netlify-build-plugins.png
---
Build Plugins enable you to "plug in" to different [event stages](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/#plug-into-events) in the build-deploy lifecycle, running custom automated tasks right at the time when they're needed. This week, we're excited to announce an expansion of those capabilities.

Until recently, Build Plugin event handlers were limited to the "build" portion of the lifecycle, ranging from just before the build command, with `onPreBuild`, to just before deploying site assets, with `onPostBuild`.

But many customers and plugin authors have wanted their plugins to access the site *after* it's gone live. Now, we have two events for that purpose:

- `onSuccess` runs after a successful site deploy. This matches the timing of "Deploy succeeded" [notifications and webhooks](https://docs.netlify.com/site-deploys/notifications/).
- `onEnd` runs at the very end of the build-deploy lifecycle, regardless of whether the deploy succeeded or failed.

Note that because the site has already been deployed live (or failed) by the time an `onSuccess` or `onEnd` event runs, plugins can't use that event to fail the build/deploy. However, they *can* report errors or failures back to the deploy summary to recommend changes for the next deploy.

Post-deploy event handlers open up a variety of powerful new plugin capabilities, including:

- **Crawling live deploy URLs.** Algolia has been using a special preview version of `onSuccess` to generate site search indexes with their [Algolia Crawler plugin](https://github.com/algolia/algoliasearch-netlify#readme).
- **Running performance audits.** Several plugins use services like [SpeedCurve](http://app.netlify.com/plugins/netlify-build-plugin-speedcurve/install), [PerfBeacon](http://app.netlify.com/plugins/netlify-build-plugin-perfbeacon/install), [PageWatch](http://app.netlify.com/plugins/netlify-plugin-pagewatch/install), [Dareboost](http://app.netlify.com/plugins/netlify-build-plugin-dareboost/install),  and [DebugBear](http://app.netlify.com/plugins/netlify-build-plugin-debugbear/install) to generate Lighthouse scores and compare metrics between deploys.
- **Sending timely deploy data.** The [submit sitemap plugin](http://app.netlify.com/plugins/netlify-plugin-submit-sitemap) uses `onSuccess` to send a fresh sitemap to search engines as soon as the deploy is live, and not a minute sooner.
- **Testing Netlify Functions responses.** Functions aren't available until they're deployed, so post-deploy events now enable functions testing right in your build. We're happy to send updates to the customers who requested this!
- **Quicker access to Deploy Previews.** Some tests don't need to fail the build. By moving them post-deploy, you can check your preview sooner, and let the tests keep running in the background.

## Try it yourself

You can take advantage of this new post-deploy functionality by installing one of the plugins mentioned above or another from the [plugins directory](https://app.netlify.com/plugins?_ga=2.167607294.1930832954.1611607523-314182322.1587015855).

Or you can make your own plugin! [Check out the docs to learn how.](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/)

As you work with Netlify Build Plugins, we'd love to find out more about how you're using them and what features you'd like to have in the future. (Perhaps an `onPreInstall` event handler?) We're always happy to chat in the [Community Forums](https://community.netlify.com/).