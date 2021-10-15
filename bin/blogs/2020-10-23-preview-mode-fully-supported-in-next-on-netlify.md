---
title: Preview Mode for Next.js now fully supported on Netlify
description: Netlify's package next-on-netlify now fully supports Preview Mode for Next.js!
authors:
  - Cassidy Williams
date: 2020-10-27T15:00:00.000Z
lastmod: 2020-10-27
topics:
  - news
tags:
  - nextjs
  - next
  - netlify
tweet: ""
format: blog
relatedposts:
  - "Next.js 101: What you should know"
  - Integrating Netlify Identity into your Next.js apps
seo:
  metatitle: Preview Mode for Next.js Now Fully Supported on Netlify - Learn More
  ogimage: /img/blog/final-13.png
  metadescription: Netlify's next-on-netlify package now fully supports Preview Mode for Next.js! Learn more about this new feature and how to set it up on your sites and apps.
---
In the Next.js 9.3 release in Spring 2020, multiple features came out making static generation a first-class citizen in the framework. Jamstack developers, rejoice! Since then, more and more powerful features have come into play to make it a more modern, robust framework.

One of our favorite features of that release was Preview Mode. Static generation is awesome when you're fetching data from a CMS and pre-building everything, but sometimes you want to be able to view what your content will look like before running a full build of your website. Preview Mode solves that problem!

## How does it work?

Preview mode allows users to bypass the statically generated page to server-side render a draft page from any data fetching solution. So, you don't have to wait for a build to run to see a preview of what a new piece of content might look like! This is ideal for if you're using a CMS solution for your sites and your team wants to see what their changes might look like before committing them.

This week, we are happy to announce full support of Preview Mode using `next-on-netlify`, which wraps your application in a tiny compatibility layer, so that pages can use Netlify Functions to be server-side rendered!

[![Next on Netlify](/img/blog/nextonnetlify.png)](https://github.com/netlify/next-on-netlify)

## Installing `next-on-netlify`

The `next-on-netlify` package is a simple install of four steps!

First, install the npm module into your project.

```bash
npm install next-on-netlify
```

Once that's installed, add a postbuild hook to your `package.json`:

```json
{
  ...
  "scripts": {
    "dev": "next",
    "build": "next build",
    "postbuild": "next-on-netlify"
  },
  ...
}
```

Then, make sure your `next.config.js` has the target set to `serverless`:

```js
module.exports = {
  target: "serverless",
};
```

And finally, update your `netlify.toml` to tell Netlify how to build your Next.js app, where the functions folder is located, and which folder to upload to its CDN:

```toml
[build]
  command   = "npm run build"
  functions = "out_functions"
  publish   = "out_publish"
```

It's done!

### Too much work?

If you are interested in a build plugin that does these steps for you, we have one in active development [on our GitHub](https://github.com/netlify/netlify-plugin-nextjs). It is in an early alpha, but please do check it out and file issues if you see them!

## Woo hoo!

Are you as hyped as we are? We hope so.

If you'd like to learn more, on November 17th [we will be hosting a live demo](https://netlify.zoom.us/webinar/register/9116037648485/WN_0TNryHoCST2RdokvWf4NjQ) on Next.js (hosted by yours truly) covering new features we're releasing for Next.js development, how you can use Next.js with Netlify today, a live Q&A, and more.

If you have any questions in the meantime, head on over to our [Community forums](https://community.netlify.com/?utm_source=blog&utm_medium=community-cs&utm_campaign=devex), and go ahead and install [next-on-netlify](https://github.com/netlify/next-on-netlify) in your Next.js projects if you'd like to take advantage of Preview Mode today.

Now go get building!
