---
title: International Service Worker Caching Awareness Day
description: >-
  The #1 issue our users have with service workers, and how we recommend fixing
  it
authors:
  - swyx
  - Gerald Onyango
  - Dennis Padiernos
date: '2018-09-21'
topics:
  - tutorials
tags:
  - PWAs
  - Service Workers
  - Support
tweet: >-
  The #1 issue our users have with service workers, and how we recommend fixing
  it
format: blog
---

When [Phil Karlton noted in the late 90's](https://skeptics.stackexchange.com/questions/19836/has-phil-karlton-ever-said-there-are-only-two-hard-things-in-computer-science) that cache invalidation was a hard problem in computer science, he likely didn't have service workers in mind!

Caching is hard. It is one of the biggest pain points in web development that we at Netlify aim to ease by automatically taking on that responsibility for you. Service Workers put **unprecedented control** into the hands of developers, enabling all sorts of offline-first and performance benefits. But they can also put the responsibility of managing caches back into the hands of the developer. And they can be rather complex.  So much so that one of **Netlify’s top support ticket causes is service workers!**

## What is a service worker?

We'll quote Google:

> A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. The core feature... is **the ability to intercept and handle network requests, including programmatically managing a cache of responses ... \[which] allows you to support offline experiences.** — [Google Web Fundamentals](https://developers.google.com/web/fundamentals/primers/service-workers/)

A service worker sits "between" your app and the web,  managing a cache of data and resources offline, giving your app the "progressive" user experience no matter how bad your connection is.

![https://cdn-images-1.medium.com/max/1600/1*oOcY2Gn-LVt1h-e9xOv5oA.jpeg](https://cdn-images-1.medium.com/max/1600/1*oOcY2Gn-LVt1h-e9xOv5oA.jpeg)

## Who caches the cachers?

Service workers actually manage their caches fine. The problem comes when browsers try to **cache the service workers.**

Then all hell breaks loose, especially since the developer can't see the service worker unless they go looking for it.

**Browsers cache service workers for 24 hours by default**, and don't update them when you reload your page. As a developer you can remember to [manually clear the cache](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Developer_tools) or [check Update on Reload in Chrome](https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#update_on_reload), but your users won't be so lucky — when you make breaking changes to your APIs (if you even so much as move one file) that your service worker relies on, your users who still have your app open will refresh and see big scary errors like these:

![https://i.stack.imgur.com/y7tyK.png](https://i.stack.imgur.com/y7tyK.png)

When a stale endpoint request is combined with a catch-all file serving strategy that serves `index.html` for all routes (a common Single-Page App setup), the browser could try to parse your HTML as a JavaScript file or JSON object, resulting in unhelpful errors like: 

```
unexpected token '<'
```

Even worse for your support team, when users report these issues, time will have passed or their local environment will be different, so they won't be able to reproduce these errors! Isn't that fun! (Narrator: no, it was not fun.)

## Set your cache headers

To solve these issues, you need to set a cache-control header for your service worker file:

```
cache-control: max-age=0,no-cache,no-store,must-revalidate
```

For Netlify users, this means setting a [Custom Header](https://www.netlify.com/docs/headers-and-basic-auth/#custom-headers) like so:

```
/path/to/serviceworker.js
    cache-control: max-age=0,no-cache,no-store,must-revalidate
```

Alternatively, like every other Netlify setting you can set this up to be automatically configured in your templates within [your netlify.toml file](https://www.netlify.com/docs/netlify-toml-reference/#headers):

```
[[headers]]
  for = "/path/to/serviceworker.js"
  [headers.values]
    cache-control = "max-age=0,no-cache,no-store,must-revalidate"
```

This tells your browser to always check the server for updated versions of your service worker file instead of waiting for the default expiry time (usually 24 hours). Now your service workers will at least be up to date whenever they themselves try to make requests!

## updateViaCache in Registration

We can't break the progressive web, but there have been moves toward making service workers work like this without having to fiddle with cache headers. [In Chrome 68 and above](https://developers.google.com/web/updates/2018/06/fresher-sw#updateviacache), you can pass `updateViaCache: 'none'` when registering your service workers:

```js
navigator.serviceWorker.register('/sw.js', {
  updateViaCache: 'none' // this is new
});
```

We aren't sure about other browsers supporting this API at this time.

## Spread Awareness!

In light of all this confusion, we have decided to anoint Sept 21 as International Service Worker Caching Awareness Day! 

(Fun fact, [on this day in 1866 H.G. Wells was born](http://www.historynet.com/today-in-history), and we'd like to think he'd like Service Workers as the stuff of science fiction!)

Did you know you were caching service workers?  Do you have better ways of dealing with service worker expiry than what we have described? What other trip-ups have you experienced? Hit us up on [the Netlify Twitter](https://twitter.com/netlify) and we'll RT your tips and war stories!

P.S. we also recommend [this Rich Harris gist on other handy Service Worker gotchas](https://gist.github.com/Rich-Harris/fd6c3c73e6e707e312d7c5d7d0f3b2f9)!
