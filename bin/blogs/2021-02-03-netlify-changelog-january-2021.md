---
title: Netlify Changelog January 2021
description: Check out this Netlify changelog article to get the latest product
  news from Netlify as of January 2021.
authors:
  - Netlify
date: 2021-02-03
lastmod: 2021-02-03
topics:
  - news
tags:
  - changelog
tweet: ""
format: blog
relatedposts:
  - Netlify Changelog November 2020
  - Netlify Changelog October 2020
seo:
  metadescription: See Netlify's Product Changelog Updates from Netlify.
  metatitle: See Netlify's Product Changelog Updates for January 2021
---
This is a re-publishing of our product changelog newsletter sent to subscribers earlier this month. Sign up to receive future product news and updates!

{% renderFile './src/components/pages/blog/newsletter.vue' %}

You and your team can build an even better web with these latest enhancements from Netlify.

### Next.js on Netlify one-click install

*New Build Plugin makes it even easier to work with Next.js*

Now it’s easier than ever to build and deploy Next.js applications with server-side rendering and live preview mode on Netlify. Just click to install the new [Next on Netlify](http://app.netlify.com/plugins/@netlify/plugin-nextjs/install) Build Plugin from the directory in the Netlify UI and you’re ready to roll. [Learn more](https://www.netlify.com/blog/2020/12/07/announcing-one-click-install-next.js-build-plugin-on-netlify/)

### Rust support on Netlify

*Use Rust to build websites and web apps with Netlify*

Rust is becoming more and more popular for building fast and efficient web apps. Now it’s supported natively in Netlify. The [rustup](https://github.com/rust-lang/rustup/blob/master/README.md#rust) installer and [Cargo](https://doc.rust-lang.org/cargo) build system are pre-installed in Netlify’s default build image. [Read the docs](https://docs.netlify.com/configure-builds/manage-dependencies)

### New `onSuccess` and `onEnd` events for Build Plugins

*Automate even more of your DevOps workflow*

You can now trigger events after deployment and post-processing with `onSuccess` and `onEnd` events. These new event handlers will enable a new generation of build plugins for use cases such as running performance audits or crawling pages for search indexing. [Learn more](https://community.netlify.com/t/netlify-build-plugins-changes-to-when-onsuccess-and-onend-are-invoked-during-the-build-cycle/23489)

### Other Recent Updates

* **Better logs for failed deploys -** Clearer formatting, extra debugging information, and tips for sites that no longer have a master branch help you get your deploys back in working order as quickly as possible. [Learn more](https://community.netlify.com/t/deploy-log-improvements-clearer-errors-and-tips-for-repos-dropping-master/31242)
* **Faster builds when using plugins -** we’ve made a bunch of improvements to the build process when you’re using Build Plugins installed from the Netlify UI. We reduced the size of the build image, made it faster for authors to publish new plugins, and more. [Read the post](https://community.netlify.com/t/build-process-improvements-for-plugins-installed-from-the-netlify-app/28522)
* **Manually delete your DNS records** - DNS records for sites using Netlify DNS can now be deleted by an account owner. Previously this required help from our Support team. [Learn more](https://community.netlify.com/t/update-dns-records-are-now-deletable-by-default/29989)
* **Improvements to Netlify Forms** - We’ve improved the experience of using [Forms](https://www.netlify.com/products/forms/), giving you helpful reminders in the build logs for using name attributes, HTTP request methods, and form fields.
* **Timing out your old builds** - Sometimes things go wrong and builds get stuck. Now, we’ll automatically remove old builds that don’t complete within one day or 5x your account build time limit, whichever comes first.
* **Netlify Docs help resources and tips** - Netlify and community help resources are now organized in one place, giving you guidance on everything from finding your site name to best practices for interacting with Netify’s support team. [Check it out](https://docs.netlify.com/get-help/resources-and-tips/)
* **Jamstack Explorers learning hub** - Learn the tools and techniques for building the modern web. Chart a course through new frameworks, Netlify's features and workflows, and the very fabric of HTML, CSS, and JavaScript itself. Track your progress. Earn rewards. [Choose your mission](https://explorers.netlify.com/)

### Articles You May Have Missed

* [Changes to Google SSO & impact to Netlify Identity users](https://community.netlify.com/t/google-will-discontinue-support-for-sign-ins-to-google-accounts-from-embedded-browser-frameworks-starting-january-4-2021/28052)
* [Ending support for Node.js 8 in Netlify CLI](https://community.netlify.com/t/netlify-cli-dropping-support-for-node-js-8/28459)
* [Top 10 Netlify Build Plugins](https://www.netlify.com/blog/2021/01/25/top-10-netlify-build-plugins-2021-update/)
* [The Jamstack Book: Now FREE on audiobook](https://www.netlify.com/blog/2020/12/22/jamstack-to-your-ears-the-jamstack-book-now-in-audiobook-format/)
* [Going Jamstack with .NET](https://www.netlify.com/blog/2021/01/22/why-should-.net-developers-be-interested-in-jamstack/)
* [Building a registration page with Composition API & Functions](https://www.netlify.com/blog/2021/01/12/building-an-event-registration-page-with-composition-api-and-serverless-functions/)
* [How Algolia built their Nelify Plugin](https://www.netlify.com/blog/2021/01/20/how-algolia-created-its-netlify-build-plugin/)
* [Deploying from CodePen to Netlify](https://www.netlify.com/blog/2020/12/12/deploy-from-codepen-to-netlify-in-less-than-30-seconds/)
* [Environment variables in Next.js & Netlify](https://www.netlify.com/blog/2020/12/10/environment-variables-in-next.js-and-netlify/)