---
title: GraphCMS launches integration for Netlify
description: GraphCMS, the GraphQL Headless CMS, have just launched their
  Netlify integration. Netlify users can now build and deploy their Netlify
  sites and apps from within the GraphCMS UI itself. Check out this guest post
  from their team on how to try it out.
authors:
  - Jamie Barton
  - Ronak Ganatra
date: 2020-12-03T16:00:00.000Z
lastmod: 2020-12-03
topics:
  - news
tags:
  - graphcms
  - graphql
  - integration
  - cms
tweet: ""
format: blog
relatedposts:
  - "Announcing the FaunaDB Add-on for Netlify"
  - "Preview Mode for Next.js now fully supported on Netlify"
seo:
  metatitle: GraphCMS launches integration for Netlify - Check it Out
  metadescription: GraphCMS just launched their Netlify integration. Netlify users
    can now build and deploy their Netlify sites and apps from within the
    GraphCMS UI itself. Check out this guest post from their team on how to try
    it out.
  ogimage: /img/blog/netlify-graphscms-integration.png
---
[GraphCMS](https://graphcms.com/blog/graphcms-netlify-integration?ref=netlify) just announced the release of an integration for Netlify. This integration allows Netlify sites and apps to be built and deployed from within the GraphCMS UI itself, with a single click.

## About the Integration

![Netlify x GraphCMS integration screenshot](/img/blog/netlify-graphcms-01.png)

The integration allows you to update your static deployments via a button in the GraphCMS content view. Handled differently than by webhooks, the only configuration needed is connecting your GraphCMS project to your Netlify site/app and selecting which content entries can trigger a rebuild via the UI.

This integration allows you to install a button in the GraphCMS sidebar of a content model for manual redeploys, alongside a visual indicator of deployment status.

### What you can do with the GraphCMS-Netlify integration

* Trigger Netlify builds within your content view with a single click.
* View the status of your Netlify build without leaving the GraphCMS UI.
* Specify which content models display the button in the sidebar, giving you more control over how builds are triggered when there are changes to your content.

### Prerequisites to use this integration

* When using this integration, you should already have a static site deployed in an active Netlify project. Don’t have one? Set up a [free Netlify account](https://app.netlify.com/signup) or [learn about other plans](https://www.netlify.com/pricing)!
* You should have an existing GraphCMS project. Sign up for a [free GraphCMS developer account](https://app.graphcms.com) or check out other [pricing plans](https://graphcms.com/pricing?ref=netlify).
* Your Netlify site should be configured to support continuous deployment.

## How it works

Log in to your GraphCMS project and select **Integrations** from the sidebar.

Select Netlify, and enable the integration. Your GraphCMS user should have the necessary permissions for this.

![Enabling Netlify integration in GraphCMS dashboard screenshot](/img/blog/netlify-graphcms-03.png)

Ensure that you're connected to your Netlify account so your Netlify sites can appear in the next step.

![Connect to Netlify button in GraphCMS dashboard](/img/blog/netlify-graphcms-04.png)

Select the sites you want to enable the integration for and ensure that they have continuous deployment enabled.

![Netlify Sites build settings in GraphCMS integration settings](/img/blog/netlify-graphcms-05.png)

Select the content models that should show the Netlify button in the sidebar. This could range from anything larger like pages and posts, or something granular like authors and headers. Any content change that could trigger a new deploy should have the button enabled.

![Netlify content schema models in GraphCMS integration dashboard](/img/blog/netlify-graphcms-06.png)

When creating or editing published content, simply click on *Start Building Demo* to trigger a new build. You'll be able to see the status of your build once triggered within the sidebar itself.

![Netlify x GraphCMS integration button finalizing start building button](/img/blog/netlify-graphcms-07.png)

That's it, you're set!

Note: The GraphCMS team recommends setting up [Netlify Deploy Preview links](https://docs.netlify.com/site-deploys/overview/) to support your workflows and preview your content before pushing it to Production. You can read more about also setting up GraphCMS Preview URLs on the [GraphCMS Docs](https://graphcms.com/docs/schema/models#preview-urls).

Let us know how the integration works out for you by [contacting us](mailto:support@graphcms.com)! We would love to gather your feedback.

---

#### About GraphCMS

GraphCMS is the first native GraphQL Headless Content Management System (CMS), enabling teams across the world to rapidly build and deliver tomorrow’s digital experiences at scale. GraphCMS is trusted by over 40,000 teams of all sizes from companies like Telenor, Shure, and Unilever, and was designed for building a hosted GraphQL back-end that provides the tools needed for modern omni-channel content management. GraphCMS integrates with any front-end technology, such as [React](https://www.netlify.com/blog/2016/07/22/deploy-react-apps-in-less-than-30-seconds/), [Gatsby](https://www.netlify.com/with/gatsby/), and [Next.js](https://www.netlify.com/with/nextjs/).
