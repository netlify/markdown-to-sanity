---
title: Announcing Netlify Log Drains for Datadog
description: Announcing Netlify’s latest enterprise-level observability solution
  geared towards unlocking complex application monitoring and troubleshooting
  use cases.
authors:
  - Matt Rinehart
date: 2021-09-08
lastmod: 2021-08-31
topics:
  - news
tags:
  - Datadog
  - Integrations
  - Product
  - observability
  - log drains
tweet: ""
format: blog
relatedposts:
  - Usability improvements for Netlify Function logs
  - Linkable log lines now available!
seo:
  metatitle: Netlify’s Traffic and Function Log Drains for Datadog
  metadescription: Announcing Netlify’s latest enterprise-level observability
    solution geared towards unlocking complex application monitoring and
    troubleshooting use cases.
  ogimage: /v3/img/blog/netlify-datadog-og.png
---
As the adoption of Jamstack architecture goes mainstream in enterprises worldwide, there’s a growing need to centralize application management using the tools that are already in place.

That’s why today, we’re incredibly excited to announce Log Drains for the [Netlify Enterprise plan](https://www.netlify.com/enterprise/), providing analysis, alerting, and data persistence for Netlify traffic and serverless functions logs through Datadog. [Datadog](https://www.netlify.com/technology-partners/datadog) is the first of many integrations with log management solutions that we plan to announce over the coming months.

![](/v3/img/blog/datadog-netlify1.png)

Log data has always been stored with Netlify and available to review through the Netlify UI. In fact, we recently shipped some [usability improvements](https://www.netlify.com/blog/2021/05/05/usability-improvements-for-netlify-function-logs/) to the UI logging experience. But, while this is great for getting instant feedback and troubleshooting issues, there are quite a few advanced use cases that require a dedicated application management solution.

This includes use cases like:

* Custom application monitoring dashboards
* Near-real-time notifications and alerting
* User agent analytics and troubleshooting
* Session tracking to understand user activity and journeys across these sites
* Granular requests showing the HTTP 4xx and 5xx errors
* Serverless function invocation information and performance monitoring
* Detecting anomalies in visitor activity including traffic from bots and bad actors to enable  security and compliance engineers to proactively defend their sites
* Need for longer log retention for month-over-month comparisons and cold storage

Most enterprises already have existing tools that can support these use cases—tools used for monitoring workloads running outside of Netlify.  It’s important that you can use these same tools to monitor the traffic and [serverless functions](https://www.netlify.com/products/functions/) for your Netlify-based websites and applications.

This is now possible with Log Drains if you’re using Datadog. If you’re on a Netlify Enterprise plan, just head over to the settings menu in the Netlify UI and select Log Drains on the left to get started.

<p style="text-align:center"><a href="https://www.netlify.com/enterprise/" class="button">Explore Netlify Enterprise</a></p>



![Datadog Netlify log drain UI image](/v3/img/blog/datadog-netlify-ui-2.png)

## Connecting the Dots

With Netlify Log Drains, you can select to export Traffic logs, Function logs, or both in near real-time to your Datadog Log Management service.

Netlify’s traffic logs will provide valuable request data from our Edge network logs, including the type, size, duration, and response of requests. These logs will also include useful insight into your users and their journey on your site that can be used to improve their overall experience.

![](/v3/img/blog/datadog-netlify3.png)

Netlify’s Serverless Function logs will provide information about your site’s Function invocations, including the name, type, status, and detailed log message output so that you can monitor, troubleshoot, and fine-tune your Functions.

![](/v3/img/blog/netlify-datadog-4.png)

## Datadog Integration

As a leader in application monitoring, Datadog consolidates metrics, traces, logs, and more, helping organizations scale their cloud environments, troubleshoot potential issues, and provide their customers with excellent digital experiences.

Netlify’s Datadog integration uses Netlify’s new Log Drains functionality, allowing all web traffic and serverless functions logs to be sent to Datadog for deeper review and longer retention.

![](/v3/img/blog/netlify-datadog-ui-7.png)

Through this integration, you will be able to process Netlify logs through Datadog’s field mapping pipeline to extract meaningful information and common attributes that can be reused as facets to better organize and search your logs.

## What’s Next

As part of our efforts to continue to build out our application monitoring solutions, we have more in the works for the Log Drains feature. Some items to watch for in the coming months include additional log output integration options and additional exportable log types.

Most importantly, we want to hear about your observability and application monitoring needs. Please contact us through our [forums](https://answers.netlify.com/t/netlify-log-drains-for-datadog-feedback-thread/43336), [support channels](https://www.netlify.com/support/), our Twitter account [@Netlify](https://twitter.com/netlify), or fill out [this short survey](https://netlify.qualtrics.com/jfe/form/SV_0Uo6JQy012LPrhQ) and share your thoughts with us today!

Head over to [our docs](https://docs.netlify.com/monitor-sites/log-drains/) to read more about the data provided within the Traffic and Function logs and details on how to set up your first log drain from Netlify to Datadog. If you're ready to get started with Netlify Log Drains, contact us about Enterprise plans today. 

<p style="text-align:center"><a href="https://www.netlify.com/enterprise/" class="button">Learn More About Netlify Enterprise</a></p>