---
title: How to Build Dynamic Applications on the Jamstack with Serverless Functions
description: Jason Lengstorf and the Forem team chat Jamstack, running serverless functions on static sites, and how on-demand builders can speed up your build times.
authors:
  - Netlify
date: 2021-05-26
lastmod: 2021-05-26
tags:
  - on-demand builders
  - jamstack
  - next
  - dpr
  - serverless
topics:
  - tutorials
relatedposts:
  - "Faster builds for large sites on Netlify with On-demand Builders: Now in early access"
  - "Distributed Persistent Rendering: A new Jamstack approach for faster builds"
tweet: ""
format: blog
seo:
  metatitle: Learn How to Build Dynamic Jamstack Applications with Serverless Functions
  metadescription: "Jason Lengstorf and the Forem team to chat Jamstack, running serverless functions on static sites, and how on-demand builders can speed up your build times."
---
Netlify’s Jason Lengstorf recently joined Christina Gorton and Nick Taylor of Forem for Walkthrough Wednesday. They talked about the [Jamstack](https://www.netlify.com/jamstack/), and running serverless functions on static sites.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dXr0iJE10tQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Here’s some of the highlights:

## What kind of applications can run on the Jamstack?

**Nick Taylor:** “When I first started working with [Jamstack](https://jamstack.org/) in 2017, I mostly thought of static sites as blogs, but that’s not really the case, right? There’s e-commerce applications and stuff now, it’s not just dev blogs?”

**Jason Lengstorf:** “Yeah, you can build so much with the Jamstack. Twilio just rolled out a [beta version of their console on Netlify](https://www.twilio.com/blog/bridging-legacy-and-future-platforms). You can build incredibly dynamic things on the Jamstack. The Netlify app ([app.netlify.com](https://app.netlify.com/)) is a Jamstack site.”

## Why CDNs are so gosh darn resilient

**Jason Lengstorf:** “If someone starts throwing thousands and thousands of hits at your website — whether that’s through a good thing, like going viral, or a bad thing, like a coordinated attack — the most well-equipped piece of infrastructure to handle that is a CDN. So if your website is run from a [CDN](https://www.netlify.com/tags/cdn/) — while it’s still possible to DDoS a CDN — it takes a lot more effort than taking down a server.”

A really good example of this is the [COVID-19 tracking project](https://www.netlify.com/blog/2020/07/06/how-the-covid-tracking-project-scaled-from-0-to-2m-api-requests-in-3-months/), which started at the beginning of the pandemic to aggregate stats around COVID-19. They built it as a Jamstack site, deployed it to Netlify, and their API. which was run as a serverless function, went from nearly 0 to 2 million hits in just a few months and they didn’t even notice. When you use that CDN-style of deployment, it’s built to auto-scale. It’s built to handle that amount of traffic. So the only reason they knew they’d even received that much traffic was because they checked analytics.”

## What \*can’t\* you build with serverless?

**Jason Lengstorf:** “The places where you’ll still need to build a backend server is if you’re going to get into websockets, real-time notifications, GraphQL subscriptions… you don’t do that on serverless. But what I’ve done in the past is get a droplet on DigitalOcean set up to run my little GraphQL server that does subscriptions, and then I’ll build a Jamstack site to talk to it.

Because again, one of the tenets of Jamstack is that it’s [decoupled](https://jamstack.org/glossary/decoupling). You can get your data from anywhere — even a service you built yourself. The difference is that with [the Jamstack approach](https://jamstack.org/best-practices/), instead of mashing all that code into a ball that gets deployed together, you can separate them out. You’ve got a front end here and a back end here, and you can deploy them independently.”



## How to deploy Netlify functions within a Next.js app

**Nick:** I read that [Netlify](https://www.netlify.com/) has a plugin now that you can use to deploy [Netlify functions](https://www.netlify.com/products/functions/) within a Next.js app?

**Jason:** “Yeah, so the way Next works now is, Next supports a command called `next export`, where it will just build you a Jamstack site. In the vast majority of cases, it’s going to be so much easier for what you’re trying to do. When you have dynamic use cases that won’t just work with static, the [Essential Next.js plugin](https://www.netlify.com/blog/2021/03/16/try-the-new-essential-next.js-plugin-now-with-auto-install/) — which is actually auto-installed now for new Next sites — will take any of the server-dependent stuff so `getServerProps` or `getStaticProps` with a fallback, or `next-image` — basically anything that would require you to deploy a server — those now run in serverless functions.”

## How to speed up builds of large sites with On-Demand Builders

**Nick:** Netlify recently launched [On-demand Builders](https://www.netlify.com/blog/2021/04/14/faster-builds-for-large-sites-on-netlify-with-on-demand-builders-now-in-early-access/). Is this some kind of incremental build strategy that this provides you with?

**Jason:** Yeah, On-demand Builders are a new early access feature that can speed up build times. We learned what we liked about previous iterations of technology. Like when you take a WordPress site and put it on a PHP hosting platform, and then you put Varnish in front of it so that when you load the PHP page once, Varnish keeps a copy of that page and then subsequent requests get a copy of that page so it’s really really fast? We took all the things that we liked about that and got rid of the cumbersome setup and the pitfalls of management and cache invalidation, and packaged that up into something we’re calling [Distributed Persistent Rendering](https://www.netlify.com/blog/2021/04/14/distributed-persistent-rendering-a-new-jamstack-approach-for-faster-builds/). With the idea being that Netlify will put that functionality into a serverless function and then after it executes, we’ll keep the result of that serverless function available in our cache until the next deploy.

So basically, you get the ability to say, “I don’t need to render this page right now, because it’s in our archive.” Let’s say you have hundreds of old news articles that barely get any traffic, but you don’t want to lose them. The first time somebody requests it, it goes through a serverless function to render that page. But then it goes into the cache. So anybody else requests it, they get it instantly. You just have to wrap your serverless function.

Here’s a concrete example. Let’s say that you’ve got 1,000 pages, and you want to build only the 20% of your pages that give you 80% of your traffic at build time, so that your build only takes you 10 seconds. You would give a list of pages to your build system saying “these are the 200 pages I want to build right now.” You feed those in, it builds those pages and you get a compiled version, and then the remaining 800 pages you have set up as a wildcard route. For example, `/blog/*` would redirect to your builder function, so when a user visits `/blog/old-post`, it hits the On-demand Builder, which will look it up in the database, build that page, and output it. But for the next person who hits `/blog/old-post`, it’ll exist in the cache as page 201.”



## Live coding demo: Serverless functions on Netlify

The chat concluded with a live demo, where Nick and Jason used serverless functions on Netlify to quickly set up an API to grab DEV posts with the [DEV API](https://docs.forem.com/api/).
