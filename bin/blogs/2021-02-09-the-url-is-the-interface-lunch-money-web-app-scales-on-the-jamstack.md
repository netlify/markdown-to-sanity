---
title: "The URL is the interface: Lunch Money web app scales on the Jamstack"
description: "Lunch Money, a personal finance tracking and budgeting web app on
  the Jamstack, shares how it uses Netlify for its git-based workflow and
  continuous deployment process. "
authors:
  - Phil Hawksworth
date: 2021-02-10
lastmod: 2021-02-10
topics:
  - case-studies
tags:
  - Jamstack
  - Stripe
  - React
tweet: ""
format: blog
relatedposts:
  - Announcing the Jammies awards winners
  - How Fieldfusion built a SaaS business on Netlify
seo:
  metatitle: How a Solo Founder Created Finance Web App  on Netlify
  metadescription: "Lunch Money, a personal finance tracking and budgeting web app, shares how it uses Netlify for its git-based workflow and continuous deployment process. Jamstack web app growth at-scale."
  ogimage: /v3/img/blog/lunch-money-4-1-.png
---
![Lunch Money](/v3/img/blog/lunch-money-7-1-.png)

As the API economy flourishes and brings more and more features and capabilities into the reach of development teams without the need to build everything in house, there has been a boom in small to medium-sized companies shipping complex products.

[Lunch Money](https://lunchmoney.app/) is an ambitious project which has gained a level of momentum and popularity which belies the size of its team.

A team of one.

[Jen Yip](https://lunchmoney.app/about) grew Lunch Money from a budgeting spreadsheet to a full SaaS (Software-as-a-Service) subscription product as a “Solopreneur” by mixing systems and services developed in-house, with third-party tools (and also some significant software engineering discipline). This case study will explore the choices Jen made and their impacts on the product.

## The product

Lunch Money is a personal finance tracking and budgeting tool, delivered as a web application with multi-currency and even crypto-currency support. It has an impressive and growing [list of features](https://lunchmoney.app/features) including:

* Transaction tracking including automatic transaction imports from your bank
* Budget tracking and analysis of spending habits
* Detection and monitoring of recurring items and subscriptions
* Net worth tracking across all accounts and currencies
* Multi-currency support with reporting in your chosen home currency
* Account collaboration for shared tracking and budgeting
* User-customisable rules engine to automate workflows
* Custom query and reporting tools
* Trends and statistics on your spending over customizable periods of time

...and more. It’s pretty remarkable.

## Building blocks

Delivering, maintaining, and supporting a feature list like this would be far from trivial even for larger teams, and in order for this to be achievable for a team of one, Jen drew on her years of experience as a software engineer at Twitter and technical co-founder at a startup in Silicon Valley. Mixing familiar and personally favoured tools and technologies, with newer technologies and services, Jen assembled a diverse set of resources into the Lunch Money stack.

The web application has a front-end built with [React](https://www.netlify.com/tags/react/?utm_source=lunchmoney-case-study&utm_medium=blog&utm_campaign=mkting-case-study), TypeScript, and Semantic UI, which is [deployed and hosted by Netlify](https://www.netlify.com/products/edge/?utm_source=lunchmoney-case-study&utm_medium=blog&utm_campaign=mkting-case-study). This front-end is cleanly decoupled from the underlying services which it consumes via APIs. The back-end is provided by a mixture of third party services, and in-house services, hosted on Heroku.

The core Lunch Money API is delivered by a NodeJS Express application which leverages Redis for message queuing and PostgresSQL to provide a relational database and access to all of this is protected by a bespoke authentication layer developed in-house.

Foreign exchange rates are fetched on a daily basis and access to the financial transaction and cryptocurrency data of users is provided to the system by trusted third-party services such as [Plaid](https://plaid.com/) and [Zabo](https://zabo.com) via their APIs. Lunch Money also offers alternatives to automatic importing of financial data, such as a CSV importing tool and a developer API in addition to the manual entry of occasional transactions which is also possible through its user interface. Meanwhile, [Stripe](https://stripe.com/gb) is used to power the monetisation and subscription of Lunch Money itself.

![A helicopter view of the technical architecture of the Lunch Money web site and web app](/v3/img/blog/diagram-multicolor.png)

*A helicopter view of the technical architecture of the Lunch Money web site and web app*

## Agility and confidence through decoupling

With so many features and so many underlying capabilities, a clear delineation of responsibilities has been important in order to build a system that is possible to reason about. Otherwise managing the complexity might have become an issue.

The [Jamstack](https://jamstack.org/?utm_source=lunchmoney-case-study&utm_medium=blog&utm_campaign=mkting-case-study) makes use of such services via APIs and can be a fast-track to shipping projects with confidence. But that is not to say that choosing a Jamstack architecture means only using third party APIs. At its heart, [Jamstack](https://www.netlify.com/jamstack/?utm_source=lunchmoney-case-study&utm_medium=blog&utm_campaign=mkting-case-study) promotes a model of decoupling front-end from back-end services, and it is this decoupling that can yield excellent agility and confidence.

Lunch Money is a great example of using both first-party and third-party services harmoniously via their APIs, decoupled from a user interface that can then also be iterated quickly. Consider the diagram above. We see three cleanly decoupled areas of concern, each with its own focussed development workflow and hosting solution:

* User interface - With CI/CD and hosting from Netlify
* Lunch Money services and APIs - Managed and hosted on Heroku
* Third-party tools and services - Managed and maintained as commodities by external providers

Lunch Money leverages both commoditized services and bespoke systems which contain the product’s business logic and competitive differentiation. It demonstrates nicely that taking a Jamstack approach does not mean abdicating all responsibilities to third party services, but rather, to leverage what makes sense, and, to build what increases value.

The decoupling is key.

The Lunch Money development work is mainly focussed around three code repositories:

* Back-end services
* Application front-end
* Marketing web site

This separation allows for each area of the product to be developed with the support of the most appropriate workflow and development pipelines.

Sentry and CircleCI are used for monitoring, testing and continuous integration for the back-end. While [Netlify Build](https://www.netlify.com/products/build/?utm_campaign=devex-ph&utm_source=blog&utm_medium=blog&utm_content=casestudy-lunchmoney) provides the git-based workflow and continuous deployment process for the React user interface.

## Environments

The user interface is served directly from [Netlify’s Edge](https://www.netlify.com/products/edge/?utm_campaign=devex-ph&utm_source=blog&utm_medium=blog&utm_content=casestudy-lunchmoney) network and so can be deployed, released, and rolled-back very rapidly. This also gives replicated environments for the beta-testing, staging, and production. All sitting identically on the Netlify CDN, and created and managed through git branches.

The decoupling of the user interface from the underlying APIs also creates an opportunity for other user interfaces to be added if needed. Perhaps with the addition of native applications for iOS and Android clients in the future. Early in the project, there was an assumption that a native application would be important to success. Jen recalls:

> “I assumed that everyone would want a native mobile app, but very few people churned due to not having a native mobile application.” — Jen Yip

Further, it seems that banking on (pun neither intended, nor avoided!) a web application rather than a native application has paid dividends in terms of time to market:

> “I feel like only having a web app is my strength because I can iterate super quickly.” — Jen Yip

Indeed, delivering the experience as a web application has allowed Lunch Money’s latest version, and newest features, to be available to its customers most rapidly thanks to how the web works. No waiting for a user to update or upgrade an application. The URL is the interface. The customer will access whatever version is being served.

## Pace

Lunch Money continues to evolve at an impressive rate. New features of the UI are developed in feature branches in local development environments that faithfully replicate the hosted environments in Netlify. And when ready, these progress through to the (very exclusive) beta environment for functional testing before also being deployed to the staging environment, for use by a wider group of invited customers. And finally onwards to the production environment.

The underlying git branching model and workflow smooths this path to production. But no credit should be taken away from Jen Yip, whose vision and determination has created this outstanding application and who continues to not only design and build it, but also support its growing user base.

The accomplishment was recognized in October 2020, when Lunch Money scooped the award for [Jamstack Web Application of the Year at Jamstack Conf](https://www.netlify.com/blog/2020/10/06/announcing-the-jammies-awards-winners/?utm_source=lunchmoney-case-study&utm_medium=blog&utm_campaign=mkting-case-study), beating competition from much larger teams and organizations for the title. A great reminder of the power and resources developers and development teams have access to in this era of web development.

![Jamstack Conf web app of the year 2020](/v3/img/blog/lunch-money-1-1-.png)

## Want more Lunch Money?

For more information about Lunch Money, you can explore a detailed list of all the tools and services used in building, marketing, monitoring and supporting the product at <https://lunchmoney.app/stack>

You can also hear a recent interview with Lunch Money’s Jen Yip on the Netlify podcast 🎙: [Remotely Interesting](https://remotelyinteresting.transistor.fm/episodes/011-the-jamosphere-lunch-money) (embedded below) and on [Indie Hackers](https://www.indiehackers.com/podcast/150-jen-yip-of-lunch-money).

<iframe class="no-aspect-ratio" width="100%" height="185px" style="margin: 0;" src="https://plnk.to/remotelyinteresting/e/1000504587128?to=player" frameborder="0" scrolling="no"></iframe>

And of course, you can sign up to use Lunch Money and get a grip on your finances by signing up at <https://lunchmoney.app>

---

**Have a project in mind? One of our experts would love to [talk with you](https://www.netlify.com/enterprise/contact/?utm_source=lunchmoney-case-study&utm_medium=blog&utm_campaign=mkting-case-study) about the use-case and requirements.**
