---
title: How LiveChat Migrated from WordPress to the Jamstack with Netlify
description: Learn about how Jamstack and Netlify gives LiveChat’s web
  development team powerful tools to build, ship, and iterate sites, without
  sacrificing control.
authors:
  - Netlify
date: 2020-07-08
lastmod: 2020-07-08
topics:
  - case-studies
tags:
  - Jamstack
  - WordPress
tweet: How LiveChat Migrated From WordPress to the Jamstack with Netlify
format: blog
relatedposts:
  - How TunnelBear Streamlines DevOps and Speeds up Deploys by 10x with Netlify
  - How CNCF enables community-sourced ecosystem map with Netlify deploy previews
seo:
  metatitle: See How LiveChat Migrated From WordPress to the Jamstack with Netlify
  metadescription: "Learn how the Jamstack and Netlify gives LiveChat’s web development team powerful tools. Adopting Netlify streamlined LiveChat&#x27;s workflow and made their sites more performant, secure, and reliable."
  ogimage: /v3/img/blog/og-livechat-netlify-blog.png
---
LiveChat doesn’t like to leave their customers waiting. Their suite of SaaS-based communication tools help companies from Adobe, to PayPal, to ING Bank serve customers across channels and around the clock. So, when it comes to LiveChat’s own site performance, every second counts. 

![LiveChat logo](/v3/img/blog/logo_rgb_orange.png)

## Challenges

[LiveChat](https://www.livechat.com/) was quickly outgrowing the WordPress platform. Those growing pains were costing the company valuable developer time. So, in 2017, LiveChat took their first steps towards a migration to the [Jamstack](https://www.netlify.com/jamstack/), a modern web architecture for building faster, safer, and more scalable websites. Now, using Netlify and the Jamstack, LiveChat can deliver users the site experience they’ve always wanted. LiveChat’s web developers are free to build the user experiences they imagined, while their core developers can focus solely on LiveChat’s product suite. 

### Switching from WordPress to Jamstack

Back in 2017, Dawid Gawel, a senior web developer at LiveChat, saw an [article in Smashing Magazine](https://www.smashingmagazine.com/2017/03/a-little-surprise-is-waiting-for-you-here/) that caught his eye. Smashing Magazine, a pillar in the web design and developer world, was switching from WordPress to the Jamstack and running on Netlify’s Application Delivery Network (ADN), which is distributed just like a CDN, but with advanced functionality for publishing entire sites and applications. After the switch, they published the results of the migration. 

In the article, editor-in-chief, Vitaly Friedman writes that the migration gave his team the ability “to define a smashing experience from scratch and implement it from very start to finish.” Dawid knew that this new architecture was worth testing out. 

LiveChat’s system administrators were spending cycles supporting and fixing WordPress-based marketing pages. Plugin ecosystem security concerns, caching challenges and managing dedicated databases were taking away from the time these developers would normally devote to building and improving LiveChat’s core product suite. The Jamstack and Netlify presented an opportunity to get that time back, and reinvest it in the business.  

After successfully moving a few pages to the Jamstack, LiveChat’s web development team felt confident in ramping up the scale of their experiments. “The experiments were a sandbox for many of our technological ideas, both backend and frontend,” said Dawid. “I knew this is the right direction for our marketing websites.”

## Solution

In the early days, the company’s flagship web property, [LiveChat.com](https://www.livechat.com/), was too big, and too mission critical to be subject to a migration test. So, LiveChat’s team of developers started moving a few smaller web properties to the Jamstack and Netlify, and then ramped up iteratively. 

“When we started using Netlify, something bigger and deeper happened. We changed the way we collaborate. We, and by we I mean developers, designers, marketers, and content specialists,” says Dawid. 

### Empowering Teams to Work More Efficiently

Netlify and the Jamstack gave LiveChat’s various teams the ability to work independently, while staying connected. When LiveChat was using WordPress, their teams were left waiting on another for the deliverables needed to complete a project. 

“Before Netlify, we had a kind of waterfall project where the content writer who wrote the content, passes it to the designer. Then the designer passes it to the developer, and then we do QA,” said Dawid. “Now, we have deploy previews, automated builds, instant roll back and all that Netlify provides. We try to integrate as soon as possible. And, we share the deploy preview link with our whole team to build their browser prototype in the whole site context as fast as possible. Then we iterate over it. Not only has our process been streamlined, but the quality of our work has improved.” 

### Taking Control of Website Performance and Function

Netlify gives LiveChat’s web development team powerful tools to build, ship, and iterate sites, without sacrificing control. LiveChat’s developers now publish their code to GitHub, where Netlify listens for new commits, and deploys those changes to production. The web dev team even built dynamic functions within static sites, by integrating Lambda functions that are version controlled and live alongside the website's static code in a repo. 

LiveChat’s developers have granular visibility into each website’s DNA. Static sites give LiveChat the confidence to build ideas into reality, and fast. 

### Improved Performance and Uptime

Adopting Netlify didn't just streamline LiveChat's workflow, it made the sites they produce faster. In the past year, LiveChat logged 99.99% uptime on Netlify. In addition to deploying with confidence, they no longer have to build bespoke systems to guide WordPress' behavior and deliver the user experience they had in mind. 

LiveChat's team of developers had optimized their WordPress build to perform as best as it could. But, they could only do so much within WordPress itself as they were scaling rapidly as a company. "It took us a long time and a lot of effort," said Dawid. 

## Results

Using [Netlify's Edge Network](https://www.netlify.com/products/edge/), coupled with static-sites, LiveChat's suite of Jamstack-powered pages are reliable and lightning fast. "There's no hidden logic on the server, so that was very promising in terms of uptime," says Dawid. 

Now LiveChat can build custom implementations and processes they couldn’t before. For example, [Success by LiveChat](https://www.livechat.com/success/) runs on a headless WordPress CMS. When a LiveChat team member schedules or publishes a post, LiveChat uses Hugo to publish a static version of the whole site to Netlify’s ADN. This is all automated, so the LiveChat marketing team can publish independently and at their own pace. 

LiveChat doesn’t just run Netlify-powered websites. Developers that build upon the [LiveChat Platform](https://developers.livechat.com/) and want to publish their app in Marketplace are encouraged to use Netlify as a complete build and deploy solution. Thanks to that, LiveChat customers can install apps and extensions seamlessly to do anything from adding a few choice [GIFs](https://www.livechat.com/marketplace/apps/tenor-gif-keyboard/) to a customer conversation, to integrating [LiveChat into HelpDesk](https://www.livechat.com/marketplace/apps/helpdesk/).

The Marketplace itself was also an object of migration to Jamstack and it is now powered by Gatsby.

To serve their network of partners and experts, [LiveChat](https://partners.livechat.com/) uses Netlify to let them track the usage and success of their campaigns using an Angular-based dashboard. 

“For me, Jamstack is kind of a minimalistic approach. You get rid of everything that’s unnecessary so you can focus on things that matter most to you.” 

For LiveChat, community matters, too. To give back to the community, LiveChat sponsors a local Wroclaw Jamstack meetup where fellow developers can learn from each other and share their latest Jamstack projects. 

![LiveChat sponsored Wroclaw Jamstack meetup](/v3/img/blog/jamstack-wroclaw-meetup.jpg)

What started as a small series of site migrations in 2017 culminated in November 2019 when LiveChat brought their flagship site, LiveChat.com, over to Netlify. “Netlify has become a standard tool we use everyday as web developers,” says Dawid. 

Using Netlify and the Jamstack, LiveChat now has more freedom to focus on their 30,000+ customers, their product suite, and above all else—their customers’ experience.

---

Have a project in mind? One of our experts would love to [talk with you](https://www.netlify.com/enterprise/contact/) about the use-case and requirements.