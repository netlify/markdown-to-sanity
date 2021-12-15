---
title: How we built a Vue CLI Plugin for Netlify Lambda
description: >+
  In this post, we cover how we built a Netlify Lambda Vue CLI plugin that
  integrates with existing projects to build and serve AWS Lambda functions.

authors:
  - Divya Sasidharan
date: '2018-09-26'
topics:
  - tutorials
tags:
  - Vue
  - CLI
  - Functions
  - Serverless
tweet: ''
format: blog
---
Earlier this year, [we released Netlify Functions](https://www.netlify.com/blog/2018/03/20/netlifys-aws-lambda-functions-bring-the-backend-to-your-frontend-workflow/) and made them available in the free tier (up to 125k requests). Netlify Functions make deploying AWS's serverless Lambda functions a breeze by removing the need to manually setup tricky permissions, and configure API gateway—for more on this, check out our docs. You can even work with serverless functions locally using the [Netlify-Lambda CLI tool](https://www.netlify.com/docs/functions/#tools-for-building-javascript-functions). With this, you get the same powerful workflows for your serverless functions, as you have in the result of your code on Netlify, with immutable deploys, rollbacks and other helpful workflows. To further simplify this workflow and enable functions integration with VueJS applications, we’ve created a Vue CLI Plugin that uses the Netlify Lambda CLI to build and run serverless functions for local development. 


## Why plugins?
In Vue applications created via Vue CLI 3, plugins are the key to project configuration. All webpack configurations and babel presets are now wrapped in a `vue-cli-service` plugin so you can get up and running quickly without the hassle of wrangling configuration files. Adding styles, tests and babel presets to your project can easily be done via `vue-cli-service`—assuming a vue cli plugin already exists—and often come with custom commands that you can then run via `npm` or `yarn`. The main motivation behind such a plugin-based architecture is that Vue applications are now flexible and extensible; you can have unique applications while also isolating common logic and patterns so you stay DRY (Don’t Repeat Yourself).


## What makes a plugin?
A Vue CLI plugin is nothing more that a collection of files, that add additional features and configurations to a Vue project and is organized as such:

```markdown
.
├── README.md
├── generator.js  # generator (optional)
├── prompts.js    # prompts file (optional)
├── index.js      # service plugin
└── package.json
```

The main index.js file is known as the `service plugin` and is what gets invoked when you call `vue-cli-service [SERVICE NAME]`. Significant examples of service plugins are the built in commands like `build` and `serve`, which as the name suggests, builds and serves a Vue application. The generator file injects dependencies and adds additional files and folders to a project. This gets instantiated when you run `vue create` or `vue invoke`. A Vuex module plugin like the one I created is one example of this.  Prompts have the ability to either customize initial prompts when creating a new project or add additional prompts when you invoke a third party plugin. 


## Creating Netlify Lambda Vue CLI Plugin

To work with the Netlify Lambda CLI for local development of serverless functions, you add the `netlify-lambda` dependency to your package.json and you will be able to serve your functions locally for testing, and prepare them for deployment with a simple webpack/Babel setup using the `netlify-lambda build` and `netlify-lambda serve` commands.  Since the Netlify Lambda CLI works well with CLI based workflows, we can tack on the build and serve commands for Netlify Lambda into Vue CLI Service via a Service Plugin. 

To do this, we’ll pull the service commands available via `api.service.commands` and fold the lambda build and serve functions in so that they run when `vue-cli-service build` and `vue-cli-service serve` are run. Below, I’ve extrapolated the build function from the Netlify lambda service and wrapped that in the Vue CLI service build function: 

```JS
const lambdaBuild = require("netlify-lambda/build")
const  { build } = api.service.commands 
    
const buildFn = build.fn
    
build.fn = (...args) => {
  return buildFn(...args).then(res => {
    // run lambda build thing //
    return lambdaBuild
      .run("src/lambda")
      .then(stats => {
        // use stats // 
      })
      .catch(err => {
        process.exit(1)
      })
  })
}
```

Since the Netlify Lambda service in our plugin also expects the `lambda` folder, we will create a generator folder with a templates directory containing the proper structure for adding a function folder to an existing project. 

```markdown
.
├── generator
├── index.js
├── template
  ├── src
    ├── lambda
      ├── hello.js
└── ...
```

In the main generator file, we will then have the api render the templates directory. 


    module.exports = (api) => {
      api.render("templates/")
    }

## Testing Testing

Similar to how you would test the average Vue project, you can test Vue CLI Plugins using Jest. However, since CLI plugins are add-ons to existing Vue projects, they require access to both an actual project and the Vue CLI service dependency. For this, we’ll lean on some helper utilities available in the `vue-cli-test-utils` package, specifically `createTestProject`. For our test, we’ll be checking that the plugin adds the `lambda` folder to the `src` folder as expected. 

We’ll start by creating a project, and adding the Netlify Lambda Vue CLI plugin to it. Then we can invoke the plugin and check that the lambda folder was added as expected using the appropriate Jest assertion.

```JS
const lambdaBuild = require("netlify-lambda/build")
const  { build } = api.service.commands 

const buildFn = build.fn

build.fn = (...args) => {
  return buildFn(...args).then(res => {
    // run lambda build thing //
    return lambdaBuild
      .run("src/lambda")
      .then(stats => {
        // use stats // 
      })
      .catch(err => {
        process.exit(1)
      })
  })
}
```

Alternatively, if you’d rather test your plugin in a live project, you can test that a plugin works by adding it as a local dependency using `yarn` or `npm` and manually invoking and checking that the appropriate files have been added.

```JS
yarn add -D /PATH/TO/PLUGIN OR npm i --save-dev /PATH/TO/PLUGIN
vue invoke PLUGIN_NAME
```

## CLI *all the things* to improve developer workflows

At Netlify, we care a lot about creating tools, features and processes that integrate seamlessly with existing developer workflows, because we believe that this can help you to build things with more confidence and clarity. 

The Netlify Lambda Vue CLI plugin works out of the box with the default build and serve commands already available in Vue CLI. As a result, we believe that we’ve made it easier for developers using Vue in their projects to start also working with serverless functions without the added overhead of complicated configurations. If you’d like a live demo of how to work with the Netlify Lambda plugin, check out [this lightning talk](https://www.youtube.com/watch?v=1uxi05FgU1o) by our very own [Mathias Biilman](https://twitter.com/biilmann) at the last Vue Conf US. 

[Try it today](https://github.com/netlify/vue-cli-plugin-netlify-lambda) and let us know what you think!
