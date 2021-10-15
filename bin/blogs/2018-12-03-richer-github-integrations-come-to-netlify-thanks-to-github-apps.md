---
title: Richer GitHub integrations come to Netlify thanks to GitHub Apps
description: Announcing a better GitHub integration via GitHub Apps.
authors:
  - Esteban Pastorino
date: '2018-12-03'
topics:
  - news
tweet: Announcing a better Netlify - GitHub integration via GitHub Apps.
format: blog
---
We are happy to announce the recent launch of our GitHub App integration.

Creating a site from GitHub in Netlify has always been a few clicks away, but we knew there were still some things that we could improve. We've always wanted to provide more granular repository permissions, and a better way of dealing with deploy keys, webhooks, and deploy notifications.
Integrating as a GitHub App was very important to us because it solves these issues and provides access to awesome new GitHub features.

With this new integration, the flow for creating a new site remains as simple as ever, but now you can give Netlify access to specific organizations and repositories rather than to *all* of your repositories and organizations. This is a huge step for people who needed more granularity when granting access to their code. You can add and remove repo access whenever you need, and if you’re not an organization admin, you can request to install the app.

This change means that we no longer add webhooks and deploy keys directly to your repo. Those are managed automatically by the installation — fewer moving pieces for a simpler setup. 
Additionally, we no longer need personal access tokens for creating notification hooks. Setting up deploy notifications to GitHub is now even easier than before. As a nice bonus, comments, commit status, and other GitHub notifications now appear posted as “Netlify” and not your personal account, meaning these notifications won’t count towards your personal quota for the GitHub API limit.

And speaking of notifications, we’re now leveraging the [Checks API](https://blog.github.com/2018-05-07-introducing-checks-api/) to show [deploy summaries](https://www.netlify.com/blog/2018/09/05/more-confident-deployments-thanks-to-netlify-deploy-summaries/)! You’ll be able to see the latest build data right in the Pull Request screen 🎉

**Upgrade process**

All new sites are already using the new GitHub integration, so if you are adding a new site, you’ll don’t need to do anything to start enjoying this feature.

For existing sites already linked to a GitHub repo, you’ll see a card prompting you to upgrade to the new app in the Netlify admin for the site. Just select the account and repo linked to it, and we’ll do the rest for you.
When upgrading, we'll convert all existing GitHub based build hooks (e.g.: PR message, commit status) to use the app instead of your personal token. Additionally, we automatically enable the Checks API hooks, providing even more insight into every commit and Pull Request.

To make the upgrade process even smoother, if you select more than one repo (or an entire account) when installing the app, we’ll auto-upgrade all your sites linked to those repos.

We’ve been enjoying the new level of detail and visibility this deeper GitHub integration brings. And think you’ll like it too.

If you would like to learn more, you can find more information in the [docs](https://www.netlify.com/docs/github-permissions/).

