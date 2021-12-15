---
title: Fearless deploys for your lingering processes
description: 'We introduced a small feature to our build-image: a lingering process monitor'
authors:
  - Bret Comnes
date: '2018-11-28'
topics:
  - news
tweet: 'We introduced a small feature to our build-image: a lingering process monitor'
format: blog
draft: true
---
We introduced a small feature to our build-image: a lingering process monitor.

A common head scratcher our customers run into is trying to figure out why their CI builds are hanging until they hit a build timeout.  It turns out, unintentionally spawning a side process that never ends during a build prevents our build bots from ending a build cleanly.  Oftentimes, this is done unintentionally, but if you don’t realize these sub-processes are still running, it can be confusing to debug.

Now, when your primary build script exits, we look for any lingering processes that are still running.  If any lingering processes are found, we print a warning with some process info.

![](/v3/img/blog/process-monitor.png)

We hope you find this warning helpful and that it helps save you some time while debugging your builds.  If you are curious to see behind the curtain, check out the changes on the [build-image](https://github.com/netlify/build-image/pull/202/commits/b3d65d7c5e75f4a44b932e6b7b6ea54b743690e8) repo.
