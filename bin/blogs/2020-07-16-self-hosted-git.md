---
title: "Unlock Jamstack for Enterprise Web Apps With Self-Hosted Git Repos"
description: >
  Netlify now supports self-hosted instances of GitHub Enterprise & GitLab! Learn how you can start shipping with Netlify today!
authors:
  - Netlify
date: 2020-07-21T14:00:00.000Z
lastmod: 2020-07-21T14:00:00.000Z
topics:
  - tutorials
tags:
  - announcement
  - build
  - deploy
  - features
  - launch
  - netlify
tweet: ""
format: blog
seo:
  metatitle: >
    Unlock Jamstack for Enterprise Web Apps w/Self-Hosted Git Repos
  metadescription: >
    Netlify now supports self-hosted instances of GitHub Enterprise & GitLab! Learn how you can start shipping with Netlify today!
  ogimage: /img/blog/self-hosted-repos-og.png
relatedposts:
  - "Netlify expands pricing options: More value for developers and enterprise teams"
  - Announcing Improved Netlify Build Logs!
---

**Starting today, Netlify now supports self-hosted instances of GitHub Enterprise and GitLab on [Business][plans] and [Enterprise plans][enterprise]!**

We are incredibly excited to make Netlify accessible to teams using [GitHub](https://github.com/about) Enterprise and self-hosted [GitLab](https://about.gitlab.com/), unlocking the performance, collaboration, and workflow benefits of the Jamstack for organizations at every scale. **Today, these integrations are supported in environments where the self-hosted implementation is not located behind a firewall.** Netlify plans to support these use cases in a future release.

> “GitHub Enterprise gives organizations of all sizes the ability to code, scale, and work better together. With Netlify’s announcement, organizations on GitHub Enterprise Server now have the opportunity to build and ship high-performance websites and web applications much faster. Together GitHub and Netlify will continue to improve developers’ workflows and provide the tools developers love.”
> —Jason Warner, CTO at GitHub

> “We are excited that Netlify now offers GitLab SaaS and self-managed integrations for users looking to use the Jamstack architecture. As today’s enterprises look for new ways to enable teams to use git-based workflows, Netlify can help users develop, build, and deploy websites and web apps faster.”
> —Brandon Jung, vice president of alliances at GitLab


## Intuitive UI-Based Setup

The setup of these integrations is fully supported from the Netlify UI, making it easy to move through the steps of linking your sites to your self-hosted repositories. We’ll use the example of GitHub.

You kick things off in the settings section of the UI where you can make sure that you’re on the right plan to use the new integration (more on that later) and then go to “edit settings.”

![Netlify self-hosted git repository setup in the dashboard.](/img/blog/self-hosted-git-setup.png)

From there, you’ll click on “Connect” to add your self-hosted server and it sends you to a modal where you can enter all the critical details about your server instance. 

During the setup, we’ll provide you with account specific details and instructions to create the necessary GitHub app and then integrate that app on Netlify using this form.

![Setting up self-hosted GitHub Enterprise with Netlify.](/img/blog/github-enterprise-netlify-setup.png)

Once you’ve filled that out, you’re ready to start linking your sites to your self-hosted repos!

![Setting up self-hosted GitHub Enterprise with Netlify.](/img/blog/github-enterprise-netlify-configured.png)

Now your teams that are connected to self-hosted Git instances can select self-hosted repos in the Netlify UI when creating a new site from Git!

![Setting up self-hosted GitHub Enterprise with Netlify.](/img/blog/github-enterprise-create-netlify-site.png)

## Bring All the Benefits of the Jamstack to Enterprise-Scale Teams

Matt Biilmann, CEO of Netlify, shares insight on this next step for Netlify: “Businesses need web applications that load fast, respond instantly, and are easy to update as customer and market dynamics change. Netlify’s platform is uniquely designed to deliver this experience, empowering developer teams to use a modern Jamstack approach alongside legacy web stacks. Our latest updates accelerate development even further and lower the price barrier to use Netlify’s most advanced features at scale.”

The introduction of support for self-hosted GitLab and GitHub Enterprise instances puts Netlify’s world-class developer experience—as well as the improvements to delivery times, operational overhead, and security that come with the Jamstack workflow—within reach of even the largest teams.

When combined with our security best practices for teams, including single sign-on (SSO), role-based access control (RBAC), and more, Netlify offers the most advanced platform for delivering Jamstack applications at every scale.

## Available in Netlify’s Enterprise Plan and All-New Business Plan

Today we also [announced new pricing options][plans], including a new Business plan that gives you access to advanced enterprise features for $99/member/month. The integration with self-hosted GitHub and GitLab is available in this new Business plan as well as our customized Enterprise plan. 

## Get Started With Netlify Today!

To get started with Netlify on your self-hosted GitLab or GitHub Enterprise instance, [check out the docs][docs], [check out our plans][plans], or [learn more about our enterprise offerings][enterprise].

[plans]: https://www.netlify.com/pricing/?utm_source=blog&utm_medium=self-hosted-git-jl&utm_campaign=devex
[enterprise]: https://www.netlify.com/enterprise/?utm_source=blog&utm_medium=self-hosted-git-jl&utm_campaign=devex
[docs]: https://docs.netlify.com/configure-builds/repo-permissions-linking/self-hosted-git/?utm_source=blog&utm_medium=self-hosted-jl&utm_campaign=devex
