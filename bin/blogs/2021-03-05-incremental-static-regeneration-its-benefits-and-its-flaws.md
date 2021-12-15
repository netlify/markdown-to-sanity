---
title: "Incremental Static Regeneration: Its Benefits and Its Flaws"
description: There are some awesome pros and some serious cons to using
  incremental static regeneration in your projects.
authors:
  - Cassidy Williams
date: 2021-03-08
lastmod: 2021-03-08
topics:
  - insights
tags:
  - popular
  - Next.js
  - Functions
  - rollbacks
  - Deploys
tweet: ""
format: blog
relatedposts:
  - "Next.js 101: What you should know"
  - |
    How to Deploy Next.js Sites to Netlify
seo:
  metadescription: There are some awesome pros and some serious cons to using
    incremental static regeneration in your projects.
  metatitle: "Incremental Static Regeneration: Its Benefits and Its Flaws"
  ogimage: /v3/img/blog/isrog.png
---
Right now there are a lot of hot takes out there about how to improve and scale sites "beyond Jamstack" by adding in features that use a Node server. One of those features is called Incremental Static Regeneration.

Some people call it "hybrid web development" (or "hybrid serverless + static") but let's talk a bit more about what that means.

## What happens when you deploy a Jamstack project

First of all, we should talk about what happens when you build Jamstack sites, and how atomic and immutable deploys work. These are fundamental principles to understand for this style of web development.

**Atomic deployment** means all of the code, assets, and configuration of a site are updated together at the same time. This means that a website cannot be served in a partially updated state.
**Immutable deployment** insulates deploys from future actions, guaranteeing their integrity. This means there is always a stable copy of this deploy that can be referenced or re-deployed at any state in the future.

(You can read more about these terms in [this blog post](https://www.netlify.com/blog/2021/02/23/terminology-explained-atomic-and-immutable-deploys/?utm_campaign=devex-cs&utm_source=blog&utm_content=isratomic))

You can almost think of this as state-driven development. Every single deploy is a new state of your application or site.

![Atomic deploys, the latest deploy is the live deploy](/v3/img/blog/atomic-star.gif "Atomic deploys, the latest deploy is the live deploy")

If you were to make a mistake on your site, let's say you broke prod, you deployed the wrong brand colors, or you mixed up some copy, you can [instantly rollback](https://docs.netlify.com/site-deploys/manage-deploys/#rollbacks) to a previous deploy without having to wait for a new build, because that version of your site exists in space. It's why it works so well with Git, it's similar to reverting a commit.

![Instant rollbacks mean you can choose any built deploy to go live at any time](/v3/img/blog/rollback-star.gif "Instant rollbacks mean you can choose any built deploy to go live at any time")

I won't get into the details of the perks of pre-rendering all of your pages, but if you'd like to read more about that, you can check out more information on [Jamstack.org](https://jamstack.org/what-is-jamstack/).

## Incremental Static Regeneration

Incremental Static Regeneration, or ISR, seeks to extend the power of static sites by adding some server-side rendering (SSR) goodies on top.

### How it works and why it's cool

When you deploy a site with ISR enabled, you deploy a (mostly) static site. You have your pre-defined static pages that were built, and you have routes on your application that aren't built until your users hit those pages.

Typically when you have a server-side rendered (SSR) page that is one of these unbuilt pages, your users have to wait for the page to be built and served all at once. But in the case of ISR, if your users hit that route, they get a *fallback page*. A fallback page is a placeholder for the actual content that will be on that page, and you can have skeleton components in place until data is built and loaded. Once that data has been resolved, that page is cached, added to the rest of the site's bundle, and the next user of your page will see the built page. If the data needs to update, the user will see that cached version instead of the fallback, and the site can set a *revalidate timeline* so that it can revalidate and update data regularly when your users hit the page.

![Incremental static regeneration adds new pages to the latest deploy and caches them separately](/v3/img/blog/isr-star.gif "Incremental static regeneration adds new pages to the latest deploy and caches them separately")

Each of the new blocks in this diagram is a new page that is built at runtime and added to the "stack."

This method of serving pages is using the [stale-while-revalidate](https://web.dev/stale-while-revalidate/) caching strategy. It's pretty dang performant, because you can (nearly) get the performance benefits of a pure static page, with the power of new dynamic data like you would in SSR. That's why this strategy is very often called "hybrid" development, because it combines the best of both worlds!

### Why it's not great

There's a few flaws in ISR that you might want to consider before going all-in on the concept.

When you have a user come to your page, you want them to see the most up-to-date version, immediately. With ISR the first visitor to a page will not see that. They will always see a fallback first. And then later, if the data gets stale, the first visitor to see that cached page will see the out-of-date data first before it revalidates. Once again, this inconsistent experience can be pretty difficult to debug if your users experience negative side-effects as a result of old/unbuilt pages.

![Pages can get stale, but they'll stay deployed](/v3/img/blog/stale-star.gif "Pages can get stale, but they'll stay deployed")

Remember the whole section up there of atomic and immutable deployment? ISR, unfortunately, breaks that model. By adding extra pages to your bundle, rollbacks can no longer be instant, and you no longer have that single new version of your site when you update your content.

Let's say you build a site that has a bunch of products for sale, and each of those products are on ISRed pages. In an ideal scenario, your users can navigate to a products' page, see a product for sale, and buy it. The next users who go to the page will see it, and the page might update to show that the product is out of stock.

If you rollback your site to a different deploy, because your page is cached separately from the bundle, it could exist in a different state for your user than expected. It could be the old version of the site, the new version, or some funky in-between cached version trying to revalidate itself. And unfortunately, debugging this is difficult, because different users (and the dev team!) would see different pages, and it might be difficult to duplicate.

![ISR means that you can rollback, but the stale/separately cached pages will stay live](/v3/img/blog/rollbackisr-star.gif "ISR means that you can rollback, but the stale/separately cached pages will stay live")

Notice how in this graphic, the pages that are cached separately stick around with their nice big checkmarks, while the rolled-back page is no longer the shipped deploy. If the users navigate to those cached routes, they might see out-of-date data.

The stale-while-revalidate caching that powers ISR is the reason behind these gotchas. When ISR is based on serving stale content like this, we end up with a pretty big footgun that ultimately is confusing for users, and frustrating for developers.

## How does Netlify handle it?

Currently, ISR is built in to Next.js, and we serve those unbuilt pages via [Netlify Functions](https://functions.netlify.com/?utm_campaign=devex-cs&utm_source=blog&utm_content=functions), rendering them new every time, to avoid that caching problem. This isn't the spirit of ISR, yes, but we are strongly in favor of atomic and immutable deploys. There are better ways to approach your sites than with this type of caching.

We have solutions coming in the future to serve these kinds of unbuilt pages in a better way, keep an eye on this space!

## What should I do for my projects?

✨ It Depends ✨

Clearly there are benefits to ISR, but it does come with caveats! Weigh the pros and the cons and decide for yourself if it's right for you.
