---
title: DNS redundancy with Netlify’s dedicated DNS network
description: Announcing Netlify’s dedicated DNS network – an extra level of resilience for your sites’ DNS.
authors:
  - David Calavera
date: '2018-12-20'
topics:
  - news
tags:
  - DNS
  - Announcements
tweet: ''
format: blog
---
The Domain Name System (DNS) is a fundamental component of the Internet. It makes it possible for computers to know where websites like [petsofnetlify.com](https://petsofnetlify.com/) and [ask.netlify.com](https://ask.netlify.com/) live. Due to its critical service, it’s extremely important for companies to ensure that their DNS is always available to locate their web properties.

Traditionally, people use only one DNS network. The servers on this network become the final locations where browsers go to resolve domain names. Although DNS providers are highly effective and are designed to be highly available, relying on a single network makes your domain vulnerable to malicious attacks. For instance, in the event of a volumetric attack like a Distributed Denial of Service (DDoS), your domain can become completely unavailable.

Today, we’re very excited to introduce a premium DNS redundancy feature for our Enterprise customers. 🎉 By using Netlify’s dedicated DNS network, your domain gets an additional set of DNS servers isolated from our main DNS network. These additional servers play an active role in your domain name resolution. This provides an additional assurance that your domain is always available, even when our main DNS network is not.

Managing this extra network is completely effortless when you use Netlify DNS management. When you create new DNS records and zones on Netlify DNS, we ensure that the information is available in both the general and the dedicated DNS networks automatically.

We’re excited to provide this feature for customers who require an extra level of resilience for their domains. [Contact our sales team](https://www.netlify.com/enterprise/contact/) to learn more about getting on Netlify’s dedicated DNS network today.
