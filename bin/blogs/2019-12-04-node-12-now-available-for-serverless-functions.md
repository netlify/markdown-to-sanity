---
title: Node.js 12 now available for Netlify Functions
description: >-
  Last week AWS announced the release of Node 12 for Lambda functions.
  Starting from December 4th, all new sites will be using Node 12 as the default function runtime.
authors:
  - David Wells
date: '2019-12-04'
topics:
  - news
tweet: ''
format: blog
---

Last month AWS announced the release of Node.js 12 for Lambda functions.

This means faster functions & new Node.js features. 🎉

{% renderFile "./src/components/pages/blog/tweet.vue", { tweetId: "1196543520997171200" } %}

Starting today, all new sites will be using Node.js 12 as the default function runtime. All existing sites can update to Node.js 12 for [Netlify Functions](https://www.netlify.com/products/functions/) via the instructions below.

## What's new?

Node.js 12 brings performance improvements and many [new language features](https://medium.com/@nodejs/introducing-node-js-12-76c41a1b3f3f). In tests like the one charted below ([source](https://medium.com/@ersun.warncke/benchmarking-node-js-v12-vs-v10-v8-v6-v4-and-go-89d28eee603d)), Node.js 12 is almost catching up to Go! 🤯 Zoom zoom.

![Bar graph of test results in requests per second, increasing from less than 20,000 with Node v4.9.1 to over 25,000 with Node v12.2.0, compared with just under 30,000 with Go v1.10.4](https://user-images.githubusercontent.com/532272/69455748-ea0aa400-0d1d-11ea-808c-5728016b662a.png)

For more information on Node.js 12, [check out this post](https://blog.risingstack.com/node-js-12-new-features/) and the official [Node.js 12 changelog](https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md)

## How to upgrade existing site functions

To take advantage of the newer Node.js runtime with functions on sites created before December 4, 2019, you will need to set the `AWS_LAMBDA_JS_RUNTIME` [environment variable](https://docs.netlify.com/functions/build-with-javascript/#runtime-settings) to `nodejs12.x` in the Netlify site settings under **Build & deploy > Environment > Environment variables**.

![](https://user-images.githubusercontent.com/532272/69456568-cc3e3e80-0d1f-11ea-821a-33a3bb1cb32e.png)

After setting the environment variable, update your function code to trigger a new deployment.

## Questions?

If you have questions, feel free to drop us a line in the [Netlify Community forums](https://community.netlify.com/).
