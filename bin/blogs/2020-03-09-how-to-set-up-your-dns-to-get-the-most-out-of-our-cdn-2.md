---
title: How to Set Up Netlify DNS - Custom Domains, CNAME, & A Records
description: Subdomain or bare domain? Netlify DNS or another DNS provider? We
  offer some recommendations to help you best leverage our global CDN.
authors:
  - Jen Kagan
date: 2020-03-26
lastmod: 2020-07-09
topics:
  - insights
tags:
  - DNS
  - Netlify
  - how-to
tweet: ""
format: blog
relatedposts:
  - What is DNS and How Domains Work on Netlify
seo:
  metatitle: How to Set Up Netlify DNS - Custom Domains, CNAME, & Records
  metadescription: Learn how to set up DNS on Netlify. Should you choose a
    subdomain or bare domain? Use Netlify DNS or another DNS provider? See our
    recommendations to help you best leverage our global CDN.
  ogimage: /img/blog/how-to-setup-netlify-dns.png
---
You’ve [created a Netlify account](https://app.netlify.com/signup) to host your website, chosen your preferred deployment method, and now you want to configure your custom domain name. How you configure your domain name impacts both how people will find your site, but also what kind of site performance they will experience when they visit. In this article, based on a 2017 post by Mathias Biilmann, we’ll dive into what we currently recommend and why.

A quick note before we get started: when we talk about [Netlify DNS](https://docs.netlify.com/domains-https/netlify-dns/), we’re referring to our service for hosting your DNS together with your website; Netlify DNS doesn’t work with sites hosted elsewhere.

Now that that’s out of the way, it’s helpful to think of the different ways you can configure your primary domain as falling into one of these categories:

* Bare domain (no subdomain) on Netlify DNS
* Subdomain, on Netlify DNS
* Bare domain (no subdomain) on another DNS provider
* Subdomain, on another DNS provider

Using a [custom domain with Netlify DNS](https://docs.netlify.com/domains-https/custom-domains/), as a bare domain or with a subdomain, is the most straightforward. It doesn’t matter whether your primary domain is `example.com` or `www.example.com`; Netlify DNS makes either DNS configuration possible and performant in just a few clicks.

But if you’re not using Netlify DNS, deciding whether to use a subdomain or a bare domain matters a lot and which one you choose significantly affects whether your site will benefit from our CDN.

## Point your subdomain to Netlify with a CNAME

DNS stands for “domain name system” and it’s the internet-wide phone book that tells browsers how to resolve a human-readable name (like netlify.com) to an IP address of a server (like 75.2.60.5) that the browser can open a connection to.

There are two kinds of DNS records relevant to hosting a website with Netlify:

* **A record** Apex, or root, record; maps a [hostname](https://superuser.com/questions/887173/what-is-a-hostname-versus-a-computer-name-versus-a-subdomain-versus-www) to an IPv4 address of a server.
* **CNAME record** Canonical name record used to specify an alias; maps one human-readable hostname to another one that the browser should look up instead.

When you configure a custom domain to point to a Netlify site, we recommend setting up your primary site as a subdomain that uses the `www.` prefix (or `app.` or `docs.`, etc.) and a CNAME mapping that site to the URL of your Netlify site, `<automatically-generated-name>.netlify.app` (where `<automatically-generated-name>` depends on the name of your Netlify site in the Netlify UI). If you go this route, here’s what will happen when a user visits your site:

1. The browser will look up the DNS record for `www.example.com`
2. Then, it will hit the CNAME record you set up telling it to look up `<automatically-generated-name>.netlify.app` instead
3. Then, when it looks up `<automatically-generated-name>.netlify.app`, it will hit a CNAME record that we’ve set up internally that’s configured to use our CDN and deliver all of its performance benefits to your site’s visitors

What’s great about this configuration is that if someone is visiting your site and our system has detected that our main load balancer is slow or unresponsive because, for example, it’s currently being hit by a large DDoS attack, we’ll simply route around that slowness on the network level. We also use advanced traffic direction to serve your site from the node that’s geographically closest to the person visiting. TL;DR: Visitors experience extremely fast page load times regardless of where they are located or what’s happening elsewhere on the network.

## An A record on your bare domain

So you move forward with our recommended setup and your site lives at `www.example.com` instead of `example.com`. You’ll still want a way to point your bare domain—`example.com`—at our load balancer. That way, when someone visits `example.com` without the `www.`, they’ll still see your site.

You might think that you could simply configure a CNAME record for the apex domain—point `example.com` to `<automatically-generated-name>.netlify.app`—but you shouldn’t! This could severely break other things for you. According to the DNS specification, any domain name that has a CNAME record set cannot have any other DNS records associated with it. This means that if you set up a CNAME record for `example.com`, you wouldn’t be able to set up MX records—so you wouldn’t be able to receive email at that domain. Want to validate your domain for Google’s webmaster tools? Or perhaps you’d like to use the SPF system to help verify your email sending hosts? You’d need to add a TXT record to the apex domain, but you wouldn’t be allowed to because you already have a CNAME.

The only remaining option is an A record. We publish the static IP address of our main load balancer so you can associate it with your A record. (Note that you should use this published address instead of grabbing an IP address that happens to be associated with your subdomain on a given day. Why? Because the IP addresses that CNAME records point to change all the time, depending on what nodes are available on our CDN.) With the A record in place on `example.com`, we’ll be able to serve an HTTP 301 redirect from there to `www.example.com`, which points to `<automatically-generated-name>.netlify.app` where your site assets actually live.

There’s one small but unavoidable downside here: manually setting an A record on your apex domain that points to our load balancer doesn’t let us insert any advanced traffic direction. We have no way of routing users who go to `example.com` (without the `www.`) to the closest or most performant CDN node. Luckily, any suboptimal performance will only affect site visitors the first time they go to the bare domain; after that, their browser cache will have the redirect to `www.example.com`, where they’ll benefit from our globally distributed infrastructure.

## Options for bare domains

Some might think that the decision of whether or not to use the `www.` prefix is merely cosmetic; there are whole websites arguing against the `www.` prefix. However, dropping `www.` from your main site domain can have dire consequences because of how DNS records work.

So what are your options if you absolutely must have your site at `example.com` instead of `www.example.com`? Our recommendations in this case are to use [Netlify DNS](https://docs.netlify.com/domains-https/netlify-dns) with the bare domain or use [Cloudflare’s CNAME flattening](https://www.cloudflare.com/dns/). It's also possible to configure a performant bare domain if [NS1](https://ns1.com/) is your DNS provider. Please [reach out to our Support team](https://www.netlify.com/support/) if you'd like to set this up using NS1. Outside of these three options, we do not recommend using a bare domain as your primary domain.

## Ideal Netlify DNS setup

Ultimately, we suggest using a subdomain—`www.` or any other subdomain like `app.` or `docs.`—as your primary domain. This way, you’ll get the full benefit of our advanced traffic direction on your main site, while preserving the ability to use MX, TXT, and other records on your apex domain. If you use [our own DNS hosting](https://docs.netlify.com/domains-https/netlify-dns/), we automatically create the DNS records you need to give your site great performance. And if you need your bare domain to be your primary one, Netlify DNS makes that happen automatically.

Feel free to drop [into the forum](https://community.netlify.com/c/connect/) with any questions or comments about setting this up yourself!