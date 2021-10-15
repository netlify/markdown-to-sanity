---
title: Building an E-commerce Site with Nuxt and Shopify's New Storefront Cart API - Part 1
description: Create your own online shopping experience using the new
  Shopify Storefront API Cart feature, Nuxt, and Netlify's serverless functions.
authors:
  - Ben Hong
date: 2021-07-21
lastmod: 2021-07-21
topics:
  - tools
tags:
  - Shopify
  - Ecommerce
  - Nuxt
  - Serverless
  - Functions
  - Vue
tweet: ""
format: blog
relatedposts:
  - Shopify announces enhanced Storefront APIs - A first look with Gridsome and
    Netlify
seo:
  metatitle: Build your own e-commerce site with the new Shopify Storefront API Cart feature, Nuxt, and serverless functions with Netlify
  metadescription: Learn how you can create your own online shopping experience using the new Shopify Storefront API Cart feature, Nuxt, and Netlify's serverless functions.
  ogimage: /img/blog/og-shopify-with-nuxt.png
---
## Introduction

When building an e-commerce site, [Shopify](https://www.shopify.com) is one of the most popular options for people to manage their inventory. Recently, they announced an enhancement to their [Storefront API](https://shopify.dev/custom-storefronts/cart): the ability to manage a cart! And while this may seem fairly standard feature for e-commerce stores, this was previously something that was only manageable via its [Admin API](https://shopify.dev/api/admin).

With the release of this new API, it was only natural that I try to integrate it with the amazing [Nuxt](https://nuxtjs.org/) framework!

![Screenshot of Shopify + Nuxt Kit](/img/blog/shopify-nuxt-kit-blog-post-part-1.png)

## Demo & Source Code

If you just want to jump right into the demo and poke around, here's the link and repo:

- 🔗: [Shopify Nuxt Kit Website](https://shopify-nuxt-kit.netlify.app/ "https://shopify-nuxt-kit.netlify.app/")
- 💻: [Shopify Nuxt Kit Repo](https://www.github.com/bencodezen/shopify-nuxt-kit)

## What features does it have?

As far as what this kit includes, there are two major aspects that the kit focuses on: products and the cart.

For products, this kit implements the following features:

A user can:

- see all available products and their respective variants
- filter the products by their tag(s)
- see a specific product's details
- add one or more items to the cart (which is limited by the inventory of the item)
- remove an item from the cart

For the shopping cart, this kit implements the following features:

A user can:

- see the number of items in the cart
- see a dedicated row for each item variant with details (such as quantity)
- displays the item cost based on quantity
- displays subtotal, tax, and total amounts
- see the same cart when they leave and return to the site

## How did you implement it?

Great question. As hinted in the title, this is a multi-part series which will help walk you through the kit and my rationale for how it was implemented. So be on the lookout for more to come soon!

In the meantime, if you're curious how you can implement Shopify's new Storefront Cart functionality in other frameworks, be sure to check my team's other posts:

- [Shopify + Eleventy by Phil Hawksworth](https://ntl.fyi/3kKAMGT)
- [Gridsome by Ekene Eze](https://ntl.fyi/3BoRkdx)
- More coming soon...
