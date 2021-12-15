---
title: Deploy CodeSandbox to Netlify
description: >-
  Announcing the CodeSandbox Netlify integration. Create and deploy sites to
  Netlify directly from within CodeSandbox!
authors:
  - David Wells
  - Phil Hawksworth
date: '2019-03-26'
topics:
  - news
tags:
  - Netlify
  - CodeSandbox
  - Deployments
  - Tools
tweet: ''
format: blog
---
Here at Netlify we love developer tools. We focus a lot of attention on making the experience of building for the web as simple and powerful as we can, and the evolution of development tooling contributes to this a great deal.

So, in April 2017, when [Bas Buursma](https://twitter.com/bazzjuh) and [Ives van Hoorne](https://twitter.com/CompuIves) launched CodeSandbox, an IDE that you use right from the web browser, we watched with great interest.

![CodeSandbox and Netlify logos](/v3/img/blog/csb-loves-netlify.png "CodeSandbox and Netlify")



Today, we are happy to announce that you’re now able to create and deploy sites to Netlify, directly from CodeSandbox!

## What is CodeSandbox?

An impressive browser-based IDE built with React and a lot of ingenuity, [CodeSandbox](https://codesandbox.io) has steadily matured and improved since its launch. And has become a fantastic tool for building and experimenting. All from your web browser without the need to create a local development environment. It’s remarkable.

After introducing [CodeSandbox containers](https://hackernoon.com/codesandbox-containers-5864a8f26715), it gained the ability to execute the parts of your code that you might usually use as a build step on your local machine. This made it even more enticing to use with JAMstack projects, which you could then deploy to Netlify.

There are already a number of ways to deploy a site to Netlify:

1. Using our [app.netlify.com](https://app.netlify.com/) UI ([tutorial](https://serverless.com/blog/how-built-static-serverless-website-netlify/))
2. Running `netlify deploy` via the [command line](https://cli.netlify.com/)
3. Clicking the mighty [deploy to Netlify button](https://www.netlify.com/docs/deploy-button/)
4. Calling the [Netlify API](https://open-api.netlify.com/#/default/createSite)
5. Defining your site in [terraform](https://www.terraform.io/docs/providers/netlify/index.html)
6. [Via AWS CloudFormation](https://www.netlify.com/blog/2018/11/29/deploying-netlify-sites-with-aws-cloudformation/)
7. **…and now, CodeSandbox deployments!**

Today’s announcement adds yet another method of creating and deploying Netlify to sites. This new integration was built in collaboration with the team at CodeSandbox and we’re delighted at how it can shorten the path between writing code, and getting your sites online.

## CodeSandbox + Netlify

By selecting Netlify as your deployment target in CodeSandbox, you can have your project build in Netlify's CI/CD environment, and deployed directly to our [global ADN](https://www.netlify.com/features/adn/) with one click!

![Deploy from CodeSandbox](/v3/img/blog/csb-deploy.jpg "Deploy CodeSandbox site in Netlify")

New sites are created with a unique URL just a few moments after hitting the _deploy_ button.

![Claim your Netlify site from CodeSandbox](/v3/img/blog/csb-claim-deploy.jpg "Claim your Netlify site from CodeSandbox")

You can then claim the site and  attach it to your Netlify account to enjoy all the usual Netlify benefits of CI/CD and the other [features of Netlify](https://www.netlify.com/features/)

![Add site to Netlify](/v3/img/blog/csb-netlify-claim.jpg "Add your site to Netlify")

Here’s a quick look at just how quickly you can deploy:

<iframe width="560" height="315" src="https://www.youtube.com/embed/S4Nshf2IGmM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## The future

CodeSandbox offers a low friction approach to getting started on a web project. And it allows some really interesting ways to collaborate on code in real time from within your browser, without even needing to set up a local development environment.

We can’t wait to see where this goes next.

Why not try creating your first [CodeSandbox](https://www.codesandbox.io) project today? And deploy it on Netlify from this nifty new integration!
