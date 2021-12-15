---
title: Choosing your APIs for Jamstack
description: So you want to build your web application using third party APIs.
  Given so many options, how do you choose?
authors:
  - Matthew Foyle
  - Sarfaraz Rydhan
date: 2020-10-07T16:00:00.000Z
lastmod: 2020-10-07
topics:
  - tutorials
tags:
  - algolia
  - APIs
  - Build Plugins
tweet: ""
format: blog
relatedposts:
  - Top 10 Netlify Build Plugins
seo:
  metatitle: 5 things to consider when choosing your APIs for Jamstack
  metadescription: Learn about building your Jamstack web application using third
    party APIs. This guide helps you choose the right ones for your project.
  ogimage: /v3/img/blog/temp-og-image-algolia-api-post.png
---
One of the beautiful things about [Jamstack](https://www.netlify.com/jamstack/) is that, along with boosting performance and scalability, it allows you to build your web application using any number of third party APIs. The result is that you can plug in best-in-class products for each individual job, and make use of continuous innovation in every specialized area; it's unbundling in a way.

Think about implementing Algolia instead of building a custom full-text search module, or implementing Contentful instead of grappling with your own CMS hosted on servers you’ll have to maintain, or using Netlify’s seamless development workflow instead of compiling source code yourself and uploading it to a web server via FTP. Moreover, this pattern allows you to switch out individual services easily, whenever you find a better solution for any part of the stack.

With choice, of course, comes responsibility: how should you choose what solutions to use given so many options?

In this post, we’d like to share 5 criteria to consider when choosing an API for a project.

![jamstack stack layers visualized image](/v3/img/blog/jam.jpg)

API is the “a” in “jam”. An important principle of Jamstack is decoupling the front end from the back end. Having JavaScript talk to backend services by API allows for more modular development where we can take advantage of the huge ecosystem of third party tools to provide website functionality. We’ll walk through the framework using the lens of a search API decision because the author of this post, Matt Foyle, works with [Algolia](https://www.algolia.com/), a search and discovery API.

Here are the points which we will cover:

## Balancing technical quality and business needs

You’re buying a service that needs to fit neatly into your architecture, but also be balanced with the needs of the non-technical stakeholders, as it’s something they will manage. Therefore you need the best of both worlds: a fantastic API with equally fantastic documentation, along with an accessible and feature complete business dashboard, all the while keeping flexibility and control in balance for both stakeholder groups.

Now, when building a software product, it’s all about tradeoffs. With less mature products, you’ll likely find more of an emphasis on either the developer or business focus. Therefore, the first requirement is to look for a reasonably mature provider who has built competency in both areas, and try to minimize this trade off where possible.

## API as a solution

When it comes to the API itself, look for signs that the API is not seen as a service, but rather a solution:

* How well maintained are the API clients/developer tools, and how much easier they make your integration? Look for flexibility and ease of use.
* How many of the features provided by the vendor are accessible via the API?
* How good is the documentation? Is it simply a functional specification, or a full set of resources to help you achieve your goals? When an API is a solution, the documentation will be thorough and easy to use, with many code samples of common use cases. Some examples of good documentation are [React](https://reactjs.org/docs/getting-started.html), [Gatsby](https://www.gatsbyjs.com/docs/), [Vue](https://vuejs.org/v2/guide/), and [GraphQL](https://graphql.org/learn/). In addition to an intuitive layout and design of the documentation, these APIs use search to make it easier for a developer to find the resources she needs.
* Does the provider have a developer experience team? Having advocates inside a vendor's business who are solely focused on helping engineers be productive when implementing their product can go a long way. It shows that the vendor takes that stakeholder group seriously.

## Data complexity

You’ll want to look at any complexity added to the data flow and deployment process when adding an API provider. For example, when using a headless CMS, you will need to trigger redeploys of your site when your content gets updated. In this case you’ll want to look for an integration guide on how to set up the webhooks. In the example of a search API like Algolia, you’ll need to pipe your content to the search API when it gets created or changed, and remove it when it gets deleted. Moreover, your content can come from many different sources like articles, products, and more.

Luckily, many providers for the Jamstack make this easy to figure out. Be sure to check that they have tooling which integrates to other Jamstack technologies you are considering. If there is a direct integration between tools, that is even better. For example, if you are using Algolia with Netlify, you can make use of [Algolia’s Netlify plugin](https://crawler.algolia.com/admin/netlify) to simplify the aforementioned process.

## Smart UI strategies

When choosing an API-first provider, you’ll need to consider your UI. APIs are built to give you freedom on the front end, and they try not to be opinionated about the interface in which they will be embedded. Traditionally, this has meant that you have to build all of the UI.\
However, as services have matured, many providers now offer UI components for developers to use. These components often have a best practice UI implemented in the interface while using the service’s API client under the hood.

If you are using a provider with UI “components”, or “widgets”, there are trade offs to consider. A headless approach provides freedom and flexibility in design and user experience. Using a provider’s widgets gives a faster path to building a front end, though you usually lose some of that freedom of design customization. How should you validate such tools? Look for smart defaults, and the ability to override the UI itself, without losing the logic built into the components. This way, you can start with defaults, and quickly evolve, without having to rebuild everything as soon as you stray too far from the provider’s standard patterns. To use Algolia as an example: developers have the ability to [extend widgets](https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#customize-the-complete-ui-of-the-widgets) to customize the UI and keep the functionality provided by the widgets, or even [create custom widgets](https://www.algolia.com/doc/guides/building-search-ui/widgets/create-your-own-widgets/js/) by building directly on top of the underlying library.

## Policies and support

Since you may be managing multiple providers in your application — maybe one for each use case — you will want to make your life as easy as possible from an admin perspective. Here you’ll want to consider a few elements for each service:

1. [SLA](https://blog.algolia.com/for-slas-theres-no-such-thing-as-100-uptime-only-100-transparency/) - the last thing you need to worry about is one of your providers going down, but it does happen. In this instance, you should think about an SLA as insurance for your business. You can also build in secondary failovers to switch providers.
2. Support - documentation can make things self-serve, but when moving quickly, a day's delay for a small clarification or question can make all the difference. Make sure you have a team who is accessible when you need them, especially during the implementation phase.
3. Release policy - when using many APIs, it’s important to ensure that if any one releases an update, this does not affect your site. Even a small change in an API client that is not backwards compatible can wreak havoc on your implementation. Keep an eye on how your providers release updates, and make sure their APIs are in fact compatible.
4. Security and Compliance - when choosing an API for a work project, ensure you are meeting your company’s requirements for security and privacy. You may need a vendor that has SOC2 certifications, and knows how to process data in a GDPR compliant way. For e-commerce projects you may need to look into PCI compliance. There are more requirements in more regulated industries, like finance or healthcare. Most providers will have a [security](https://www.netlify.com/security/) or [compliance page](https://www.algolia.com/solutions/security/) on their website.

It’s an exciting time to be a developer in Jamstack. You have the freedom to choose APIs that best fit the problem you’re solving or the product you’re building. In the coming months and years, we can expect more services to be introduced. We hope this guide will help you choose the right API for your next project.

*About the author and about Algolia*

Matt works on solutions engineering at Algolia, having previously been with Twilio, a communications API, and Moltin, a (now acquired) ecommerce API.

Algolia is a fully hosted search-as-a-service platform that gives developers a complete toolkit for building search into their products. We focus on developer experience with extensive documentation, tooling, and support for all major programming languages and platforms.
