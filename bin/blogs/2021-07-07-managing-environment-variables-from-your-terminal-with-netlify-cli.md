---
title: Managing environment variables from your terminal with Netlify CLI
description: Learn how you keep your environment variables coordinated with the Netlify CLI
authors:
  - Phil Hawksworth
date: 2021-07-12
lastmod: 2021-07-08
topics:
  - tutorials
tags:
  - Tips
  - CLI
  - Build
tweet: ""
format: blog
relatedposts:
  - Environment variables and preview deploys get a boost
  - Easy Access Environment Variables
seo:
  metadescription: Keep sensitive variables in a safe place with environment variables. Learn how you can keep your environment variables coordinated with the Netlify CLI.
  metatitle: Managing environment variables from your terminal with Netlify CLI
  ogimage: /v3/img/blog/og-cli-env.png
---

When you need to keep a sensitive variable in a safe place, environment variables can help. And with Netlify you can manage your environment variables centrally in your site's deploy settings admin, and event access them in your local build if your run your site with `netlify dev`.

[Tara](https://www.netlify.com/authors/tara-z.-manicsic/?utm_campaign=devex-ph&utm_source=blog&utm_medium=social&utm_content=cli-env-vars) gave a great explanation [in this post](https://www.netlify.com/blog/2021/07/05/easy-access-environment-variables/?utm_campaign=devex-ph&utm_source=blog&utm_medium=social&utm_content=cli-env-vars) recently. You should check that out!

Until recently, I would make environment variables available to my local development build by including a `.env` and then using a package like [dotenv](https://www.npmjs.com/package/dotenv) to make the values stashed in the `.env` file available to my code with  `process.env.MY_ENVIRONMENT_VARIABLE`. that worked fine, but as Tara noted, you need to take care not to commit your `.env` file, and you need to manually record your variables locally to match those you've stored in Netlify. We can do better.

This is old news, Phil. We learned this already from [Tara's post](https://www.netlify.com/blog/2021/07/05/easy-access-environment-variables/?utm_campaign=devex-ph&utm_source=blog&utm_medium=social&utm_content=cli-env-vars).
True. But there's one more thing...

Not only can you use the [Netlify CLI](https://github.com/netlify/cli) to access your centrally managed environment variables when you run your build with `netlify dev`, but you can also use the CLI to create and manage those environment variables directly from your terminal. Here's how:


## First, you need a site

To get started you need to have the [Netlify CLI](https://github.com/netlify/cli) installed, and be working in a site that Netlify manages for you. 

```bash

# Install Netlify CLI
npm i -g netlify-cli

# Create a new site on Netlify from your local development folder
netlify init

# Or, if you want to work with an existing site, make sure you have 
# linked your local dev version to site on Netlify
netlify link

```


With a site managed by Netlify you can now add and edit your environment variables like this:

### Add an environment variable

```bash

netlify env:set MY_ENV_VAR "The value of my environment variable"

```

### Update an environment variable

```bash

netlify env:set MY_ENV_VAR "The updated value of my environment variable"

```

### Remove an environment variable

```bash

netlify env:unset MY_OLD_ENV_VAR

```


When you run these commands locally you are making authenticated calls to Netlify to manage those centrally stored environment variables, so you can create, manage, and consume them in your local and your production builds all without leaving your terminal. Handy!

Some folks may prefer the more visual approach to managing environment variables which is available from the Netlify admin UI. [Tara covered all of that here in her post](https://www.netlify.com/blog/2021/07/05/easy-access-environment-variables/?utm_campaign=devex-ph&utm_source=blog&utm_medium=social&utm_content=cli-env-vars). It's nice to have choices!

## Wait, there's more

If you've come this far, you may wish to explore the other options available through Netlify CLI. There is help provided for all the things you can do with environment variables by running `netlify env help`

A few more utilities that can be useful:

### List all the environment variables

```bash

netlify env:list

```

### List all the environment variable in JSON format

```bash

netlify env:list --json

```

### Import environment variables from a file

Perhaps you already have your environment variables stored in a local file like a `.env` file. You can use that as a source to bulk import into Netlify like this:

```bash

netlify env:import .env

```


## Environment variables shared across a team

Collaborating as part of a team on Netlify unlocks a number of advantages. One is having the ability centrally manage environment variables which all sites in that team can access and use. These variables are visible to you as a member of a team just the same as other variables. But they do need to be managed via the admin UI. You can lean more about [managing environment variables in the docs](https://docs.netlify.com/configure-builds/environment-variables/?utm_campaign=devex-ph&utm_source=blog&utm_medium=social&utm_content=cli-env-vars#declare-variables).


## Explore the CLI

There is a lot that Netlify CLI can do to help you be more productive when creating and managing your sites. A good place to look for more tips is in the help provided by the CLI itself. I'd recommend digging around:

```bash

# Overview of commands available
netlify help

# More specific help for a given command
netlify help [command]

```

You can also explore [the code repository for the Netlify CLI on GitHub](https://github.com/netlify/cli).

Happy CLI-ing!
