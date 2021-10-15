---
title: Spring uses Netlify to Scale Social Commerce and Boost Conversion for Creators
description: With Netlify, Spring migrated from a monolithic to a
  microservices-based web architecture. Learn how they improved site speed,
  shipped faster and improved conversion.
authors:
  - Netlify
date: 2021-03-08
lastmod: 2021-03-09
topics:
  - case-studies
tags:
  - case study
  - Jamstack
  - ecommerce
  - nextjs
tweet: ""
format: blog
seo:
  metatitle: How Spring uses Netlify to Scale Commerce, Boost Conversion
  metadescription: With Netlify, Spring migrated from a monolithic to a
    microservices-based web architecture. Learn how they improved site speed,
    improved conversion rates, and shipped faster.
  ogimage: /img/blog/spring-netlify-og.png
---
{{< toc >}}

## How Jamstack is enabling Spring to move iteratively from monolith to microservices

![Spring logo Teespring](/img/blog/spring-logo-alpha-04.png "Spring logo Teespring")

As a leading social commerce platform for creating and selling custom products online, [Spring](https://www.spri.ng/)’s web experience matters a lot. The magic of customizing physical and digital products on demand is made possible with a dynamic web experience powered by Netlify using a modern [Jamstack](https://www.netlify.com/jamstack/) architecture.

With Netlify, Spring (formerly Teespring) was able to migrate from a monolithic to a microservices-based web architecture, gradually. This reduced the risk of the architectural shift, improved site speed even as traffic was skyrocketing, and allowed them to ship changes to their web app much faster, directly improving conversion rates.

## Background

“We want people to focus on the design and marketing of their products, rather than all of the logistics around it,” said Rick Takes, Spring’s director of engineering.

Spring, which started life as a Y Combinator project nine years ago, now has **more than one million visitors to its site per day** and has hit more than three years of profitability. This massive growth is thanks to the web app experience they offer, seamlessly combining custom branding of merchandise with a storefront, with social presence and flawless order handling and logistics.

But maintaining this level of innovation at scale was becoming more time-consuming, and the infrastructure was becoming more slow and brittle because it was built as a monolith in a monorepo. Netlify enabled Spring to take advantage of the modern Jamstack web architecture, one step at a time, to rapidly scale the e-commerce web experience and boost conversion for merchants.

### From Monolith to Microservices

Modernization started with a close look at their tech stack.

“We started with a Ruby on Rails monolith in a [monorepo](https://www.netlify.com/blog/2019/10/09/launching-monorepo-support-for-netlify-sites/),” said Takes.

However, as the company expanded, this model--with its multiple frameworks and apps--did not scale well.

<figure>
  <center>
    <img src="/img/blog/spring-original-tech-stack-rails.png" alt="Spring’s original tech stack.">
  </center>
  <figcaption>Spring’s original tech stack.</figcaption>
</figure>

“We have a lot of different domains crossing paths here,” said Takes. “We have storefronts, checkout, shopping cart, fulfillment, all intertwined in a single repo in a single app, which makes it difficult to iterate quickly and also brings up unforeseen bugs. Making a change to one part of the code base affects something else. For example, we might make a change to storefronts and that change affects fulfillment, which just isn't great, so we decided to pull things apart.”

### Starting Hybrid and Gradually Moving to the Jamstack Approach

Takes and his team decided to start with a domain-driven-design approach, rolled out in phases with the goal of creating a more service based architecture. For example, Spring wanted to be able to pull out a product area, such as a “shopping cart,” from its monolith and present it as a fully stand-alone service.

“We knew roughly what we wanted to do—we needed to break apart the monolith because it just wasn’t scaling well at all,” said Takes. “But we wanted to be really deliberate in how we approached it and not just jump into the latest and greatest technology that a year from now we might regret.”

“We wanted a solution that would enable us to pull apart our monolith without having to completely tear it down,” said Takes.

This is where the Jamstack--an architecture that leverages the principles of pre-rendering and decoupling to make the web faster, more secure and more resilient-- and Netlify comes in. The Jamstack’s flexible architecture along with a great developer experience delivered by Netlify allowed the Spring team to take a phased approach to break away pieces of their legacy monolith.

Spring has a culture of iterating and experimenting. Once something is proven out, it gets added to the Spring roadmap in a safe, scalable manner. Takes and his team came to Netlify early in 2020 with the challenge of enabling sellers to create their own branded storefronts, and began working through some proofs of concept.

“It ended up working really well,” said Takes. “We started scaling it up, and now here we are, about a year later, ready to release this out to a much larger audience.”

Now his team has set a goal of one million storefronts on the Netlify platform by June 2021.

### A Huge Timesaver: Moving from a Rails Monolith to Frontend Apps Living in Netlify

One thing that helped Takes and his team focus their journey was to imagine the ideal API. Every step of the way they asked themselves, “If we were to open this up publicly, what would be sensible, what could people build meaningful products on top of, and what would make sense to those not familiar with our internal terms and concepts?” These questions, said Takes, served as a “gut check” throughout the process.

Takes and his team decided to take an adapter pattern approach to an ideal, documented and versioned API.

“We proxy all the API responses from our Rails code base through the AWS API gateway,” he said. “It then takes that legacy shape and passes it through what we call an adapter--really just a function that converts that legacy shape to a more modern, ideal state and then surfaces it to whatever is requesting data.”

Takes said this process provided the organization with the flexibility to go back and refactor some of these concepts in its Rails app. They could be pulled out without worrying that every time an API change was made all the apps that consume the API would have to be updated, as well.

“Now we only have to update that function, that adapter,” said Takes. So, if we make a change on the Rails side to remove something, like a campaign (an internal term for a buyable product), we edit the adapter and everything else just keeps on working as long as we keep that handshake the same. And because we now have this versioned API, if we were to make a change we can call it V2 and, at our leisure, update the apps to start consuming it.”

Spring is building a pluggable architecture that allows partners to onboard extremely quickly. Connections to partners are now built in days by a few engineers, where they used to take months for an entire team. Without having to rebuild everything from the ground up and taking this approach they are more flexible, can focus better on their core product and can reduce technical debt moving forward.

Spring also takes advantage of **[Netlify Background Functions](https://www.netlify.com/blog/2020/10/29/announcing-background-functions/)**, for longer running tasks, or asynchronous jobs.

At this point in time, said Takes, many of Spring’s microservices don’t even touch the Rails app: “We can have frontend apps living in Netlify and going through the API and then hitting a microservice, and that can return out to the frontend app without ever having to hit our Rails code base. That’s been a huge timesaver for us in building new applications.”

<figure>
  <img src="/img/blog/spring-current-architecture-1.png" alt="Spring’s current architecture that runs on Netlify">
  <figcaption>Spring’s current architecture that runs on Netlify.</figcaption>
</figure>

> “We can have frontend apps living in Netlify and going through the API and then hitting a microservice, and that can return out to the frontend app without ever having to hit our Rails code base. That’s been a huge timesaver for us in building new applications.”

### High converting branded storefronts

By eschewing an “all-in” approach to microservices, Spring can be purposeful in terms of what it converts to the Jamstack approach and what it doesn’t (for now or forever, depending on the apps and services).

The most recent project focused on developing a branded storefront experience powered by Netlify.

Branded storefronts allow creators to have a fully customizable experience: They can adjust their logo, fonts, colors, text--even customize their own domains--so the storefronts really become owned by the creators. All of this runs on **[Netlify’s High-Performance Edge network](https://www.netlify.com/enterprise/)**.

“Branded storefronts are fully utilizing our new commerce API,” said Takes. “These sites are dynamically deployed to Netlify, and they’re living on the high-performance edge network there. We’ve seen huge performance increases from doing it in this way, and, as a result of the performance increases, we’re seeing an uptick in conversion rates and a decreased bounce rate—specifically in mobile, because people can load the sites much faster than they could with legacy sites.”

> "...We’ve seen huge performance increases from doing it in this way, and, as a result of the performance increases, we’re seeing an uptick in conversion rates and a decreased bounce rate—specifically in mobile, because people can load the sites much faster than they could with legacy sites."

Spring’s branded storefronts are just leaving beta. The company is currently rolling out branded storefronts to all of its users.

## Results and Future-Proofing with Netlify

One of the biggest benefits that Spring has gained from using Jamstack and Netlify has been improved developer experience via live **[deploy previews and faster build times](https://www.netlify.com/products/)**, allowing them to ship updates to their customers more efficiently. **They went from 90-minute build times to 1 minute, thanks to adopting Netlify [High Performance Build](https://www.netlify.com/enterprise/).**

“In the monolith, our CI deployment times could be up to an hour and a half,” said Takes. “Those have come down significantly as we’ve pulled things out. Our build times on our branded stores, backed by our serverless architecture, are about a minute.”

Spring plans to evolve its use of Netlify and the Jamstack moving forward, especially when it comes to [capabilities on the edge](https://www.netlify.com/products/edge/). Spring is a global company, so being able to put sites as close to creators as possible will provide a host of benefits, including improved localization.

“As a global offering we’re excited to work with [Netlify Edge Handlers](https://www.netlify.com/products/edge/edge-handlers/) to add better localization and to continue to improve site performance.”

Spring is also in the process of moving to **[Next.js on Netlify](https://www.netlify.com/with/nextjs/)** and taking advantage of [preview mode support](https://www.netlify.com/blog/2020/10/27/preview-mode-for-next.js-now-fully-supported-on-netlify/), which Takes said can offer a better developer experience.

Takes and his team are working to expand their use of Netlify as the company expands--and to continue to reduce the size of its monolith over time and as it makes sense.

“We’re scaling as a company and bringing in more and more engineers, and that allows us to do more of this work,” he said. “We eventually want to move fully away from our monolith and completely toward this modern architecture, but we are going to do that safely and in bite-sized pieces. Whenever we’re about to do some new work, we look and see if we are going to have to touch the legacy code base. We front-load modernizing that piece by pulling it out or making a microservice out of it. Then we do our new work. And, just kind of bite by bite, that’s pulling apart our monolith.”

> “We eventually want to move fully away from our monolith and completely toward this modern architecture, but we are going to do that safely and in bite-sized pieces."

The Spring team had a vision for their next-generation commerce platform and by partnering with Netlify and adopting Jamstack, they are well on their path to realizing it.

## Learn more

* [Watch a **webinar** with Spring to dive deeper into their architecture](https://www.netlify.com/resources/webinars/teesprings-journey-to-the-jamstack)
* Have a project in mind? One of our experts would love to **[talk with you](https://www.netlify.com/enterprise/contact/)** about the use-case and requirements.
* [View a replay of a talk from Jamstack Conf on Spring’s move to the Jamstack](https://youtu.be/5xkDnOemjLk?list=PL58Wk5g77lF94tg-F3y5zRyDeLVhTDnTg)

<iframe width="986" height="555" src="https://www.youtube.com/embed/5xkDnOemjLk?list=PL58Wk5g77lF94tg-F3y5zRyDeLVhTDnTg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>