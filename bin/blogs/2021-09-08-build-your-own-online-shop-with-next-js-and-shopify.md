---
title: Build your own headless commerce site with Next.js and Shopify
description: If you've ever wanted to build your own online shop, here's how you
  can get up and running with your own custom solution with Next.js and Shopify!
authors:
  - Cassidy Williams
date: 2021-09-13
lastmod: 2021-11-16
topics:
  - tutorials
tags:
  - Next.js
  - Shopify
tweet: ""
format: blog
relatedposts:
  - Building an E-commerce Site with Nuxt and Shopify's New Storefront Cart API
    - Part 1
  - Shopify announces enhanced Storefront APIs - A first look with Gridsome and
    Netlify
seo:
  metadescription: If you've ever wanted to set up a headless ecommerce site,
    here's how you can get up and running with your own custom solution with
    Next.js and the Storefront API from Shopify!
  metatitle: How to set up a headless e-commerce site with Next.js and the Shopify
    Storefront API
  ogimage: /v3/img/blog/shopifynext.png
---
When Shopify expanded their [Storefront API](https://shopify.dev/api/storefront), Netlify jumped ON it to play around with all of the different ways we could build a shopping site. This enhancement makes building [headless Shopify e-commerce sites](https://www.shopify.com/enterprise/headless-commerce)—where the frontend experience is decoupled from Shopify's backend—even easier for developers.

I decided to try my hand at building it with Next.js! I also built a version with React and Astro, [if you'd like to read about it](https://www.netlify.com/blog/2021/07/23/build-a-modern-shopping-site-with-astro-and-serverless-functions/). If you are interested in how I built the Next.js version, keep on reading. If you'd like to see how the rest of the team built theirs, here's some great posts to get you started:

* [Ekene, with Gridsome](https://www.netlify.com/blog/2021/07/19/shopify-announces-enhanced-storefront-apis-a-first-look-with-gridsome-and-netlify/)
* [Phil, with 11ty](https://www.netlify.com/blog/2021/07/20/build-your-own-shop-with-the-shopify-storefront-api-eleventy-and-serverless-functions/)
* [Ben, with Nuxt](https://www.netlify.com/blog/2021/07/21/building-an-e-commerce-site-with-nuxt-and-shopifys-new-storefront-cart-api-part-1/)
* [Tara, with Angular](https://www.netlify.com/blog/2021/08/25/e-commerce-with-angular-shopify-netlify-serverless-functions/)

<p style="text-align:center"><a href="https://www.netlify.com/for/ecommerce/" class="button">Deploy an eCommerce Site to Netlify for Free</a></p>

## A unified start **to headless functionality**

Our entire team started with some serverless functions that we shared across our projects to query the Shopify API. These had functionality to:

* Get a product
* Get a list of products
* Add product to cart (and make a new cart object if one doesn't exist)
* Get a cart (that holds products)
* Removes product from the cart

We also had the same styles shared across the projects, so that we could show a near replica of the same site to everyone, just built in a different way!

If you'd like to see the functions, you can go to any of our demo projects, or [here they are in the project we'll talk about today](https://github.com/cassidoo/shopify-next-netlify/tree/main/functions).

## Setting up Shopify

You're gonna have to start with an account before you go anywhere with this!

* Create a [Shopify partner account](https://app.shopify.com/services/partners/signup) if you don't have one.
* Log in to your partner account and create a [Shopify development store](https://shopify.dev/apps/tools/development-stores) to test your implementation.
* [Generate your API credentials](https://shopify.dev/apps/auth/basic-http#2-generate-api-credentials) to make authenticated requests to the Storefront API.
* Create products and product variants in your store. This could be dummy products you got off an API, we used meats and cheeses because we're always hungry.
* Create a private app on your Shopify admin dashboard. This will represent your client application from where you'll be making requests.

Now, we can get coding with all of our keys!

## Setting up Next.js

You need to start a Next.js project to get going. You can use [my full demo as your starting point](https://github.com/cassidoo/shopify-next-netlify), or my starter project that lets you start a Next.js project from the ground up:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter)

**This build will fail right now if you use my existing site project.** You need to set up environment variables, and the [Netlify CLI](https://cli.netlify.com/), to move forward!

Go ahead and make a `.env` file (no matter which project you cloned), and populate it with the key and endpoint you got from Shopify:

```bash
SHOPIFY_STOREFRONT_API_TOKEN=example
SHOPIFY_API_ENDPOINT=https://exampleshopify/graphql.json
```

Now, if you used my existing project, your website should work now when you run `npm start`! You might have to change some copy, but **you're all done**. Woo hoo! Go forth and customize it!

### Building more from scratch

If you started from scratch, you have a few more steps. You'll need to:

* Set up a `next.config.js` and `netlify.toml` to make your serverless functions work
* Add serverless functions for getting projects, product details, and cart information
* Make pages for your site
* Populate the data in your pages

### Setting up `next.config.js` and `netlify.toml`

Setting up the `next.config.js` allows us to set up a few things, but in our case, find out which environment we're in (local development or prod). The Netlify CLI can use this to run our serverless functions locally, or in production!

```js
// next.config.js
module.exports = {
  env: {
    NETLIFY_URL:
      process.env.NODE_ENV !== 'production'
        ? 'http://localhost:8888'
        : 'https://shopify-next.netlify.app',
  },
};
```

Any variables set up in this file can be accessed with `process.env`.

You should also set up your `netlify.toml` like so:

```toml
# netlify.toml

[build]
  command = "npm run build"
  publish = "out"

[dev]
  command = "npm run dev"
  framework = "#custom"
  port = 8888
  targetPort = 3000
  autoLaunch = true

[functions]
  directory = "functions/"
```

Your `package.json` scripts should point to the Netlify CLI, too:

```json
...
  "scripts": {
    "start": "netlify dev",
    "dev": "next dev",
    "build": "next build",
    "export": "next export"
  },
...
```

Now you can use the Netlify CLI without any issues, and get your site running!

### Add serverless functions for the Shopify API

I linked [these functions](https://github.com/cassidoo/shopify-next-netlify/tree/main/functions) earlier in this post. As long as you cover this functionality with your functions, you can write them however you'd like. Feel free to clone them!

**Make sure you deploy your site first with these functions before you call them,** so that you don't run into any concurrency issues later in querying them.

### Make pages for your site

You'll need 3 types of "page" components in this site, which can live in the `src/pages/` folder. Next.js uses page-based routing, so by making these files, the routes automatically exist! I named them as:

* `index.js` - The homepage!
* `cart.js` - The cart page!
* `[product].js` - The template page that defines each product! When a page file has square brackets, that means it's a dynamic page type, which you use to generate multiple pages from a single template. Put this in a folder in `pages/` called `product/`. If you put a dynamic page at the top level of your pages, then you'll potentially run into issues down the line (particularly with errors).

### Populate the data in your pages

Now, you're all set to build! To put the data in each of your pages, you'll query your serverless functions API that you made earlier, and then you can make any sorts of components you'd like to display the data.

When you pull your data, you'll want to use the Next.js function `getStaticProps` to populate your pages. Here's an example of what I fetched in my own `index.js` page component:

```js
// index.js

export default function Home({ products }) {
  // ...
}

export async function getStaticProps() {
  let products = await fetch(
    `${process.env.NETLIFY_URL}/.netlify/functions/get-product-list`
  )
    .then((res) => res.json())
    .then((response) => {
      return response.products.edges;
    });

  // props are passed in an object, which
  // is sent to the Home component
  return {
    props: {
      products,
    },
  };
}
```

In your `[product].js` file, you'll also want to use the `getStaticPaths` function to generate all of the pages you'll want to use.

```js
// [product].js
export async function getStaticPaths() {
    let products = await fetch(
    `${process.env.NETLIFY_URL}/.netlify/functions/get-product-list`
  )
    .then((res) => res.json())
    .then((response) => {
      return response.products.edges;
    });

  // This is the array of routes that will be
  // generated when the site is built
  let routes = products.map((p) => {
    const params = `/product/${p.node.handle}`;
    return params;
  });

  return { paths: routes, fallback: false };
}
```

## **Your headless Shopify store is done!**

Whew! If you can do all that, you are all set to be off to the races to build your own shopping sites!

If you'd like to see my example, you can [check out the site here](https://shopify-next.netlify.app/), and [check out the source code on GitHub](https://github.com/cassidoo/shopify-next-netlify).

Good luck!

<p style="text-align:center"><a href="https://www.netlify.com/for/ecommerce/" class="button">Deploy an eCommerce Site to Netlify for Free</a></p>