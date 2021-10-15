---
title: On Mullenweg and the Jamstack - Regression or Future?
description: In response to Matt Mullenweg - founder of WordPress - who recently
  took a swipe at the Jamstack, we look at why developers are moving from
  monolithic WordPress sites to the modern web architecture.
authors:
  - Matt Biilmann
date: 2020-09-15T18:00:00.000Z
lastmod: 2020-09-17
topics:
  - insights
tags:
  - jamstack
  - wordpress
tweet: ""
format: blog
relatedposts:
  - Migrate Your WordPress Site to the Jamstack
  - "Celebrating 1 million developers: What’s next for Netlify and the Jamstack"
seo:
  metatitle: On Mullenweg and the Jamstack - Regression or Future?
  metadescription: In response to Matt Mullenweg - founder of WordPress - who
    recently took a swipe at the Jamstack, we look at why developers are moving
    from monolithic WordPress sites to the modern web architecture.
---
There's often a moment right around the time when an old technology is about to be displaced by the next thing, where the main leader in the field goes out and makes a strong argument that absolutely nothing is happening. A moment that ends up looking like a turning point where the new was undeniably present enough to be worth being in denial about.

Steve Ballmer once loudly proclaimed: "There's no chance that the iPhone is going to get any significant market share. No chance" - just at the cusp of Microsoft's complete play in the mobile space getting swept away by the wave Apple had started.

“Neither RedBox nor Netflix are even on the radar screen in terms of competition,” said Blockbuster CEO Jim Keyes, speaking to the Motley Fool in 2008. “It's more Wal-Mart and Apple.” Two years later Blockbuster filed for bankruptcy.

These moments are typically obvious in hindsight but rarely as clearcut while the change is still in the making.

It's possible that we just witnessed a Steve Ballmer moment in the world of web architecture. In a [recent interview](https://thenewstack.io/wordpress-co-founder-matt-mullenweg-is-not-a-fan-of-jamstack/), Matt Mullenweg - the creator of WordPress - addressed the [Jamstack](https://www.netlify.com/jamstack/) as "a regression for the vast majority of the people adopting it". At once acknowledging the undeniable presence of the new architectural approach moving us away from monolithic web applications, while denying that any major shift in the architecture of the web is really coming.

## The World Before Jamstack

Around ten years ago, before Netlify, I was working on a CMS that competed with WordPress, removing a lot of the operational hurdles of hosting, scalability and operations. We had a booth at a trade show right next to a competing managed CMS and we got to talking about the elephant in the room: WordPress, the absolute dominant player in our space. We had to acknowledge that, even if it was a much larger competing product, it was also a brand we simply couldn't directly market against. The developer community had rallied around the platform, the open source project, and the ecosystem.

There was genuine excitement about new features like custom post types, a real feeling of being part of an open source movement of builders, driving the web forward, and deep engagement around the massive ecosystem of plugins and themes that gave developers an ever increasing set of building blocks. WordPress had been a pioneer and trailblazer for the open web and was cherished by its developer community for good reason.

Fast forward ten years and WordPress appeared at the top of [the list of most dreaded platforms according to Stack Overflow’s 2020 Developer Survey](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-platforms-dreaded5). 67 percent of developers using WordPress indicated they want to move off of the platform. The excitement amongst web developers has shifted dramatically.

This has happened to a large degree as a result of the broad changes that had swept across the frontend landscape and led me to coin the term Jamstack about five years ago.

## The end of the WordPress era

When WordPress was really top of mind for developers, version control was still not in broad use for the majority of developers, amongst the ones using it - continuous integration was rarely practiced and continuous deployment was the bleeding edge.

GitHub led to a whole different level of adoption of version control amongst web developers, and not just for revisions of source code, also as the main collaborative layer between developers and even as the workflow layer driving deploys and rollouts.

The world of WordPress largely felt foreign to this, with lots of styles and theme information living in a database and a self updating system that would happily overwrite its local install with no source revision management.

Around the same period of time the modern browser emerged and changed the role of the browser from mainly being a document viewer delegating most of any heavy lifting for dynamic functionality to a server, to becoming an operating system running JavaScript and today even web assembly, with access to a broad set of web APIs.

Simultaneously the ecosystem around Node.js led to an explosion of build tools, starting with the early task managers like Grunt and Gulp and spreading into CSS processors, JS transpilers, bundlers and advanced frameworks like Ember, Angular, React, Vue, Svelte, etc.

Anyone really adopting the full set of these tools would quickly stop really feeling at home in a WordPress ecosystem where each individual plugin had its own opinion on the frontend layer, where Git was never really a first class citizen and where the view layer was a mix of serverside PHP tightly coupled to MySQL queries without any clear API as an abstraction layer between.

Once the charm of the fundamental architecture of WordPress seemed to be going away, the obvious pains around acceptable performance, scaling, maintaining, operating, and securing WordPress installs started feeling like an ever increasing burden rather than a reasonable trade-off.

## The Rise of the Jamstack

In his comments to The New Stack, Mullenweg mentions the fragmentation of the toolchain as one of the drawbacks that'll end up making the Jamstack a step backwards:

“You can patch together a dozen services, each with its own account and billing, for hundreds of dollars a month, to get a similar result you’d have for a few dollars a month using WordPress on shared hosting,” he said. “And it would be more fragile, because the chain is only as strong as its weakest link. You are chaining together different toolsets, logins, billing, hosting… any part of it going down can break the entire flow.”

This is interesting, since this challenge was such a strong part of the underlying reason that Chris Bach and I started Netlify back in 2014.

We had conviction that the Jamstack approach as an architecture, would bring real benefits to the web in terms of performance, scalability, simplicity, end user experience and security. But it was obvious that the process of manually stitching together deployment pipelines, build tools, edge networks, object stores, API runtimes and so on, was an inherent barrier that we had to remove to make the Jamstack a truly viable approach.

As we've built out Netlify, we went from a place where doing static builds with global CDN deploys was a decidedly hard pattern to work around, to a state where Jamstack was a clear step up in developer experience for a large set of problem spaces. As we keep evolving both Netlify and the whole ecosystem around us, the set of areas where the Jamstack truly shines will only keep expanding.

### An unstoppable ecosystem

In the same way that we solved for the fragmentation between this set of services and added a workflow layer that made the experience delightful rather than challenging - there's a whole set of companies and tool builders working on improving the experience for marketers, content editors, and other stakeholders involved in building for the web.

Stackbit and Tina CMS are both examples of companies working on transforming live editing experience for non-developers in the space and making huge strides, just like Prismic's Slice Machine has shown how you can adapt a page builder approach with the clear separation of concerns headless CMSs and component based frameworks brings.

TakeShape is showing how tooling can emerge to link together sources like headless CMSs and e-commerce platforms without fragile glue code, Hasura, One-Graph, and Apollo are all in different way demonstrating ways to bring federated APIs and services together under one query layer and of course at Netlify we'll continue to raise the bar for what the experience can be like when working with the layer of APIs that plays such a big role in Jamstack development.

There's simply no reason to believe that the disadvantages of the Jamstack that Mullenweg points out are inherent to the approach or unsolvable problems - and meanwhile it feels undeniable that the developer excitement and ecosystem groundswell has already reached a tipping point where so much of what is left is a maturing of the whole ecosystem.

The Jamstack is undeniably here to stay, the shift away from large monolithic apps is happening, and the web will be a better place for it. Join the conversation with me on Twitter, [@biilmann](https://twitter.com/biilmann).