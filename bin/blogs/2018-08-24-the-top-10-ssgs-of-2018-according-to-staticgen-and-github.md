---
title: 'The top 10 SSGs of 2018, according to StaticGen and GitHub'
description: >-
  Our annual look at the top 10 static site generators according to their
  popularity on GitHub. 
authors:
  - Phil Hawksworth
date: '2018-08-24'
topics:
  - tutorials
tags:
  - SSG
  - Static Site Generators
  - JAMstack
tweet: ''
format: blog
---
Each year, Netlify reports on the current state of the Static Site Generator (SSG) landscape with a post about the most popular 10. The popularity is based on the number of stars each project has collected on GitHub.

This year we also posted some thoughts on different SSGs and [how they can be applied to common use cases](https://netlify.com/blog/2018/08/09/10-static-site-generators-and-popular-uses-for-them-in-2018/). But the post you are reading now compares the popularity of all SSGs and is purely based on data collected from GitHub activity.

It's interesting to compare it to similar posts from [2017](/blog/2017/05/25/top-ten-static-site-generators-of-2017/) and [2016](/blog/2016/05/02/top-ten-static-website-generators/) to see how the landscape is evolving. It's also interesting to see some new entries to the list this year, and that the rate at which many SSG projects accrue GitHub stars and Twitter followers appears to be accelerating. 

The category, it seems, is gaining momentum.

![A chart showing the increase in GitHub stars for the top 10 static site generators as of today](/img/blog/ssg-chart-2018.png)

> [Interactive chart via http://www.timqian.com/star-history](http://www.timqian.com/star-history/#jekyll/jekyll&zeit/next.js&gatsbyjs/gatsby&gohugoio/hugo&hexojs/hexo&GitbookIO/gitbook&nuxt/nuxt.js&vuejs/vuepress&facebook/Docusaurus&getpelican/pelican)

So, let's take a look at the top 10 SSGs, listed in descending order according to their GitHub stars. You can also find the full list (which you can filter and order according to a few different metrics) over on [staticgen.com](https://staticgen.com)


## Jekyll

For many years, Jekyll has been the SSG with the greatest brand recognition. Its popularity is bolstered by GitHub’s support of the project and the fact that it is the SSG which GitHub Pages supports.

Still thriving and with an active community, Jekyll established many of the patterns we now see in other SSGs. Many of these patterns are what keep Jekyll popular and capable, from metadata in front matter and structured data folders, to support for Markdown, expressive Liquid templating, and support for categories and tags.

![Jekyll](/img/blog/top-10-2018-jekyll.jpg)


## Next

Next is an library built with ReactJS, capable of delivering your site with either server-rendering (generating a view at request time) or pre-rendering (generating all views at build time).

Next's basis in ReactJS makes it well suited for a component-centric development approach.

The release of v6 now leverages React 16 and included a major advantage over previous versions in that it no longer requires you to manually specify all of the routes you wish to pre-render. Instead it generates a route map for you at build time and allows developers to bring their own Webpack and Babel configurations for advanced control.

![NextJS](/img/blog/top-10-2018-next.jpg)


## Hugo

This year has seen and great deal of discussion and enthusiasm around Hugo. Written in Go, and optimised for speed of site generation, Hugo is not opinionated about the architecture of the site it generates, instead placing the responsibility and control over those decisions in the hands of the developer via its Go templating.

Although written in Go, dependency management for Hugo is very straightforward leading to a simplified developer experience. The Hugo binary can be installed directly with no need to install and configure Go. This is simplified even further for those using Node as part of their toolchain thanks to the availability of the [Hugo binary as an NPM package](https://www.npmjs.com/package/hugo-bin).

Hugo's very fast site generation speed leads to a rapid and rewarding development experience and has also lead to it being used on some large scale site deployments where the number of unique pages being generated might number in the tens of thousand, or more.

![Hugo](/img/blog/top-10-2018-hugo.jpg)


## Gatsby

Arguably the fastest climbing entry in our list, Gatsby is another React-based SSG which has a focus on performance at its heart. Designed to generate a site and a client-side framework to support pre-rendered entry points along with client-side hydration of all subsequent route on the site. 

It yields a high performance SPA (Single Page Application) with offline capabilities through service workers, and a rich GraphQL-based data layer. Gatsby is opinionated and shoulders the burden of many performance tricks by for you by default. 

It also has a growing number of [plugins](https://www.gatsbyjs.org/docs/plugins/) and an ever more engaged community and ecosystem.

![GatsbyJS](/img/blog/top-10-2018-gatsby.jpg)


## Hexo

Hexo is a NodeJS static site generator which offers itself as a blogging framework. Like so many SSGs which are good for blogging, Hexo can be used for much more than that, but its built-in support for Markdown, front matter and other utilities make it a popular blogging choice.

It has a nice plugin architecture which makes it readily extensible with plugins written in JavaScript which can provide additional utilities, helpers, and custom tags.

With strong conventions for internationalisation, Hexo even has utilities for returning localised language strings from localised content files. This has helped to make it particular popular in China.

![Hexo](/img/blog/top-10-2018-hexo.jpg)



## GitBook

At Netlify we have been observing an increase in momentum for the use of various SSGs on the Netlify platform for generating and delivering documentation sites. We’re very happy to host the documentation for many of the open source projects that you might be familiar with, like [React](https://reactjs.org/docs), [VueJS](https://vuejs.org/), [Yarn](https://yarnpkg.com/docs/), [Lodash](https://lodash.com/docs/), [Kubernetes](https://kubernetes.io/docs/), [Gatsby](https://www.gatsbyjs.com/). The list goes on.

Gitbook is one such SSG which has a primary focus on documentation. It is a little different to the other entries in this list as it has a rich hosted editing interface and offers integrated hosting.

It is free for open-source and non-profit teams and has a number of other pricing tiers with different levels of analytics, support and collaboration tools.

![Gitbook](/img/blog/top-10-2018-gitbook.jpg)




## Nuxt

Heavily inspired by the approach taken by Next, Nuxt offers similar capabilities of both server-rendered and pre-rendered options to developers working inside the VueJS ecosystem.

Nuxt can be extended with modules to provide all manner of advanced functionality and utilities which can be used at build time, but its default configuration can help you to get started very quickly.

![Nuxt](/img/blog/top-10-2018-nuxt.jpg)


## VuePress

Another SSG focussed on documentation, VuePress arrived on the scene this year when it was published by Evan You, creator of VueJs. It has enjoyed a very rapid rise in popularity perhaps due to its basis in the popular VueJS project.

It provides a very rapid start to your documentation project, requiring very little beyond its default setup to get building documentation rapidly.

Markdown support is enhanced with custom markdown extensions developed for common technical documentation tasks — such as code snippets with line highlighting, code snippet imports, table of contents generation and more. You can also extend things further by using VueJS within markdown for even more advanced features and flexibility.

![VuePress](/img/blog/top-10-2018-vuepress.jpg)


## Docusaurus

The last of our SSGs focussed primarily on generation documentation, Docusaurus is built with React and is a Facebook project. It powers the documentation sites of many large open source projects.

It has support for localisations that goes beyond that of some of the others on this list. Added to the helpful conventions and tooling for applying translated content to templates, Docusaurus also leverages CrowdIn to help crowdsource the translations themselves.

Documentation versioning and enabling search through [Algolia](https://www.algolia.com/) is also streamlined to help create rich and useful documentation sites.

![Docusaurus](/img/blog/top-10-2018-docusaurus.jpg)


## Pelican

Showing less dramatic growth than the others in the list this year, but growing in popularity nonetheless, Pelican is the only Python-based SSG in our top 10.

Bringing very popular Jinja2 templating capabilities to static site generation, Pelican also boast a plugin architecture with quite a few plugins available. In addition to its Markdown support, the ability to use AsciiDoc and reStructuredText adds some further content format flexibility.

![](/img/blog/top-10-2018-pelican.jpg)


## How to choose

Even with this distilled list of just 10 of the 230 SSGs listed on [staticgen.com](https://staticgen.com), the choice can be overwhelming. How can you possibly choose?

The good news is that each of the entries listed here have active communities and a wealth of resources to help you explore. You can be confident that you'll discover a tool that meets with your project needs, and your development tastes.

You'll find that there are SSGs written in a wide variety of programming languages, and with support for a range of templating languages. So finding one that matches your needs is usually assured.
This year's rise in popularity of tools like Gatsby, has highlighted the enthusiasm for ready-made, opinionated tooling. In the case of Gatsby, generating sites structured by default to provide the capabilities like offline support, pre-rendering, client-side rendering, and a number of other ready-rolled performance goodies.
Meanwhile, Hugo, which is also increasingly popular, does not bundle JavaScript features automatically. Instead leaving such decisions to the developer while providing rich templating, asset pipelines, and blisteringly fast page generation.

Each of these approaches is attractive to different developers and makes them suitable for different types of projects. The spectrum of choice is populated with many other SSGs, with various balances of being opinionated and offering full control.

No matter your project requirements or your language preferences, this year's look at the SSG landscape shows that the popularity of this approach is gaining momentum. And that somewhere out there, there is the perfect SSG for you.

To get started, why not explore more options and details on [staticgen.com](https://staticgen.com) or explore some of our readymade starter templates at [templates.netlify.com](https://templates.netlify.com).
