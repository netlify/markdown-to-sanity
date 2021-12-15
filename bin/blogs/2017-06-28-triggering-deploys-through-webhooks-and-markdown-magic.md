---
title: Triggering deploys through webhooks and markdown magic
authors:
  - Brian Douglas
image: /v3/img/blog/magic.jpg
format: blog
short_title: Triggering deploys through webhooks and markdown magic
topics:
  - tutorials
tags:
  - Serverless
  - Continuous Deployment
  - Webhooks
description: >-
  The Netlify CMS documentation is colocated with the open source repository but
  hosted from an entirely different repository for the website. Keeping these
  two repositories in sync is easy with the help of Serverless webhooks and Netlify
  Continuous Deployment.
date: 2017-07-06T23:25:54.000Z
---
A few months back we launched a new project to the public called the [Netlify CMS](/blog/2017/03/17/an-open-source-cms-with-a-git-centric-workflow/). If you have not had a chance to check it out, I highly recommend it for your sites built with [static site generators](https://www.staticgen.com/).

This post not about the CMS, but about the infrastructure in place to keep the documentation site updated. The CMS project is open sourced and has a documentation folder structure that is colocated with the code in the repository. While making the documentation site, [https://netlifycms.org](https://netlifycms.org), the challenge for keeping content always up to date presented itself.  

The documentation content was originally created to live in the CMS repository's README.md, but we later transitioned to separate files in the [/docs](https://github.com/netlify/netlify-cms/tree/master/docs) folder in preparation for creating a proper website. We took all that content and moved it to a new ORG repository, which is [netlifycms.org](https://www.netlifycms.org) today.

![cms-org](/v3/img/blog/cms-org.png)

## Markdown Magic

We had one issue though, and it was the problem of trying to keep the documentation up to date. We also did not want to discourage contribution to the documentation if a potential contributor can’t find the most up to date documentation, which is why tools like [Markdown Magic ](https://github.com/DavidWells/markdown-magic)saved the day for us. 

Markdown Magic is an open source library to add scripts to your Markdown. We keep our netlifycms.org repo in sync with the netlify-cms documentation content by adding scripts in our build script. When the ORG repo is built using Netlify’s continuous deployment it checks the code repo for any changes and transfer’s the most up to date documentation from the CMS repo based on [comments added to the existing markdown](https://raw.githubusercontent.com/netlify/netlify-cms-www/master/site/content/docs/intro.md) files.


```
<\!-- AUTO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/netlify/netlify-cms/master/docs/intro.md) -->
// This content will be generated by Markdown Magic
<\!-- AUTO-GENERATED-CONTENT:END -->
```

One problem I encountered with this solution was that even though we had Markdown Magic working in our ORG repo and generating documentation, it was still a manual process every time new documentation was merged. Whenever documentation is merged in CMS repo, I need to remember to trigger a deploy to refresh the content that is live on the ORG site.

After watching the JAMstack SF talk from David Wells of Serverless Inc., I discovered you can easily keep two repositories in sync with a Lambda function and a few webhooks.

<iframe width="560" height="315" src="https://www.youtube.com/embed/LcgPRe7rLT4" frameborder="0" allowfullscreen></iframe>

## Serverless Webhook

Serverless is a framework for quickly creating and deploying functions as a service. I had an in-depth conversation on the [most common use cases for serverless functions](http://www.heavybit.com/library/podcasts/jamstack-radio/ep-12-faas-and-the-benefits-of-serverless/) which made me aware of the existence of [GitHub webhooks](https://developer.github.com/webhooks/). Based on specific events in a GitHub repository, you can run functions available through HTTP.

![serverless-flow](/v3/img/blog/graph-it-out.png)


I put together an [incoming webhook](https://www.netlify.com/docs/webhooks/#incoming-webhooks) for the Netlify CMS ORG repo in the Netlify Dashboard that triggers a new Netlify deploy on demand. I use the [GitHub Event Listener](https://github.com/serverless/examples/tree/master/aws-node-github-webhook-listener) example from the Serverless examples repository. This is a basic lambda function set up to be triggered when a GitHub event happens. I chose to trigger events on pushes to master and pull-request merges. Every merge that happens in the CMS repo is not always documentation specific, so these will add up. Luckily AWS offers 1 million free invocations per month and Netlify includes unlimited deploys, so there is no worry that the number of deploys will become financially prohibitive.

The entirety of this lambda function is available to view in the [netlify-cms-docs-webhook](https://github.com/netlify/netlify-cms-docs-webhook). I am very pleased with this solution because it checks all the boxes for keeping the Netlify CMS documentation in sync and enabling contributors to commit updates without any hoops to jump through.

If you have questions on this approach, feel free to drop a line in Gitter where the [Netlify CMS](https://gitter.im/netlify/NetlifyCMS) and [Serverless](https://gitter.im/serverless/serverless) teams have active channels.