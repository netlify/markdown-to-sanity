---
title: Learn JAMstack with a free 3.5 hour video of demos and examples
description: >-

  Jump right in to the explanations and examples in this extended video from
  freeCodeCamp to learn about the JAMstack. Full of links and resources.
authors:
  - Phil Hawksworth
date: '2020-03-12'
topics:
  - tutorials
tags:
  - JAMstack
tweet: ''
format: blog
seo:
  metadescription: >-
    Free JAMstack video course developed by Phil Hawksworth. Check out the explanations and examples in this extended video from freeCodeCamp to learn about the JAMstack. Full of links and resources.
  metatitle: Learn JAMstack in Free 3.5 Hour Video Course - Demos & Examples
  ogimage: /img/blog/jamstack-freecodecamp-video-poster.png
---

In the 5 years since the term "[JAMstack](/jamstack)" was coined by Netlify co-founders Matt Biilmann and Chris Bach, it has grown in popularity and gained increasingly broad adoption.

Although its core principles are simple, it is also a flexible and far-reaching approach to web development so there are sometimes misunderstandings about its fundamentals.

So, with the help of freeCodeCamp, I've put together an extended video to unpack some of the core principles of JAMstack, address some of the common misconceptions, and dive into some examples.

This 3.5 hour video begins with an explanation of the concepts and benefits of the JAMstack and progresses through a variety of examples which start very simple, and gradually build in complexity. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/A_l0qrPUJds" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you're not planning on making some popcorn and settling in for the full 3.5 hours in one sitting, you might want to dive directly in to one of the sections or examples.

Here's a breakdown of the video with some resource links to help you get to grips with the JAMstack:

### Welcome message
📺 [00:00:00](https://youtu.be/A_l0qrPUJds)  

- Hello from me
- What is to come in the video


### Introduction to the JAMstack
📺 [00:01:75](https://youtu.be/A_l0qrPUJds?t=1m57s)  

- What does JAMstack stand for?
- What does JAMstack mean?
- Approaches to hosting web sites
- Evolution of hosting architectures
- Monoliths and complexity
- Static assets vs static experiences
- Comparing JAMstack to LAMP stack
- Bake, Don't fry
- The motivations for generating sites ahead of time
- Simplifying deployments
- Some JAMstack advantages
  - Security
  - Performance
  - Security
- Enablers of the architectural model
  - Static site generators
  - Tooling and automation
  - Browser capabilities
  - Services and the API economy
	

### Example 1 – Simply a static site
📺 [00:32:14 – Into the video](https://youtu.be/A_l0qrPUJds?t=32m14s)

- Markup, potentially enhanced JavaScript and calls APIs
- The simplest JAMstack site can be just an HTML file!
- Deploying to a CDN with Netlify Drop

 👉 [Example repository 1](https://findthat.at/jamstack/ex1)  – All simply static 


### Example 2 – Adding JavaScript

📺 [00:40:40 – Into the video](https://youtu.be/A_l0qrPUJds?t=40m40s)  
- Explaining rendering
  - Client-side rendering
  - Server-side rendering at build time
  - Server-side rendering at request time
- How "the stack" has moved to the browser
- Adding JavaScript to update the view client-side
- Deploying and hosting multiple files

👉 [Example repository 2](https://findthat.at/jamstack/ex2) – Changing the DOM with JavaScript


### Example 3 – Building with a static site generator
📺 [00:52:21 – Into the video](https://youtu.be/A_l0qrPUJds?t=52m21s)  

- Build automation
- What is a [static site generator](https://staticgen.com?utm_source=blog&utm_medium=fcc-examples-pnh&utm_campaign=devex)
- Choosing a static site generator
- Managing and installing dependencies
- Abstracting content from templates
- Running a local build with npm
- Running a local build server with hot-reloading
- Version control as a deployment process, using Git
- Ignoring assets with `.gitignore`
- Running a build in a continuous integration (CI/CD) environment

👉 [Example repository 3](https://findthat.at/jamstack/ex3) – Introducing a static site generator 


### Example 4 – Generating pages from a content API
📺 [00:84:09 – Into the video](https://youtu.be/A_l0qrPUJds?t=84m09s)  

- Using an external API (NewsAPI.org) as a data source
- Exploring content feeds with `curl` and `jq`
- Stubbing page templates with dummy data
- Requesting data at build time with Axios
- Populating pages with an external API at build time
- Managing API keys with environment variables
  - locally with dotenv
  - in our continuous integration and deployment environments
- Lightning the load on data sources, by pre-generating instead of per-page view

👉 [Example repository 4](https://findthat.at/jamstack/ex4) – Generating pages from a content API 


### Example 5 – Localised content and Geo-IP routing
📺 [00:113:58 – Into the video](https://youtu.be/A_l0qrPUJds?t=113m58s)  

- Architectural complexity and the benefits of JAMstack and modern CDNs
- Caching everything
- Degrees of personalization
  - Universal content
  - Localized content
  - Targeted content
  - Personalized content
- Requesting localised content from the NewsAPI.org API
- Generating pages for many locales
- Routing users to content based on their location
  - CDN GeoIP routing and configuration
  - Generating routing config automatically with a site generator
- Configuring custom 404s at the CDN
- Routing users based on their Accept-Language header

👉 [Example repository 5](https://findthat.at/jamstack/ex5) – Generating localized pages, with geo-IP routing at the CDN 


### Example 6 – Client-side rendering targeted content
📺 [00:184:08 – Into the video](https://youtu.be/A_l0qrPUJds?t=184m08s)  

- Browser APIs
- Getting user location with the browser's GeoLoaction API
- Working with HTTPS locally
  - Configuring browsersync to use HTTPS
  - [Generate a free certificate for localhost](https://letsencrypt.org/docs/certificates-for-localhost/)
  - [Trusting your local certificate](https://www.youtube.com/watch?time_continue=75&v=TGrX8XgSuZ4) 
- Progressive Enhancement
- Using the openweathermap.org API
- Client-side rendering personalised content
- Being aware of secrets in client-side API requests
- Safeguarding secrets
- Creating an API with serverless functions
- Synchronising our API and our UI throughout our deployments

👉 [Example 6 repository](https://findthat.at/jamstack/ex6) – Client-side rendering targeted API content 


### Demo – Gradual migration to the JAMstack
📺 [00:199:50 – Into the video](https://youtu.be/A_l0qrPUJds?t=199m50s)  

- Introducing JAMstack to existing sites and other infrastructure
- Subdomains
- Adding static pages
- Resource shadowing, proxying, and redirects
- Demo of adding new static views or proxying to existing resources

👉 [Proxy demo repository](https://github.com/philhawksworth/fcc-proxy-demo) –  FCC Proxy Demo




## More JAMstack resources to explore

If you are still hungry for more resources to explore about understanding and using the JAMstack, why not take a look at these:

- [Modern Web Development on the JAMstack, O'Reilly, 2019](https://findthat.at/jamstack/book) – Book on building websites with the JAMstack. Available as a free e-book.
- [JAMuary 2020](https://dev.to/t/jamuary) – A month of posts explaining different aspects and common questions relating to JAMstack, mostly by the excellent [Divya](https://twitter.com/shortdiv)
- [Netlify's JAMstack explanation](https://www.netlify.com/jamstack/?utm_source=blog&utm_medium=fcc-examples-pnh&utm_campaign=devex)
- [JAMstack comments engine](https://css-tricks.com/jamstack-comments/) – An article on CSS-Tricks and demonstration of using JAMstack resources to drive a commenting system
- [Static first, with serverless fallbacks](https://css-tricks.com/static-first-pre-generated-jamstack-sites-with-serverless-rendering-as-a-fallback/) – An article on CSS-Tricks and demo of using serverless functions to as a fallback to render views
- [StaticGen](https://staticgen.com?utm_source=blog&utm_medium=fcc-examples-pnh&utm_campaign=devex) – The most comprehensive list of static site generators. Open source.
- [HeadlessCMS](https://headlessCMS.org?utm_source=blog&utm_medium=fcc-examples-pnh&utm_campaign=devex) – The most comprehensive list of headless CMS services and products. Open source.


## JAMstack community resources

- [The JAMstack website](https://jamstack.org?utm_source=blog&utm_medium=fcc-examples-pnh&utm_campaign=devex) – Lots of info and resources
- [The JAMstack community](https://jamstack.org/community?utm_source=blog&utm_medium=fcc-examples-pnh&utm_campaign=devex) – Find a JAMstack meetup near you
- [JAMstack Conf](https://jamstackconf.com?utm_source=blogutm_medium=fcc-examples-pnh&utm_campaign=devex) – The JAMstack conference website, with links to previous videos and upcoming editions of the conference

...and if you'd like to talk to people already building projects on, and benefiting from the JAMstack, come and join the conversation in the official [JAMstack Slack](https://jamstack.org/slack).
