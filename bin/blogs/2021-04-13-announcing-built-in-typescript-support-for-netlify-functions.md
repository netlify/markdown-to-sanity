---
title: Announcing Native TypeScript Support for Netlify Functions
description: Native TypeScript support for Netlify Functions is the latest step
  in our quest to build simpler development workflows.
authors:
  - Eduardo Bouças
date: 2021-04-19
lastmod: 2021-04-14
topics:
  - news
tags:
  - Functions
  - TypeScript
tweet: ""
format: blog
relatedposts:
  - Netlify Functions - for an unrivaled serverless workflow
  - Announcing Background Functions
seo:
  metatitle: Announcing native TypeScript support for Netlify Functions
  metadescription: Serverless made simpler! Native TypeScript support is the
    latest step in Netlify's quest to build simpler development workflows. Try
    for free today.
  ogimage: /v3/img/blog/og-typescript-functions.png
---
Until now, [JavaScript](https://docs.netlify.com/functions/build-with-javascript/) and [Go](https://docs.netlify.com/functions/build-with-go/) were the two languages natively supported by [Netlify Functions](https://www.netlify.com/blog/2021/02/18/netlify-functions-for-an-unrivaled-serverless-workflow/). You could technically author functions with TypeScript, but you needed a build step that compiled your code down to plain JavaScript prior to deploying.

Well, not anymore! We're happy to introduce native TypeScript support in Netlify Functions.

At Netlify, we want you to enjoy the same powerful workflows and abilities when building with serverless functions as you do when building the rest of your application. Native TypeScript support for Netlify Functions is the latest step in our quest to build simpler development workflows.  

## Preparing your project

Before creating a TypeScript function, you should add the `@netlify/functions` module to your project.

```bash
npm install @netlify/functions
```

This module won't add any files to the functions, so you don't need to worry about it contributing to the weight of your dependencies. We'll use it simply to import the TypeScript typings.

## Creating a function

With the initial setup taken care of, you can create a function by placing a file with the `.ts` extension in your functions directory.

```javascript
import { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" })
  }
}

export { handler }
```

When you use the `Handler` type on a function, the arguments (`event` and `context`) and the response will be typed accordingly. Alternatively, you can import the types `HandlerEvent`, `HandlerContext` and `HandlerResponse` separately and use them to construct a handler function.

We’ll automatically load any `tsconfig.json` configuration files found in your functions directory or the project’s root directory.

## Local development

You can use [Netlify Dev](https://www.netlify.com/products/dev/) to develop your TypeScript functions locally, with no additional tooling or configuration needed.

To get started, install the Netlify CLI or upgrade to version `3.19.0` or above if you've already installed it.

```bash
# Install or update the Netlify CLI
npm install netlify-cli -g

# Start Netlify Dev
netlify dev
```

Every time you create or update a TypeScript function, we'll automatically compile it and make it available on your local development server.

## Implementation notes

Our build system uses [esbuild](https://www.netlify.com/blog/2021/04/02/modern-faster-netlify-functions/) to compile TypeScript functions, which introduces some implementation details you should keep in mind.

First of all, we don't perform any type checking on your files. This can be handled by most modern code editors, as they can check types and offer visual feedback in real time. Alternatively, you can install the official TypeScript compiler and run `tsc --noEmit` locally, using it solely for type checking.

![""](/v3/img/blog/type-checking.png)

Secondly, we recommend that you enable the [`esModuleInterop`](https://www.typescriptlang.org/tsconfig#esModuleInterop) and [`isolatedModules`](https://www.typescriptlang.org/tsconfig#isolatedModules) properties in your TypeScript configuration file, for better compatibility.

Finally, if you have JavaScript and TypeScript functions with the same name (e.g. `my-function.js` and `my-function.ts`), the JavaScript function takes precedence. This gives you the option to handle the TypeScript compilation yourself if you want to, while ensuring that any existing functions using this setup will continue to behave in exactly the same way.

Whether you're writing your serverless functions in TypeScript, JavaScript, or Go, you can find more information on ways to make the most of them on Netlify [in our docs](https://docs.netlify.com/functions/overview/).
