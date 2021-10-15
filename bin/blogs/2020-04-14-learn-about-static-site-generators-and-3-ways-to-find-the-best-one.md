---
title: What is a Static Site Generator? And 3 ways to find the best one
description: Learn how Static Site Generators can boost your website's speed,
  improve security, and more easily scale. Plus 3 tips for finding the best one
  for you.
authors:
  - Phil Hawksworth
date: 2020-04-14T00:00:00.000Z
lastmod: 2020-04-14T00:00:00.000Z
topics:
  - tutorials
tags:
  - Jamstack
  - Tools
  - Static Site Generators
tweet: Learn what SSGs are, how they can boost your website's speed, improve
  security, and more easily scale. Plus 3 tips for finding the best one for you.
format: blog
relatedposts:
  - O’Reilly publishes Modern Web Development on the JAMstack
  - Top Ten Static Website Generators
seo:
  metadescription: What are static site generators? Learn how they can boost your
    website's speed, improve security, and more easily scale. Plus 3 tips for
    finding the best one for you.
  metatitle: What is a Static Site Generator? How do I find the best one to use?
  ogimage: /img/blog/og-image.png
---
![Diagram static site generator turning assets into a website at build time](/img/blog/ssg-flow.png "Static site generators turn assets into sites")

## What is a static site generator?

As websites grew to deliver more and more content, the web development industry found new ways to make the process of maintaining and updating sites more efficient. Years ago, we saw a move away from creating large numbers of individual files by hand, to a system where repeated sections of code could be included and repeated more easily. Web servers would perform that task on demand whenever a request for a resource was received. They'd faithfully combine templates and content, apply loops and logic, and return a page view whenever one was requested. And we'd have to ensure that they had enough horsepower to keep up with demand, fearing the times that our site became popular! 

Static site generators (SSG) do much the same thing. They apply data and content to templates, and generate a view of a page which can be served to the visitors of a site.

The greatest difference between a static site generator and a traditional web application stack, is that instead of waiting until a page is requested and then generating its view on demand each time, a static site generator does this in advance so that the view is ready to serve ahead of time. And it does so for every possible view of a site at build time.

> Think of a static site generator as a script which takes in data, content and templates, processes them, and outputs a folder full of all the resultant pages and assets.

This has a number of valuable effects, but most important is that it shifts this work away from "request time" (when users ask for the view) to "build time" which is unrelated to when users ask for the view of a page. This "decoupled" architecture breaks the relationship between the number of visits to a site and the overhead of generating the views to service all of those visits.

![Diagram: static site generation is decoupled from serving demands](/img/blog/ssg-host-flow.png "Site generation is decoupled from serving demands")

## Why are static site generators so popular now?

This might sound like a return to "the old ways" of making sites, but there are some key differences:

### Static site generators got good!

The tools have vastly improved over the years. As we learned what capabilities were most important to the job of generating lots of site pages, new tools have emerged to those things particularly well. And these tools are now very available to developers, meaning that they can get up and running, be productive, and begin making sites in minutes.

### Static site generators come in all flavours

As the approach began to gain popularity, more and more developers created tools to work in the language and environment which best suited their development tastes. You can now find site generators which are based in a vast number of programming languages, use different templating languages and conventions, and run in all sorts of environments. That familiarity breeds productivity.

### Automation became mainstream

The task of updating a site built this way involves running the site generator to produce an updated version of the pages. Years ago, this was cumbersome but now there are many [tools which can automate that task](/products/build/?utm_source=blog&utm_medium=about-ssgs-pnh&utm_campaign=devex) for us. The result is a development workflow which is very effective and predictable, but which also yields very robust, pre-generated views as a result.

## Why use a static site generator?

There are many advantages to site which are built this way. Perhaps the most significant of them are:

* Security
* Scale
* Performance

Let's talk about those a little.

### Security

Since static site generators create a set of static assets which can be served from a simplified web server, or better still – directly and completely from a [content delivery network (CDN)](/products/edge/?utm_source=blog&utm_medium=about-ssgs-pnh&utm_campaign=devex), they have a remarkably good security profile. Since they are rendered in advance and ready-to-serve the infrastructure involved in serving them can be hugely simplified and have very few vectors for malicious attack. When we remove the need for servers to perform logic and work, we remove ways for bad actors to inject them with malicious code and trick them into performing nefarious actions.

And when we don't need to access databases, perform logical operations, or modify resources for every view, we can drastically simplify our hosting infrastructure. This also further improves security as there are physically fewer servers involved handling out requests. 

> There is no server more secure than the one that does not exist.

### Scale

The beauty of a site which has already been generated, is that each page is ready to serve without additional server work for each request. We don't need to add more computing power to handle spikes in traffic because we're not compiling a response for each request on demand. We did the work earlier. We were able to ensure that everything was correct, as part of our automated build process, and now we simply give the users what they asked for. 

This resembles the type of caching traditional architectures often add as a layer *in addition* to the underlying dynamic infrastructure. But allows us to forgo the complex management of what is cached and what needs updating based lots of different parameters. With a pre-built site, *everything* is able to be cached in the CDN and served directly. The architecture is optimised for scale by default.

### Performance

The time it takes for a request to be fulfilled is impacted by the distance it must travel, the number of systems it must interact with, and the work being done in each of those systems.

When we make our sites with a static site generator, visitors don't need to interact with any of the machinery involved in generating each view at all! We can deliver the result of all that prior work directly from a distributed network of caches (a CDN), making the distance that the requests travel short, and totally avoiding interacting with any of the systems.

Performance can soar. And the headaches of planning and budgeting for infrastructure needed to maintain that performance during planned (and unplanned!) traffic levels goes away.

We could go deeper into these and other benefits, but I'd recommend taking a look at our Jamstack page for more information. Or if you're interested in following along with a presentation on this, you could watch this introduction to Jamstack video.

## How to find the best static site generator

"Ok, I'm convinced. Which is the best one?"

There are a number of key considerations when looking for the best static site generator for you and your next project. Let's look at 3 of the most important ones.

### 1. What are you building?

At the heart of choosing the right tool is considering the job you need to do with it. Ensuring the the output of the site generator delivers the best possible experience for the users of your site is important to consider.

Are you building....

* **A site whose primary function is to deliver content?** If so, a tool which priorities generating pages and URLs while giving you straightforward control over exactly what is output might be your best choice. Tools like Jekyll, Hugo, Nuxt and Eleventy do this very well indeed.
* **A site with a more complex application-like function?** Some sites are less about "viewing" and more about "doing". And while most SSGs can be used as the basis for a web application, others come with more advanced, client-side features ready-to-go. GatsbyJS, NextJS and SapperJS might provide some useful capabilities.
* **A large site with many thousands of pages?** Static site generators are achieving faster and faster build speeds. But that can still take a little time. If you have very many pages to generate you'll need to consider this. Some tools have incredibly impressive generation times. Hugo is particularly impressive. As is Eleventy and the recent updates to Jekyll.

### 2. How are you building?

Following *what* you are building, perhaps the next most important consideration is *how* you are hoping to build. Ensuring an effective and efficient development experience can have a big influence on success.

What languages and frameworks suit your development team? There are SSGs build using anything from Ada to Vue. (I'm sorry, I couldn't find any based on languages beginning with the letters W-Z. If you know of one, perhaps you'd add it to [StaticGen](https://www.staticgen.com/?utm_source=blog&utm_medium=about-ssgs-pnh&utm_campaign=devex) and let me know!)

If your team specializes in .net, they can still work with static generators and benefit from the advantages described above without moving from their familiar development ecosystem. They don't need to learn a whole new language.

Then again, if they prefer JavaScript, there are many SSGs which might suit them. There are variants which employ different JavaScript frameworks such as React, Vue, Angular, or perhaps vanilla, framework-less JavaScript.

You can match the SSG to the tastes and workflows of your development team or client. And work in ways which suit you.

### 3. How complex are your templating needs?

The type of variety and complexity in the site you are creating could well influence the templating tools you'll want at your disposal.

Most SSGs give some concept of code re-use with things like partials, includes, macros and so on. But you might want to go deeper.

Frameworks such as Vue and React afford used component models which logically capture not just visual style and content, but also behaviour and functionality. So if your project is more of an application than a site (a "doing" site than a "viewing" site), then perhaps choosing an SSG based on one of those frameworks would be advantageous.

Does your team or client already have particular skills and preferences for an existing templating language? Continuing to support that capability might be to your advantage. 

Whatever tool you choose, remember that the needs of the users of the site are paramount. Find a development workflow and toolset which enables you to be productive, and to generate the sites which best serve the needs of your users.

## Where next?

You can find a long list of static site generators and learn about each one at [staticgen.com](https://staticgen.com?utm_source=blog&utm_medium=about-ssgs-pnh&utm_campaign=devex). Many of them are linked to example project templates which you can use to quickly clone and deploy a sample project to Netlify to help you start experimenting in record time. 

You can also explore a number of example templates with project scaffolds for a variety of purposes and tools at [templates.netlify.com](https://templates.netlify.com?utm_source=blog&utm_medium=about-ssgs-pnh&utm_campaign=devex). 

For more in-depth explanations about this way of building sites, and some of the tools and techniques, you might want to dip into this [extensive introduction to Jamstack](https://www.youtube.com/watch?v=A_l0qrPUJds), which explores static site generators and other tools. A [breakdown of the content with direct links](/blog/2020/03/12/learn-jamstack-with-a-free-3.5-hour-video-of-demos-and-examples/?utm_source=blog&utm_medium=about-ssgs-pnh&utm_campaign=devex) into the specific parts of this 3.5 hour video is available.

Or, if you a keen to get some expert advice on how you can plan your next big web development project with Netlify, you could [explore our whitepaper](/whitepaper/?utm_source=blog&utm_medium=about-ssgs-pnh&utm_campaign=devex) or contact our [enterprise team](/enterprise/?utm_source=blog&utm_medium=about-ssgs-pnh&utm_campaign=devex) and start the conversation about what tools and architectures you could use to ramp up your productivity and project confidence.