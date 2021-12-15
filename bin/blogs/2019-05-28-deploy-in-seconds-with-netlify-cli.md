---
title: Deploy in seconds with Netlify CLI
description: Speed up local development & deployments with the Netlify CLI and Netlify Dev
authors:
  - David Wells
date: '2019-05-28'
topics:
  - tutorials
tags:
  - Netlify Dev
  - Tools
  - Product
tweet: ''
format: blog
---
As a developer, fast feedback loops are critical for shipping more awesome into the world. Here at Netlify, we are always trying to come up with ways to make our wonderful developer community as efficient and happy as possible. This desire to **"make all the things fast!"** was a huge motivator for the latest [Netlify CLI](https://cli.netlify.com/) redesign.

<img src="https://paper-attachments.dropbox.com/s_9D16386200D3BB757573B539C53310D409A5E61A65F769485F2BE3D1E0F27109_1559078098050_image.png" width="230" align='right' />

## Introducing Netlify Dev
A key part of the CLI redesign was the introduction of Netlify Dev, which offers the ability to spin up a local dev environment via `Netlify Dev`. This feature was recently announced at [JAMstack Conf NYC](https://jamstackconf.com/nyc/) and gives you access to Netlify features like redirects, functions, env variables, [add-ons](https://github.com/netlify/addons) right from your local machine.

This means you can now iterate quickly, and test the connection between your frontend and serverless functions before even deploying to production. For more on Netlify Dev, checkout these awesome articles: [Netlify Dev – The Power of Netlify on Your Local Computer](https://scotch.io/tutorials/netlify-dev-the-power-of-netlify-on-your-local-computer), [How Netlify Dev Works](https://www.netlify.com/blog/2019/04/24/zero-config-yet-technology-agnostic-how-netlify-dev-detectors-work/). And if you’d like to dig into the source code, check out the [open source repo here](https://github.com/netlify/netlify-dev-plugin).


If you haven't yet given Netlify CLI spin, you can install it on your machine via npm or yarn, whichever your preference.

```bash
# Install netlify CLI globally
npm install netlify-cli -g
### OR ### 
yarn global add netlify-cli
```

## Getting Started with Netlify CLI
In order to fully harness the power of Netlify CLI, you must first ensure that your project is connected up to a Netlify account. This ensures that the Netlify CLI can pull down the appropriate environment variables and various site specific configurations for a particular project. To do this, start by logging in to your Netlify account with the following command:

```bash
# login to your netlify account
netlify login
```

With your CLI now synced to your Netlify account, the next step is to connect a local project to a site on Netlify. There are two ways to do this. You can either use the `netlify link` command or the `netlify init` command. The former connects your local codebase to an existing Netlify site in your account, while the latter creates a new site. An important thing to note when using `netlify link` is that you’ll need to enter in either your `Site ID` or `Site Name` to the prompt in the CLI so Netlify knows which site to link your project to.

1. The [**netlify link**](https://cli.netlify.com/commands/link) command to link an existing site in netlify to your local codebase.
2. The [**netlify init**](https://cli.netlify.com/commands/init) command to create a brand new site in your netlify account.

## Getting Started with Netlify Dev

Now that we’re all set up, let’s dive into how we can use `Netlify Dev` to supercharge our local development workflow. Getting started with Netlify Dev is as easy as running the following command inside your site directory:

```bash
netlify dev
```

If you want to go one step further and share the locally running version of your site, you can simply add the `--live` flag and you’ll have a local tunnel automagically created for you.

```bash
netlify dev --live
```

## Faster deploys with the Netlify CLI

One of my favorite features of the Netlify CLI is the `netlify deploy` command. This command will pipe up your locally built site into a live deploy preview without needing to wait for the Netlify CI process to run. Ordinarily, this process takes a couple of minutes to run depending on the size of your build. Because this feature circumvents the traditional netlify build process where a git commit is triggered and fires off a build in Netlify, it’s important to run your local build with `npm run build` before running a deploy. 

With this build step completed, it's now time to deploy your project!

```bash
netlify deploy --open
```
This will deploy your local site build up into Netlify and return back a handy dandy preview URL. Yay!

<img src="https://paper-attachments.dropbox.com/s_9D16386200D3BB757573B539C53310D409A5E61A65F769485F2BE3D1E0F27109_1559078069338_deploy-preview-video.gif" />

The quicker turn around time that this process provides means that your feedback loop is significantly reduced when testing things with live URLs. You can also share your deploy preview URLs with your team much faster than with a traditional deploy workflow. Let's be honest, not all changes, tweaks & updates need a new branch or deserve Git commits *just* for that handy preview URL to share with the team 😄.

## Deploying to production
This same workflow can be replicated to deploy your locally built site to your live site URL using:

```bash
# deploy to live site
netlify deploy -p
```

`netlify deploy -p` is short for `netlify deploy --prod`.

<img src="https://paper-attachments.dropbox.com/s_9D16386200D3BB757573B539C53310D409A5E61A65F769485F2BE3D1E0F27109_1559078032710_image.png" />


## Words of Caution
If something goes wrong in your local build and you deploy this version to production, you may end up deploying something broken to your live site. In order to prevent this from happening, make sure to verify that your locally built site passes all tests and that everything works before running `netlify deploy --prod`.

Moreover, while this CLI first deployment process is great, like all good things, it’s best used in moderation. As mentioned earlier, deploying via the CLI means foregoing a CI process, which might result in code being deployed to production untested. To save yourself the frustration of broken deploys, it’s always recommended to use the traditional Netlify build approach where deploys are triggered via Git commits and branches. In addition to making sure your code works, it also gives your team members a chance to review the code pre-deploy 😎 and lets you take advantage of roll back deploys if you ever want to revert your site to a previous build

##  Go forth and deploy!
We hope you enjoy these features of the Netlify CLI!
The `netlify dev` command allows for quick local iteration on your site & serverless functions and the `netlify deploy` command can really streamline things for you when you don't want to wait for slower remote CI builds to finish.
Go fast. Zoom zoom.

**What other things would you like to see the CLI do?**
Leave us a comment down below, leave an issue on the [CLI repo](https://github.com/netlify/cli) or drop us a line on the [Netlify Community forums](https://community.netlify.com/)!
