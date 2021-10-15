---
title: Next.js and Netlify for a better and faster Backlinko website
description: Backlinko works with agency Bejamas, selecting Netlify as their web
  development platform for a better performing site. The combo of Netlify
  Functions and the Essential Next.js plugin was a perfect solution for their
  team. Learn how they were able to make the site 3x faster.
authors:
  - Thom Krupa
date: 2021-03-30
lastmod: 2021-03-30
topics:
  - case-studies
tags:
  - WordPress
  - headless
  - case study
  - nextjs
  - functions
  - Jamstack
tweet: ""
format: blog
relatedposts:
  - Try the new Essential Next.js plugin, now with auto-install!
  - Spring uses Netlify to Scale Social Commerce and Boost Conversion for
    Creators
seo:
  metadescription: Backlinko worked with agency Bejamas, selecting Netlify as
    their webdev platform. Learn how they made the site 3x faster with Netlify
    Functions + Essential Next.js plugin.
  ogimage: /img/blog/next.js-and-netlify-backlinko.png
  metatitle: Learn About the Better, Faster Backlinko - Next.js and Netlify
---
*This story is contributed to the Netlify blog by Thom Krupa, Co-Founder & CTO @ Bejamas.*

Backlinko is one of the world’s top websites for SEO tips, advice, and training. Brian Dean created it in 2013, who was on a mission to provide practical advice for marketers and companies of all sizes.

[Backlinko](https://backlinko.com/) was powered by classic, monolithic WordPress. Over the years, they struggled with performance issues, and the website became slow and hard to maintain. To keep up with the market trends, they realized they needed a reliable architecture backing their website. They decided to move to Jamstack.

![Backlinko is one of the world’s top websites for SEO tips, advice, and training](/img/blog/backlinko.png "Backlinko is one of the world’s top websites for SEO tips, advice, and training")

## Challenges

Backlinko’s custom WordPress theme had hundreds of components and became tough to maintain. Pages were loading slowly because they were overloaded with legacy CSS and JS. The website needed a solid refactor.

Backlinko wanted to modernize the tech stack and use modern technologies that solve performance issues. While researching available options, they discovered the [Jamstack](https://jamstack.org/) and [Bejamas](https://bejamas.io/).

Jamstack is designed to allow the decoupling of different parts of the website. That kind of approach leads to many benefits. For example, it allows you to maintain the backend and frontend separately instead of having one monolith (like a traditional WordPress website).

For the website audience, the main benefit is better performance. Time to first byte (TFB) is faster since every page is pre-built. Static HTML is hosted directly on the CDN, and because it’s closer to every user across the globe, loading immediately became faster. Perceived performance is also faster with Next.js (as explained in our [Backlinko case study](https://bejamas.io/blog/backlinko-case-study/)).

## Decoupling WordPress

Many people love WordPress. Despite many issues with plugins, scalability, and performance, it is still a great editor-friendly CMS. We wanted to keep WordPress but use it as a [headless CMS](https://jamstack.org/headless-cms/) to avoid already mentioned problems.

Instead of using PHP templates and mixing them with HTML, we used WordPress API that returns content in JSON format.

![Backlinko architecture with headless WordPress and Netlify](/img/blog/netlify-backlinko.png "Backlinko architecture with headless WordPress and Netlify")

We combined WordPress with the WPGraphQL plugin and made a single request to GraphQL endpoint instead of making multiple REST API requests for data. This way, we got all the content we need to build posts and pages.

## Deploying Next.js on Netlify

The main reason we chose Next.js for this project is because of its flexibility. Although we use it mainly as a static site generator, it can be switched to hybrid mode anytime if needed.

The great thing about Next.js is that you can host it pretty much anywhere if it runs the next static export mode. However, we need to host a bunch of serverless API functions as well for this project. So, it had to be a place where we can do both, i.e., host serverless functions and seamlessly run every Next.js feature. [Netlify Functions](https://www.netlify.com/products/functions/) and [Essential Next.js plugin on Netlify](https://www.netlify.com/blog/2021/03/16/try-the-new-essential-next.js-plugin-now-with-auto-install/) combo was a perfect solution for us.

### Building time

One of the biggest problems we have had on this project was substantial build times. At some point, it was taking up to 25 minutes to rebuild the project. That was a bummer and unacceptable for both Backlinko and us.

It turns out one of the biggest bottlenecks was the long GraphQL response time. We optimized the WordPress backend, moved their WordPress install to a much better WordPress hosting provider [Kinsta](https://kinsta.com/), and enabled better API caching.

Right now, it takes about 4 minutes to do a complete rebuild of more than 400 content-heavy posts and pages.

### A solution to building can be no building at all

There is another approach to solve the building problem - don’t build. Next.js has a feature called [Incremental Static Regeneration](https://www.netlify.com/blog/2021/03/08/incremental-static-regeneration-its-benefits-and-its-flaws/). We can set several seconds for revalidation and optionally a fallback if the page is not ready yet. It’s supported by Netlify too. It sounds excellent, and it worked perfectly in a dev environment.

When we deployed it to production, however, we quickly realized we started [DDoSing](https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/) our backend. Each page has been revalidated every 60 seconds for thousands of users. A potential solution would be to increase the revalidation interval to a couple of hours. But it doesn’t make sense if the static build takes just 4 minutes.

You can show stale content for a long time and occasionally look for a new version or don’t cache HTML at all on CDN. With no caching, the content will always be fresh, but that would extend the loading time, and the server will be very busy, which is expensive.

Content on Backlinko doesn’t change often, but it doesn’t mean we want to keep and show a stale version for a long time. In this case, building and redeploying a website on content changes is much cheaper and easier to scale than using the stale-while-revalidate pattern. Once new content is published, Backlinko needs to be sure that every reader sees the most recent post.

## [Preview Mode](https://www.netlify.com/blog/2020/10/27/preview-mode-for-next.js-now-fully-supported-on-netlify/)

Preview is an essential part of Backlinko’s workflow, and it’s a native WordPress feature. You make a change, save, refresh the page and see the updated version. However, that's an issue in the static world. To see new changes, you need to trigger a rebuild. It’s annoying for content editors, it doesn’t scale, and it’s a waste of resources.

To solve this, we created a preview environment for the project that shares the same code repository but runs the app in SSR mode. HTML is generated on each request by the Netlify function. We don’t need to rebuild the whole project to see changes. This environment is separated from the main website, which adds another security layer since it’s closed behind an auth gate.

We modified the Preview button in the WordPress dashboard to make entering the preview seamless for editors. The button leads to the Netlify Function, which sets a cookie that enables Next.js Preview Mode and redirects to the requested post. For the editor, the experience is very similar to the native WordPress preview feature.

## Results

The final results are pretty outstanding. We managed to improve almost every performance metric without losing any of the websites’ functionalities. Overall, page loading speed is 3x faster. You can check out a detailed overview of all [performance improvements we’ve made to Backlinko](https://bejamas.io/blog/backlinko-case-study/) at our blog.

While we did achieve Backlinko’s goals of having a performant website, the biggest win for us is getting a top SEO company to recognize the Jamstack approach’s business potential.

**[Learn more about the zero-configuration Essential Next.js plugin for Netlify](https://www.netlify.com/blog/2021/03/16/try-the-new-essential-next.js-plugin-now-with-auto-install/).**

- - -

**About Backlinko**: Backlinko is a SEO training company with a focus on B2B. In addition to the Backlinko blog, the company also owns and manages Exploding Topics.

**About Bejamas**: Bejamas is a modern web dev shop with Jamstack and Edge/SSR/hybrid expertise focused on maximizing business potential for agencies and companies with performant and secure websites.

**About the author, Thom Krupa**: Co-founder of Bejamas with over 8 years of experience in the web development space. Started as a designer, turned into a programmer. Had an affair with growth marketing. Now focuses on helping people create faster and better web products.