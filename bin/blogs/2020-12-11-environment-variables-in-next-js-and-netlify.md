---
title: Environment variables in Next.js and Netlify
description: Both Next.js and Netlify come with built-in support for environment
  variables. Here's how to use them!
authors:
  - Cassidy Williams
date: 2020-12-10
lastmod: 2020-12-10
topics:
  - tutorials
tags:
  - nextjs
  - blogvent
tweet: ""
format: blog
relatedposts:
  - '"Escaping" Next.js to access the browser'
  - Global Styles in Next.js
seo:
  metatitle: Environment variables in Next.js and Netlify
  metadescription: Both Next.js and Netlify come with built-in support for
    environment variables. Here's how to use them!
  ogimage: /img/blog/blogvent10.png
---
Welcome to Blogvent, day 10!

If you'd like to use environment variables in Next.js, make a `.env.local` file at the root and you can use them all there! It might look something like this:

```bash
// .env.local
SITE_URL=localhost
SITE_KEY=hahabusiness
```

That being said, these variables are only exposed to the Node.js environment like this, not the browser. If you want to use them, you'll have to use them only in your API routes, or in the data fetching methods like `getStaticProps` in your page components. For example, it might look like this:

```jsx
// pages/index.js

export default function Home(props) {
  return (
    // ...
  )
}

// ...

export async function getStaticProps() {
  const siteData = await someService({
  	url: process.env.SITE_URL,
    key: process.env.SITE_KEY
  })
  // ...
}
```

If you want your environment variables to be exposed to the browser and be usable in your client-facing components, in your `.env.local` you have to prefix the variable with `NEXT_PUBLIC_`.

```bash
// .env.local
SITE_URL=localhost
SITE_KEY=hahabusiness
NEXT_PUBLIC_PAYMENT_TOKEN=thisispublic // this one is exposed to the browser
```

## Setting environment variables in the Netlify UI

When you've deployed your site, you can set your environment variables in the Netlify UI. Head over to the Build & Deploy settings in your Site Settings, and then plug your values in under "Environment variables":

![Environment Variables in the UI](/img/blog/envnext.png "Environment Variables in the UI")

You can also [use the Netlify CLI](https://docs.netlify.com/cli/get-started/#link-with-an-environment-variable) to use environment variables set in the UI (or even set them from the CLI, too)!

## Is there more?

There's always more! There's *so many* things that you can do with environment variables on Netlify. Here's some useful docs and guides for how to take full advantage of them:

* [Build environment variables](https://docs.netlify.com/configure-builds/environment-variables/?utm_source=blog&utm_medium=envvars-cs&utm_campaign=devex)
* [Build settings in netlify.toml](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=blog&utm_medium=envvartoml-cs&utm_campaign=devex#build-settings)
* [Example of environment variables in use in Next.js](https://github.com/cassidoo/next-adventure/blob/master/functions/get-character.js#L21-L24)
