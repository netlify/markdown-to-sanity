---
title: "The Reign of Static Site Generators \U0001F451"
authors:
  - Divya Sasidharan
tweet: ''
topics:
  - insights
tags:
  - Static site generators
  - Jamstack
  - tools
format: blog
description: >-
  Here’s our take on the history of static site generators, current trends, and
  where we see them heading moving forward (spoiler alert: look for serverless
  functions and headless CMSs to push the category forward).
date: '2018-07-12'
draft: false
---

Building a project with a static frontend has never been easier. If you try searching for a static site generator—or visit [staticgen.com](https://www.staticgen.com) 🙈—you'll notice that the current landscape of static site generators is burgeoning. With multiple options to choose from, you’re spoilt for choice when it comes to choosing one that fits your use case. In the past, we have published blog posts listing the top contenders in the static site generator space; you can view the [2017 edition here](https://www.netlify.com/blog/2017/05/25/top-ten-static-site-generators-of-2017/) and the [2016 edition here](https://www.netlify.com/blog/2016/05/02/top-ten-static-website-generators/). Lists and ranking are great for keeping track of what’s hot, but it can be useful to look at the overarching landscape and development trajectory of static site generators. So here’s our take on the history of static site generators, current trends, and where we see them heading moving forward.


## The history of Static Site Generators

In the not-so-distant past, modifying content on the web required editing content directly in HTML files. Since then, Content Management Systems (CMS) emerged to alleviate the problem of relying on technical support to modify content. Content Management systems like WordPress allow non technical users to take control of the design and display of their content and manage stored files and documents via a GUI interface. CMSs leveled the playing field because non-technical users had access to managing their own content on the web. As a result, they skyrocketed in popularity and became the de facto solution for developing portals, blogs, marketing sites and the like.

However, with the rise of frontend frameworks that champion a faster paced workflow, CMSs gained notoriety for being slow and clunky to work with. A traditional CMS-based workflow required setting up a virtual environment and managing a database while frontend frameworks did away with this concept entirely. This, alongside the host of issues that CMSs brought (including security vulnerabilities and performance bottlenecks) set the stage for the ~~introduction~~ return of static sites.

Static sites are characterized as lightweight and generally consist of a frontend presentation layer that serves content without the need for a backend database layer. Though slightly akin to the static sites of yore (circa 1990ish), static sites today support more features and can be published easily and with far more frequency. This milestone is a direct result of the widespread availability of modern build processes introduced by frontend frameworks; we call this build process, `static site generation`.

## Static Site Generators; The Good Parts

Static site generators provide the functionality for decoupling the build phase of the site from the actual hosting of it — an architectural approach called the [JAMstack](https://jamstack.org/). A huge reason for their success is their ability to integrate seamlessly with modern frontend workflows. Generators like [Gatsby](https://www.gatsbyjs.org/) and [Next](https://nextjs.org/) allow you to harness the power of React and work with frontend paradigms like componentization and code splitting that simplify long term maintainability while giving you the benefit of server rendered content. These paradigms—typical to frontend development—lend themselves to making static site generators flexible. A static site generator is not tied to a specific database or a theme, and can be quickly customized to suit a project's needs.

With static site generators, content can be version controlled out of the box. With a CMS-based workflow, this was not the case. You had to parse through a binary blob in the database (with embedded styles and themes) in order to track the history of your content. Most generators take in content as markdown— content is often sequestered in its own folder called content or posts—and track them in Git. Markdown can then be transpiled into JSON blobs that a frontend system can consume. Since content can also be delivered to a static site via JSON, you also have the option of using a separate service like the WordPress REST API to retrieve content that you can edit and manage outside of the static site itself.

Another huge win for JAMstack sites built with static site generators is that issues relating to security, scaling, and performance automagically become obsolete. JAMstack sites generally depend on Content Delivery Networks (CDNs) for handling requests. The purpose of CDNs is to handle scale so you would never have to set up complex auto-scaling strategies to handle large traffic spikes. Moreover, since you are serving up static pages, they provide little avenue for scripting and database attacks.


## Trends in SSG

A large percentage of the top static site generators run on JavaScript. There's no doubt that JavaScript is eating the world. Considering how adaptable static site generators have been to embrace modern web workflows, it comes as no surprise that frontend frameworks like React and Vue are baked into so many of them.

Undoubtedly, frontend frameworks bring immense benefits to the development of static sites. One of these benefits include default support for design systems and component libraries. Typically, static sites are styled and customized via themes (think theme libraries in Hugo and Jekyll). Themes are great for styling sites out of the box without having to finagle with style sheets. However, they can be difficult to customize. Using component libraries and design systems mean that you can design your sites more modularly without having to deal with maintaining monolithic style sheets. Using generators like Gatsby (built in React) and VuePress (built in Vue) you can harness the perks of a componentized workflow while still getting the benefits of a static site.

Another trend we've noticed is that static site generators have increasingly moved toward a command line interface development workflow. CLIs are great for simplifying content creation and site configuration. With a CLI, you can easily add content, manage your development server and populate build scripts among many other things. In Hugo for instance, you create new content for your site with pre-built routes and autogenerated yaml front matter by simply running `hugo new [path] [flags]`.

This move toward CLIs has additionally led to a shift toward a zero-config workflow. Once you install the CLI globally, you are free to create files and folders (following specific naming conventions and saving them in specific paths) and can run development environments without even touching a config file. In VuePress for example, you can simply pipe some text to a `README` file (`echo 'Hello #VuePress' > README.md`) and spin up a development server using the VuePress CLI vuepress dev.


## The Future of SSGs

A common question that arises when a frontend tool, workflow or library becomes popular is, [how long will it last](https://medium.com/netlify/leveling-up-why-developers-need-to-be-able-to-identify-technologies-with-staying-power-and-how-to-9aa74878fc08)? It’s tough to say how reliable these predictions are, but based on the track record of the web—static sites were around in the early days of the web and are still heavily used—static sites are likely a mainstay for the foreseeable future.

A feature that we'll likely see moving forward is interface improvement for non-technical users. Currently, static site generators are heavily geared towards developers; "for developers by developers". Many of them utilize the command line and rely on markdown as input for content; without a user friendly GUI interface to manage content. Thankfully, we've already seen the Headless CMS movement emerge to address this with content creating and editing experiences that prioritize non-developers. Solutions like Contentful, Prismic and Forestry provide proprietary solutions while Netlify CMS and Strapi are fully open soure. With these solutions, a content creator doesn't need to be privy to the intricacies of the build and can focus on creating content.

Another feature that will likely grow over the next few years is the integration of serverless functions in static site generators. You can easily enrich your JAMstack site with dynamic functionality by including third party services and APIs. By default, a static site—being static—doesn't allow for this functionality. Relying on third party services to handle this functionality may add unnecessary load that will slow down the performance of your site and expose you to potential security exploits.

A good alternative that has been slowly gaining momentum are serverless functions. Serverless architectures encourage business-logic driven development, without making premature optimizations. As an architecture that scales well and is still easy to maintain, serverless functions fit in with the paradigm of lightweight aesthetic of static sites. Though serverless functions are still in their infancy, you can start using serverless functions in your static sites today using [Netlify Functions](https://www.netlify.com/features#functions), which lets you deploy Lambda functions without an AWS account, and with function management handled directly within Netlify.


## Tying it all together

Thanks to the growing ecosystem of headless CMS-es and build automation, Static Site Generators are here to stay. As the solution that allows you to get a website up and running fast, while leaning on ever-capable frontend frameworks like React and Vue, it is no wonder that Static Site Generators have seen a resurgence in popularity over the last couple of years. Creating (and deploying) a website has never felt easier and it's hard not to fall in love with the strong, fast growing ecosystem of Static Site Generators.

One of the easiest ways to explore the SSG landscape is to simply spin up a repository that includes the code for a pre-built template. To get started and give Static Site Generators a spin, check out [templates.netlify.com](https://templates.netlify.com) to choose a template that uses Hugo, Gatsby, or Eleventy, or you can use the handy little button below to deploy [a site](https://templates.netlify.com/template/hugo-starter-blog-theme-kaldi/) that’s built with Hugo and Netlify CMS. If you get stuck, or just want to share what you’re building, give us a shout on [Twitter](https://twitter.com/netlify) or in [Gitter](https://gitter.im/netlify/community). We’ll be listening 👂.


[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/kaldi-hugo-cms-template&stack=cms)
