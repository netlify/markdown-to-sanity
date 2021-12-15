---
title: Using Contentful and SolidJS to build a modern restaurant website
description: Learn how to use Contentful and Solid to build a modern restaurant website.
authors:
  - Charlie Gerard
date: 2021-10-25
lastmod: 2021-11-01
topics:
  - tutorials
tags:
  - Contentful
  - solid
  - Frontend
tweet: ""
format: blog
seo:
  metadescription: Learn how to use Contentful and Solid to build a modern restaurant website.
  metatitle: Build a modern restaurant website with Contentful and Solid
  ogimage: /v3/img/blog/using-contentful-solid-build-modern-restaurant-website.png
---

Hello!

Over the past few weeks, the Developer Experience team at Netlify has been working on building some demos to showcase how to integrate [Contentful](https://www.contentful.com/) with different frontend frameworks. In this blog post, I'll go through the steps of building a small restaurant website using [Solid](https://www.solidjs.com/)!

As I mentioned in a [previous similar post using Next.js](https://www.netlify.com/blog/2021/10/19/build-a-modern-restaurant-website-with-contentful-and-next.js/), the team has decided to share a common data layer through the help of a [Netlify Build Plugin](https://www.netlify.com/products/build/plugins/) that pulls content from Contentful. If you'd like to learn more about this, check out [this post](https://netlify.com/blog/2021/10/20/learning-to-future-proof-sites-using-headless-cms-and-different-ssgs/) and [the open-source repo](https://github.com/netlify/demo-restaurant-sites-data)!

We also put together a [separate repository for our styles](https://github.com/netlify/contentfull-belly-styles) to make everything more reusable across demos.

The main goal of this project was to use different frameworks to:

- Build a demo site with a couple of pages
- Fetch some menu data for a restaurant
- Display the menu data with titles, descriptions, prices, pictures, etc.
- Fetch data about the restaurant's details (contact, address)
- Display the restaurants details

If you'd like to learn more about how to set up Contentful and fetch data from the API, I'd refer you to [this blog post] that goes more into details.

What we're going to cover now, is the integration with SolidJS.

## Setting up Solid

One thing I was really excited about when starting this demo is that Solid's syntax is very similar to React.js so the learning curve is relatively small.

As my previous demo was using Next.js, I almost could reuse the code entirely!

The only change I had to make is in how Solid handles reactivity and uses a primitive called `createSignal` instead of the `useState` you might be more used to.

For example, in my Next.js demo, I have a `DietIcon` component that renders the type of food (Vegan, Pescetarian, etc.) for different menu items.

```javascript
// Next.js code sample
import { useState, useEffect } from "react";

export default function DietIcon({ type }) {
  const [foodType, setFoodType] = useState();

  useEffect(() => {
    displayType();
  }, [foodType]);

  const displayType = () => {
    switch (type) {
      case "vegetarian":
        setFoodType("V");
        break;
      case "vegan":
        setFoodType("VE");
        break;
      case "pescatarian":
        setFoodType("P");
        break;
      case "glutenFree":
        setFoodType("GF");
        break;
    }
  };

  return (
    <abbr title="Vegetarian" className="diet-icon">
      {foodType}

      <style jsx>{`
        .diet-icon {
          display: inline-flex;
          margin-right: 5px;
        }
      `}</style>
    </abbr>
  );
}
```

This component does not necessarily need to use `useState` but I used it to show the very small difference between React.js and Solid.

The Solid version of this component looks like this:

```javascript
// Solid version
import { createSignal, createEffect, splitProps } from "solid-js";

export default function DietIcon(props) {
  const [local] = splitProps(props, ["type"]);
  const [foodType, setFoodType] = createSignal("");

  createEffect(() => displayType());

  const displayType = () => {
    switch (local.type) {
      case "vegetarian":
        setFoodType("V");
        break;
      case "vegan":
        setFoodType("VE");
        break;
      case "pescatarian":
        setFoodType("P");
        break;
      case "glutenFree":
        setFoodType("GF");
        break;
    }
  };

  return (
    <abbr title="Vegetarian" className="diet-icon">
      {foodType}

      <style jsx>{`
        .diet-icon {
          display: inline-flex;
          margin-right: 5px;
        }
      `}</style>
    </abbr>
  );
}
```

Overall, the code is almost entirely the same, except for the use of `createSignal`, `splitProps` and `createEffect` to handle reactivity.

The goal of this blog post is not to dive too much into how Solid works, if you'd like an introduction to this library, I also wrote [this blog post on CSS-tricks](https://css-tricks.com/introduction-to-the-solid-javascript-library/).

The main takeaway is how smooth it was to switch from using Next.js to using Solid with Contentful. 😍

## Demo

If you'd like to play around with this, feel free to [have a look at the demo site](https://demo-restaurant-contentful-solid.netlify.app/).

You can also check out the [GitHub repository](https://github.com/charliegerard/demo-restaurant-contentful-solid) or deploy this template directly to Netlify by clicking on the button below!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/charliegerard/demo-restaurant-contentful-solid)
