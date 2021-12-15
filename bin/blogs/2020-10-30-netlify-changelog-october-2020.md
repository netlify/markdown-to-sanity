---
title: Netlify Changelog October 2020
description: Check out this Netlify changelog article to get the latest product
  news from Netlify as of October 2020.
authors:
  - Netlify
date: 2020-10-30T15:00:00.000Z
lastmod: 2020-10-30
topics:
  - news
tags:
  - changelog
tweet: ""
format: blog
relatedposts:
  - "Announcing Netlify Edge Handlers: Now in Early Access"
  - "June Netlify Newsletter: Top 10 Build Plugins, Brotli compression and more"
seo:
  metadescription: Edge Handlers, Build Plugins, and more! Check out this Netlify
    changelog article to get the latest product news from Netlify as of October
    2020.
  metatitle: See Netlify's Product Changelog Updates for October 2020
---
This is a re-publishing of our product changelog newsletter sent to subscribers earlier this month. Sign up to receive future product news and updates!

{% renderFile './src/components/pages/blog/newsletter.vue' %}

October is shaping up to be one our busiest months ever! With Jamstack Conf in the rearview and a flurry of product ships, we thought it was a good time to share all the new things you can do with Netlify to make your sites perform even better and shave some time off development.

## Featured

### Edge Handlers - in limited early access

*Fast, personalized web experiences delivered at the network edge*

This is a big one - Edge Handlers is a step change in what developers can do with Jamstack, making it a viable approach for even the most dynamic and complex web apps and websites. Now you can deploy Javascript directly to Netlify’s Edge network— to intercept incoming HTTP requests, manipulate incoming requests to fetch different resources, or even transform HTTP responses. Think personalization, localized content, custom authentication and so much more. And it’s all part of the Netlify workflow so Continuous Delivery is streamlined between your frontend engineers and DevOps/SREs.

**[Request early access](https://www.netlify.com/products/edge/edge-handlers/)**

- - -

### Build Plugins for Tech Partners

*New methods allow businesses to build integrated plugins*

Since Build Plugins were released in May, more than 40 plugins have been authored and added to the plugins directory. Early on, it was tricky for services requiring tokens or login credentials to integrate directly into the Netlify build processes, but recent improvements have made this easier than ever. This month, we’re highlighting three tech partners — Algolia, Nimbella, and Snyk — delivering seamless experiences with plugins using: environment variables, Oauth apps, and the partner add-on API.

**[See how](https://www.netlify.com/blog/2020/10/07/tech-partners-create-custom-build-plugins-to-reach-developers-in-their-workflow/)**

- - -

### Other Recent Enhancements

* **Toggle off form detection** when you don’t need it for faster deploys. See [the docs](https://docs.netlify.com/site-deploys/post-processing/form-detection/#disable-form-detection)
* **Faster post-processing** when builds contain redirect rules that cause shadowing (eg: `/*`). We’ve seen in the order of 100x improvements in some cases.
* **Fraud detection and email notification** for logins to your account using new advanced machine learning tooling. [Learn more](https://www.netlify.com/blog/2020/08/21/protect-your-netlify-account-from-fraudulent-logins/)
* **Two-factor authentication** adds additional protection for your Netlify account. [Learn more](https://www.netlify.com/blog/2020/07/07/two-factor-authentication-is-live-on-netlify/)
* **Improved security when using OAuth**. Limit the scope of what sites and capabilities are accessible when using Netlify as an OAuth provider. 
* **Visibility into build status**. Additional status indicators for builds that are in your queue. [Check it out](https://www.netlify.com/blog/2020/09/17/netlify-releases-to-help-you-optimize-deploy-time-understand-build-states-and-more/)
* **Billing transparency**. On the team Build page in the UI, see build minutes used last billing period. [Log in](https://app.netlify.com/)
* **Netlify CMS multilingual content authoring**. There’s now a side by side editor in the Netlify CMS so that you can write content in multiple languages. [Learn more](https://github.com/netlify/netlify-cms/issues/716)
* **DebugBear Web Performance Build Plugin** will run tests on DebugBear to see how your deployments affect page performance and Lighthouse scores. [Install](https://app.netlify.com/plugins/netlify-build-plugin-debugbear/install)
* **Next Dynamic Routes Build Plugin** that allows you to deploy dynamic NextJS statically. [Install](https://app.netlify.com/plugins/netlify-plugin-next-dynamic/install)
* **Improvements to analytics performance and stability** - nothing to enable or configure here. We’ve just been busy making [Netlify Analytics](https://www.netlify.com/products/analytics/) even more performant!

- - -

### Articles We Think You'll Love

* [How to deploy a site with Postman and the Netlify API](https://www.netlify.com/blog/2020/09/24/how-to-deploy-a-simple-site-using-postman-and-the-netlify-api/)
* [Creating an API with AWS: Lambda, DynamoDB, and API Gateway](https://www.netlify.com/guides/creating-an-api-with-aws-lambda-dynamodb-and-api-gateway/)
* [Metrics-driven engineering](https://www.netlify.com/blog/2020/09/22/metrics-driven-engineering-leadership-how-to-elevate-the-visibility-of-your-distributed-team/)
* [New Target Static Mode in Nuxt](https://www.netlify.com/blog/2020/09/10/the-new-target-static-mode-in-nuxt/)
* [Integrating Nextjs with Prismic](https://www.netlify.com/blog/2020/08/28/integrate-next.js-prismic/)
* [Moving Netlify.com to Eleventy and Vue](https://www.netlify.com/blog/2020/09/18/eleventy-and-vue-a-match-made-to-power-netlify.com/)

- - -

Hopefully all these new product capabilities and articles will help you create even more incredible websites and web apps. To stay up to date on changes like these, head over to the updates category in Community, click on your profile icon, and then the bell icon to receive real-time notifications. We can’t wait to see what you build next!