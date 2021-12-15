---
title: How Technology Vendors can Partner with Netlify to Build Better Jamstack Sites
description: Announcing the Netlify technology partners program. By partnering
  with Netlify, technology vendors can promote their solutions to more than
  1,300,000 businesses and developers.
authors:
  - Sarfaraz Rydhan
  - Jessica Parsons
date: 2020-12-15T12:15:00.000Z
lastmod: 2020-12-14
topics:
  - news
tags:
  - Partners
  - Plugins
  - Jamstack
  - Integrations
tweet: ""
format: blog
relatedposts:
  - "Introducing Netlify Technology Partners: Helping Enterprises Build Better
    Jamstack Sites"
  - Tech Partners Create Custom Build Plugins to Reach Developers in Their
    Workflow
seo:
  metadescription: Announcing the Netlify technology partners program. Learn how
    to partner with Netlify - technology vendors can promote their solutions to
    more than 1,300,000 businesses and developers working on the Jamstack.
  metatitle: How Technology Vendors can Partner with Netlify on Jamstack Sites/Apps
---
The [Netlify technology partners program](https://www.netlify.com/blog/2020/12/15/introducing-netlify-technology-partners-helping-enterprises-build-better-jamstack-sites/) enables software vendors to work with Netlify in bringing the benefits of the [Jamstack](https://www.netlify.com/jamstack/) to more enterprise web teams. Netlify customers pair Netlify with best-of-breed partner services and APIs to push the limits of website performance and team productivity. By partnering with Netlify, technology vendors can promote their solutions to more than 1,300,000 businesses and developers building websites on Netlify.

## Grow your business with Netlify as a technology partner

Software vendors benefit by partnering with Netlify in the following ways:

* **Business opportunities with the growing Jamstack ecosystem:** Gain customer adoption in the growing Jamstack ecosystem and help inspire more than 1,300,000 developers and businesses that have joined Netlify’s platform. Netlify offers multiple ways for partners to gain awareness with developers on Netlify, including curated directories of partner solutions and opportunities for promotion in Netlify's content channels.
* **Delivering a better experience to developers:** With partner offerings available directly from within Netlify’s workflow, developers can use partner solutions to solve technical problems faster, be more productive, and make teamwork easier. 
* **Enhanced go-to-market collaboration:** Technology vendors who have demonstrated market or commercial impact are eligible to receive go-to-market support to facilitate revenue opportunities and customer adoption, including dedicated access to the partner team, sales team enablement, co-selling support, promotional opportunities, and more. These commercial partners are eligible to be featured in the [Enterprise Technology Partners Showcase](https://www.netlify.com/technology-partners/) to gain visibility with Netlify enterprise customers. 

Netlify aims to partner with headless services and APIs most closely aligned with our customers’ priorities of building fast and secure websites and having productive web development teams. Partners can help solve common customer needs in the following Solution Areas:

* **Headless services and backends**, including content management, database, e-commerce management
* **APIs that add product capabilities**, including identity and authentication, search and discovery, messaging and communication, images and media
* **Developer workflow**, including security and compliance, performance monitoring, team collaboration tools

Software vendors with solutions in these areas should review the resources below as they explore getting started with Netlify.

## An Introduction: Creating an integration with Netlify

There are two steps for technology vendors looking to create a joint solution on Netlify:

1. **Build an integration or joint solution** \
   Netlify has created many integration points for partners to build solutions on Netlify. We’re listing the most common patterns below. Many partners will [combine multiple solution paths](https://www.netlify.com/blog/2020/10/07/tech-partners-create-custom-build-plugins-to-reach-developers-in-their-workflow/#main) to create an offering for developers.
2. **Showcase the solution with shared customers** \
   Partners should first list the solution in their marketplace, documentation, blog, or product pages. Then partners may request listing in Netlify’s directories listed below. Please review the listing guidelines for each directory before creating your integration, and reach out with any questions. 

Partners can create solutions with Netlify in the following possible ways:

### Build Plugins

*Give developers a way to integrate your service into their site build process with a single click. Plugins trigger actions on events throughout the build and deploy lifecycle and can be used to scan files, alter site pages, report issues, fail builds, and more.*

* **How to build:** [Plugin creation docs](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/)
* **Where to list:**

  * Your own website and documentation
  * Netlify’s [in-app plugins directory](https://app.netlify.com/plugins)
* **How to submit:** [Plugin sharing docs](https://docs.netlify.com/configure-builds/build-plugins/share-plugins) and [author guidelines](https://github.com/netlify/plugins/blob/master/docs/guidelines.md)
* **Implementation notes:** If your service requires an access token or API key, you can require users to add these as environment variables, or simplify the process by building an [OAuth API flow](#build-an-oauth-app-to-connect-to-netlify-s-client-api) or provisioning with Netlify’s [add-ons API](#build-a-partner-add-on-with-netlify-s-service-provisioning-api). You can find a [comparison of these methods](https://www.netlify.com/blog/2020/10/07/tech-partners-create-custom-build-plugins-to-reach-developers-in-their-workflow/#main) on our blog.

### “Deploy to Netlify” Buttons

*Deploy to Netlify buttons turn template repositories into turnkey site starters. Useful for adding built-in CMS functionality or for demonstrating how to interact with an API.*

* **How to build:** [Deploy to Netlify button docs](https://docs.netlify.com/site-deploys/create-deploys/#deploy-to-netlify-button)
* **Where to list:**

  * Your own website and documentation
  * Netlify’s [Jamstack Templates Directory](https://templates.netlify.com/)
* **How to submit:** [Templates Directory contribution guidelines](https://templates.netlify.com/contribute)
* **Implementation notes:** If the integration requires access tokens or API keys, you can add a [template](https://docs.netlify.com/site-deploys/create-deploys/#template-configuration) to prompt for these fields as environment variables during the site creation flow. You can even pre-fill the fields with user values if available. For fully automated provisioning, you can use the Netlify [partner add-on API](#build-a-partner-add-on-with-netlify-s-service-provisioning-api).

### Netlify Functions

*Shortcut server-side interaction with your service by providing serverless function files that developers can drop into their site repo for Netlify to deploy as local API endpoints.*

* **How to build:** [Netlify Functions docs](https://docs.netlify.com/functions/overview/)
* **Where to list:**

  * Your own website and documentation
  * Netlify’s directory of [sample repos](https://functions.netlify.com/examples) and [tutorials](https://functions.netlify.com/tutorials)
* **How to submit:** [Open an issue](https://github.com/netlify/functions/issues/new/choose) on the Functions site repository.
* **Implementation notes:**

  * Functions can run automatically in response to events, like a form submission or a user login. They receive request context or event data, and return data back to the frontend.
  * Functions can be included in [Deploy to Netlify button](#deploy-to-netlify-buttons) templates and shared via [Build Plugins](#build-plugins).

### Snippet Injection

*Inject HTML or JavaScript snippets into all pages of a site, either in the `<head>` or at the end of the `<body>` tag.*

* **How to build:** The [snippet injection docs](https://docs.netlify.com/site-deploys/post-processing/snippet-injection) explain how developers can add snippets to be injected in all pages of their site. Any valid HTML may be included in a snippet.
* **Where to list:** Your own website and documentation
* **Implementation notes:**

  * Injected snippets can access site environment variables.
  * To automate installing a snippet, you can create an [OAuth app](#build-an-oauth-app-to-connect-to-netlify-s-client-api) for Netlify’s client API.

### Custom Webhooks

*Interact with Netlify’s build and event systems by sending and receiving requests to custom webhooks.*

* **How to build:**

  * [Incoming build hook docs](https://docs.netlify.com/configure-builds/build-hooks/) explain how to create and configure hooks to trigger Netlify site deploys
  * [Outgoing deploy notification webhook docs](https://docs.netlify.com/site-deploys/notifications/#outgoing-webhooks) explain how to configure Netlify to send a defined `POST` request to your provided URL on specific deploy-related events. You can also trigger hooks on events related to Netlify Forms and Identity.
* **Where to list:** Your own website and documentation
* **Implementation notes:**

  * Outgoing hooks can be configured to send a custom JSON Web Signature (JWS) for secure interaction with your API.
  * To automate custom webhook configuration, you can create an [OAuth app](#build-an-oauth-app-to-connect-to-netlify-s-client-api) for Netlify’s client API.

## **One step beyond: Power up your integrations with Netlify’s client and provisioning APIs**

If your partner integration requires access tokens or API keys, you can build on Netlify’s APIs to create a smoother installation experience.

### Build an OAuth app to connect to Netlify’s client API

*OAuth apps using Netlify’s client API can interact with users’ Netlify sites and accounts in much the same way as the Netlify UI does. You can create a login path for your users to select sites they would like to integrate, then automatically set environment variables, install plugins, inject snippets, create webhooks, and more.*

* **Works well with:** [Build Plugins](#build-plugins), [snippet injection](#snippet-injection), [custom webhooks](#custom-webhooks)
* **How to get started:** Check out the [sample demo site](https://netlify-integration-flow-example.netlify.app) and its associated [repository](https://github.com/jlengstorf/netlify-integration-flow-example). For further reference, visit the [Netlify API docs](https://docs.netlify.com/api/get-started) and [OpenAPI reference](https://open-api.netlify.com/).
* **Implementation notes:** Custom OAuth apps can be quick to build and powerful for automating your service integration, though they require users to log in from within an experience you create outside of the Netlify UI.

### Build a partner add-on with Netlify’s service-provisioning API

*Netlify’s partner add-on API gives Netlify specialized programmatic access to your partner service account creation and provisioning, paving the way for frictionless new user acquisition directly from Netlify.*

* **Works well with:** [Deploy to Netlify buttons](#deploy-to-netlify-buttons). Partner add-ons can add a `stack` parameter to button URLs to trigger automatic service provisioning.
* **How to get started:** Review the [partner add-ons API documentation](https://github.com/netlify/addons#building-add-on-integrations-with-netlify), then [contact us](https://cli.netlify.com/register-addon) to register a staging instance for development.
* **Implementation notes:** Currently, most interaction with the add-ons API relies on Netlify CLI. We’re working on improvements to integrate directly with the Netlify UI in the coming months. If you’re interested in becoming a beta-testing partner, submit the [add-on registration request form](https://cli.netlify.com/register-addon) for more information.

## Learn more and get started

Join us and help bring the Jamstack to more developers and businesses. If you want to discuss an idea for an integration for your organization, or you’re looking to engage with the Netlify Partner Team to increase Enterprise adoption and sales of joint solutions in the market, we’d love to hear from you! You can reach us directly at [partners@netlify.com](mailto:partners@netlify.com).
