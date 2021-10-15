---
title: "Very Good Security Add-on: Collect Data Securely"
description: "Achieving compliance nirvana with the Netlify VGS add-on"
authors:
  - David Wells
date: '2019-06-06'
topics:
  - news
tags:
  - Compliance
  - Security
  - Forms
tweet: 'Achieving compliance nirvana with the Netlify VGS add-on'
format: blog
---

Security is at the forefront of most software companies these days. With stories of high profile data breaches becoming regular occurrences, it’s no wonder.

But how can we as developers protect ourselves from security vulnerabilities? What if our application needs to process payments, collect sensitive user data such as medical records, social security numbers, etc.? How can we lower our risk and decrease our surface area of attack? 

VGS is an innovative security company with a unique approach to data security that they call Zero Data. With Zero Data, companies can interact with sensitive data, throughout its entire lifecycle, but no longer need to actually possess the data itself. This enables companies to achieve compliances in record time, inherit VGS’ security posture, and ultimately focus on what they do best.

## Inherit instant PCI compliance with the VGS Add-on

The VGS add-on focuses on the collection stage of the data lifecycle. With this simple add-on, you can build forms that ensure no sensitive data ever actually touches your servers. Instead the data is segmented, aliased, and secured in VGS vaults until needed. This removes much of your data liability, while drastically reducing your risk exposure and compliance responsibility.

With the VGS add-on you can secure any number of things including:

- Collect credit card data in a PCI compliant manner
- Protect personally identifiable information (PII) and healthcare data
- Store billing details securely
- Redact function logs

Check out this quick demo video to see the VGS add-on in action:

<iframe width="560" height="315" src="https://www.youtube.com/embed/wtYzLdpSeJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How does it work?

With the VGS add-on, form data is redacted and aliased in real-time, thus keeping your systems completely out of compliance scope. 

## What does this mean?

You are fully compliant for PCI and more, because the raw sensitive data never touches your backend nor is it exposed in the Netlify UI. 

## How can you securely send the data to third parties?

For revealing and sending your data to third parties, you need to configure your [outbound connection](https://www.verygoodsecurity.com/docs/getting-started#securing-your-outbound-connection) in the [VGS Dashboard](https://dashboard.verygoodsecurity.com/) or use one of the pre-defined VGS third party integrations. [Integration templates](https://www.verygoodsecurity.com/docs/features/integration-templates).

## How to add VGS to Netlify

1. Install netlify-cli `npm install netlify-cli -g`
2. Run `netlify addons:create vgs` from your website's directory or deploy our example in [one click](https://github.com/verygoodsecurity/netlify-one-click) and follow readme instructions
3. Run `netlify addons:auth vgs`, to authenticate and give the add-on access to your VGS account
4. Follow the interactive guide

<iframe width="560" height="315" src="https://www.youtube.com/embed/k2I_4u8_I9s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

You can get a free VGS account [here](https://www.verygoodsecurity.com/pricing)

**Read more:**

- https://www.verygoodsecurity.com/docs/getting-started
- https://www.verygoodsecurity.com/docs/integrations/netlify
- https://github.com/verygoodsecurity/netlify-addon-demo
- https://github.com/verygoodsecurity/netlify-addon-example

## Final Thoughts

Take your data collection and security posture to the next level. Quickly and easily achieve compliances such as PCI and SOC2 by collecting your data with the VGS add-on for Netlify. 

Spend more time focussing on building your business and less time dealing with security and compliance headaches.


