---
title: Get more control over Netlify continuous deployment with deploy skipping
description: >-
  Learn how to suppress the automated build and deploy process, with deploy
  skipping in Netlify continuous deployment
authors:
  - Phil Hawksworth
date: '2018-10-08'
topics:
  - tutorials
tags:
  - CI
  - Automation
  - Deployments
tweet: >-
  Learn how to suppress the automated build and deploy process, with deploy
  skipping in Netlify continuous deployment
format: blog
---
Netlify now supports a convention found in many dedicated Continuous Integration (CI) services: the ability to suppress the automated build and deployment usually triggered by a push to the project's Git repository.

This feature is intended to give greater control over when automated builds run, and allow developers to commit changes to the code repository without the CI running every time.

## Skipping the CI

To prevent a deploy from running when you push a commit, add `[skip ci]` anywhere within your commit message.

You can skip the automated deployment of multiple commits by adding `[skip ci]` in the commit message of the last commit of a set of commits and pushing them all together.

For more information on using `[skip ci]` and other features available to you in the Netlify continuous deployment infrastructure, [check out the docs](https://www.netlify.com/docs/continuous-deployment/#skipping-a-deploy).
