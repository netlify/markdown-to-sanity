---
title: Introducing Deploy Previews in Netlify
description: Deploy every pull request from your git repository to a unique URL.
authors:
  - David Calavera
date: 2016-07-20T00:00:00.000Z
lastmod: 2021-05-18
topics:
  - news
relatedposts:
  - "Next-generation Deploy Previews, plus Netlify acquires FeaturePeek"
  - Give Meaningful Feedback with Collaborative Deploy Previews
short_title: Deploy Previews
tags:
  - Deploy Previews
  - Git
  - pull request
  - continuous delivery
format: blog
image: /v3/img/blog/deploy-preview-banner.png
---
> ### *2021 Update: Deploy Previews have some new features to make collaborating even easier. Learn more about [Collaborative Deploy Previews-> ](https://www.netlify.com/blog/2021/05/19/next-generation-deploy-previews-plus-netlify-acquires-featurepeek/)* 



There is a better way to build for the web and collaborate with your team.

For years, developers have enjoyed the benefits of practices like Continuous Integration and Continuous Delivery in their workflows. Unfortunately, traditional hosting platforms only allow you to deploy your sites to the same URL every time. You need to manually create new sites to allocate new URLs if you test and verify changes before putting them into production. These limitations make CI and CD tedious and hard to implement for websites and frontend applications.

Today, we’re very excited to introduce our solution to these problems, [Deploy Previews](https://www.netlify.com/products/deploy-previews/). This will allow you and your team to see what changes will look like in production, without having to deploy them in your existing site.

For instance, last Monday, we published a blog about [Slack notifications](/blog/2016/07/18/shiny-slack-notifications-from-netlify/). Prior to posting, I had a deploy preview URL available for my team to review, make improvements and comment. This can be done with any page on any site using Deploy Previews on Netlify.

Deploy Previews work by deploying every pull request from your Git repository to a unique URL; completely different from the one your main site uses. You and your team can see how those changes look before they’re merged into the main branch and deployed to production.

To help you discover Deploy Previews, we put those links where it helps your team the most, directly in the pull request as commit statuses:

![netlify deploy preview example success](/v3/img/blog/deploy-preview-success.png)

We keep this preview up to date as you continue to work, committing new changes to the same branch. Our CDN takes care of invalidating the cache every time for you.

![netlify deploy preview workflow](/v3/img/blog/deploy-preview-workflow.gif)

Deploy Previews work with most Git hosting supported by Netlify, currently GitHub and GitLab. They are available for all our pricing plans, including free sites. You only need to [add commit hooks to your Netlify sites](/docs/webhooks#outgoing-webhooks), we take care of the rest. We’ve also integrated Deploy Previews with other notifications, like Slack’s incoming webhooks:

![netlify deploy preview slack notifications](/v3/img/blog/deploy-preview-slack.png)

We’ve been using [Deploy Previews ](https://www.netlify.com/products/deploy-previews/)internally for some time and they’ve already improved the way we develop and release all our frontend applications significantly. We hope you find them as useful as we do and start enjoying the benefits of Continuous Delivery for all your projects on Netlify.

- - -

*This post has been featured on **[Netlify Milestones on the road to 1 Million Devs](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#introduced-deploy-previews)***:

[![Netlify 1 Million Devs article feature](/v3/img/blog/featured-on-1-million-devs-banner.png)](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#introduced-deploy-previews)
