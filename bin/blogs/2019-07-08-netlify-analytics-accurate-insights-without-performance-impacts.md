---
title: Netlify Analytics - Accurate insights without performance impacts
description: >-
  Announcing Netlify Analytic - bringing you insights gathered directly from our
  servers, with no configuration or additional code required.
authors:
  - Phil Hawksworth
date: '2019-07-10'
lastmod: 2020-08-03
relatedposts:
  - Netlify Milestones on the road to 1 Million Devs
topics:
  - news
tags:
  - Product
  - Analytics
  - Features
tweet: ''
format: blog
---
![Wavy illustration](/v3/img/blog/analytics-blog-post-2x.png)

Site analytics bring the ability to understand what content on your site is popular, where traffic comes from, and how many visitors you are serving. It is an important capability for those wanting to measure and improve their sites to perform better.

Today, we are delighted to introduce [Netlify Analytics](/products/analytics), which brings you insights gathered directly from our servers, with no configuration or additional code required.

Since Netlify Analytics is driven directly from the genuine source of truth — the HTTP requests to our [Application Delivery Network](/products/edge) (ADN) which serves your site traffic — it does not require any client-side JavaScript or need to allow third party access to your data. Everything is managed anonymously right within Netlify keeping you [GDPR compliant](/gdpr-ccpa) and free from the performance impacts that client-side JavaScript can sometimes bring.

## Accuracy without the overheads

Unlike popular client-side analytics solutions, [Netlify Analytics](/products/analytics) runs entirely server-side. This means that it is not impacted by ad blockers or JavaScript support. Every single request is measured. No sampling. So we can offer greater accuracy. Nor can it impact the speed of your site as no potentially impactful third party JavaScript need be included. 

![Illustration - Simple analytics chart](/v3/img/blog/analytics-blog-post-2-2x.png)

Watching the HTTP requests server-side also lets you track 404 errors to give valuable insight into where your visitors might be falling off your happy path. And although [Netlify Analytics](/products/analytics) runs server-side, you needn’t worry about implementing or maintaining software or configuration yourself. We handle all of that for you on our infrastructure. 

All you need to do is enable it.

## Simple Visualisations

Updated on an hourly basis, your Netlify Analytics dashboard has beautifully simple and easy to comprehend visualisations of your site analytics for the last 30 days of data. You’ll also now have something else that many had been asking for — better visibility of your bandwidth quota usage, which can now be seen per site.

![](/v3/img/blog/analytics-blog-post-4-2x.png)

## Start measuring now

Netlify Analytics is available now as a per-site add-on with [any of our account plans](/pricing). Priced at $9 per month, per site, you can enable it directly from the [dashboard of any of your sites](https://app.netlify.com).

## Watch the announcement

The release of this feature was performed live on stage at [JAMstack_conf in London](https://2019.jamstackconf.com/london) by Matt Biilmann. You can watch the announcement and the launch in this short video.


<iframe width="560" height="315" src="https://www.youtube.com/embed/jMo0oQwTVak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We hope you love this new feature. And we welcome hearing about how you are using it and how you would like to see it evolve over time in the [Netlify Community](https://community.netlify.com/t/netlify-analytics-released/1968).

---

_This post has been featured on **[Netlify Milestones on the road to 1 Million Devs](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#launched-netlify-analytics-from-jamstack-conf-london)**_:

[![Netlify 1 Million Devs article feature](/v3/img/blog/featured-on-1-million-devs-banner.png)](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#launched-netlify-analytics-from-jamstack-conf-london)