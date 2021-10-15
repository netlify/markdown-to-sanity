---
title: Usability improvements for Netlify Function logs
description: "Announcing a few enhancements to make your life a little easier
  when managing and troubleshooting serverless functions on Netlify. "
authors:
  - Netlify
date: 2021-05-05
lastmod: 2021-05-05
topics:
  - news
tags:
  - serverless
  - functions
  - logs
tweet: ""
format: blog
relatedposts:
  - Announcing Background Functions
  - "Faster builds for large sites on Netlify with On-demand Builders: Now in
    early access"
seo:
  metatitle: Usability improvements for Netlify Function logs
  metadescription: "Managing and troubleshooting serverless functions in Netlify
    just got even easier. Learn how to color-code Netlify function logs, and
    filter by error message, date and time, and more. "
  ogimage: /img/blog/og-usability-improvements-for-netlify-function-logs.png
---
We’re excited to announce a few enhancements to make your life a little easier when managing and troubleshooting serverless functions on Netlify!

We’ve seen a big increase in the use of serverless functions as teams turn to Jamstack to modernize web apps. Twilio is a great example, building their [next-generation console experience](https://www.twilio.com/blog/bridging-legacy-and-future-platforms) using Jamstack with Netlify.

The advantage of using Netlify with serverless is the workflow: your team can atomically deploy backend functions alongside frontend code, as a unit, and can take advantage of features like staging, deploy previews, phased rollouts, and instant rollbacks.

Now we’re focused on making it easier to use the function logs. This is a wrap-up of recent enhancements and there’s even more on the way! All of these improvements to the logs can be used across [Netlify Functions](https://www.netlify.com/products/functions/), Netlify [Background Functions](https://docs.netlify.com/functions/background-functions/), and Netlify [On-demand Builders](https://docs.netlify.com/configure-builds/on-demand-builders/)—each of these use Netlify Functions under the covers.

## 1. Button to pause auto-scrolling

If you tried to debug functions while looking at a log output, it can be pretty frustrating. The logs scroll by pretty fast. Now it’s possible to hit the pause button, which will stop auto-scrolling so you can take the time to review a specific log line or stack trace. Once you’re done, simply hit the down button to resume scrolling.

![Pause auto-scrolling of Netlify Function Logs](/img/blog/netlify-function-log-scrolling.png)

## 2. Color coding

To help you isolate important details in the function logs and determine when to hit the pause button, we’ve also introduced color coding. Now you’ll see sections of the logs highlighted with colors to help visually locate important attributes such as request identifiers, warnings, and errors.

![How to color-code Netlify function logs](/img/blog/colorcodingnetlifylogs.png)

## 3. Text and log level filtering

When you know exactly what you’re looking for in a log output, it’s now possible to filter the contents of the Function logs output with simple text matches on request ID, log message, or log level—including INFO, ERROR, WARN, and more!

For example, if you want to refine the logs for only one invocation, you can filter for that specific ID.

![Text and log-level filtering in Netlify Logs](/img/blog/text-log-level-filtering-netlify.png)

Then go one step further and filter by log level so you can just see just the errors for that ID.

![Log-level filtering in Netlify Logs](/img/blog/netlify-error-log-search.png)

## 4. Date and time selection

Often, there’s a specific time frame you need to evaluate within the logs. With a new date and time selector, you can view Function logs for different timeframes, including the latest (now+forward, tailing), the last hour, or from within a custom timeframe.

![How to filter Netlify logs by date and time](/img/blog/date-time-selection-netlify-logs.png)

Serverless functions are becoming an essential tool for building performant and highly dynamic websites and web apps. We hope this makes your experience using Netlify Functions even more magical.

Interested in learning more about Netlify Functions? Head over to [our docs](https://docs.netlify.com/functions/overview/) or explore the [Functions Playground](https://functions.netlify.com/playground/) to get inspired.