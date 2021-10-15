---
title: How Outfit7 uses Netlify and Sentry for Mobile App Development
description: Hear from the team at gaming and entertainment company Outfit7 about how they navigate the challenges of building mobile web apps.
authors:
  - Rahul Chhabria
  - Sarfaraz Rydhan
date: 2020-10-29
lastmod: 2020-10-28
topics:
  - case-studies
tags:
  - mobile app
  - jamstack
  - sentry
  - app development
tweet: ""
format: blog
relatedposts:
  - How Fieldfusion built a SaaS business on Netlify
  - Global Agencies are Teaming Up with Netlify for Jamstack Websites and Web Apps
seo:
  metatitle: How Outfit7 uses Netlify and Sentry for Mobile App Development
  metadescription: Learn how the team at gaming and entertainment company Outfit7 navigates the challenges of building mobile web apps.
---
Back in the day, you were able to FTP a PHP script to a server and it was online. Needless to say, today deploying and maintaining software is far more complicated than it was and should be.

Understanding these struggles first hand is primarily what drove the creation of both Netlify and Sentry. Netlify is on a mission to bring the simplicity of building and hosting software for the web based on the [Jamstack](https://www.netlify.com/jamstack/?utm_source=netlify.com%2Fblog%2F&utm_medium=blog&utm_campaign=partner-post-sentry) architecture, while [Sentry](https://sentry.io/signup/) is focused on helping developers diagnose, fix, and optimize their code. Together these tools help software teams ship customer value continuously with a new level of confidence.

![Outfit7 logo image](/img/blog/outfit7_netlifyblogbanner.png)

We recently sat down with Primož Bevk, Senior IT Strategist at [Outfit7](https://outfit7.com/applications/), to learn more about how the team at the multinational gaming and entertainment company navigates the challenges of building mobile web applications, all while shipping frequent updates. Outfit7’s portfolio of over 20 games have a mind-bending 14 billion global downloads – and an engaged fan base that wants more of the fun and games they’ve come to know and love. Dedicated to continuing to deliver a first-class gaming experience, Outfit7 evaluated the tools it was using to help the team ship code changes frequently and address customer-facing issues quickly.

Outfit7 powers some of its app features with web technologies, which allows the team to ship changes and ensures every customer sees them without having to update their app. The freedom of this has undeniable benefits, but building and deploying this mini-web app had drawbacks. Outfit7 used Netlify to deploy changes as soon as they were merged to master.

> “Moving our web development to the Jamstack and adopting Netlify CI was a huge time save in terms of team hours,” said Bevk.

The company also used Netlify to set up bespoke environments for testing, allowing the team to test and evaluate multiple new features at the same time by Developers, QA, and Product Managers. This meant that they didn’t have to schedule feature previews for approval on a single test instance. And the website performance improved too.

> “We reduced the average document to interactive time by 67% after moving to Jamstack and Netlify and we see further improvements as we roll out optimisations,” said Bevk.

Outfit7 also wanted coverage on the user side too. So Primož set up the Sentry Netlify Build plugin and installed Sentry’s error monitoring tool, which helped the team prioritize what issues to fix based on user impact. Sentry provided the necessary context for every issue, and made it easy for the team to see how many users were impacted, and which browsers and operating systems were important.

> “We have monitoring in place on all our backend infrastructure and on the user side within native code, but there were a few blind spots within apps where we were running web integrations. Sentry helps us prioritize what we need to fix and what to focus on. It helped us see what was going on with our users in a meaningful way,” said Bevk.

Additionally, the team chose Netlify’s one-click deploy rollback feature. This meant that if a critical error was detected, Outfit7 could just roll back the release.

> “It’s great to have this failsafe, especially when rollback is almost instant. The Build Plugin framework makes it easy to automate releases and revert if we have to,” said Bevk.

With Netlify and Sentry, Outfit7 is able to deliver updates to web integrations quickly, resolve errors efficiently, and optimize engineering work throughout the entire web application development process.

> “The most noticeable for us was an average of 3 hours per week saved in terms of performing deploys, setting up configurations and maintaining infrastructure. For a small web dev team, this has a huge impact,” said Bevk.

If you’re looking to ship more often with more confidence and less errors, you can use the [Sentry Plugin](https://app.netlify.com/plugins/@sentry/netlify-build-plugin/install) with your Netlify Builds, or learn more about [using Sentry with Netlify](https://blog.sentry.io/2020/06/08/automating-sentry-releases-with-our-netlify-build-plugin/). If you are maintaining an essential website at work, [let's chat](https://www.netlify.com/enterprise/contact/?utm_source=netlify.com%2Fblog%2F&utm_medium=blog&utm_campaign=partner-post-sentry) about using Sentry with Netlify.

---

### About the author:

Rahul Chhabria is Director of Product Marketing at Sentry and a forever tinkerer. When he’s not writing blogs like the one you just read, you can find him experimenting in the kitchen. He’ll put anything in a whipped cream dispenser or a waffle iron. Maple syrup foam and spam waffles anyone?

### About Sentry:

Sentry's platform helps every developer diagnose, fix, and optimize the performance of their code. With Sentry, software teams can easily trace issues related to software errors, performance, and trends in code quality. Using Sentry decreases resolution time from days to minutes, resulting in freed up developer cycles and happier customers. 

GitHub, Disney, Atlassian, and more than 60,000 other companies rely on Sentry to increase reliability, efficiency and provide millions of users with a glitch-free experience. Put yourself in the best position to ship great software. [Request a demo](https://sentry.io/_/demo/?referrer=pricing&location=plan-card) for more information.

### About Netlify

Netlify is the fastest way to build the fastest sites. Used by more than 1,000,000 web developers and businesses, the [Netlify platform](https://www.netlify.com/products/?utm_source=netlify.com%2Fblog%2F&utm_medium=blog&utm_campaign=partner-post-sentry) provides modern build workflows, serverless functions and a global multi-cloud Edge network to deliver the most performant, secure and scalable websites and applications. Netlify originated the Jamstack category, a modern web architecture that marries the best practices of pre-built sites with the API economy and serverless functions, to deliver the faster load times and dynamic content, without worrying about web servers. Founded in 2014, Netlify is a venture-backed software company headquartered in San Francisco with a global team. For more information, visit [www.netlify.com](https://www.netlify.com/?utm_source=netlify.com%2Fblog%2F&utm_medium=blog&utm_campaign=partner-post-sentry) and follow [@Netlify](https://twitter.com/Netlify) on Twitter.