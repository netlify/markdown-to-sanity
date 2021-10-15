---
title: RedwoodJS - the Full-stack JAMstack Framework
description: >-
  Do you love the JAMstack philosophy but need a database-backed web app? Want
  great developer experience and easy scaling? Redwood is here! Built on React,
  GraphQL, and Prisma, Redwood works with the components and development
  workflow you love, but with simple conventions and helpers to make your
  experience even better.
authors:
  - swyx
date: '2020-03-11'
topics:
  - news
tags:
  - Jamstack
  - React
  - GraphQL
  - Prisma
tweet: ''
format: blog
seo:
  metadescription: >-
    Do you love the JAMstack philosophy but need a database-backed web app? RedwoodJS is here! Built on React, GraphQL, and Prisma, Redwood works with the components and development workflow you already love.
  metatitle: Learn About RedwoodJS the Full-stack JAMstack Framework
  ogimage: /img/blog/redwood-js.jpeg
---
The logical next step in the maturation of the [JAMstack movement](https://www.netlify.com/jamstack/) is for frameworks to extend beyond static site generators into full-stack frameworks. By having a stronger opinion on technologies used from frontend-to-backend, you can build in a quantum leap in developer experience for JAMstack apps.

Many people have tried to build "Rails for JavaScript", to varying degrees of success. But what Redwood brings to the table is its choice of a new generation of open source technologies that have independently proven themselves as standalone tools. I'll [paraphrase Sid Sijbrandij](https://news.ycombinator.com/user?id=sytse) (CEO of GitLab): 

> This feels like Rails for the JavaScript age. Moving from: 
>
> * REST => [GraphQL](https://graphql.org/)
> * Sprockets => [Babel/webpack](http://webpack.js.org/)
> * VM => [Lambda functions](https://docs.netlify.com/functions/overview/?utm_source=twitter&utm_medium=redwoodblog-swyx&utm_campaign=devex)
> * Caching => [Static site](https://www.staticgen.com/?utm_source=twitter&utm_medium=redwoodblog-swyx&utm_campaign=devex)
> * Erb => [React](https://reactjs.org/)
> * Active Record => [Prisma](https://github.com/prisma/prisma2)
> * Rspec => [Jest](https://jestjs.io/)
> * routes.rb => Routes.js

All this, curated for you with Rails-like scaffolding powered by [convention over configuration](https://en.wikipedia.org/wiki/Convention_over_configuration), by an all-star dev team headed by [Tom Preston-Werner](https://tom.preston-werner.com/) (Cofounder of GitHub), alongside Peter Pistorius, and Rob Cameron.

Redwood embeds a lot of how we at Netlify envision an ideal JAMstack architecture and developer experience for dynamic apps: A strong separation of concerns for frontend (so you get the speed of JAMstack) and backend (APIs and serverless functions you can scale independently), and yet a unified developer experience for fast local development:

![Diagram of Redwood Architecture](https://d33wubrfki0l68.cloudfront.net/fe55b84dd8ef022e3729071c88f19825f564eaec/d049e/images/structure.png)

For React developers in particular, two innovations are worth highlighting:

- [Redwood Cells](https://redwoodjs.com/tutorial/cells) take a fully declarative approach to loading states with GraphQL integration, which lend themselves to [render-as-you-fetch React Suspense data fetching](https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense) in future!
- [Redwood Forms](https://redwoodjs.com/tutorial/everyone-s-favorite-thing-to-build-forms) embed a ton of niceties for making great user form experiences with [React Hook Form](https://react-hook-form.com/)!

If you're looking to get a glimpse of the future of JAMstack, you should definitely check out [RedwoodJS](https://redwoodjs.com/).

[![RedwoodJS logo](https://www.netlify.com/img/blog/redwood-js.jpeg)](http://redwoodjs.com/)
