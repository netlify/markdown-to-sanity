---
title: >
  5 Optimizations for Faster Gatsby Builds
description: >
  Gatsby is a powerful tool for creating web sites and apps. Learn how to keep your builds as fast as your website with these Gatsby build optimization tips.
authors:
  - Jason Lengstorf
date: 2020-06-11T00:00:00.000Z
lastmod: 2020-07-09
topics:
  - tutorials
tags:
  - gatsby
  - build-speeds
  - caching
  - debugging
  - performance
  - tips
tweet: ""
format: blog
seo:
  metatitle: >
    5 Optimizations to Get Faster Gatsby Builds Today
  metadescription: >
    Gatsby is a powerful tool for creating web sites and apps. Learn how to optimize your builds to be as fast as your website with these Gatsby build optimization tips.
  ogimage: /img/blog/5-gatsby-build-optimization-tips.png
relatedposts:
  - "Enable Gatsby Incremental Builds on Netlify"
  - "Gatsby 101: Features, Benefits, and Trade-Offs"
---

Gatsby is an extremely powerful tool for building complex websites quickly. It allows us to pull in data from any source, gives us access to a rich ecosystem (both of Gatsby-specific plugins and the broader React ecosystem), and even does things that feel like magic, such as auto-optimizing images.

If we're not careful, some of Gatsby's magic can bite us by slowing our build times down significantly. 

And when I say "significantly", I mean *significantly*. We recently helped one of our customers with optimizing their extremely image-heavy Gatsby build and got this email back: “I was able to get the build times down from 4.8 hours to right around 10 minutes!”

In this article, we'll look at a few optimizations we can make to get massive speed improvements in our Gatsby build times.

## tl;dr

1. **Take advantage of the Gatsby cache!** It makes builds after the first one *much* faster. This is a one-click fix with the [Gatsby cache Netlify Build Plugin](http://app.netlify.com/plugins/netlify-plugin-gatsby-cache/install?utm_source=blog&utm_medium=gatsby-img-perf-jl&utm_campaign=devex).
2. [**Enable incremental builds for Gatsby.**](https://www.netlify.com/blog/2020/04/23/enable-gatsby-incremental-builds-on-netlify/?utm_source=blog&utm_medium=gatsby-perf-jl&utm_campaign=devex) This will make a big impact on your build times by only rebuilding what actually changed since last time.
3. **Make sure your source images aren’t huge.** Gatsby has to process images during the build, so bigger images mean slower builds.
4. **Check your GraphQL queries for unnecessary data.** Don’t load everything if you don’t need it!
5. For especially large sites, **follow the [advanced Gatsby optimization checklist](#5-run-through-the-advanced-gatsby-build-optimization-checklist)**.

## 1. Use (and keep) the Gatsby cache.

During the build, Gatsby generates optimized assets and places them into the `public` folder for deploying to the web. This `public` folder, along with the `.cache` folder, keep track of the assets and data that makes up a Gatsby site.

If `public` and `.cache` folders from a previous build are present when a build starts, Gatsby is able to skip a *huge* amount of duplicate work. Most notably, Gatsby *will not* re-process any images that were already processed!

### Configure your build system to keep the Gatsby cache.

Most build systems, including Netlify, don’t keep the Gatsby cache by default. However, you can [install the Gatsby Cache Netlify Build Plugin](http://app.netlify.com/plugins/netlify-plugin-gatsby-cache/install?utm_source=blog&utm_medium=gatsby-img-perf-jl&utm_campaign=devex) to make sure the cache persists between builds, which can cut your build times in half.

![Install screen for the Netlify Build Plugin to persist the Gatsby cache.](/img/blog/gatsby-cache-netlify-build-plugin-install.png)

One click to cut your build times in half! Hot diggity!

Many CI/CD tools allow configurating for caching, including [Travis CI](https://docs.travis-ci.com/user/caching/) and [CircleCI](https://circleci.com/docs/2.0/caching/) — no matter what tool you use, make sure to configure it to keep your Gatsby cache!

### Don’t use `gatsby clean` as part of your build process.

Whenever the `gatsby clean` is run, Gatsby deletes the `public` and `.cache` folders. This means that builds run after using `gatsby clean` are the *slowest possible version of the build*.

Unfortunately, I've seen an anti-pattern emerging in Gatsby site reviews where the build command includes `gatsby clean`. It's even made its way into several starters, which is a bummer. 😔

## 2. Turn on incremental builds for Gatsby.

**One of the best ways to cut down on build times is to only build what actually changed.** This is far from an easy problem to solve, but Gatsby has made a pretty good effort at making this possible.

In order to enable incremental builds for Gatsby, we need to ensure the cache is available (see the previous section for details) and set an environment variable during the build:

```diff-json
    "scripts": {
      "develop": "gatsby develop",
-     "build": "gatsby build"
+     "build": "GATSBY_EXPERIMENTAL_PAGE_BUILD_ON_DATA_CHANGES=true gatsby build --log-pages"
    },
```

For more information, check out the [full tutorial on enabling incremental builds for Gatsby](https://www.netlify.com/blog/2020/04/23/enable-gatsby-incremental-builds-on-netlify/?utm_source=blog&utm_medium=gatsby-perf-jl&utm_campaign=devex).

## 3. Store images in your repository no larger than you need them in your site.

While Gatsby ensures the images sent to the browser will be optimized, it has no control over the images that are fed to it during the build. The bigger the original image, the longer the build time.

**We can decrease the build times by a large amount if we resize images to the site’s largest resolution *before* we put them into source control.**

As an example, the image in the video below was shot by a professional photographer ([La Boutique de la Luz](https://www.laboutiquedelaluz.com/)) and the original image is over 8MB. I *can* just drop that image into my repo and Gatsby will optimize it, but that means it has to load that giant image into memory *every time the site builds** — that slows things way down.

<video muted autoplay loop style="width: 100%">
  <source src="https://res.cloudinary.com/jlengstorf/video/upload/f_auto,q_auto,w_750/v1590691040/netlify/blog/gatsby-perf/squoosh-demo.mp4" />
</video>

This image started out at 8.18MB. By resizing and optimizing with squoosh.app, it dropped to 125KB and I can’t really tell the difference at the size I’m using it at.

**Note:** keeping the Gatsby cache around means the image won’t be reprocessed on subsequent builds, but that still means slowdowns for builds without a cache.

## 4. Only query for data you actually need.

Because GraphQL can be a little cumbersome for images, a common hack for using images in Gatsby is to load every image in the site, then filter down for just the one you need:

```jsx
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const BadImage = ({ imagePath }) => {
  // 🚫 don’t do this!
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  // 🚫 even though we’re only using one image, all transformations will run!
  const image = data.allFile.nodes.find(img => img.relativePath === imagePath);

  return <Image fluid={image.childImageSharp.fluid} />;
};

export default BadImage;
```

This looks innocent enough at first glance: we pull up all the images in the site, then find the one we need and display it on the page. And since it happens at build time, there’s no harm, no foul, right?

Unfortunately, this query will trigger image transformations for *every image on the site.* And if you have multiple queries on your site that load all images there's potential for this seemingly innocent query to balloon out to hundreds or even thousands of unnecessary image processing jobs that will slow your builds to a crawl.

To avoid this, **only query for data you actually need** to avoid triggering unnecessary work during the Gatsby build.

## 5. Run through the advanced Gatsby build optimization checklist.

For very large Gatsby sites — meaning sites with a large number of pages and/or a large number of images — and sites doing custom data loading or other complex setup, this checklist will help you avoid several edge cases that can bog down your builds.  The Gatsby project also [has an article with some general advice for scaling your site](https://www.gatsbyjs.com/docs/scaling-issues/) that might be of interest.

**Heads up!** The advanced checklist is intended as a collection of edge cases that I’ve run into when reviewing Gatsby projects. Any one of these problems *could* be causing slowdowns, but the impact of the previous items on this checklist will far outweigh these smaller optimizations, so make sure you’ve added the rest of the optimizations on this list *first*.

### Disable file fingerprinting to speed up deploys.

By default, Gatsby will include a content hash in generated file names. In most cases, this is a good thing, but with Netlify, it’s not necessary due to the way Netlify handles caching. This means that including the content hash when building Gatsby sites on Netlify doesn’t add any benefit, but it _does_ result in duplicate file uploads.

To stop this, you can install [`gatsby-plugin-remove-fingerprints`](https://github.com/narative/gatsby-plugin-remove-fingerprints) to stop adding the content hash, which will speed up your deploy times.

**It’s important to note that Netlify uses very intentional default caching settings that enable atomic rollbacks and deploys.** If you’re doing anything with custom `Cache-Control` headers, adding this plugin will almost certainly cause headaches.

> **Heads up!** If you’re using a Service Worker, including using `gatsby-plugin-offline`, you probably _do not_ want to add this plugin. Service Workers use file URLs for caching and without the hash it may continue to serve old files indefinitely from your users’ browsers, which will be a Guaranteed Bad Time™.

### Make sure asynchronous requests run in parallel.

If you’re loading custom data into Gatsby, it’s likely you’ll be working with asynchronous requests. This can get a little head-bendy, especially when loading complex data such as data that relies on other data.

If you’re loading data asynchronously, make sure the requests aren't unnecessarily blocking execution. A common source of unnecessary blocking is `for` loops in Gatsby‘s `sourceNodes` API — when using `async`/`await` to make requests, each request blocks the next, adding a huge amount of unnecessary time to the build.

To illustrate this, let’s look at a custom Gatsby node that pulls data from two sources:

```jsx
const fetch = require('node-fetch');

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  console.time('creating character nodes');

  // load a list of characters from the Rick & Morty API
  const data = await fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .catch((err) => console.error(err));

  for (const character of data.results) {
    console.time(`character-${character.id}`);
    // give each character a pet dog using the Dog CEO API
    const dog = await fetch('https://dog.ceo/api/breeds/image/random')
      .then((res) => res.json())
      .catch((err) => console.error(err));

    // create a custom data node in Gatsby
    actions.createNode({
      ...character,
      dog: dog.message,
      id: createNodeId(`character-${character.id}`),
      parent: null,
      children: [],
      internal: {
        type: `Character`,
        contentDigest: createContentDigest(character),
      },
    });
    console.timeEnd(`character-${character.id}`);
  }

  console.timeEnd('creating character nodes');
};
```

Running this code shows each request starting after the one before it completes, leading to a very slow request:

```jsx
creating character nodes: 7492.279ms
```

However, if we refactor to create an array of Promises and `await Promise.all` instead, we can let most of the data fetching happen in parallel:

```diff-js
  exports.sourceNodes = async ({
    actions,
    createNodeId,
    createContentDigest,
  }) => {
    console.time('creating character nodes');

    const data = await fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .catch((err) => console.error(err));

-   for (const character of data.results) {
+   await Promise.all(
+     data.results.map(async (character) => {
        console.time(`character-${character.id}`);
        const dog = await fetch('https://dog.ceo/api/breeds/image/random')
          .then((res) => res.json())
          .catch((err) => console.error(err));

        actions.createNode({
          ...character,
          dog: dog.message,
          id: createNodeId(`character-${character.id}`),
          parent: null,
          children: [],
          internal: {
            type: `Character`,
            contentDigest: createContentDigest(character),
          },
        });
        console.timeEnd(`character-${character.id}`);
-   }
+     }),
+   );

    console.timeEnd('creating character nodes');
  };
```

This is more than 10× faster:

```jsx
creating character nodes: 607.122ms
```

**Heads up!** For more information, check out my guide on how to [improve `async`/ `await` performance in JavaScript](https://www.learnwithjason.dev/blog/keep-async-await-from-blocking-execution/).

### Make Gatsby image build performance faster with parallel processing.

If your site has a large number of images, you can get even more speed out of your build by parallelizing the Gatsby image processing step. This requires a bit of setup, so make sure to check on the other items in this article first, but if your site is image-heavy this can make builds roughly twice as fast by adding parallel processing.

If this makes sense for your site setup, check out the tutorial and [speed up your Gatsby builds with parallel image processing](https://www.netlify.com/blog/2020/02/25/gatsby-build-speed-improvements-with-parallel-image-processing/?utm_source=blog&utm_medium=gatsby-perf-jl&utm_campaign=devex)!

### Skip image processing altogether.

Another option for image-heavy sites is to stop making Gatsby process them at all. Some data sources, such as [Contentful](https://www.gatsbyjs.org/packages/gatsby-source-contentful/#query-for-assets-in-contenttype-nodes) and [Sanity](https://www.gatsbyjs.org/packages/gatsby-source-sanity/#using-images), provide Gatsby-compatible images as part of their data source, allowing us to take advantage of the client-side performance benefits of `gatsby-image` without requiring Gatsby to do any image processing.

If your data sources don’t provide `gatsby-image`-compatible images, you can use specialized asset hosting like [Cloudinary](https://jason.af/cloudinary) along with [`gatsby-transformer-cloudinary`](https://www.npmjs.com/package/gatsby-transformer-cloudinary) to take images out of the processing pipeline without losing the client-side benefits of `gatsby-image`. The [Cloudinary plugin for Gatsby](https://gatsby-transformer-cloudinary.netlify.app/) is a nearly drop-in replacement, so this can be a relatively painless option for reducing build times.

## No more slow Gatsby builds!

With this checklist, you can greatly improve the speed of your Gatsby builds.

Have you seen additional things that can slow down Gatsby builds? Did this post help you reduce your Gatsby build times? [Let me know on Twitter!](https://twitter.com/compose/tweet?text=I+just+sped+up+my+@gatsbyjs+build+times+thanks+to+this+optimization+checklist+from+@jlengstorf&url=https://www.netlify.com/blog/2020/06/11/5-optimizations-for-faster-gatsby-builds/)
