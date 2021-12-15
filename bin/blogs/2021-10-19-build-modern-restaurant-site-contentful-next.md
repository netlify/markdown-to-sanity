---
title: Build a modern restaurant website with Contentful and Next.js 12
description: Learn how to use Contentful and Next.js 12 to build a modern restaurant website.
authors:
  - Charlie Gerard
date: 2021-10-19
lastmod: 2021-11-01
topics:
  - tutorials
tags:
  - Contentful
  - Next.js
  - Frontend
tweet: ""
format: blog
seo:
  metadescription: Learn how to use Contentful and Next.js 12 to build a modern restaurant website.
  metatitle: Build a modern restaurant website with Contentful and Next 12
  ogimage: /v3/img/blog/build-modern-restaurant-site-contentful-next.png
---

Hey there!

Have you ever built a website that pulls content from Contentful? In this blog post, I'm gonna show you how to integrate this CMS with Next.js 12 to build a modern restaurant demo site.

## Common ground

The Developer Experience team at Netlify decided to work on integrating Contentful with different frontend frameworks. To make it easier, we decided to share the same data layer and style guide. This way, each demo site uses a custom npm package that fetches data from the Contentful API and uses it as a [Netlify Build Plugin](https://docs.netlify.com/configure-builds/build-plugins/), and another shared module to get the stylesheets.

The main goal was to be able to:

- Build a demo site with a couple of pages
- Fetch some menu data for a restaurant
- Display the menu data with titles, descriptions, prices, pictures, etc.
- Fetch data about the restaurant's details (contact, address) and display them
- Use a common style guide for all demos

If you'd like to know more about our decision to build a shared data layer, check out [this great blog post](https://netlify.com/blog/2021/10/20/learning-to-future-proof-sites-using-headless-cms-and-different-ssgs/) and [the open-source repo](https://github.com/netlify/demo-restaurant-sites-data)!

## Setting up Contentful

To use Contentful, you need to create an account and generate a couple of tokens.

Start by [creating an account](https://www.contentful.com/) if you don't already have one.

Then, under `Settings` in the menu bar, click on `API keys` to add a key for your project.

Give your project a name and description, the `space ID`and `Content API` access tokens will be automatically generated.

Once this is done, you can move on to using these tokens to get content for your app.

## Fetching content with the Contentful API

Fetching content from the Contentful API can be done in a small amount of code. What you mainly need is to require the `contentful` package, and use the space ID and access token to be able to access the data you entered in the CMS.

For example, here's a code sample to fetch some menu data:

```javascript
// initial setup providing the space ID and access token
const client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_CONTENT_API_TOKEN
});

const fetchMenu = async () => {
  // Querying the entries specifying the content type ID
  const entries = await client.getEntries({
    content_type: "menuItem"
  });

  // Formatting the data the way we'd like to access it in the UI
  let menu = [];
  for (item in entries.items) {
    let thisItem = entries.items[item];
    menu.push({
      title: thisItem.fields.title,
      description: thisItem.fields.description,
      price: thisItem.fields.price,
      currency: thisItem.fields.currency,
      category: thisItem.fields.category,
      dietary: {
        vegan: thisItem.fields.vegan,
        vegetarian: thisItem.fields.vegetarian,
        glutenFree: thisItem.fields.glutenFree
      }
    });
  }

  return menu;
};

return await fetchMenu();
```

Even though we decided to use this architecture for reusability between demo projects, you can also run it in a [Netlify Function](https://functions.netlify.com/)!

## Setting up Next.js

To build this demo site using Next.js, I started by installing the required packages with `npm install next`.

The restaurant site has 2 pages so I created 2 files under the `pages` folder (`index.js` and `menu.js`) so that the `/` and `/menu` routes would be automatically available.

From there, I created different components for the various parts of the UI, using React.js and CSS-in-JS.

To pull the data locally, I started by running `netlify build` using the [Netlify CLI](https://docs.netlify.com/cli/get-started/) to trigger the `onPreBuild` event that runs our Build Plugin. I then imported the JSON files generated. For example, the component responsible for displaying the restaurant information looks like this:

```javascript
import info from "../data/info.json";

export default function RestaurantInfo() {
  return (
    <section className="restaurant-info">
      <h1>About:</h1>
      <section className="details">
        <p>{info.contact.streetAddress.join(" ")}</p>
        <p>{info.contact.phone}</p>
      </section>

      <h1>Hours: </h1>
      {info.hours.map((h, i) => (
        <ul key={i}>
          <li>{h}</li>
        </ul>
      ))}
    </section>
  );
}
```

After getting the data and structuring the components, I moved on to styling.

## Styling it up

As our site has a common layout across pages that includes a sidebar with info and a main content area, I import the common stylesheet in my Layout component:

```javascript
// We did not publish our module as an npm package so we use the relative path to import it
import "../node_modules/contentfull-belly-styles/styles.css";
```

From there I'm able to use the classes indicated in the [`contentful-belly-styles` repo](https://github.com/netlify/contentfull-belly-styles) and have my restaurant site styled automatically.

If I want to add some custom styles, I can also do that using CSS-in-JS. For example, I can add the following styles to change the padding and margin of my restaurant's info component.

```javascript
<style jsx>{`
  ul {
    margin: 0px;
    padding: 2px 5px;
  }

  .restaurant-info {
    padding: 5px;
  }
`}</style>
```

## Demo

If you'd like to play around with this, feel free to [have a look at the demo site](https://demo-restaurant-contentful-next.netlify.app/).

You can also have a look at the [repo on GitHub](https://github.com/charliegerard/demo-restaurant-contentful-next) or deploy this template directly to Netlify by clicking on the button below!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/charliegerard/demo-restaurant-contentful-next)
