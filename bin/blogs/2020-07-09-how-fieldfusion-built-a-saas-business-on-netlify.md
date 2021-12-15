---
title: How Fieldfusion built a SaaS business on Netlify
description: Faster ramp time for new developers, faster load times, and
  purpose-built developer workflows enables Fieldfusion to grow, plus quickly
  launch a dynamic COVID-19 tracking app for its customers.
authors:
  - Lauren Sell
date: 2020-07-15T00:00:00.000Z
lastmod: 2020-07-15
topics:
  - case-studies
tags:
  - SaaS
  - fullstack
  - Hasura
  - Vue
tweet: ""
format: blog
relatedposts:
  - "How TunnelBear Streamlines DevOps and Speeds up Deploys by 10x with Netlify"
  - "How LiveChat Migrated from WordPress to the Jamstack with Netlify"
seo:
  ogimage: /v3/img/blog/fieldfusion-og.png
  metatitle: Learn How Fieldfusion built a SaaS application on Netlify
  metadescription: See how Fieldfusion optimized for new developer onboarding, faster load times, and purpose-built developer workflows with Netlify. Plus how they quickly launched a dynamic COVID-19 tracking app for its customers.
---
![Fieldfusion mobile app UI](/v3/img/blog/1500x500.jpeg)

[Fieldfusion](https://fieldfusion.io/) is a SaaS startup in England that provides field service management software for tasks like scheduling customer visits and deliveries, vehicle tracking and route optimization. Its customers are primarily SMB companies in England with 20-100 employees, including telecoms providers rolling out 5G towers, fire and safety workers, property managers, and even a company that leases aquariums to biology departments and museums.

The founder, Graham Sawell, launched the service in 2019 in response to a gap he saw in the field service industry dominated by big players like SAP and Oracle, which were too pricey and heavy for a savvy SMB market. He set out to build a SaaS platform with modular capabilities that was highly accessible and performant for workers in the field, while meeting the price point and usability requirements for smaller companies.

### The simplicity of developer workflows

Graham came across Netlify while building a Vue.js frontend for the main Fieldfusion app. “After time spent banging our heads against a wall trying to find a consistent and repeatable deployment method, which didn’t require learning a sub-technology or platform stack, Netlify ‘just worked’ out of the box. It helped us solve common issues with CDN and caching.”

While there are many options for developers when it comes to deployment, what differentiates Netlify are the workflows purpose-built with developer experience in mind. Key extensions to the CI, such as deploy previews and split testing sealed the deal.

The Fieldfusion team now builds and deploys both the web and mobile applications using Netlify. “We also build all bespoke work for clients on Netlify, and we’ve lost count of the number of times clients have been wowed that an entire production deployment of their application or website is online, highly available and with zero overhead cost.”

![Fieldfusion mobile app in Google Play store](/v3/img/blog/epdkkg8waaeswvc.jpeg)

### Faster development, better performance

With Netlify, Fieldfusion has significantly reduced the time it takes to ramp new developers, so they can start adding value. “Telling a developer, ‘once the PR is approved, it will automatically be deployed to a branch preview, our Slack bot will give you the URL, and then you’re good to go’ is music to their ears.”

Loading times and uptime are another key factor that helped them select Netlify. Because their users are in the field and reliant on cell reception, site performance and caching on [Netlify’s Edge network](https://www.netlify.com/products/edge/) is critical.

Using modern [Jamstack](https://www.netlify.com/jamstack/) technologies (in this case, Vue.js, Hasura, Netlify) to enable repeatable workflows also makes the company lean enough to pivot or spin up a new project almost immediately. A prime example is a Coronavirus Tracker the company built with its field service workers in mind.

### Launching a COVID-19 tracker in <24 hours

As the coronavirus pandemic unfolded in March 2020, many of Fieldfusion's customers were faced with navigating the safety of their employees in the field. The team decided to create a resource for field workers to quickly track and assess the spread of COVID-19 in the areas they needed to travel for work.

The idea was conceived late in the evening of March 16th, and by the morning of March 18th, they launched a fully operational and interactive application using Vue.js, websockets, Hasura and Netlify.

![Fieldfusion architecture with Bitbucket, GraphQL, Hasura, Vue and Netlify](/v3/img/blog/fieldfusion-basic-architecture.png)

The COVID-19 severity tracker received 150,000 views on Facebook within the first few days. The free tool utilizes population data from the UK Office for National Statistics (ONS) and the latest data from Public Health England (PHE) to track the severity of the coronavirus pandemic across the UK over time. By comparing the number of confirmed cases with the population in a specific area, the tracker offers the ability to better understand the impact by region. Field workers can enter the postal codes for the areas which they need to visit in order to assess the risk.

### What’s next for Fieldfusion

The Coronavirus Tracker was in many ways a validation that the formula for how the Fieldfusion team works is scalable and repeatable, powered by Netlify’s developer workflows and platform. “We’d now like to refine that into more MVP offerings that we can go to market with quickly and effectively.”

Graham’s philosophy is to spend as much time as possible building ideas into products and treat forks in the road—or unnecessary time managing infrastructure and integrations—as cautionary tales of lost time. “In a world where everything is possible, time becomes the limiting factor.”

“I personally believe that the art of successful development is your ability to prioritize and consistently build products that are robust, repeatable, and measurable. Netlify is the dream solution for us. It removes the legitimate concerns we would otherwise waste time worrying over, and lets us focus on building our business.”