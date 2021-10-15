---
title: Introducing cancelable deploys
description: >-
  Announcing the ability to cancel any of your active builds from the Netlify
  admin UI with a couple of clicks.
authors:
  - Phil Hawksworth
date: '2019-06-04'
topics:
  - news
tags:
  - CI
  - Admin
  - Features
tweet: ''
format: blog
---
One advantage of Netlify's atomic deployment model, is that you can be confident that your builds will never be deployed to Netlify Edge (our [Application Delivery Network](https://www.netlify.com/products/edge/)) in an incomplete or partial state. If a build fails, it won't impact your live site. But it is not impossible for you to attempt a build in Netlify which either runs slowly or hangs until it times-out.

It would be useful to be able to cancel a build that you notice is having a problem. For some, the lack of that ability was frustrating, and [you let us know on Twitter](https://twitter.com/search?q=netlify%20cancel%20deploy&src=typd) and [in the community](https://community.netlify.com/t/feature-requests-what-do-you-already-love-what-could-be-better/) that this felt like a missing feature. 

You were right. And we heard you.

Today, we are delighted to announce that you’ll now be able to cancel any of your active builds from the Netlify admin UI with a couple of clicks.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RAatuLuCKSg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

We hope that you won’t need this option. But should one of your builds experience a problem, it’s good to know that you’ll be able to take the decision to terminate it and initiate a new build without delay, and without **eating into your [allowance for concurrent builds](https://www.netlify.com/pricing#features)**.

Thank you to all of you who suggested this feature. The insights that come from your regular use of the Netlify platform are valuable to us and we welcome your comments and suggestions.

If you have more thoughts about how we can keep making Netlify better, please help us to do just that by [making suggestions](https://community.netlify.com/t/feature-requests-what-do-you-already-love-what-could-be-better/), or joining the conversations in our [community](https://community.netlify.com/).
