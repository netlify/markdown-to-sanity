---
title: 'A Step-by-Step Guide: Deploying on Netlify'
description: A step-by-step guide on how to deploy a site on Netlify.
authors:
  - Eli Williamson
  - Jason Lengstorf
date: 2016-09-29T00:00:00.000Z
lastmod: 2020-04-27T00:00:00.000Z
topics:
  - tutorials
tags:
  - Deploy
  - Tutorial
format: blog
image: /v3/img/blog/collabocats.jpg
---

**This guide was most recently updated on April 27th, 2020.**

Today, let's take a look at how to host a static website on Netlify, including setting up continuous deployment.

## Getting started on Netlify

In this tutorial, we will show you how easy it is to launch your site on Netlify. If you are not already a Netlify user, go ahead and [sign up for free](https://app.netlify.com/signup) first.

If you prefer video, this tutorial is also available as [an egghead lesson](https://jason.af/egghead/netlify-deploy).

{{< egghead-embed
  link="https://egghead.io/lessons/egghead-deploy-a-site-to-netlify-from-git"
  title="Deploy a Site to Netlify From Git"
>}}

## Step 1: Add Your New Site

![step 1 - add new site in Netlify app](/v3/img/blog/add-new-project.png)

Creating a new site on Netlify is simple. Once you've logged in, you'll be taken to https://app.netlify.com. If you're just starting out, there's only one option, Click the **Add A New Project** button shown above.

## Step 2: Link to Your GitHub (or supported version-control tool of choice)

Clicking "Add A New Project" brings you to this screen:

![step 2 - link with git provider like GitHub or Gitlab](/v3/img/blog/create-new-site.png)

Be sure to push your repo to GitHub, so that all we'll need to do is link Netlify to GitHub. Click the **GitHub** button as illustrated in the screenshot above.

## Step 3: Authorize Netlify
![step 3 - authorize auth Netlify app](/v3/img/blog/authorize-github.png)

It's time to allow Netlify and GitHub to talk to each other. Clicking the **Authorize Application** button will do just that. Like it says in the image below, Netlify doesn't store your GitHub access token on our servers. If you'd like to know more about the permissions Netlify requests and why we need them, you can visit our [documentation on Git provider permissions](https://docs.netlify.com/configure-builds/repo-permissions-linking/).

## Step 4: Select Your Repo
![step 4 - selecting project repo to connect to Netlify](/v3/img/blog/choose-repo.png)

Now that you've connected Netlify and GitHub, you can see a list of your Git repos. Choose the repo you’d like to deploy from the list.

## Step 5: Configure Your Settings

![step 5 - configure site settings in Netlify app](/v3/img/blog/config-your-repo.png)

Here you can configure your options. Make sure your publish directory is where your public site files are placed after building the site (e.g. `dist`) and your build command is whatever you run to build the site (e.g. `npm run build`). Then click the **Deploy site** button to continue.

## Step 6: Build Your Site

![step 6 - building your site in Netlify](/v3/img/blog/building-site.png)

Now it's time to sit back and relax. You did your part; let Netlify take care of the rest. It'll only take a minute.

## Step 7: All Done

Once the build completes, your site is live! Head to the overview and you can see the URL of your newly published site.

![step 7 - Netlify app site deploys overview](/v3/img/blog/done-1.png)

Netlify automatically generated a name for your site. Let's update that by visiting the settings tab and clicking "Change site name":

![step 8 - updating site name and url in Netlify app](/v3/img/blog/done-2.png)

There, that's better. Looks pretty good, huh? Wasn't that easy? To take it a step further, [set up your custom domain](https://www.netlify.com/blog/2016/03/14/setting-up-your-custom-domain/).

Congratulations on your new site, and thanks for using Netlify!
