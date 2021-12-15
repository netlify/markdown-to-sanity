---
title: Announcing Faster Deploys for Large Sites
description: >-
  With up to 2x faster deploys for large sites, you can bring larger scale
  projects to the JAMstack and Netlify without worrying about the time it takes
  to deploy updates to your site.
authors:
  - Ryan Neal
date: '2020-03-25'
lastmod: '2020-03-25'
topics:
  - news
tweet: ''
format: blog
seo:
  metatitle: Announcing Faster Deploys for Large Sites
  metadescription: >-
    Check out how you can get up to 2x faster deploys for large sites. Iterate faster on your
    site and web app, quickly respond to minor requests, and rollback changes in
    an instant with Netlify.
  ogimage: /v3/img/blog/faster-deploys-netlify-large-sites.png
---
![Announcing Faster Deploys for Large Sites on Netlify](/v3/img/blog/faster-deploys-netlify-large-sites-no-cta.png)

We’ve sped up our [Build pipeline](https://www.netlify.com/products/build/), and large site deployments on Netlify are nearly 2x faster! Deploys have always been super fast for sites containing a few hundred or even 1,000 files, but deploy time could be a blocker for JAMstack sites when reaching 10,000 files and beyond.

So go ahead. Deploy your large, fast-growing web projects to Netlify with no need to worry about timing out. We can easily handle the scale, whether it’s a complex global enterprise site, a content-heavy application, or a fast-moving open source project.

And stay tuned! We’re making even more improvements to supercharge deploys in our [High-Performance Builds](https://www.netlify.com/enterprise/) offering that are coming soon.

As we've rolled out the faster deploy architecture to every Netlify account, we've been measuring the performance improvements in production. Here are the early results.

![99th percentile deploy time improvements chart](/v3/img/blog/99th-percentile-deploy-time-improvements-chart.png)

To get to these numbers we grouped our deployments into 5 typical sizes of sites deployed on Netlify and then compared how long it took to complete the deploy before and after our improvements. This graph shows the size of the speed gains for each group, using the 99th percentile of deploy times as our metric. We use the 99th percentile to measure this as performance matters most in the worst-case scenario. The more files in your site, the bigger the improvement seen with these changes.

Whether you're a current user or [trying Netlify for the first time](https://app.netlify.com/signup), this faster deploy functionality is automatically enabled. There’s nothing to configure or change in your Netlify dashboard. You should already see more predictable builds, faster deploys, and more efficient use of build minutes. Manual or large media deploys are not yet supported but this is in our roadmap.

To reduce the time for deploys, we rearchitected our builds to shift the heaviest load operations to the end and deduplicate efforts. We not only expanded our ability to handle massive scale and concurrency, but we also matured our testing and observability through the development process.

Rest assured, as we dial up the speed of our Build pipeline, we’ve also been investing in the stability and reliability of our infrastructure. Your sites will run on Netlify’s multi-cloud, global Application Delivery Network, with a 99.99% SLA when you choose the [High-Performance Application Delivery Network](https://www.netlify.com/enterprise/).

With faster deploys, you can iterate faster on your site and web app, quickly respond to minor requests, and, when you need to, rollback changes in an instant.
