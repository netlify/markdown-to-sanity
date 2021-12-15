---
title: How to Include Files in Netlify Serverless Functions
description: Learn how to include any type of file in Netlify serverless functions, even if you reference them using dynamic expressions.
authors:
  - Eduardo Bouças
date: 2021-08-12
lastmod: 2021-08-11
topics:
  - news
tags:
  - Functions
  - Engineering
  - Product
  - Serverless
tweet: ""
format: blog
relatedposts:
  - Modern, faster Netlify Functions
  - Netlify Functions - for an unrivaled serverless workflow
seo:
  metatitle: "How to Include Files in Netlify Serverless Functions"
  metadescription: You can include any type of file in Netlify serverless functions, even if you reference them using dynamic expressions. Learn how in this blog post.
  ogimage: /v3/img/blog/og-including-files-serverless-functions.png
---

When you deploy a [Netlify Function](https://www.netlify.com/products/functions/), you don't have to think about a build step. That's because we manage the whole process of taking your source code and all its dependencies into a deployable artifact.

When using compiled languages, like Go or Rust, this work is done automatically for us by the language toolchains — regardless of what inputs are used by the function, the output will always be a single, self-contained binary, ready to be deployed.

But when we're dealing with interpreted languages like JavaScript, things get a bit more complicated, as we need to figure out which files are used by the function so that we can include them in the artifact.

At Netlify, this is handled by an open-source tool called [zip-it-and-ship-it](https://github.com/netlify/zip-it-and-ship-it). In this post, I'll share some details about what it does under the hood and how you can leverage it to optimize your function deployments.

## Following the (static) imports

If we look at a function, how do we find all the files and libraries that it uses? Simply packaging up the function's directory doesn't work, as it may be using files from a parent directory or a Node module inside a `node_modules` directory somewhere in the file system.

A better approach is to find every `require` and `import` call in the code and mark each referenced file as being required for the deployment. We must do this recursively, such that if a function requires `module-1` and that module requires `module-2`, both modules need to be part of the deployment. This process must be repeated over and over again, until there are no more references to go through.

At the end of this process, we can discard any files or modules that weren't visited during the traversal.

![The bundling process - traversing references to find required files.](/v3/img/blog/function-dependency-traversal.png "The bundling process - traversing references to find required files.")

## Imports with dynamic expressions

Since zip-it-and-ship-it runs as part of the build, we must be able to resolve the path to each file at build time for this method to work. This is simple enough when the references consist of static expressions like `module-1` or `./lib/util.js`, since we know how to resolve the path to a Node module or a file on disk. Unfortunately, this is not always the case.

```js
module.exports.handler = async (event, context) => {
  const { lang } = event.queryStringParameters;
  const { greeting } = require(`./languages/${lang}.json`);

  return {
    statusCode: 200,
    body: greeting
  };
};
```

In the example above, we have a function that reads a value from the URL's query string parameters and, based on its value, references a JSON file from the `languages/` directory. This means that when invoking `/function-1?lang=en`, the function reads from `languages/en.json` and returns `Hello`, while `/function-1?lang=pt` uses `languages/pt.json` and yields `Olá`.

This presents a problem: how do we know which files to include at build time if the value of the query string parameter, and consequently the path of the required file, is only known at request time?

## Manual configuration

One option is to tell our build system the paths of any additional files that should be included in the function deployment. This can be done in the `netlify.toml` configuration file using the `included_files` property of the `functions` block, which accepts an array of [glob patterns](https://www.npmjs.com/package/glob#glob-primer).

```toml
# Include all files in all functions
[functions]
  included_files = ["languages/**"]

# ... or only JSON files in "function-1"
[functions."function-1"]
  included_files = ["languages/**.json"]
```

The example above shows two different ways of including the files we need — we can create a glob pattern that includes all files recursively, or we can limit it to match only the files we know we'll need (the less files we include, the better).

For example, if the `languages` directory also contains image files representing country flags, we would avoid including them in the function deployment if we limit the pattern to files with the `.json` extension.

We can also tell zip-it-and-ship-it to only include these files for certain functions, which we can target by name, as shown in the second part of the example.

## Zero-configuration

At Netlify, we like to give developers all the flexibility and customization capabilities they need in order to fit our product around their preferred workflows. At the same time, we're also big proponents of a zero-configuration paradigm, in which we aim to provide sensible defaults that can create as much value as possible out-of-the-box.

In the case of a reference with a dynamic expression, the ideal scenario would be to look at at the `require` or `import` calls and automatically figure out which additional files need to be included in the deployment, without asking the user to explicitly configure it. And that's precisely what we do when you [opt-in to the esbuild bundler](https://www.netlify.com/blog/2021/04/02/modern-faster-netlify-functions/).

When zip-it-and-ship-it finds a reference with a dynamic expression, it gets parsed so that we can make sense of its structure. Unlike static expressions, the goal is not to look for the path of the referenced file, which is impossible to know; instead, the system will look for the list of paths that the reference _may_ resolve to at runtime.

![Parsing references with dynamic expressions](/v3/img/blog/function-parsing-dynamic-expression.png "Parsing references with dynamic expressions")

Going back to the function above, zip-it-and-ship-it will take `./languages/${lang}.json` and infer that, at runtime, this expression can reference any file with a `.json` extension living inside the `languages` directory or any of its sub-directories. If we translate this to a glob pattern and add that to the list of included files, our function deployment will have all the files it needs to resolve this expression when the function is invoked.

To make this work, we've built [a new hook type](https://github.com/netlify/esbuild/blob/netlify/NETLIFY.md#ondynamicimport-plugins) into esbuild's plugin API, which is capable of intercepting and transforming any references with dynamic expressions. We're hoping that this functionality will make its way to the main project, but until then it's available in [Netlify's fork of esbuild](https://github.com/netlify/esbuild).

## TL;DR

You can include any type of file in your serverless functions, even if you reference them using dynamic expressions. You can add these files [manually in your configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/#functions), or you can let us figure things out for you by [opting-in to esbuild](https://www.netlify.com/blog/2021/04/02/modern-faster-netlify-functions/).
