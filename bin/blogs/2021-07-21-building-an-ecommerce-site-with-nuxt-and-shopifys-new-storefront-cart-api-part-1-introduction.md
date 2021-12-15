---
title: Building a Headless Shopify E-commerce Site with Nuxt and The Storefront
  API (Part 1)
description: Create your own online shopping experience using the new Shopify
  Storefront API Cart feature, Nuxt, and Netlify's serverless functions.
authors:
  - Ben Hong
date: 2021-07-21
lastmod: 2021-07-21
topics:
  - tools
tags:
  - Shopify
  - E-commerce
  - Nuxt
  - Serverless
  - Functions
  - Vue
  - Headless
tweet: ""
format: blog
relatedposts:
  - Shopify announces enhanced Storefront APIs - A first look with Gridsome and
    Netlify
seo:
  metatitle: Build your own e-commerce site with the new Shopify Storefront API
    Cart feature, Nuxt, and serverless functions with Netlify
  metadescription: Learn how you can create your own online  a headless shopping
    experience using the new Shopify Storefront API Cart feature, Nuxt, and
    Netlify's serverless functions.
  ogimage: /v3/img/blog/nuxt-shopify-og.png
---
When building an e-commerce site, [Shopify](https://www.shopify.com) is one of the most popular options for people to manage their inventory. Recently, they announced an enhancement to their [Storefront API](https://shopify.dev/custom-storefronts/cart): the ability to manage a cart! And while this may seem fairly standard feature for e-commerce stores, this was previously something that was only manageable via its [Admin API](https://shopify.dev/api/admin). This enhancement makes building [headless Shopify e-commerce sites](https://www.shopify.com/enterprise/headless-commerce)—where the frontend experience is decoupled from Shopify's backend—even easier for developers.

<p style="text-align:center"><a href="https://www.netlify.com/for/ecommerce/" class="button">Deploy an eCommerce Site to Netlify for Free</a></p>

With the release of this new API, it was only natural that I try to integrate it with the amazing [Nuxt](https://nuxtjs.org/) framework!

![Screenshot of Shopify + Nuxt Kit](/v3/img/blog/shopify-nuxt-kit-blog-post-part-1.png)

## **Shopify + Nuxt Kit Demo & Source Code**

If you just want to jump right into the demo and poke around, here's the link and repo:

* 🔗: [Shopify Nuxt Kit Website](https://shopify-nuxt-kit.netlify.app/ "https\://shopify-nuxt-kit.netlify.app/")
* 💻: [Shopify Nuxt Kit Repo](https://www.github.com/bencodezen/shopify-nuxt-kit)

## **Headless commerce features of the Shopify + Nuxt kit**

As far as what this kit includes, there are two major aspects that the kit focuses on: products and the cart.

For products, this kit implements the following features:

A user can:

* see all available products and their respective variants
* filter the products by their tag(s)
* see a specific product's details
* add one or more items to the cart (which is limited by the inventory of the item)
* remove an item from the cart

For the shopping cart, this kit implements the following features:

A user can:

* see the number of items in the cart
* see a dedicated row for each item variant with details (such as quantity)
* displays the item cost based on quantity
* displays subtotal, tax, and total amounts
* see the same cart when they leave and return to the site

## How did you implement it?

Great question. As hinted in the title, this is a multi-part series which will help walk you through the kit and my rationale for how it was implemented. So be on the lookout for more to come soon!

In the meantime, if you're curious how you can implement Shopify's new Storefront Cart functionality in other frameworks, be sure to check my team's other posts:

* [Shopify Storefront API + Eleventy](https://ntl.fyi/3kKAMGT)
* [Shopify Storefront API + Gridsome](https://ntl.fyi/3BoRkdx)
* [Shopify Storefront API + Next.js](https://www.netlify.com/blog/2021/09/13/build-your-own-online-shop-with-next.js-and-shopify/)
* [Shopify Storefront API + Angular](https://www.netlify.com/blog/2021/08/25/e-commerce-with-angular-shopify-netlify-serverless-functions/)
* [Shopify Storefront API + Astro](https://www.netlify.com/blog/2021/07/23/build-a-modern-shopping-site-with-astro-and-serverless-functions/)

<p style="text-align:center"><a href="https://www.netlify.com/for/ecommerce/" class="button">Deploy an eCommerce Site to Netlify for Free</a></p>