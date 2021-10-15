---
title: Tech Partners Create Custom Build Plugins to Reach Developers in Their Workflow
description: "At Jamstack Conf, we learned how three technology
  partners — Algolia, Nimbella, and Snyk — integrated their services into the
  developer workflow with Netlify Build Plugins."
authors:
  - Jessica Parsons
date: 2020-10-07T17:00:00.000Z
lastmod: 2020-10-07
topics:
  - news
tags:
  - netlify
  - product
  - plugins
tweet: ""
format: blog
relatedposts:
  - "Netlify Build Plugins Are Here!"
  - Choosing your APIs for Jamstack
seo:
  metatitle: Netlify Tech Partners Creating Build Plugins
  metadescription: "Learn how 3 technology partners — Algolia, Nimbella, and Snyk — have integrated their services into the developer workflow with Netlify Build Plugins."
  ogimage: /img/blog/plugins-og-64.png
---
This week, as part of Jamstack Conf, we’re revisiting Build Plugins and highlighting how three technology partners — Algolia, Nimbella, and Snyk — have integrated their service offerings directly into the developer workflow with Netlify.

Earlier this year, Netlify announced the release of [Build Plugins](https://www.netlify.com/blog/2020/05/27/netlify-build-plugins-are-here/), a new way to customize and automate tasks within the build process. Since then, the plugins directory has grown to include more than 40 unique plugins authored by community members and tech partners.

For tech partners, Netlify Build Plugins offer an opportunity to seamlessly integrate their service into a critical step in the development lifecycle. Services that check for errors or issues can run directly in the build, such that any failures will block the deploy. 

However, when a Build Plugin depends on tokens or login credentials to integrate with a service, this can pose a challenge. How can we make the integration experience smooth and frictionless for developers? 

During this fall’s Jamstack Conf, we reviewed three examples of partner plugins using different methods to connect: environment variables, custom OAuth apps, and the Netlify partner add-ons API. 

You can replay the Lightning Launch session to see how these integrations work. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/U_JPafSqkaE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Featured Plugins

In the session, we featured three of our newest additions to the Build Plugins directory:

* **Snyk Security Plugin.** Checks your code for vulnerabilities, fails the build if issues are found, and provides tools to automatically correct security problems. See [an example of how it works](https://snyk.io/blog/how-to-deploy-a-vue-js-jamstack-application-on-netlify/) with a Vue.js app, or install the plugin [here](https://app.netlify.com/teams/netlify/plugins/netlify-plugin-snyk/install).
* **Algolia Search Crawler.** Indexes your site for search after each deploy. [Sign into Algolia and install the plugin](https://crawler.algolia.com/admin/netlify).
* **Nimbella Plugin.** Deploys functions from your repo to Nimbella cloud, enabling extended runtimes using languages like Java, Python, PHP, Rust, and more. [Deploy a sample site with the Nimbella plugin](https://app.netlify.com/start/deploy?repository=https://github.com/nimbella/netlify-plugin-nimbella.netlify.app&stack=nimbella).

We’re so excited to introduce developers to these fantastic services which extend what’s possible with Netlify, whether that means developing a more dynamic web application or keeping sites safe and secure. As more developers embrace full-stack Jamstack development, we anticipate these types of plugins and integrations will become an even more essential part of the developer workflow for teams.

## Have an idea for a Build Plugin for your business or service?

You can get started building your first Build Plugin today. When you’re ready to share your plugin with others, you can do so via npm or list it within the Netlify plugins directory. All of the details you need to get started are outlined [in the Netlify docs](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/). 

If you’re working on behalf of a business and want to discuss an idea for a more bespoke plugin integration, we’d love to hear from you! You can reach us directly at [partners@netlify.com](mailto:partners@netlify.com).
