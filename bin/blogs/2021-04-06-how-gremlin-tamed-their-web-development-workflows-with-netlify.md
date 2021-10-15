---
title: How Gremlin Tamed their Web Development Workflows with Netlify
description: Netlify has become the central collaboration workflow platform that
  has extended with Gremlin’s engineering and marketing teams, helping them
  iterate quickly and safely.
authors:
  - Netlify
date: 2021-04-07
lastmod: 2021-04-07
topics:
  - case-studies
tags:
  - migrating to the modern web
  - case study
  - serverless
  - functions
  - forms
tweet: ""
format: blog
relatedposts:
  - How Celonis Supercharged their Content Production with Netlify Enterprise
    Solutions
  - Spring uses Netlify to Scale Social Commerce and Boost Conversion for
    Creators
seo:
  metadescription: Learn how Netlify has become the central collaboration workflow
    platform that has extended with Gremlin’s engineering and marketing teams,
    helping them iterate quickly and safely.
  metatitle: How Gremlin Tamed their Web Development Workflows with Netlify
  ogimage: /img/blog/og-image2x.png
---
[Gremlin](https://www.gremlin.com/)’s recipe for success is to test, test, and test some more. They provide chaos engineering software designed to automate failures in the name of resilience and reliability. By integrating chaos engineering into development workflows, they’ve been able to help thousands of customers find bugs and improve their products.

![Gremlin logo](/img/blog/gremlin.jpg "Gremlin logo")

As a company that values testing and developer-centric workflows, they needed a web development platform that would help them iterate quickly and safely. Gremlin’s flagship site runs on Netlify. It’s become an indispensable service for Gremlin’s engineering and marketing teams as they help their customers embrace chaos engineering and find success through failure.

As Gremlin has grown, Netlify has become the central collaboration workflow platform that has extended with the team. From their main company website and web applications, the team has been able to grow on Netlify, relying on Netlify Builds, Netlify Forms, serverless functions, and more.

{{<toc>}}

## Background

Chaos engineering is a deliberate, methodical practice of introducing entropy into a specific area of a company’s web architecture and network of distributed systems to identify and strengthen possible points of failure.

Companies like Target, Walmart, DreamWorks, Expedia, and Mailchimp rely on Gremlin’s SaaS tools to intentionally inject failure into their operations so they can spot the issue, solve for it, and be better prepared if an unexpected failure or outage arises. Gremlin is built to highlight and then strengthen weaknesses in their customers’ engineering systems.

Looking at their own web stack, when Gremlin wanted to take the manual work out of their website build process, they turned to Netlify. Then, they kept pulling that thread of efficiency seeing where it would lead them. In their hunt to optimize their site performance and their engineering workflows, Gremlin adopted more and more Netlify-powered tools and processes.

## Challenges

[Zach Schnackel](https://twitter.com/zslabs)’s first project for Gremlin was speeding up the company’s website build process. Back in 2018, Gremlin was using a static site model for their process to build and deploy a site that was still too slow and too siloed from the rest of their web architecture.\

At the time, they relied on a Gulp process along with a task runner to automate their build tasks, incorporating Metalsmith as a static site generator. But the process, which should have been hands-off and automated, was actually quite involved.

When Schnackel’s team wanted to deploy a new page to their website or push edits to a blog post, the build process was completely divorced from the CMS that other teams within Marketing and Engineering used to preview and publish posts.

“I knew that the updates were pretty slow and were quite limited by the technology,” said Schnackel, senior software engineer at Gremlin.

Schnackel wanted to find a new platform and workflow that would allow Engineering and Marketing to work together easily, in the same environment, without having to send the latest links of staged content back and forth. He wanted Engineering to be able to focus on their primary objectives, rather than spending valuable time trying to bend web tools to work the way Gremlin needed them to.\

When Schnackel went looking for the solution that would shape Gremlin’s website architecture and engineering workflow, he quickly selected **[Netlify’s platform](https://www.netlify.com/products/)** to allow for better team collaboration. He paired Gatsby as a static site generator alongside [Netlify’s open source CMS](https://www.netlifycms.org/) to give other teams the ability to easily add and update site content and free engineers to work on other projects, all running in one git workflow with the Netlify platform.\

“I’d been a fan of Netlify for quite some time, so I knew Netlify was going to be a good option, not only for what I had today but the advancements I saw opportunities for in the future,” said Schnackel.

It didn’t take long for those other opportunities to crop up: soon after adopting Netlify for their workflow, Gremlin soon started using additional Netlify capabilities, from **[Netlify Forms](https://www.netlify.com/products/forms/)** to capture website leads, to automating signups from the AWS Marketplace through **[serverless functions](https://www.netlify.com/products/functions/)**.

## Making the move to Netlify

Gremlin’s Netlify-powered workflow helped their team move faster and more efficiently. Right away, the engineering team could stay within their preferred environment, without context switching from platform to platform.

“We're dealing with just a GitHub file system. So, all of the notifications and automation that we have for reaching out to the right people and code owners, that's been much more seamless than it ever has in the past. We went from a single point of entry to getting changes done, to figuring out who are the right people that need to be notified and giving them the permissions they need to be able to approve things,” says Schnackel.

Gremlin engineers submit a pull request, gather comments and edits from colleagues, and use **[Netlify’s Deploy Previews](https://docs.netlify.com/site-deploys/overview/)** to review their changes on a unique URL before pushing them live.

When it's time to push the site to production, that build and deploy process is truly automated. Schnackel and the Gremlin team can take the time they’ve saved from having to check in on slow deploy workflows and invest it in new projects Gremlin is working on. The Gremlin team now has the flexibility they need to build exactly what they imagine, as opposed to settling for a narrow list of possibilities offered by a monolith.

They’ve also used **[Netlify Functions](https://www.netlify.com/products/functions/)** to quickly add new features to the site, without worrying about servers. Netlify Functions allow Gremlin’s team to deploy serverless, version-controlled, functions that are all built and deployed along with the rest of their Netlify site. Netlify automatically handles service discovery through its built-in API gateway. Through Netlify Functions, Gremlin can do things like validate new users’ phone numbers without having to load Google Phone Library’s massive bundle or use Clearbit’s API to load country-specific content in an instant. One serverless function interacts internally to validate the internal product is working correctly. Another interacts with the Twitter API to pull down tweets that get added into a UI.

> “Functions were a really quick and easy way to get that done without needing intervention from really anybody else,” said Schnackel. “Netlify’s tools were invaluable. It meant we could be less dependent on the manual setup and what would previously take a lot of other engineers’ time. Instead, we could use the Netlify platform as the workflow to handle everything nicely.”

The team has the flexibility now to collaborate and build better experiences. Netlify serverless functions allow the team to have the basis to build even more interactivity with APIs for their internal services and their main site.

## Finding the Flexibility to Iterate

After their initial success with Netlify, Gremlin expanded the surface area and depth of their Netlify-powered processes, tailoring Netlify to serve their specific needs.

Today, Gremlin’s entire documentation sites and marketing sites are powered by Netlify. Using the Netlify platform, Gremlin’s team of engineers can architect data and third-party services the best way they see fit. That might mean uniting a build cache sourced by a Gatsby plugin with media files pulled from the Cloudinary API with a simple API call from Netlify Functions. Or, it could mean creating and consolidating data collection types easily with Netlify’s CMS.

Gremlin’s newfound flexibility lets them bring their ideas to life, and act quickly in the wake of unexpected events, even chaos.

## Moving Gremlin's Bootcamp Online

Prior to 2020, Gremlin ran training programs called Bootcamps at tech conferences to teach developers how to use Gremlin. As they quickly realized that in-person conferences would be on hold for the foreseeable future, the team at Gremlin began thinking of ways to adapt their Bootcamp experience to a purely digital venue.\

They wanted to keep the same sense of camaraderie that made Bootcamps successful in-person events and pair that with a streamlined onboarding process for new Gremlin users. But, the tools Gremlin’s marketing and events teams had to work with made that task incredibly difficult.

![Gremlin's website homepage screenshot - how their bootcamps moved online](/img/blog/gremlin-bootcamp.png)

At an in-person event, Bootcamp organizers [Karli Williamson](https://www.linkedin.com/in/karli-williamson/) and [Ana Medina](https://twitter.com/Ana_M_Medina) could greet new Gremlin users in-person and make sure they got up and running easily. At the start of the pandemic as Gremlin was moving [Bootcamps online](https://www.gremlin.com/bootcamps/), Williamson and Medina had to rely on connecting tools like SplashThat and Eventbrite to onboard new Bootcamp members.

The experience fell short of Gremlin expectations. Users had to use one platform to register, another to confirm their attendance, and another to access the Bootcamp training.

## Results: Netlify Powers a Seamless Cross-Functional Team Workflow

To level-up the Bootcamp experience, the Gremlin team brought the entire onboarding flow and more to the Netlify platform. Now, the [Bootcamp](https://www.gremlin.com/bootcamps/) site benefits from all the streamlined build processes and workflows that the rest of Gremlin’s web architecture enjoys.

Using **[Netlify Forms](https://www.netlify.com/products/forms/)** in conjunction with Zapier integrations, Williamson can register users, trigger a calendar invite, schedule a reminder email, a confirmation email, and route pertinent user data to Gremlin’s backend systems like Marketo and Salesforce automatically.

She now has the power to spin up new registration pages for custom events and add the logos and design that reflect Gremlin’s brand and make the difference when it comes to customer experience. You can see that in the data.

> “Our registrations have increased 3x over the last four months,” says Williamson, Events Lead at Gremlin.

Using Netlify, the Gremlin team can put together and publish relevant content on a dime, without having to worry about any publishing process standing in their way.

“With everything running on Netlify, we now can get content posted live in hours,” said senior chaos engineer, Medina.

Now, the Gremlin team is focused on scaling not only their site but their content. With Bootcamps in high-demand, they’re working on the next wave of content, Gremlin Bootcamp 201s.

In the past, they might have had to spend valuable time simply getting the content live on their site. Now, the process is faster, so they can focus more on what's really making an impact on their business — the Bootcamp itself.\

“Having that hub where we can send people to learn what Bootcamps are, request one, and find a time that works for them has been super critical for us. Especially just as we've had to integrate all of these systems virtually and make sure that everything is speaking to each other. We found that keeping everything on the Gremlin page was really helpful,” said Williamson.

## The future

A few years ago, Gremlin might have had to think how they’d outwit or out-engineer a monolithic system in order to bring an idea to life. Using Netlify, they just try it. The thought of if they can build something doesn’t come to mind.

> “Netlify helps us make our fast workflow a reality. Our workflow is — test something internally, try it out, and then go and share this with the world,” said [Tammy Bryant Butow](https://www.linkedin.com/in/tammybutow/), principal site reliability engineer at Gremlin.

Today, the Gremlin team can focus more on what they’ll build, how they’ll build it, and its impact. That type of mentality has been essential to Gremlin scaling from a Series A company to a Series B company and beyond. And, it sounds like Netlify will be a part of that journey, too.

> “Netlify feels like it’s a part of our company. It *is* Gremlin.com,” says Butow.

Learn more about Gremlin’s journey with Netlify and the [Jamstack](https://www.netlify.com/jamstack/) from this Q&A at Migrating to the Modern Web with Phil Hawksworth of Netlify and Zach Schnackel of Gremlin.

<iframe width="1025" height="577" src="https://www.youtube.com/embed/zAqLlyFvho4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- - -

**Have a project in mind? One of our experts would love to [talk with you](https://www.netlify.com/enterprise/contact/) about the use-case and requirements.**