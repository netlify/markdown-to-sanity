---
title: Announcing Background Functions
description: 'Say "hello" to Netlify Background Functions, now available in Beta
  for customers on Pro plans and above. '
authors:
  - Jessica Parsons
date: 2020-10-29
lastmod: 2020-10-29
topics:
  - news
tags:
  - Serverless
  - Functions
  - Lambda
tweet: ""
format: blog
relatedposts:
  - "Automate your web workflows with the JAMstack"
  - "Introducing Edge Handlers in Preview"
seo:
  metatitle: "Announcing Background Functions - Serverless Lambda Functions"
  metadescription: "Check out the new Netlify Background Functions, now available in Beta for customers on Pro plans and above. Deploy AWS Lambda functions that can run asynchronously for up to 15 minutes."
  ogimage: /v3/img/blog/background-functions-og.png
---
We are incredibly excited to announce: Background Functions are now available in Beta for Netlify customers on Pro plans and above! Background functions allow you to set up serverless functions that can run asynchronously for up to 15 minutes.

Serverless functions, including background functions, allow developers to manage both frontend and backend code from a single repo for a [full-stack Jamstack](https://www.youtube.com/watch?v=Z1uVLa2lmZY&feature=youtu.be&t=1068) experience. These new types of functions also allow for more performant and responsive web applications, as you can offload longer-running functions to be processed behind the scenes.

![Function log lines indicating data processes](/v3/img/blog/background-functions.png)

## Advantages of running functions in the background

In case you didn't know, [Netlify Functions](https://www.netlify.com/products/functions/) (included on all plans, Starter and above) already allow you to run AWS Lambda functions directly from Netlify without coordinating API gateways or deployments. You can call a pre-defined relative path on your site, and receive a response from your function back to the client. However, because a direct request-response cycle isn't well suited to long delays, Netlify's synchronous functions time out after 10 seconds of execution time.

While standard serverless functions are perfect for processing small, snappy jobs that return data to the client quickly, it’s easy to bump up against the 10 second limit if you’re interfacing with a slow API or running any kind of server-side job that takes more time to process.

With new background functions, you can deploy AWS Lambda functions that can run asynchronously for up to 15 minutes. This means you can give immediate feedback to users of your app or site while serverless functions complete long-running tasks on their own time. 

## Common use cases for background functions

You can use background functions for common use cases such as:

* Batch processing
* Web scraping
* Adding users to an email list or other APIs
* Interfacing with slow APIs
* Media processing
* Headless browser requests
* And much more!

You can write your background functions in JavaScript or Go.

## How to set up background functions

Background Functions are a sub-type of Netlify Functions, so the process for building and deploying them is nearly the same. The key difference is adding `-background` to the end of your function name.

So, for example, if you name a function

```
hello.js
```

It will deploy as a synchronous function that returns its response to the client after the function completes. Because the client is waiting on a response, the function must finish within 10 seconds, or it will fail.

However, if you change the name to 

```
hello-background.js
```

It will deploy as a *background* function that returns an immediate client response on successful invocation, then continues running in the background until it completes asynchronously — up to 15 minutes later.

It is important to note: Netlify Functions, including Background Functions, are priced per site based on the number of invocations and the total runtime. Level 0 Functions come with 125K requests and up to 100 hours per month. Check [pricing for Functions add-ons](https://www.netlify.com/pricing/#add-ons-functions). 

## Get started today

While we've discussed some ideas for how your application could benefit from Background Functions, the possibilities are practically endless and we can't wait to find out what you build!

Ready to try it out? Check out the [technical documentation](https://docs.netlify.com/functions/background-functions/) and write your first background function.

Still on a Starter plan? You can easily [upgrade to Pro](https://app.netlify.com/?upgrade_pro=true&utm_source=netlify.com&utm_medium=blog&utm_campaign=bg_functions) to gain access to this new feature (and a whole lot more!) today.