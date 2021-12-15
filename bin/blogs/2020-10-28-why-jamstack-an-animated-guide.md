---
title: Why Jamstack? An Animated Guide
description: There can be a lot of confusion around why Jamstack is becoming so popular or so widely used. How does it differ from other technology stacks? This animated explainer breaks down the answer to "Why Jamstack?" visually.
authors:
  - Sarah Drasner
date: 2020-10-28
lastmod: 2020-10-28
topics:
  - tutorials
tags:
  - Jamstack
  - why jamstack
  - svg animation
  - jamstack hosting
tweet: ""
format: blog
relatedposts:
  - "Learn JAMstack with a free 3.5 hour video of demos and examples"
  - "State of the Jamstack Survey 2020: First results"
seo:
  metadescription: Why is the Jamstack becoming so popular and widely used? How does it differ from other technology stacks? This animated explainer breaks down the answers. Check it out!
  metatitle: Why Jamstack? An Animated Guide
  ogimage: /v3/img/blog/screen-shot-2020-02-24-at-7.00.45-am.png
---

There can be a lot of confusion around why Jamstack is becoming so popular or so widely used. How does it differ from other technology stacks? This animated explainer breaks down the answer to "Why Jamstack?" visually.

<p class="codepen" data-height="700" data-theme-id="30324" data-default-tab="result" data-user="sdras" data-slug-hash="NWqNBzV" style="height: 700px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="why jamstack?">
  <span>See the Pen <a href="https://codepen.io/sdras/pen/NWqNBzV">
  why jamstack?</a> by Sarah Drasner (<a href="https://codepen.io/sdras">@sdras</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

**The problem**: With a traditional client-side rendering solution, the server delivers a file without content until you fetch everything and the browser compiles it. And if you're far away from that server, the latency for the request gets larger.

With older server-side rendering solutions, the server compiles and fetches everything, builds the web page, and delivers a fully populated HTML page. It's much faster.

However each time you navigate to a new route, the server has to do it all again- compile and fetch it all, and deliver it. This process delays the load, sometimes by whole seconds.

Recently, an approach called Jamstack has become popular, which addresses both issues. The whole site is built before deploying the content to CDNs, which means it’s geo-replicated across the globe. We never go back to a server on additional requests.

We call it [Jamstack](https://www.netlify.com/jamstack/) and not static, because it extends beyond static. We can make the page dynamic, with API calls or serverless functions, and the user can interact with it.

What's more, because there's no server involved, there are fewer attack vectors. Jamstack approaches improve performance and security! 🎉

Hopefully this small explainer gives perspective on this paradigm! More Jamstack materials are available to explore on [Jamstack.org](https://jamstack.org/) and our own Phil Hawksworth has a [free course on FreeCodeCamp](https://www.youtube.com/watch?v=A_l0qrPUJds).
