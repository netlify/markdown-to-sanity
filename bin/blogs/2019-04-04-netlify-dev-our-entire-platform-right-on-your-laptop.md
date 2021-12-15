---
title: ' Netlify Dev — our entire platform, right on your laptop'
description: >-
  Netlify Dev is our next step on the road to making the experience of
  developing for the web as productive, simple, and predictable as possible.
authors:
  - Phil Hawksworth
date: '2019-04-09'
lastmod: 2020-08-03
relatedposts:
  - Netlify Milestones on the road to 1 Million Devs
topics:
  - news
tags:
  - Netlify Dev
  - Tools
  - Product
tweet: >-
  Netlify Dev - our entire platform, right on your laptop.


  Our next step on the road to making the experience of developing for the web
  as productive, simple, and predictable as possible.
format: blog
---
![](/v3/img/blog/dev-blog-post-2x.png)

When it comes to web development, the ability to replicate your production environment is key. It brings confidence that the code you write on your local machine will behave as intended when it is published to the world. This has been one of the many desirable aspects of [JAMstack](https://jamstack.org) sites since the beginning. Sites comprised of pre-generated assets can be deployed simply and with confidence. They are portable by default.

But things have become a little more complicated.

As the JAMstack ecosystem has matured, developers can now use all manner of tools and services to further enrich their sites. At Netlify, we have embraced the challenge of providing tools for developers to simplify the work of building, deploying, and serving sites on the web.

## Tools

We provided build automation, to replicate local build pipelines.

We added a [Redirects Engine](https://www.netlify.com/docs/redirects/) to run powerful and performant redirects, proxying, and localisation services on the CDN.

We introduced [Netlify Functions](https://www.netlify.com/features/functions/) to bring the same immutable, atomic deployment pipelines to serverless functions, as developers have been enjoying in the rest of their codebase with Netlify for years.

We included [environment variables in Netlify](https://www.netlify.com/docs/continuous-deployment/#build-environment-variables), to add secrets and keys when sites are built in our CI/CD pipeline.

And quite a bit more.

With new abilities to simply control what happens in our CI/CD infrastructure, or distributed CDN, or over what is deployed to AWS Lambda, a new challenge arouse:

> How can we preview the effects of our development work quickly and with very little friction?

## Confidence

The ability to view the development work done on sites, complete with all their features and capabilities is vital to success.

Netlify facilities like [branch deploys and Deploy Previews](https://www.netlify.com/docs/continuous-deployment/#branches-deploys) have given developers unprecedented access to view the results of their efforts on the same hosting infrastructure that will be used in production. Automated from well-established Git-based workflows, this has been incredibly powerful and popular. And it gives valuable confidence in the outcome of deployments.

But we think we can do even better.

## Netlify Dev

[Netlify Dev](/products/dev/) is our next step on the road to making the experience of developing for the web as productive, simple, and predictable as possible.

An evolution of [our CLI](https://www.netlify.com/docs/cli/), it brings key features of our infrastructure directly to your laptop.

Redirect rules, serverless development pipelines, environment variables, and more, can all work in your local builds from one command: 

```
netlify dev
```

By running `netlify dev` in your project folder, Netlify can detect the static site generator you are using, run it for you, and then enrich it for more a powerful development experience. 

It will add a local server with live rebuilding and reloading. 

It will enable redirects. The powerful edge logic behind our Redirects Engine has been faithfully replicated with WebAssembly to allow your redirect rules to work locally, just as they will when deployed to [our ADN](https://www.netlify.com/features/adn/).

It will give your local build seamless access to the environment variables managed in the [Netlify admin UI](http://app.netlify.com). No more manually replicating centrally managed values for use on your own machine.

But that’s not all.

## Going live

To streamline the development cycle even further, we’ve added the ability to give live access to your local builds to anyone. Anywhere. Seriously.

```bash
# Give me a public URL for my local build
netlify dev --live
```

Adding the `--live` option will create a tunnel from your local dev server to the internet. And it will create a URL which you can share with anyone so that they can view your development build.

Any changes you make on your local build will be available instantly for your remote colleagues to see. And if you are using a build tool which supports hot-reloading, Netlify Dev will even honor that, refreshing the view all the way to your remote clients, wherever they are!

Previewing and collaborating will never be the same.

## Get hands on

[Netlify Dev](/products/dev/) is available as a public beta from today.

You can gain access to it by installing the latest version of the [Netlify CLI](https://www.netlify.com/docs/cli/) which includes documentation and variety of usage examples.

Over the coming weeks and months, we’ll be rolling out more features to Netlify Dev, inviting bug reports and suggestions in its [Git repository](https://github.com/netlify/netlify-dev-plugin), and eagerly listening to your thoughts and feedback in our [Community forum](https://community.netlify.com/categories) and [via Twitter](https://twitter.com/netlify).

We can’t wait to hear how using [Netlify Dev](/products/dev/) works for you.

### Update

[Watch the announcement](https://www.youtube.com/watch?v=RL_gtVZ_79Q) and live demo from JAMstack_conf in New York.

---

_This post has been featured on **[Netlify Milestones on the road to 1 Million Devs](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#netlify-dev-public-beta-at-jamstack-conf-nyc)**_:

[![Netlify 1 Million Devs article feature](/v3/img/blog/featured-on-1-million-devs-banner.png)](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#netlify-dev-public-beta-at-jamstack-conf-nyc)
