---
title: 'Intelligent deploy skipping: An automatic optimisation'
description: Saving build minutes and increasing efficiency with automatic deploy skipping
authors:
  - Phil Hawksworth
date: '2019-10-10'
topics:
  - tutorials
tags:
  - Build
  - CI
  - Deployments
  - Automation
tweet: ''
format: blog
---
The Netlify build infrastructure has a lot of smart things going on under the surface. One of its features, which you might not be aware of, has existed for years. And although you may already have taken advantage of it, it's possible that you never even knew it was there.

Arise, automatic intelligent deploy skipping!

### Let me explain...

The Build bots are smart enough to know to skip some deploys without you needing to intervene or configure anything. It is part of how we built the infrastructure to handle the considerable load of regular and numerous builds from an active and thriving development community.

### Which builds get skipped?

If you rapidly trigger multiple deploys, the Netlify Build bots will immediately action your first request, and then quietly queue up all of your subsequent requests. Once your active deploy has completed, they will skip over all of the queued requests which came in while they were busy building, and then action the final deploy in the queue.

This has the effect of always ensuring that your most recent deployment is carried out, while minimising wasted energy and build minutes on intermediate deployments.

All of this happens without any need for any action from you. It is part of the system's intelligence.

<iframe width="560" height="315" src="https://www.youtube.com/embed/CuGeaHaW0Rc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Of course, you can also specifically [instruct Netlify to skip a build](/blog/2018/10/08/get-more-control-over-netlify-continuous-deployment-with-deploy-skipping/) even while auto-publishing is turned on. Adding the text `[skip ci]` to your commit messages will achieve that. And you can also choose to [terminate active deploys manually](https://www.netlify.com/blog/2019/06/04/introducing-cancelable-deploys/) if you need to.

For more [discussion about ways to optimise your deployments](https://community.netlify.com/t/common-issue-how-can-i-optimize-my-netlify-build-time/3907?utm_source=blog&utm_medium=intelligent-deploy-skip-pnh&utm_campaign=devex) and anything else related to Netlify, head on over to the [Netlify Community forum](https://community.netlify.com?utm_source=blog&utm_medium=intelligent-deploy-skip-pnh&utm_campaign=devex).
