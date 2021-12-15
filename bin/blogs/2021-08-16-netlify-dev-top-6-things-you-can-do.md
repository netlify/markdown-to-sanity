---
title: Top 6 things you can do with Netlify Dev in 2021
description: Learn how to make the most of Netlify Dev with this top 6 tips for faster development.
authors:
  - Ekene Eze
date: 2021-08-16
lastmod: 2021-08-16
topics:
  - tutorials
tags:
  - Netlify
  - CLI
  - productivity
tweet: ""
format: blog
seo:
  metatitle: Top 6 things you can do with Netlify Dev in 2021
  metadescription: Learn how to make the most of Netlify Dev with this top 6 tips for faster development.
  ogimage: /v3/img/blog/og-netlify-dev.png
---

You probably already know that Netlify has a [Command Line Interface](https://ntl.fyi/2U4xDqq) tool that makes local development cool.

It might not be news to you that you can use the Netlify CLI to quickly deploy your sites to Netlify, but what you might not know is that there are lots of other interesting things you can do with Netlify Dev. Using Netlify Dev particularly helps me reduce round trips to the browser and in turns gives a little boost to my productivity, amongst other things.

You didn't ask, but here are my top 6 favorite things to do with Netlify Dev

## 1. Deploy all the things

Netlify Dev gives you the ability to tie all the decoupled parts of your web projects together so that you can quickly test how they work together with one command.

Imagine working on a project that uses a static site generator like Nuxt.js or Gatsby, plus some severless functions and webhooks, maybe throw in a little API integrations and redirect rules. Building the web in such a decoupled manner is really cool and all but how do you test all these functionalities in development? `npm run dev` or `gatsby develop` will not cut it this time.

You need a way to run the app, the serverless functions, and equally process the webhook and edge logic all together. That's where Netlify Dev shines, just run `netlify dev` and that's it! You might agree with me that having the ability to run a command in your terminal to build all the different parts of your application into one testable instance is really powerful. [Learn more here](https://www.netlify.com/products/dev/)

## 2. Live Collaboration

Here's a realllllly cool one. Imagine working on a project and immediately figured you could use someone's help, ordinarily you could push the project to Github and invite them to collaborate with you. You will also to give them steps to reproduce the issue, and so on. You can even send them screenshots or video recordings to provide more context for them.

You can do all that, or you could just run `netlify dev --live` to spin up a live URL capable of running your entire project while watching for changes with instant previews and live updates as the code changes. You can share this URL with your entire team and everyone will have access to the latest update on the site as you work and save changes on the project.

## 3. Manage Environment Variables

If you need to keep sensitive credentials secret in your projects (as we often do), environment variables are well suited for that. You may already know this, but to use environment variables, we often need to:

- Create a `.env` file and specify the env vars.
- Go to the site's settings page on Netlify and individually add all the env vars.
- Remember to gitignore the `.env` file when you push your project to Github.
- etc

What if I told you that you didn't need to do all that? You can use Netlify CLI to create and manage environment variables directly from your terminal with the command below, and Netlify Dev will automatically make all of the environment variables associated with your project, or shared across your team, available to your local build.

```bash
netlify env:set MY_ENV_VAR "The value of my environment variable"
```

With this, you no longer have to create and populate a `.env` file locally, or worry about keeping it in sync with the environment variables you've set on the site in the Netlify admin.
Read [this wonderful explainer](https://www.netlify.com/blog/2021/07/12/managing-environment-variables-from-your-terminal-with-netlify-cli/) by [Phil Hawksworth](https://twitter.com/philhawksworth) to learn more about this pattern.

## 4. VSCode integration

Did you know that you can configure VSCode to run and debug Netlify Dev? This ensures that you never have to leave your code editor unless you absolutely have to. With the VSCode integration, you can quickly debug your site and serverless functions all within VScode. [Here's all you need](https://cli.netlify.com/vscode) to get it working. Debug away!!!

## 5. Native Support for multiple function types

With Netlify Dev, you can author and run serverless functions in JavaScript, Go, TypeScript and now, Rust too (currently behind a feature flag). Previously, regardless of how you built your serverless functions or with what language, you would technically need a build step that would compile your code down to plain JavaScript before deploying. However, that's not the case anymore as Netlify [recently introduced native support for multiple function types](https://www.netlify.com/blog/2021/04/19/announcing-native-typescript-support-for-netlify-functions/#main).

## 6. Reuse open browser tabs

This is arguably the most handy for me. Like me, you probably also struggle with too many open browser tabs. When you run netlify dev, netlify will check if there's an open browser tab on the existing port and if so, it'll re use that tab to display your project as opposed to spinning up a new tab every time.

## Next steps

So you've heard about Netlify Dev and some of the cool things you can do with it, now what? I would say, give it a shot with this 4 simple steps:

- Install the CLI with `npm install netlify-cli -g`
- Login to your Netlify Account with `netlify login`
- Initialize a new site with `netlify init` OR
- Link an existing site with `netlify link`
- Run your local build with `netlify dev`

If you prefer video resources, I just published a [tutorial on YouTube](https://youtu.be/i_XtNZHC_-o) where I built a simple HTML form that uses serverless functions to store the form data to a Supabase Database.

Want more info about all these? Look at the [product page](https://www.netlify.com/products/dev/) and read the [documentation pages](https://cli.netlify.com/getting-started).
