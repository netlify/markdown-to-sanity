---
title: From legacy infrastructure to a lean and powerful stack with Netlify
description: How Ample delivered improved efficiency and effectiveness for
  Crossroads by migrating their considerable web estates to Netlify and the
  Jamstack.
authors:
  - Netlify
date: 2020-09-30
lastmod: 2020-09-30
topics:
  - case-studies
tags:
  - jamstack
  - migration
  - architecture
tweet: ""
format: blog
relatedposts:
  - How Celonis Supercharged their Content Production with Netlify Enterprise
    Solutions
seo:
  metatitle: Going From Legacy Infra to a Lean Stack with Netlify
  metadescription: Learn how Ample delivered improved efficiency and effectiveness
    for Crossroads by migrating their considerable web estates to Netlify and
    the Jamstack. Check it out!
---
When Ample, a digital transformation agency based in Cincinnati, began working with Crossroads to overhaul their online presence and processes, two things quickly became clear:

1. [Crossroads](https://www.crossroads.net/) , the fastest growing church in the US, creates a lot of content across a wide variety of channels, and with many communities. Supporting, and improving that capability would be key.
2. The existing platform was large and complex. Any changes would have to be carefully planned. And introducing any new tools or infrastructure into the mix might prove to be a challenge.

Ample’s understanding of this need to consider the legacy technology, and their awareness of the challenges that changing large scale infrastructure can hold, were a key to their success. Their vision was to introduce improved systems and processes, without having to first dismantle or disrupt what already existed.

Taylor MacDonald, CTO of Ample explained that at the time Crossroads had a full DevOps team who were just dipping their toe into figuring out how to dockerize and eliminate single points of failure. Furthermore any solutions brought to the table would need to be implemented across a team with a high turnover rate — meaning the ability to spin up new devs quickly would be an important factor to any decisions moving forward. 


![Our job became one of education. Explaning the benefits that Netlify would bring. What does it mean to deploy a static site? What does this mean for the current architecture and how do we get there? quote by Taylor MacDonald, CTA at Ample](/img/blog/ample-cto-quote.png)

Let’s take a look at how Ample embraced some of the key features of the Jamstack architecture, along with core Netlify features to transform how the platforms and content were managed. And at how you too could adopt methods to gradually migrate from legacy infrastructure, to a modern, more capable and agile stack.

## Challenges of the existing platform

The platform which drove Crossroads’ various web properties had evolved over time and become increasingly complex and entwined. Unpicking or replacing any given part of the stack would be difficult. This is a common scenario particularly for large organizations. 

The existing content management system (CMS) was tightly coupled to the presentation layer making it difficult for the 60+ developers, across 5 product teams to unleash their full potential. To try to work around that, customizations  had been made to add bespoke functionality to the CMS in order to help the different teams get what they needed. This disrupted the upgrade path for their CMS and made future iterations and improvements increasingly difficult.

Ample, who have long been  [advocating for Jamstack architectures](https://www.ample.co/jamstack)  in their projects, recognised that a decoupled, or "headless" CMS could help here by putting distance between the underlying content structure, and the various user interfaces and content channels which would convey it. This also supported their goals of managing content in a central location for use across many channels and media. Contentful was selected as the CMS. Its developer-friendly content APIs, customization options and integrations with Netlify thanks to webhook support made it a compelling choice.

A shift to the Jamstack with Netlify would also bring greater speed, security and the ability to handle heavy traffic loads, thanks to the sites being pre-generated and service directly from a CDN (Netlify Edge). Development workflows could be improved while the overheads in maintaining a large monolithic CMS could be reduced. 

The project represented so many opportunities, but to realise them, a migration would be required. And this can be daunting for any organization.

## A phased approach

With their sights set on a Jamstack architecture with a decoupled content platform and some new frontend development models to introduce, the question of "how to get there?" loomed large. A migration plan was needed.

As Dan Rye, Lead architect for the project, recalled from previous project experience, "We had been scarred by some very complex and expensive cutover experiences in the past".

This is where Netlify’s edge logic came to the fore. The Redirects API provided by Netlify Edge adds proxying and redirection with surprising ease. The approach would be to direct all incoming site traffic to Netlify at the DNS level. Any resources which could be served directly from Netlify’s CDN would be, with all other requests passing through to the existing underlying hosting infrastructure. Over time, as more pages and sections of their sites were added to Netlify, they would be resolved and served directly from Netlify’s CDN rather than having their requests make it through to the legacy platform beneath. 

Since the proxy layer exists on the edge of Netlify’s CDN, and is highly optimized C code, it is lightning fast and undetectable to any site visitors. The simplicity of the Redirects API belies this underlying power. You can see how a single line of configuration can implement the fundamental rule to directly serve, or to proxy traffic, in the blog post below, which also includes a short video demonstration and an example code repository to explore and try for yourself.

[How to add Jamstack to your infrastructure in 8 minutes](https://www.netlify.com/blog/2020/03/19/learn-how-to-add-jamstack-to-your-infrastructure-in-8-minutes/?utm_source=blog&utm_medium=crossroads-pnh&utm_campaign=devex) 

This *additive* approach would mean that Crossroads could begin delivering sites from their new model without any disruption to their existing infrastructure. And the upcoming need for a new project,  [Crossroads Media](https://github.com/crdschurch/crds-media), which could be built with the new Jamstack approach, would prove to be the ideal means to prove the approach and add functionality to the Crossroads channels without impacting any of the current sites or infrastructure.

Brian Miller, who worked as Product Manager and continues to consult with Crossroads as part of Tensure, describes this ability to de-risk the entire project, and prove the approach in a tangible and contained way, as "the clincher".

To help Crossroads understand the approach, Ample presented diagrams of how this phased approach would work:

The starting point: All traffic is directed to a Kubernetes cluster where it is routed to different containers and the CMS and hosting infrastructure.

### Original architecture

![Current architecture of Crossroads](/img/blog/crossrorads-arch-current.png "Current architecture of Crossroads")

Adding Netlify to the stack: All traffic is directed to Netlify’s Edge which proxies all requests to the existing infrastructure other than those requests for which it has pre-generated pages.

### Phase One - Migrate server-side CMS pages to Netlify

![Phase 1 - introducing Netlify to the architecture of Crossroads](/img/blog/crossrorads-arch-phase1.png "Phase 1 - introducing Netlify to the architecture of Crossroads")

Shifting and sunsetting: More requests are satisfied by micro frontends as they are added to the resources available from Netlify. Some legacy infrastructure continues to operate as before while awaiting migration.

### Phase Two - Migrate micro-client to Netlify and retire Maestro

![Phase 2 - capturing more traffic within the Netlify infrastructure ](/img/blog/crossrorads-arch-phase2.png "Phase 2 - capturing more traffic within the Netlify infrastructure ")

Completed migration: All requests are able to be satisfied by the micro frontend architecture served from Netlify.

### Phase Three - consolidate front-end architecture

![Phase 3 - all traffic being served from Netlify ](/img/blog/crossrorads-arch-phase3.png "Phase 3 - all traffic being served from Netlify ")

## Stack goals

To achieve greater agility and flexibility across the development teams, Ample looked to shift things from one large codebase which delivered the things such as search, single sign-on, discussion boards, and a donations portal, all as one large single page application written in Angular, to a number of independent micro frontends. 

Managing one monolithic stack, Brian Miller recalls, felt like a significant burden for Crossroads and other enterprises Tensure has worked with. A shift to smaller, more agile micro frontend projects brought greater agility and projects which teams could more easily reason about.

> "We benefited from a shift from teams as feature factories to teams as problem solvers." — says Dan Rye

And gradually moving away from a single monolith by introducing micro frontends played wonderfully with Netlify’s proxy-based migration path:

> "Introducing micro frontends was a saving grace in avoiding a big-bang migrations." — Dan Rye

Netlify’s redirect and proxying capabilities enabled straight forward integration of the different elements, so that the result felt cohesive and consistent, while Ample also found clever ways to bring uniformity to the components being developed for use across their different tools and frameworks. They chose to create web components with  [Stencil.js](https://stenciljs.com/)  to help them develop components which could be used with any of their frontend frameworks. This abstraction of frontend development, combined with abstractions in their content and data layers through APIs, delivered incredible portability and flexibility, making future iterations far less onerous than ever before.

> "This was a key to making the micro frontends model economical." — Brian Miller

Crossroads even exposed their  [component library](https://crds-components.netlify.app/)  and  [Digital Design Kit](https://design.crossroads.net/%E2%80%A9)  as open source resources to make it even easier for teams to onboard and to collaborate.

## Team skills

Ample was very aware of how using exotic technologies and skills can be a significant risk. By selecting tools and technologies which are widespread, have low barriers to entry, and have great adoption among the web development community, they could ensure that finding and onboarding developers with the correct skills could be far easier. This would have a significant impact on reducing cost and risk for the project into the future.

> They note — "Developer turnover was a major consideration when designing the approach."

Each micro frontend is decoupled from its peers, and gives the team not only the freedom to build in the most appropriate technology for that project’s needs, but also creates a smaller, more contained problem space for each project. The result is that each one easier to reason about, to maintain, and to develop with widely available development resources.

## Outcomes

As a result of this project, Crossroads has seen improvements in user experience — due to better frontend speed and performance. They have improved developer experience — from the  greater agility and flexibility in the codebase. And they have improvements in delivering scale — thanks to the simplified hosting architecture, CDN-by-default approach, and greatly reduced load on remaining legacy infrastructure.

Their previous monolithic model required extensive coordination and release management which impacted the time-to-market, cost of development, and project risk. Now, a Jamstack architecture with its specialist vendors and toolchains have mobilized the teams to be able to ship more often, and with greater confidence.

The headache of cache management across complex dynamic infrastructure has gone, since the process of deploying sites to Netlify’s Edge inherits Netlify’s automatic cache management.

If you are interested in learning more about how to migrate all or part of your web properties from a legacy platform to Netlify you can:

* Review this  [explanation and demonstration](https://www.netlify.com/blog/2020/03/19/learn-how-to-add-jamstack-to-your-infrastructure-in-8-minutes?utm_source=blog&utm_medium=crossroads-pnh&utm_campaign=devex)  on our blog
* Talk to one of [our enterprise team members](https://www.netlify.com/enterprise/contact?utm_source=blog&utm_medium=crossroads-pnh&utm_campaign=devex) 

Other ways to learn more:

* [Ample](https://www.ample.co/)  continues to embrace Jamstack architectures and deliver its benefits to clients. You can read much more about  [how they use the Jamstack](https://www.ample.co/blog-categories/jamstack)  in many excellent writings on their site.
* Several key team members of the project formed  [Tensure](https://tensure.io/)  who continue to consult with Crossroads and bring expertise in technical architectures to many clients beyond.
* The  [Digital Design Kit](https://design.crossroads.net/)  and [ Storybook-powered component library](https://crds-components.netlify.app/)  for Crossroads are open sourced and available to review and learn from.
* Explore the results at  [https://www.crossroads.net](https://www.crossroads.net/)
