---
title: Create Jira stories and issues right from your Deploy Previews
description: Jira teams rejoice! Now you can create Jira tickets and share
  feedback to Jira right from Deploy Previews.
authors:
  - Bradley Johnson
date: 2021-09-22
lastmod: 2021-09-20
topics:
  - news
tags:
  - Jira
  - Product
  - Deploy Previews
  - Code review
tweet: ""
format: blog
seo:
  metatitle: Create Jira stories and issues right from your Deploy Previews
  metadescription: "Jira teams rejoice! Now you can create Jira tickets and share
    feedback to Jira right from Deploy Previews in Netlify. Learn more in this
    blog post. "
  ogimage: /v3/img/blog/netlify-jira-integration.png
---
Jira teams rejoice! Now you can create Jira tickets and share feedback to Jira right from Deploy Previews.

One of Netlify's most popular features, [Deploy Previews](https://docs.netlify.com/site-deploys/deploy-previews/) enable you and your team to experience changes to any part of your site without having to publish them to production. Netlify builds Deploy Previews by default for GitHub pull requests and GitLab merge requests. For every change your team makes to a website or web app, Netlify automatically generates a unique Deploy Preview link, which you can open in your browser to review the changes before they go live.

But did you know that Deploy Previews come with [powerful collaboration tools](https://docs.netlify.com/site-deploys/deploy-previews/#collaborative-deploy-previews) to help manage feedback and deliver better web experiences? The convenient reviewer tools in the Netlify Drawer make it easier than ever for your whole team to leave high quality feedback about the latest Deploy Preview. With the new Netlify integration for Jira, now your team can submit new issues to Jira from the Deploy Preview when they discover bugs or want to propose new features.

Best of all, you can [invite an unlimited number of reviewers for free](https://docs.netlify.com/site-deploys/deploy-previews/#invite-contributors).

## Automatically sync reviewer feedback between Netlify and Jira

When you send your reviewers a Deploy Preview link, they can use the Netlify Drawer tools to leave detailed feedback, right in context. Every comment made in a Deploy Preview automatically syncs back to the pull or merge request, where you can find your reviewer comments, create follow-up tasks, and mark issues as resolved across all your connected tools.

What's new is that now you can also integrate your Netlify account with Jira. When enabled, you can submit new issues to Jira right from a Deploy Preview. Netlify will even publish a new comment to GitHub or GitLab indicating that an issue has been filed in Jira with a link to it. This way no matter what tool a team member is in, they’ll always have access to the latest information. Furthermore, when comments are made from within a Deploy Preview, you also get information about how a reviewer experienced that Deploy Preview, including their browser metadata. You can even reproduce your reviewer's browser configuration for easier troubleshooting, using the [nifty BrowserStack link](https://www.netlify.com/blog/2021/07/20/troubleshoot-qa-issues-faster-with-browserstack-and-deploy-previews/) that gets included in all Deploy Preview comments.

![](/v3/img/blog/jira-netlify-ui-923-2.png)

*With the new Jira integration, you can also file issues directly from your Deploy Preview to Jira or other developer tools like GitHub and GitLab.*

## How to enable the Netlify integration for Jira

To set up collaborative Deploy Previews with Jira, you’ll need to connect your Netlify user account with Jira so that you can submit feedback authenticated as yourself directly from a Deploy Preview.

You can do this from a Deploy Preview, by opening the Netlify Drawer and going to the Integrations tab. This tab is where you can connect to Jira, and also to other tools like GitHub or GitLab. Authenticating with your Jira user ID will enable you to mention team members on your Jira team and create new issues in Jira.

Once you’re logged in, go to the Issues tab in the Netlify Drawer. This is where you can create a new Jira issue. You can tag your Jira team members and include screenshots, screen recordings, or other annotations.

You can also check out the Activity tab, where team members and approved reviewers can leave comments about the Deploy Preview. 

If you are a pending reviewer, a team Owner must approve your request before you can access all available collaboration tools for your role.

## Invite unlimited reviewers for free

It’s quick and easy to invite reviewers to leave feedback on your Deploy Previews. You can invite reviewers from the Team Members tab in the Netlify Drawer, or send your reviewers a Deploy Preview URL.

For collaborators that already have a Netlify account, all they need to do is sign in. If your reviewers don’t yet have a Netlify account, they will need to sign up for a free reviewer seat. Reviewers do not need a Jira (nor a GitHub or GitLab) account to contribute feedback using Deploy Previews.

Want to learn more about using collaborative Deploy Previews? Here’s a handy blog post to [share with reviewers using Netlify for the first time](https://www.netlify.com/blog/2021/05/19/give-meaningful-feedback-with-collaborative-deploy-previews/), to help familiarize them with leaving feedback in Deploy Previews.

## More recent news about Deploy Previews

* [New Netlify integration with GitLab for fast, visual feedback on Deploy Previews](https://www.netlify.com/blog/2021/08/03/new-netlify-integration-with-gitlab-for-fast-visual-feedback-on-deploy-previews/)
* [Troubleshoot QA issues faster with BrowserStack and Deploy Previews](https://www.netlify.com/blog/2021/07/20/troubleshoot-qa-issues-faster-with-browserstack-and-deploy-previews/)
* [The Beginner's Guide to End-to-End Testing with Deploy Previews](https://www.netlify.com/blog/2021/06/29/the-beginners-guide-to-end-to-end-testing-with-deploy-previews/)
* [Usability improvements for collaborative Deploy Previews](https://www.netlify.com/blog/2021/06/07/usability-improvements-for-collaborative-deploy-previews/)
* [Give Meaningful Feedback with Collaborative Deploy Previews](https://www.netlify.com/blog/2021/05/19/give-meaningful-feedback-with-collaborative-deploy-previews/)
* [Next-generation Deploy Previews, plus Netlify acquires FeaturePeek](https://www.netlify.com/blog/2021/05/19/next-generation-deploy-previews-plus-netlify-acquires-featurepeek/)