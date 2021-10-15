---
title: Easy Access Environment Variables
description: Learn how to store sensitive information like secret keys while
  still giving your team easy access with Netlify environment variables.
authors:
  - Tara Z. Manicsic
date: 2021-07-05
lastmod: 2021-06-22
topics:
  - tools
tags:
  - Build
tweet: ""
format: blog
seo:
  metatitle: Easy Access Environment Variables
  metadescription: Learn how to store sensitive information like secret keys while
    still giving your team easy access with Netlify environment variables.
---
When it comes to handling sensitive information like private keys, there are two scenarios that always come to mind:

* 😱 adding the important, private values to code that then gets pushed up to GitHub for the world to see
* 😓 having to wait for a teammate to share the keys before anyone can contribute to a project

I have definitely gone through both of these scenarios and possibly, you have too. When I learned about how [Netlify stores project environment variables](https://ntl.fyi/3wOorom) I realized it was the answer to both of these yucky situations.

## Setting Environment Variables

There are three different ways we can set these variables for Netlify projects. My go-to is via the project dashboard in 'Site settings > Build & deploy > Environment > Environment variables'. These variables can be edited and removed with a click of a button.

![project dashboard list of environment variable](/img/blog/screen-shot-2021-06-22-at-1.42.49-pm.jpg "project dashboard list of environment variable")

The same approach can be made in team settings to make environment variables available to all of your projects. This is super handy for information that needs to be shared across multiple projects but they can also be overwritten at the site level. This can be set in the team settings, 'Team settings > Sites > Global site settings > Shared environment variables'.

![team settings dashboard](/img/blog/screen-shot-2021-06-22-at-10.31.49-pm.jpg "team settings dashboard")

Thirdly, if the variables we want to add aren't private infrormation, we can set environment variables in the [Netlify configurations file,`netlify.toml`](https://ntl.fyi/3xI8GiF)(this file gets committed so no privacy here!). The variables can be set to different [deploy contexts](https://ntl.fyi/3gUYY63) and this file will override anything set in the UI. Here's an example of what that might look like:

`/netlify.toml`
```toml
[context.production]
  publish = "dist/my-project"
  command = "ng build --prod"
  environment = { NOT_PRIVATE_STUFFS = "totally not top secret", NODE_VERSION = "14.15.3", API_KEY = "abc1234teeheehee" }

[context.staging] # “staging” is a branch name
  command = "echo 'staging'"
  base = "staging"
  environment = { SOME_KEY = "t0te5Important5tuff" }
```

## Using Environment Variables

Inside of your code, these variables can be referenced by putting `process.env.` in front of the name of the environment variable. So, if the key is `MY_SECRET_SAUCE`, the code we call it with will look like this:

```javascript
const topSecretRecipe = process.env.MY_SECRET_SAUCE;

timeForDinner(topSecretRecipe);
```

## Such Benefits

Having this information stored on the project dashboard means that you can keep it out of your code completely. It's great when we remember to hold keys in `.env` files but not so great when we forget to add that file to the `.gitignore` list. That whole "remembering" thing is very hard and, personally, I prefer to avoid it completely. Storing environment variables this way makes it so computers do all our remembering, the way it should be.

Being your team can access the project's dashboard they are able to add and edit variables. When coding locally you can use [`ntl dev`](https://ntl.fyi/3wPemYp) to serve up the project and the environment variables are automatically added from Netlify. Better still, even when team members don't have access they can look at [deploy previews](https://ntl.fyi/3xOpe91) that take advantage of the correct environment variables.

## Any Questions?

Interested? Want to learn more? Check out [the documentation on build environment variables](https://ntl.fyi/3wOorom) or our [place to get answers, the Netlify Support Forums](https://answers.netlify.com/). There's a lot more you can do with environment variables so check out the docs to learn about:

* [the sensitive variable policy](https://ntl.fyi/2SOkgdC)
* [setting custom values for certain reserved environment variables](https://docs.netlify.com/configure-builds/environment-variables/?utm_campaign=devex-tzm&utm_source=blog&utm_medium=blog&utm_content=env-vars#netlify-configuration-variables)
* [and pre-defined variables for meta-data like build, git, deploy URLs, build hook meta-data, and payloads](https://docs.netlify.com/configure-builds/environment-variables/?utm_campaign=devex-tzm&utm_source=blog&utm_medium=blog&utm_content=env-vars#read-only-variables)

That's right, your environment variable fun has just begun. Happy coding 👩🏻‍💻!
