---
title: Startup uses Netlify’s Powerful Developer Workflows to Drive Customer Success
description: BRIKL, a 3D and e-commerce software startup for custom made
  products, invests in its developer velocity and experience with Netlify to get
  to market faster.
authors:
  - Netlify
date: 2020-10-20
lastmod: 2020-10-20
topics:
  - case-studies
tags:
  - ecommerce
  - Jamstack
  - Gatsby
tweet: ""
format: blog
relatedposts:
  - "From WordPress to Jamstack: ButcherBox Moves to Headless Commerce"
  - How Celonis Supercharged their Content Production with Netlify Enterprise
    Solutions
seo:
  metatitle: E-commerce Startup BRIKL Invests in Developer Velocity with Netlify
  metadescription: Learn how BRIKL invests in its developer experience using
    Jamstack, sourcing data from their GraphQL API, generating static sites with
    Gatsby, and hosts on Netlify.
  ogimage: /img/blog/og-brikl.png
---
### BRIKL, a 3D and e-commerce software startup for custom made products, invests in its developer velocity and experience with Netlify to get to market faster

In the age of e-commerce, your new favorite store might be a few clicks away. When you’re browsing through the digital aisles and something catches your eye, you click through. At that moment, you’re trying to get a sense of how you’ll look. This is a critical moment for any retailer selling goods online.

If retailers can bridge the gap between expectation and actuality, they can delight their customers consistently. So, instead of leaving customers to imagine how they might look, retailers use the power of 3D modeling to give their customers a hyper-realistic sense of how something will look.

While 3D modeling bridges the gap between customer expectation and reality, many e-commerce retailers haven’t been able to take advantage of it. BRIKL is working to change that.

![BRIKL e-commerce store](/img/blog/brikl-store.jpg)

BRIKL is democratizing 3D modelling by ditching the slow, manual processes that made 3D modelling inaccessible for small to medium sized retailers, and instead building a sleek digital-first platform that helps retailers deliver an ideal experience to their customers in an instant. Netlify helps them do just that.

### Background

![BRIKL logo](/img/blog/brikl-logo-whitebg.png)

BRIKL powers 3D modelling software that retail and e-commerce clients use to give their customers a 360 view of their products and customize those products. When a retailer signs up, BRIKL provisions a new website for them, which serves as their online storefront, allowing the retailer’s customers to preview and purchase products without ever leaving BRIKL’s platform.

In e-commerce, speed and scalability reign supreme. “Loading time is key to attract customers trying to design a product. It’s even more important when embedding our studio design product into other websites. We need excellent loading times to give users the best design experience before they even start to design,” said Tobias Meixner, co-founder and CTO of BRIKL.

BRIKL chooses their development tools carefully to ensure their developers have everything they need to rise to the challenge of managing hundreds of storefront microsites while ensuring their clients’ 3D models render seamlessly. They realize that the software they’re building does more than help a customer peruse through an online store. BRIKL is the store itself. So, every bit of software BRIKL uses to build their customers' storefront makes a difference in their experience.

Tobias sees a strong tie between developer experience and customer experience. He believes that BRIKL’s team of engineers “perform at their level best when they're using the right tools and the right process.”

## Challenges

### Starting Out with S3 and Quickly Switching

Back in 2017, BRIKL was running the MVP of their product on an Amazon S3 bucket. While it worked, the developer experience left something to be desired in Tobias Meixner’s eyes.

In the critical early stages of their company, Meixner’s team of engineers needed to be able to move fast and flexibly in order to test new prototypes and determine if they appealed to BRIKL’s customers. But, that development process with S3 wasn’t as smooth as Meixner hoped it would be.

Using an S3 bucket, BRIKL found it difficult to work the way they want to. The technical overhead that S3 hosting required and the small bits of friction the developers would encounter every time they pushed an update via CLI eventually began to wear on the team.

BRIKL’s developers prefer to use a command line interface to deploy applications and ship updates. But, using CloudFront and S3 they found themselves investing valuable engineering hours just getting set up.

CloudFront required BRIKL’s engineers to manually set up new distribution sources for their traffic, create new load balancers, set origin paths, dictate HTTP protocol policy, create cache policies, and more. The waterfall of unavoidable dropdown menus in CloudFront’s user interface and many required selections in CloudFront acted as a speed bump, slowing BRIKL’s pace of innovation.

Even when the development team finally completed their CloudFront set up and could deploy from the command line, they still had to budget hours to keep CloudFront up and running. CloudFront requires developers to manually intervene to distribute and maintain traffic across its CDN. This made it difficult for BRIKL’s developers to focus on delivering rock-solid prototypes to prospective customers, while also running DevOps and traffic management at the same time.

When the BRIKL team was finalizing prototypes to share with customers, they first had to vet the prototypes internally. Using CloudFront and AWS, they couldn’t easily share previews of their new work. This left the option of either passing around static versions of their work, or waiting until the team could all meet to review their work together. It would be another two years until AWS would announce the ability to preview pull requests in 2019. Yet, spinning up this functionality still requires manual developer intervention.

As someone who is deeply embedded in the engineering team, constantly keeping his finger on the pulse of engineer productivity, Tobias figured it was time to explore making a change. That same year, 2017, Tobias started experimenting with Netlify.

## Solution

### Leaning Into A Customer-First Philosophy Using Deploy Previews

BRIKL is a customer-oriented company. Before rolling out new features to their entire customer base, they wanted to gather data on which features customers preferred, and which features might be best kept on the backburner.

“When we started out as a company, early feedback was very important to finding our product market fit. Having early stage features we could share with customers was so key to moving forward,” said Tobias.

To vet new features before launch, BRIKL began using Netlify Deploy Previews. This gave the engineering team a simple, streamlined way to test and review new pull requests by previewing them via an automatically generated URL.

“We deploy sometimes dozens of times a day via Netlifty Git integration so we are continuously moving forward,” said Tobias. “All of our frontend applications are hosted in Netlify with fantastic speed and ease of deployment on Git push, it just works.”

The difference between a developer tool that “just works” and one a developer has to make work is stark. **[Netlify’s CDN and Deploy Preview features](https://www.netlify.com/products/edge/)** are autoconfigured, saving developers from spending time setting up their environment and infrastructure manually. Whereas BRIKL’s developer used to have to stitch S3, CloudFront, and their developer environment together, Netlify’s build and hosting tools are coupled, allowing BRIKL’s team to move faster and iterate more seamlessly without any additional effort.

![BRIKL- From developer workflow to provisioned storefront for end users](/img/blog/brikl-netlify-from-developer-workflow-to-provisioned-storefront-for-end-users.png "From developer workflow to provisioned storefront for end users")

Netlify’s automated process of deploying every pull request to a unique URL gave the engineering team more time to focus on quality checking the pull request itself, as opposed to getting bogged down in the act of making a pull request accessible to the whole team. By ditching manual processes in favor of more streamlined developer tools, the engineering team was able to invest more time in consistently iterating product features based on customer feedback.

The instant the BRIKL team pushes a new prototype live, they can be sure that their customers see their latest work. Netlify’s automatic cache invalidation ensures that there are no spectres of now-outdated websites lingering around after you deploy. Once BRIKL pushes to production, their customers see their best, and most current work.

### Automating Site Deployments with Netlify

Tobias saw his investments in developer experience having a tangible impact on customer experience.

So, he kept investing in the tools his team uses every day, seeking to streamline and automate any and all cumbersome processes that put distance between BRIKL’s engineers and their most impactful work.

Tobias turned his attention from feature testing to mission critical production.

Provisioning new storefront sites for customers is arguably one of the most important and highest traffic processes BRIKL performs. It’s a critical first impression that has to be perfect.

Think of provisioning storefronts as the digital equivalent of checking in to a hotel. When a customer books a room, they want that room to be spotless and ready the instant they need it.

BRIKL adopts the same philosophy, ensuring that from the moment a customer signs up, their storefront is ready to customize, outfit with products, and to sell to their clients.

To optimize for speed and scale, BRIKL uses [Jamstack](https://www.netlify.com/jamstack/) while sourcing data from their GraphQL API, generating static sites with Gatsby, and hosts those sites on Netlify, relying on **[Netlify’s 99.99% uptime SLA](https://www.netlify.com/enterprise/)**.

“One of the reasons we have picked Gatsby for our storefronts is to make sure storefronts have the kind of performance end-users expect today, which is sub-second load time for all storefront pages,” said Tobias.

When the BRIKL engineering team was deploying new storefront sites to S3 via a Command Line Interface, they found themselves wrestling with manual processes and maneuvering around roadblocks.

“Before, we were spending time on invaluable tasks. Netlify allowed us to automate and improve critical aspects of our development workflow, letting us focus more on our customers and our business,” said Tobias.

To put the entirety of their focus back on customer experience, the BRIKL engineering team switched from using S3 to deploy new storefront sites to using **[Netlify Build](https://www.netlify.com/products/build/)**.

## Results

Now, BRIKL can deploy hundreds of storefront sites without relying on costly manual processes. When a new customer signs up, BRIKL instantly provisions a site using Netlify’s Command Line Interface.

![Build trigger on developer Git push to BRIKL monorepo](/img/blog/build-trigger-on-developer-git-push-to-brikl-monorepo-2.png "Build trigger on developer Git push to BRIKL monorepo")

When BRIKL’s customer has made their desired tweaks to their storefront and is ready to ship it, the customer’s deploy request triggers an API response that pushes the page live using **[Netlify’s High-Performance Builds](https://www.netlify.com/enterprise/)**.

“Automating the provisioning process of our storefronts via an API helps us a lot to scale automatically. Now a new customer is just a few API calls away,” said Tobias.

![BRIKL- Storefront creation on tenant sign up](/img/blog/storefront-creation-on-tenant-sign-up-brikl.png)

With a drastically streamlined process, BRIKL is set up to scale for an influx of new customers while delivering the same level of excellence in customer experience. Tobias’ team of engineers has not only the tools they need to be successful, but the powerful CI and CD architecture they need to continuously improve their developer workflow with Netlify.

While Tobias serves a team of engineers, he makes it a point to contribute to the engineering community at large. The BRIKL team organizes two GraphQL Meetups in both Hong Kong and Bangkok, in an effort to share engineering best practices they’ve learned while continuously optimizing the BRIKL platform.

As the BRIKL team finds new and novel ways to improve their developer workflow, and new ways to use Netlify’s suite of developer tools, odds are they’ll have a lot more to share in no time.

___

Have a project in mind? One of our experts would love to [talk with you](https://www.netlify.com/enterprise/contact/) about the use-case and requirements.