---
title: "Localize your environment variables by context with build plugins "
description: By enabling cache management or generating build artifacts like RSS
  feeds, modifying builds pre-deploy enable you to optimize your code for
  maximum efficiency in production. In this post, Divya walks through how to
  optimize your environment variables based on context with the help of build
  plugins.
authors:
  - Divya Tagtachian
date: 2020-05-21T00:00:00.000Z
lastmod: 2020-05-21T00:00:00.000Z
topics:
  - tutorials
tweet: ""
format: blog
relatedposts:
  - "What's a Netlify Build Plugin Series: Part 1 - Using Build Plugins"
  - "What's a Netlify Build Plugin Series: Part 2 - Making Build Plugins"
seo:
  metadescription: How can build plugins can optimize your code for maximum efficiency in production? In this tutorial, learn how to localize your env vars by context. Check it out!
  metatitle: How to Contextualize your env vars with Netlify Build Plugins
---
In general, a staging environment doesn’t always have the same context as a production environment. Most commonly, this difference manifests in how we handle and account for environment variables. In the context of a Netlify build, accounting for this difference means making sure you’re checking the context and using the associated environment variable. This can mean manually checking the context in every build and swapping out the environment variable appropriately. 

In a serverless function, this would look something like this:

```js
exports.handler = function(event, context, callback) {
  const context = process.env.CONTEXT

  let DB_KEY;
  if (context === "production") {
    DB_KEY = process.env.DB
  } else if (context === "deploy-preview" || context === "branch-deploy") {
    DB_KEY = process.env.STAGING_DB
  }
}
```

Having to do this for every Netlify project is not only burdensome, it can lead to unexpected errors if not configured well.

Thankfully, with the help of build plugins, we can access and modify environment variables on the fly without having to repetitively account for differences in context.

To illustrate the process of modifying environment variables, let’s walk through an example plugin where we re-write the process.env variable based on context. 

## Let's build a plugin

To start, let’s create a plugin folder in our project root that we’ll use for our build.

```
plugins/
  netlify-plugin-env-var-by-context
src/
...
```

We’ll now add our plugin to our build configuration so that it refers to this particular plugin. 

```toml
[[plugins]]
package = "./plugins/netlify-plugin-env-var-by-context"
```

With this configuration, we can now move onto building our plugin. 

### Configuration
Because we want to pick up our environment variables and modify them at the beginning of the build, we’ll be using the `onPreBuild`hook. To start let’s identify the context or branch that our code is run in. 

In a Netlify build, you can access and configure a site’s build by context with the help of [deploy contexts](https://docs.netlify.com/site-deploys/overview/#deploy-contexts). These contexts give you the flexibility to fine-tune your build so they adapt to the specific context they’ve been deployed to.

From our configuration, we access the deploy context from the `CONTEXT` attribute in `process.env`. This will yield one of three deploy contexts, `production`, `deploy-preview` and `branch-deploy`. 

```js
module.exports = {
  onPreBuild: async ({ inputs }) => {
    const { CONTEXT } = process.env;
    // CONTEXT === "production" OR
    // CONTEXT === deploy-preview OR
    // CONTEXT === branch-deploy
  },
};

```

Assuming we’ve namespaced our environment variables appropriately using the above mentioned deploy contexts, i.e. `DEPLOY_PREVIEW_DB_KEY`, we can move on to identifying and setting environment variables appropriately.

The goal of our build plugin is to re-write a specific `process.env` variable so that we no longer need to write lengthy if statements to handle various contexts. In other words, we should be able to dynamically swap out the `process.env` variable pre-build. 

To do this, we’ll iterate through all `process.env` variables and find ones matching the specific context, so if we’re in a `deploy-preview` context, we’ll grab a `process.env` like `DEPLOY_PREVIEW_DB_KEY`; The assumption here is that contexts are prefixed. 

With the context specific environment variable identified, we will grab the specific environment variable and set it to the base process.env variable. This means that in a context of `deploy-preview` all references to a `process.env.DB_KEY` will be swapped out for the `process.env.DEPLOY_PREVIEW_DB_KEY` variable. 

```js
module.exports = {
  onPreBuild: async ({ inputs }) => {
    const context = process.env.CONTEXT.toUpperCase().replace(/-/g, '_');
    Object.keys(process.env).forEach(key => {
      const envVar = `${context}_${key}`
      const val = process.env[envVar]
      if (process.env[envVar]) {
        console.log(`Exporting ${key}=${val}.`);
        process.env[key] = val
      }
    });
  },
};
```

With this build plugin in place, we can now refer to the specific environment variable without its corresponding context, which saves us from having to write pesky conditionals. 

## The wonderful world of build plugins

If you’d rather not write your own build plugin, there is a plugin called `netlify-plugin-contextual-env` written by [Chris Ball](https://github.com/cball) that does this exact thing. To use his plugin, simply add it to your config file like so:

```
[[plugins]]
package = "netlify-plugin-contextual-env"
```

Build plugins provide keen access into the deployment process and are handy ways to augment your builds pre-deploy. By offering direct access to the various stages of Netlify’s build,  build plugins gives developers fine grained control over how code gets shipped and distributed to end users. To get started with build plugins, head on over to the [Netlify docs on build plugins](https://docs.netlify.com/configure-builds/build-plugins/). 

Happy building! 