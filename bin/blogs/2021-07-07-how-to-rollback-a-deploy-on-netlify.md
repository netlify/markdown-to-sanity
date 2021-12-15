---
title: How to rollback a deploy in 2 seconds on Netlify
description: Learn how to rollback to a previous stable deploy on Netlify
authors:
  - Ekene Eze
date: 2021-07-12
lastmod: 2021-07-12
topics:
  - tutorials
tags:
  - rollbacks
  - Jamstack
  - Netlify
tweet: ""
format: blog
seo:
  metatitle: How to rollback a deploy in 2 seconds on Netlify
  metadescription: Learn how to rollback to a previous stable deploy on Netlify
---

Okay, let's talk about rollbacks in a minute. As you may already know, they are one of the most interesting features of the Jamstack. Having the ability to roll back to a previous deploy in seconds to recover from an error is simply great!

The idea of rollbacks is possible on the Jamstack because of [atomic](https://jamstack.org/glossary/atomic/) and [immutable](https://jamstack.org/glossary/immutable/) deploy concepts which ensure that each deploy on your site can function as an independent entity. This means you can rollback to any site deploy at any time.

### So how does it work on Netlify

Why do such much talking when I can show you instead? At the moment, I have [this site](https://largesite-demo.netlify.app/) hosted on Netlify. If you watch me as I hover around the Navbar, you'll notice that the link color gets darker as I focus on them.

![demo of a working site](https://res.cloudinary.com/kennyy/video/upload/f_gif/v1625668863/working_site.gif)

That is the behaviour I want on this site, and that is the behaviour that my users are familiar with. It is accessible and the code has already passed all production tests. But what if I (unintentionally) deploy a new version of this site that breaks that behaviour?. Maybe in an attempt to make the Navbar fancier, I end up something like this:

![demo of the broken site](https://res.cloudinary.com/kennyy/video/upload/v1625668863/broken_site.gif)

Chaos right? this could potentially put me in trouble at work or with the client that I've built the site for. This behaviour will also impact the end-users, in which case I might end up trending on Twitter for all the wrong reasons. The good news is, If this happens, I can just rollback to the previous version in a few seconds like this:

- Go to your `Deploys` tab
- Select the previous production deploy
- Click publish deploy
- It's done!

![demo of the rollback process](https://res.cloudinary.com/kennyy/video/upload/v1625675134/perfectly_working_av1rln.gif)

And just like that, you're back to a stable working version of your site just by the click of a button. Now you can go and figure out what went wrong with the faulty deploy and fix it when your users continue surfing the site like nothing happened.

You might have also noticed in the demo that we get the option to `lock publishing to this deploy`. This gives you the option to say, whatever happens, this deploy will always be the published one. You can commit more code and Netlify will build those new versions but the locked deploy will remain published on your site until you enable auto publishing again.

That's it! if you've been wondering how to rollback a production site on Netlify, I hope this was all you needed to figure it out.
