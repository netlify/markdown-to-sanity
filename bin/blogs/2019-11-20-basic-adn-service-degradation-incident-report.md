---
title: Basic ADN service degradation incident report
description: >-
  On November 4th 2019, the network that serves traffic for our Pro and Starter
  customers suffered at Distributed Denial of Service (DDoS) attack. This post
  provides more insight into what happened, as well as the measures we’re
  already taking to mitigate the risk of future incidents.
authors:
  - David Calavera
date: '2019-11-20'
topics:
  - news
tweet: ''
format: blog
---
Netlify's Application Delivery Network (ADN) is the multi-tiered infrastructure that serves all our customers' websites across the globe. At the same time, this infrastructure is divided into multiple networks. Our Pro and Starter customers share the same network. Our Enterprise customers' websites are served by different networks. These networks are also different in server topology, throughput and internal configuration.

On November 4th, 2019, the network that serves traffic for our Pro and Starter customers suffered at Distributed Denial of Service (DDoS) attack, which resulted in disruption of service for some of the customers on that network. Customers using our Enterprise ADN were not affected by this incident for several reasons. One of those reasons is that their traffic goes through different networks much more resilient to these kind of Level 7 attacks, but we'll outline a few other reasons as we explain what happened during this incident.

We would like to apologize to anyone who was affected by this incident and reinforce that we are taking it very seriously. We are on a mission to build a better web, and we want to provide world-class service at every tier. In this blog post, I will provide more insight into what happened, as well as the measures we’re already taking to mitigate the risk of future incidents.



## What happened?

At 9:27am PT November 4th, our automated monitoring systems detected a big spike in client connections to one of our customer's websites. We quickly realized the spike was not due to the typical increase we see when the US comes online Monday morning based on our metrics system. In the graph below, it's evident the number of connections on Monday morning did not follow our daily pattern:

![Established client connections](/v3/img/blog/established-connections.png "Established client connections")

To dive into the consequences of this increase in connections, I need to tell you a little bit more about what happens when a request comes in to any of the nodes in our ADN.

Over 80% of the incoming traffic to our network is encrypted. When a browser sends a request to one of our servers, first it will try to establish a secure connection. The server in charge of that request will read the name of the website from the TLS handshake, and it will try to find a valid certificate for that handshake. Since we manage millions of websites, a given server might not have a valid certificate at the time of the request to fulfill that handshake. If that's the case, the website's name is put in a queue that will request the certificate from an external API that we designed with the only purpose of providing all servers in our ADN with TLS certificates. Once the server has the certificate, it keeps it locally, so it doesn't need to reach this API again. Since our servers are multi-threaded, we implemented a queue system to ensure that we don't try to fetch the same certificate over and over again. During the morning of this incident, this queue system was completely flooded with requests to fetch the certificate for the website under attack. This made the TLS handshakes for any other website very slow, which caused timeouts in the browser. In the image below, you can see the increase in latency in our certificates API:

![TLS certificate fetching](/v3/img/blog/certificate-fetch.png "TLS certificate fetching")

Our Enteprise ADN only use the TLS API when we bring server capacity online and when we rotate certificates, so it's much more resilient to congestion issues like this one since it only requests certificates once every few months.

Once a client has established the secure connection with our server. The first thing we do to fulfill the request is to inspect our local cache for a response. If we've seen a request before, we keep a version of the response locally, so we don't have to fetch it from our origin servers. We use a very efficient proxy cache that can process hundreds of thousands of request per second to cache those responses at the edge. However, in the morning of the attack, the number of disk operations that our proxy cache had to process was so high, that our servers were unable to complete the request in a timely manner, which caused congestion for any other website that was trying to access the cache. In the image below, you can see the spike in the number of read operations in our cache, many of those failed because they were not able to complete:

![Cache disk IO operations](/v3/img/blog/disk-iops.png "Cache disk IO operations")

Our Enteprise ADN is also more resilient to these kind of issues. Servers deployed in this network use a much more efficient RAM Cache that protects traffic from IO congestion.

These factors influenced the availability of some of our customers' websites, making them serve content very slowly, or even being completely offline for several minutes.

## What did we do to mitigate this attack?

One of the measures that we have in place against DDoS attacks is the ability to block the domain that's under attack. While a service like ours can withstand large level 7 attacks by rapidly adding server capacity, this is generally too costly of an approach outside of our enterprise offering. So on the self-serve tier we will generally block the specific domains under attack to prevent attacks affecting the general user base. This requires a change in a service configuration that can be propagated to all servers in our ADN in a matter of seconds. At 9:30am PT, we blocked the domain that was attacked during this incident. At 9:40am PT, we blocked a second domain that we identified as an additional target during the incident.

Unfortunately, this measure didn't work as well as we expected. Our domain blocking system was implemented in a way that didn't abort client connections right away. Packets sent to our network were still processed by our proxy cache, which still tried to fulfill requests incoming in those packets. This implementation originally assumed that the cache could handle a significant amount of load that made this trade-off okay. As you're probably already guessing, this measure didn't work on November 4th because most of the congestion happened before client requests arrived to this check.

The next technique that we use to mitigate these kind of attacks is to completely block client connections. This measure is usually tricky to implement due to the distributed nature of a DDoS attack. An attacker can add new create connections from different IP addresses as fast, or faster than we can block them. To block client connections, we usually rely on our logging system to aggregate IP addresses by the number of connections that they establish with our servers. When we get a list of IP addresses over a given threshold, we apply IPtables rules that drop the client connections in the Linux kernel. This measure still requires a significant amount of manual work from our team, which made the connections to remain online longer than we expected. We started to gather and ban IP addresses at 9:40am PT, but the changes didn't apply until 9:48am PT.

The third technique that we use to mitigate a DDoS attack is to bring more server capacity online. Over the years, we've developed some tools that allow us to bring more servers online in our ADN in a few minutes. When these new servers become available their caches are empty, which means that bringing capacity online can create a cascade effect that saturates our origin servers with requests for fresh content. We usually are very careful doing this because we want to prevent this cascade effect. We're always hesitant to perform this operation in high load situations because we could make a DDoS attack against our network even worse. During this incident, we started bringing more capacity online in a very controlled way. New servers started to receive traffic at 10:15am PT.

## What are we doing to prevent future attacks?

One of the first things we do at Netlify after any incident is to organize a Learning Review with members of the team working during the outage. In this meeting, we review the events that happened during the incident. We also review the measures that we take to solve the problem. Finally, we establish action items to improve our product and processes for the future.

One of the clear items that we wanted to improve was the implementation of our domain blocker. The day after the incident, we deployed a patch to all our servers in our ADN that makes them drop a client connection for any specific domain as soon as we identify it. At the same time, domains blocked by this measure won't participate in our TLS handshake negotiation and they will be automatically assigned an invalid certificate. After implementing this patch, we tested this new measure and saw how requests to blocked domains went from being on CPU around 50 milliseconds to being on CPU less than 5 milliseconds.

Another improvement that we already started working on was the ability to drop client connections in the Linux kernel in a more automatic way. We've improved our alerting and aggregation tools to give us the list of clients to drop with one single command. The same command configures IPTables automatically to drop the connections. This reduce human intervention to the minimum possible, and give us even more visibility into how the bans are applied. We're also investing time to improve our connection drop measures by using eBPF and XDP. These tools provided by the Linux Kernel make this process more efficient because the kernel can act on network packages as soon as it receives them.

We're also making two changes to improve reliability as we bring more server capacity online. The first change that we're going to implement is to create regional layers of cache servers. That way, when we bring more capacity online, the new servers will request fresh content to this regional caches before going to our origin servers. This will reduce the cascade effect of bringing servers online because we'll configure our regional caches to have a very high cache hit ratio. The second change that we're implementing is around our provisioning processes. To ensure that our team is more confident bringing capacity online, we're going to schedule periodic events where we'll do just this, bring capacity online. Our end goal with these events is to make the process as seamless and safe as any other that our team performs at any time.

During the incident, many customers reached out to ask which network tier is powering their website. It became apparent that we need to do a better job at communicating that in our product. Our team has begun scoping the work to make this visible in our product dashboard.

Our team is always measuring how efficient our ADN is at serving content. In the weeks before this attack we started to investigate some possible improvements to increase the throughput over the limit of requests that we established as peak traffic in our network. The day after this incident, we deployed several changes that made the throughput in our network 3 times higher at peak traffic than it was before.

Finally, I'd like to personally apologize to all our customers affected by this incident. Our team works to make sure your content is always globally available and we let you down. Incidents like these are very costly for you and us, and it took us too long to solve it. We know that you trust Netlify, and everyone in our company is focused on living up to your expectations.

Thanks a lot for staying with me until this end of this post and for your support.
