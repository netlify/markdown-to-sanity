---
title: Easy localization with Netlify redirects and rewrites
description: If you visited our homepage recently and are from the United
  States, you might have noticed that we added a small dismissible US Election
  banner at the top of the page to encourage Americans to make their voice heard
  and go vote in the upcoming election.
authors:
  - Hugues Tennier
date: 2020-10-30T16:00:00.000Z
lastmod: 2020-10-30
tags:
  - Redirects
topics:
  - tutorials
tweet: ""
format: blog
relatedposts:
  - "Localize your environment variables by context with build plugins"
  - "How to do redirects on Netlify"
seo:
  ogimage: /v3/img/blog/easy-localization-with-netlify-redirects-and-rewrites-og.png
  metatitle: How to Localize a Website with Netlify Redirects & Rewrites
  metadescription: "Visiting Netlify's homepage from the United States, you may notice that we added a dismissible US Election banner at the top of the page. Learn how we did this."
---
If you visited our homepage recently and are in the United States, you might have noticed that we added a small dismissible US Election banner at the top of the page to encourage Americans to make their voice heard and go vote in the upcoming election.

![Screenshot of Netlify's US homepage with Election banner](/v3/img/blog/go-vote.jpg)

One of our goals was to keep that banner relevant for US visitors only and we were able to easily achieve that with our own [redirects and rewrites](https://docs.netlify.com/routing/redirects/) engine.

## Preparing the site

Since we use a [combination of Eleventy and Vue](https://www.netlify.com/blog/2020/09/18/eleventy-and-vue-a-match-made-to-power-netlify.com/), we were able to quickly spin up a custom US version of our homepage using Vue’s components and props, but any stack will work as the requirements are only two different HTML files. Our code looks a bit like this:

index.vue

```markup
<template>
  <home></home>
</template>
```

index-us.vue

```markup
<template>
  <home country=“us”></home>
</template>
```

components/home.vue

```markup
<template>
  <div>
    <header />
    <div v-if=“country === ‘us’”>
      <election-banner />
    </div>
    …
  </div>
</template>
```

This will output an `index-us.html` with our Election banner while keeping our original `index.html` unchanged.

## Country-based redirects

With Netlify Redirects, we can show site visitors different content based on their location by adding a `Country` condition to our `_redirects` file:

```bash
/   /index-us.html  200!  Country=us
```

Now, whenever someone visits Netlify and is located in the United States, they will get served the content from `index-us.html` instead of the regular `index.html`. We assign a [200 status code](https://docs.netlify.com/routing/redirects/redirect-options/#http-status-codes) to keep the visitor’s URL the same, while Netlify’s servers fetch the new page behind the scenes.

If you have more complex use cases, there are [great examples in the docs](https://docs.netlify.com/routing/redirects/redirect-options/#redirect-by-country-or-language) on how to handle whole domain redirect or redirect by language instead of country.

## A word on web performance

Unlike a typical client-side JavaScript solution, redirecting at the edge opens up tons of localization customization while keeping our page performance and [web vitals](https://web.dev/vitals/) intact, especially reducing our [Cumulative Layout Shift (CLS)](https://web.dev/cls/), resulting in a better user experience.

In the future, we want to keep showing more pertinent information to our visitors. Customer's case studies or quotes based on our visitor’s location or language are a couple  examples that become a breeze to put in place with our redirects and rewrites.
