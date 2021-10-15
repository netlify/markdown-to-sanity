---
title: Protect your Netlify account from fraudulent logins
description: Today, we announce big improvements that help prevent account
  takeover, keeping your web apps running reliably and your content protected.
authors:
  - Robert Fenstermacher
date: 2020-08-21T16:00:00.000Z
lastmod: 2020-08-21
topics:
  - news
tags:
  - security
  - 2fa
  - saml
tweet: ""
format: blog
relatedposts:
  - "Two-Factor Authentication is live on Netlify!"
  - Spam management for Netlify Forms
seo:
  metatitle: Protect your Netlify Account from Fraudulent Logins
  metadescription: Today, we announce big improvements that help prevent account
    takeover, keeping your web apps running reliably and your content protected.
    Check it out!
---
If you're running core web properties on Netlify, then protecting access to your account isn’t just a nice-to-have, it's a key safeguard to the health of your business. At Netlify, we've kept a close watch for fraudulent logins to your account - but we saw room to get even better.

Today, we announce big improvements that help prevent account takeover, keeping your web apps running reliably and your content protected.

The changes impact how we identify and communicate suspicious logins for users that are part of a [Netlify Pro, Business, or Enterprise plan](https://www.netlify.com/pricing/#features).

First, we added an advanced machine learning engine to track and score every login based on its fraud potential. And as machine learning goes, it will only get better at detecting threats over time!

Next, we added email notifications to alert users whenever a login exceeds a fraud threshold. In that email, we specify time of login and information about the device, including the IP address, operating system, and browser type.

Best of all - there's nothing you need to do to enable this new functionality. We've turned it on for all Pro, Business, and Enterprise plans. Learn more about our plans at [netlify.com/pricing](https://www.netlify.com/pricing/).

### Don't stop there

Of course, security is best applied in layers - and this new functionality of scoring and alerting users to suspicious logins is just one more tool to keep your account protected. There are a few other best practices we recommend to keep your account locked down from external login threats.

**Two-factor authentication**

Remember, we always recommend enabling [two-factor authentication](https://www.netlify.com/blog/2020/07/07/two-factor-authentication-is-live-on-netlify/) in your account - this is a feature that's available on *all plans*, from Starter to Enterprise. This provides token-based protection in addition to a username/password and works with popular authentication apps like Authy, Google Authenticator, and 1Password.

**SAML-based Single sign-on (SSO)**

You can lock things down even further by enabling [SAML SSO](https://docs.netlify.com/accounts-and-billing/team-management/saml-single-sign-on/). Restricting access to your SAML provider is typically more secure than password based authentication. In this case, you have the option to only allow members of your SAML organization to gain access to your Netlify account. This functionality is available with Netlify's Business and Enterprise plans.

---

We take security seriously at Netlify. Check out our [security overview](https://www.netlify.com/security/) to learn more!