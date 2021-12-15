---
title: Wayfx Deploys Lightning-fast Headless WordPress to Netlify
description: >-
  How the web agency Wayfx brought the site for their client Dr. Anthony Gustin
  to a JAMstack architecture.
authors:
  - Josh Day
date: '2019-05-16'
lastmod: 2020-07-09
topics:
  - case-studies
tweet: ''
format: blog
relatedposts:
  - "How LiveChat Migrated from WordPress to the Jamstack with Netlify"
---
When the founder of Perfect Keto, Dr. Anthony Gustin, wanted to redo his popular WordPress website, speed was key. But with WordPress, how fast can a site really get? Come to find out—lightning-fast.

Partnering with the web agency Wayfx, Dr. Gustin adopted a Headless WordPress architecture for the new website. Together they decided to throw out the previous solution in favor of WP Engine and Netlify, and are now delivering pages excitingly fast.

![](/v3/img/blog/keto-site.png)

## Results

![](/v3/img/blog/speed-graphic.png)

## What is Headless WordPress

Headless WordPress means that the end user experience is decoupled from the content management system. So the site uses the WordPress backend but not the WordPress frontend (hence the name headless). Instead, the end user experience (aka the frontend) communicates with WordPress through the Rest API and is hosted away from WordPress (at a static host like Netlify).

![](/v3/img/blog/keto-site-cms.png)

## Benefits of Headless WordPress

Headless web development enables frontend developers to deliver rich, fast, and responsive user experiences. While the idea of Headless WordPress may be new to you, the benefits are proven.

* Frontend developers are freed from the conventions and structures of the backend. Not only are “div-itis” eliminated but total control over the user experience is achieved \[1]
* The frontend and the backend are hosted separately (one server is responsible for WordPress and another is responsible for the end user experience). This means that each server can be optimized for specific tasks 
* Sites are sped up by shifting the display logic from the server-side to the client-side, and the backend is streamlined \[2]
* The potential for designers and developers to create truly interactive experiences is unleashed. Effectively, sites are made into in-browser applications. In the most advanced cases, sites can be bundled as a Progressive Web Applications (PWA), which can run as a mobile app right from users’ home screens

## Headless WordPress Toolkit

Here’s what we used to make Headless WordPress happen:

* [Word](https://wordpress.org/)[P](https://wordpress.org/)[ress](https://wordpress.org/) (with a blank theme) 
* [WordPress API](https://developer.wordpress.org/rest-api/) and GraphQL
* [Gatsby Starter Kit](https://github.com/GatsbyCentral/gatsby-starter-wordpress)
* [GatsbyJS](https://www.gatsbyjs.org/) (static site generator. some developers opt for Vue.js or Next.js) 
* [GitHub](https://github.com/) for version control
* [Advanced Custom Fields](https://www.advancedcustomfields.com/)
* [Netlify Forms](https://www.netlify.com/docs/form-handling/)
* [Zapier](https://zapier.com/) (Netlify Forms webhook)
* [Algolia](https://www.algolia.com/) (real-time search)
* [Disqus](https://disqus.com/)
* [Littlebot](https://github.com/justinwhall/littlebot-netlify) (Netlify plugin)
* [Backtracks](https://backtracks.fm/) (podcast player)

## How WordPress & Netlify Work Together

1. Anyone (to include technical team members) can create a post, edit an existing post, or edit an existing page from the WordPress admin area
2. After the post or page is saved, a build hook on Netlify triggers to rebuild the site with the newest API data
3. The new changes show up in 2-4 minutes after Netlify completes the rebuild (if you are a [Netlify Business customer](https://www.netlify.com/pricing/), the changes appear in less than a minute)

## Do Headless CMS Best with Netlify

Headless CMS and Netlify are a match made in heaven. Headless CMS are a key part of the JAMstack ecosystem, and Netlify was designed to natively support Git centric workflows and JAMstack applications.

So if you’re going Headless with your site, deploying to Netlify means that any content updates you make to the headless CMS will atomically trigger builds and be deployed globally. There are not many services with this kind of integration and workflow, which are designed to give frontend developers superpowers and increase developer productivity 10x.

- - -

**[About Dr. Anthony Gustin](https://perfectketo.com/)**

Dr. Gustin is the Founder and CEO of [Perfect Keto](https://perfectketo.com/) and [Equip Foods](https://www.equipfoods.com/), and is the host of the [The Keto Answers Podcast](https://www.stitcher.com/podcast/dr-anthony-gustin-founder-of-perfect-keto-functional-medicine/keto-answers-podcast-low-carb-lifestyle-ketogenic-diet-nutrition).

**[About Wayfx](https://wayfx.com)**

Wayfx is a web agency trusted by some of the biggest ecommerce and SaaS startups. Wayfx software for WordPress and Shopify propels marketing teams forward, freeing them to do more than ever.

\[1] Smashing Magazine \[2, 3] Pantheon
