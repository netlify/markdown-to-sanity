---
title: How to scale massive React Static sites with Incremental Builds
description: >-
  When it comes to things like eCommerce, real-time data, or websites with
  hundreds of thousands of pages, static site build times can get way out of
  hand and quickly become unrealistic.


  If static sites and the JAMstack are to take over the world, this has to
  change. Here's why you need Incremental Builds, and how to do it with
  React-Static!
authors:
  - Tanner Linsley
date: '2019-01-17'
topics:
  - tutorials
tags:
  - React
  - React-Static
tweet: >-
  Scaling static sites and the JAMstack to hundreds of thousands of pages with
  Incremental Builds, and how to do it with React-Static!
format: blog
---

![Photo by Mikito Tateisi on Unsplash](https://d2mxuefqeaa7sj.cloudfront.net/s_4ADB264EC956DBE8DC6E513F6C91BE5CE6BF8D8D896CBB4D850BF509CB4CAAD2_1547054506993_mikito-tateisi-333584-unsplash.jpg)

React Static is a CLI, build tool, and React NPM module all rolled into a single package to help you build progressive static sites. I built and released it just over a year ago as a side project for my startup, [Nozzle.io](https://nozzle.io), and since then it has continuously grown to become a very powerful static progressive static site generator for React.

React Static produces a progressively enhanced static website or PWA where static HTML files are generated for each page of the site, each capable of acting as the entry point to the progressive application. Once loaded in a browser, these pages are invisibly rehydrated with your actual React application and become a full-blown SPA. Furthermore, React-Static will progressively load and prefetch assets as you navigate, creating an instantaneous navigation experience for users.

Like other static site generators, any time a site’s code, templates, or data changes, the entire site must be rebuilt to ensure 100% up-to-date consistency throughout the site. Most of the time, this process is fairly fast, anywhere from ~20 seconds to ~5 minutes, depending on the complexity of your templates and the amount of pages on a given site.

If you are running a personal blog, or small business’s marketing site, this is likely not an issue at all. Modern build tools like Netlify, GitHub and headless CMS’s make this process even easier by automatically regenerating and updating your site for you any time something changes through things like webhooks.

However, when it comes to things like eCommerce, real-time data, or websites with **hundreds of thousands of pages**, these build times can get way out of hand and quickly become unrealistic.

If static sites and the JAMstack are to take over the world, **this has to change.**

## What’s the speed limit?

As a site grows in size and complexity either by adding more templates to be compiled, or routes to be exported through those templates, build times will steadily grow. There are a lot of facets to build times, but for React Static, they can be thought of in three main stages:

1. **Webpack bundling.** Bundling for webpack is notoriously a very heavy process, usually involving a lot of 3rd party libraries to be run including a variety of loaders, code transformations and performance optimization routines. Even for the basic React Static template with little to no extras, this can take a few seconds. Most of the JavaScript ecosystem is at the mercy of Webpack for speed (including React Static). Other than following its generic performance optimizations, React Static mostly relies on upstream optimizations and upgrades over time to make this faster.
2. **Downloading Remote assets and data.** This process is highly subjective to how much data your site relies on at build time and how quickly it can be downloaded. These days, a lot of data can be transferred very quickly, so we rarely see this as the bottle neck in large scale sites, though I’m sure there are edge cases where this can be a problem. The reality is that this process is mostly out of React Static’s control, so there is little optimization to be done in this area right now.
3. **Exporting Routes to HTML and JSON.** When the bundle is ready and all the data is downloaded, route generation can finally start. This process is the one that will probably scale linearly with the amount of routes in your site. Currently React Static multi-threads exporting of routes to take advantage of multi-core machines, but at this point we are again, at the mercy of the speed that `ReactDOM.renderToString()` can take an app and spit out HTML. There is also the stage of saving the corresponding JSON files for each route to disk, but we find this process isn’t too expensive compared the HTML generation.

## Quick Wins

The first clear optimizations for making your React Static sites **build** faster are going to be anywhere we can make exponential gains on the export process with the least work possible. Even small changes over the course of 100 thousand pages adds up quick!

- Anywhere you can make your bundle smaller or faster will essentially make both the bundling, and a small part of the exporting, faster as well for every page. This is likely the easiest place to start, since you can quickly remove, replace, or refactor large dependencies to cut down on the cruft.
- Reducing the complexity of your React templates will also have exponential gains in export times. Since `ReactDOM.renderToString()` does not use a cache, it has to execute and render your App once for every single page. Though this is a bit sad, it’s all we’ve got. This might change with the new React server-side renderer coming out later this year, but that’s a ways off for now.
- Reduce the amount of plugins and/or transformations that are being applied to your site.
- Run your builds on multi-core machines with more CPU. As mentioned, React Static makes use of multi-threading to export more quickly. The more cores and CPU you have, the faster pages will export.

## Been there, done that. What now?

After these steps, the options for optimization game starts to get a bit harder. There is less and less that users can do to make their builds faster before something needs to change upstream. So where do we go from here? Let’s brainstorm!

- **Faster machines** – In a perfect world, maybe! But spending more on better hardware is not always an option. Especially if you expect any developers you have working on the project to meet a certain hardware requirement… that’s just ridiculous. I personally don’t think this is a viable solution, especially for open source software. And if it’s not viable for open source, it’s likely not viable for businesses or larger organizations either.
- **Faster JavaScript** – I guess we could wait around for JavaScript to get faster or for WASM to take over the world, but we need our build times to be fast NOW, not later.
- **Faster software** – There are surely still some small wins to be had in the React Static codebase and in it’s dependencies like Webpack and React, but for the most part, we’re at the metal of what we’ve been provided. It’s become a struggle to push the envelope much further without building our own Webpack or React (which is out of the question, since it would kill mindshare, usability, ecosystem, and basically the universe).

Okay, so maybe **faster** isn’t the answer right now! Maybe let’s try **smarter** instead!

## Incremental Builds

**Let’s imagine for a moment** that any time something changed in a static site, we didn’t have to rebuild the **whole thing, just the parts of it that changed.** This is called _Incremental Builds_ and isn’t a new concept, especially among server-side generation, but it is a tricky arena to get into. Allow me to explain.

**Rebundle???** **_Grumble grumble…_**
A webpack bundle is at the core of every React Static site and while being one of the greatest strengths for React Static, this is also one of the largest limitations for incremental builds. As I said before, anytime the underlying application changes, the entire application must be rebundled for consistency. **This potentially invalidates any and all HTML exported with previous bundles, too**. So naturally, if the bundle changes, all of the HTML must be exported again to also be consistent with the bundle.

> If our bundle changes, all of of our pages **should** be reexported. If they aren’t, inconsistencies and bugs are likely.

**Delta delta, come in delta!**
Having incremental builds is one thing, but they are no use to anyone if you don’t know which parts of your site you need to updated. Ideally, any changes we make in our app should be able to tell us which routes need to be updated to reflect the changes in their entirety, but this is harder than it looks.

> For now, we are tied to manually defining the delta changes to our routes in terms of updates, additions and deletions

**Templates belong to the bundle**
Adding or modifying routes without rebundling is a powerful feature, but there is one obvious restriction:

> You can only add or change routes to use templates that are already available in your bundle.

## Finally, the goods!

Assuming that our bundle hasn’t changed, that we have all the templates we need and that we know the changes that need to take place, we can finally do some amazing stuff!

We can:

- Remove Existing Pages
- Add New Routes
- Update Existing Routes with new data or to use a different template

Here’s a rudimentary example on how this can be done:

```js
    import axios from 'axios'

    const newPost = {...}

    export default {
      getSiteData: () => ({
        title: 'React Static',
      }),
      getRoutes: async ({ incremental }) => {
        // Get your data
        const { allPosts, newPosts, removedPostIDs } = getMyPosts()

        // Detect incremental mode and apply the delta changes
        if (incremental) {
          return [
            {
              path: '/blog',
              getData: () => ({
                posts: allPosts, // Update the posts data for the /blog route
              }),
              children: [
                ...newPosts.map(newPost => ({
                  // Add the new posts using the existing Post template
                  path: `/post/${newPost.id}`
                  component: 'src/containers/Post',
                  getData: () => ({
                    post: newPost,
                  }),
                }))
                ...removedPostIDs.map(removedPostID => ({
                  // Flag the old posts for removal
                  path: `/post/${removedPostID}`
                  remove: true
                }))
              ],
            },
          ]
        }

        // This is our full build logic...
        return [
          {
            path: '/blog',
            getData: () => ({
              posts,
            }),
            children: posts.map(post => ({
              path: `/post/${post.id}`,
              component: 'src/containers/Post',
              getData: () => ({
                post,
              }),
            })),
          },
        ]
      },
    }
```

## Beyond the Build

Incremental builds are very fresh for React Static and are not even available in most other static site generators, so we’re still learning a lot about how they behave and what they allow us to do. Even so, they are just the beginning of where static sites are going and I am so excited to have even the most basic form of incremental builds at my disposal for now.

As we move forward with incremental builds, my hope is that they become more transparent to us, implementation details become unnecessary or aren’t even needed at all.
