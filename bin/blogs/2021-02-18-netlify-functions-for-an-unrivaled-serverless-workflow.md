---
title: Netlify Functions - for an unrivaled serverless workflow
description: With Netlify Functions, we want you to enjoy all the same powerful
  workflows and abilities when building serverless functions, as with the rest
  of your application. Learn how.
authors:
  - Phil Hawksworth
date: 2021-02-18
lastmod: 2021-02-18
topics:
  - tools
tags:
  - Serverless
  - Functions
  - Workflow
tweet: ""
format: blog
relatedposts:
  - Announcing Background Functions
  - Netlify's AWS Lambda functions bring the backend to your frontend workflow
seo:
  metatitle: Netlify Functions - for an unrivaled serverless workflow
  metadescription: "Enjoy a unified development workflow for your UI and your API.
    And deploy as many functions as you like, as frequently as you like. Just
    like you would the rest of your site. "
  ogimage: /v3/img/blog/netlify-functions-post-og.png
---
[![Unrivaled serverless workflows - Examples, Tutorials, and Playground](/v3/img/blog/netlify-functions-unrivaled.png "Unrivaled serverless workflows - Examples, Tutorials, and Playground")](https://functions.netlify.com)

The development workflow provided by Netlify is becoming second nature to many web developers:

1. Write and test code locally
2. Push to version control
3. Review automated preview builds
4. Merge to production

This, along with the principles of a [Jamstack architecture](https://www.netlify.com/jamstack/), where the user interface is compiled in advance, also enables improvements like atomic and immutable deploys. Allowing site owners to [instantly revert changes to any previous deployment](https://www.netlify.com/products/build/), and to benefit from configurations which are far easier to reason about than in the days of complex, interdependent, active server environments.

At Netlify, we believe that serverless functions have a huge part to play in supporting the development of modern web applications. The experience of developing, deploying, and maintaining APIs and services with serverless functions should feel like a natural part of the development workflow enjoyed at the "front of the front-end".

This is why we are continuing to evolve our [Netlify Functions](https://www.netlify.com/products/functions/) offering. We want you to enjoy all the same powerful workflows and abilities when building with serverless functions, as with the rest of your application.

A few of the keys to this:

## Zero configuration required

All you need to do is place your functions in the `/netlify/functions` folder of your code repository. Once you do, Netlify will:

1. Automatically detect your functions
2. Provision them as serverless functions
3. Provide URLs that are ready for you to invoke

We take care of all of the provisioning, the API gateway configuration, the permissioning. It just works.

Write it. Push it. [It's done](https://twitter.com/Netlify/status/1362440545604415493).

## Configuration control when you want it

If the default source folder for your serverless functions doesn't suit your needs, that's no problem. Zero-config shouldn't mean forcing you to adopt our defaults. At Netlify, we know that it is important for you to have the flexibility to work how it suits you.

![A screenshot of the Netlify site admin. Showing the Functions Directory option in the Deploy Settings](/v3/img/blog/functions-folder-ui.jpg "Functions settings")

To define a custom folder path where your functions will live, all you need to do is add one line to your `netlify.toml` file or specify a folder through your site's deploy settings. This will tell Netlify where to find your serverless functions for deployment.

```diff-toml
[build]
+  functions = "my/serverless/functions/here"
```

## Boundless function deploys

The freedom to deploy easily and often is a critical success factor when building for the web. No matter which pricing tier you are on, we don't want to add friction to your deployment process, regardless of if your projects include serverless functions.

**Deploy as many functions as you like, as frequently as you like.** Just like you would with the rest of your site. The API is important too! 

Our Starter plan allows 125,000 function invocations, per site, per month, for free. And has a metered pricing structure above that.

We think this offers a great way for your new ventures to get the best from serverless infrastructures right away, with the potential to grow as the needs of your business grows.

## Unified development workflows

Your serverless functions should not be more difficult to work with or maintain than other aspects of your site. That's why [Netlify Functions](https://www.netlify.com/products/functions/) are seamlessly integrated with our platform and into your development workflow.

All of the workflows available to the rest of your sites extend to your serverless functions too.

Your front-end and your serverless APIs can all be:

* Deployed together
* Reverted together
* Versioned together
* Branched together
* Previewed together
* Split-tested together

No need to expand the mental model of how your site's code is managed and deployed. It's all in your version control repository. You write the code. We'll manage the rest.

## Where to start?

"Hello world" is so impersonal, don’t you think? We've compiled a few simple examples to play with in... well, in a playground.

Explore them at [functions.netlify.com/playground](https://functions.netlify.com/playground)

You'll be able to test out a few simple functions right there on the site, which can be the ideal first step to help your start writing your own.

You'll also find a [long list of examples](https://functions.netlify.com/examples) from around the web to help as inspiration, along with some selected [tutorials](https://functions.netlify.com/tutorials) to help you get started.

And whether you are writing your serverless functions in [JavaScript](https://docs.netlify.com/functions/build-with-javascript/) or [Go](https://docs.netlify.com/functions/build-with-go/), you can find more information on ways to make the most of them on Netlify in [our docs](https://docs.netlify.com/functions/overview/).

What will you build first?