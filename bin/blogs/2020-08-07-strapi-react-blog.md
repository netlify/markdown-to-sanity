---
title: >
  Deploy a Strapi and React Blog on Netlify
description: >
  Learn how to build a self-hosted, open-source blog. In this guide, you’ll learn how to deploy Strapi to Heroku & auto-deploy changes to your Netlify site.
authors:
  - Maxime Castres
date: 2020-08-11T00:00:00.000Z
lastmod: 2020-08-11T00:00:00.000Z
topics:
  - tutorials
tags:
  - strapi
  - tutorial
  - react
tweet: ""
format: blog
seo:
  metatitle: >
    Learn How To Deploy a Strapi-Powered React Blog to Netlify
  metadescription: >
    Learn how to build a self-hosted, open-source blog. In this guide, you’ll learn how to deploy Strapi to Heroku & auto-deploy changes to your Netlify site.
  ogimage: /img/blog/react-strapi-blog/og-image.png
relatedposts:
  - Create a Custom Back-End for Jamstack Apps with Strapi
  - Use a Custom Strapi Back-End to Build a Jamstack App
---

Have you ever wondered how a React blog could work while consuming a [Strapi](https://strapi.io/) API? Strapi is a 100% Javascript, fully customizable, and developer-first open-source headless CMS. Using Strapi, building self-hosted, customizable, and performant content APIs is more approachable than ever before.

In this tutorial, you’ll learn how to deploy a React blog on Netlify that fetches content from a Strapi instance, which will be deployed on [Heroku](https://www.heroku.com/), which is a cloud platform where you can host a Strapi server for free.

## Deploy a New Strapi Instance to Heroku

To deploy your Strapi instance you'll need:

  - A [free Heroku account](https://signup.heroku.com/) to run Strapi
  - A [free Cloudinary account](https://cloudinary.com/users/register/free) to host and deliver image assets

The Cloudinary account is required because Heroku will restart at least once a day, which would remove any files not tracked in source control (e.g. uploaded blog post images).

Once you have your Heroku and Cloudinary accounts set up, [click here to deploy a new Strapi instance on Heroku](https://heroku.com/deploy?template=https://github.com/strapi/strapi-starter-blog).

Once you have created your new Strapi instance, copy its URL for the next step.

## Deploy Your React Blog Frontend on Netlify

To deploy your React blog frontend you'll need:

  - A [free Netlify account](https://app.netlify.com/signup?utm_source=blog&utm_medium=strapi-react-blog-jl&utm_campaign=devex)

Netlify allows for a one-click deployment experience by cloning and deploying the starter repository. [Click here to deploy the Strapi React Blog starter to Netlify.](https://app.netlify.com/start/deploy?repository=https://github.com/strapi/strapi-starter-gatsby-blog)


<figure>
  <img alt="Deploy to Netlify workflow landing page." src="/img/blog/react-strapi-blog/deploy-to-netlify.jpg" />
  <figcaption>Connect your Github account to Netlify</figcaption>
</figure>

  
On the next screen, add your `API_URL`, which is the URL of your Strapi instance running on Heroku (e.g. `https://your-strapi-app.herokuapp.com`), without the trailing slash

<figure>
  <img alt="Deploy to Netlify workflow configuration page." src="/img/blog/react-strapi-blog/configure-deploy-to-netlify.jpg" />
  <figcaption>Enter your Strapi instance URL in the <code>API_URL</code> field</figcaption>
</figure>

Netlify will create a copy of the starter repository on your GitHub and deploy it to production!

<figure>
  <img alt="React blog deployed to Netlify." src="/img/blog/react-strapi-blog/strapi-blog-deployed.jpg" />
  <figcaption>Your deployed Strapi-powered React blog</figcaption>
</figure>

## Create New Articles in Strapi

When you have a new article in mind, dive into your Strapi instance to create a new post!

Head to the `/admin` route of your Strapi instance (e.g. `https://your-strapi-app.herokuapp.com/admin`) and log in. Click the "Articles" collection type to see your current list of articles.

<figure>
  <img alt="Articles listed in the Strapi UI." src="/img/blog/react-strapi-blog/strapi-articles.jpg" />
  <figcaption>Articles listed in the Strapi UI</figcaption>
</figure>

Click the "add article" button to create a new article.

<figure>
  <img alt="Creating a new article in the Strapi UI." src="/img/blog/react-strapi-blog/strapi-new-article.jpg" />
  <figcaption>Article creation in the Strapi UI</figcaption>
</figure>

After saving, go to your Netlify dashboard and deploy the site to see the new article live!

<figure>
  <img alt="New article displayed on the deployed site." src="/img/blog/react-strapi-blog/new-article-strapi-react.jpg" />
  <figcaption>The new article is visible on the deployed site</figcaption>
</figure>

> **Heads up!** If you want to know learn how the React blog was built, check out this tutorial on [how to build a React blog from scratch with Strapi](https://strapi.io/blog/build-a-blog-with-react-strapi-and-apollo).

## Automatically Redeploy to Netlify When Content Is Changed In Strapi

If you don’t want to manually deploy your site every time you add an article, you can create a [build hook](https://docs.netlify.com/configure-builds/build-hooks/) for your site.

<figure>
  <img alt="Configure Netlify build hooks." src="https://d33wubrfki0l68.cloudfront.net/51b3c2b9b2cb2eb70fd9631385a2b0d2bc60b1ea/45997/images/configure-builds-build-hooks.png" />
  <figcaption>Adding a build hook in the Netlify dashboard</figcaption>
</figure>

Copy your new build hook, then head to your Strapi dashboard and add it as a new [webhook](https://strapi.io/documentation/v3.x/concepts/webhooks.html) by visiting Settings > Webhooks.

<figure>
  <img alt="Create a new Strapi webhook." src="/img/blog/react-strapi-blog/strapi-webhook.jpg" />
  <figcaption>Create a new Strapi webhook in the Strapi UI</figcaption>
</figure>

Choose which events should trigger a rebuild, then save the webhook and make a change to see your Netlify site automatically redeploy!

## Edit Your Strapi Collection Types

For safety, Strapi doesn’t allow you to edit the structure of your data in production. If you want to modify the article collection type to have a new field, you’ll need to make modifications locally, push the changes in your repository, and deploy your application again.

To do this:

1. Clone the repository that was created when you deployed the site to Netlify
2. [Clone your Heroku project to your local machine](https://devcenter.heroku.com/articles/git-clone-heroku-app)

You can now run your Strapi server in development in order to edit collection types either through the admin UI or by [editing the model](https://strapi.io/documentation/v3.x/concepts/models.html). When you’re done, commit your changes and push it to Heroku.

```bash
git add .
git commit -am "make it better"
git push heroku master
```

## What to Do Next

There are several options for Strapi blog starters:

- [Gatsby](https://github.com/strapi/strapi-starter-gatsby-blog)
- [Next.js](https://github.com/strapi/strapi-starter-next-blog)
- [Vue.js](https://github.com/strapi/strapi-starter-vue-blog)
- [Nuxt.js](https://github.com/strapi/strapi-starter-nuxt-blog)
- [Angular](https://github.com/strapi/strapi-starter-angular-blog)

You can [learn more about Strapi in the docs](https://strapi.io/documentation/v3.x/getting-started/introduction.html). Happy building!
