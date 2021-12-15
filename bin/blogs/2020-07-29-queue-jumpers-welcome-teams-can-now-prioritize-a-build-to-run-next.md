---
title: "Queue-jumpers welcome! Teams can now prioritize a build to run next"
description: "Gain greater control over your team's build queue with the ability to prioritize a build"
authors:
  - Phil Hawksworth
date: 2020-07-29
lastmod: 2020-07-29
topics:
  - news
tags:
  - Features
  - CI/CD
  - Build
tweet: "Announcing build prioritization -  Gain greater control over your team's build queue"
format: blog
relatedposts:
  - Announcing Faster Deploys for Large Sites
  - Announcing Improved Netlify Build Logs!
seo:
  metatitle: "Announcing Priority Builds -  Gain greater control over your team's build queue"
  metadescription: "Netlify's new Priority Builds feature lets you control what builds next when you reach your team's concurrent build capacity"
  ogimage: /v3/img/blog/og-image-build-prioritization.png
---

Users of Netlify [Business and Enterprise](https://www.netlify.com/pricing/?utm_source=blog&utm_medium=announce-priority-builds-pnh&utm_campaign=devex) accounts now have a new way to control the builds and deploys being generated by team members.

As teams increase in size, or collaborate on more projects, they become more likely to reach   their concurrent [build capacity](https://docs.netlify.com/accounts-and-billing/billing/?utm_source=blog&utm_medium=announce-priority-builds-pnh&utm_campaign=devex#builds-usage). Builds which are requested when a team's build capacity is full, are queued until capacity is available.

Netlify offers the ability to purchase [additional capacity for concurrent builds](https://www.netlify.com/pricing/?utm_source=blog&utm_medium=announce-priority-builds-pnh&utm_campaign=devex#features), but also performs some intelligent [build queue management](https://docs.netlify.com/configure-builds/troubleshooting-tips/?utm_source=blog&utm_medium=announce-priority-builds-pnh&utm_campaign=devex#enqueued-builds) to maximize your build efficiency.

## Jump the queue

We understand that some deployments are more urgent than others, so we are happy to introduce the ability to prioritize any enqueued build to be next in line when build capacity opens up.

Your [team's Builds page](https://docs.netlify.com/monitor-sites/monitor-builds/?utm_source=blog&utm_medium=announce-priority-builds-pnh&utm_campaign=devex), which summarizes all of the build activity across your team, now includes the controls to prioritize a build which is awaiting build capacity.

![Jump the queue with the "Build Next" button](/v3/img/blog/monitor-builds-prioritize-build-button.jpg "The Build Next button")

Clicking the "Build next" button will bring a build to the front of the queue and allow it to begin as soon as build capacity is available. Simple!

And you can even make an enqueued build start immediately by assigning it to build next, and then cancelling an active build to create capacity.

## Visibility and Control

The ability to jump the queue in this way is available to all team [Collaborators and Owners](https://docs.netlify.com/accounts-and-billing/team-management/manage-team-members/?utm_medium=announce-priority-builds-pnh&utm_campaign=devex#team-roles) on Business or Enterprise teams, with the name of the person prioritising the build displayed in the Builds page and also recorded in your [team's audit log](https://docs.netlify.com/accounts-and-billing/team-management/team-audit-log/?utm_source=blog&utm_medium=announce-priority-builds-pnh&utm_campaign=devex).

![See who prioritized a build](/v3/img/blog/monitor-builds-prioritized-build.jpg "Visibility in the UI and logs")

Build prioritization is just one of the tools which can help with monitoring and managing your web development teams and projects. Check out our [list of features](https://www.netlify.com/pricing/?utm_source=blog&utm_medium=announce-priority-builds-pnh&utm_campaign=devex#features) for more. 

Enterprise customers might also be interested in our [High-Performance Builds](https://www.netlify.com/enterprise/#high-performance-products) which, in addition to the above, brings even faster builds, more memory, and higher concurrency than our standard build infrastructure. [Contact our sales team](https://www.netlify.com/enterprise/contact/?utm_source=blog&utm_medium=announce-priority-builds-pnh&utm_campaign=devex) for information.

For more about monitoring and controlling your team's builds, [visit the documentation](https://docs.netlify.com/monitor-sites/monitor-builds/?utm_source=blog&utm_medium=announce-priority-builds-pnh&utm_campaign=devex), or for discussions and questions you can visit [our community forum](https://community.netlify.com/t/new-feature-for-business-and-enterprise-teams-prioritize-a-build/19338/?utm_source=blog&utm_medium=announce-priority-builds-pnh&utm_campaign=devex).