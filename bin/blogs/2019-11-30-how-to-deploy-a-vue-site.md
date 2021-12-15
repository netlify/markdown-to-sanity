---
title: How to Deploy a Vue Site
description: >-
  There are a few ways of getting a Vue site or app online. In this article, we
  cover many different ways of accomplishing this with different setups.
authors:
  - Sarah Drasner
date: '2019-11-30'
topics:
  - tutorials
tags:
  - Vue
  - Deploy
  - Nuxt
  - gridsome
  - templates
tweet: ''
format: blog
---
One of the hands-down best things about Netlify is how simple it is to go from working on something to seeing it deployed online. In this tutorial, we’ll show how to deploy a Vue site, with multiple methods. We’ll also cover how to get your domain set up. Let’s begin!

## Deploy a Directory

If you’d like to drag n drop a directory in order to deploy, you can certainly do so. Go to [app.netlify.com/drop](https://app.netlify.com/drop), drag your output directory into the UI, and you’re done! But the issue here is that next time you deploy, you’ll have to drag it over again. 

## Git-based Deployment

If you prefer something more automated for subsequent deploys, it makes sense to [hook your repo up to Netlify](https://docs.netlify.com/configure-builds/get-started/#basic-build-settings). Netlify will then continuously deploy every time you push to master (or whatever branch you choose).

We log in, select where our repo is (GitHub, GitLab, or BitBucket), and authenticate by clicking on the button that says “New Site from Git”. We’ll then search for the repo given the options:

![New site from git view in the Netlify Dashboard](/v3/img/blog/screen-shot-2019-11-21-at-8.46.49-pm.png)

From here, if we would like to just deploy a directory that doesn’t need to a build process, we would leave the build command and point the publish directory to the folder where your site files can be found, which might just be the root of your repo.

But typically, in the creation of Vue sites, we’ll kick off our project with a CLI tool. We have a few ways to deploy given how the Vue site was created:

## Vue CLI

Follow the steps above and when you link the repo, use the build command **npm run build** or **yarn build**. Set the publish directory to **dist**.

Hit the ‘Deploy Site` button and you’re done!

## Nuxt

Nuxt’s workflow for deploying is quite lovely. We go through the steps above to make a relationship between our repo and Netlify, and when we do, we’ll set the build command to be **npm run generate** or **yarn generate** and our directory for deployment to be **dist**.

That’s it! Pour yourself a drink to celebrate 🍻

If you’ve set up [dynamically generated pages based on data](https://css-tricks.com/creating-dynamic-routes-in-a-nuxt-application/), you can follow this guide I wrote that will walk through steps for how to get that set up properly as well.

Here are also a few templates that use Nuxt, you can just hit the blue “deploy to netlify” button and it they will deploy to your account:

* [Awake](https://templates.netlify.com/template/awake-blog-template-nuxt/)– comes with support for site search, newsletter sign-up via mailchimp, comments via disqus
* [Bael](https://templates.netlify.com/template/nuxt-bael-blog-template/)– comes with Netlify CMS and a Serverless Function for sending Newsletters

## Gridsome

Again, follow the top steps and set the build command to be **gridsome build** and our directory for deployment to be **dist**.

Hit deploy and you’re off to the races!

[Here’s a Gridsome template](https://templates.netlify.com/template/netlifycms-gridsome/) if you’d like to start with some scaffolding and simply hit a “deploy to netlify” button. It comes with our CMS baked in as well.

## Domains

Netlify will automatically assign you a unique domain name, which I personally make up myself on the spot when you deploy a new site to Netlify.

![Phil Hawksworth on twitter saying that Sarah thinks up all the site names herself every time a new site is created. And if there's a delay it's called Sarah buffering](/v3/img/blog/buffering.png)

(this is not really how it works 🙂)

It will look something like this: _admiring-ritchie-f69c7a.netlify.com_

If you wish to change the site name for free and don’t mind it on a subdomain, Netlify offers this for free as long as they’re not already taken.

Go to the overview page, and under the URL, you’ll see a button that says “Site Settings”. 

![Site settings in the Netlify dashboard](/v3/img/blog/site-settings.png)

At the top of the Site Settings page there is some basic setup info, and if you click “change site name”, a modal comes up where you can change the name directly.

The changes should take place immediately.

If you want to use your own unique domain, you have a few options, [all of which are covered in our documentation here.](https://docs.netlify.com/domains-https/custom-domains/#assign-a-domain-to-a-site)

That’s it! For any of the options above, Netlify makes the process simple to get any type of Vue site online quickly.

Here’s a list of resources that might come in handy:

* [The official Vue Docs](https://vuejs.org/v2/guide/)
* [Vue CLI](https://cli.vuejs.org/)
* [Nuxt Docs](https://nuxtjs.org/)
* [Gridsome Docs](https://gridsome.org/)
* [Deploying on Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)
