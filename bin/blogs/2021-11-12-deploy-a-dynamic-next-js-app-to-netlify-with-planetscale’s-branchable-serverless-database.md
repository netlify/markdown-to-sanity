---
title: Deploy a Dynamic Next.js App to Netlify with PlanetScale’s Branchable
  Serverless Database
description: Learn how to build data-rich applications on the Jamstack, and
  deploy a  Next.js starter app to Netlify, with authentication, Prisma, and a
  PlanetScale database built-in.
authors:
  - Taylor Barnett
date: 2021-11-15
lastmod: 2021-11-12
topics:
  - tutorials
tags:
  - planetscale
  - Databases
  - Next.js
  - Prisma
  - Authentication
tweet: ""
format: blog
relatedposts:
  - "Can Dynamic Sites Go Serverless? "
seo:
  metadescription: Learn how to build data-rich applications on the Jamstack, and
    deploy a  Next.js starter app to Netlify, with authentication, Prisma, and a
    PlanetScale database built-in.
  metatitle: Deploy a Dynamic Next.js App to Netlify with PlanetScale’s Branchable
    Serverless Database
  ogimage: /v3/img/blog/planetscale-netlify-og.png
---
There's a strong belief in the community that it's not possible to work with relational databases inside of Jamstack applications. It's easy to have this misapprehension if you think of Jamstack applications as purely static sites with no dynamic data. However, with Jamstack frameworks like Next.js, Gatsby, Svelte, Nuxt, and others, you can use serverless databases in multiple places. These frameworks support both static generation and server-side rendering, so you can create a hybrid application that uses static site generation for most pages and server-side rendering for others. In Next.js, you can fetch data from a database:

* At build time with `getStaticProps`
* At request time with `getServersideProps`
* Using API routes (E.g., inside a `/pages/api/…`)
* Or by separating the back-end and using a stand-alone server

[Jamstack](https://jamstack.org/) is all about building as much as you can upfront and pulling in data as needed, so it often depends on the use case for when it makes sense to fetch the data in your application. 

## A new Next.js starter app with authentication and PlanetScale

[PlanetScale](https://planetscale.com/) is a serverless database platform that is MySQL-compatible and allows developers to create a database within seconds that is ready to accept thousands of new database connections with a few clicks. It scales for you, and is git-centric, which makes it an easy addition to Jamstack workflows. 

At PlanetScale, we know it’s not always easy to get started with a new database. This is why I am excited to announce a [new Next.js starter app](https://templates.netlify.com/template/nextjs-planetscale-starter/) that can be deployed to Netlify with the “Deploy to Netlify” button, uses NextAuth.js for built-in authentication, and Prisma to interact with your PlanetScale database. This starter app is one example of using PlanetScale for your application’s user database. Want to get started right away? Click the button below!

[![Deploy to Netlify button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/planetscale/nextjs-planetscale-starter)

**Note:** After you deploy to Netlify, you will need to follow the instructions in the [PlanetScale documentation](https://github.com/planetscale/nextjs-planetscale-starter) to get your PlanetScale database up and running.

![PlanetScale Login Screen UI](/v3/img/blog/nextjs-planetscale-starter-login-1-.png)

As soon as you set it up, any users that sign up or log in are automatically stored in your PlanetScale database. We went ahead and created an admin page for you too, where you can see your users. From here, you can customize the starter app and get started building your application right away. 

![Customize the PlanetScale Next.js Starter App](/v3/img/blog/nextjs-planetscale-starter-1-.png)

We had previously heard from PlanetScale users that they wanted to see how authentication could work with a PlanetScale database. We implemented NextAuth.js to get you started. Because it uses NextAuth.js you can add other authentication providers like GitHub, Twitter, Google, and many others listed in the [NextAuth.js documentation](https://next-auth.js.org/getting-started/introduction). 

## PlanetScale's database branching

But there’s more! One unique feature about PlanetScale databases is that they support branching. Git-centric workflows have fundamentally changed how we build for the web. As developers, we want isolated environments to develop and test our applications. As Netlify’s CEO Matt Biilmann mentioned in his recent Jamstack Conf keynote, our back-end data layer is still a single branch. It’s often talking to a long-running server or a production environment. 

> See Matt talk about back-end branching as a trend to watch during his [Jamstack Conf 2021 Keynote](https://youtu.be/phC14xfwvjc?t=2419)

It doesn’t have to be this way. **PlanetScale supports database schema branching, deploy requests, and non-blocking schema changes.** Your staging environment’s database can be isolated from the production environment’s database.

### Database Branching in action: An example

What if you wanted to update your User data model? You would [create a development branch](https://docs.planetscale.com/concepts/branching#create-a-development-branch) after the starter app is set up, edit your \`prisma.schema\` file with the data model changes, and run `yarn db:migrate` once you are ready to update the schema in your PlanetScale database. 

You can then [create a deploy request](https://docs.planetscale.com/concepts/branching#create-a-development-branch) to merge the schema change into your main production database branch. With non-blocking schema changes, you will have zero downtime while your database schema change is deployed.  

## Get started with the Netlify + PlanetScale starter app

The [starter app is located today on the Netlify Jamstack Templates](https://templates.netlify.com/template/nextjs-planetscale-starter/) page. From here, you can deploy to Netlify and then get your PlanetScale database up and running.

Since this is just the first version of this starter app, we would love to hear your feedback! This starter app was built based on PlanetScale user feedback, and there’s more to come! Feel free to open an issue [in the repo](https://github.com/planetscale/nextjs-planetscale-starter) to discuss what you would like to see in future versions of the template or any problems.
