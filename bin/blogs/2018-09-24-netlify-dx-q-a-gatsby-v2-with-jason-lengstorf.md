---
title: 'Netlify DX Q&A: Gatsby v2 with Jason Lengstorf'
description: >-
  Presenting the first in our new interview series with leaders and innovators
  in Developer Experience - and who better to start with than Gatsby!
authors:
  - swyx
date: '2018-09-24'
topics:
  - insights
tags:
  - Developer Experience
tweet: >-
  Presenting the first in our new interview series with leaders and innovators
  in Developer Experience - and who better to start with than Gatsby!
format: blog
---

<div style="display: flex; padding-top: 2rem">
<img src="https://pbs.twimg.com/profile_images/715433404100059137/AYjfw8tH_bigger.jpg" style="object-fit: contain"/>
<div style="padding: 1rem">
We are super excited to bring you a new interview series with leaders and innovators in Developer Experience (DX) - and there is no one better to start with than Jason Lengstorf from the Gatsby team!
</div>
</div>

## On Gatsby v2

**Congrats on [the release of Gatsby v2](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/)! What was the journey like? Any fun behind the scenes stories?**

![https://pbs.twimg.com/media/DnU9g8BUwAACUb5.jpg](https://pbs.twimg.com/media/DnU9g8BUwAACUb5.jpg)

**Jason**: V2 has been a long time coming. We had 315 people contribute to its release over the past months, ranging from building new features like GraphQL schema stitching to improving reliability of existing code.

I don’t have any fun behind-the-scenes stories because — and this is one of my favorite things about Gatsby — we work on open source completely in the open! We have a weekly maintainer call that’s open to all community members, regular updates posted to our GitHub teams, public issues, and a newsletter. We even [livestream some of our work!](https://www.youtube.com/watch?v=7M-7GlQGeGc&feature=youtu.be)

## On Gatsby's Open Source Strategy

![https://www.gatsbyjs.org/static/gatsby-store-e5812646d2a0dc91f361dddfff4d097d-f35d4.png](https://www.gatsbyjs.org/static/gatsby-store-e5812646d2a0dc91f361dddfff4d097d-f35d4.png)

**[All Gatsby contributors get swag](https://www.gatsbyjs.org/blog/2018-08-09-swag-store/) through an [open source swag store](https://github.com/gatsbyjs/store.gatsbyjs.org) automated by Peril and built with Gatsby v2, Shopify, and Auth0. It was a major project you led. Why was this so important to the Gatsby open source strategy?**

**Jason**: Open source projects are only as good as the community that powers them, so for Gatsby, we wanted to double down on taking care of the wonderful people who dedicate their time and expertise to helping maintain the Gatsby ecosystem. The swag is a way to show our appreciation, and — hopefully — to encourage first-time contributors to get involved.

The swag is only part of the equation, though. We also invite everyone who submits a pull request to join the Gatsby organization on GitHub after it’s merged. This means they can label issues, review pull requests, and even merge pull requests into Gatsby. We want the community to really feel — and really have — ownership over the open source project.

## On DX vs UX

**You recently wrote a great article on [Breaking the Deadlock between User Experience and Developer Experience](https://alistapart.com/article/breaking-the-deadlock-between-user-experience-and-developer-experience) and mention that open source can help pay the cost of creating solutions to the deadlock. How does this idea apply to Gatsby specifically?**

**Jason**: Gatsby focuses heavily on reducing the barrier for developers to make good UX decisions by removing the difficulty in implementing them. **Things that are typically pretty challenging to set up — such as bundle splitting, asset prefetching, offline support, image optimization, or server side rendering — are all done by default with Gatsby.**

For example, our [default starter](https://github.com/gatsbyjs/gatsby-starter-default) gets a [perfect score on webpagetest.org](https://www.webpagetest.org/result/180918_P2_965e2f4c09aa7f14cf2bd8b79fd882bf/), so developers don’t have to think about the underlying setup at all. They can just build a website and know that the UX was already paid for by Gatsby’s underlying code.

Design decisions in Gatsby’s core are framed by a discussion of the trade-offs both for the developers working with the tools (i.e. the DX: *is this pleasant to build with?*) and the people who will actually use the sites that are built with it (i.e. the UX: *does this improve the experience for the end user?*). By taking both UX and DX into consideration, we’re able to avoid forcing a situation where the developers’ experience is at odds with the users’.

## On GraphQL

**Gatsby’s data flow is entirely GraphQL based, which is a sticking point for some. Gatsby v2 doubles down on it, bringing GraphQL to the component level as well as adding experimental schema stitching support (for native GraphQL APIs). What trends are you seeing in GraphQL adoption?**

**Jason**: I’m pretty biased, but my experience with GraphQL is that the adoption cycle goes something like this:

1. Learn about GraphQL
1. Dismiss it as a fad
1. Keep hearing about it
1. Try it out
1. Hate it
1. Keep trying
1. Things click
1. Never willingly use anything but GraphQL ever again

GraphQL introduces a way of handling data that feels weird at first, and so it feels hard at first. The learning curve for GraphQL is steep, but it’s short.

Overall, **I’m seeing a pretty significant shift in frontend development toward GraphQL**. It’s a great fit for the way many teams manage and access data, so my guess is we’ll only see this trend grow stronger.

## On Accessibility

**Gatsby v2 also switched to [@reach/router by Ryan Florence](http://reach.tech/router) for more accessible routing. Do you see other opportunities for an accessibility-first Gatsby? Or broader React ecosystem in general?**

**Jason**: I think the work Ryan is doing with [Reach UI](https://ui.reach.tech/) is fantastic, and it’s a much-needed way of making a11y much more approachable for devs everywhere. Gatsby can’t control much about a11y of the components devs use inside it, but we’re doing what we can to make sites more accessible.

I’d love to see more of that happening across the broader JavaScript community. And thanks to folks like [Léonie Watson](https://ui.reach.tech/), [Marcy Sutton](https://twitter.com/marcysutton), [Nicolas Steenhout](https://twitter.com/vavroom), and many others, we’re seeing the general awareness of a11y improving.

## On the term "Static Site Generator"

**Is Gatsby “just” a static site generator, or something more? The same idea is arising across Vue with Vuepress and Svelte with Sapper. What do we call this new generation of SSG?**

**Jason**: It’s much more than a static site generator. Anything you can build with React can be built using Gatsby, whether that’s an ecommerce store, an app with user authentication, a full-blown SaaS platform, or pretty much anything else you can imagine.

Gatsby, at its core, is **an opinionated framework for building React apps**. It doesn’t remove any of the capabilities of React — instead, it adds performance enhancements, drop-in CMS integrations, SEO benefits, and predictable workflows that are difficult and time-consuming to implement manually.

Think of it like **create-react-app + performance, routing, server-side rendering, and a data layer, all backed by a large ecosystem of plugins, integrations, starter templates, and other tools** to make app development faster and more consistent.

## On DX

**What does “Developer Experience” mean to you?**

**Jason**: Developer Experience means, in short, to [make the right thing the easy thing](https://youtu.be/xqT8e6_yzLg). When we design our tools, whether they’re design systems, CLIs, or variable names, we should be thinking about the developers who’ll need to use them and the people who will be using the software built by those developers.

Tools should create great experiences for the end user by setting smart defaults and abstracting away difficult-but-critical design decisions — things like performance and accessibility, for example — so developers using the tools will produce excellent results by taking the path of least resistance.

To put it another way, **developer experience means recognizing and accepting that people look for shortcuts, and designing our tools in such a way that the shortcuts lead developers toward the best outcome for everyone.**

---

***Jason Lengstorf*** *is a developer advocate for Gatsby. He can be found on Twitter at [@jlengstorf](https://twitter.com/jlengstorf), and regularly livestreams at [twitch.tv/jlengstorf](https://twitch.tv/jlengstorf). He lives in Portland, OR.*
