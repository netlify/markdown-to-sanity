---
title: "Twilio Console: A Large Scale Migration to Jamstack"
description: Learn how and why the Twilio Console team migrated their massive
  application to the Jamstack, and the results they're seeing so far, including
  global improvements to performance, and shipping 50x more often.
authors:
  - Charlotte Dillon
date: 2021-11-08
lastmod: 2021-11-05
topics:
  - case-studies
tags:
  - Jamstack
  - case studies
  - Case Studies
tweet: ""
format: blog
seo:
  metatitle: Why Twilio Migrated to the Jamstack--Built, Deployed, and Scaled on Netlify
  metadescription: Learn how and why the Twilio Console team migrated their
    massive application to the Jamstack, and the results they're seeing so far,
    including global improvements to performance, and shipping 50x more often.
  ogimage: /v3/img/blog/twilio-console-og.png
---
Twilio is an enviable growth story: strong product adoption, international growth, and a successful IPO to boot. But that growth didn’t come without scaling challenges. Twilio’s developer interface, Twilio Console, has gone through two major re-architectures since the company’s founding. 

Recently, the team underwent a major migration in order to manage its scale ​​of 4.5 million monthly pageviews, and customers in over 200 countries: they migrated Twilio Console to the [Jamstack](https://jamstack.org/). Harrison Harnisch, principal software engineer at Twilio and the tech lead on the Console team explains further in his talk from Jamstack Conf 2021. They’re already seeing impressive results, including:

* Global improvements on core metrics like initial page load and time to first byte, since they’re using a [global high-performance edge network from Netlify](https://www.netlify.com/enterprise/high-performance-edge/).
* More time to focus on building business logic, and less time spent on administering the application.
* Increased development velocity. Prior to the migration, teams were bulk shipping once per week. With the Jamstack architecture, they’re seeing teams deploying 10-15x a day.

Watch the [full video for more details](https://www.youtube.com/watch?v=k9i0PD_IFlU&list=PL58Wk5g77lF-XaNacKxWk7yOKgeCMveAS&index=27), or read on to hear about why the Twilio Console is now a Jamstack application, built, deployed, and scaled on Netlify. It’s now designed to scale as Twilio does, and the migration is already enabling faster development, better collaboration, and an improved customer experience. 

## Architecting Twilio Console, 2008 - present

​​The Twilio Console enables customers to interact with the Twilio platform to build, configure,  and monitor different products. Over the years, the product has grown and evolved. Twilio has shipped new APIs, programmable applications, and a complete suite of developer tools. In 2008, when Twilio was founded, developers could log into the console and interact with three products. Today, they can interact with over 30. 

The Twilio Console, in its first iteration, was a single page application with a relatively simple navigation structure. Its dashboard enabled users to toggle between its main products. As Twilio’s product suite grew, so did the Console interface. The UI evolved from this:

![](https://lh6.googleusercontent.com/uYlmKpXaVvoFLJnK6SG8T3g7V13uJIAmMrWncT77kxQYS77zV8IK3hsDz4sdJSA_OOE6pbcrLNemhTBYIh0fQa7vi5SWTLksm2PEewcKUbbySMt3E7X7LXSnc71_X_3u62ra9k7l)

To this: 

![](https://lh3.googleusercontent.com/h0BNJKScUIgIglfhMWnm3cq9WraXiT0YDjjyBFx5fuqmyN-i__NS_Nyy9cF9KbqSw70yeYH-61-r3EgW8DLUPqsQcBhBSfmHcXp1nOq4PzRMz2ZSkenHpyzWA22AhxVI5rtvFgrc)

But it wasn’t just a more robust UI that Console needed to accommodate. Behind each Twilio product sat a separate team of engineers. At the time of their recent migration to the Jamstack, this meant that their one application contained:

* Over 30 products
* Maintained independently by 30 teams
* Built by over 300 engineers

This came with a lot of organizational challenges, which we’ll dive into. But it also came with technical challenges. The development team structure—and deployment architecture—that worked well when Twilio had only six products needed to evolve as well. 

## Trouble on the Micro Frontend

Let’s dive into what the previous micro frontend architecture looked like, and how the team identified that a migration to the Jamstack helped.  

This micro-frontend architecture split the entire application by business domain, across the entire stack. Teams were enabled to make the choices they wanted to and use the tools they wanted to. 

![](https://lh4.googleusercontent.com/iggO1dmIUqIP1ggELaeoKJ-jYtQEbK7PjISfIR6iKqj9KH0hXxWf9jlLEmU3SbE-m5qMBbRMFpmbgck-bUXCHXXAOd8mYrXNwj8BdkijHDAvnqUt5T4c85qHxguHTBO4IC3FRM2J)

The micro frontend architecture was helpful because it meant that the existing PHP and Scala applications could live side-by-side along with new apps built in React. 

A micro frontend architecture can be a great choice for some applications, but it wasn’t working for Twilio for these reasons: 

### Global scale led to slow render times 

Because the micro frontend architecture server side rendered its applications, all requests had to go through the US-based server upon first request. The problem? Twilio has users in over 200 countries. For users far from the US, this led to slow load times, frequently over 1 or 2 seconds. 

Requests from the Asia Pacific region, for example, would need to make multiple hops over the Pacific Ocean: first for the initial server-side render, and then another for React applications that needed more data. 

The size of the Console itself also contributed to slow load times. With multiple products tied together as a micro frontend, each product had a unique script tag required to be server side rendered. Even for very closely related products, say, phone and MMS, any time users crossed the product boundary, fetching data required a full refresh on the page. 

In order to avoid paying that penalty, Twilio noticed that Console users were keeping multiple tabs open for each relevant product. It wasn’t providing the all-in-one, frictionless interface they hoped to deliver. 

## Building for Scale: Twilio’s Migration to the Jamstack

With these challenges mounting up and even more products forthcoming from Twilio, the Console team knew they needed a way to scale and manage their development work. 

The solution? [The Jamstack. ](https://jamstack.org/)

Jamstack is an architecture designed to make the web faster, more secure, and easier to scale. It builds on many of the tools and workflows that developers love and brings maximum productivity. The core Jamstack principles of pre-rendering and decoupling enable sites and applications to be delivered with greater confidence and resilience than ever before.

By adopting the Jamstack architecture, the Twilio Console would achieve two main goals: 

1. Performance improvements: Jamstack applications serve as much content as possible as static assets on a globally distributed CDN, which leads to performance improvements
2. Better development workflows: By using Netlify to run their Jamstack application, the new Twilio Console would offer out-of-the-box collaboration tools and easy methods for code review. 

## Twilio’s Jamstack Migration Results 

The new console, what Harnisch refers to as Console 3.0 today, is a Jamstack application in a monorepo, hosted on Netlify. Instead of having to send that first initial render for index.html through the US, they serve all those assets through [Netlify's High Performance Edge Network](https://www.netlify.com/enterprise/high-performance-edge/). Netlify Edge is distributed like a CDN, which means Twilio can meet the customers where they are. For customers in the Asia-Pacific region, populating index.html had previously required two hops over the Pacific Ocean. Now it feels instantaneous.  

The team opted for an incremental migration approach, which enabled each product to migrate their pages to the Jamstack on their own timeframe. Some legacy Console pages still built in PHP or Scala are actually iframed—yes, iframed—into the application to populate the Console with the right data at the right time. This allowed the Twilio team to bridge the gap between legacy and modern infrastructure:  

![](https://lh6.googleusercontent.com/QIiJW5ryAeTUzenSz975haXzoygpbPqYIv4_jExXZ_mySRwdN1nLLOIKiL78CF1sSA3ZWN4CBS3Ijd52109p5MhPUCbqDdWXuUypaEIjglvZ2K6ovva1lBx3pJlkyVb-ejDbNG6z)

> “What this allows us to do is have an incremental migration path for teams. We can start realizing the value early-on rather than one style of migration, which is to migrate the whole thing and then switch that to customers. That style of migration tends to take years to start to see value, and that can often be too long.”  

They’ve achieved those two goals and more. Here’s what they’re seeing so far: 

### Deploy Previews Lead to Better Cross-Team Collaboration

After migrating, Twilio immediately saw an uptick in their collaboration, both within the Engineering organization and across other teams. As Harnish explains, this is mostly due to Netlify [Deploy Previews](https://www.netlify.com/products/deploy-previews/), which make for quicker validation on code reviews. Deploy Previews effectively offer Twilio “a near infinite number of staging environments,” all accessible from a simple URL. 

The result? Now, non-technical collaborators can easily give feedback. Deploy Previews remove the need for a development or local environment to QA. This means anyone with the URL can have access to an atomic version of the project. And with collaboration tools like the ability to screenshot, annotate, and even record video feedback, Deploy Previews make collecting feedback from non-technical stakeholders a breeze.  

<video src="/v3/video/deploy-previews-logs-v2.mp4" muted controls loop controlsList="nodownload" playsinline disablePictureInPicture disableRemotePlayback autoplay style="max-width: 28em"></video>

> “Collaborative Deploy Previews are an excellent feature from Netlify. We’re seeing designers start to give us feedback… by taking screenshots and annotating them… and that ends up right in the pull request.” 

Before, in order to get feedback from Product or Design, those teams required engineering resources to spin up a local environment or get set up with a shared dev environment. Now, any team member with the URL can participate in code reviews, which means it’s much easier to get feedback from important stakeholders. 

### Twilio Dev Teams Ship 50x More Frequently on the Jamstack

Deploy Previews also make Twilio’s QA workflows much easier. When validating someone’s code change by reviewing a Deploy Preview, engineers can be sure that it works because it’s using pretty much the same pipeline Twilio uses in production. 

This means that it’s much easier to deliver small code changes throughout the day with confidence. Whereas teams used to ship on a weekly basis (or less), the migration to the Jamstack has changed the culture of how Twilio ships. 

> “We’ve seen increased development velocity. Teams were quite often shipping weekly, sometimes less often than that… In the new architecture, we’re seeing small changes being delivered multiple times a day. It’s pretty common for teams to be deploying 10-15x a day.” 

With Netlify’s Deploy Previews, teams are shipping over 50 times more frequently than they were before. 

### Jamstack Offered 30x Performance Improvements

Twilio is seeing global improvements on a number of key performance metrics. One major reduction is in their time to first byte (TTFB). Under the previous architecture, all initial renders had to be routed through the United States. On the Jamstack, this is no longer the case. Assets are deployed via [Netlify High-Performance Edge](https://www.netlify.com/enterprise/high-performance-edge/), right where the customers are. For Twilio’s increasingly global userbase, this makes a huge difference. 

Harnish explains that for Singapore users, “We were seeing roughly 1-2 seconds for time to first byte in the Console 2.0 architecture. And in the new 3.0 architecture, we’re seeing between 30 and 60ms.” That’s over 30x faster than the previous application architecture. 

> “We’re seeing a shift in how platforms are delivered to customers… we think more about the global customer rather than people who are clustered in a given location. By default, because Jamstack breaks things out into static assets and is served through a CDN, that’s something you don’t have to think about as much anymore.” 

Another major improvement they’re seeing is on initial page load time. With the Jamstack architecture, users don’t need to load all of the settings and functionality pages for a given product—they get what they need on initial load. 

The new architecture has also eliminated the need for a full page refresh when switching between products. With the Jamstack, Twilio handles routes client-side rather than server side. When somebody crosses a product domain, they just fetch a new application package bundle rather than having to do a full refresh on the page. 

## Next Steps for Twilio + Jamstack

> “The Jamstack architecture has caused a shift in how Twilio thinks about frontend applications.” 

Teams outside of the Console are noticing the effect the migration has had—not only on the performance of Console, but on the team’s workflows. Other Twilio teams like internal tools and some customer-facing applications are planning their own migrations in search of similar results. 

Harrison Harnisch wraps up his Jamstack Conf talk by concluding that all of these benefits that Twilio has seen in migrating to Netlify have one thing in common: they free up engineers’ time. 

There’s a lot less meta-work that engineers have to do in a given day, whether that’s spinning up local environments for other teams to collect feedback, or building a CI/CD pipeline from scratch, and choosing tooling. Netlify’s Deploy Previews make QA’ing code and collaborating across teams easier. And with less time spent on mundane tasks, engineers have more time to focus on what matters: solving the customer’s problems.