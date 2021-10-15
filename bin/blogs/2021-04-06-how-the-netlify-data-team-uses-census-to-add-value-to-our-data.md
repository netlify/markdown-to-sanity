---
title: How the Netlify Data Team Uses Census for Operational Analytics
description: Learn how Netlify's data team adds value to existing data by
  syncing data with third-party marketing & sales tools using Census.
authors:
  - Adam Stone
date: 2021-04-08
lastmod: 2021-04-06
topics:
  - tutorials
tags:
  - Data
  - etl
  - engineering
related posts:
  - From semantic CSS to Tailwind - Refactoring the Netlify UI codebase
  - Shipping Node.js at Netlify
tweet: ""
format: blog
seo:
  metatitle: Netlify's data team uses Mode, Census, and dbt for data pipelining
  metadescription: Learn how Netlify's data team adds value to existing data by
    syncing data with third-party marketing & sales tools using Census

---
Every day, thousands of developers deploy websites using Netlify, which translates into millions of visitors and page views. That means billions of data points stream into our data warehouse daily, and we do a lot of sifting through our data to monitor what’s going on.

But instead of just using data to tell us what’s going on, which is always valuable in itself, what if we could add more value by making our data work for us too?

For example, we collect information on when new developers deploy their first site. We celebrate this part of each user’s web development journey! It’s great to track this data point, but we could add value by using that data point to target those new users and share additional resources to support them on their web dev journey.

But how? Traditionally, it’s been hard getting this type of data out of data warehouses and into other SaaS tools, such as HubSpot or Salesforce which we use for communications and sales. Often you need engineers to build data pipelines to move this data using cloud storage and API endpoints, and when you add pipeline monitoring, error handling, and constantly changing project requirements, it all adds up to a lot of engineering overhead quickly!

That’s why we partnered with [Census](http://www.getcensus.com) to automate this part of our data stack [often called “reverse ETL” or “operational analytics”](https://medium.com/memory-leak/reverse-etl-a-primer-4e6694dcc7fb). Using Census, we set up syncs that pointed to a table on our data warehouse, and to an object in our destination SaaS service. Once we selected the fields in our destination that we wanted to update, then picked a frequency (syncs can run anywhere from continuously to once a week), that was it. Census took it from there and now we have up-to-date user information streaming into our other tools, and we can set up automated workflows off those streamed data points. That means new developers now get an email from us when they deploy their first site!

While setting up Census, we tried a few different approaches and decided on a consistent way to set up syncs:

1. To reduce load on all sides, we decided that for every destination object we wanted to update, we should have exactly one sync that is pulling from exactly one table (modelled using [dbt](http://www.getdbt.com/)) in our data warehouse. That means if you’re updating multiple fields on a HubSpot contact object, these all should be handled by one sync pulling from one table in your data warehouse.
2. In this example, we named this table `pub_hubspot_contacts` to indicate it’s a publishing table, intended for HubSpot’s contact object.
3. We also leveraged dbt Exposures to group together all tables being synced to a single destination--this lets us easily monitor and test these tables in one step.

![Netlify Data Team's data pipeline](/img/blog/drawing-how-we-use-census-at-netlify.png "How Netlify uses Census to sync operational data to third-party tools")

Even though we kick off our production run a few times per day, we’ve set our syncs to run hourly! Census’s pricing model is based on number of connectors, not number of syncs, so we find an hourly approach to be robust in situations where we can’t always be sure when our production run ends. This approach means our destination services will always have updated data within an hour after our production run finishes, and will still hold even if we ramp up frequency or have multiple job schedules.

We think Census is great and look forward to building out more syncs, which will unlock more automated workflows--all of which means our data not only tells us things, but also generates new value by working for us too!
