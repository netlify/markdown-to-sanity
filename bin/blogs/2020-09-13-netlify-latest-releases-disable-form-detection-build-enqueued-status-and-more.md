---
title: Netlify releases to help you optimize deploy time, understand build
  states, and more
description: Netlify has released the ability to disable forms, a new build
  enqueued status, and build cycle usage visibility updates!
authors:
  - Cassidy Williams
date: 2020-09-17
lastmod: 2020-09-17
topics:
  - news
tags:
  - forms
tweet: ""
format: blog
relatedposts:
  - Add a Netlify-powered contact form to your Next.js site
seo:
  metatitle: "Netlify releases to help you optimize deploy time, understand build states, and more"
  metadescription: Check out the latest Netlify releases that include the ability
    to disable forms, a new build enqueued status, and build cycle usage
    visibility updates. Learn more here!
  ogimage: /img/blog/image-2-.png
---
We have some new features heading your way to make your site maintenance a little easier! 

## Disable form detection

If you don't plan on including [Netlify-enabled forms](https://url.netlify.app/rJn8PXs4P) on your sites, you can now disable form detection! Form detection is fast (and doesn't count toward your build minutes), but if you aren't using them, this is a quick way to increase your deploy speed. 

If you head over to your site's settings (under **Settings > Build & deploy > Post processing > Form detection**), you'll see your ability to disable form detection:

![Form detection](/img/blog/formdetect.png "Form detection")

Form detection is enabled by default, but you might want to disable it if your site doesn't have any forms to detect, or if you aren't using Netlify to manage the forms you do have. In those cases, if you do disable form detection, your post processing will be reduced, and your deploys may speed up, as well!

[Check out the docs](https://url.netlify.com/HJTDK7iVv) for more information on how to disable form detection.

## Clearer build statuses

Now you have more clarity into your build queue status! Normally when you were waiting for your site to build, you'd see the word, "Building" and that was it.  Now, there's some new statuses on your builds to clear things up.

Let's say that you want to trigger a brand new build. Before, you had an "Enqueued" status, and then you'd wait for things to get started. Now, we have a "New" label meaning that it's in a scheduled state.

When your team's build capacity is full, additional builds will wait in your team queue and labeled as "Enqueued: Awaiting Capacity" on your team's Builds page!

Sometimes, a build machine needs to be started up to run a new build. We now give visibility into that, so you'll see the "Starting Up" label before you see the "Building" state!

![Build statuses](/img/blog/enqueued.png "Build statuses")

## Added bonus: Last build cycle usage visibility

This is a small UI update we think you'll love! Before this update (and now), if you want to find out about your [current build minutes usage](https://docs.netlify.com/accounts-and-billing/billing/#builds-usage), you can check your team Billing page. Also, if you want further details and [historical insights into usage patterns](https://docs.netlify.com/monitor-sites/monitor-builds/#historical-insights), you can view more on your team's Builds page.

We thought you might want a little more than that! If you're curious about exactly how many build minutes you used in your last billing period, we added that to the top of your team's Builds page. Now you can easily track how you're doing compared to your previous month.

![Netlify Build Minutes used last period](/img/blog/buildmins.png "Minutes used last period")

## Woo hoo!

Are you as hyped as we are? We hope so. If you have any questions, head on over to our [Community forums](https://community.netlify.com/?utm_source=blog&utm_medium=community-cs&utm_campaign=devex).

Now go get building!
