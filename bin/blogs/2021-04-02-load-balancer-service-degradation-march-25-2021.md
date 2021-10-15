---
title: Load Balancer Service Degradation, March 25, 2021
description:
authors:
  - Kaya Winn
date: 2021-04-02T17:00:00.000Z
lastmod: 2021-04-02
topics:
  - news
tweet: ""
format: blog
seo:
  metadescription: ""
  metatitle: Load Balancer Service Degradation, March 25, 2021
excludeFromFeed: true
---
On March 25, 2021, between 14:39 UTC and 18:46 UTC we had a significant outage that caused around 5% of our global traffic to stop being served from one of several load balancers and disrupted service for a portion of our customers.

We understand the impact this has on our customers and apologize for the service interruption. In this post, we'll detail the measures we took to immediately mitigate the incident as well as the improvements we have planned to bring you the best hosting experience.

### What happened

The Google Cloud TCP load balancer affected was used by customers who need a single, static IP address for an A record. This is used when customers do not have their DNS zones hosted in Netlify DNS or when support for CNAME flattening is not available through the customer's DNS provider.

In general, we do not recommend [relying on IP-based A records](https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-a-records/) whenever you're working with services like Netlify, but we understand that with many DNS providers this is the only viable approach and that many other factors can weigh into the choice of DNS provider for any given domain.

At 15:30 UTC we provided alternative IPs for enterprise customers.
At 16:46 UTC supplied an alternate IP to self-serve account level customers.
At 18:46 UTC we restored all traffic remaining on the Google load balancer.

The resolution of this incident was delayed due to a simultaneous cloud provider outage in the same region that initially led us to investigate that impact. On further investigation, the provider outage was determined to be unrelated. Below we describe the timeline of our incident response and investigation of the root cause we identified. We hope this helps our customers better understand the network changes implemented and the steps we are taking to improve the resilience of our systems.

### Timeline

At 14:39 UTC our monitors alerted us that the load balancer health check was failing. We have two kinds of health checks for the load balancer. The first contacts the load balancer IP to connect to a backend node and the second communicates directly with each backend. Over the course of the incident, our node-level health checks continued to suggest the backends were healthy. We observed in our GCP console that the backend nodes were failing the load balancer's health checks but didn't have any more diagnostic information available.

At 14:48 UTC we noticed a banner on the network provider status page which read:

`We are experiencing an issue with L4 load balancers in us-west1-c. Multiple managed services relying on LB and located in this zone might be affected.`

Our load balancer is regional and not zonal and we evaluated the implications the provider outage might have had for our setup. With no further clarifying information, this appeared to signal that the issue was due to a cloud provider outage. Understanding that the provider's resolution time would be lengthy, we then elected to implement mitigations that would restore customer traffic quickly.

We initially considered [Google's global TCP proxy](https://cloud.google.com/load-balancing/docs/tcp) option, however, this was determined not viable as it does not support TCP port 80, which is required to properly serve all customer use cases. We already had an initiative on our roadmap to diverge our load balancers as they were legacy infrastructure that was shared between enterprise and regular traffic. Response to this incident provided the opportunity to implement this roadmap feature and we quickly built two independent load balancers for enterprise and regular traffic.

By 15:30 UTC we had implemented a range of IPs for handling enterprise network traffic and we began contacting impacted customers while continuing to implement the resolution for regular network traffic.

At 15:55 UTC we began to provision a network load balancer in AWS backed by Global Accelerator. We updated our status and support pages with the new IP for this endpoint at 16:46 UTC.

At 18:38 UTC Google support provided us with information that led us to believe the backend nodes had an issue with their virtual IP.

At 18:46 UTC we restarted the GCP networking daemon on all affected nodes (detailed below), which restored traffic to the Google load balancer.

### A bug in the network agent

Google Cloud's TCP load balancer uses Direct Server Return (DSR) to respond to requests. For DSR to work properly, the target backend instance has to be able to respond to traffic using the load balancer IP as the source IP. There are several ways to configure this. GCP relies on a networking agent (`google-guest-agent`) on each backend node that injects the load balancer IP into the local route table. This agent is included as part of the GCP base image that we use to provision the backends.

To keep the operating system patched with the latest security updates, Netlify relies on the operating system's unattended update process. We stagger these updates through our different environments to help identify and isolate potential issues before they reach production. We also randomize the timing of updates in production so that they don't occur on every node at once.

On the day of the incident, an unattended update triggered a restart of the `systemd-networkd` SystemD unit. The `systemd-networkd` restart removed the custom route table entry. The `google-guest-agent` systemd configuration has watchers to react to several network manager units and re-add the load balancer IP when they restart. It does not have a watcher for `systemd-networkd`. As a result, the backend route tables were left without the necessary IP for the duration of the outage.

The load balancer runs its own health check on backend nodes to see if they can serve traffic by responding with the load balancer source IP. As the unattended update triggered in each node, they began to fail this health check and the load balancer stopped sending traffic to them. This occurred over the course of several hours before the outage. Meanwhile, our own health checks contacted the backends via their own IPs and so reported them as healthy. As long as one node was active and there was enough capacity, the load balancer itself could serve traffic. We started dropping customer requests when `systemd-networkd` restarted in the last backend.

### What we're doing to fix this

* We have manually patched the guest-agent systemd config on all our GCP CDN nodes to listen to `systemd-networkd` restarts. We reported this bug to Google and opened an [issue](https://github.com/GoogleCloudPlatform/guest-agent/issues/103) in the google-guest agent repository and as of writing, there is an [open PR with an official fix](https://github.com/GoogleCloudPlatform/guest-agent/pull/104).
* We are expanding our load balancer monitoring to include the load balancer's backend health checks in our alerting. Access to this would have given us more time to diagnose the issue before the outage. We are also adding a canary node to the backend to improve update testing and provide several days to monitor for issues.
* Two improvements have been implemented: decoupling traffic tiers and moving to multi-region stories. This allows us to scale each tier independently, as well as be more resilient to regional incidents. Additionally, more improvements are planned to be rolled out this year to further improve reliability, scalability and improve mean time to resolution. Our goal is to provide best-in-class, reliable IP-based routing solutions.
* We will expand the options available for our customers to route apex domain names to their Netlify sites. Many DNS providers have added support for `ALIAS` and `ANAME` records for apex domains that can provide more flexibility than single A records. We are exploring how we can use these options to provide better availability.
* We have split our enterprise traffic routing to its own IP, allowing us to control capacity and configuration changes separately between our enterprise customers and non-enterprise customers.

Netlify considers the performance and availability of customer's sites our top priority and we did not live up to that standard here. In addition to improvements to the load balancer, we are continuing to investigate further solutions to improve this situation for our customers and will have more details to share with you in the future.
