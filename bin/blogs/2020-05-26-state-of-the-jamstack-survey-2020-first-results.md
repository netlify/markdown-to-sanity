---
title: "State of the Jamstack Survey 2020: First results"
description: Netlify ran a survey of thousands of Jamstack community members to
  give us a sense of ourselves with real data. Get the first results of our
  analysis!
authors:
  - Laurie Voss
date: 2020-05-27T05:30:00.000Z
lastmod: 2020-05-26
topics:
  - insights
tags:
  - survey
  - Data
  - Jamstack
  - Community
tweet: ""
format: blog
relatedposts:
  - State of the JAMstack survey
seo:
  metatitle: "State of the Jamstack Survey 2020: Get First Results"
  metadescription: Netlify ran a survey of thousands of Jamstack community members
    to give us a sense of ourselves with real data. Get the first results of our
    analysis!
  ogimage: /v3/img/blog/jamstack-survey-results.png
---
## A maturing architecture seeing rapid expansion

At the beginning of 2020, we ran a survey of the Jamstack community. We had two big reasons to do so. At Netlify, we sit at the center of the [Jamstack community](https://www.netlify.com/jamstack/), and want to understand our community better so we can make better products for them. We also want to help the community understand themselves better: developers often work in a vacuum when it comes to their sense of what the broader community is doing. Survey data can give a sense of best practices and help developers work “with the grain” of their tools.

## What is the Jamstack?

Coined in 2015, Jamstack is a term for a common web application architecture in which a web app consists primarily of pre-rendered, static HTML that relies on client-side APIs and JavaScript to provide interactive elements. To get a better picture of the full landscape we surveyed people who build websites in general, regardless of whether they build Jamstack sites, but our analysis focuses on active Jamstack developers.

The survey ran from March 16th to April 19th and received 3,172 responses. See our [methodology document](https://docs.google.com/document/d/1BlolV-IMwUy0VtdeC7GnHfGmh4KKpxDyLzdriYwhm-0) for a detailed breakdown of the demographics and accuracy of the survey sample and results. For a high level summary you can also see [today's announcement of the State of the Jamstack survey results](https://www.netlify.com/press/modern-websites-are-built-on-the-jamstack-architecture-due-to-performance-reliability-and-speed-of-developer-workflows-according-to-industry-survey-by-netlify/).

## Jamstack is a maturing, rapidly expanding architecture

![Bar chart showing how many years of experience relevant to their current job respondents had. 16% had 0-2, 20% had 2-4, 15% had 4-6, 9% had 6-8, the remainder had more than 8.](/v3/img/blog/experience.png)

Our first finding is that Jamstack is no longer the new kid on the block. The demographics of our respondents were widely distributed across every category. The community skews towards newer developers, with 36% of respondents reporting 4 years or less of experience (different from their total experience; see Findings in Depth). But it’s not just new devs: respondents reported an average of 8 years of experience at their current role, and **38% of Jamstack survey respondents reported more than 8 years of experience** relevant to their current job.

We also asked our community to list the types of software they make, and **a surprisingly high 35% of Jamstack developers say they build enterprise software**. Other major categories included consumer software, the largest category at 45%, as well as internal tooling at 36% and personal blogs/portfolio sites at 42%. Because respondents could list multiple categories, these add up to more than 100%.

Another indicator of Jamstack’s mainstream adoption was how popular it was outside of the tech industry. Fully **62% of Jamstack developers say they don’t work at a “pure tech” company**. Of course, this means tech was still the biggest industry at 38% of respondents. Outside of pure tech, the biggest industries for Jamstack adoption in our survey were Advertising & Marketing (21%), Education (14%), Media and Publishing (14%), Finance (13%) and Business Support and Logistics (13%). These mature, established industries are signs that Jamstack has moved past early adopters into mainstream adoption. Our survey also saw substantial adoption in over a dozen other industries including healthcare, retail, and telecoms as well as government and non-profit sectors.

## Jamstack is seeing a wave of mainstream adoption

![Bar chart showing how long respondents have been working on Jamstack sites. 22% said 0-6 months, 22% said 6-12 months, 27% said 1-2 years, 12% said 2-3 years, the remainder said more than 3 years.](/v3/img/blog/jamstack-experience.png)

While our survey showed substantial adoption by mature developers in slower-moving industry sectors, it’s also clear that this wave of adoption is far from over. When asked how long they had been working on sites with the Jamstack, **71% of respondents have been using the Jamstack architecture for 2 years or less**. This is four times larger than the number of respondents who have been developers for that time (16%), one of several indications that the Jamstack community is seeing experienced developers pouring into the community.

Jamstack developers in our survey were also well distributed across other categories of web development. Unsurprisingly, the biggest category of web apps built was fully static sites, at 84% of respondents, but 76% report building single page web apps using the Jamstack architecture, and 57% even report building fully dynamic sites in the Jamstack. Mobile-first development continues to be a bedrock principle of web development, with **95% of respondents saying mobile devices are a somewhat or very important target for their work**.

## It’s not (just) about scale: Jamstack developers value workflow

![Bar char showing answers to "how many users were the sites you built intended to serve". Percentages who said some or most of the sites they built were for these sizes: tens of users 63%, hundreds of users 78%, thousands of users 83%, hundreds of thousands of users 58%, millions of users 32%.](/v3/img/blog/size-of-audiences-simplified.png)

One of our most surprising results came from asking developers to think about sites they had worked on in the last 12 months and indicate how many users they expected for those sites. Since the Jamstack architecture is typically served by providers like Netlify who automatically distribute sites on fast, global content-delivery networks (CDNs), we expected there to be a bias towards sites with huge audiences where Netlify’s huge scale and reliability were most valuable. **32% of respondents said they built Jamstack sites intended for millions of users**.

But the biggest concentration of sites, 83%, was at an audience size of thousands of users, with large numbers saying some of the sites they built were for merely tens of users at 63% (because respondents built multiple websites in this period, these percentages overlap to over 100%). This result indicates that Jamstack is more than a scaling strategy: **the simplicity and speed of the Jamstack workflow bring developers to this architecture even before they need to scale**.

![Bar chart showing rankings of answers to "what is the biggest priority for you when making a website?" In order: performance, uptime, speed of development, security, compliance, and avoiding vendor lock-in.](/v3/img/blog/priorities-large.png)

This conclusion was reinforced when we asked developers about their priorities. Performance and uptime naturally remained the highest priorities, but the **speed of development was a priority** over concerns like security and compliance. This was unscientifically but entertainingly illustrated by generating a word cloud of developers’ feedback on what they enjoyed about working on the Jamstack: speed, simplicity, and “really just love using” all featured prominently.

![A decorative word cloud of text in response to the question "what's your favorite thing about the Jamstack?" Largest words include: speed, easy, fast, simple, static, tools, web, security, deploy, "really just love using".](/v3/img/blog/word-cloud.png)

## Best practices

We also asked our respondents about their technical preferences on programming languages, hosting solutions, serverless providers, web frameworks and more and we will be sharing these and all our other findings in depth in the next few weeks. Our headline result is about web frameworks: we asked respondents how often they use various web frameworks, and also asked them whether they want to use those frameworks more or less.

![A bubble chart showing web frameworks. On the horizontal axis, total respondents reporting usage, they are ordered as: React (63%), then jQuery, express, Gatsby, Vue, Next, Nuxt, AngularJS, Angular 2+, Huge, Svelte 11ty (11%). On the vertical axis, satisfaction score, they are ordered: 11ty, Nuxt, Svelte, Next, Vue, Gatsby, React, Express, Hugo, Angular 2+, jQuery, AngularJS.](/v3/img/blog/frameworks.png)

Comparing the “more” and “less” results we created a ratio we call the “satisfaction score”. In this chart, frameworks to the right are used more often, while frameworks further up have a greater satisfaction score. **React continues to dominate the web** and also scores highly on satisfaction. Relative newcomer 11ty had an amazing satisfaction score, while people who want to use jQuery less often far outnumbered people who want to use it more, even though its overall usage is high.

## More to come

These first results are just scratching the surface of all the data we gathered in our survey, so look forward to more details and deeper dives in the coming weeks, including answers to questions like:

* Which CMS software is preferred by Jamstack developers?
* Which third party APIs do we use most?
* What programming languages are we using (other than JavaScript)?
* What does the future look like for GraphQL?

The overall picture of the Jamstack is that of a thriving community that is growing fast as a wave of mainstream adoption continues, driven by fantastic scaling, high performance, and workflows and tooling that developers love.
