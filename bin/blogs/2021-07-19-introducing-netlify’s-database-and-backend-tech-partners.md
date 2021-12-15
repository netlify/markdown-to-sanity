---
title: Netlify adds four database & backend partners to its enterprise tech showcase
description: "Today, Netlify is launching our first set of partners in the
  Backend & Database category: DataStax, Fauna, Nimbella, and StepZen."
authors:
  - Sarfaraz Rydhan
date: 2021-07-20
lastmod: 2021-07-19
topics:
  - news
tags:
  - Partners
  - backend
  - Databases
  - stepzen
  - Fauna DB
  - nimbella
  - DataStax
tweet: ""
format: blog
relatedposts:
  - "Netlify Build Plugin of the Week: StepZen"
  - How Technology Vendors can Partner with Netlify to Build Better Jamstack
    Sites
seo:
  metadescription: "Today, Netlify is launching our first set of partners in the
    Backend & Database category: DataStax, Fauna, Nimbella, and StepZen"
  metatitle: Netlify’s New Database and Backend Tech Partners
  ogimage: /v3/img/blog/netlify-tech-partners-1-.png
---
We often get questions about how to run a specific backend server or database within Netlify.

The short answer is our database partners can help! The Jamstack ecosystem is brimming with serverless data layer options. Netlify is the glue that holds [Jamstack](https://www.netlify.com/jamstack/) components together, but it doesn’t provide a data layer. Netlify’s close integrations with data layer partners make it that much easier to add backend functionality to your applications, all while maintaining the familiar Netlify workflow teams love.

Today, we’re excited to launch partnerships with four players in the backend space who are helping the community build dynamic functionality on Jamstack sites: DataStax, Fauna, Nimbella, and StepZen. Netlify users can still use any backend service they like, but integrations with these four vendors enable developers to get up and running even faster. These partners make it easy to process and query your data, talk to a database just like any other API, whether in GraphQL or via a function. Each partner has a supported integration path to make it easier for teams to have a performant backend layer with their Jamstack site on Netlify.

## Jamstack and the Backend Layer

A core principle of the Jamstack is that it doesn’t require a web server. Clearly, there is still a web server replying to HTTP requests, but the [Netlify Edge](https://www.netlify.com/products/edge/) component of Jamstack sites only serves static files. So how are users building [dynamic applications on the Jamstack](https://www.netlify.com/blog/2021/05/27/can-dynamic-sites-go-serverless/)? When and where are they querying data?

Let’s review some key components of Jamstack architecture. Jamstack sites:

* Have a decoupled frontend that lives globally on the edge.
* Pre-compile as much of the frontend as possible for performance and scalability.
* Allow the browser to access or process data at runtime using APIs — this could be client-side calls, serverless functions, your own backend, or a third-party service.

A Jamstack data layer connects to the application via APIs (the “A” in “Jamstack”), whether that’s during build time or run time. Netlify provides a collaborative cloud platform that unites Jamstack components into a single interface and workflow. That’s why we’re so excited to partner with these backend services. Enabling a serverless data layer helps developers focus on code while being able to automatically scale high-traffic campaigns to global visitors, which is a welcome abstraction for those who don’t wish to spend both time and money managing servers. Netlify customers have a long history of building database-driven sites by serving dynamic content, saving user generated content, and building dashboards, e-commerce functionality, and SaaS applications.

## DataStax

[DataStax](https://www.datastax.com/) delivers an open, multi-cloud data stack built on Apache Cassandra, a scalable database. The company’s marquee offering is [Astra DB](https://www.datastax.com/products/datastax-astra), an open, multi-cloud serverless database. Built on a Kubernetes-based architecture, Astra DB provides a combination of pay-as-you-go data, simplified operations, and the freedom of multi-cloud and open source. DataStax also offers Astra Streaming, a multi-cloud messaging and event streaming platform built on Apache Pulsar.

With DataStax, developers or enterprises can deploy data at a massive scale, with 100 percent uptime, for a lower cost. Nearly 500 of the world’s most demanding enterprises and half of the Fortune 100 rely on DataStax to power modern data apps, including The Home Depot, T-Mobile, and Intuit. 

Bringing up a new application can be time consuming and frustrating, but combining an Astra DB with Netlify hosting makes it easy to create serverless solutions quickly. DataStax provides an easy setup tool and process to connect the two together with minimal effort, allowing you to focus on your application development.

Over at DataStax Developer Relations, Netlify is the go-to partner for users looking to deploy their frontend applications. Netlify’s serverless functions in conjunction with the DataStax serverless Astra DB allows for a fully functional dynamic application on the Jamstack.

![](/v3/img/blog/datastax2.png)

<a href="https://www.netlify.com/technology-partners/datastax" class="button">Learn more about Netlify + DataStax →</a>

## Fauna

Fauna is a modern data API built from the ground-up to simplify a developer’s database experience. Turning it into a simple API call with an innovative query model and native support for well known standards such as GraphQL. It allows developers to easily combine business logic with data, resulting in higher productivity.

With Fauna, developers can focus on developing their application, instead of having to navigate shortcomings in traditional databases (whether on-premises or cloud services) in functionality, availability and scale, with zero operations required.

Fauna offers a powerful development experience that brings innovative query capabilities for building new digital experiences, without compromising capabilities that enterprises need - data residency, SOC 2, great performance, scale, and availability, all without requiring any database operations.

Fauna’s integration with Netlify is a simple and scalable approach for Jamstack developers to add a full-featured transactional datastore to their apps. Fullstack Jamstack requires a secure data layer accessible directly from the browser. Traditional databases were designed to sit behind an app server, and don’t fit into the Jamstack’s API-first development workflow. They require ORMs or middleware for use and their connection model introduces scalability limits into your app. Fauna’s API-centric approach solves these problems by enabling developers to build data-rich fullstack applications without introducing complexity and scalability limits. Together, Fauna and Netlify help developers to simplify code, reduce costs and ship faster.

Combining Netlify with Fauna enables developers to build fast multi-tenant SaaS and mobile apps while minimizing complexity and operational overheads. Fauna’s innovative data model and querying capabilities with support for GraphQL and business logic make it productive to use for any database needs. Common use cases include commercial SaaS applications, custom CRMs, events and digital campaign platforms, decentralized apps, and projects involving modernization of digital experiences.

![](/v3/img/blog/fauna.png)

<a href="https://www.netlify.com/technology-partners/fauna" class="button">Learn more about Netlify + Fauna →</a>

## Nimbella

Nimbella Serverless Platform makes serverless API and application development frictionless and portable to a cloud-of-your-choice. It hides and automates many of the complexities associated with cloud IT operations, transparently leverages dozens of cloud native services needed to secure and scale cloud applications, and provides a fast and uniform serverless programming model for developers. The platform is available as a managed service and as a full-stack solution for any public or private Kubernetes environment.

The Nimbella Plugin for Netlify is a [Netlify Build Plugin](https://www.netlify.com/products/build/plugins/) that extends Netlify sites with portable and stateful serverless functions using Nimbella. The [Nimbella Plugin](https://www.netlify.com/blog/2020/10/07/tech-partners-create-custom-build-plugins-to-reach-developers-in-their-workflow/) enables developers to deploy sites to Netlify's CDN, or to use Netlify as a proxy to sites hosted on other clouds. With this plugin, developers can build APIs using serverless functions that can be hosted on a cloud of their choice using the Nimbella portable serverless cloud. With the Nimbella plugin, developers also gain access to more serverless runtimes, customization of resources, integrated key-value and data stores, easier code packaging, and repeatable deployments that work across clouds.

![](/v3/img/blog/nimbella.png)

<a href="https://www.netlify.com/technology-partners/nimbella" class="button">Learn more about Netlify + Nimbella →</a>

## StepZen

StepZen is the data layer that bridges the divide between an app developer's view of data and the backend implementations. It enables developers to easily connect their applications to any number of REST, GraphQL, SQL/NoSQL databases, or any backend. Its configuration-driven approach, including a set of custom GraphQL directives, means that you have no resolvers to write, no data connections to code, and no GraphQL servers to build, eliminating 1,000s of lines of complex code and logic. Your GraphQL API runs in StepZen’s cloud infrastructure. It manages the service and secures the API and data sources, allowing you to focus on your data and your applications, leaving the backend complexity and infrastructure to StepZen.

Using the [StepZen Netlify Build Plugin](https://app.netlify.com/plugins/netlify-plugin-stepzen/install), the deployment of your GraphQL endpoint is simple and seamless and happens within your Netlify build. You can build your site using your tools of choice; then get the data you need via simple queries to a unified GraphQL endpoint running on StepZen.

With only one endpoint to query, and the ability to deploy on Netlify, it's easy to build and deploy your Netlify frontend and your StepZen backend from the same code base. Because the build plugin runs prior to your Netlify build, real-time data from your StepZen GraphQL API is available to your site at build time.

![](/v3/img/blog/stepzen.png)

<a href="https://www.netlify.com/technology-partners/stepzen" class="button">Learn more about Netlify + StepZen →</a></p>

## Learn more in the Netlify Tech Partners Showcase

While we're developing close relationships with more and more Jamstack services, it's important to know that Netlify customers can still work with any database or backend they prefer. Check out the [Netlify Technology Partners Showcase](https://www.netlify.com/technology-partners/) to discover partner solutions, plugins and API integrations to unlock new capabilities and use cases for Jamstack projects on Netlify.

Want to partner with us? Interested software vendors can [learn about how to partner with Netlify](https://www.netlify.com/blog/2020/12/15/how-technology-vendors-can-partner-with-netlify-to-build-better-jamstack-sites/) and connect with us at [partners@netlify.com](mailto:partners@netlify.com).

We can’t wait to see what you build.