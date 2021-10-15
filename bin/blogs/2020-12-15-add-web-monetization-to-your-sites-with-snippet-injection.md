---
title: Add Web Monetization to your sites with Snippet Injection
description: Curious about the new Web Monetization W3C proposal? Here's how to
  implement it in your projects with Netlify Snippet Injection!
authors:
  - Cassidy Williams
date: 2020-12-14
lastmod: 2020-12-14
topics:
  - tutorials
tags:
  - blogvent
tweet: ""
format: blog
relatedposts:
  - Deploy from CodePen to Netlify in less than 30 seconds
  - Promoting Open Source with Netlify Snippet Injection
seo:
  metatitle: Add Web Monetization to your sites with Snippet Injection
  metadescription: Curious about the new Web Monetization W3C proposal? Here's how
    to implement it in your projects with Netlify Snippet Injection!
  ogimage: /img/blog/blogvent14.png
---
Welcome to Blogvent, day 14!

In case you haven't heard of it before, [Web Monetization](https://webmonetization.org/) is "a JavaScript browser API that allows the creation of a payment stream from the user agent to the website." It's currently being proposed as a W3C standard at  [the Web Platform Incubator Community Group](https://discourse.wicg.io/t/proposal-web-monetization-a-new-revenue-model-for-the-web/3785), and uses the open protocol [Interledger](https://interledger.org/) to transfer money.

## I want that!

If you want to enable Web Monetization in your websites, you first set up a web monetized wallet, and a payment pointer. Right now you'll want to use one of these Interledger-protocol-enabled providers to do so:

* [Uphold](https://uphold.com/)
* [GateHub](https://gatehub.net/)

Your payment pointer will be something that looks like a URL but starts with a `$` sign, like `$wallet.example.com/something`.

Now, with that payment pointer, you can use the `monetization` meta tag!

```html
<meta name="monetization" content="$wallet.example.com/something">
```

## Where do I put this tag?

You can add it into the `<head>` of your website, and it's done! But, if you don't want to make code changes in your repo, there's an even simpler way with **Snippet Injection.**

Head do your Site Settings on Netlify, then Build & Deploy, then down to Snippet Injection. Make a new snippet, make it "Insert before </head>", and add your tag in the HTML, like so:

![Snippet injection panel with monetization meta tag](/img/blog/snippetmonetization.png "Snippet injection panel with monetization meta tag")

Now, your web monetization will be automatically added into your site's build, without you having to update your `<head>` across your codebase.

Enjoy! 🤑
