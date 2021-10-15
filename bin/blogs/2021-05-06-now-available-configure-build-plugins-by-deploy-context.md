---
title: "Now available: Configure Build Plugins by deploy context"
description: "Learn how to edit your netlify.toml file to configure
  context-specific build plugins! This configuration is ideal if you want to
  enable plugins differently for staging vs. production, and can be useful for plugin authors who want their users to be able to customize their experience per context."
authors:
  - Netlify
date: 2021-05-06
lastmod: 2021-05-06
topics:
  - news
tags:
  - build plugins
  - deploys
tweet: ""
format: blog
relatedposts:
  - Top 10 Netlify Build Plugins - 2021 Update
  - Netlify Build Plugins Are Here!
seo:
  metatitle: Configure Netlify Build Plugins to run only in specific deploy contexts
  metadescription: "Learn how to customize your Netlify build process
    with Build Plugins that run differently (or not at all) across production,
    Deploy Preview, and branch deploy contexts."
  ogimage: /img/blog/configure-build-plugins-by-deploy-context-og-background-learn-more.png
---
<style>
.post-body a {
  text-decoration: underline;
</style>

Now you can configure any of Netlify’s Build Plugins so they run only in specific deploy contexts!

As a quick refresher: [deploy contexts](https://docs.netlify.com/site-deploys/overview/#deploy-contexts) refer to the different types of deploys of your site on Netlify, including production deploys to your primary site URL, Deploy Previews, and branch deploys built from a specific branch of your site repository. In your `netlify.toml` file, you can specify different build settings for different contexts. For example, you may want separate build configurations for staging vs. production environments.

Netlify [Build Plugins](https://docs.netlify.com/configure-builds/build-plugins/) allow you to extend and customize your build processes with a combination of tools from a library of services. For example, you could use a build plugin to fail the build if it doesn’t meet accessibility requirements or kick off a search indexing process with [Algolia](https://www.netlify.com/technology-partners/algolia) after every successful deploy.

By default, installed plugins run in all deploy contexts. Until now, there was no way to tell certain plugins to run only in some contexts or to apply context-specific plugin settings.

Today, we’re excited to announce you can now define the context where a plugin should run, and even further configure the plugin based on specific contexts. 

In order to configure contexts, you will need to edit your `netlify.toml` file.

You can choose to enable or disable a plugin only in specific contexts, like so:

```toml
[[context.production.plugins]]
package = "@netlify/plugin-sitemap"
```

You can also configure a plugin to run with different `inputs` depending on the context:

```toml
[[plugins]]
package = "netlify-plugin-cypress"
  [plugins.inputs]
  record = true

[[context.deploy-preview.plugins]]
package = "netlify-plugin-cypress"
  [context.deploy-preview.plugins.inputs]
  record = false
```

## Example use cases for context-specific plugins

Thinking about switching up your plugins based on different contexts? Here are some ideas for example use cases:

* Save time while you’re working by running certain plugins, like [Image Optim](https://github.com/chrisdwheatley/netlify-plugin-image-optim) or [Sitemap](https://github.com/netlify-labs/netlify-plugin-sitemap#readme), only when you’re ready to deploy to production.
* Save time when you’re ready to ship by moving some testing plugins, like the [A11y plugin](https://github.com/netlify-labs/netlify-plugin-a11y#readme), to run checks only on your deploy previews but not when you’re pushing to prod.
* Reduce noise from notifications while you work by running plugins like [Pushover notification](https://github.com/AshikNesin/netlify-plugin-pushover#readme) only when you’re deploying to production and not every time a PR is made.
* Configure an end-to-end testing plugin like [Cypress](https://github.com/cypress-io/netlify-plugin-cypress#readme) so that it runs _after_ the deploy for previews, but _before_ the deploy for production. That way, you get full E2E experience during development and test, but don't risk having a failing production build go live.

## A few details to note

Plugins that are installed by clicking the **Install** button in the Netlify UI run in all contexts. To run a plugin only in a specific context, [configure it](https://docs.netlify.app/configure-builds/build-plugins/#configure-by-deploy-context) in your `netlify.toml` file under that context only, and make sure the plugin is not installed in the UI.  

On the other hand, changes to plugin `inputs` will take precedence and work as set in the `netlify.toml` file, even if the plugin was installed via the web app UI.

## Try context-specific plugins today!

Go browse the Netlify [plugin directory](https://app.netlify.com/plugins) to see the full list of available plugins. Then, head over to [the docs](https://docs.netlify.com/configure-builds/build-plugins/#configure-by-deploy-context) to learn how to configure your plugins by context.

We’re so glad to make this highly-requested enhancement available to all Netlify customers on all plans today. Keep the feedback coming!
