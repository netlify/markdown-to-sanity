---
title: Creating and using your first Netlify Build Plugin
description: >-
  Run your own code as part of the Netlify Build lifecycle with our new Build
  Plugins.
authors:
  - Sarah Drasner
date: '2019-10-16'
topics:
  - tutorials
tags:
  - Plugins
  - Development
  - CI
tweet: ''
format: blog
---
Have you ever felt like you weren’t sure if your boss really knew how productive you were? What if you could somehow automate this troublesome task? Have no fear! In this tutorial, we’ll learn how to text your boss every time your site deploys so they know you’re busy working! 

We’ll walk through how to set this up with the brand new [Netlify Build Plugins](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=blog&utm_medium=twilio-plugin-sd&utm_campaign=devex), starting with the very basics of how it works. We’ll go through a basic implementation using Twilio and some environment variables to text someone after a deploy has completed. Let’s get started!

## What is a build plugin?

A Netlify Build Plugin allows you to write custom scripts that are invoked at particular points when Netlify is building and deploying your site. What’s nice about them is that they are just a regular JavaScript object, so the usage is fairly straightforward.

There are a number of events available:

* `onInit`: when the build starts
* `onPreBuild`: runs directly before building the functions and running the build commands
* `onBuild`: when the build commands are executing
* `onPostBuild`: after build commands are executed
* `onSuccess`: runs on build success
* `onError`: runs on build error
* `onEnd`: build finished, site deployed 🚀

This can help automate workflows and tasks, manage notifications, and kick off events that can have a ton of different purposes! You can use what’s available from others in the community, share yours, or create your own. The sky’s the limit to what you can create, making your builds flexible to incorporate so much innovation. 

> 🎉 Build Plugins are now open for everyone to use! Look for the Build Plugin menu at the top of your team and site pages.

## Writing a Build Plugin

If you look at the list above, you can imagine for a lot of scenarios, we’ll hook into `onInit`, or `onEnd`, depending on what we’re building. The simplest possible implementation would go like this:

```js
function netlifyPlugin(conf) {
  return {
    // Hook into lifecycle
    onEnd: () => {
      console.log("site build finished, site deployed! 🚀")
    }
  }
}

module.exports = netlifyPlugin
```

Every plugin should also have a `manifest.yml` file that holds information about the plugin. The plugin above would just need to include the name of the plugin in this file:

```yaml

# manifest.yml

name: netliy-plugin-my-first-plugin
```

Then, if you want to run it in a local folder to test it, in your Netlify config file add:

```toml
[[plugins]]
  package = "./plugins/exampleplugin"
```

Your site directory would now look like this:

```
plugins
-- exampleplugin
---- index.js
---- package.json
-- src
---- index.html (or whatever your dev setup is)
netlify.toml
```

Here are a few examples including [Minify HTML](https://github.com/philhawksworth/netlify-plugin-minify-html), [Prerender SPA](https://github.com/shortdiv/netlify-plugin-prerender-spa), [Gatsby Cache](https://github.com/jlengstorf/netlify-plugin-gatsby-cache), [Checklinks](https://github.com/munter/netlify-plugin-checklinks), and more:
[https://github.com/netlify/plugins](https://github.com/netlify/plugins)

Or, if you want to enable many people to use it, you can publish the package to NPM, install it normally: `npm i netlify-plugin-examplename`, and then your Netlify config file would look like this:

```toml
[[plugins]]
  package = "netlify-plugin-examplename"
```

> [📖 Here's an in-depth post](https://www.netlify.com/blog/2020/04/30/whats-a-netlify-build-plugin-series-part-1-using-build-plugins/?utm_source=blog&utm_medium=twilio-plugin-sd&utm_campaign=devex) on using Netlify Build Plugins.

## Writing our Simple Twilio Build Plugin

First, we want to install the Twilio package, and then require it in our plugins/netlify-plugin-twiliosms index file:

```bash
npm i twilio
```

In plugins/netlify-plugin-twiliosms/index.js:

```js
const Twilio = require("twilio")
```

Then we want to provide our plugin with our Account SID and Auth token. We don’t want to  commit these to GitHub, so we create environment variables to use them in the project. We also want to get the Twilio testing phone number from the dashboard:

![Twilio dashboard](/v3/img/blog/twilio.jpg "Twilio dashboard")

And then login to netlify, go to my site, and add them in Settings > Deploys > Environment (or go to this URL and replace the site ID: `https://app.netlify.com/sites/YOUR-SITE-NAME/settings/deploys#environment`

* `ACCOUNT_SID` – Your Account SID from www.twilio.com/console
* `AUTH_TOKEN` – Your Auth Token from www.twilio.com/console
* `TO_NUM` – The number you'll be texting, should be formatted like this: "+1650XXXXXXX"
* `FROM_NUM` – The number you'll be texting from, must be a valid Twilio number, should be formatted like this: "+1650XXXXXXX"

You can see I’ve also added that I want to use the lifecycle trial here, though this will probably be removed in the future.

Now, I’ll add those environment variables to my index file, this is how I can access them: 

```js
const {
  env: {
    // Your Account SID from www.twilio.com/console
    ACCOUNT_SID,
    // Your Auth Token from www.twilio.com/console
    AUTH_TOKEN,
    // Text this number
    TO_NUM,
    // From a valid Twilio number
    FROM_NUM
  }
} = require('process')
```

Great! Now we can kick off the plugin, using the `onEnd` event. We’ll kick things off by passing our environment variables into the Twilio context:

```js
module.exports = {
  onEnd: async () => {
    console.log('Finish the build up, prepping to text!')

    const client = new Twilio(ACCOUNT_SID, AUTH_TOKEN)
  }
}
```

We’ll add our message by giving it a body, and stating what number it goes to, and which it is from (this is your Twilio provided number).

```js
module.exports = {
  onEnd: async () => {
    console.log('Finish the build up, prepping to text!')

    const client = new Twilio(ACCOUNT_SID, AUTH_TOKEN)

    const { sid } = await client.messages.create({
      body: 'Hi there, we just deployed the site successfully!',
      to: TO_NUM,
      from: FROM_NUM
    })
    console.log(sid)
  }
}
```

In this case, the `TO_NUM` is potentially the number of your boss. In my case, my boss is Netlify’s cofounder and as funny as this joke is I might not want to bother him too much 😳So instead, I’ll use this opportunity to text my colleague, Phil Hawksworth! I’m sure he likes that.

![SMS notification of a successful deploy](/v3/img/blog/blog-plugin-sms.jpg "SMS notification of a successful deploy")

## Using a Build Plugin

If you’re not interested in writing a build plugin but rather, using someone else’s, you can install it via NPM. We would do this like so:

`npm i examplepluginname` or `yarn add examplepluginname`

And then make reference to it in our netlify config as we did earlier:

```toml
[[plugins]]
  package = "example-plugin-name"
```

Or if we had options we needed to pass in we can include them with `plugins.inputs`:

```toml
[[plugins]]
package = "example-plugin-name"
  [plugins.inputs]  
    "tacos" = "pollo"
```

> [📖 Learn more about plugin inputs in this post.](https://www.netlify.com/blog/2020/04/30/whats-a-netlify-build-plugin-series-part-1-using-build-plugins/?utm_source=blog&utm_medium=twilio-plugin-sd&utm_campaign=devex)

You'll want to enable Build Plugins for your site using the plugin, [check out the docs to learn how](https://docs.netlify.com/configure-builds/build-plugins/?utm_source=blog&utm_medium=twilio-plugin-sd&utm_campaign=devex#enable-build-plugins-beta).

## Wrapping up

Using Build Plugins to automate tasks can help us be more productive overall, and writing them can be an incredible amount of fun. (When I first started playing with them I wrote 3 in one night). 

You can check out [some of the plugins that have already been created](https://github.com/netlify/plugins) so far, or if you’d like to write your own and open source it, let us know so we can check it out and perhaps feature you!
