---
title: How Celonis Supercharged their Content Production with Netlify Enterprise
  Solutions
description: Switching from WordPress to Netlify’s Enterprise offerings, Celonis
  massively scaled website production, democratized access to their CMS, and saw
  $60K in cost savings.
authors:
  - Netlify
date: 2020-09-23T13:00:00.000Z
lastmod: 2020-09-23
topics:
  - case-studies
tags:
  - Jamstack
  - WordPress
  - Contentful
tweet: ""
format: blog
relatedposts:
  - Migrate Your WordPress Site to the Jamstack
  - Wayfx Deploys Lightning-fast Headless WordPress to Netlify
seo:
  metatitle: How Celonis Supercharged their Content Production with Netlify
  metadescription: Moving from WordPress to the Jamstack. See how better workflows
    helped Celonis go from managing just 100 web pages to adding and maintaining
    100+ pages per month on Netlify.
  ogimage: /v3/img/blog/og-how-celonis-supercharged-their-content-production-with-netlify.png
---
## Moving from WordPress to the Jamstack: How better workflows helped Celonis go from managing just 100 web pages to adding and maintaining 100+ pages per month on Netlify

Think of an enterprise business as a giant engine. If the engine isn’t running, you can likely trace the source of the problem and fix it. Glaring issues are easier to find. But, if the engine of an enterprise business isn’t running as smoothly as it could, how would you know? And, more importantly, how would you know you’re making the right adjustments to fix it? 

Celonis helps enterprise businesses fine tune their operations and keep their engines at full capacity smoothly using process mining. Think of Celonis’ process mining software as a set of X-ray goggles enterprises use to see how their business is running inside and out. 

Celonis helps enterprise companies like Uber, Lufthansa, Sysmex and others find the places, processes, and patterns they can tweak to make a big impact on their business. 

It’s no surprise Celonis practices what they preach. Celonis found an area of their business that they could tweak to make a big impact — their website. By switching to Netlify’s Enterprise offerings, Celonis was able to massively scale their website production, democratize access to their CMS, and host a livestream for 18,000 attendees with just a few weeks’ notice. 

![Superfluid logo](/v3/img/blog/celonis-logo-superfluid-red.png)

### Background

A few years back, Celonis was using WordPress to host their website. WordPress’ CMS and hosting services worked for Celonis at the time, but as the company’s success increased and their customer base grew, Celonis quickly outgrew their initial WordPress implementation. 

On the best days, the site took about seven seconds to load. On its worst days, the load time clocked in at around 13 seconds. To have more agency over their customers’ experience, and more control over their site performance, Celonis switched to a static site architecture using Netlify.  

“The fact is that a dynamic site will never be as fast as a static site. So we decided on this static site architecture, which is one of the primary reasons we ended up thinking of Netlify,” said Pekka Hiltunen, Head of Web Design and Development at Celonis. 

After making the switch from WordPress to Netlify, Celonis saw faster site build speed, but there was still room for improvement. Celonis was using internal servers in conjunction with a static site generator that built each new page on a local server before deploying it to Netlify via the Netlify API. 

While the sites could be built in a few minutes, they were stuck in a logjam waiting to be built on local servers. Only one site could be built at a time, leaving a long queue of sites waiting for their turn. 

So, as a company that specializes in optimizing business processes, Celonis kept optimizing their own architecture. They switched their CMS from WordPress to Contentful. And, instead of building sites locally, Celonis’ began using [Netlify’s High Performance Build](https://www.netlify.com/enterprise/) to avoid the logjam. Instead of waiting hours to get a site live, Pekka now used a different, smaller unit of measurement — coffee trips. 

“So, once you do something in Contentful and you hit publish, you can go grab a cup of coffee and come back and you know you'll be able to see your changes. With Netlify, our build is in production in 3 minutes or less,” says Pekka. 

## Building for Global Scale

As Celonis continued to grow their customer base and expand their global presence, they used [Netlify’s High-Performance Edge Network](https://www.netlify.com/enterprise/) to ensure their site was fast and responsive for users around the world. This was a critical part of Celonis’ growth as a company.

“The big journey that we've been on over the past year has been around how we scale the ability to deliver content on the website in a massive way,” said Brandon Ortiz, Vice President of Content Marketing at Celonis. “We have triple digit growth in our company. So, we’re very much moving from a startup to an enterprise-grade technology company.” 

Behind that company growth, there was a team of Celonis developers and marketers working on critically important tools to drive that success and double down on the benefits of switching to Netlify. 

### Challenges

Scaling website production to the degree Celonis achieved isn’t just a matter of optimizing systems. It also means building the best possible experience for the people who are using those systems. At Celonis, that would be the marketing team publishing content to their site. 

Before shipping their latest Contentful and Netlify integration, Celonis’ marketing team didn’t have the ability to publish pages themselves. 

“Before, the process for getting a new webpage on the website would be to email Pekka and his team would build it themselves,” said Brandon.  

To eliminate this inbox-bottleneck, Brandon and Pekka massively streamlined the content production process by giving more than 60 people at the company the ability to publish their own content with Netlify and Contentful. 

### Solution

Celonis uses Netlify for both their production and staging environments, making management much easier for the development team. So, when a team member has a new event page, or webinar registration page to publish, they can hit publish from the CMS and see exactly what their site will look like from the safety of a password-protected staging environment. Once they’re ready to send the page to production, they hit publish and Netlify pushes the page to the Celonis website in a flash. This new workflow quickly made an outsized impact on content production. 

Back when they were using WordPress, Celonis had a total of 100 webpages. After launching this new workflow, Celonis now publishes 100 pages a month. 

Website performance also improved for Celonis, with 1.32 seconds to load a single page for example, making it 82.3% faster since moving to Netlify. Its SEO rankings and conversions improved, as Celonis significantly shaved down its time to first byte, from 7s to 270ms.

Celonis saw significant cost savings from its previous WordPress setup. It saved $60K after retiring its off-site page building tools.

“More than 60 people in the company can now deploy pages without intervention, without any communication with the website development team,” said Brandon. “They build in the CMS with pre-built components and then five minutes later, it's live on the website. It was a huge, huge success from virtually every team in the company’s point of view.” 

Under the hood of the newly published pages, is a network of systems Pekka and his team put together to power Celonis’ marketing infrastructure and ensure that the marketing teams are successful. 

One critical tool the website development team uses is Netlify’s A/B split testing feature to compare variants of pages against each other, and pick the better-converting option. This resulted in significant conversion optimization. For example, one of the event registration pages that A/B tested copy and images enabled the team to incrementally boost conversion by more than 2%, leading to more than 100 additional registrations. 

Another critical tool is Netlify’s deploy previews. Instead of reviewing one newly submitted branch locally, installing all of the necessary dependencies, and running a build just to get a glimpse of the site a marketing colleague wants to publish, Pekka can now do all of that with a single click. 

“I can just click on the link to the review build and immediately review my team members’ work in a browser environment which is identical to production. That's super valuable and time saving,” said Pekka. 

It’s a good thing that Pekka, Brandon, and the respective teams they serve had some extra time on their hands. Right after successfully optimizing Celonis’ website, Brandon and Pekka had a new challenge — bringing together Celonis’ yearly conference, Celosphere. But this time it would be a virtual event, and they had just a few days. 

### Results

In early 2020, the COVID-19 pandemic started to spread globally. Celonis worked quickly to build products to serve its users most affected by the fallout, shipping new pages advising companies on how to best rethink their supply chains. 

“This just wouldn’t have been possible before,” said Brandon. “In just a few days, we made a bunch of new pages and assets to promote those solutions.” 

In addition to shifting their focus to serve customers affected by the crisis, Celonis also realized they would have to shift their annual user conference to a virtual venue.  

The obvious concern was being able support what would likely be unprecedented traffic to Celonis’ site, while delivering a crystal clear livestream of conference content. Using Netlify and Vimeo’s livestream feature, Pekka and Brandon were able to kickoff Celosphere without a hitch, even while supporting four times Celonis’ average site traffic. 

Celonis was expecting an attendance of 2,000 for their in-person event. They logged an attendance of 18,000 for their virtual event, hosting all the traffic on Netlify’s global platform. The team was empowered to expand their site to handle this new opportunity, all with the same single integrated workflow on Netlify. 

“We were very happy to have Netlify there. We were confident going into that gigantic and hugely important event to our business that we could handle the extra load that we would see on the website,” said Brandon. “It was a runaway success being able to get that many people to a virtual event.”

While Celonis’ Netlify and Contentful architecture is only about a year old, it has been quite a year for the company and the site itself. But, Brandon, Pekka, and their teams aren’t resting on their laurels. They’re investing the time they’ve saved from implementing new website architecture and processes. And, true to their process mining pedigree, they’re using that time to find new areas they can improve.

- - -

### Learn more to optimize your web strategy:

- [Building and deploying WordPress sites](https://www.netlify.com/with/wordpress/) using a modern [Jamstack](https://www.netlify.com/jamstack/) approach, on Netlify’s all-in-one platform for web development.

- Have a project in mind? One of our experts would love to [talk with you](https://www.netlify.com/enterprise/contact/) about the use-case and requirements.