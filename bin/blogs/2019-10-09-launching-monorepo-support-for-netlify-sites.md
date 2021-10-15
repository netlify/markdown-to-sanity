---
title: Launching Monorepo support for Netlify sites
description: " Supporting monorepos has been a long-standing feature request
  among our customers. Before today, there was no easy way to use the same
  repository and deploy it across multiple Netlify sites."
authors:
  - Shayon Mukherjee
date: 2019-10-09
lastmod: 2020-07-13
topics:
  - news
tags:
  - deployment
  - monorepo
  - git
tweet: ""
format: blog
---
![Diagram shows how one monorepo can be used to deploy multiple websites or apps](/img/blog/v6_noman-2x.png "Netlify monorepo support diagram")

## Managing web projects with monorepos

A monorepo is a repository that contains multiple sites or apps, each in its own subdirectory. Using a single repository for multiple projects can help you more easily track and manage the elements they have in common.

In this example diagram, a single repository contains the corporate website, customer-facing application, and documentation site. There are also folders for images and other dependencies shared across the three web projects.

Using this structure, the three projects and their dependencies stay in close sync and a single, atomic commit can be used to update everything at the same time. But how do you deploy from one repository to multiple Netlify websites?

## We've just made monorepos easy for Netlify deployments!

Supporting monorepos has been a long-standing feature request among our customers. Before today, there was no easy way to use the same repository and deploy it across multiple Netlify sites.

We are happy to share with you that working with monorepos has become a lot easier. Now when you specify a base directory for your site, our build engine will only publish and deploy a build if there are changes in that directory. In an event where no changes are detected, your build would be automatically cancelled. This makes it really simple to manage and deploy multiple sites from one repository.

## Introducing build.ignore

We are also introducing a new `netlify.toml` config option: `build.ignore`. It will allow you to skip builds triggered for sites that  observe no change in content. This new config option makes splitting your monorepo into multiple Netlify sites much more efficient.

You can learn more about the support in our [documentation](https://docs.netlify.com/configure-builds/common-configurations/#monorepos).

**Please note:** if your Netlify site was created before October 3, 2019, you'll need to reconnect it to automatically enable this feature.
