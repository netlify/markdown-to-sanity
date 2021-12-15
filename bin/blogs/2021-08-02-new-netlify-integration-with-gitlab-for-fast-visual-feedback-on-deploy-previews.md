---
title: New Netlify integration with GitLab for fast, visual feedback on Deploy
  Previews
description: "GitLab users, your wait is over! You can now use Netlify’s new
  reviewer tools to create GitLab issues and file bugs directly from Deploy
  Previews. Learn how in this blog post. "
authors:
  - Bradley Johnson
date: 2021-08-03
lastmod: 2021-08-02
topics:
  - news
tags:
  - Gitlab
  - Deploy Previews
  - collaborative deploy previews
tweet: ""
format: blog
relatedposts:
  - Next-generation Deploy Previews, plus Netlify acquires FeaturePeek
seo:
  metadescription: "Learn about Netlify's new integration with GitLab to get fast,
    visual feedback on your Deploy Previews. Plus, get unlimited reviewers for
    free. "
  metatitle: New Netlify integration with GitLab for fast, visual feedback on
    Deploy Previews
  ogimage: /v3/img/blog/netlify-gitlab-og-image-for-august-3-2021.png
---
GitLab users, your wait is over! You can now use Netlify’s new reviewer tools to create [GitLab issues](https://docs.gitlab.com/ee/user/project/issues/) and file bugs directly from Deploy Previews.

Deploy Previews are a powerful collaboration tool to help manage feedback and deliver better web experiences. It's easier than ever to get the whole team involved, and you can invite an unlimited number of reviewers for free.

Netlify Deploy Previews have always enabled GitLab users to review changes from a merge request before going live. But now, when you open a Deploy Preview, you’ll find the new Netlify Drawer packed with convenient tools to help reviewers from across your organization leave high-quality feedback that’s automatically synced to the merge request.

Here's how it works:

* Every change your team makes to a website or web app generates a unique [Deploy Preview](https://docs.netlify.com/site-deploys/deploy-previews/) link, which you can open in your browser to review the changes before they go live
* When a reviewer receives a Deploy Preview link, they can use the [Netlify Drawer](https://docs.netlify.com/site-deploys/deploy-previews/#netlify-drawer) review tools to leave detailed feedback directly from their browser
* Feedback syncs into GitLab and other productivity tools where you can view reviewer comments, create follow-up tasks, and mark issues as resolved

## Connecting to GitLab from Deploy Previews

When you first set up collaborative Deploy Previews, you'll need to connect your Netlify user account with GitLab so that you can submit feedback authenticated as yourself directly from a Deploy Preview.

From a Deploy Preview, open the Netlify Drawer and go to the Integrations tab. This tab is where you can connect to GitLab, and also to other productivity tools your team is using like Linear, Clubhouse (soon to be Shortcut), or Trello. Authenticating with your GitLab user ID will enable you to [mention team members](https://docs.gitlab.com/ee/user/project/issues/issue_data_and_actions.html#mentions) on your GitLab team, create new [issues](https://docs.gitlab.com/ee/user/project/issues/) in your GitLab [repository](https://docs.gitlab.com/ee/user/project/repository/), and comment on [merge requests](https://docs.gitlab.com/ee/user/project/merge_requests/index.html).

![How to connect GitLab to Netlify](/v3/img/blog/cdp-gitlab-blog1.png)

Once you're logged in, you may want to visit the Activity tab in the Netlify Drawer, where team members and approved reviewers can leave comments on the Deploy Preview. These comments are then synced and mirrored on the GitLab merge request so that everyone on the project team stays aligned.

![How to sync comments between Netlify and GitLab](/v3/img/blog/cdp-gitlab-blog2.png)

If you are a pending reviewer, a team Owner must approve your request before you can access all available collaboration tools for your role.

## Reviews and feedback automatically sync to the GitLab merge request

Collaborative [Deploy Previews](https://www.netlify.com/products/deploy-previews/) simplify the process of gathering reviews from stakeholders by providing a convenient tool for feedback. Reviewers don't even need a GitLab account to leave feedback. They can set up a free reviewer account right from the Deploy Preview.

When you send a reviewer a Deploy Preview:

* Reviewers can make comments, take and annotate screenshots, record videos, and reply to teammates asynchronously on web projects, right from the Deploy Preview.
* Developers get reviewer metadata automatically, so they can troubleshoot different browser settings, [reproduce a reviewer’s environment on BrowserStack](https://www.netlify.com/blog/2021/07/20/troubleshoot-qa-issues-faster-with-browserstack-and-deploy-previews/), or test on mobile devices by scanning a QR code.
* Netlify admins can access deploy logs from within Deploy Previews, and see reviewer activity in the Netlify Platform UI.

Using Deploy Previews ensures that feedback gets captured where it’s most convenient for reviewers, right in the Deploy Preview. Then feedback gets automatically shared to the tools where developers are already working, like [GitLab](https://about.gitlab.com/). This is especially helpful for enterprise teams, who can be spread thin across many different productivity tools. By bringing reviewer feedback into the [GitLab merge request](https://docs.gitlab.com/ee/user/project/merge_requests/), developers no longer need to track down Slack messages, emails, screenshots, or other information to troubleshoot QA issues.

For a full tutorial on how to use collaborative deploy previews with GitLab, watch the product demo: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/FY26RtIJE8Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Invite unlimited reviewers for free

It's quick and easy to invite reviewers to leave feedback on your Deploy Previews. You can invite reviewers from the Team Members tab in the Netlify Drawer, or send your reviewers a Deploy Preview URL.

For collaborators that already have a Netlify account, all they need to do is sign in. If your reviewers don’t yet have a Netlify account, they will need to sign up for a free reviewer seat. Reviewers do not need a GitLab account to contribute feedback using Deploy Previews.

Here's a [handy blog post you can share with reviewers](https://www.netlify.com/blog/2021/05/19/give-meaningful-feedback-with-collaborative-deploy-previews/) using Netlify for the first time, to help familiarize them with leaving feedback in Deploy Previews.

## Let us know what you think!

We'd love your suggestions on ways to improve collaborative Deploy Previews.

If you have feedback for the Netlify team, let us know by clicking the question mark icon in the lower left corner of the Netlify Drawer and sending us a note.