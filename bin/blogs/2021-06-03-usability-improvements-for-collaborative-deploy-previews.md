---
title: Usability improvements for collaborative Deploy Previews
description: "We're fast at work making collaborating even easier. Learn how to unpin the Netlify drawer, and what else is new with collaborative deploy previews! "
authors:
  - Bradley Johnson
date: 2021-06-07
lastmod: 2021-06-03
topics:
  - news
tags:
  - deploy previews
  - product
tweet: ""
format: blog
relatedposts:
  - Next-generation Deploy Previews, plus Netlify acquires FeaturePeek
  - Give Meaningful Feedback with Collaborative Deploy Previews
metatitle: Introducing Improvements to Collaborative Deploy Previews
metadescription: "We're fast at work making collaborating even easier. Learn how to unpin the Netlify drawer, and what else is new with collaborative deploy previews! "
ogimage: /img/blog/og-image-cdp-improvements.png
---

It’s only been a couple weeks since we launched [collaborative Deploy Previews](https://www.netlify.com/blog/2021/05/19/next-generation-deploy-previews-plus-netlify-acquires-featurepeek/), but there’s already more to talk about! The developer community shared some excellent feedback for improving the Reviewer experience and we've got new updates to make getting feedback from Reviewers easier and more accessible.

As a quick recap, collaborative Deploy Previews enable project reviewers to comment, screen record, and annotate within a preview, while all feedback gets posted in the GitHub pull request or to connected tools like Clubhouse.io, Linear, and Trello. Reviewers don't have to switch tools to leave feedback, and developers automatically receive important context about Reviewers like browser metadata to help them troubleshoot issues.

✨ The best part is that Netlify teams can add unlimited Reviewers for FREE, so the whole team can contribute feedback. ✨

We've made a few changes this sprint to improve the collaborative Deploy Previews experience for Netlify users. Below is a short summary of new Deploy Previews features and there’s lots more on the way!

## 1. Drag to move the Netlify Drawer icon

The Netlify Drawer is the set of reviewer tools that overlays a Deploy Preview. It shows up as just a simple Netlify logo until it’s clicked and expanded. Initially, this was pinned in the lower-left corner of Deploy Previews. This created a problem for some users, as the Drawer icon would sometimes hide important UI elements. To solve those issues, we've unpinned the Netlify Drawer icon!

You can now drag the Drawer icon and it will pin to any of the four corners of the preview. This way if the Drawer is covering something important, all you have to do is move it. Try it out on one of your own [Netlify Deploy Previews!](https://app.netlify.com/)

![How to move the Netlify Drawer in deploy previews ](/img/blog/netlifydrawer.gif)

## 2. Permalink and branch deploy link added to Netlify Drawer Deploy Preview Settings

One request we heard frequently at launch was: “What if I want to send a Deploy Preview without this new feature enabled?” Netlify does have a solution for this, but it wasn’t particularly intuitive for everyone to use.

Netlify offers multiple types of Deploy Preview links:

* **[Deploy Previews](https://docs.netlify.com/site-deploys/overview/#branches-and-deploys)** work by deploying pull/merge requests to a unique URL different from the one your production site uses. You can share this URL with your team to gather their feedback using collaboration tools in the [Netlify Drawer](https://docs.netlify.com/site-deploys/deploy-previews/#netlify-drawer).
* Every deploy also has a **[permalink](https://docs.netlify.com/site-deploys/overview/#branches-and-deploys)** that starts with the deploy ID number. The contents of this URL never change, even after you redeploy your site. You can use this link if you need a Deploy Preview without the Netlify Drawer.
* **[Branch deploy links](https://docs.netlify.com/site-deploys/overview/#branches-and-deploys)** are a deploy generated from a branch that is not your production branch. These are useful when you want a Deploy Preview with the latest changes without the Netlify Drawer, but it requires you to [enable branch deploys.](https://docs.netlify.com/domains-https/custom-domains/multiple-domains/#branch-subdomains)

To make it easier to access permalinks and branch deploy links, we've added them to the Netlify Drawer Deploy Preview Settings. [Learn more in docs.](https://docs.netlify.com/site-deploys/deploy-previews/)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c572be80-5bab-4ceb-8a4d-bea7869ba93f/120566230-191fcc80-c40f-11eb-97f0-c09f6c6a0ddc.png](/img/blog/netlify-permalink-blog.png)

## 3. Avatar titles (user names) now accessible to screen readers in GitHub

We're always looking for ways to make Netlify more accessible, and many of our users rely on screen readers to help them collaborate with their peers. To better serve screen reader users, we've made avatar titles (user names) accessible to screen readers in GitHub. Now when you leave feedback for your teammates in a GitHub pull request, your username (and those of everyone else who has commented) will be readable by the screen reader.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f162052c-0b25-4b57-b21e-73b4978a5c81/120566232-19b86300-c40f-11eb-8c77-a5ad569d8543.png](/img/blog/netlify-cdp-reviewers.png)

## Coming soon

The Netlify team is fast at work creating new integrations and convenient features to make collaborating even easier. Stay tuned, as we're planning lots of new integrations (including GitLab support)!
