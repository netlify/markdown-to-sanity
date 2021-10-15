---
title: Developer Experience at Netlify
description: The Developer Experience organization at Netlify is quite unique.
  In this post, we talk through the structure of the organization, how we work,
  who we are, and some of our team strategies.
authors:
  - Sarah Drasner
date: 2021-01-06
lastmod: 2021-01-06
topics:
  - insights
tags:
  - Developer Experience
  - Integrations Engineering
  - Technical Writing
tweet: ""
format: blog
relatedposts:
  - Introducing Smarter Redirects
  - Five Reasons You Want HTTPS for Your Static Site
seo:
  ogimage: /img/blog/devex-org.jpg
  metatitle: Developer Experience at Netlify
  metadescription: The Developer Experience organization at Netlify is quite
    unique. In this post, we talk through the structure of the organization, how
    we work, who we are, and some of our team strategies.
---
I was 8 years into my career as a Software Engineer before I heard the term “Developer Advocacy.” At the time, I had never written an article, been to a conference, or participated in open source. I thought it sounded amazing. You see, I switched careers from teaching but still had a latent passion that was mainly used to mentor internally at the companies I worked at, however not as much as I would have liked. Combining teaching and development sounded like a nice way to progress beyond the coding or engineering management work I was doing at the time.

To my surprise, as soon as I started speaking, writing, and engaging in open source, people began downplaying the role in our industry. There seemed to be a false dichotomy that you were either a communicator or an engineer, often put forth by folks with a fraction of my own engineering experience.

Here were some of the issues I noted contributing to FUD (Fear, Uncertainty, and Doubt) about Developer Advocates:

* A lack of understanding of how communication plays a part in adopting and using a technology
* Companies not properly empowering these groups
* These groups, at times, moving too far away from engineering disciplines, which can give them a lack of empathy for the folks they’ve set out to engage with and represent
* **This last one is painful but I’ll just say it**: I didn’t see Developer Advocacy downplayed until underrepresented people started participating, and I believe unconscious bias played a part in why it went from “peak technical” to “non-technical”

As such, when I joined Netlify, the team and I worked to alter our composition and strategy. Our founders, Matt and Chris, went above and beyond to set the team up for success- from trusting me to build out our own unique shape and hire against it, to giving us key company OKRs (Objectives and Key Results) and allowing us to drive strategy. I can’t tell you how much of a difference this has made in the team’s progression and happiness.

**What we shifted to was truly a hybrid advocacy and engineering group designed to engage and empower users at every step of their journey.**

This is part of why, when I joined, we changed the name of the group- I joined Netlify because when I used it my productivity soared. This product embodied so much of what I valued about Developer Experience. So when we created the department, I used a name that conveys the impact that this group has. Our department is dedicated to making sure that developers and stakeholders can have a wonderful workflow with our platform. This is core to other functions at the company as well, such as Product and Engineering- the idea of making developers feel like everything is at their fingertips.

With all of Netlify keeping a keen eye on this in tandem, we aim to offer something unique to allow developers to recover time, work clearly and well, and feel delight in their everyday tools.

Developer Experience makes up roughly 10% of the company. **What follows is documentation of how the team works**, though I will note that this changes over time, as we learn and adjust, so that we can keep iterating on what makes us effective.

## Team structure

Much like a Boys II Men harmony, the Developer Experience organization at Netlify consists of 3 parts.

![Org chart showing the three groups: Integrations Engineering, Developer Experience Engineering, Documentation](/img/blog/devex-org.jpg)

### Developer Experience Engineering

Developer Experience Engineering is a hybrid role that is an intersection between more traditional advocacy of engaging in communities, writing posts, and doing open source work with engineering work.

**Everyone on the Developer Experience Engineering team regularly does engineering work, both for team initiatives and also as part of product engineering rotations.** The goal of this group is to ensure quality, end-to-end for our customers. This includes work to build integrations, prototypes, research labs, refine processes, teach developers how to use our product effectively, and also provide feedback on the product. We work closely with the Product team, mostly because I’m in love with [Laurie Voss’ dog Guff](https://twitter.com/seldo/status/1282696119504351234?s=20).

![Screenshot of Jamstack Explorers learning platform](/img/blog/explorers-screen.jpg)

Recently we built a learning platform called [Jamstack Explorers](https://explorers.netlify.com/), which was built with Next.js, Sanity.io, Cloudinary, and serverless functions. Not only was the video content developed by the team, but also every part of the functionality, and there’s more to come! This project is open source; you can [check the repo out here](https://github.com/netlify/explorers). We can blame Jason Lengstorf for the space-themed musical interlude on the readme.

**Team members also go on product engineering rotations.** Typically, they consist of the engineer leaving advocacy duties altogether and joining the Product Engineering team for a set amount of time. During this time, their reporting structure changes- aside from check-ins, they no longer report to me, they report to an engineering manager in Product. I believe this helps with a few things:

* Since Netlify’s app is built with Netlify, they get a deep understanding of the system both from the point of view of building it, but also dogfooding it.
* Empathy for the complexity of Netlify at scale as well as what work goes into powering the system
* Building relationships with folks on the Product team for when we have feedback for how our systems work

We do API proposals of what the end state of a tool or system might look like. When the company was creating the system for [Build Plugins](https://www.netlify.com/products/build/plugins/), our team created a lot of plugins- in part so we could help give feedback on the shape of the experience, for instance.

In terms of advocacy, the team is spread out to have representation across the most popular frameworks on our platform:

* Gatsby/React- [Jason Lengstorf](https://twitter.com/jlengstorf)
* Nuxt/VuePress/VitePress- [Ben Hong](https://twitter.com/bencodezen)
* Next.js/React- [Cassidy Williams](https://twitter.com/cassidoo)
* Vue CLI- [Ekene Eze](https://twitter.com/kenny_io)
* Angular/Scully- [Tara Manicsic](https://twitter.com/Tzmanics)
* Eleventy- [Phil Hawksworth](https://twitter.com/philhawksworth)
* As well as serverless functions, which we all contribute to
* ...and tons of general web

As is typical of Developer Advocacy, we also write articles, create open source repos, and speak to folks- we try to make the materials we wish we had when first understanding the thing. We want everyone to feel like they have all the tools at their fingertips to focus on what is meaningful to them, with everything else abstracted away. We also let Cassidy tweet sometimes which has its [benefits](https://twitter.com/Netlify/status/1263517446465519619?s=20) and [pitfalls](https://twitter.com/Netlify/status/1336221477729951745).

Having a representative for every different framework helps us give particular feedback for how a product works or doesn’t specifically for each vector. For instance, a product team can ask us to try out a new feature and we can identify specific points of interest for each one. Sales Engineers will at times also engage us if a client is having trouble building something in particular: they know exactly which one of us to ask to jump in.

We do some technical case studies, like how [Victoria Beckham Beauty’s tech stack is set up](https://www.netlify.com/customers/victoria-beckham-beauty/), or how to [migrate to Jamstack with proxies](https://www.netlify.com/blog/2020/09/30/from-legacy-infrastructure-to-a-lean-and-powerful-stack-with-netlify/). We also engage with partners to teach people how to pair Netlify with other services, such as [Stripe](https://www.netlify.com/blog/2020/04/13/learn-how-to-accept-money-on-jamstack-sites-in-38-minutes/), [Auth0](https://www.youtube.com/watch?v=j-vuF2PYHmU), and [Algolia](https://github.com/algolia/algoliasearch-netlify).

![Screenshot of Remotely Interesting site](/img/blog/podcast.jpg)

We also have a podcast called [Remotely Interesting](https://remotelyinteresting.transistor.fm/), where we chat about myriad things going on in the industry, from mob programming, to Edge Handlers, to rendering on the Jamstack. As the mom of one of the team members puts it: “It doesn’t matter if anyone ever listens to this because you all crack yourselves up so much.”

Folks on the team are kind-hearted and have great senses of humor, and though we work hard, we also value the human aspects of tech. After all, you’re more likely to have a good rapport with your users and learn from them if you’re open to them.

### Integrations Engineering

Following in the same vein of thinking through the experience of developers is the Integrations Engineering team. This team does 100% engineering work, no advocacy. They are in charge of packages and build plugins like Next on Netlify- a tool that provides special per-framework support that extends Netlify’s platform to work with special features of the given frameworks.

This team works very closely and partners with Product Engineering- particularly teams that work on our build system and workflow integrations. We’re extraordinarily lucky to have a team that engages in these cross-functional partnerships so well.

![Next on Netlify readme](/img/blog/non.jpg)

We just shipped [one-click support](https://www.netlify.com/blog/2020/12/07/announcing-one-click-install-next.js-build-plugin-on-netlify/) for [Next on Netlify](https://www.npmjs.com/package/next-on-netlify) with no configuration necessary, and we’re working now on Next.js 10 support, including next/image and Next.js Internationalized Routing. Coming up, we’re also partnering with the Nuxt team on some special features in upcoming releases that are really exciting!

Currently, [Lindsay Levine](https://twitter.com/levlinds) works on this team with help from [Finn Woelm](https://twitter.com/FinnWoelm), and [Mickael Hebert](https://twitter.com/ehmicky) on our Product Engineering team. We’re also [hiring a lead for this team](https://boards.greenhouse.io/netlify/jobs/4989368002) as it promises to only grow over time! If this sort of puzzle-piece glue work of empowering other developers interests you, please apply!

### Documentation

This is new! As of a month ago, the Documentation team at Netlify has moved under Developer Experience and we couldn’t be more thrilled! Docs can have a profound impact on developer experience at every stage of a developer's journey. After all, if you think of it from a user perspective- docs are literally a piece of how they are experiencing the product for the first time. Even a tutorial, demo, or open source repo will likely link back there, or vice versa. Now we can ensure this path is as smooth and seamless for the user as our platform aims to be.

![Screenshot of Docs Deploys page](/img/blog/docs.jpg)

This team consists of [Rachael Stavchansky](https://twitter.com/RMStav) focusing on workflow, [Jacklyn Carroll](https://twitter.com/Jacklyn_Lee), focusing on runtime and integrated apps, and [Kristen Lavavej](https://www.netlify.com/authors/kristen-lavavej/), focusing on something exciting we can't quite talk about yet 🤫

We’re already very proud of Netlify docs, so what’s up next is really strengthening a strength: trying to find the best processes to unlock some key docs-specific initiatives, and tying documentation to other resources so that users know everything they can if they want to deep dive into a subject. More on this to come!

## Team OKRs

Because Developer Experience is a hybrid advocacy and engineering, our Objectives and Key Results (OKRs) are:

* Qualified Signups
* Active Developers (and the depth of use of the platform)
* Engineering throughput: PRs merged, how many days an issue is open, and how many issues closed

In terms of career advancement, it doesn’t have as much to do with these OKRs as it does this formula: to get to Senior, you try to be the best YOU you can be - work to be at the height of your skillset. To get to Staff, you try to make systems and help others to be successful at the things you know well. To get to Principal, you help others to be successful where they are. I plan to open source all of our department’s career ladders in the coming year.

Raises and promotions are evaluated with a systems-thinking approach-- are you helping other people? Are you enabling them? This team really does support one another-- though that has more to do with how awesome everyone is than the career laddering. Not to be cheesy, but I feel honored to work with all of them, I couldn’t ask for a feta team.

The particular collection of individuals on this team know how to work hard/play hard. They keep me on my toes and are always growing. I don’t always get things right, but the team is so incredibly smart they guide me in iterations, and I believe we’ll continue to grow and improve in ways that help both our company and users of our platform.

- - -

Lastly, I want to mention that Developer Advocacy getting a bad rap in our industry is a bit of a code smell to me: after all, who better than a developer to understand the needs of a developer? A dichotomy between “you can communicate, you must not be an engineer” or “you are an engineer, you must not be able to communicate” is a toxic one.

This department strives, not only to connect to other devs, but also to get our hands dirty to improve the experience we’re communicating. By being transparent about our processes, I want to encourage other teams to think holistically as well. I feel incredibly fortunate to work with an amazing team where we’re empowered at the highest level to build something we believe in.