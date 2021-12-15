---
title: Build a modern shopping site with Astro and serverless functions
description: If you've ever wanted to build your own online shop, here's how you
  can get up and running with your own custom solution with Astro!
authors:
  - Cassidy Williams
date: 2021-07-23
lastmod: 2021-07-23
topics:
  - tutorials
tags:
  - astro
  - SSG
  - Shopify
  - Serverless
tweet: ""
format: blog
relatedposts:
  - "Build wicked fast sites with Astro: An Introduction"
seo:
  metatitle: Build a modern shopping site with Astro and serverless functions
  metadescription: If you've ever wanted to build your own online shop, here's how
    you can get up and running with your own custom solution with Astro!
  ogimage: /v3/img/blog/og-shopify-with-astro.png
---
Hello!

So many new technologies to play with, so little time! When we saw that Shopify expanded their [Storefront API](https://shopify.dev/api/storefront), the Developer Experience team at Netlify jumped ON it to play around with all of the different ways we could build a shopping site.

I decided to try my hand at building one with [Astro](https://astro.build/) and React!

If you are interested in how I built it, keep on reading. If you'd like to see how the rest of the team built theirs, here's some great posts to get you started:

- [Ekene, with Gridsome](https://www.netlify.com/blog/2021/07/19/shopify-announces-enhanced-storefront-apis-a-first-look-with-gridsome-and-netlify/)
- [Phil, with 11ty](https://www.netlify.com/blog/2021/07/20/build-your-own-shop-with-the-shopify-storefront-api-eleventy-and-serverless-functions/)
- [Ben, with Nuxt](https://www.netlify.com/blog/2021/07/21/building-an-e-commerce-site-with-nuxt-and-shopifys-new-storefront-cart-api-part-1/)
- [Tara, with Angular](https://www.netlify.com/blog/2021/08/25/e-commerce-with-angular-shopify-netlify-serverless-functions/)

## A unified start

Our entire team started with some serverless functions that we shared across our projects to query the Shopify API. These had functionality to:

- Get a product
- Get a list of products
- Add product to cart (and make a new cart object if one doesn't exist)
- Get a cart (that holds products)
- Removes product from the cart

We also had the same styles shared across the projects, so that we could show a near replica of the same site to everyone, just built in a different way!

If you'd like to see the functions, you can go to any of our demo projects, or [here they are in the project we'll talk about today](https://github.com/cassidoo/shopify-react-astro/tree/main/functions).

## Setting up Shopify

You're gonna have to start with an account before you go anywhere with this!

- Create a [Shopify partner account](https://app.shopify.com/services/partners/signup) if you don't have one.
- Log in to your partner account and create a [Shopify development store](https://shopify.dev/apps/tools/development-stores) to test your implementation.
- [Generate your API credentials](https://shopify.dev/apps/auth/basic-http#2-generate-api-credentials) to make authenticated requests to the Storefront API.
- Create products and product variants in your store. This could be dummy products you got off an API, we used meats and cheeses because we're always hungry.
- Create a private app on your Shopify admin dashboard. This will represent your client application from where you'll be making requests.

Now, we can get scooting with all of our keys!

## Setting up Astro

You'll need to make an Astro project to fill with your data! If you have not used Astro before, I highly recommend you check out [this introductory blog post](https://www.netlify.com/blog/2021/07/08/build-wicked-fast-sites-with-astro-an-introduction/) where I explain how Astro projects are structured, and how `.astro` files work!

### Cloning starters and populating environment variables

You can clone and copy [my existing Shopify site project](https://github.com/cassidoo/shopify-react-astro) if you'd like, otherwise you can start fresh with this starter project:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/astro-netlify-starter)

**This build will fail right now if you use my existing site project.** You need to set up environment variables, and the [Netlify CLI](https://cli.netlify.com/), to move forward!

Go ahead and make a `.env` file (no matter which project you cloned), and populate it with the key and endpoint you got from Shopify:

```bash
SHOPIFY_STOREFRONT_API_TOKEN=example
SHOPIFY_API_ENDPOINT=https://exampleshopify/graphql.json
```

Now, if you used my existing project, your website should work when you run `npm start`! You might have to change some copy, but ** you're all done**. Woo hoo! Go forth and customize it!

### Building more from scratch

If you started from scratch, you have a few more steps. You'll need to:

- Set up a `snowpack.config.mjs` to make your serverless functions work
- Add serverless functions for getting projects, product details, and cart information
- Make pages for your site
- Populate the data in your pages

### Setting up `snowpack.config.mjs`

You might be wondering why the configuration file here is a `.mjs` file. That's because it uses the ECMAScript module system, which you can research on your own if it interests you.

Populate that file with the following:

```js
export default {
  env: {
    NETLIFY_URL: process.env.NETLIFY
      ? process.env.URL
      : 'http://localhost:8888',
  },
};
```

This allows us to find out which environment we're in (local development or prod), and the Netlify CLI can now use this to run our serverless functions locally, or in production! Any variables set up in this file can be accessed with `import.meta.env`.

### Add serverless functions for the Shopify API

I linked [these functions](https://github.com/cassidoo/shopify-react-astro/tree/main/functions) earlier. As long as you cover this functionality with your functions, you can write them however you'd like. Feel free to clone them!

### Make pages for your site

You'll need 3 types of "page" components in this site, which can live in the `src/pages/` folder. Astro uses page-based routing, so by making these files, the routes automatically exist! I named them as:

- `index.astro` - The homepage!
- `cart.astro` - The cart page!
- `$product.astro` - The template page that defines each product! When a page file starts with `$` in Astro, that means it's a *collection* page type, which you use to generate multiple pages from a single template.

### Populate the data in your pages

Now, you're off to the races! To populate the data in each of your pages, you'll query your serverless functions API that you made earlier, and then you can make any sorts of components you'd like to display the data. I used React components in my example earlier.

For the `index` and `cart` pages, you can use Astro's various [data fetching](https://docs.astro.build/guides/data-fetching) options. For example, if you want to query the `get-product-list` endpoint, your fetch might look like this:

```js
let products = await fetch(`${import.meta.env.NETLIFY_URL}/.netlify/functions/get-product-list`)
  .then(res => res.json()).then((response) => {
    return response.products.edges
  });
```

It will be similar for the `$product` page, except you'll use Astro's [Collections API](https://docs.astro.build/core-concepts/collections) to create routes for each of your product pages!

## It's done!

Whew! If you can do all that, you are all set to be off to the races to build your own shopping sites!

If you'd like to see my example, you can [check out the site here](https://shopify-astro.netlify.app/), and [check out the source code on GitHub](https://github.com/cassidoo/shopify-react-astro).

Good luck!
