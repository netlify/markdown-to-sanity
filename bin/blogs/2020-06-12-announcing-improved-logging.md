---
title: >
  Announcing Improved Netlify Build Logs!
description: >
  Your Netlify builds just got better with improved logging. Get deeper insights into what’s happening in your builds for an even better experience!
authors:
  - Jason Lengstorf
date: 2020-06-11T00:00:00.000Z
lastmod: 2020-06-11T00:00:00.000Z
topics:
  - tutorials
tags:
  - announcement
  - build
  - deploy
  - features
  - launch
  - netlify
tweet: ""
format: blog
seo:
  metatitle: >
    Announcing Improved Netlify Build Logs — See What’s Changed
  metadescription: >
    Your Netlify builds just got better with improved logging. Get deeper insights into what’s happening in your builds for an even better experience!
  ogimage: /img/blog/netlify-new-build-logs.png
relatedposts:
  - "Netlify Build Plugins Are Here!"
  - "A more flexible build architecture with updated Linux"
---

Netlify’s build logs just got better!

![Netlify’s improved build log output.](/img/blog/netlify-build-logs-2020-06.png)

**The new logs are designed to provide more useful information in a human-friendly format.** Here’s what you’ll find in the new logs:

1. Clearer information about the current deploy, including where your configuration is loaded from and the current [deploy context](https://docs.netlify.com/site-deploys/overview/?utm_source=blog&utm_medium=logs-jl&utm_campaign=devex#deploy-contexts).
2. Improved scannability to make it easier to find the information you need.
3. Visibility into which [Netlify Build Plugins](https://www.netlify.com/products/build/plugins/?utm_source=blog&utm_medium=logs-jl&utm_campaign=devex) are being loaded, where they’re loaded from, and what they’re doing during the build.

**The improved logging system is automatically available for all Netlify sites** using the Xenial build image. If your logs haven’t updated, you can [switch to the Xenial image in your settings](https://docs.netlify.com/configure-builds/get-started/?utm_source=blog&utm_medium=logs-jl&utm_campaign=devex#build-image-selection).

This is part of our ongoing effort to make Netlify the best platform for building fast, reliable websites.

Are you new to Netlify and want to see this in action? Why not [deploy your first site in one minute](https://app.netlify.com/start/deploy?repository=https://github.com/jlengstorf/onboarding-demo-site&utm_source=blog&utm_medium=logs-jl&utm_campaign=devex)?

Happy building!
