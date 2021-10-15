---
title: Build your own shop with the Shopify Storefront API, Eleventy, and
  serverless functions
description: Create your own online shopping experience using the improved
  Shopify Storefront API, serverless functions, and Eleventy.
authors:
  - Phil Hawksworth
date: 2021-07-20
lastmod: 2021-07-20
topics:
  - tools
tags:
  - Shopify
  - Eccomerce
  - Eleventy
  - Serverless
  - Functions
tweet: ""
format: blog
relatedposts:
  - Shopify announces enhanced Storefront APIs - A first look with Gridsome and
    Netlify
seo:
  metatitle: Build your own shop with the Shopify Storefront API, and serverless
    functions with Eleventy
  metadescription: Learn how you can create your own online shopping experience
    using the improved Shopify Storefront API, serverless functions, and
    Eleventy.
  ogimage: /img/blog/og-shopify-11ty.png
---
When [Shopify](https://www.shopify.com/) expanded their [Storefront API](https://shopify.dev/api/storefront), they opened the door for developers to more easily build more of the shopping experience just as they (or their clients) desired.

![Screenshot of example site showing a gallery of meats and cheese available to purchase](/img/blog/shopify-11ty-example-home-page.jpg "Shoperoni - Home page")

The API provides great access to product, pricing and stock level data through an expressive GraphQL interface. And it also allows you to control the cart, enabling you to design and implement your shopping flow with far more control than was possible before.

It can be intimidating to start working with such a large and powerful API. And even though Shopify provide [extensive documentation](https://shopify.dev/api/storefront/getting-started) and an API explorer, there is a lot to dig in to.  So the DX team at Netlify explored using the API and a variety of front-end tools and frameworks to build some reference templates to help get you started with using the Storefront API.

### An example that suits you

You can lean more details and explore the examples built with other tools in these other posts:

* [Shopify announces enhanced Storefront APIs - A first look with Gridsome and Netlify](https://www.netlify.com/blog/2021/07/19/shopify-announces-enhanced-storefront-apis-a-first-look-with-gridsome-and-netlify/?utm_medium=blog&utm_source=netlify&utm_campaign=devex-ph&utm_content=shopify-11ty
)
* Using the Shopify Storefront API with Astro (coming very soon)
* Using the Shopify Storefront API with Nuxt (coming very soon)
* Using the Shopify Storefront API with Angular (coming very soon)

I was keen to use as little magic as possible, preferring the simplest tooling I could put my hands on to create the UI. For this reason I chose to use [Eleventy](https://www.11ty.dev/) to pull product data from the API and generate all the pages I needed during the build. And then added some HTML forms and JavaScript to interact with the API to add and remove things from the shopping cart. Shall we explore a little? 

## The demo site

We created an example Shopify store complete with products which... let's just say that they reflect some of common interests of the DX team. You can explore the example site which uses uses the store data here:

🍖 🧀 [shopify-11ty.netlify.app](https://shopify-11ty.netlify.app/)



## Architectural overview

The user interface (UI) could have made calls directly to the Shopify API, but to make things easier to reuse and extend, we decided that we'd make some small utility functions which we could all use to connect our UIs to the Shopify API. Abstracting these to [serverless functions](https://github.com/philhawksworth/shopify-11ty/tree/main/netlify/functions) meant that we could all have a simplified API for our sites which talked to Shopify for us. We wrote them once, and then each different UI could use them. 

TIP: This small level of abstraction can really help when building your own front-end which consumes an API, as it means you can manage and normalize future changes in one place without disruptions to the code of your UI.

### Utility functions as an API

To bring the experience to life, the UI would need just a few services. These became our site's API end points provided by [Netlify Functions](https://www.netlify.com/products/functions/?utm_medium=blog&utm_source=netlify&utm_campaign=devex-ph&utm_content=shopify-11ty). They were:

* Add an item to the cart — provided by [add-to-cart.js](https://github.com/philhawksworth/shopify-11ty/blob/d32b9823166909e68deeea4a13c7d7ac14b8e999/netlify/functions/add-to-cart.js)
* Remove an item from the cart — provided by [remove-from-cart.js](https://github.com/philhawksworth/shopify-11ty/blob/d32b9823166909e68deeea4a13c7d7ac14b8e999/netlify/functions/remove-from-cart.js) 
* Get the data of the current cart state — provided by [get-cart.js](https://github.com/philhawksworth/shopify-11ty/blob/d32b9823166909e68deeea4a13c7d7ac14b8e999/netlify/functions/get-cart.js)

The pattern I chose for my site was that I'd pull all the product data I needed during each build, so rather than fetching this data for site pages at request time, I fetched that data from the Shopify API once during the build using an [Eleventy data file](https://www.11ty.dev/docs/data-js/).

* Fetch the product catalogue — [products.js](https://github.com/philhawksworth/shopify-11ty/blob/d32b9823166909e68deeea4a13c7d7ac14b8e999/src/site/_data/products.js)

I decided that the product listing pages and product detail pages were stable enough that they could all be generated at build time (we could use progressive enhancement to fetch and update latest pricing and stock levels if we wanted to). The cart page is a little different though. We can't build and populate that at build time because the users will be manipulating that as they shop. We could render the cart client-side after making calls to our cart API, but I opted to keep my UI as dumb as I could and instead make a traditional synchronous request for the cart page which would be rendered for me on-demand by a serverless function.

* Show a page view of the cart —[cart-view.js](https://github.com/philhawksworth/shopify-11ty/blob/d32b9823166909e68deeea4a13c7d7ac14b8e999/netlify/functions/cart-view.js)

## Making URLs palatable

Ok fine. I admit it. I'm a URL snob. I like to see friendly, obvious, readable URLs whenever possible. And with this model that's very practical, so let's make the URLs that our site uses to access our API layer nice and obvious. Step forward [Netlify's redirects API](https://docs.netlify.com/routing/redirects/?utm_medium=blog&utm_source=netlify&utm_campaign=devex-ph&utm_content=shopify-11ty)!

Adding these lines to the [netlify.toml](https://docs.netlify.com/configure-builds/file-based-configuration/) file means that we can talk to the serverless functions with some lovely clarity. Good for the developer (`fetch('/api/add-to-cart', data);` ) and good for the user (`/cart`).

```toml
# netlify.toml

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/cart"
  to = "/.netlify/functions/cart-view"
  status = 200
```

## Seasoning with JavaScript

The route I chose took me a long way towards making this site work without depending on any client-side JavaScript. Once all of the pages were available and populated as expected, I added a small amount of client-side JavaScript to manage things like:

* Add items to the cart and show how many items it currently contains
* Use localStorage to keep track of the current cart ID created by Shopify, so further shopping goes into the same cart
* Enable asynchronous requests to add items to the cart instead of using a traditional form submit

All of this client-side JavaScript amounted to [around 80 lines of commented code](https://github.com/philhawksworth/shopify-11ty/blob/main/src/js/shopping-ui.js). No libraries or frameworks here, but you could of course choose to leverage any framework you like to gain access to some richer UI goodies instead of needing to roll your own. 

## Build it your way

This decoupled model, where the presentation layer is independent of the underlying e-commerce services, and not coupled to the hosting infrastructure, means that you fantastic levels of control when crafting the experience you want for the users of your site.

[Agencies](https://www.netlify.com/partners/agency/?utm_medium=blog&utm_source=netlify&utm_campaign=devex-ph&utm_content=shopify-11ty) spend a great deal of effort designing engaging and effective experiences for their clients. And by expanding the Storefront API, Shopify have greatly improved the path to delivering on the promises of these designs so that the experiences are delivered to customers as intended, and generate differentiation and competitive advantages through the user experience, whatever technologies are used to build them.

## Poking around

You can explore this reference template to learn more — [it is available on GitHub](https://github.com/philhawksworth/shopify-11ty). 

The example was also designed not to need any secrets or sensitive keys, so you can also clone this project and build it locally (or deploy as a new site on Netlify) in a couple of clicks of the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/philhawksworth/shopify-11ty&tm_medium=blog&utm_source=netlify&utm_campaign=devex-ph&utm_content=shopify-11ty)
