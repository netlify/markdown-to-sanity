---
title: What are Microservices?
description: Let's break down what we mean when we talk about microservices.
authors:
  - Sarah Drasner
date: '2019-11-18'
topics:
  - tutorials
tags:
  - microservices
  - Serverless
  - monolith
  - APIs
  - Jamstack
tweet: ''
format: blog
---
## Wut?

There’s a lot of jargon involved in development, and it can be overwhelming to figure out what all these terms refer to. Today let’s break down what we mean when we talk about Microservices. This term can refer to a wide variety of software development techniques, typically revolving around breaking up large monolithic structures composed of different dependencies into smaller pieces.

<iframe class="no-aspect-ratio" height="650" style="width: 100%;" scrolling="no" title="Microservices" src="https://codepen.io/sdras/embed/pooqRMN?height=265&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/sdras/pen/pooqRMN'>Microservices</a> by Sarah Drasner
  (<a href='https://codepen.io/sdras'>@sdras</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

**We break these up for a few reasons:**

* Each service can have one unique responsibility, which can offer clarity of functionality- you have something that is responsible for one particular thing, and doing that well becomes more achievable.
* There is less surface area to test if they’re responsible for one thing.
* They’re less brittle, as it’s less common for multiple things to all become dependent on each other in undocumented ways.
* Promoting team autonomy- with more succinct disparate services, each team is slightly less dependent on one another.
* Easier comprehension and adoption for developers consuming the services, as well as documentation.
* They can potentially become more interchangeable and reusable. And as such, we can also benefit from open source as multiple people might be able to use the same thing.

In my opinion, if a microservice is built well, it offers the same clarity as a [pure function](https://www.sitepoint.com/functional-programming-pure-functions/), meaning each service owns its unique inputs and outputs. Ideally this also means we can avoid unforeseen side effects from disparate parts of the application, which can help with long-term maintenance. Microservices don’t always necessarily accomplish this, but many have found that they have a better chance of doing so with this approach.

## How do Microservices relate to Netlify?

We mentioned before that this concept can be quite broad. What do we typically mean when we use the term microservices in relation to Netlify?

Sites deployed on Netlify use [JAMstack](https://jamstack.org/) architecture, meaning that applications are prebuilt and prerendered, and served via CDN, without web servers. Though others might, we don’t use the term static, particularly because it can be confusing for people- if something is static, you can’t create dynamic experiences, right?

Not necessarily so. We can host our prebuilt applications and surface the information that we know people will need at the outset, and then use microservices to connect to other dynamic functionality. 

Here are some examples of how we can use this type of architecture with a JAMstack site hosted on Netlify:

### Serverless as Microservices

[Serverless Functions](https://functions.netlify.com/) are a subset of what a microservice can mean. Microservice is a broader term, and Functions are a particular tool to accomplish working in this paradigm.

[Here’s an example](https://github.com/sdras/ecommerce-netlify) I built with a JAMstack site that connects to Stripe via a Netlify Function (and an [article that breaks it down](https://css-tricks.com/lets-build-a-jamstack-e-commerce-store-with-netlify-functions/)). Serverless functions tend to be good tools for this because they are event-driven logic executed on the server. They can be broken down by task, and can protect sensitive client-side information using environment variables and secrets. In this case, the [Netlify Function](https://github.com/sdras/ecommerce-netlify/blob/master/functions/index.js) talks to Stripe, but if we needed to add additional functionality elsewhere in the application, we could then write another serverless function to handle that as well.

### APIs as Microservices

Do we need Serverless? In the example above, we used a Serverless Function to talk to an API to accomplish a particular task (in this case, communicating payment information to Stripe). We can also speak directly to an API without a Serverless Function as well, and this can be a microservice.

Let’s say I have a large clothing store application that’s connected to a database. In this particular example, I could create one giant database from which I retrieve all of my information, or I could create many smaller services, split up by domain operations. One could be a User collection where I track authentication, another a Children’s Clothing collection that manages tasks related to that inventory, and so forth, all with their own distinct APIs. This way the operations for each are separated and unique to their own collection’s functionality.

This would also be microservices with JAMstack- (the A in JAMstack actually standing for API 🙂) 

## Conclusion

When we talk about Microservices in general, we’re describing a programming paradigm that moves away from monolithic structures, and breaks functionality down into smaller groups. We do this so that large, tightly-coupled systems that can be difficult to reason about can be transformed into clear, well-defined services, tailored to their given responsibility.

**It’s not that APIs or serverless are necessarily microservices, it’s that we have split apart what we want to access, and that modularity is what we call microservices.**

The best path to understanding can be building something, if you’re curious how you can build a JAMstack application that makes use of several microservices, give it a try! Our Netlify Functions playground is a great place to start as it [has a ton of smaller examples](https://functions.netlify.com/examples), and you can even use several within the same application to create dynamic experiences on the web.
