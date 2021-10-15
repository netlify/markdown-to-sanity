---
title: Pan Macmillan Sees 25 Percent Conversion Increase After Migrating to Netlify
description: Pan Macmillan moved to Netlify to adopt the Jamstack. This improved
  site speed by 8x, improved SEO rankings, and enabled the team to ship new
  content and changes instantly.
authors:
  - Netlify
date: 2021-04-13
lastmod: 2021-04-13
topics:
  - case-studies
tags:
  - case studies
  - performance
  - jamstack
  - headless
tweet: ""
format: blog
relatedposts:
  - Spring uses Netlify to Scale Social Commerce and Boost Conversion for
    Creators
  - Smashing Magazine just got 10x faster
seo:
  metatitle: Pan Macmillan Sees 25% Conversion Increase After Migrating to Netlify
  metadescription: Pan Macmillan moved to Netlify to adopt the Jamstack. This
    improved site speed by 8x, improved SEO rankings, and enabled them to ship
    new content and changes instantly.
  ogimage: /img/blog/og-netlify-pan-macmillan.png
---
Pan Macmillan is world-renowned for the books they’ve published, from *Alice in Wonderland* to *American Psycho*. But recently, their business has relied upon an additional kind of writing: content marketing. Take a look at their 2 web properties and you’ll discover interviews and articles written for book readers, each with the goal of bringing search traffic to Pan Macmillan sites.

![Pan Macmillan books](/img/blog/pan-macmillan-instagram-1.png "Pan Macmillan books")

However, search traffic doesn’t always reward high-quality writing. Without fast load times, content quickly falls in Google’s search results. And without a simple way to publish, edit and update content, you can lose your audience, or worse, start to fall in search rankings.

Tasked with improving discoverability and engagement metrics, the technology team at Pan Macmillan sought to optimize their legacy .NET CMS using Netlify to adopt a modern [Jamstack](https://www.netlify.com/jamstack/) architecture. This change has dramatically improved site speed by 8x, improved SEO rankings, and enabled their team to ship new content and changes instantly.

## The Challenge: Build Performant Sites, on a Budget

The team had a hefty job in front of them: 10,000 pages of content to audit and modernize. In addition to hosting their online catalog, Pan Macmillan sites prominently feature evergreen content marketing as well as news about books, authors, and events they host. Performance wasn’t the only must-have; Pan Macmillan needed their new solution to scale with ease. Their web traffic spikes drastically with interest and demand--when an author is nominated for a prize, or a new Netflix adaptation of a book comes out--and sites need to handle that traffic with no downtime and superior performance to get readers the content they seek fast.

But the biggest criteria of all in the migration was **budget**. After spending down their limited resources and agency hours optimizing their legacy CMS and AMP implementation, it became clear that they would need to find a more efficient solution that helped deliver more value across the board, within budget while better empowering their small in-house team. Technology director James Luscombe says that when they investigated the options, “the writing was on the wall” when it came to Jamstack sites.

> “The move to the Jamstack was about speed, accessibility, and taking the worry out of deployment.”
>
> \- James Luscombe, technology director, Pan Macmillan

In addition to cost-savings, other reasons why James wanted to move to the Jamstack included:

* **Agile development:** Working with a Jamstack application, they were able to leverage a Git-centric workflow to enable easy rollbacks and improve time to market with new products and features.
* **Strong Jamstack ecosystem:** With a ready-built and easy-to-use [developer workflow](https://www.netlify.com/products/workflow/) provided by Netlify, their small team didn’t have to worry about building a Jamstack architecture from the ground up.

## Streamlined workflows and 8x site performance lead to more conversions

Pan Macmillan’s migration began with a small pilot. James’ team developed a website for Macmillan Children’s Books (a publisher under the Pan Macmillan umbrella) to promote books internationally using the Gatsby React-based framework and Netlify Jamstack platform. With the help of their development agency, they were able to turn it around in just a couple of weeks. The ROI of that initial Jamstack site quickly proved to be high, as the team was able to offer new audio files for multiple markets as they became available. Previously, the team would have had to wait for a quarterly release to get the new content live.

One important lesson they learned in the pilot: James’ team would need to take advantage of the increased velocity of [high-performance builds from Netlify](https://www.netlify.com/enterprise/) in order to best collaborate with the content team. When moving to [Jamstack sites](https://www.netlify.com/blog/2020/04/14/what-is-a-static-site-generator-and-3-ways-to-find-the-best-one/) in general users need to wait for each change to build so the site can be pre-built in advance, and in turn, enable faster sites and a better experience for web visitors. The content creators make a lot of small content changes and are very used to seeing a preview of their content immediately, not waiting for a build. Faster builds helped improve the content and development team workflow to make updates fast. With this lesson and a successful MVP in hand, James and the team were ready to move the rest of their properties to Netlify.

Here are some other major differences they’ve seen since undertaking the migration:

### 1. Simple workflows improve development speed

On a small team, silos and workflow dependencies aren’t an option. Pan Macmillan found that their new **Jamstack architecture empowers all teams** to work better, from the developers (both in-house and agency), to the content creators, to the digital team.

> “The ease of use of Jamstack and headless have been an absolute game-changer.”

The team is no longer fearful of a spike in traffic or of a deploy that needs undoing. In fact, the migration has enabled them to go fully agile. James and his team can do bug fixes on their own, and now, instead of deploying once a quarter, they deploy every other week. That’s a 650% increase in their deployment agility. As James puts it, “The fact that we could kind of build stuff very quickly on the fly is amazing because it just meant that we weren't waiting for our developers or a service to be spun up.”

And though it’s hard to break the habit of never releasing on a Friday, they now have the confidence to do so when necessary.

### 2. Netlify approach has cut costs significantly

Prior to migrating to the Jamstack, Pan Macmillan frequently needed to turn to their development agency for things like:

* Yearly upgrades and hot fixes to Kentico CMS
* Azure maintenance
* Backups and rollbacks
* Quarterly deployments

The move to Netlify has given Pan Macmillan the ability to do much of that work in-house, as the workflows are so much simpler. With a better workflow and therefore fewer development hours, James has reduced his budget by 20% on site maintenance alone.

> “Netlify was the obvious hosting partner in terms of cost-effectiveness…I’ve halved my Azure bill.”

Reduced time spent by their agency to maintain their legacy stack was just the beginning of the cost savings. Netlify has significantly reduced Pan Macmillan’s hosting costs. After the full migration, their monthly Azure bill was cut in half thanks to embracing a modern serverless architecture.

### 3. Blazing-fast sites have led to better engagement metrics

In addition to the workflow improvements, added security, and uptime guarantees, Pan Macmillan has seen a massive improvement in their site speed and conversion rates. In fact:

* Their sites are loading, on average **8x faster** than before they adopted the Jamstack approach.
* The improved site speed has had real effects on Pan Macmillan’s bottom line. **Without making any UX changes, they’ve seen a 25% increase in clicks to retailers**, with better conversion rates.
* They’ve also experienced SEO improvements with a **29% increase in SEO traffic**, a **50% decrease in bounce rate**, and improved time on site.

Internally, the site is having an effect as well. By using a serverless function on Netlify, search on the site has improved a lot, and has actually replaced the internal company tool--a bibliographic database--since now people just use the website. What’s more: internal complaints about the website have dropped off to 0. The web team at Pan Macmillan operates in service of the company’s mission to bring books to readers. As such, keeping people across the business happy is incredibly important, and the Jamstack has helped them deliver on that.

## What’s Next for Pan Macmillan’s Technical Team?

There’s one other unexpected benefit: everyone involved really likes using the Jamstack. As James says, *“Happy developers make my life easier.”* Between the workflow changes internally, with the development agency, and the content team, the team is happy with the work they’ve done so far, and is excited about what’s to come. Now they are able to easily manage and scale their web projects with two in-house developers.

As James said, “We’ve done the hard work. We want to do the cool stuff now.” Now that the migration is over, Pan Macmillan is looking at a big UX project coming up and will use Netlify’s A/B testing capabilities. They’re satisfied with the bottom-line metrics that have changed even without UX changes and are excited to keep iterating to make their content-as-a-service operation even smoother.

___

**Have a project in mind? One of our experts would love to [talk with you](https://www.netlify.com/enterprise/contact/) about the use case and requirements.**
