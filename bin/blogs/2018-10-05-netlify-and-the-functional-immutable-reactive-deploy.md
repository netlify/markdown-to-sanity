---
title: 'Netlify and The Functional, Immutable, Reactive Deploy'
description: >-
  Three game-changing software engineering paradigms, and how they relate to
  Netlify
authors:
  - swyx
date: '2018-10-05'
topics:
  - insights
tags:
  - Netlify
  - Functional Programming
  - Immutability
  - Reactive Programming
tweet: >-
  Three game-changing software engineering paradigms, and how they relate to
  Netlify
format: blog
---
Although Turing completeness lets you code anything you want, constraints are good. Generation after generation of software engineers learn, forget, and relearn this truth. In fact, picking the right tools for the job really involves picking the right constraints for the job. Too few constraints, and it is easy to spend more time patching bugs than writing business logic. Too many, and the language or framework actively gets in the way of development speed.

## Constraints as Engineering Paradigms

There are three such kinds of constraints that have become game-changing software engineering paradigms in their own right.

One such paradigm that has seen a lot of success is **functional programming (FP)**. Although learning FP involves a lot of declarative verbosity and unlearning of previous imperative idioms, the benefits of writing FP have become increasingly recognized in high level software engineering characteristics we care most about like composability, testing, parallelization, maintainability and reliability (hence the particular success of functional **languages**, which *force* FP rather than offer *opt-in* FP).

Closely related to the functional paradigm is the idea of **immutability**. We have mostly solved space consumption and API design issues related to trying to "immutably mutate" objects efficiently, and the software engineering benefits are also clear: from "time-travel" (e.g. undo/redo), to better observability to safer and cleaner concurrency. The [runaway success of Git](https://www.netlify.com/blog/2018/09/12/the-rise-of-immer-in-react/) is a prime example of how taking an immutable approach to software engineering has made it incontrovertibly better. (See also: [The Rise of Immer in React](https://www.netlify.com/blog/2018/09/12/the-rise-of-immer-in-react/))

Last and most contentious on our list is **reactive programming**. Reactive programming takes the declarative computing principle from FP and applies it to data streams. Any interesting app is going to be responding to changes over time — that is a given. But what's less talked about is how the declarative nature of reactive programming also lends itself toward composable, scalable automation by chaining reactive programs together. After all, isn't that what we ultimately want computers to do for us?

## From Software Engineering to Software Deployment

If we apply these three lessons from software **engineering** to software **deployment**, we get very interesting results which get to the very heart of what Netlify does.

**Function deployment and Functional deployment**: Instead of every company writing one or more servers that have to be manually managed for load spikes and crash scenarios, why not publish just the functions and let the hosting service manage uptime and scale for you since they are the experts? Instead of writing stateful code that loses data if servers crash, why not treat your apps and sites as a pure function of your data with the modern breed of static site generators like Gatsby and VuePress?

**Immutable Deployment**: Instead of writing server- and client-side code to deal with multiple deployment environments and rollback strategies, why not make every deploy immutable and simply point to whichever version you want published? Have a preview for every PR? Drop-in A/B testing? A staging site for every branch? Sure, why not? If there's a problem, roll it back with instant cache invalidation.

**Reactive Deployment**: Instead of ssh-ing to your VPS, taking your site down for 5 minutes and restarting the server every time you update your code, why not hook your site up to GitHub and *continuously deploy* every time you push to master? Or every time some external data source is updated?

These are the common threads we find when comparing programming paradigms to the new deployment paradigm that Netlify is championing. If you like this idea and want to riff on how we can take other software engineering lessons to deployment, we would love to chat.
