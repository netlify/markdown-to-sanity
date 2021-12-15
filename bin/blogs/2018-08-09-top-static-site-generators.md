---
title: 10 static site generators and popular uses for them in 2018
description: >-
  An exploration of some of popular static site generators and a little help
  with finding the right tool to use on your next project.
authors:
  - Divya Sasidharan
date: '2018-08-09'
topics:
  - tutorials
tags:
  - Jamstack
  - Static site generators
  - Tools
tweet: >-
  An exploration of some of popular static site generators and a little help
  with finding the right tool to use on your next project.
format: blog
---
With the rise of frontend frameworks, and serverless architectures, static sites have steadily gained popularity over the last couple of years. Static sites are often characterized as being lightweight and consist of a frontend view layer that serves content without the need for a backend database layer. Sites built in this manner enable the developer to build quickly without the overhead of having to build and maintain databases and servers to manage their data.

Today, static site generators are aplenty and there is a wealth of knowledge and advice regarding the best static site generator to use and why. Undoubtedly, no two static site generators are built quite the same. [In](https://www.netlify.com/blog/2016/05/02/top-ten-static-website-generators/) [previous](https://www.netlify.com/blog/2017/05/25/top-ten-static-site-generators-of-2017/) [posts](https://www.netlify.com/blog/2018/07/12/the-reign-of-static-site-generators-/), we’ve reviewed the top static site generators based on rankings done on [staticgen.com](https://www.staticgen.com/). This year, in addition to the [list according to GitHub popularity](/blog/2018/08/24/the-top-10-ssgs-of-2018-according-to-staticgen-and-github/), we’ve decided to also offer a list of static site generators organized by category, in order to give you some help selecting a good static site generator based on your use case. 

## Great for Server Rendered “Universal” Web Applications

The trend in recent years has been isomorphic-rendered applications, or applications that have logic allowing it to render both on the server and the client. There are pros and cons to consider when deciding how and when to render your content. [Universal (or isomorphic applications](https://cdb.reacttraining.com/universal-javascript-4761051b7ae9)) aim to give the developer full autonomy when it comes to this decision by providing the bandwidth for all options — client rendered content, server rendered content, and pre-rendered content. This feature makes isomorphic applications well suited to function as static site generators since they have the functionality for rendering content ahead of time. The pre-rendered content can then be subsequently served via content delivery network (CDN) thereby [improving the speed, cost and performance of your application](https://www.netlify.com/blog/2017/06/06/jamstack-vs-isomorphic-server-side-rendering/). If you find yourself looking for a static site generator that is optimized for universal web apps and server side rendering, here are a few to check out: 

### Nuxt

Largely inspired by Next, the popular framework for static and server‑rendered applications built in React, Nuxt is a high level framework for developing universal JavaScript applications in Vue. With Nuxt, developers can choose to spin up a starter application using the  `create-nuxt-app` cli, pick a template from a list of starter templates or start a new Nuxt application from scratch. While the documentation is pretty comprehensive in terms of getting started, the general pattern in Nuxt is one that favors convention over configuration. By following the convention of how things are built in Nuxt (i.e. which files go where), Nuxt just works**™** without the need for additional configuration. If you do decide to customize Nuxt to accommodate a different use case like a blog, there is additional overhead to set up routing and consuming markdown as content.

You can get your own site, built with Nuxt and deployed to Netlify, all ready to experiment with and explore by clicking the button below. Give it a try!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/shortdiv/nuxt-blog-template)

### Next

Next is a lightweight framework for creating static and server rendered applications in React. Considering that Next is deeply embedded in the React ecosystem, it provides a familiar, albeit opinionated, structure to building applications in React. A standout feature in Next that sets it apart from a traditional “Create React App” is that by default, Next handles server-side rendering for you. This makes spinning up a static site in Next a breeze, since you don’t have to fiddle with configurations to reap the benefits of a more traditional static site generator. Similar to other zero configuration generators, Next follows convention over configuration and encourages a specific workflow in order to get up and running fast. For instance, components placed in a `pages` directory, automagically get server rendered by the default config. Some additional features that Next provides include automatic code splitting, client side routing, and a webpack-based workflow for managing development and production environments. 

Try out your own Next site by clicking the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/shortdiv/next-blog-template)

### Gatsby

Created by Kyle Matthews, Gatsby is a React-based static site generators and one of the first SSGs to combine the best of frontend development techniques like offline-support, and code splitting with the power of dynamic data integration. Using Gatsby, you have access to the scalability of static file generation via a CDN and the dynamism of a frontend application. Gatsby boasts a [rich and growing ecosystem of data plugins](https://www.gatsbyjs.org/docs/plugins/), with which seamlessly integrates data from external APIs it into your application. A notable feature in Gatsby which sets it apart from other static site generators and is the reason for it being blazing fast, is its extensive use of GraphQL for data ingestion. Consuming data via GraphQL is fast because it ensures that data transformations can be done at *build-time* thereby removing the complexity of performing data transforms in the frontend and ensuring that data is served in the exact format needed by the view. 

Want to try it out? Deploy and experiment with your own Gatsby site by clicking this button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

### React Static

React Static is a lightweight framework for building progressive applications in React that aims to deliver a satisfying experience for users and developers alike. Though React Static follows in the trend of other React-based isomorphic apps like Gatsby and Next, it is relatively un-opinionated when it comes to managing and piping your data into your application. There is a clear and deliberate separation of concerns between data pipelining and react templating. In React Static, you are encouraged to define all the data and routes that your site will use up front. This way, you can lean on React Static to handle the speed optimizations of serving your content just in time and without any additional latency that often comes with a full site refresh when navigating between pages. The additional nice thing about building in React Static is that it isn’t opinionated and so building an app in React Static feels like writing just JavaScript and React. 

Once again, you can try it out with by just clicking the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/shortdiv/react-static-blog-template)

## Great for Blogging

Blogs are one of the longstanding forms of content publishing on the web. For the longest time, blogs have been deeply coupled with CMS based publishing platforms like WordPress, Joomla and Moveable Type. While these platforms are great for giving non technical users access to managing their own content, they tend to be inflexible and only integrate with specific kinds of databases, plugins and third party applications. Static site generators are therefore more flexible alternatives that enable users to customize their blogs to suit their needs as needed without being tied down to a specific solution. Here are a few of the best static site generators out there today that can be used for all sorts of things, but are a great choice for blogging: 

### Jekyll

Ask a developer for an example of a static site generator and chances are, they’ll mention Jekyll. Jekyll is one of the longest running, popular static site generators around, having launched in 2013. Despite its years, Jekyll has managed to successfully maintain its position as a leader among static site generators. It even boasts a large, active and supportive community as well as a thriving ecosystem that includes a long list of active plugins and themes. 

With its rich plugins and themes ecosystem, Jekyll is a familiar, albeit lightweight alternative to content management behemoths like WordPress and Drupal. Jekyll is written in Ruby and a Jekyll site can be built simply using markdown and Liquid templates, an open source templating language written in Ruby. For more on using Jekyll, check out the [Jekyll docs](https://jekyllrb.com/docs/home/) and to play around with an example Jekyll site, check out [th](http://templates.netlify.com/template/jekyll-with-netlify-cms-boilerplate/)[is one](http://templates.netlify.com/template/jekyll-with-netlify-cms-boilerplate/) [on Netlify templates](http://templates.netlify.com/template/jekyll-with-netlify-cms-boilerplate/).

...or click the button below to deploy and experiment right away.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danurbanowicz/jekyll-netlify-boilerplate)

### Hugo

A common barrier to using static site generators is having to build a site that exceeds many thousands of pages. Static site generators build assets proactively. As a result, the time it takes to build a site increases exponentially as its size grows; the more pages your site has, the longer your build. Built in Go, Hugo is optimized for speed—it boasts a <1ms build time per page and [has even lived up to its reputation for speedy builds in official stress tests](https://twitter.com/GoHugoIO/status/1015305116247658496) — and is easy to use to boot. In Hugo, content is written in markdown with some front matter and Go-style templating thrown in to customize the look and feel of a page. A key feature of Hugo is that it supports a command line based workflow. With the ease of a few commands in Hugo, you can create new content and even spin up a local development build of your website in a matter of seconds. 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bdougie/casper-cms-template)

## Great for getting started

If this is your first adventure into the world of static site generators, then it's possible that learning the conventions and understanding the architecture  might already feel like plenty to take on. Also learning your way around a new template system or syntax could feel like a lot to learn all at once. So are there any static site generators which are well suited to somebody getting to grips with this model? There are! 

### Jekyll

I've already talked about Jekyll, but it is worth calling out again in this section. Jekyll's use of Liquid templates is very popular with people new to templating and to those without deep development experience. Liquid templates are nice to ready and feel logical to use, which can ease the cognitive load when getting started. Some find that the dependency on Ruby can cause a bit of friction in getting Jekyll installed and running, but once over that hurdle, Jekyll remains a great tool to use to introduce you to building sites with static site generator.

That Jekyll starter template once again:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danurbanowicz/jekyll-netlify-boilerplate)

### Eleventy

Another site generator that has proven to be popular with those exploring this space for the first time is Eleventy. Although it is a project without the same level of adoption of something like Jekyll, it has a number of attributes which make it a good choice for your first exploration. Like Jekyll, Eleventy supports Liquid templating. But it also supports a number of other popular templating languages too, such as Nunjucks, Handlebars, Moustache, EJS, Jade/Pug and more. This means that you can stick with a templating language that you are already familiar with, and focus your learning on other areas.

Eleventy seems to have benefitted from observing the design decisions of many other static site generators that have come before, and supports a very logical way of mixing data, templates, and markdown to create the site functionality that you desire.

It is perhaps not as well suited to very large site (in terms of numbers of pages) as some of the other options listed here like Hugo or React Static. And it doesn't automatically provide some of the advanced features for JavaScript functionality or creating a PWA as something like Gatsby, but its clear focus on giving you control, and its very easy installation via NPM make it very approachable and a great place to start.

Try it with this base blog template:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/11ty/eleventy-base-blog)



## Great for Documentation

Generating technical documentation is a popular use case for static site generators. At a surface level, docs sites present similar requirements as blogs and marketing sites, and indeed, some of the most popular generators like Jekyll, Hugo, and Gatsby are also popular for documentation. However, there are also generators made specifically for documentation, with docs-friendly features like reusable content blocks, built-in versioning, and internationalization support. Here are two of the newest entries to the category:

### VuePress

In the last couple of months, VuePress has risen as the darling of static site generators in the Vue community. The initial intent of VuePress was to be a tool for writing clear and concise documentation for Vue projects and by default, themes in VuePress are optimized for documentation. Even so, VuePress is customizable to suit the needs of your project. Starting a project in VuePress can be done by creating .vuepress folder in the root folder of your project and adding a config file to it. The config file along with the yaml front matter form the foundation of customization in your VuePress project. Through them both, you can set up your project’s build configuration, customized theming and routing. 

Want to try it? We have another quick start for you:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/shortdiv/vuepress-docs-template)

### Docusaurus

Docusaurus is the brainchild of the facebook team, and powers the bulk of the documentation for most Facebook projects—though interestingly not ReactJS, which uses Gatsby. Docusaurus is similar to most static site generators in that it supports markdown and comes with default components called `provided components` like `markdown block` and `gridblock` that you can use to organize and group content in your docs. A standout feature that Docusaurus offers is easy and seamless translation and localization using `Crowdin`, where documentation translation is crowdsourced via users in a community.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/shortdiv/docusaurus-docs-template)

## How to choose

Static site generators are powerful tools that have the capacity to handle use cases that they may not have originally been intended for; a site generator optimized for technical documentation (i.e. VuePress) can be [repurposed to support blogs](https://github.com/shortdiv/vuepress-blog-template) and so on.

Given the keen adaptability of static site generators, there’s not a one size fits all solution, and when it comes to picking and choosing the right static site generator, you'll want to consider your specific use case. 

Not in the list above, but certainly worth a mention, is [Jigsaw](https://jigsaw.tighten.co/) which does a great job of bringing Static Site Generation to developers familiar with PHP and Laravel. Powerful and well documented, I'd not be surprised to see it grow in popularity as more PHP developers turn their attention towards building with SSGs.

The categorization that we’ve made in this post is more a reflection of the most common ways in which we’ve seen specific static site generators be used and less a matter of opinion of how they should be used. 

Ultimately, the best way to ensure a good fit is to “keep your objectives for the static site generator clear” so you can adequately match your needs with the features offered. Whatever your use case, and whichever static site generator you end up going with, [let us know](https://www.twitter.com/netlify)! 📢 We always love hearing how and why you’re using static site generators! And if you’re completely brand new to using static site generators, check out [templates.netlify.com](http://templates.netlify.com) to get started.

## TLDR;

| **Name**     | **Languages** | **Frameworks** | **Great for**              |
| ------------ | ------------- | -------------- | -------------------------- | 
| Nuxt         | JavaScript    | Vue            | Isomorphic apps            |
| Next         | JavaScript    | React          | Isomorphic apps            |
| Gatsby       | JavaScript    | React          | Isomorphic apps            |
| React Static | JavaScript    | React          | Isomorphic apps            |
| VuePress     | JavaScript    | Vue            | Documentation              |
| Docusaurus   | JavaScript    | React          | Documentation              |
| Jekyll       | Ruby          | -              | Blogging, Getting started  |
| Hugo         | Go            | -              | Blogging                   |
| Eleventy     | JavaScript    | -              | Getting started            |
| Jigsaw       | PHP           | -              | PHP and Laravel developers |          |
