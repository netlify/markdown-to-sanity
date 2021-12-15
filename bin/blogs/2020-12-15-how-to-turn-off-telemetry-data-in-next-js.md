---
title: How to turn off telemetry in Next.js
description: Next.js collects telemetry data by default. Here's how to disable that!
authors:
  - Cassidy Williams
date: 2020-12-15
lastmod: 2021-11-16
topics:
  - tutorials
tags:
  - Next.js
  - blogvent
tweet: ""
format: blog
relatedposts:
  - Environment variables in Next.js and Netlify
seo:
  metatitle: How to turn off telemetry data in Next.js
  metadescription: Next.js collects telemetry data by default. Here's how to disable that!
  ogimage: /v3/img/blog/blogvent15.png
---
Welcome to Blogvent, day 15!

Next.js, through its CLI, collects anonymous telemetry data about general usage by default. The data collected includes:

* CLI command invoked (`next build`, `next dev`, or `next export`)
* The version of Next.js you're using
* Your operating system
* Next.js plugins used in your project
* Duration of `next build` and size of application

This information doesn't identify you in any way, but you might not want it to be collected. To disable this data collection, run this command at the root of your project:

```bash
npx next telemetry disable
# to re-enable, turn "disable" into "enable"
```

Similarly, you can check the status of telemetry data collection with this command:

```bash
npx next telemetry status
```

If you want to ensure this is a change in your codebase, you can also set an environment variable ([here's more details how!](https://www.netlify.com/blog/2020/12/10/environment-variables-in-next.js-and-netlify/?utm_source=blog&utm_medium=envvartelemetry-cs&utm_campaign=devex)) in your project:

```bash
NEXT_TELEMETRY_DISABLED=1
```

## I want to start a new project!

Who doesn't? Here's a starter application to to try this out:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=blog&utm_medium=nextstarterlogging-cs&utm_campaign=devex)

(Clicking this button will deploy a Next.js starter project to Netlify, and clone it to your chosen Git provider)