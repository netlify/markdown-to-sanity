---
title: 'Top 15 from 2019: features, resources, and news on Netlify and the JAMstack'
description: >-
  Netlify's 2019 year in review - see the Top 15 highlights ranging from new
  features, products, resources, conferences, and continued growth of the
  JAMstack community.
authors:
  - Scott Mathson
date: '2019-12-19'
lastmod: 2020-12-18
topics:
  - news
tags:
  - netlify
  - features
  - jamstack
tweet: >-
  It's been an amazingly productive year here @Netlify and we're going into 2020
  more inspired than ever to help you build, launch, and ship your best web
  projects to-date. 


  We’re grateful for continually being able to help push the modern web forward.
  #Netlify #JAMstack
format: blog
relatedposts:
  - "Top 10 from 2020: Netlify Features & Announcements"
seo:
  metadescription: >-
    See Netlify's 2019 year in review - a list of the Top 15 highlights ranging
    from new features, products, resources, conferences, and continued growth of
    the JAMstack community.
  metatitle: 'Top 15 from 2019: Features, Resources, and Netlify & JAMstack News'
  ogimage: /img/blog/top15-2019.png
---
Where did 2019 go?

It's been an amazingly productive year here at Netlify, with big JAMstack developments, new feature and product announcements, a growing team, and much more. 

We all start the year aiming to try all the latest features of new tools and frameworks to shape our ideas into realities. It's easy to get deep in code solving unique challenges, and before long, you look up and the year is already wrapping up.

In case you missed what we've been up to in 2019 — we have your back.

Read on to catch up on the biggest updates, features, and educational resources of the year, outlined within this article. We hope that you too had a wonderful 2019 and that you're looking forward to the new year ahead.

So, let's reflect on the past, and look forward to the future!

- - -

## Top 15 Netlify features and resources from 2019

![Graphic for Top 15 from 2019: features, resources, and news on Netlify and the JAMstack](/img/blog/top15-2019.png)

**1. Get reliable analytics for your sites with [Netlify Analytics](https://www.netlify.com/products/analytics/)**

Now, your site's data within Netlify is more accurate than ever. Netlify Analytics, introduced in July, uses data pulled straight from our CDN logs, ensuring visitor privacy, data accuracy, and information you can’t get with any client-side analytics solutions. Server-side data collection for Analytics complies with the General Data Protection Regulation (GDPR), has no negative impact on site performance, is not stopped by ad blockers, and does not require any extra configuration.

**2. Customize your CI/CD workflows with [Build Plugins (beta)](https://www.netlify.com/build/plugins-beta/)**

Build Plugins (_currently in private beta,_ [request access here](https://www.netlify.com/build/plugins-beta/)) allows you to write custom scripts that are invoked at particular points when Netlify is building and deploying your site. They are installable packages that extend the functionality of the Netlify build process. Plugins are POJOs (plain old JavaScript objects) that allow users to hook into the different lifecycle steps happening during their site builds. [Learn more about creating your first Netlify Build Plugin](https://www.netlify.com/blog/2019/10/16/creating-and-using-your-first-netlify-build-plugin/) from our Head of Developer Experience Sarah Drasner.

**3. Manage binary files of any size right in your repo, just like code, with [Netlify Large Media](https://www.netlify.com/products/large-media/)**

Storing your site content in a Git repository is great until you start adding large files like images, zip files, and PDFs. Git’s system of tracking diffs doesn’t work with these files, so it saves full copies of every version in your Git repository.

That’s why, in February, we launched Netlify Large Media. It leverages the benefits of Git version tracking without bloating your repository. This saves local development time and speeds up builds by having smaller repositories, separate uploads for large files, and on-demand image transformation.

**4. Create a fully-featured data backend for your web applications with our [FaunaDB Add-on](https://www.netlify.com/blog/2019/09/10/announcing-the-faunadb-add-on-for-netlify/)**

The FaunaDB Add-on for Netlify lets you instantly add FaunaDB—a serverless cloud database with a native GraphQL API—to any [JAMstack](https://jamstack.org/) project running on Netlify.

**5. [Deploy multiple Netlify sites from a single repo](https://www.netlify.com/blog/2019/10/09/launching-monorepo-support-for-netlify-sites/) with increased efficiency**

If you like to store code for multiple sites as subdirectories within a shared Git repository, that workflow became more efficient this October. We added the ability to store independent [Netlify configuration files](https://docs.netlify.com/configure-builds/file-based-configuration/) for each site directory, as well as [automatic, customizable code change detection](https://docs.netlify.com/configure-builds/file-based-configuration/#ignore-builds) to avoid unnecessary builds.

**6. Understand your build processes with [Build Insights](https://community.netlify.com/t/builds-insights-dashboard-launched/5302)**

In November we introduced a way to learn more about your builds and usage of your team’s build minutes, so you can optimize build times and costs.

**7. Prevent and manage spam submissions on Forms with the [built-in Akismet integration](https://www.netlify.com/blog/2019/02/12/improved-netlify-forms-spam-filtering-using-akismet/)**

Since February, all submissions on [Netlify Forms](https://www.netlify.com/products/forms/) had improved spam filtering using Akismet—an industry leader in spam detection—without the need for a reCAPTCHA. You can also see (and change) which messages were marked as spam or verified.

**8. 2019 was a year of [many improvements to the Netlify Platform](https://community.netlify.com/c/features/updates/51) – the app, experience, workflows, and backend**

We continuously iterate throughout the year to make the UI/UX more intuitive and flexible, the CI/CD workflows faster and more customizable, and the backend more modern and powerful. 

Some of the many improvements include:

* [Ability to cancel deploys](https://www.netlify.com/blog/2019/06/04/introducing-cancelable-deploys/)
* [Node.js 12 runtime for Netlify Functions](https://www.netlify.com/blog/2019/12/04/node.js-12-now-available-for-netlify-functions/)
* [Helpful tooltips and labels in the app](https://community.netlify.com/t/providing-more-guidance-in-the-ui-when-linking-a-repository-to-a-site/1672)
* Detailed [analytics charts in Netlify Analytics](https://docs.netlify.com/monitor-sites/analytics/)
* Intuitive deploy settings
* Convenient asset optimization controls inside netlify.toml
* Shortcut commands for deploying Netlify Functions
* Badges to show real-time deployment status
* And a whole lot more

**9. Speed up your development flow with [Netlify Dev](https://www.netlify.com/products/dev/)**

Netlify Dev brings the functionality of your Netlify production environment directly to your local machine. This includes custom headers/redirects and environment variables. You can also share live previews of your local development server over HTTPS with anyone in the world, to get immediate feedback without waiting for deploys.

**10. Get the information you need faster with the [new and improved Netlify Docs](https://docs.netlify.com/)**

We spent many months creating a new and improved documentation site to help you find the information you need and get the most out of Netlify. In the process, we completely re-organized the information architecture to make navigation more intuitive and to support further expansion of our documentation. [Learn more about Netlify’s documentation site](https://www.netlify.com/blog/2019/10/15/new-and-improved-netlify-docs/) from our Documentation Engineer Jessica Parsons.

**11. Learn to run anything from simple sites to complex applications on the JAMstack by reading _[Modern Web Development on the JAMstack](https://www.netlify.com/oreilly-jamstack/)_ (O’Reilly)**

This year we teamed up with O’Reilly to publish the biggest and best guide to the JAMstack. It covers what constitutes a JAMstack site, the benefits and opportunities of using JAMstack, the tools and services within the ecosystem, how it differs from other stacks, and case studies from real-world applications on the JAMstack. [Get your free copy of the JAMstack eBook](https://www.netlify.com/oreilly-jamstack/).

**12. Learn how to deliver web projects 10x faster from [our enterprise whitepaper](https://www.netlify.com/whitepaper/)**

Netlify knows time is precious, so we published a whitepaper to help enterprises ship web projects 10x faster. We'll show you how to improve conversions and site performance, reduce overhead costs, and deliver secure and streamlined products. Alongside going over organizational optimizations with ways to reduce recruiting cycles and retain developers. Curious to learn more about our [Enterprise offerings](https://www.netlify.com/enterprise/)? [Talk to an expert](https://www.netlify.com/enterprise/contact/).

**13. Get inspired by our [collection of customer stories](https://www.netlify.com/customers/)**

Netlify customers make everything from shoes, to cutting edge exercise bikes, to the apps that help you order you favorite food. We help them make better, faster, more secure websites, and we're honored and proud to do that.

We've documented stories from companies like Nike, Citrix, Cornerstone, Peloton, Loblaw, and Restaurant Brands International. Learn how those companies use Netlify and the JAMstack to launch their web products, and gain inspiration and takeaways for your developing your own projects. [Hear these customer’s stories](https://www.netlify.com/customers/).

**14. See the [recap of JAMstack_conf 2019](https://www.netlify.com/blog/2019/11/07/news-from-the-largest-jamstack-conference-yet/)**

This year’s [JAMstack_conf](https://jamstackconf.com/) in San Francisco was the biggest yet, which seems appropriate given it had the unofficial theme of “JAMstack at scale.” [Check out its complete recap](https://www.netlify.com/blog/2019/11/07/news-from-the-largest-jamstack-conference-yet/) to learn about the conference happenings: Practical sessions about JAMstack, insightful stories, and perspectives on the rapid growth of the JAMstack.

**15. Learn from the growing [JAMstack community](https://jamstack.org/)**

We launched the [Netlify Community forums](https://community.netlify.com/) mid-year and have already had more than 3,200 participants and contributors submit thousands of informative posts and conversations, and it's all growing at an ever-increasing pace. If you have questions, ideas, or insights about Netlify, there is no better place to collaborate than [community.netlify.com](https://community.netlify.com/).

- - -

We're going into 2020 more inspired than ever, with our continued mission of empowering you to build, launch, and ship your biggest and best web projects to-date.

More, big announcements are coming soon, including 2020 JAMstack_conf locations and dates, continual feature and product development, and a lot more.

This year was huge, and 2020 will be even bigger for Netlify and the JAMstack community! Feel free to share what you worked on and shipped this year, using the [\#Netlify](https://twitter.com/hashtag/netlify) and [\#JAMstack](https://twitter.com/hashtag/jamstack) hashtags on twitter. We’re grateful for continually being able to help push the modern web forward.
