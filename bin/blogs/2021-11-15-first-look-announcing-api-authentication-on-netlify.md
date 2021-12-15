---
title: "First Look: Announcing API Authentication on Netlify"
description: "We're excited announce the first step in integrating OneGraph into
  Netlify by making multi-app service integrations easier: API Authentication,
  launching through Netlify Labs."
authors:
  - Den Delimarsky
date: 2021-11-17
lastmod: 2021-11-16
topics:
  - news
tags:
  - OneGraph
  - Authentication
  - APIs
  - Netlify Labs
tweet: ""
format: blog
seo:
  metatitle: "First Look: Announcing API Authentication on Netlify"
  metadescription: "Announce the first step in integrating OneGraph into Netlify
    by making multi-app service integrations easier: API Authentication,
    launching through Netlify Labs."
  ogimage: /v3/img/blog/api-authentication-og.png
---
One of the most tedious and frustrating challenges of building for the modern web is generating, managing, and protecting the various authentication tokens and access keys needed for third-party services. Today we’re announcing the availability of API Authentication on Netlify, available as a beta release on Netlify Labs. This feature introduces a streamlined approach to setting up the proper access scopes for third-party services and helps you manage them in a central location. No more clicking around multiple UIs trying to find the right settings tab — now Netlify gives you a unified process to get the right connection permissions for your app every time.

To make it easier and faster for developers to bring services and data into their web apps, [we acquired OneGraph](https://www.netlify.com/blog/2021/11/17/netlify-acquires-onegraph-a-powerful-graphql-platform-for-connecting-apis-and-services/). OneGraph allows teams to focus on what’s important: delivering value to customers rather than writing “glue code” for all APIs and services they need to leverage in their web applications. As a first step in this direction, we’ve released API Authentication inside our in-app beta testing console, [Netlify Labs](https://www.netlify.com/blog/2021/03/31/test-drive-netlify-beta-features-with-netlify-labs/).

To start, we’re enabling developers to simplify connections to the following services, and then use their Application Programming Interfaces (APIs) in Netlify Builds and Functions without having to write a single line of authentication code:

* Stripe
* Spotify
* GitHub
* Salesforce

To get started, head over to [Netlify Labs](https://app.netlify.com/user/labs) and enable API Authentication:

![Enabling service connectors](/v3/img/blog/onegraph-api-auth-settings.gif)

Once enabled, the “Settings” tab on the dashboard of each site will show a new section, also called API Authentication:

![Service Connectors in the site dashboard](/v3/img/blog/onegraph-enable-in-labs.gif)

You can authenticate with any of the currently supported services by selecting the relevant scopes and clicking the “Connect” button:

![API Services](/v3/img/blog/onegraph-api-services.png)

NOTE: During the initial preview, we’re exposing a subset of services, but we’ll be adding more all the time. If you have a service you need access to, [let us know](https://answers.netlify.com/t/founder-of-onegraph-here-hello-folks-and-api-authentication-beta/47479)!

You’re done! For each of the authenticated services, you can now access the token in the embedded environment variables - either from the site build, or Netlify Functions.

To learn more about API Authentication on Netlify, you can check out our [beta documentation](https://ntl.fyi/apiauthdocs).