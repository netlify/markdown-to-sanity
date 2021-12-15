---
title: 'The Road To Community: Part Two — Distill'
description: >-
  Part two of our series on building a world class community for Netlify. How do
  you pick the right forum software? Here's how we chose.
authors:
  - Perry Eising
date: '2019-02-15'
topics:
  - news
tags:
  - Community
  - Support
tweet: ''
format: blog
---
Welcome to the second part of my series on planning, implementing, and managing a community forum for Netlify! In the [previous installment](https://www.netlify.com/blog/2018/10/19/the-road-to-community-part-one--define/), I took the time to outline our approach and mentality when it comes to making decisions, as well as giving some insight into what building a community means to us here at Netlify.

With that established, its time to get our hands dirty with the actual nuts and bolts of picking an community platform. We took a substantial amount of time for this work — several weeks of evaluations were necessary to drill down to the final contenders. In this post, I’ll share our decision-making process. If you find this process outline helpful, let us know!

## Step 1:  Who are we? What do we want?

Picking a Community platform that meets our needs is a process we are approaching with a lot of care. What people love about Netlify is its simplicity and its ease of use, and we want to have the same experience for our Community. We want it to provide value both for our customers, and for us.

These are great ambitions — but, at the same time, they don’t provide much guidance because they are so airy. We knew we needed some more concrete cornerstones to help structure this process. 🤔 

![Aerial view of freeways intersecting](/v3/img/blog/denys-nevozhai-100695-unsplash.jpg)

Photo by [Denys Nevozhai on Unsplash](https://unsplash.com/photos/7nrsVjvALnA)

I began by looking at our existing software architecture:

* What is the relationship between our existing helpdesk software and our community?
* What kind of integrations/capabilities do we need to connect the two?
* Are there constraints here we need to be aware of?
* What are some very key technical capabilities we need in a in a community software that effectively rule out some options?

### Hitting the runway – gathering requirements across teams

Taking it a step further, I asked all the members of the support team to work with me to create a list of technical requirements. We got quite granular in this process. The goal was to think ahead with regards to: setup, moderation, data, analytics, maintenance, and so on. 

Here is an overview of the criteria we compiled and used to evaluate platforms later on:

### Support Team requirements:

* Generally stable and reliable and secure; short perceptible load time
* Accessible from any modern, released, browser, including mobile 
* Searchable, ideally google indexed, tagging
* Usable integrations or API for creating integrations, such as:
  * Creation of helpdesk case from community thread
  * Ability to programmatically process postings in real-time
* Ability to leave private (admin-only-access) notes in a thread
* Single sign-on (SSO) with Netlify’s user authentication
* Effective banning toolkit,  ability to edit posts (e.g. to remove a password) 
* Reporting, including ability to:
  * Programmatically gather statistics on things like:
    * Top users
    * Regional engagement
    * User cohort engagement
  * Determine most popular posts/categories/question types
* Support for user “levels”: Netlify employee, moderator, everyone else
* Low barrier to participation — ideally a user would not have to undergo a lengthy process to create an account and start contributing

## Step 2: Gaining Consensus

Once our team had generated a comprehensive list of requirements, we shared this list with teams that Community would shake hands with. In our case, the list went to the CTO for a sign-off on implementation, to design for insight into branding/UI requirements, to data science for analytics requirements, and to to marketing and developer relations for their take on things.

Each team shared thoughts, input, and concerns on the list of requirements. This varied perspective allowed us to identify blind spots. (For example, there were aspects that were relevant to data science that we hadn’t considered.) After this exercise, we had buy-in from each team involved in the process, and a clear understanding of the scope of work. 

## Step 3: Research

The next step involved spending time researching which community software platforms met our requirements.  I gathered the data in a giant spreadsheet, and began evaluating. (I began taking a lot of sales calls during this time.…)

![Large bright question mark at the end of a dark hallway](/v3/img/blog/emily-morter-188019-unsplash.jpg)

Photo by [Emily Morter on Unsplash](https://unsplash.com/photos/8xAA0f9yQnE)

Because we had such a solid and thorough list of technical requirements, I was able to rule out platforms that didn’t meet our needs fairly quickly, needing no more than a few days to drill down to three platforms from fifteen potential options.

## Step 4: Vetting contenders

The next step was the trickiest of all of the above. How do you compare similar yet different software platforms? Is a slightly confusing UI with one platform worth _more_ or _less_ than a couple of extra settings in the moderation toolkit with another?

Nothing beats a hands-on experience to really get a feel for things, so I worked with all three final vendors to set up demos that we could evaluate. 

We split the work, with each person testing their designated area.

Together, we compiled a close-to-life picture of what running a community on each of these platforms would look like. This process was slow at times, and really the only place where things felt bottlenecked. We resolved these bottlenecks by returning to our clearly defined goals for the Community again and again. I cannot stress how valuable it was to have done such a thorough job gathering requirements and defining our goals.

## It’s a winner! 🎉

After this lengthy process, which provided an invaluable learning experience for everyone involved, we feel confident and pleased to announce we will be partnering with [Discourse](https://www.discourse.org/) as our Community platform. At the end of the day, the decision was clear – Discourse demonstrated a fantastic new user experience, a powerful, well documented API, SSO compatibility, a complete and granular dashboard, a highly customizable UI, as well as many more of our absolute must-haves. 

We are a giant leap closer to bringing Community to life. As we work on our implementation in close collaboration with Discourse, please get in touch if you are interested in a sneak peek invite!

In our next installment, I will explore how we approached thinking about content and information architecture for our Community, and how we teased out common-sense categories for both technical and non-technical engagement on the platform. See you soon! If you have thoughts or feedback, comment below!
