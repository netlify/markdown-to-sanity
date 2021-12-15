---
title: Some Jamstack features you should use more often
description: Learn some need to know Jamstack features that will help you and your team get the best out of the Jamstack.
authors:
  - Ekene Eze
date: 2021-06-17
lastmod: 2021-06-17
topics:
  - tutorials
tags:
  - SEO
  - Jamstack
  - DPR
tweet: ""
format: blog
seo:
  metatitle: Some Jamstack features you should use more often
  metadescription: "Learn some need to know Jamstack features that will help you and your team get the best out of the Jamstack"
---

So you're building the web with Jamstack and a host of other modern tools and services. That's great, but are you making the best use of the features available to you? Maybe. But, in case you're not, here are some cool features on the Jamstack that you should use more often.

## Automate communications with build hooks

The Jamstack way of building the web relies on enabling smooth and seamless communications between multiple services. If you're building a blog for instance and you're using [Sanity](https://www.sanity.io/) as your content management system, how do you tell Netlify that you've published a new blog post on Sanity? That's where build hooks come in.

You can tell Netlify to do whatever you want (rebuild your site, rebuild a certain branch, or do nothing) when there's an update in any of your sites' dependencies (Hasura, Sanity, Cloudinary, etc).

## Cache em all

This might be a little too obvious but what's the point of building the Jamstack way if you're not taking advantage of its caching benefits. Caching your sites content helps your site's performance and ensures that your content is steadily available to your users (amongst other benefits). If you're hosting your Jamstack site's on Netlify, you don't need to do anything extra to take advantage of caching, we do it for you by default.

On us:

- Running your build
- Intelligently updating your assets
- Configuring the CDN
- Managing the cache

On you:

- What your site does
- How to celebrate another successful launch

## Personalize your 'things' with build Plugins

Do you find yourself building/doing the same things in every project? Perhaps you can make it a build plugin and reuse it every time you need it. Build plugins allow you to hook into your projects build process and run custom JavaScript code at different times in the build lifecycle. Netlify provides build events like:

- `onStart` - runs when your site's build process starts,
- `onEnd` - runs when your site finishes building,
- `onError` - runs when there's an error in your build process,
- etc.

You can also use ready-made plugins with your sites:

- Generate search indexes with [Algolia's Netlify plugin](https://www.npmjs.com/package/@algolia/netlify-plugin-crawler)
- Sweep for vulnerabilities with [Snyk's Netlify plugin](https://www.npmjs.com/package/netlify-plugin-snyk)
- Automate speed testing with [Speedcurve's Netlify plugin](https://www.npmjs.com/package/netlify-build-plugin-speedcurve)
- Run test suites with [Cypress Netlify plugin](https://www.npmjs.com/package/netlify-plugin-cypress)
- Support advanced NextJS features with our [Essential Next plugin](https://www.npmjs.com/package/@netlify/plugin-nextjs)

## Put it all on Git

This is probably the most useful of them all. Putting your site on a Git provider unlocks another level of shipping and collaboration for you (and your team if you have one). Features like [deploy previews and commenting](https://www.netlify.com/blog/2021/05/19/give-meaningful-feedback-with-collaborative-deploy-previews/), pull requests, branch deploys, and so on, will be available to you on a Git provider.

Most hosting providers, including Netlify, have support for Git providers out of the box. I like to believe that this will be a win-win situation for you if you don't already use Git to version control your sites.

## Defer non-critical page builds

If you're building large sites on the Jamstack, then you've probably had to deal with long build times. [Distributed persistent rendering](https://www.netlify.com/blog/2021/04/14/distributed-persistent-rendering-a-new-jamstack-approach-for-faster-builds/) is a new approachh that makes it possible for you to defer some of your sites content to build at first request time.

This means that you only have to build the critical parts of your site at build time. This will significantly reduce your build, and even preserve your user's experience since subsequent requests to the same assets will be served from the CDN.

## Branch deploys

If you've ever felt like you needed different environments when working with the Jamstack, make branch deploys your friend. It's almost inevitable in some cases where you're working in a team and everyone is working on different things. Then you'd probably need a QA environment or perhaps a staging/production environment. They can all be branches on your project repository.

Netlify Build generates perfectly replicated environments to serve your site for any branch in your git repository. It's like magic (except you can understand it).

![branch deploys](https://res.cloudinary.com/kennyy/image/upload/v1623872965/branches_vwceey.png)

## Use background functions for long-running tasks

Often when working on Jamstack applications, we need a solution for long-running tasks. We usually rely on serverless functions to communicate with other services but they can only run for 10 seconds before timing out.

So what happens when you want to perform an operation that takes more than 10 seconds? Like image transformation, file uploads, etc. That's where [background functions](https://docs.netlify.com/functions/background-functions) come in.

These special types of serverless functions run asynchronously for at least 15 minutes. This means you can give feedback to users or do whatever else you want while background functions complete long-running tasks on their own time.

## Conclusion

This is not a comprehensive list as I'd also like to see more developers making the best use of features like `atomic deploys`, `instant cache invalidation`, `immutable deploys` and so on. That said, I hope this post helps you pick up on some of these awesome features that make life easier for us as developers and make the experience of our users second to none.
