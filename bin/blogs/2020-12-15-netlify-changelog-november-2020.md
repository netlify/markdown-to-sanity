---
title: Netlify Changelog November 2020
description: Check out this Netlify changelog article to get the latest product
  news from Netlify as of November 2020.
authors:
  - Netlify
date: 2020-12-15T11:45:00.000Z
lastmod: 2020-12-15
topics:
  - news
tags:
  - changelog
tweet: ""
format: blog
relatedposts:
  - Netlify Changelog October 2020
seo:
  metatitle: See Netlify's Product Changelog Updates for November 2020
  metadescription: Next.js Preview Mode, Background Functions, Team Overview, and
    more updates in Netlify. Check out our changelog article to get the latest
    product news from Netlify as of November 2020.
---
This is a re-publishing of our product changelog newsletter sent to subscribers earlier this month. Sign up to receive future product news and updates!

{% renderFile './src/components/pages/blog/newsletter.vue' %}

Here are some of the latest enhancements to help you build even better web apps with Netlify!

### Next.js Preview Mode on Netlify

*See what content looks like before running a build of your site*

Next.js introduced Preview Mode earlier this year as a part of its 9.3 release. We love this feature and are excited to now support it in Netlify. With Preview Mode, you can bypass the statically generated page to server-side render a draft page. That way you don’t have to wait for a build to run to see a preview. It’s great to use with a CMS to show your team changes in real-time, before committing them. [Learn more](https://www.netlify.com/blog/2020/10/27/preview-mode-for-next.js-now-fully-supported-on-netlify/)

### Background Functions

*Serverless functions for long running tasks and API interactions*

You may be familiar with [Netlify Functions](https://docs.netlify.com/functions/overview/), which give you all the goodness of AWS Lambda without worrying about configuring API gateways, coordinating deployments, or even setting up an AWS account. However, if you’ve ever used Netlify Functions, it’s likely you’ve encountered the 10 seconds timeout limit. This isn’t great if you’re dealing with slow APIs or need to run a more complex task. Enter Netlify’s new Background Functions. It’s as easy as adding “-background” to the name of the file and your serverless functions can run asynchronously for up to 15 minutes. [Learn more](https://www.netlify.com/blog/2020/10/29/announcing-background-functions/)

### Team Overview

*A dashboard for your team to collaborate & develop faster*

We hear again and again that the real power of Netlify is the network effect on productivity when it’s used across a team. We’ve made this experience even better now with a central dashboard in the Netlify UI that surfaces the most important information about your team and the web projects they’re working on. You can see everything from real-time status of your team’s site builds to the latest audit logs, all in one place. [Learn more](https://www.netlify.com/blog/2020/10/22/announcing-team-overview-collaborate-easier-develop-faster/)


### Other Recent Updates

* **Edge Handers beta rollout** - We are slowly enabling accounts for early access. Request access [here](https://www.netlify.com/products/edge/edge-handlers) and try it out for personalizing content, authentication, and more!
* **Continuous deployment of Netlify Functions** - Previously, a build command was required for continuous deployment of serverless functions. Now just commit your function files to a folder and git push to deploy automatically. [Learn more](https://community.netlify.com/t/change-coming-november-9-no-build-command-required-for-continuous-deployment-of-netlify-functions/25504)
* **Validate edge rules locally** - A new dev:trace CLI command simulates Netlify's Edge routing logic to match specific requests. For example, you can create a redirect rule using _redirects or netlify.toml, then run netlify dev:trace <URL> to test if a specific URL is matched by a rule. [See the docs](https://cli.netlify.com/commands/dev/)
* **Select a default team** you would like to see when logging in to the Netlify app. That way you don’t have to always switch back to the team you use most. [Learn more](https://community.netlify.com/t/new-feature-selecting-a-default-team-when-logging-in/25017)
* **Further speed improvements to post-processing** when builds contain redirect rules that cause shadowing (eg: /*). This time we’ve made HTML processing a bit faster.
* **Redirect behavior** has changed, so that we only automatically redirect non-www domains to the www domain if it’s an apex domain. [Learn more](https://community.netlify.com/t/upcoming-change-redirect-from-non-www-domain-to-www-domain-only-works-with-the-apex-domain/24018)
* **Update to TLS/SSL certificates for Netlify sites with custom domains** - Our certificate authority, Let’s Encrypt, is making a change to their underlying root certificate. [Learn more](https://community.netlify.com/t/please-read-upcoming-change-custom-domains-tls-certificates-are-getting-new-root-certificates/26552)

### Articles You May Have Missed

* [Choosing your APIs for Jamstack](https://www.netlify.com/blog/2020/10/07/choosing-your-apis-for-jamstack/)
* [Localization with Netlify redirects & rewrites](https://www.netlify.com/blog/2020/10/30/easy-localization-with-netlify-redirects-and-rewrites/)
* [Learn how Apollo GraphQL uses Netlify](https://www.netlify.com/blog/2020/11/05/how-apollo-graphql-scales-quality-across-sites-with-netlify/)
* [Why Jamstack, an animated tutorial](https://www.netlify.com/blog/2020/10/28/why-jamstack-an-animated-guide/)
* [Jamstack Explorers learning platform](https://explorers.netlify.com/)