---
title: Sharing the love with Netlify Deployment Badges
description: >-
  Netlify Deployment Badges are now live! The badges will allow to see and share
  the status of your most recent deployment right from your website or
  repository README.
authors:
  - Ingrid Epure
  - Luna Yu
  - Rafael Conde
date: '2019-01-29'
topics:
  - news
tags:
  - deployments
  - Netlify Badges
  - engineering
  - design
tweet: ''
format: blog
---
We’ve heard how much you love Netlify deployments and seeing them happen as if by magic. And it’s only natural: getting changes in the hands of your users is one of the best feelings in the world. If you’re anything like us, you can’t wait to announce that a new feature is finally live! 

We have previously built different ways to get deploy [notifications](https://www.netlify.com/docs/webhooks/#outgoing-webhooks-and-notifications), some of them right from your [browser tabs](https://www.netlify.com/blog/2018/05/22/netlify-now-shows-your-deploy-status-on-its-favicon/). 

Today, we are happy to announce that you can see the status of your most recent deployment, right from your repository or website, using Netlify Deployment Badges!

![Netlify Deployment Badges](/img/blog/export for blog@2x.png)

## Show me your badges

Representing achievements or interests as badges is not a new concept online or offline. From gaming, to social systems, and even traveling, badges have been a fun way of engaging and motivating users, building reputation, or simply showcasing interests. 

Badges bring an underlying feeling of commitment and transparency that have made them highly sought-after and rapidly adopted by open-source projects. They’re an easy way of instilling confidence the project is actively maintained and cared for by the community. 

## How we built the feature

**It all started…with you!**

![ask-netlify badges request](/img/blog/badges-request.png)

**What it actually means for us**

Just to clarify, a badge is an SVG or raster image which can be easily embedded in your README, documentation, or any other web pages through a URL. 

Instead of just providing an endpoint for the badge, we wanted to bring the same one-click experience you love, to generating a badge for your site. So badges became more than an SVG – they’re a fully bloomed feature across our stack.

**Design**

When it came to designing how this badge would look and feel, we knew we wanted to make it feel very much in line with the other popular badges that developers are already using, especially the popular [shields.io](https://shields.io/#/), but still look and feel like it was part of Netlify, and strive for good contrast and balance.

We went through multiple and fast iterations on how this Netlify Deployment Badge could look, while testing it against different backgrounds and in different contexts.

![netlify badges design iterations](/img/blog/badges-iterations.png)

**API**

We wanted a programmatic way of returning the latest build status, which can be used in a variety of situations: our own UI, GitHub, a web or documentation page. So we kept it simple by returning the SVG image directly.

The advantage of using SVGs is that they’re drawn from mathematically declared shapes and curves, making them highly scalable, modifiable, and accessible to a variety of screens. Most importantly, you get all that sharpness in a really small file size (ours is just 4KB!) which makes a big difference on a slower connection.

When it comes to the API response, another important aspect are the headers, specifically, `Content-Type` and `Content-Disposition`. `Content-Type` – in our case, `image/svg+xml` – helps the browser understand how to process the response and can help prevent a number of serious security vulnerabilities. `Content-Disposition` sets the expectation on how the content will be displayed. By setting it to `inline`, the SVG will be directly displayed in your app or README.

**UI** 

To keep it straightforward and easy to discover, we decided to surface the deploy status badge under site **Settings > General > Netlify status badges**. We provide a preview of the badge itself and the code snippet on the settings card. And to reinforce our “one click” philosophy, we added a `Copy to clipboard` button to make it even simpler to add to your file.  

## How to add a deployment badge

The good news is we’ve already prepared the markdown you need to include in your README!  All you have to do is copy it from your site’s settings. The badge automatically updates to reflect the current state of your latest production deployment on Netlify. Clicking it takes you to the site’s deploy list if you’re authenticated, and to the login page otherwise. 

![Netlify Badges UI](/img/blog/badges in ui@2x.png)

## We want to hear from you

This is only the beginning! We would love to hear what other badges you would find useful. Leave a comment, or let us know on [Twitter](https://twitter.com/netlify), or open an issue on [ask-netlify.](https://github.com/netlify/ask-netlify/)
