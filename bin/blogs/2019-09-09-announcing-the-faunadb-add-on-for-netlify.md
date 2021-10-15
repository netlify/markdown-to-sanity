---
title: Announcing the FaunaDB Add-on for Netlify
description: >-
  The FaunaDB add-on for Netlify lets you seamlessly plug a globally distributed
  database into your application, making it possible to build stateful apps on
  Netlify.
authors:
  - Lewis King Sr. Product Manager at Fauna
date: "2019-09-10"
topics:
  - news
tags:
  - Fauna
  - database
  - serverless
  - stateful
  - integration
tweet: ""
format: blog
---

![](/img/blog/netlify-fauna.png)

We’re excited to announce the FaunaDB Add-on for Netlify, which empowers users to create a fully-featured, globally-distributed data backend for their applications within seconds.

[Get started with the FaunaDB Add-on for Netlify->](https://docs.fauna.com/fauna/current/start/netlify)

This integration allows users to instantly add FaunaDB to any JAMstack project running on Netlify, and to manage the database instance via FaunaDB Console.

## What is FaunaDB?

FaunaDB is a serverless cloud database with a native GraphQL API. FaunaDB is a globally distributed system, that offers ubiquitous low-latency access to both reads and writes, without sacrificing data correctness. Consequently, you can avoid layers of app code for manually handling data anomalies, security and scale while embracing the “push once, deploy globally” paradigm that Netlify has pioneered.

## Add-on Capabilities

The FaunaDB Add-on for Netlify enables users to seamlessly plug in a globally distributed datastore into their applications with an instant GraphQL backend for Netlify apps, without any provisioning. They can also associate databases with their FaunaDB account so that they can manage them within FaunaDB Console.

Once users have a Netlify account, creating a database within your site can be done in using a few simple commands:

```
npm i netlify-cli -g
mkdir my_project
cd my_project
netlify init
```

This installs the [Netlify CLI tools](https://www.netlify.com/docs/cli/), and create and initialize a Netlify project.

```
netlify addons:create fauna
```

This command creates a FaunaDB instance for your new site.

```
netlify addons:auth fauna
```

This prompts you to sign up with FaunaDB, or login if you already have an account. Once logged in, you are prompted to name your database and import it into your account. This allows you to interact with your database directly using the FaunaDB Console.

The complete documentation for this add-on can be found [here](https://docs.fauna.com/fauna/current/start/netlify).

## A New Login Option

Users can now also [create an account and login to FaunaDB](https://dashboard.fauna.com) with their Netlify account credentials using OAuth:

![](/img/blog/screenshot-2019-09-10-06.04.14.png)

## Benefits for users of Netlify and FaunaDB

The FaunaDB Add-on for Netlify extends the productivity of the serverless experience to application data, which is in strong demand within the JAMstack community. Serverless data eliminates all database operations, which is a welcome abstraction for those who don't wish to spend both time and money managing servers.

FaunaDB is the only [serverless cloud database](https://www.netlify.com/blog/2018/07/09/building-serverless-crud-apps-with-netlify-functions-faunadb/) with a direct Add-on for Netlify, making it the perfect choice for developers who want to build stateful apps on Netlify. Databases created via the Add-on are available for use instantly with FaunaDB’s native GraphQL API.

Globally distributed data ensures that data is close to where your users are, thus enabling a snappy user experience for apps deployed on Netlify’s global fabric. Database instances created with this Add-on can be managed via FaunaDB Console as well as FaunaDB Shell for hassle-free use.

## Conclusion

With this Add-on, anyone using FaunaDB and Netlify can come up with an idea and launch it immediately, just by focusing on the frontend. Netlify users can use FaunaDB as a stateful component of their apps with ease, and get started using a generous free tier.

Please visit the [FaunaDB documentation](https://docs.fauna.com/fauna/current/start/netlify) to learn more. And please [let us know](https://twitter.com/fauna) what you think so that we can incorporate your feedback into a future release.

What other integrations would you like to see implemented in FaunaDB? Please reach out to me on [LinkedIn](https://linkedin.com/in/lewisking) and the FaunaDB [Community Slack](https://community-invite.fauna.com) and describe any other features that would make FaunaDB and Netlify an obvious choice for your next project.
