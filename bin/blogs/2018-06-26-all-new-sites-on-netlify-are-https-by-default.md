---
title: All new sites on Netlify are HTTPS by default
authors:
  - David Calavera
topics:
  - news
tags:
  - https
  - domains
  - feature
format: blog
description: >-
  If you're hosting your site on Netlify, we'll automatically request a Let’s
  Encrypt SSL certificate, enabling HTTPS by default.
date: '2018-07-02'
draft: false
---
One of Netlify’s core principles is to make the web more secure. It’s why we built a platform designed to serve JAMstack sites, offer unlimited secure build environments, and provide free, one-click HTTPS set up. But we want — and need — to go further.  Starting today Netlify will automatically request a Let’s Encrypt SSL certificate for all new sites, enabling HTTPS by default.

## How it works

Until now, all sites without a custom domain could be served via HTTP and HTTPS. You could navigate to <http://petsof.netlify.com> and also <https://petsof.netlify.com>. All Netlify subdomains use our own wildcard certificate to secure connections. From now on, all new sites connections will be automatically upgraded from HTTP to HTTPS. If one of your visitors tries to navigate the HTTP version, we’ll redirect them to the HTTPS version. Besides that, we’ll include an HSTS header for those Netlify subdomains, which tell browsers that they should only contact those sites via HTTPS.

When you add a custom domain to any of your sites, we’ll also generate a Let’s Encrypt certificate automatically. You won’t need to change any settings. If you don’t have the perfect custom domain for your site yet, you can now [buy a domain directly through Netlify](/blog/2018/06/19/buy-and-secure-a-custom-domain-through-netlify/).

## What’s next?

Thanks to browser vendors and organizations like Let’s Encrypt, support for a secure web has increased tremendously. Chrome and Mozilla [report](https://scotthelme.co.uk/https-anti-vaxxers/) that 75 percent of page loads they see are over HTTPS and about 80 percent of sites on Netlify with custom domains have set up HTTPS.

We have two very ambitious goals for this year:

1. All sites that use custom domains will use HTTPS.
2. All Netlify subdomains, like petsof.netlify.com, will include HSTS headers by September 28th.

This means that by the end of the year all traffic to any site hosted on Netlify will be secure. There is one caveat, though: to meet these goals all of the URL links in all Netlify sites must be HTTPS.  If we detect HTTP URLs in your site that uses HTTPS, or, what’s known as [mixed-content](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/fixing-mixed-content), you’ll hear from us directly.

If you haven’t set up HTTPS on your Netlify site, you can [follow these instructions](/docs/ssl/). It just takes a few minutes.

## HTTPS for speed and user experience

Besides these default changes, if your site is fully encrypted on Netlify, you can submit a request to include it in the [HSTS Preload list](https://hstspreload.org/). This list is used by all major browsers to indicate when a site is HTTPS only. This helps browsers to load your site faster for new visitors, since they don’t need to negotiate transport with our servers. We’ve included a [section in our documentation](/docs/ssl#hsts-preload) about how to ensure your site is fully compatible with this standard.

If you need one more reason to make sure you switch your site to HTTPS, remember that [Google Chrome will start marking sites as “Not Secure” on July 28th](https://security.googleblog.com/2018/02/a-secure-web-is-here-to-stay.html), which could result in traffic dips for HTTP-only sites.
