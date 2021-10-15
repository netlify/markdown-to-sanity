---
title: "Announcing Netlify Edge Handlers: Now in Early Access"
description: Today we’re incredibly excited to announce early access for Netlify
  Edge Handlers, making Jamstack an even more compelling approach for your most
  dynamic, personalized, websites and web apps.
authors:
  - David Calavera
date: 2020-10-06
lastmod: 2020-10-05
topics:
  - news
tags:
  - edge handlers
  - jamstack
  - netlify
  - product
tweet: ""
format: blog
relatedposts:
  - Introducing Edge Handlers in Preview
seo:
  metadescription: Learn more about Netlify Edge Handlers, the first solution of
    it’s kind to combine edge compute with a Git-based workflow, making it easy
    for frontend developers to customize the network edge for a faster, more
    engaging web experience.
  ogimage: /img/blog/early-access-edge-handlers-1-.png
  metatitle: "Announcing Netlify Edge Handlers: Sign Up For Early Access"
---
![Netlify edge handlers announcement image](/img/blog/netlify-edge-handlers-early-access.png)

Today we’re incredibly excited to announce early access for [Netlify Edge Handlers](https://www.netlify.com/products/edge/edge-handlers/), making Jamstack an even more compelling approach for your most dynamic, personalized, websites and web apps. Edge Handlers are the first solution of its kind to combine edge compute with a Git-based workflow, making it easy for frontend developers to customize the network edge for a faster, more engaging web experience.

One of the biggest impediments to edge compute solutions today is that they create overhead between frontend developers and SREs. With Edge Handlers, you can streamline Continuous Delivery between teams by bringing edge logic into the same Git repo and Netlify workflow as your Netlify-powered sites and Netlify Functions.

Teams get all the advantages of their current [Jamstack architecture](https://jamstack.org/) with the added control and configuration from a newly programmable edge.

Starting today, customers across all Netlify plans can [request early access to Netlify Edge Handlers](https://www.netlify.com/products/edge/edge-handlers/) to try it out and provide feedback. During early access, it’s completely free to use! Those that have previously shared interest will also start to be invited to try it out. If you’re new to Netlify, [learn more about our pricing and plans and sign up](https://www.netlify.com/pricing/).

## Traditional software patterns in one workflow on the Jamstack

Netlify Edge Handlers start with traditional software development patterns. You write your code. You review it with your team of peers and test it with deploy previews in a live environment (note that running and testing Edge Handlers locally is coming soon). It's easy to follow best practices of software development with Netlify’s end-to-end workflow, gluing these steps together.

Edge Handlers are completely integrated into this workflow, providing a developer experience that enables teams to personalize at the edge without sacrificing development velocity. The dev/test environment workflow will be the same as with production.

Frontend developers have freedom and full control over how their content is served to the end user. More than ever before, frontend developers have control over how their content is served. Traditionally backend heavy tasks like routing and dynamic content rewrites can now be accomplished with Edge Handlers. Developers also get the added benefit of having all code associated with site renders in one place, thereby ensuring they can quickly and reliably manage and debug when something breaks.

## Authentication, Personalization and more

How do Edge Handlers work?

1. Create Edge Handlers as server-side code that runs on every node in Netlify’s Edge Network.
2. Edge Handlers intercept inbound requests from the client or the response from the edge network.
3. The Edge Handler then serves unique content based on the logic defined and respects conditions such as user identity, cookie settings, and location.

![netlify edge diagram](/img/blog/netlify-edge-handlers.png)

* **Redirects**: Teams manage web redirects in one clean workflow that is simpler and faster to iterate on. Instead of building countless API redirect rules, developers simply cache APIs at the network edge.
* **A/B testing**: Deploy and test a single page with multiple versions of content. Simplify and experiment to improve experiences and conversion easily.
* **Authentication**: Get more control and customization managing authentication permissions for web visitors from the handler itself, verified at the edge.
* **Internationalization and localization**: Populate local language and content to web properties instantly without having to manage endless page versions and redirects. A handler enables developers to manage one source of truth that can call various APIs to content based on the origin, making it much easier.
* **Site-wide changes**: Changes large and small can be handled via the handler injecting the element everywhere needed, without having to rebuild a whole site.

Edge Handlers are simple JavaScript programs that give you control over requests and responses directly in our Edge nodes. In the short example below, you can see how I’m capturing a request and replacing the expected response with the contents of Netlify’s home page:

```javascript
export function onRequest(event) {

event.replaceResponse(() => fetch("https://www.netlify.com/"));

}
```

We have more advanced examples for you in our [documentation](https://docs.netlify.com/routing/edge-handlers), where you can see all the capabilities that we currently support.

More than anything, we’re thrilled to see the early positive reactions from the Jamstack community:

> "At Teespring it is our mission to build the future of creator commerce. As we've moved to a modern Jamstack approach utilizing Netlify we've seen impressive improvements in site performance and conversion rate, while also increasing our engineering velocity. As a global offering we're excited to work with the Netlify Edge Handlers to add better localization and to continue to improve site performance." - Rick Takes, director of engineering, Teespring
>
> "Netlify Edge Handlers will change the way we develop websites and web apps. One of the biggest challenges for our clients is segmenting users and showing personalized content without impacting web performance. With Edge Handlers, we can run custom code at the network edge to enable a fast personalized experience, while using the tools and Netlify workflow we already know. We can’t wait to start using it!" - Michael Full, digital director at twim GmbH

## Start building with Edge Handlers and tell us what you think

With Edge Handlers, we believe the stage is set for the next evolution for Jamstack websites and web apps. We’re excited to see what you build!

Learn more:

* [Request access to Netlify Edge Handlers](https://www.netlify.com/products/edge/edge-handlers/)
* [Watch the talks and join the conversation at Jamstack Conf Virtual, Oct. 6-7](https://jamstackconf.com/virtual/)
* [Get started with Netlify and learn about our plans](https://www.netlify.com/pricing)
* [Have a project in mind and want to talk to an expert? Contact us.](https://www.netlify.com/enterprise/contact/)

### Coming Soon: Background Functions

Today from Jamstack Conf Virtual, we also announce the upcoming availability of Background Functions, enabling developers to run longer serverless functions for up to 15 minutes. That means you can run your websites and web apps right alongside Edge Handlers, Netlify Functions, and now Background Functions—all in one common Git repo, using one seamless workflow.\
\
As a refresher, Netify Functions allow you to run AWS Lambda functions directly from Netlify without configuring API gateways, coordinating deployments, or even setting up an AWS account. However, these serverless functions are currently limited to 10 seconds for execution. What if you need to wait for results from a slow-running API or run a process that takes much longer to execute?

That’s where Netlify’s new Background Functions come in. Background Functions can run asynchronously for up to 15 minutes. You can use Background Functions for utilitarian tasks, such as adding new users to an email list after they sign up. You can also use Background Functions to improve your user experience. For example, instead of making a user wait around while an API returns results, you can give the user immediate feedback in the UI while you run a process behind-the-scenes.

This new serverless function capability will remove constraints and open up a wide world of possibilities for more dynamic web applications. Stay tuned for more details in the coming weeks.

- - -

*Learn more and request access to [Netlify Edge Handlers](https://www.netlify.com/products/edge/edge-handlers/).*

*Have a project in mind? One of our experts would love to [talk with you](https://www.netlify.com/enterprise/contact/) about the use-case and requirements.*
