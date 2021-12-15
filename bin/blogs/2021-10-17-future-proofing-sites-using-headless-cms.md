---
title: Learning to future-proof sites using headless CMS and different SSGs
description: How creating a clean separation between your site and your content
  platform can bring you greater flexibility for the future. No matter which
  front-end framework you use.
authors:
  - Phil Hawksworth
date: 2021-10-25
lastmod: 2021-10-24
topics:
  - tutorials
tags:
  - Decoupled
  - CMS
  - Build Plugins
  - Examples
tweet: ""
format: blog
---
![The menu page of an example restaurant site](/v3/img/blog/belly-menu.jpg "The menu page of an example restaurant site")

[Decoupled architectures](https://jamstack.org/glossary/decoupling/) are precious enablers when it comes to modern web development. We no longer need to find a content management system which provides not only how we manage the administration of content, but also the development tooling for our sites, and how we host and serve them, all under one roof. 

Roofs that big are expensive. And usually leak.

By being separated from the tools developers use to build the end product, a decoupled CMS allows us to use the best tools for each job. And to create the best experience for the users.

Recently, the Developer Experience team at Netlify, have been exploring a variety of [site generation](https://jamstack.org/glossary/ssg/) tools and frameworks. As the popularity of different tools and frameworks ebbs and flows, it can be useful to look at how they can each be used for a similar project to see which fits you, and the project best. 

It's fair to say that we each have our opinions on the current and next generation of site generation tools. But I'll let my colleagues express their own thoughts and preferences. ;)

## A common use case

We chose an example web development project which represents a very common set of requirements. A simple website for a restaurant.

Starting at the beginning — the requirements:

* Show information about the restaurant such as location, contact details, and opening hours
* Provide a menu page with details of the food on offer, with prices, dietary information, descriptions and photos
* Deliver the content equally well on mobile and desktop devices, and don't use things like PDF documents for the menu (a common failure of restaurant sites brought about by a lack of appropriate content management options)
* Allow a non-developer to maintain the menu and restaurant information by using a suitable content management system.

## Characteristics

With the world of modern web development tools as our playground, we had the chance to choose whatever we wanted to build some reference implementations. But as with any project, it's important to consider the characteristics of the site and its operation to help us inform our choices.

A site such as this would typically:

* Be updated infrequently. Perhaps once a week or once a day
* Be primarily informational, rather than transactional
* Benefit from efficient search engine discovery and semantic markup
* Benefit from performing well on mobile devices, and in mobile connectivity contexts (because we often choose restaurants when we are on the move)

## Examples sites

We'll dig into what was built and how in a moment, but if you're the kind of person who wants to take a peek at the example site first, and then explore the implementation (it me!), here you go!

* [A simple restaurant site built with Next.js 12](https://demo-restaurant-contentful-next.netlify.app/)
* [A simple restaurant site built with Nuxt](https://demo-restaurant-contentful-nuxt.netlify.app/)
* [A simple restaurant site built with Astro](https://demo-restaurant-astro-contentful.netlify.app/)
* [A simple restaurant site built with SolidJS](https://demo-restaurant-contentful-solid.netlify.app/)
* [A simple restaurant site built with Eleventy](https://demo-restaurant-11ty-contentful.netlify.app/)

Want to learn more about how we chose to architect these sites, no matter which framework we used? Read on!

## Tools

First up, we wanted to choose a [headless CMS](https://jamstack.org/glossary/headless-technology/) for the management of the restaurant information and the menu. There are a number of such content management systems that we are fans of, but for this example we chose [Contentful](https://www.contentful.com/).

The task of modeling and structuring the content feels simple and intuitive with Contentful, as it offers you a variety of content types and the ability to form associations and relationships between them as you plan things. All of which shapes the content population interface which authors will later use.

Contentful also gives some fundamental tools for modern web development like:

* A rich and focused content authoring experience
* Content exposed by authenticated or open APIs
* Webhook support for triggering events in other platforms and keeping sites fresh

![A view of the content in Contentful CMS](/v3/img/blog/contentfulbelly-cms.jpg "A view of the content in Contentful CMS")

## When to render?

Based on the requirements and characteristics we identified for a site like this, we found that we could adopt one of the simplest and most robust methods of rendering the content into the site: pre-rendering the site during a build. Some of the frameworks could also automatically support rendering content client-side, but due to the site's update frequency and common content views, that would be unnecessary.

Also, by combining [Netlify's build hooks](https://docs.netlify.com/configure-builds/build-hooks/#app) and Contentful web hook support, we could automatically regenerate and deploy each example version of the site whenever content changes were published in the CMS.

## Normalizing and future-proofing

Even today, you might sometimes find organizations being cautious about using a third party service for providing their content management tooling. "What if they go away?" you might hear, as a challenge to not rolling your own in-house content platform.

Content management vendors such as Contentful have more than proven themselves as dependable and resilient offerings. And they will offer far better service level agreements than most of us will be able to guarantee in-house. But let's not dismiss this out of hand. They might be here to stay, but there is still the chance that our own preferences or needs might change some time in the future, so wouldn't it be wise to plan our projects so that swapping out key pieces of the platform is possible if we need to?

It's nice to know that we'll stick with out chosen vendors because they offer the best experiences for us, rather than because we are stuck with them due to some tangled and complicated vendor lock-in.

This portability and freedom is a huge selling point for this type of decoupled architecture. And the impressive and thoughtful evolution of the players in the decoupled CMS category is a testament to it.

So, happy as we are with our choice of Contentful, can we also keep our bosses happy by making it easy to swap it out if we really needed to one day? Or indeed if we decided to swap out the framework we're using to generate the site?

We can. Time for a [Netlify Build Plugin](https://www.netlify.com/products/build/plugins/)!

For our project, we are already building a few versions of the same site using a number of frameworks and tools. So this is a great chance to prove an approach which provides this sort of flexibility.

We decided that having a plugin which would go and fetch the content from our CMS, format it and save it locally for our site generators to use when they run, would be really handy.



![The build running in the terminal, showing data being saved locally from Contentful](/v3/img/blog/term-contentful-build-plugin.png "The build running in the terminal, showing data being saved locally from Contentful")



All popular site generators have support for using local data files as the source for content in their templates. So [we made a Netlify Build Plugin](https://github.com/netlify/demo-restaurant-sites-data) which would do this for us before a build ran. This way, no matter which framework we used, it would just need to look at some local JSON files. The job of authenticating with the CMS, requesting the data and saving it in the structure of our choosing was all helpfully packaged into a single plugin that we could all add to our projects.

What's more, since this plugin output the content in the structure that we dictated rather than the structure specific to the CMS, we made it trivial to migrate all of our sites to a different CMS platform in future, just be replacing this one adapter, all of our site generator code and user interface investments could remain totally unchanged.

Portable!
Handy!

## What did we learn? What can you learn

It's likely that you already have your own preferences when it comes to the technologies and tools you like to use when building a site. But always consider what your project needs. 

For some projects, we need complex client-side logic, state management, and lots of complexity. And there are tools for that. For very many projects, the requirements are likely to be more simple, and so the tools that we use, can be simpler too.

Keeping in mind [the robustness principle](https://en.wikipedia.org/wiki/Robustness_principle), and [the rule of least power](https://en.wikipedia.org/wiki/Rule_of_least_power) can be valuable when building for the web. Which is one of the most variable and unknowable landscapes to deliver software into.

Whatever we are building and whatever tools we choose, this model of using decoupled content management, with new builds triggered when content sources are updated, can bring outstanding results. And a little effort in planning out how these integrations are abstracted, can give you incredible flexibility and portability in the future.

## What's next?

Feel free to explore each of our reference projects (which each include a link to their code on GitHub) 

* [A simple restaurant site built with Next.js](https://demo-restaurant-contentful-next.netlify.app/)
* [A simple restaurant site built with Nuxt](https://demo-restaurant-contentful-nuxt.netlify.app/)
* [A simple restaurant site built with Astro](https://demo-restaurant-astro-contentful.netlify.app/)
* [A simple restaurant site built with SolidJS](https://demo-restaurant-contentful-solid.netlify.app/)
* [A simple restaurant site built with Eleventy](https://demo-restaurant-11ty-contentful.netlify.app/)

And also see how we built [a single content adapter as a Netlify Build Plugin](https://github.com/netlify/demo-restaurant-sites-data) that each of our projects could use.
