---
title: “Keeping It Simple” at React Summit
description: Netlify’s CEO Matt Biilmann delivered a lightning talk for React
  Summit called “Keeping It Simple.” You can replay the talk now or keep reading
  for a few tidbits and takeaways!
authors:
  - Netlify
date: 2021-04-29
lastmod: 2021-04-28
topics:
  - insights
tags:
  - Build
  - Distributed Persistent Rendering
  - Jamstack
tweet: ""
format: blog
relatedposts:
  - "Next.js on Netlify: Now with support for On-demand Builders and Distributed
    Persistent Rendering"
  - "Faster builds for large sites on Netlify with On-demand Builders: Now in
    early access"
seo:
  metatitle: "Distributed Persistent Rendering: Building Large Jamstack Sites"
  metadescription: "Netlify CEO Matt Biilmann on a new architectural approach to
    building large Jamstack sites: Distributed Persistent Rendering."
  ogimage: /img/blog/og-keeping-it-simple-netlify.png
---
In case you missed it, the [remote edition of React Summit](https://remote.reactsummit.com/) took place April 14th-16th. It was an inspiring and educational online event with lots of great programming, lovely conversations, and lots of attendees snapping selfies of their snazzy desk setups.

Netlify’s CEO [Matt Biilmann](https://www.netlify.com/authors/matt-biilmann/) delivered a lightning talk for React Summit called “Keeping It Simple.” You can [replay the talk now](https://www.youtube.com/watch?v=p-ZWytPX1fo) or keep reading for a few tidbits and takeaways!

<iframe width="560" height="315" src="https://www.youtube.com/embed/p-ZWytPX1fo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

One thing that React and the Jamstack have in common is they both have made it easier for developers to reason about the state of web properties. ([1:28](https://youtu.be/p-ZWytPX1fo?t=88))

Having a handle on the state of your web application matters, so you can understand exactly what a visitor will experience at any given moment. ([5:36](https://www.youtube.com/watch?v=p-ZWytPX1fo&t=336s))

However, as developers continue to build increasingly large projects with a Jamstack approach, they’ve seen build times tend to get longer. There are lots of solutions for reducing build times, but some of those solutions break the Jamstack contract of atomic, immutable deploys. ([7:12](https://www.youtube.com/watch?v=p-ZWytPX1fo&t=432s)) When this contract is broken, it makes it difficult for developers to understand the state of the content served to visitors.

This leads us to ask: how can we approach these problems from a Jamstack perspective while maintaining simplicity? ([7:40](https://www.youtube.com/watch?v=p-ZWytPX1fo&t=460s))

## Meet Distributed Persistent Rendering

Enter Distributed Persistent Rentering, or “DPR” for short. With DPR, we take just the critical pages at build time, and then we build the rest of the pages on-demand but persist them. ([7:56](https://www.youtube.com/watch?v=p-ZWytPX1fo&t=476s))

This would give us the same guarantee for atomic deploys and predictable state that you’d expect from a Jamstack build.

DPR is a concept for the Jamstack architecture that evolves one of its fundamental principles. Unlike early approaches to incrementally building sites that were unique to frameworks, this is imagined for the broad community of frameworks to adopt. We at Netlify are excited to work with the community on this.

### A note on naming vs. inventing

Just like coining the term “Jamstack” didn’t mean inventing an entirely new architecture from scratch, naming this concept of “Distributed Persistent Rendering” doesn’t mean we’re creating a brand new solution.

The term “DPR” is new to us, but in a lot of ways, we’re taking inspiration from solutions that have worked in the past. We’re simply reworking them to fit with modern Jamstack best practices.

We hope that by giving this pattern a name developers will start to gain a shared understanding about it, so we can build lots of new solutions to achieve a common outcome, which is: keeping it simple and making it easy to reason about the state of web properties.

## Join the conversation

As Matt said in his React Summit presentation, we want to open up this conversation to the community for participation. We have been working with prototypes of this DPR approach with Nuxt, Next.js, and Eleventy, but we still have a long way to go to realize the full potential of this concept. We hope you’ll contribute your ideas, thoughts, and concerns so we can build a better web together.

**\
The [Request For Comments (RFC) for DPR](http://netlify.com/dpr-rfc) is open for comments now, and we’d love for you to join the conversation!**