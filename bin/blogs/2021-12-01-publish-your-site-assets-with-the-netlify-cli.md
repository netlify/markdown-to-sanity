---
title: Publish your site assets with the Netlify CLI
description: The Netlify command line interface can publish your web site assets
  to the Netlify hosting infrastructure for you with a single command. Learn
  how.
authors:
  - Phil Hawksworth
date: 2021-12-01
lastmod: 2021-12-01
topics:
  - tutorials
tags:
  - Tips
  - Features
  - CLI
tweet: ""
format: blog
relatedposts:
  - Pair programming with the Netlify CLI
  - Managing environment variables from your terminal with Netlify CLI
seo:
  metatitle: Publishing your site assets with the Netlify CLI
  metadescription: Learn how the Netlify command line interface (CLI) can publish
    your web site assets to the Netlify hosting infrastructure for you with a
    single command.
  ogimage: /v3/img/blog/og-cli-deploy.png
---

> Throughout December we'll be [highlighting a different Netlify feature each day](https://www.netlify.com/blog/2021/12/01/highlighting-a-different-netlify-feature-each-day-in-december/?utm_campaign=devex-ph&utm_source=netlify&utm_medium=blog&utm_content=adventure-cli-deploy). It might just be the thing you need to unlock those creative juices, and [dust off that domain](https://www.netlify.com/blog/2021/12/01/dusty-domains-your-forgotten-domains-raise-money-for-charity/?utm_campaign=devex-ph&utm_source=netlify&utm_medium=blog&utm_content=adventure-cli-deploy) you registered but never deployed! Keep an eye [on the blog](https://www.netlify.com/blog/2021/12/01/highlighting-a-different-netlify-feature-each-day-in-december/?utm_campaign=devex-ph&utm_source=netlify&utm_medium=blog&utm_content=adventure-cli-deploy) and on [Twitter](https://twitter.com/netlify) for each feature!

Did you know that you can publish your sites to the web without leaving the comfort of your command line?

The open source [Netlify CLI](https://github.com/netlify/cli) includes lots of helpful features (expect to see learn more about that in upcoming post this month!) and deploying production or preview versions of your site can be done with the handy command: `netlify deploy`


> 💡 Install the Netlify CLI for all sorts of web development helpers and utilities with this command: `npm install -g netlify-cli`


The first time you run `netlify deploy` from a local project folder, it will give you the option of deploying to an existing site or creating a new site in a project team, and then deploy your specified folder to Netlify.

For added safety, the default target for a `netlify deploy` is a unique preview URL which the CLI helpful returns to you as a link to inspect and share. Ready to deploy to production? Then you'll want to use the `prod` flag:

`netlify deploy —-prod`

More powerful deployment pipelines await you via [Netlify's build infrastructure](https://www.netlify.com/products/build/?utm_campaign=devex-ph&utm_source=twitter&utm_medium=social&utm_content=adventure-cli-deploy), but this command is very useful for sending your assets to Netlify where we'll publish them to the [global hosting infrastructure](https://www.netlify.com/products/edge/?utm_campaign=devex-ph&utm_source=twitter&utm_medium=social&utm_content=adventure-cli-deploy) for you.

Happy deploying!

## More information

- [Getting started with the Netlify CLI](https://docs.netlify.com/cli/get-started/?utm_campaign=devex-ph&utm_source=twitter&utm_medium=social&utm_content=adventure-cli-deploy)
- [Netlify CLI 2.0 rebuilt from the ground up](https://www.netlify.com/blog/2018/09/10/netlify-cli-2.0-now-in-beta/?utm_campaign=devex-ph&utm_source=twitter&utm_medium=social&utm_content=adventure-cli-deploy)
