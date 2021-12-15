---
title: "Netlify Build Plugin of the Week: Ghost Inspector"
description: Learn how to run end-to-end tests on every Netlify build with Ghost
  Inspector's Netlify Build Plugin.
authors:
  - Charlotte Dillon
date: 2021-06-24
lastmod: 2021-06-23
topics:
  - tools
tags:
  - Build Plugins
  - Testing
  - CI
  - E2E
  - QA
tweet: ""
format: blog
relatedposts:
  - "What's a Netlify Build Plugin Series: Part 1 - Using Build Plugins"
  - "Netlify Build Plugin of the Week: Cypress"
seo:
  metatitle: How to Run Ghost Inspector Tests Within Netlify
  metadescription: Learn how to run end-to-end tests on every Netlify build with
    Ghost Inspector's Netlify Build Plugin.
  ogimage: /v3/img/blog/ghost-inspector-og.png
---
Bugs in prod? [Ghost Inspector](https://ghostinspector.com/) is here to ~~haunt~~ help! With their brand new [Netlify Build Plugin](https://app.netlify.com/plugins/netlify-plugin-ghost-inspector/install), you can run your E2E tests on every Netlify build.

Ghost Inspector makes it easy to get started with end-to-end testing. Their product allows you to record and run automated browser tests for your websites and web apps from the cloud. Plus, their no-code editor makes it simple to build and maintain automated tests, and advanced features allow experienced testers to dig further into edge cases.

Once you’ve built your tests—which can take 10 minutes or less—the Ghost Inspector Build plugin will automatically run your tests on every Netlify deploy, allowing you to bake E2E testing into your deployment process.

![](https://lh5.googleusercontent.com/HufnIVO426f9FvjYBBSxgOPFY2cQOJ0WtJ5TBbn5PtValepeVM1s-UV3o1X3vSAK_pR2FijpXl2HkKnkaXUa22u_uKgaVOhIkHM4JQafPy1k45afKROS3zOsAkFeiaNfA3z5aej5)

You can also configure [which deploys you’d the plugin to run on](https://www.netlify.com/blog/2021/05/06/now-available-configure-build-plugins-by-deploy-context/). Plugins run in all contexts, by default, but you can easily configure Ghost Inspector to, for example, run after the deploy for previews, but before the deploy for production. That way, you get full E2E experience during development and test, but don’t risk having a failing production build go live.

You can install this plugin in the Netlify UI from this [direct in-app installation link](https://app.netlify.com/plugins/netlify-plugin-ghost-inspector/install) or from the [Plugins directory](https://app.netlify.com/plugins). If you're interested in seeing exactly how the code works, or suggest an improvement, you can visit the [public repository on GitHub](https://github.com/ghost-inspector/netlify-plugin).

<p style="text-align:center"><a href="https://app.netlify.com/plugins/netlify-plugin-ghost-inspector/install" class="button">Get the Ghost Inspector Build Plugin</a></p>

Looking for more ways to power up your builds? [Check out our entire catalog of Build Plugins](https://app.netlify.com/plugins). Learn more about what’s possible with plugins and even [create your own](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/).