---
title: Automate Contentful Deploys with Netlify Webhooks
description: When you publish a post on Contentful, you typically want your site
  to rebuild to include it. In this post we'll go over Netlify's webhooks, which
  allows Netlify to accept HTTP POST requests as a signal to trigger new
  builds when content updates.
authors:
  - Sarah Drasner
date: 2020-04-24T00:00:00.000Z
lastmod: 2020-04-24T00:00:00.000Z
topics:
  - tutorials
tags:
  - Contentful
  - Webhook
  - Automatic Deploy
  - Contentful and Netlify
  - CMS
tweet: ""
format: blog
seo:
  ogimage: /img/blog/contentful.png
  metatitle: How to Automate Contentful Deploys with Netlify Webhooks
  metadescription: When you publish a post on Contentful, you typically want your site to rebuild to include it. In this post we'll go over Netlify's webhooks. Learn how to POST requests to trigger new builds when content updates.
---
When we publish a post on Contentful, we typically want our site to rebuild to include it. In this post we'll go over Netlify's webhooks, which allows Netlify to accept HTTP POST requests as a signal to trigger new builds when content updates.

It's fairly straightforward to set this up, though it does require some configuration within Contentful and some within Netlify.

## Within Netlify

Go to `Settings → Build & Deploy` ([sign up for free](https://app.netlify.com/signup) if you don't have a Netlify account). From there, scroll down to `Build Hooks`, and enter the name of the hook, as well as the branch to build from (typically `Contentful` and `master`

![Build Hooks screen](/img/blog/screen-shot-2020-04-16-at-5.41.19-pm.png)

From there we can save, and it will give us a URL endpoint:

![Netlify build hooks settings page](/img/blog/screen-shot-2020-04-23-at-9.23.28-pm.png)

Now we can hook this up to Contentful.

## Within Contentful

Once you're logged in, navigate to `Settings → Webhooks` from the bar at the top. From there, click on `Add webhook`, and select `Netlify` from the options. Choose a name that will help you associate the project, and enter the URL of the site

![Contentful Webhook Dashboard](/img/blog/screen-shot-2020-04-16-at-5.40.55-pm.png)

From there, we'll be taken to a screen that allows us to enter the endpoint we got from Netlify, as well as some settings that we can adjust for our needs:

![Contentful dashboard](/img/blog/contentful.png)

Here we can choose what types of content editing events will call our new Build Hook. 

Now, when we publish or edit posts in Contentful, we'll see a new build happening with the [Netlify dashboard](https://app.netlify.com/), pulling in our content and publishing it to our site! 🎉 If you're interested in trying out Contentful, we've prepared a [one-click template and tutorial that can get you started](https://www.netlify.com/blog/2020/04/20/create-a-blog-with-contentful-and-nuxt/?utm_source=blog&utm_medium=contentful-sd&utm_campaign=devex).
