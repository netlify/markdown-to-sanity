---
title: "How VMware’s Tanzu Developer Center boosted users 300% with Netlify  "
description: Choosing Netlify to power their Jamstack site allowed the small
  VMware team to stand up a developer portal in only three months, and triple
  their expectations for users in the first year.
authors:
  - Netlify
date: 2021-06-03
lastmod: 2021-06-03
topics:
  - case-studies
tags:
  - Jamstack
  - Deploy Previews
  - CI
  - QA
tweet: ""
format: blog
relatedposts:
  - How Fostr used Shopify and the Jamstack to power e-commerce on Victoria
    Beckham Beauty
  - How Gremlin Tamed their Web Development Workflows with Netlify
seo:
  metadescription: Learn how choosing Netlify to power their Jamstack site allowed
    the small VMware team to stand up a developer portal in only three months,
    and triple their expectations for users in the first year.
  metatitle: Why VMware's Tanzu Chose Netlify to Power their Site
  ogimage: /v3/img/blog/vmware-og3.png
---
When VMware set out to build a website of developer-focused educational content, they needed a place to host it. They created [tanzu.vmware.com/developer](https://tanzu.vmware.com/developer) to serve as a single hub that would serve blogs, videos, and other resources to their primary audience: developers.

The VMware Tanzu<sup>TM</sup> Developer Center covers content about the bleeding edge of DevOps. The site itself, then, needed to hold up to the critical eye of developers, while also making use of modern web architecture. That’s why, when standing up the site, the three-person team knew they wanted a [Jamstack approach](https://www.netlify.com/jamstack/). When it came to selecting the tools to build and host their product, they chose Netlify for its out-of-the-box collaboration capabilities and ease of use.

Choosing Netlify for its Jamstack approach allowed the small VMware team to stand up a site in only three months, and triple their expectations for users in the first year.

## The challenge: minimize friction to launch

Bryan Friedman leads the Developer Engagement team at VMware, and his team took on the task of standing up a Tanzu dev-centric, content-heavy site as soon as possible. Friedman’s team formed at the beginning of 2020, after VMware acquired Pivotal. They’d be responsible for all parts of the site: building it, maintaining it, and also creating the initial set of content. They also wanted to make sure the content could scale by making it really easy for other contributors across the VMware org to commit directly to the site.

As a small crew with a big task, no one had the time to be a full-fledged website operator. They needed a site architecture that would just work: no worrying about constantly patching a vulnerable WP plugin, not having to provision additional CMS capacity to meet traffic, or be limited by the number of pre-production environments.

> “When people at VMware find out our team is only three people, they’re shocked.”
>
> – Bryan Friedman, VMware

Time to market is what initially drew them to the Jamstack. It would be easy to implement, easy to maintain, and with JavaScript, APIs, and Markup as the building blocks, no one would have to wrap their heads around new technologies.

As Friedman put it, they looked at their options, and saw that “Jamstack was the quickest way for us to get from A to Z.”

## Technical requirements for VMware’s Jamstack site: easy collaboration

Once they’d picked a Jamstack approach, it was time to select the rest of their tooling and build the content for the site.

Alongside site development, the team was simultaneously creating content to publish there, and they quickly began planning ideas for content about Kubernetes orchestration and modern DevOps practices. The team wrote out topic ideas, assigned authors, and the three of them started churning out content. But from the very beginning, they knew they’d ultimately want contributions from across the company.

And in order to get content contributions, they needed to make collaboration easy. So the question became: what would make it really easy for everyone else at VMware to contribute? Here’s what the team came up with:

* **Git-based workflows:** As a developer-first organization, the VMware team was very used to git-based collaboration for their development workflows and was eager to apply it to content creation as well.
* **Common coding languages:** Markdown is the preferred choice for technical content authors at VMware, and the team preferred to stay within their existing languages, rather than learning React or a new framework for this portion of their work.
* **Live preview capabilities:** If the team were just two or three people, they could all test locally and it wouldn’t be a big deal. But in order to get contributions from across the company, they needed to make contributing and QA’ing edits really easy. And for that, the team wanted live previews.

The team made the decision to go with [Hugo](https://gohugo.io/) since they already had some experience working in Go. Hugo also proved to provide quick builds for the site. Once they selected Hugo, they looked for a hosting provider. They looked into the options and initially played around with GitHub pages, which some of the team had used for personal projects in the past.

They decided to go with Netlify after using [Netlify Build](https://www.netlify.com/products/build/) and discovering the power of [deploy previews](https://www.netlify.com/products/deploy-previews/). Straight out of the box, Netlify Build gave the team all the infrastructure and automation they needed to get CI and QA workflows in place, all without leaving GitHub.

![VMware Tanzu's Netlify Architecture](/v3/img/blog/vmware-netlify.png)

The proof of concept was soon validated when the Tanzu team got a pull request from somewhere else in the company providing new content. It was an existing guide that was being sent to customers, and the team realized they could make the guide public. Since the guide was already in Markdown, the contributors could just port it over and add it to the [Tanzu repo](https://github.com/vmware-tanzu/tanzu-dev-portal) themselves. If there had been a monolithic CMS to go through, with administrative grants and code restyling, that collaboration would not have happened as easily (or maybe at all).

By minimizing friction to publication, the Tanzu Developer Center really started to take off.

### A development workflow that “just works”

In addition to lowering the barrier for external contributions to the site, the tooling they chose also needed to work for the Tanzu team. And to them, that meant spending as little time as possible administrating.

Since VMware is a large organization with lots of web properties, Friedman’s team was able to look around and see what else was successful at the company. Where else are people hosting sites, and how much time did they spend updating them?

A sister team within the org had been creating some content as well and publishing to GitHub pages, but they had to do a lot of work to get that up and running. They were running CI with GitHub actions, but it required a lot of upfront configuration, and was error-prone. Netlify, on the other hand, did all that work for them with just one click.

> “We realized, ‘Oh, we can connect this GitHub repo to Netlify, click a button and we get all of it.’ It was just the most straightforward way to do it.”
>
> – Bryan Friedman

## How VMware builds dynamic experiences on a static site

According to the team, the main benefit of Netlify is “the time \[they] don’t spend thinking about it.” Netlify works so seamlessly with VMware’s existing tech stacks, they don’t need to worry about it. Here’s how Netlify is helping them deploy frequently.

### Easy collaboration through deploy previews

With Netlify in place, any time there’s a quick change needed on the site—a command, for instance, that needs to be changed—there’s no need for ticketing software and a pipeline of people to make the edit. A team member can just send a message over with the change, and in a few minutes, there’s a pull request and a unique deploy preview URL, and after getting a thumbs-up, they can merge it. No need to tweak any server settings or anything. It just runs.

> “The deploy preview concept totally blew my mind the first time I saw it. I was like, ‘This is just so integrated into our GitHub workflow that you don’t have to leave GitHub? You just click a button and get it? So easy!’”

A major benefit is being able to access things before they go live, especially events. With [Netlify’s deploy previews](https://www.netlify.com/products/deploy-previews/), the team was able to give a deploy preview to the instructors hosting external workshops before they had to go live. That meant that event hosts could review the relevant pages and see exactly how they would function, while not having to push anything live prior to the event.

### Dynamic capabilities with Netlify functions

The content on the Tanzu Developer Center isn’t purely static—it’s a dynamic web application.

For a more dynamic part of the site, the team had built a Django app with a front end, so when a user went to the website, they could log into their account via the Django app. At first, they were iframing the Django app into the site, because that seemed like the only way to do server-side rendering on a static site—until they started using [Netlify functions](https://www.netlify.com/products/functions/). Netlify functions allow them to authenticate users into Tanzu’s account management portal and display relevant information. This microservice approach has allowed the team to migrate from a self-managed Django application.

The ability to use Netlify functions as a secure way to make API calls to third-party services, and back-end applications, has been transformative in allowing VMware to adopt a microservice architecture in developing their web application.

### Instant site rollbacks with atomic commits

They also can deploy with confidence through instant rollbacks. Says Friedman, “I don’t freak out like I might have in the past, because it’s so easy to roll it back, worst-case scenario.” He and the team know that they can preview their site from any given time with a preview URL, and a rollback to a previous version would be live immediately with Netlify taking care of instant cache invalidation. Without atomic deploys, even if it’s an easy fix, users will have to see downtime while the pages are being built, and for the engineering teams they would need to wait the time it takes to build the site to validate the changes.

> “\[With instant site rollbacks] we know we can just revert the commit and then push again and we’re good… it’s kind of amazing how easy it is.”

## Results and next steps

The Tanzu site recently turned one year old. In that time, the site has exceeded the team’s expectations, and the Tanzu team has tripled their expectations for users. They attribute this to the content on the portal, which wouldn’t go live at the pace it does now without the collaborative workflows Netlify enables. And, they are able to continue to manage this growth with their team of three on Netlify.

As for next steps, the VMware team is considering adding a headless CMS to allow nontechnical contributors to edit the site just as easily as developers. They’re also exploring additional uses of Netlify functions to add more dynamic capabilities to their site. With Netlify and Hugo in place, the foundation of a scalable web architecture has been proven, and they’re continuing to grow and explore the capabilities of the Jamstack.
