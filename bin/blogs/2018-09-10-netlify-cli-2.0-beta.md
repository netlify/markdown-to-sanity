---
title: "Netlify CLI 2.0 now in Beta \U0001F389"
description: >-
  Welcome to the Netlify CLI! The new 2.0 version was rebuilt from the ground up
  to help improve the site building experience.
authors:
  - David Wells
  - Bret Comnes
date: '2018-09-10'
topics:
  - news
tags:
  - Open source
tweet: Streamline netlify site operations with the brand spanking new 2.0 CLI.
format: blog
---
Here at Netlify, we are always thinking about how we can streamline the DX (developer experience) for our wonderful community of devs.

* How can we streamline your life?
* What can we do to shave a few seconds off this process and that?
* Where are the points of friction in your dev flow & how do we eliminate them?

These are the questions that drive us. It’s why we do what we do.

So in the spirit of **“STREAMLINE ALL THE THINGS”** we are proud to introduce our new & improved CLI 🎉

![cli-install](https://user-images.githubusercontent.com/532272/45304206-6ffd4f00-b4cc-11e8-9814-6790c2da7d9d.gif)

## Give it a spin!

To grab the new CLI, pop open your terminal and run:

```bash
npm install -g netlify-cli@next
```

After you’ve installed the CLI, you have access to a bunch of fancy new features.

```bash
Read the docs: https://cli.netlify.com
Support and bugs: https://github.com/netlify/cli/issues

Netlify command line tool

VERSION
  netlify-cli/2.0.0-beta.2 darwin-x64 node-v10.4.1

USAGE
  $ netlify [COMMAND]

COMMANDS
  deploy  Create a new deploy from the contents of a folder
  init    Configure continuous deployment for a new or existing site
  link    Link a local repo or project folder to an existing site on Netlify
  login   Login to your Netlify account
  logout  Logout of your Netlify account
  open    Open settings for the site linked to the current folder
  sites   Handle various site operations
  status  Print status information
  unlink  Unlink a local folder from a Netlify site
  watch   Watch for site deploy to finish
```

First we will need to login to connect the CLI to your existing Netlify Account.

```bash
# login to your netlify account
netlify login
```

![cli-login](https://user-images.githubusercontent.com/532272/45304201-6bd13180-b4cc-11e8-80c0-787348bede16.gif)

After logging in, it’s time to link a local site and run some of these fancy new commands!

**Side note:** If you don’t have a site in Netlify yet, you will want to use the `netlify init` command to setup & configure your brand new site. Need a site/repo work with? Check out [templates.netlify.com](https://templates.netlify.com/)

Navigate to your local site repo and inside of it’s directory run:

```bash
# change directories into your site
cd ./your-site-directory

# Connect the folder with your live Netlify site
netlify link
```

Then choose how’d you’d like to link the site.

* Automatically detect the local Git remote **(recommended)**
* Entering your site name
* Or entering in your site ID

After your site is linked, you can run different operations against it.

Lets try a deploy!

```bash
# run your local build script
npm run build

# Then deploy it to a draft URL!
netlify deploy
```

Optionally you can pass the `--open` or `-o` flag to the `deploy` command to pop open your live URL after the deploy has finished.

```bash
# Open after deploy
netlify deploy --open
```

![cli-deploy](https://user-images.githubusercontent.com/532272/45304881-f2d2d980-b4cd-11e8-8d21-6d08f3220822.gif)

## Exploring commands

To see the available commands of the CLI run:

```bash
netlify help
```

To dig deeper and find out more about specific commands run:

```bash
netlify [command] help

# See all current `netlify sites` sub commands
netlify sites help
```

You can also check the [repository README](https://github.com/netlify/cli/blob/master/README.md) for more usage details.

## Our CLI journey

At Netlify, we’ve gone through a number of iterations of our CLI tool, going from a [hand rolled ES5 Node.js-based CLI](https://github.com/netlify/cli/tree/v1.2.3), to a [Go CLI](https://github.com/netlify/netlifyctl) based on [Netlify’s OpenAPI Specification](https://open-api.netlify.com/#/default).

We’re now going back to Node 🎉, but building with modern JavaScript using an API client derived from our [open-api specification](https://www.npmjs.com/package/@netlify/open-api).

Under the covers, we are using the pluggable [oclif](https://oclif.io/) CLI framework made by Heroku. Heroku’s legendary CLI went through an even longer technology journey and the team over there wrote a [very interesting post](https://blog.heroku.com/evolution-of-heroku-cli-2008-2017) about why Node.js and oclif were the best fit for them.

Rewriting a CLI is no small decision. A large majority of Netlify customers incorporate some kind of [Node](https://nodejs.org/en/)-derived workflow, using libraries and assets in their final builds and the torrent of developer tools available on the [npm registry](https://www.npmjs.com/).  

Bringing the Netlify CLI back into the npm module ecosystem will provide a familiar and convenient workflow that should be a good fit for our customers and was a big factor in our decision.

For all the Gophers out there, the dependency-free `netlifyctl` will continue to operate as it currently does. (And we still absolutely love and use Go at Netlify!)

In short, the Node CLI is getting this 2.0 makeover and the Go based CLI will likely be deprecated in the future.

## Approachable contributions

Like a lot of [tools we’ve made](https://www.netlify.com/open-source/), the new Netlify CLI is completely [open source](https://github.com/netlify/cli).

Another design decision around the rewrite to was to maximize the accessibility of open source contributions. The codebase is written in uncompiled ES6 JavaScript targeting Node.js [LTS and Stable](https://github.com/nodejs/Release), taking full advantage of async/await and modern syntax goodies.

We’ve tried to keep the codebase accessible and easy to contribute to.  To start, [find the command in question](https://github.com/netlify/cli/tree/master/src/commands), and start reading through the code.

Pull requests are backed up by a plethora of CI services and tests to help you get your potential PRs landed.  See something wrong? [Open an issue](https://github.com/netlify/cli/issues)!  But also don’t be afraid to dig around.

```bash
# Clone down repo
git clone https://github.com/netlify/cli.git
# change directories into CLI folder
cd cli
# install the deps!
npm install
# Link the local files to the global 'netlify' command
npm link
# `netlify` is now running your local development copy! Dev away!
netlify
```

## Going Forward

Once we gather feedback and work out the inevitable kinks of the fresh codebase, we have plans to expand into community-contributed plugins, development proxies, CLI-based logs for serverless functions and deploy logs, custom domain and site configuration, and a bunch of other exciting features.

## Some future plans for the CLI

### Pluggable CLI commands

The CLI is pluggable, meaning user land plugin contributions are possible and highly encouraged!

We plan on keeping the core CLI pretty lean and plugins will be a great way for users to extend functionality to their site builds, serverless functions & site settings.

Here’s some pseudo code of what plugins will likely shake out to look like.

```bash
netlify plugins:install google-analytics --uid UA-9282822-Y
```

Keep an eye on the [repo](https://github.com/netlify/cli/issues) for more details on this.

### Improving the local development story

Tools like [`netlify-lambda`](https://github.com/netlify/netlify-lambda) have made it easy for Netlify Functions users to run serverless function code locally. Now it's time to crank that up a notch!

Here are a couple of ideas we are kicking around:

* Local development proxy to emulate the [Netlify redirects engine](https://www.netlify.com/docs/redirects/)
* Streamlined serverless function build tools (packaging/deploying/logging)
* Fetching remote function & build logs via the CLI
* Managing your site domains via CLI
* Toggling on additional netlify features (like forms, identity, etc) via CLI commands
* [Your feature requests](https://github.com/netlify/cli/issues)

### Better Logging

Tailing long logs in the UI can sometimes be challenging. Staying 'in the zone' in the CLI and watching logs pipe through Bringing in your site build logs right into the terminal you just `git push`'ed up your code just makes sense!

### \[Your Idea Here]

We have a lot planned for the future of the CLI and would love to hear your feedback and feature requests!

[Open up a GitHub issue](https://github.com/netlify/cli/issues) and let us know your thoughts!
