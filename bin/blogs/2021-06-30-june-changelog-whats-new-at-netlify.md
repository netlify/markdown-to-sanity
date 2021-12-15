---
title: "June Changelog: What's New at Netlify"
description: After a huge milestone in May with Netlify’s next generation of
  Deploy Previews, June highlights included our biggest Headless Commerce Summit
  yet. You’ll also find a bunch of new product enhancements to explore. Read on
  to discover what’s new at Netlify!
authors:
  - Bradley Johnson
date: 2021-07-06
lastmod: 2021-07-06
topics:
  - news
tags:
  - changelog
  - newsletter
  - Deploy Previews
  - Gatsby
  - Jamstack
tweet: ""
format: blog
relatedposts:
  - Netlify Changelog April 2021
  - Netlify's May in Review
seo:
  metatitle: "June 2021 Changelog: Product Updates, News, and more from the Netlify Team "
  metadescription: "After a huge milestone in May with Netlify’s next generation
    of Deploy Previews, June highlights included our biggest Headless Commerce
    Summit yet. You’ll also find a bunch of new product enhancements to explore.
    "
  ogimage: /v3/img/blog/june-changelog-2021-og.png
---
👋  Hi folks!

After a huge milestone in May with Netlify’s [next generation of Deploy Previews](https://www.netlify.com/blog/2021/05/19/next-generation-deploy-previews-plus-netlify-acquires-featurepeek/), June highlights included our biggest [Headless Commerce Summit](https://www.netlify.com/blog/2021/06/16/e-commerce-jamstack-stories-from-headless-commerce-summit-2021/) yet! You’ll also find a bunch of new product enhancements to explore.

Read on to discover what’s new at Netlify!

## Usability improvements for collaborative Deploy Previews

![Changelog improvements to Netlify UI](/v3/img/blog/changelog-2.png)

Now you have more control over Netlify’s new [collaborative Deploy Previews](https://www.netlify.com/blog/2021/05/19/next-generation-deploy-previews-plus-netlify-acquires-featurepeek/)! You can drag to move the Netlify Drawer icon, or [opt out of loading the Netlify Drawer](https://docs.netlify.com/site-deploys/deploy-previews/#preview-changes-without-the-netlify-drawer) on a site’s Deploy Previews. You can also open a branch deploy or deploy permalink if you need to preview a deploy but don't want to access any of the collaboration features.

[Read the blog](https://www.netlify.com/blog/2021/06/07/usability-improvements-for-collaborative-deploy-previews/)

## Try out new Gatsby Functions on Netlify with the Essential Gatsby plugin!

![](/v3/img/blog/changelog-1.png)

\
Get a first look at the new Essential Gatsby plugin which includes support for Gatsby Functions, incremental builds, and image caching. Most Netlify plugins are available for one-click install, but this new plugin hasn’t been published to the directory yet, so you’ll need to install it directly with npm instead of through the Netlify UI.

[Get started with the Essential Gatsby plugin](https://www.netlify.com/blog/2021/06/03/how-to-enable-gatsby-functions-on-netlify/)

## Nuxt Image is here and it's a game changer

Nuxt Image is a plug-and-play image optimization module designed to give developers access to powerful components that will make image optimization a natural part of your workflow. Believe it or not, if you’re using Nuxt to deploy a static site on Netlify, you don’t need any additional configuration to take advantage of Nuxt Image!

[Learn more about Nuxt Image](https://www.netlify.com/blog/2021/06/11/nuxt-image-is-here-and-its-a-game-changer/)

## Other Recent Updates

### Improved audit logs for changes to build settings

  You might have noticed changes to how build settings are displayed in the [team audit log.](https://docs.netlify.com/accounts-and-billing/team-management/team-audit-log/) Previously, any change under the “Build & deploy” section of the “Site settings” tab would result in an audit log entry that included some settings that hadn’t really changed. Now, we’re only reporting the settings that changed and including the old values so changes are easier to understand. [Read more](https://answers.netlify.com/t/improved-audit-logs-for-changes-to-build-settings/39833)

### Changes in internal paths of files deployed to Netlify Functions

  New changes to the internal implementation details of Netlify Functions address a mismatch in file paths between local and production environments. The changes fix this inconsistency and remove the extra src/ segment from the path. Nothing has changed in our public APIs or in the way files are referenced, so this change should go unnoticed for the vast majority of users. [Read more](https://answers.netlify.com/t/changes-in-internal-paths-of-files-deployed-to-netlify-functions/39205)

### Fixing the default publish directory in monorepo configurations

  The default publish directory in monorepo configurations has changed. As long as no publish or base is set, we will continue to default to publishing the root. But if a base directory is set, we will now default to publishing that instead of the root. You will only be impacted if you have a base directory set, but no publish directory. If you’re not sure whether this applies to you, you can check your build logs. [Learn more](https://answers.netlify.com/t/breaking-change-fixing-the-default-publish-directory-in-monorepo-configurations/38871)

### End of life for Ubuntu Trusty build image

  If you have sites older than two years old, you will need to check your site’s build image settings and upgrade to the new Ubuntu 20.04 (Focal) build image before September 19, 2021. Older Netlify sites used Ubuntu 14.04 (Trusty) build image with the tag `v2.8.2`, but Trusty has been in [end of life since April 25, 2019](https://fridge.ubuntu.com/2019/05/02/ubuntu-14-04-trusty-tahr-reached-end-of-life-on-april-25-2019-esm-available/). After September 19, you will not be able to run new builds of your site until you have migrated to a new build image. [Follow these steps to migrate today](https://answers.netlify.com/t/please-read-end-of-support-for-trusty-build-image-everything-you-need-to-know/39004)
### End of support for Node 10 in Netlify Functions

  [Node.js version 10 reached End of Life](https://nodejs.org/en/about/releases/) (EOL) earlier this year and Netlify Functions will stop supporting serverless function deploys using Node.js 10 on July 30, 2021. If you have explicitly set your JavaScript functions runtime to Node 10, you will need to upgrade to a newer version of Node or remove the AWS_LAMBDA_JS_RUNTIME environment variable altogether, in which case we will default to using Node 12. [Read the post](https://answers.netlify.com/t/end-of-support-for-node-10-in-netlify-functions-everything-you-need-to-know/40033)

## Popular Articles

[![Take the Jamstack 2021 Community Survey](/v3/img/blog/jamstack-community-survey-og-image-14.png)](https://www.surveymonkey.com/r/jamstack-survey-blog)

* [Take the 2021 Jamstack Community Survey](https://www.netlify.com/blog/2021/06/23/take-the-2021-jamstack-community-survey/)
* [Migrating Cypress Tests from a Github Action to a Netlify Build Plugin](https://www.netlify.com/blog/2021/06/22/migrating-cypress-tests-from-a-github-action-to-a-netlify-build-plugin/)
* [Some Jamstack features you should use more often](https://www.netlify.com/blog/2021/06/17/some-jamstack-features-you-should-use-more-often/)
* [E-Commerce Jamstack Stories from Headless Commerce Summit 2021](https://www.netlify.com/blog/2021/06/16/e-commerce-jamstack-stories-from-headless-commerce-summit-2021/)
* [How Next.js Became a Top Jamstack Framework](https://www.netlify.com/blog/2021/06/14/how-next.js-became-a-top-jamstack-framework/)
* [The Developer’s Intro to Core Web Vitals](https://www.netlify.com/blog/2021/06/11/the-developers-intro-to-core-web-vitals/)
* [How to build a database-driven Jamstack site](https://www.netlify.com/blog/2021/06/10/how-to-build-a-database-driven-jamstack-site/)
* [React 18 Alpha is out! Now what?](https://www.netlify.com/blog/2021/06/08/react-18-alpha-is-out-now-what/)

To stay up to date on changes like these, head over to the [updates category in Netlify Support Forums](https://answers.netlify.com/c/features/updates/51?utm_campaign=General%20Newsletter&utm_medium=email&_hsmi=2&_hsenc=p2ANqtz--IRbpFAIm-gHxhvzRpuED2Q87pw9BrlTky8RmNQjMRUOK0uvr-q9Jun4pyibKQRN-rXNX37M4ZGEpI2N1ZQyP4BH9v3w&utm_content=2&utm_source=hs_email) and click on your profile icon, then click the bell icon to receive real-time notifications. We can’t wait to see what you build next!

\- Brad Johnson, Product Marketing Manager, Netlify
