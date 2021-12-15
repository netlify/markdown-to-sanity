---
title: "August Changelog: What's New at Netlify"
description: Learn about new product enhancements and hot-off-the press
  tutorials, like the Essential Gatsby plugin (now with auto-install!), how to
  manage your Build Plugins versions, and how to check your functions logs from
  Deploy Previews.
authors:
  - Bradley Johnson
date: 2021-09-07
lastmod: 2021-09-07
topics:
  - news
tags:
  - changelog
tweet: ""
format: blog
seo:
  metadescription: Learn about new product enhancements and hot-off-the press
    tutorials, like the Essential Gatsby plugin (now with auto-install!), how to
    manage your Build Plugins versions, and how to check your functions logs
    from Deploy Previews.
  metatitle: "August Changelog: What's New at Netlify"
  ogimage: /v3/img/blog/august-changelog-21.png
---
Hi folks!

This August was all about the Jamstack ecosystem with new Netlify partner integrations, guides, and a special [Architecting with Next.js](https://www.netlify.com/events/architecting-with-nextjs) event last week, all building towards a massive [Jamstack Conf](https://www.netlify.com/blog/2021/08/24/party-at-jamstack-conf-2021-lets-talk-jamstack-how-it-started-how-its-going/) coming up on October 6-7. And don’t forget to [create your Jamstack Conf badge!](https://jamstackconf.com/#/register) We also shipped lots of exciting product updates.

<img><center> ![](/v3/img/blog/jamstack-conf-2021-badge.jpeg)</center>

\
\
Read on to discover what’s new at Netlify. And if you want product updates like this in your inbox, you can subscribe to our newsletter here👇

{% renderFile './src/components/pages/blog/newsletter.vue' %}

## Try the Essential Gatsby plugin—now with auto-install

Gatsby continues to be one of the most popular frameworks for Jamstack developers, and we’re excited to make running Gatsby on Netlify even easier for developers! Now, when you deploy a new Gatsby project, Netlify will auto-detect your framework and install the Essential Gatsby plugin so everything will work “out of the box” with zero configuration.

**[Learn more about the Essential Gatsby Plugin](https://www.netlify.com/blog/2021/08/18/try-the-essential-gatsby-pluginnow-with-auto-install/)**

## Now available: Manage your Build Plugin versions

Netlify offers a range of Build Plugins to extend the functionality of the build process, and plugin authors sometimes create new versions of plugins to add functionality or address bugs. We’ve just released a way to manage the major versions of plugins that your site uses in the Netlify UI, so now it’s easier to update to a new version or roll back to a previous version.

**[Read more about this feature ](https://answers.netlify.com/t/now-available-manage-build-plugin-versions/42293)**

## Functions logs now accessible in the Netlify Drawer for Deploy Previews

You may have noticed a new icon in your [Netlify Drawer](https://docs.netlify.com/site-deploys/deploy-previews/#collaborative-deploy-previews) when using [Deploy Previews.](https://docs.netlify.com/site-deploys/deploy-previews/) We’ve added a Functions logs tab to collaborative Deploy Previews to help with monitoring and troubleshooting a specific deploy. You can access serverless function logs by opening the Function logs tab in the Netlify Drawer and selecting a function to check out its latest log contents for the current session.

**[Check your Functions Logs in Deploy Previews](https://answers.netlify.com/t/functions-logs-now-available-in-the-netlify-drawer-when-using-deploy-previews/42731)**

## Other Recent Updates

* **[Import custom files into your Serverless Functions on Netlify](https://www.netlify.com/blog/2021/08/12/how-to-include-files-in-netlify-serverless-functions/)** - Now you can import custom files into your Serverless Functions on Netlify. This unlocks a lot of possibilities for authoring Netlify functions, and you can include any type of file in your serverless functions, even if you reference them using dynamic expressions. Add these files manually in your configuration file, or you can let us figure things out for you by opting-in to esbuild.
* **[New comment box powers in collaborative Deploy Previews ](https://answers.netlify.com/t/new-comment-box-powers-in-collaborative-deploy-previews/42589)**- There's a new text area inside the Deploy Previews drawer! This new iteration appears when leaving a comment and when filing a new issue. It features a text formatting toolbar -- helpful for non-technical reviewers who may not be familiar with markdown! It also adds a drag & drop file uploader affordance.
* **[E-Commerce with Angular, Shopify & Netlify Serverless Functions](https://www.netlify.com/blog/2021/08/25/e-commerce-with-angular-shopify-netlify-serverless-functions/)** - Last month, we tried out the new Shopify API with posts covering 11ty, Astro, Gridsome, and Nuxt. In our next installment, you can learn about Shopify’s recently added cart functionality to the Storefront API, and try it out with Angular and Netlify Functions for some serverless action.
* **[New Netlify CLI v6.0.0 release](https://github.com/netlify/cli/releases/tag/v6.0.0)** - This month, we released an update to the Netlify CLI with an important optimization to how the build and deploy commands work together. For most sites, this means a 50% reduction in the time spent on bundling functions when deploying via the CLI. Additionally, it allows any modifications to the functions pipeline made by build plugins (e.g. changing the bundler or the included files) to be preserved in the deployment.
* **[New Nuxt on Netlify docs](https://docs.netlify.com/configure-builds/common-configurations/nuxt/)** - This month, we published the latest in a series of updates to our docs that highlight our support and integrations with commonly used frameworks. The newly published Nuxt on Netlify docs include lots of helpful links and guides to get your next project setup and ready to use your favorite Nuxt features.
* **[All new sites now build on Netlify using the new Focal build image](https://answers.netlify.com/t/please-read-end-of-support-for-trusty-build-image-everything-you-need-to-know/39004)** - A few months ago, we released a new build image based on [Ubuntu 20.04 “Focal Fossa”](https://answers.netlify.com/t/new-ubuntu-20-04-focal-fossa-build-image/37095) as an opt-in beta. In August, it graduated out of beta, as the default for all new sites! For existing sites, you can still switch to the new build image by visiting your site dashboard and navigating to Site settings.

## Popular Articles

* [Party at Jamstack Conf 2021! Let’s talk Jamstack: How it started, how it’s going](https://www.netlify.com/blog/2021/08/24/party-at-jamstack-conf-2021-lets-talk-jamstack-how-it-started-how-its-going/)
* [How the Netlify Data Team Migrated from Databricks to Snowflake](https://www.netlify.com/blog/2021/08/10/how-the-netlify-data-team-migrated-from-databricks-to-snowflake/)
* [Adding machine learning to your Jamstack site](https://www.netlify.com/blog/2021/08/16/adding-machine-learning-to-your-jamstack-site/)
* [Top 6 things you can do with Netlify Dev in 2021](https://www.netlify.com/blog/2021/08/16/top-6-things-you-can-do-with-netlify-dev-in-2021/)
* [How caching microservice outputs led to a 7x performance improvement](https://www.netlify.com/blog/2021/08/17/how-caching-microservice-outputs-led-to-a-7x-performance-improvement/)

To stay up to date on changes like these, head over to the [updates category in Netlify Support Forums](https://answers.netlify.com/c/features/updates/51?utm_campaign=General%20Newsletter&utm_medium=email&_hsmi=2&_hsenc=p2ANqtz--IRbpFAIm-gHxhvzRpuED2Q87pw9BrlTky8RmNQjMRUOK0uvr-q9Jun4pyibKQRN-rXNX37M4ZGEpI2N1ZQyP4BH9v3w&utm_content=2&utm_source=hs_email) and click on your profile icon, then click the bell icon to receive real-time notifications. Stay tuned for more exciting updates next month!
