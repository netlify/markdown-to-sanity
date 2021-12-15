---
title: E-Commerce with Angular, Shopify & Netlify Serverless Functions
description: Use this reference template to build out a products page and cart
  using Angular, Shopify, and Netlify Serverless Function.
authors:
  - Tara Z. Manicsic
date: 2021-08-25
lastmod: 2021-07-18
topics:
  - tools
tags:
  - Angular
  - Shopify
  - E-commerce
  - Netlify Functions
tweet: ""
format: blog
seo:
  metadescription: Use this reference template to build out a products page and
    cart using Angular, Shopify, and Netlify Serverless Function.
  metatitle: E-Commerce with Angular, Shopify & Netlify Serverless Functions
  ogimage: /v3/img/blog/og-shopify-with-angular.png
---
> Check out the same-same-but-different projects using [11ty](https://www.netlify.com/blog/2021/07/20/build-your-own-shop-with-the-shopify-storefront-api-eleventy-and-serverless-functions/), [Astro](https://www.netlify.com/blog/2021/07/23/build-a-modern-shopping-site-with-astro-and-serverless-functions/), [Gridsome](https://www.netlify.com/blog/2021/07/19/shopify-announces-enhanced-storefront-apis-a-first-look-with-gridsome-and-netlify/), and [Nuxt](https://www.netlify.com/blog/2021/07/21/building-an-e-commerce-site-with-nuxt-and-shopifys-new-storefront-cart-api-part-1/) by some very talented developers.

[Shopify recently added cart functionality](https://twitter.com/Shopify/status/1409928422541910020?s=20) to their Storefront API so we decided to try it out with Angular and [Netlify functions](https://ntl.fyi/3irS2hc) for some serverless action. May I introduce to you a reference template to help you build out an e-commerce site of your own.

![the home page products page ](/v3/img/blog/screen-shot-2021-08-18-at-9.18.39-am.jpg "the products page ")

> Per usual, I would like to offer you this magical button that allows you to just click it and have this project transported to a Netlify account near you (and by that I mean *your* Netlify account.)
> [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tzmanics/angular-shopify&utm_source=blog&utm_medium=ng-shopify-tzm&utm_campaign=devex)

## What it is

This template is based on a charcuterie dealership but if for some reason, that's not your business, you can customize the products and headers. This template sets up the process to:

* Grab products from Shopify for the main products page
* Use [NgRx](https://ngrx.io/) to manage the state of the cart & products list
* Loop through the products in a details page that uses the product title as the route
* Add radio buttons for products with multiple variants
* Utilize the Shopify cart to add and remove items and
* Add taxes and shipping to show the user the total amount

![a screenshot of the product detail page for aged gruyere with variants](/v3/img/blog/screen-shot-2021-08-17-at-11.54.00-pm.jpg "product detail page")

## The Pieces

Using the Angular CLI, this project was created from the default template. A cart and products service was generated to interact with the Netlify serverless Functions that are grabbing the data from Shopify via GraphQL. Then a cart and product store were created using NgRx to keep their states.

> 🧠 to make this project your own remember the project name `ng-shopify` will need to be replaced throughout the whole project (find/replace all works best).

The Netlify Functions live in `netlify/functions` and are set up and maintained by Netlify. Their logs can be seen when running locally using Netlify's [`netlify dev`](https://ntl.fyi/3kxvgqY) or in the project's Netlify dashboard. I have a whole [blog post on getting started with Netlify Functions](https://ntl.fyi/2W0ZEQB) that can provide more information.

And finally, the [Shopify Storefront API](https://shopify.dev/api/storefront) made it so that my team could make one Shopify store and pull the data to use with all different frameworks (Astro, Gridsome, Nuxt, Eleventy, and more)! It was interesting to see that not only did Shopify offer up a great UI but made it so that we could use one set of serverless functions to rule them all, ehm, I mean use on all our projects 🤓.

![screenshot of cart page with items and totals](/v3/img/blog/screen-shot-2021-08-17-at-11.54.20-pm.jpg "cart page")

## Here is the Stuff

I hope you are able to use this reference template to make all your e-commerce dreams come true. Use it wisely, or not, just have fun and make monies! Happy coding 👩🏻‍💻!

* [Ng-Shopify Repo](https://github.com/tzmanics/angular-shopify)
* [Live Demo](https://angular-shopify.netlify.app)
