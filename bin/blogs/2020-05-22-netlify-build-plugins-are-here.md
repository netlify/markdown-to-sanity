---
title: Netlify Build Plugins Are Here!
description: Thanks to Build Plugins we can now optimize, customize, and
  automate our build process. This post is chock-full of resources to help guide
  you through making and using Build Plugins.
authors:
  - Tara Z. Manicsic
date: 2020-05-27T05:45:00.000Z
lastmod: 2020-08-03
topics:
  - news
tags:
  - build plugins
tweet: ""
format: blog
relatedposts:
  - "Netlify Milestones on the road to 1 Million Devs"
  - "Top 10 Netlify Build Plugins"
seo:
  metatitle: Introducing Netlify Build Plugins - Get More Jamstack Automation
  metadescription: Thanks to Build Plugins we can now optimize, customize, and
    automate our build process. This post is chock-full of resources to help
    guide you through making and using Build Plugins. Check it out!
  ogimage: /img/blog/bp-here.png
---
We are excited to announce the release of [Netlify Build Plugins](https://www.netlify.com/products/build/plugins/?utm_source=blog&utm_medium=bp-release-tzm&utm_campaign=devex) today! Build Plugins allow you to automate build tasks, customize your build process, and make your development process even easier. As a user of Build Plugins, you can take advantage of the one-click installs to [cache files](https://github.com/jlengstorf/netlify-plugin-gatsby-cache), [check for broken links](https://github.com/munter/netlify-plugin-checklinks), [trigger testing](https://github.com/tkadlec/netlify-build-plugin-speedcurve), and more. As a developer, creating Build Plugins keeps us in the realms of the familiar, relying on a plain 'ol JavaScript at its base.

Build Plugins are an additional piece of code that you can use by [adding them to your `netlify.toml` configuration file](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=blog&utm_medium=bp-release-tzm&utm_campaign=devex#install-a-plugin) or clicking the 'Install' button on your [Build Plugins page](https://app.netlify.com/enable-beta). Then, when you deploy or build your Netlify site, the code will run in the background at a designated event of the [build process](https://docs.netlify.com/configure-builds/get-started/). Plugins we have now will [look for accessibility failures](https://github.com/sw-yx/netlify-plugin-a11y), [add instagram](https://github.com/philhawksworth/netlify-plugin-add-instagram), [check for misspelled brand words](https://github.com/tzmanics/netlify-plugin-brand-guardian), and even [check if you're deploying outside of your set deployment hours](https://github.com/neverendingqs/netlify-deployment-hours-plugin). _That list is just skimming the surface of what you can do with Build Plugins_.

Although I could talk about Build Plugins for days, I thought I'd share with you some great resources from the community and our team at Netlify instead. Here are some resources, a list of posts on creating and using plugins, followed by a list of Build Plugins available today!

## Build Plugins Resources

* [Netlify Build Plugins Documentation](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=blog&utm_medium=bp-release-tzm&utm_campaign=devex)
* [Netlify Build repo](https://github.com/netlify/build)
* [Netlify Community on Build Plugins](https://community.netlify.com/c/Netlify-support/build-plugins)
* [Link to enable Build Plugins for your sites](https://app.netlify.com/enable-beta)

You can now find your Plugins page listed at the top of your Netlify dashboard.

![Netlify Build Plugins available on the App Dashboard](/img/blog/dashboard.jpg)

## Blog Posts & Tutorials

### [Building a Netlify Build Plugin 🔗](https://david.darn.es/article/2020/03/02/building-a-netlify-build-plugin/) by [David Darnes](https://david.darn.es/)

Not only does David walk you through the steps on how to use his [Ghost Markdown Plugin](https://github.com/daviddarnes/netlify-plugin-ghost-markdown) but also his thought process that lead him there.

### [Netlify Build Plugin for SpeedCurve 🔗](https://timkadlec.com/remembers/2019-10-18-netlify-speedcurve-build-plugin/) by [Tim Kadlec](https://timkadlec.com/)

Tim really likes SpeedCurve and really likes Netlify which lead him to create the [Netlify SpeedCurve Deploy Plugin](https://github.com/tkadlec/netlify-build-plugin-speedcurve). Read all about it in his great post.

![Netlify Build Plugin for SpeedCurve build output](/img/blog/speed-curve.jpg)

### [Enable Gatsby Incremental Builds on Netlify 🔗](https://www.netlify.com/blog/2020/04/23/enable-gatsby-incremental-builds-on-netlify/?utm_source=blog&utm_medium=bp-release-tzm&utm_campaign=devex) by [Jason Lengstorf](https://www.netlify.com/authors/jason-lengstorf/?utm_source=blog&utm_medium=bp-release-tzm&utm_campaign=devex)

In this post Jason covers how to boost your Gatsby build time with the [Gatsby Cache](https://github.com/jlengstorf/netlify-plugin-gatsby-cache) and incremental builds. Get faster build times by following this quick and easy post.

### [Deploying Nx monorepos to Netlify 🔗](https://www.netlify.com/blog/2020/04/21/deploying-nx-monorepos-to-netlify/) by [Rareș Matei](https://twitter.com/volkeron?lang=en)

The more I work with Build Plugins, the more ways I learn they can be used. Rareș uses Build Plugins to help strategically deploy sites with monorepos and this is a great in-depth post on just that.

![Build Plugins, Monorepos, and Nx - code snippet screenshot](/img/blog/nx.jpg)

### [Run Cypress Tests on Netlify Using a Single Line 🔗](https://www.cypress.io/blog/2020/03/30/run-cypress-tests-on-netlify-using-a-single-line/) by [Gleb Bahmutov](https://glebbahmutov.com/)

Netlify Build Plugins were built to help make your development process even smoother. Gleb showcases a great use case for running Cypress tests with a Build Plugin and how to use it.

![Cypress on Netlify Plugins output screenshot](https://cypress-io.ghost.io/blog/content/images/2020/03/Screen-Shot-2020-03-24-at-10.51.59-PM-1.png)

### [Localize your environment variables by context with build plugins  🔗](https://www.netlify.com/blog/2020/05/21/localize-your-environment-variables-by-context-with-build-plugins/?utm_source=blog&utm_medium=bp-release-tzm&utm_campaign=devex) by [Divya Tagtachian](https://www.netlify.com/authors/divya-tagtachian/?utm_source=blog&utm_medium=bp-release-tzm&utm_campaign=devex)

Divya created a Build Plugin to make the process of local development easier. In this post she'll cover what this plugin helps with and how to use it.

### [Creating and using your first Netlify Build Plugin 🔗](https://www.netlify.com/blog/2019/10/16/creating-and-using-your-first-netlify-build-plugin/?utm_source=blog&utm_medium=bp-release-tzm&utm_campaign=devex) by [Sarah Drasner](https://www.netlify.com/authors/sarah-drasner/?utm_source=blog&utm_medium=bp-release-tzm&utm_campaign=devex)

Get an overview of what the Build Plugins are, how to build them, and how to use them. You'll also learn how to make a plugin with Twilio in this post from [Sarah](https://www.netlify.com/authors/sarah-drasner/?utm_source=blog&utm_medium=bp-release-tzm&utm_campaign=devex).

Speaking of the talented devs in our community. Let's look at some of the awesome plugins they have created.

## Build Plugins' Repos

You can see all the available Build Plugins listed in this [list](https://github.com/netlify/plugins). Here are a few plugins, a little information about them, and their repos.

### [Sentry Build Plugin repo 🔗](https://github.com/getsentry/sentry-netlify-build-plugin)

Already using Sentry and want an easy way to incorporate it into your build? This plugin notifies Sentry of new releases being deployed to your site.

### [Prerender SPA repo 🔗](https://github.com/shortdiv/netlify-plugin-prerender-spa)

This plugin prerenders each page of your single page application (SPA). Using Netlify forms? Prerender SPA will aid in the discovery process with that too!

### [Fetch Feeds repo 🔗](https://github.com/philhawksworth/netlify-plugin-fetch-feeds)

Fetch Feeds is a very aptly named plugin (and if you know it's author, [Phil Hawksworth](https://www.netlify.com/authors/phil-hawksworth/?utm_source=blog&utm_medium=bp-release-tzm&utm_campaign=devex), you'd know that's a feat in itself). If you have an RSS feed or a remote feed via JSON, this plugin pulls in the information and even caches it.

### [Visual Diff (Applitools) repo 🔗](https://github.com/jlengstorf/netlify-plugin-visual-diff)

Using Applitools, this Build Plugin will run a visual diff test with Cypress and fail the build if there are visual differences. You can then review and approve the changes with Applitools and rebuild your site.

## Time to Build

I hope these resources help inform, entertain, and inspire you! There are so many ways Build Plugins can make your development process work better for you. If you have any questions, please join us in the [Netlify Community](https://community.netlify.com/c/Netlify-support/build-plugins). I can't wait to see how you make them work for you! Happy coding 👩🏻‍💻!

---

_This post has been featured on **[Netlify Milestones on the road to 1 Million Devs](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#launched-build-plugins)**_:

[![Netlify 1 Million Devs article feature](/img/blog/featured-on-1-million-devs-banner.png)](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#launched-build-plugins)