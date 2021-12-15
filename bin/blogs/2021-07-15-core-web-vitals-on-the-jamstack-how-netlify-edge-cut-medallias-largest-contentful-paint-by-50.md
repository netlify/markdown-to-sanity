---
title: Medallia achieved 50 percent better Core Web Vital Scores with Netlify High-Performance Edge
description: Learn how Medallia's migration from WordPress to Netlify improved
  Core Web Vitals and ease of deployment.
authors:
  - Charlotte Dillon
date: 2021-07-15
lastmod: 2021-07-19
topics:
  - case-studies
tags:
  - core web vitals
  - SEO
  - Jamstack
  - migration
  - Performance
  - Case Studies
  - case studies
tweet: ""
format: blog
seo:
  metadescription: Learn how a migration from WordPress to Netlify cut Largest
    Contentful Paint by 50 percent. Plus, they gained a better experience for
    customers and developers alike.
  metatitle: "Core Web Vitals on the Jamstack: Medallia's Migration to Netlify"
  ogimage: /v3/img/blog/medallia-og-designed.png
related posts:
  - The Developer’s Intro to Core Web Vitals
  - Pan Macmillan Sees 25 Percent Conversion Increase After Migrating to Netlify
---
If any company knows the importance of customer experience, it’s [Medallia](https://www.medallia.com/). Medallia Experience Cloud is a customer feedback management software platform that empowers every employee to improve the customer experience. That’s why when it came to improving the experience on their own website, Medallia looked towards Netlify to provide the performance their customers expect, and the seamless development workflows their developers need.

In order to provide the best-in-class customer experience their users expect, the marketing team at Medallia needed to make more frequent content updates. But Medallia’s marketing site, which had previously been hosted as a monolithic WordPress application, was difficult to QA, update, and deploy—not to mention, their [Core Web Vitals](https://www.netlify.com/blog/2021/06/11/the-developers-intro-to-core-web-vitals/) needed some improvement.

![Medallia's Jamstack Migration led to 50 percent better Core Web Vital Scores](/v3/img/blog/medallia-inline.png "Medallia's Migration to Netlify led to 50 percent better Core Web Vital Scores")

Medallia’s recent migration from WordPress to the Jamstack powered by Netlify has enabled shorter development cycles, increased deploy speed, and most importantly, a better experience for customers and developers alike.

## The Challenge: Seamlessly Migrate from WordPress to Netlify to Improve Performance and Ease of Deployment

Rob Kristie is the Global Head of Web Development at Medallia. He leads a small team of developers working on Medallia’s web properties, which include the main website, event pages, and ten internationalized sites. As a global and publicly traded company with 15 offices and more than 1,000 employees, there are a lot of stakeholders involved in building out these properties. In a given week, the web team might get requests to update blog posts, create new microsites, and update copy on web pages. And while some of those site updates were predictable (for example, a major event or a product launch), they didn’t have a good way of predicting what would come in a given week.

The marketing team was extremely dependent on the web team to make web updates. Prior to the migration to Netlify, all of these updates were bottlenecked by a weekly deployment cycle on their WordPress setup, which took between one and two hours to deploy a new version of the site. They were also limited in how they developed their site previously. The ways in which they committed code, previewed, and collaborated was all dictated by WordPress. All of this is seamless and customizable for them in the Netlify workflow, which allows them to do more with less.

Kristie recognized that a migration to the Jamstack could solve a number of problems at once. With a decoupled frontend, the marketing team would be able to make content updates on their own and have it flow through an API, and their build times would reduce drastically, allowing them to deploy more frequently. Another thing that enabled Rob to hit a rapid pace in development was the ability to spin up new environments quickly, and being able to share his work with the rest of the team as he progressed with his development work. By being able to capture feedback early on, he did not spend a lot of time re-writing code.

## Planning the migration

Kristie had managed a similar migration from a monolithic application to the Jamstack in a previous job. As such, he knew exactly what to look for when selecting the tools they needed to get the new site up and running:

1. **Nuxt.js for performant static site generation in Vue:** Medallia’s new site is built in Vue, and Nuxt.js offers out-of-the-box support to deliver HTML based on Vue components to the client instead of pure JavaScript. Server-side rendering, an important component of the Jamstack, would lead to a large SEO boost for Medallia.
2. **Prismic for component-based content editing**: Prismic is a headless CMS that Medallia chose for its ease of use for both technical and non-technical team members. In particular, they use [Prismic’s content slices](https://prismic.io/feature/dynamic-layout-content-components) feature, which allows them to modularly design sections of the site.
3. **Ensuring functionality of previous integrations:** It was important that a migration didn’t break existing workflows, like the marketing team’s use of Marketo, or site-wide search via Swiftype. Netlify functions offered Medallia the flexibility they needed to keep their existing integrations, which not only kept internal workflows simpler, but significantly reduced the migration effort.
4. **Netlify for seamless collaborative web development:** Netlify’s cloud platform provided Medallia the glue to seamlessly integrate the rest of their Jamstack components. Features like shareable deploy previews, linkable logs and instant rollbacks even further streamlined collaboration.

The migration happened all at once for the major site. Kristie’s team used a number of **[Netlify Build Plugins](https://www.netlify.com/products/build/plugins/)** to test their work as they re-built the Jamstack version of the site, like [Checklinks](https://github.com/Munter/netlify-plugin-checklinks) to ensure all of the links were functional. After QAing the new site, Kristie’s team was ready to flip the switch for DNS to point to the Jamstack version of the site.

**→ Related Resource: [DNS Migration Checklist: How to Migrate DNS for Production Site](https://www.netlify.com/blog/2021/04/06/migrating-dns-for-a-production-site-we-made-you-a-site-migration-checklist/)**

## Results: Improved Core Web Vitals and Workflows

> “Everything just works...Netlify is the one piece that I don’t have to worry about. It gives us a lot of peace of mind.” — Rob Kristie

Since migrating the site to the Jamstack, Kristie’s team has seen massive improvements in their Core Web Vitals, their ability to collaborate with other stakeholders, and overall development workflows.

### 30x Faster Deployment Speeds

Speed of development is significantly faster with the Jamstack architecture in place. Bottlenecks that were common on the WordPress implementation, like deploy time and QAing the site, have decreased significantly. With Netlify’s Deploy Previews and a headless CMS in place, the web team is able to send a complete, atomic version of the site for QA to the content editors whenever changes are requested.

And deploy times, which used to take up to 120 minutes, have been reduced to 3-4 minutes.

For Kristie, that time saving means cost savings. His team’s time is freed up from the grunt work they used to need to do any time a change was made.

> “In the old days I had to worry about the server, or having memory problems, but with Netlify, I know it’s just going to work.”

### Netlify High-Performance Edge delivers Core Web Vitals with 50% better speed, responsiveness, and visual stability

On the WordPress architecture, Medallia’s [Core Web Vitals](https://www.netlify.com/blog/2021/06/11/the-developers-intro-to-core-web-vitals/) had lots of room for improvement. Their Largest Contentful Paint (LCP), one of the three metrics Google indexes on for page experience, used to be between 1.5 and 2 seconds. Prebuilt for performance and deployed directly to Netlify’s global edge network, their LCP has been cut down to more than 50%, to around 700ms. For context, [Google’s own LCP time](https://speedcurve.com/benchmarks/usa/tech/fast/largest-contentful-paint/) is within the 500-100ms range.

Netlify is built to deliver content quickly. Assets delivered by Netlify Edge are [automatically compressed with Brotli encoding](https://www.netlify.com/blog/2020/05/20/gain-instant-performance-boosts-as-brotli-comes-to-netlify-edge/) for even smaller sizes and decompression efficiency. Netlify Edge is [distributed just like a CDN](https://www.netlify.com/products/edge/), but with advanced functionality for publishing entire sites and applications. Its global distribution with automated prerendering makes for blazing fast site delivery. Medallia achieved even higher scores with Netlify’s HP Edge, [available on Enterprise plans](https://www.netlify.com/enterprise/), a network with 30% faster speeds than our standard edge. 

**[Learn more about Netlify Enterprise](https://www.netlify.com/enterprise/)**

### Netlify Functions create dynamic pages with simple workflows

With microservices instead of a monolithic WordPress architecture, Kristie can pick and choose the right tool for each job that needs to be done. [Netlify Functions](https://www.netlify.com/products/functions/) allow him to pick and choose what’s best for the job. He just deploys server-side code that works as API endpoints, which run automatically in the background, or in response to events.

With a headless CMS in place, for example, content editors can make an update in their own workflow, and Kristie can be confident the content will not affect the rest of the site. There’s no more telling marketing team members on a Thursday that their edits won’t go live until next Wednesday at 6 p.m. Once something is updated, it’s just a quick deploy away.

Another function they’ve been running is an integration with Bevy. Bevy pipes event data into their microsites for their annual event, [Experience](https://experience.medallia.com/). Planning an event like this requires a lot of back and forth, as speakers change and agendas shape up. With the WordPress site, any changes would require work from the web team. But with the Jamstack, they got a webhook set up to the platform they’re using. Any time the marketing team adds an agenda item, a speaker bio, or modifies an abstract, the web team doesn’t need to manually deploy those changes—they just deploy. In peak pre-event planning, those deploys might happen 30 or 40 times a day. Since deploy times for the event microsite only takes 30 seconds, there’s no limit on how many changes the team can make. In addition to the deployments taking shorter time, Kristie’s team did not spend any time managing the WordPress infrastructure or increasing capacity to handle spikes.

## Future Plans

As the dust settles from their initial migration—and the positive feedback rolls in—the team is looking to the future at what else they can do with Netlify. Now that the upfront work is done, it’s time to do the “fun stuff,” as Kristie puts it. With Netlify “running itself, there’s more room for incremental improvements.” With Netlify, a massive workload has been taken off their shoulders. They’re currently working on migrating all the localized sites to the same Jamstack architecture, and then are going to explore server side A/B testing, and integrating Netlify forms with their marketing automation platform.

With a more agile approach to how they can get content out and updated on the web, there are more possibilities for improving the user experience even further.

Today Medallia is able to do what they know best: focus on building amazing customer experiences rather than focusing on building infrastructure. The first and most important experience for their customers starts with their web properties, which are now upgraded to modern architecture, giving them the fastest performing sites on the web.
