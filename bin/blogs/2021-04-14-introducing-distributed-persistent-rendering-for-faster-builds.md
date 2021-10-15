---
title: "Distributed Persistent Rendering: A new Jamstack approach for faster builds"
description: "Distributed Persistent Rendering: a new idea in the Jamstack to make deploys faster and bring a wider range of use cases."
authors:
  - Matt Biilmann
date: 2021-04-14
lastmod: 2021-04-14
topics:
  - news
tags:
  - Build
  - Distributed Persistent Rendering
  - Incremental Static Regeneration
  - Next
  - Nuxt
  - Eleventy
  - Jamstack
tweet: ""
format: blog
relatedposts:
  - "Faster builds for large sites on Netlify with On-demand Builders: Now in early access"
seo:
  metatitle: "Distributed Persistent Rendering: Jamstack Approach for Faster Builds"
  metadescription: "Learn more about Distributed Persistent Rendering, a new idea in Jamstack that brings a wide range of use-cases. Please give us your feedback and collaborate on this community-led idea with us."
  ogimage: /img/blog/og-distributed-persistent-rendering.png
---

![Jamstack Distributed Persistent Rendering](/img/blog/dpr-blog-post-top-graphic.jpg "Jamstack Distributed Persistent Rendering")

We’d like to share a new concept we’ve been exploring for the [Jamstack](https://jamstack.org), born out of our work with large enterprise dev teams deploying hundreds of thousands of pages at a time.

We wanted a way to make those deployments faster—without introducing unwanted complexity for Jamstack developers. Some solutions have come up before now, but they tend to lock you into a specific framework or break some of the most compelling reasons to use Jamstack in the first place. A Jamstack-focused approach was needed that would work across the ecosystem. After discussion both within Netlify and some members of the Jamstack community, we feel we’ve landed the right concept—something we’ve dubbed “Distributed Persistent Rendering” or “DPR” for short.

This post is designed as an early introduction to the approach we’re proposing as well as an invitation for the entire community to offer feedback and collaboration. Our hope is to create a new standard that maintains the core principles and benefits of Jamstack and works across a wide variety of site generators and frameworks, bringing an even wider range of websites and use cases to the Jamstack.

## The power of atomic deploys

We think the very best tools are built around a simple mental model that helps you easily reason about the state of your application as you build it. Modern frontend libraries (like React and Vue) make a simple, powerful contract with the developer: UI becomes a function of state. Change the state, and the UI will rerender in response.

The Jamstack has thrived because it too centers around an intuitive mental model: every git push runs a build process to create its own atomic deployment. This approach keeps it incredibly easy to reason about the current state of your site or application, even as many changes are committed daily from around your team. It makes both new deploys and rollbacks painless. It keeps you always confident in what any visitor will see at any given URL. And, most importantly, it avoids all the deep layers of caching, complexity, and infrastructure that came out of scaling the legacy web.

## The fight against complexity

For any technology, the hardest part is not establishing simplicity, but protecting it over time.

As the Jamstack evolves, new features like dynamic server side rendering, rehydration, tiered CDN caching, and stale while revalidate seem to be creeping us back towards all the complexity we fought to escape. Can you still be confident in a rollback? Do you really know how your site will behave if you push deploy preview #110?

Of course the momentum to add features to a platform is the desire to solve real challenges. And one of the challenges of the atomic deployment model is the time it takes to rebuild an entire site each for each deploy. Larger teams and projects are feeling this impact, especially now that Jamstack sites are scaling to 100,000 pages and beyond.

## Speeding up deployments... without weighing down the Jamstack

Netlify would like to work with the entire Jamstack community to help bring a solution for faster large site deployments—but importantly an approach that stays true to the atomic deployment model of the Jamstack. We’re calling our proposal Distributed Persistent Rendering, and today we’ve posted details about the approach in a [Request For Comments (RFC)](https://www.netlify.com/dpr-rfc). Our hope is that community members and site generator authors will weigh in and help us build something that is easily adoptable by multiple frameworks. Already, we’ve seen early engagement from Nuxt and 11ty and we hope many more will join the collaboration.

![Distributed Persistent Rendering](/img/blog/dpr-blog-post-image.png "Distributed Persistent Rendering")

Distributed Persistent Rendering (or DPR) allows developers to defer rendering any given URL or asset until it’s first requested. With DPR, you can (and should) still prerender critical pages at build time—perhaps your homepage or recent blog posts. But that huge archive containing years of older posts? Using DPR, those pages can be rendered only when and if they are requested. And once rendered, they remain as a persistent asset until the next deploy—just as if they had been part of the initial build. It brings the benefit of faster builds without introducing the complexity of scaling and caching server-side rendering. And unlike a caching-based strategy, there’s no risk of confusion from stale assets or fallback pages.

We think DPR strikes the right balance—new capabilities without new complexities. We’re so excited we’ve even built a new service offering to help accelerate us towards DPR and [we’re announcing today](/blog/2021/04/14/faster-builds-for-large-sites-on-netlify-with-on-demand-builders-now-in-early-access/) that any Netlify customer can gain early access to explore the approach and the simple API behind it.

Please let us know what you think in the [RFC](https://www.netlify.com/dpr-rfc) and show us what you build!
