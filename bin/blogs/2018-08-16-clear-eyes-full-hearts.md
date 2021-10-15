---
title: Enabling free wildcard domain certificates with Let's Encrypt
description: >-
  Wildcard certificates comes to Netlify bringing easy HTTPS to your subdomains.
  Here's a look at what was needed to make this happen, along with some help
  from our friends at Let's Encrypt.
authors:
  - Keiko Oda
date: '2018-08-20'
topics:
  - insights
tags:
  - https
  - Let's Encrypt
  - domains
  - feature
tweet: ''
format: blog
---
Netlify has been using [Let’s Encrypt](https://letsencrypt.org/) to provide [free HTTPS](https://www.netlify.com/docs/ssl/#netlify) for our customers [since 2016](https://www.netlify.com/blog/2016/01/15/free-ssl-on-custom-domains/). We have issued many certificates since then, and we keep improving the feature to make the secure web more accessible to everyone.

![Netlify x Let's Encrypt](/img/blog/le_title.png)

I joined Netlify in May and the first project I worked on was to migrate our service from using [Let’s Encrypt’s ACME v1 API endpoint to v2](https://community.letsencrypt.org/t/acme-v2-production-environment-wildcards/55578). Migrating to v2 was important to us because it has a new key feature: wildcard domain support. Not only was this feature regularly requested by customers, but it was also something the team at Netlify were really keen on having, too. There was so much potential to improve our code base and reduce customer support requests.

I was excited to work on this. At that time, it was only a few weeks after ACME v2 started fully supporting wildcard domains, and I loved the idea of upgrading to the new API version before the old one was deprecated, and making a new feature available to customers as soon as possible.

Today, we introduced wildcard domain certificates for all domains using [Netlify DNS](https://www.netlify.com/docs/dns/). All new and newly renewed certificates will be using this. In this post, I go through how we migrated to v2 and introduced this new feature, including some examples and struggles.

## Upgrading everything without changing anything

The first thing I worked on was “just upgrading” without doing any refactoring or anything. The best practice to do this type of migration would be “percentage rollout,” where you use two versions of an API at the same time and send a small percentage of requests to the new version, gradually increasing the percentage as you you make sure that the new version is doing well. This method also allows you to rollback quickly by changing the new version percentage back to zero.

However, I wasn’t able to do this for two reasons:

* Our Ruby API uses the [acme-client](https://github.com/unixcharles/acme-client) gem. ACME v2 requires gem version 2.0.0, and v1 requires version 1.0.0; there is no easy way to have two different gem versions in a single project.
* ACME v2 is not backward compatible, and the certificate issuing flow is quite different from v1, requiring some unavoidable modifications to the code.

Since I couldn’t do a percentage rollout, I decided to test thoroughly in a staging environment, then cut over all traffic at once. I still tried to modify the code as little as possible with the first release, but there were some changes that I had to introduce. The first dealt with account management for the migration. The second had to do with the concept of certificate “order” objects.

With ACME v1, you request and complete separate authorization challenges for each domain you want to include in a certificate. You have to handle your own progress tracking to be sure all challenges are complete before creating a valid certificate request.

![Issuing a certificate for xyz.com, xyz.net domains with ACME v1](/img/blog/le-acme-v1-cert.png)

With ACME v2, the new concept of “order” objects was introduced. Order objects organize the whole certificate request process — you create an order first with the all domains that you want on the certificate. Then, you go through the challenges with these, and the order object tracks your progress. When everything is ready, you finalize the order to get the certificate.

![Issuing a certificate for xyz.com, xyz.net domains with ACME v2](/img/blog/le-acme-v2-cert.png)

The first iteration actually went pretty well with minimal changes, and I was able to ship it within my first (well, accurately second) week.

## Hitting the limits

After a few days of shipping the v2 code, we started getting support tickets saying, “Hey, we can’t add a certificate to our site” or, “Our website is insecure! The cert is expired!”. I shortly realized that we were hitting the [following limit](https://letsencrypt.org/docs/rate-limits/): 

> For users of the ACME v2 API you can create a maximum of 300 New Orders per account per 3 hours.

Certificates issued with Let’s Encrypt expire after three months. This means, in order to keep a website secure, we need to renew its certificate before it expires. Before the migration, we were running all renewals in a daily batch in the early morning. Because we had more than 300 certificates due for renewal each day, every morning the batch would kick, we would hit the limit, and all new orders would be unavailable for three hours after that.

To fix this, I took two approaches. First, forget about the daily batch and switch to hourly batches. This allowed us to create orders up to 2,400 per day theoretically, but I limited the batches to 50 renewals per hour to leave room for new certificate creation.

Second, I reduced the number of certificate order objects that we actually create with Let’s Encrypt. I did this by enhancing and expanding the validations we use to avoid sending new orders that we know will fail the checks on Let’s Encrypt side. This also helped us to introduce [more detailed error message](https://www.netlify.com/docs/ssl/#troubleshooting-with-error-messages)[s](https://www.netlify.com/docs/ssl/#troubleshooting-with-error-messages) to the customer explaining why the certificate is not renewing. We also started sending out emails to notify customers when a renewal would fail.

In addition to these two approaches, we asked Let’s Encrypt to bump the limit. This gives us enough room to introduce new features like [automatic Let’s Encrypt certificate provisioning](https://www.netlify.com/blog/2018/07/02/all-new-sites-on-netlify-are-https-by-default/) [for all new sites](https://www.netlify.com/blog/2018/07/02/all-new-sites-on-netlify-are-https-by-default/). 

## Wildcard domain certificate

The second chunk of iteration was to introduce wildcard domain certificates. 

We have customers who use lots of subdomains across one or more sites, or who have many [branch subdomains](https://www.netlify.com/docs/custom-domains/#branch-subdomains) (a feature that gives branch deploys URLs with your domain, like `branch-name.yourdomain.com`). Without a wildcard domain certificate, the number of domains that one certificate has is large, which increases the chance of failure when issuing or renewing a certificate. Also, Let’s Encrypt limits the number of certificates per registered domain to 50 per week, which can also cause failures.

Wildcard domain certificates solve all of these pains. To do this, I would need to change how we handled certificate challenges.

There are several “challenges” to issue a certificate. These challenges are to prove that we have control over that domain name, so that Let’s Encrypt can issue a certificate if we pass one of the challenges. 

Let’s say we want to certify the domain `petsofnetlify.com`, and Let’s Encrypt has given us a token, `example_token`, to use in our challenge. Here are two ways we could satisfy that challenge:

* **HTTP challenge:** create an HTTP resource on `http://petsofnetlify.com/.well-known/acme-challenge/example_token` with the content `example_token.some_jwk_thumbprint`.
* **DNS challenge:** create a TXT DNS record with domain `_acme-challenge.petsofnetlify.com` with `example_token` a value.

![HTTP challenge and DNS challenge](/img/blog/le-challenges1.png)

Previously, we had been using the HTTP challenge since Netlify serves HTTP resources for you and serving the right content at the right request path is what we’re good at. Also, we don’t necessary control DNS for you, so the HTTP challenge is the simple consistent challenge that we could use.

![challenges with Netlify](/img/blog/le-challenges2.png)

Let's Encrypt only offers wildcard certificates with the DNS challenge. I started by using it for domains purchased on Netlify. While testing a wildcard domain certificate issue with  `petsofnetlify.com, *.petsofnetlify.com`, I noticed that it failed to validate one of the domains.

When you want to issue a certificate for these two domains, you will have one certificate order with two authorizations, and each authorization has its own challenges and token. I decided to do DNS challenges for both of them, but then realized that the TXT record that I need to create was exactly the same ( `_acme-challenge.petsofnetlify.com`), except for the value part (the token). Because the first challenge’s value remained there for a while due to the TTL (it was 120, or 2 minutes), the second challenge wasn’t able to succeed. I changed TTL of this TXT record for the challenge to 1 second and added some sleep time between these two challenges to solve this problem.

After solving that and a few other small struggles, I was able to introduce wildcard domain certificates for domains [purchased via Netlif](https://www.netlify.com/blog/2018/06/19/buy-and-secure-a-custom-domain-through-netlify/)[y](https://www.netlify.com/blog/2018/06/19/buy-and-secure-a-custom-domain-through-netlify/).

The next step was to introduce this to _all_ domains that use [Netlify DNS](https://www.netlify.com/docs/dns/), even if they were purchased somewhere else. However, this part of our code base had gone untouched for a long time, and as happens with software over time, it had many legacy unused parts, and old architecture that wasn’t compatible with this new change. I would need to do some refactoring, along with a detour to fulfill some other dreams I had for our API, like adding a state machine.

Long story short, I was able to do some refactoring and introduce wildcard domain certificates for all domains managed by Netlify.

Now, say you create the site, `petsofnetlify.com`, and you’re managing the domain with Netlify DNS. We’ll automatically provision a certificate with `petsofnetlify.com, *.petsofnetlify.com`. If you make a new site using a subdomain like `sf.petsofnetlify.com`, we don’t need to issue the new certificate because it can just use the wildcard domain certificate, `*.petsofnetlify.com`.

In addition to that, even if you add a [domain alias](https://www.netlify.com/docs/custom-domains/#domain-aliases), `petsofnetlify.io`, that is _not_ managed using Netlify DNS, we’ll create a certificate with `petsofnetlify.com, *.petsofnetlify.com, petsofnetlify.io`, using both DNS and HTTP challenges for the same certificate.

## More dreams to come

The journey of making certificates more accessible and easy to use has been challenging but really interesting. It is great that I can see the impact, especially to the support cases. The total monthly support cases around SSL/TLS certificates dropped more than half in July compared to May, even while new certificate creation increased 150%.

We still have more things that we could improve around certificates. We will keep working on them as we move toward to our goal for this year: **all** sites that are hosted by Netlify will use HTTPS.

## About Let's Encrypt and ACME

Let’s Encrypt is a free, automated, and open Certificate Authority.
ACME (Automatic Certificate Management Environment) is a communication protocol which is designed for the Let’s Encrypt service to allow everyone to issue the certificates easily. ACME v2 was introduced the beginning of 2018 with lots of improvements and great standardizations.

We are delighted that we are able to introduce a free wildcard domain certificate because of Let's Encrypt! Donate to support a more secure web 🎉:
[https://letsencrypt.org/donate/](https://letsencrypt.org/donate/)
