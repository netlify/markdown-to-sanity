---
title: "How Jamstack Explorers Was Made: Next.js, Netlify, Sanity.io,
  Cloundinary, Serverless Functions and More!"
description: The DX team at Netlify recently created a free Jamstack learning
  platform, this post discusses some of the awesome technologies involved.
authors:
  - Tara Z. Manicsic
date: 2020-12-16
lastmod: 2020-12-15
topics:
  - tools
tags:
  - Jamstack Explorers
tweet: ""
format: blog
seo:
  metadescription: The DX team at Netlify recently created a free Jamstack
    learning platform, this post discusses some of the awesome technologies
    involved.
  metatitle: "How Jamstack Explorers Was Made: Next.js, Netlify, Sanity.io,
    Cloundinary, Serverless Functions and More!"
---
Have you heard? The DX team at Netlify has made a **free**, [open-source](https://github.com/netlify/explorers) learning platform just for you (plus everyone else). May I introduce you to [Jamstack Explorers](https://explorers.netlify.com/?utm_source=blog&utm_medium=explorers-innards-tzm&utm_campaign=devex)! So far, we have missions that are video-based to teach you the Jamstack and surrounding technologies. We plan to continually add new content from our team and the whole Jamstack ecosystem. When you finish 3 missions you even get a certificate! We also help you keep track of your missions' progress if you choose to sign in.

<iframe width="560" height="315" src="https://www.youtube.com/embed/PPtmowJoe3s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Our team has experience and expertise in many different technologies from Angular to [Yo](https://www.npmjs.com/package/yo), and from front-end to infrastructure. So, needless to say, we had a lot of opinions. Nonetheless, we had a great time learning and building together. I thought I'd share the innards (aka the technologies) of the project, a little background on why we chose each tool, and some blog posts from the team digging into some of those pieces. Oh, and if at some points it sounds like I'm bragging about my team, just know I probably am. [I love my team](https://www.netlify.com/careers/?utm_source=blog&utm_medium=explorers-innards-tzm&utm_campaign=devex). With that out of the way, let's jump in.

> 📝 As we write more blog posts on the technologies we use I'll add them here. So, be sure to check back to see the future magic happen ;).

## Planning & Organization

Every project needs a jumping off point, especially when you have to coordinate with many team members. Then, once a project is in motion, there are a lot of moving parts that the team needs to keep up-to-date on. Here are some tools we used to cover these needs.

### [Notion](https://www.notion.so/)

Notion is a document-based collaboration tool. We use it through-out Netlify and it's a great place for me to keep updates on the high-level status of the project as well as its resources. I was tech lead on the project after an awesome jump off with [Cassidy Williams](https://www.netlify.com/authors/cassidy-williams/?utm_source=blog&utm_medium=explorers-innards-tzm&utm_campaign=devex) as tech lead.

![a screenshot of one of our notion docs](/img/blog/screen-shot-2020-12-14-at-10.57.36-am.png)

We did a lot of [mob and pair programming](https://remotelyinteresting.transistor.fm/episodes/008-pandemic-pair-and-mob-programming) on this project and we would record the sessions, so I would keep those recordings along with other handy resources in Notion. Since we could all add to documents, it was a great place to start meeting notes, then follow-up asynchronously with thoughts on agenda items we didn't have enough time to cover. I also tried to keep GitHub issue information but it was too hard to keep up, which brings us to the next tool.

### [GitHub](https://github.com/)

Some people may see GitHub as a given addition to a project as a place to store code and help teams collaborate on that code. I've used it on a lot of projects, but I still could have utilized it better. GitHub provides a lot of tools to aid in remote teamwork:

* [Draft pull requests (PRs)](https://github.blog/2019-02-14-introducing-draft-pull-requests/) so your team knows you've started on an issue even if you're not ready for a review
* The option for [suggested feedback](https://docs.github.com/en/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request) in reviews so you can incorporate teammate's changes to your PRs with a click of a button
* [Custom issue templates](https://docs.github.com/en/free-pro-team@latest/github/building-a-strong-community/configuring-issue-templates-for-your-repository#creating-issue-templates) to help create issues that have all the information, tags, and default reviewers
* Plus integrations like the [Slack + GitHub](https://slack.github.com/) pairing so you can see what PRs have been submitted and need reviewed

This is just naming a few of the aspects we used with GitHub. How could I mess up with all this help, you ask? I'm just that good (bad?). Where it broke down was setting timely, consistent milestones based on functionality instead of time. Although we were really lucky because we brought [Ben Hong](https://twitter.com/bencodezen) on to the team who eats issues for breakfast, lunch, but burgers for dinner, we didn't have a good way to organize and keep momentum for closing the rest of the issues. For v2 we're [setting up milestones](https://github.com/netlify/explorers/milestones) for 2-week sprints based on core pieces, like focusing on the mission's data structure and media or full focus on design and layout.

### [Whimsical](https://whimsical.com/)

Not only did we need to collaborate on documents and code, but also on how to visualize what our data and user paths would be. For this we turned to [Whimisical](https://whimsical.com/), a visual workplace, or visual drawing board. It's basically an online blank canvas where you and your team can all move around sticky notes, flowcharts, wireframes etc.

![a screenshot of our whimsical board](/img/blog/screen-shot-2020-12-14-at-9.42.44-pm.png)

After getting our giggles out by placing all kinds of memes and silly drawings, we were able to visually walk-through some mindmaps. That put us all on the same page to allow us to all start creating data schemas and user path flows separately but all on, literally, the same page. This was a great reference for us to go back to when we started coding it all out. For future iterations, we plan to go back to our Whimsical page to update and expand our initial musings and keep it as a source of truth for the project.

## Framework & JavaScript Libraries

Now that we had all the structure in place for the project, it was time to start building. We knew we were going to code in JavaScript...that's about all we were sure of. Lucky you, as the reader, get to find out what we chose in just a few short seconds. This decision took us much longer than that.

### [Next.js](https://github.com/vercel/next.js/)

Next.js is an open-source React framework and the one we all decided to use for Jamstack Explorers. Getting this team to choose one framework was probably the longest conversation. Mostly because we all have experience with a lot of frameworks and have personal preferences. Plus we are all way too polite, well, except for [Phil](https://twitter.com/philhawksworth). The majority of the team had experience with React, plus we had pros like [Cassidy Williams](https://www.netlify.com/authors/cassidy-williams/?utm_source=blog&utm_medium=explorers-innards-tzm&utm_campaign=devex), [Jason Lengstorf](https://www.netlify.com/authors/jason-lengstorf/?utm_source=blog&utm_medium=explorers-innards-tzm&utm_campaign=devex), and [Lindsay Levine](https://twitter.com/lindsay_levine?lang=en). In the end, it made the most sense to go with a React base. On top of that, the team had been doing some awesome work on [Next On Netlify](https://www.netlify.com/with/nextjs/?utm_source=blog&utm_medium=explorers-innards-tzm&utm_campaign=devex). Guess what we're going to talk about next (pun intended).

> 📓 Next.js Resources
>
> * For an amazing slew of Next.js info, check out [Cassidy's blogvent series](https://www.netlify.com/tags/blogvent/?utm_source=blog&utm_medium=explorers-innards-tzm&utm_campaign=devex).

### [Next on Netlify](https://github.com/netlify/next-on-netlify)

The timing was pretty great for us to [dogfood](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) this project. Next on Netlify is an [open-source](https://github.com/netlify/next-on-netlify) project that helps easily deploy Next.js apps while taking advantage of serverless functions, build plugins, preview mode, form handling, authorization, and more. It was built by the talented [Finn Woelm](https://github.com/FinnWoelm) and adopted by our team, lead by the brilliant Lindsay Levine. One of the core tenets of the DX team is being able to walk in the shoes of the developers using our tools (thankfully, I have very small feet). Building Jamstack Explorers with Next on Netlify let us do just that.

> 📓 Next On Netlify Resources
>
> * [Announcing one-click install Next.js Build Plugin on Netlify](https://www.netlify.com/blog/2020/12/07/announcing-one-click-install-next.js-build-plugin-on-netlify/?utm_source=blog&utm_medium=explorers-innards-tzm&utm_campaign=devex)
> * [How to Deploy Next.js Sites to Netlify](https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/?utm_source=blog&utm_medium=explorers-innards-tzm&utm_campaign=devex)

## Data and Content Management

Yes, it turns out we used data. Go figure. We needed a place to store data and media as well as fetch it and manipulate it. Most of these decisions were based on technologies that one or many members were familiar with. We were actually very fortunate in this sense because our jobs give us the opportunity to try new technology and write or speak about it. There are so many great tools for data and content management in the Jamstack ecosystem that there is no "right" answer, but here are the ones we picked for this project.

### [Sanity.io](https://www.sanity.io/)

We needed a [headless CMS](https://jamstack.org/glossary/headless-technology/) for a smooth process for content contributors to add their material, but it needed to be unopinionated about what we do with that data. There are a lot of great options out there, we decided on Sanity.io because it was built in React, and a few team members had experience with the CMS. I, personally, had used other headless CMSes and found manipulating the UI and creating data schemas in Sanity.io to be pretty straight-forward. Getting the team acquainted with Sanity.io was actually one of our first "Team [Learn with Jason](https://www.learnwithjason.dev/)"s of the project. We were very lucky to have such special treatment, but now we're indebted like 500 tacos and 30 pounds of cheese to Jason. He's so expensive.

> 📓 Sanity.io Resources
>
> * [How To Use MDX Stored In Sanity In A Next.js Website](https://www.smashingmagazine.com/2020/12/mdx-stored-sanity-next-js-website/)

### Hasura

There was a lot of data we needed to store and grab to populate the user information to help track mission progress and completion. Hasura is a fast [GraphQL](https://graphql.org/) service that works with serverless functions. A few of our team members had [already used Hasura in other projects](https://www.netlify.com/blog/2020/10/26/graphql-with-hasura-and-nuxt/?utm_source=twitter&utm_medium=hasura-sd&utm_campaign=devex?utm_source=blog&utm_medium=explorers-innards-tzm&utm_campaign=devex) and were happy with it. Using Hasura we were able to store a lot of information about a user's video consumption without tying to any actual information from the user ID they used to log in. This meant we just had Jamstack Explorers data and didn't have to worry about any sensitive information. We're going to use this data in more fun ways in the future, stay tuned!

### [Cloudinary](https://cloudinary.com/)

We knew we wanted to have our first missions be video-based. We had all used Cloudinary before for media hosting and [automating custom images](https://cloudinary.com/cookbook/tag/text). Little did we know just how much Cloudinary magic [Jason](https://www.netlify.com/authors/jason-lengstorf/?utm_source=blog&utm_medium=explorers-innards-tzm&utm_campaign=devex) had up his sleeve.

Using Cloudinary, Jason was able to take the awesome bumper videos (intro and outro videos for each stage video made by the talented [Adam Hald](https://www.linkedin.com/in/adam-hald-7056164/?originalSubdomain=dk)) and dynamically stitch them to the stage videos we had stored in Cloudinary. We were also able to generate a title card for each video. This way every video had the order of:

* intro bumper video
* title card
* stage's main content video
* transitional exit bumper video

All these pieces were seamlessly stitched together automatically which also gives us a great standardization for content. Who knew Cloudinary could do so much awesomeness? Jason, that's who, and now me AND you!

> 📓 Cloudinary Resources
>
> * [Cloudinary Tricks for Video](https://css-tricks.com/cloudinary-tricks-for-video/)

## Cool Tech!

As the project went on we used more technologies to carry out different functionalities and fill in the gaps. Here are a few that stuck out to us.

### Serverless Functions

With the Jamstack architecture, we found ourselves using serverless functions for authorization and to get and receive data dynamically. Serverless functions are single-purpose functions that are invoked online and are hosted and maintained by an infrastructure provider. [Netlify Functions](https://www.netlify.com/products/functions/?utm_source=blog&utm_medium=explorers-innards-tzm&utm_campaign=devex) are serverless functions that are built into every Netlify project so there's no need for setup or configuring servers. Jamstack Explorers used serverless functions for:

* authorization using [Netlify Identity](https://docs.netlify.com/visitor-access/identity/?utm_source=blog&utm_medium=explorers-innards-tzm&utm_campaign=devex)
* to power the API routes in Next.js
* bring in user data to user dashboard from Hasura
* send video information to Hasura

We know we will be using Netlify functions a lot more in the future and were glad that getting started with them was pretty painless.

### SVG all the things!

SVG is an image format for vector graphics but still has elements that we're used to seeing like text, links, and more. SVGs have small file sizes that compress and scale well. We knew we wanted to use SVGs throughout the project and we just happened to have a super talented SVG pro *leading* our team. Thankfully, [Sarah Drasner](https://www.netlify.com/authors/sarah-drasner/?utm_source=twitter&utm_medium=explorers-innards-tzm&utm_campaign=devex) lent us her skilled, SVG superpowers not only with the graphics but also with creating UI components in SVG.

> 📓 SVG Resources
>
> * [Creating UI Components in SVG](https://css-tricks.com/creating-ui-components-in-svg/)

## That's (Not) a Wrap

The Jamstack Explorers project will be constantly growing and evolving and so will this blog post! We hope you continue to check in here and keep learning about the Jamstack. Happy Coding 👩🏻‍💻!
