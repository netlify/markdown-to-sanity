---
title: How to setup serverless OAuth Flows with Netlify Functions & Intercom
description: >-
  This tutorial demonstrates how to build OAuth flow with Intercom, simple-outh2
  and Netlify Functions
authors:
  - David Wells
date: '2018-07-30'
topics:
  - tutorials
tags:
  - serverless
  - functions
  - oauth
  - intercom
  - jamstack
tweet: How to setup serverless OAuth Flows with Netlify Functions & Intercom
format: blog
image: /img/press/logos/logomark-light.png
---

OAuth is everywhere. The ubiquitous "Login with Facebook, Twitter, Github, etc." can be seen in almost every web app we come across. Tools like Auth0, Netlify Identity, Firebase and Okta make it pretty simple to add these login buttons to most apps.

But, what if we need some custom functionality for our app these identity tools don't provide out of the box?

What if we need an third party OAuth provider that they don't currently support? (Login with friendster anyone?)

Like every answer I will give, **you can write a serverless function to handle that**!

We've previously explored [how to building serverless CRUD apps with FaunaDB](/blog/2018/07/09/building-serverless-crud-apps-with-netlify-functions--faunadb/), and [how serverless functions work together with Identity](/blog/2018/03/29/jamstack-architecture-on-netlify-how-identity-and-functions-work-together/) on Netlify, but today we're going a step further and discuss serverless OAuth flows.

This post will focus on how to use simple serverless functions to handle OAuth login flows for your application. We will be using [Intercom](https://www.intercom.com/) in this post, but the same pattern applies to any OAuth provider you might need for your application.

Let's see how we can use [Intercom](https://intercom.com/) alongside [Netlify Functions](/docs/functions/) to build a "Connect with intercom" button for our application.

All the code used in the post can be [found here in the repo](https://github.com/DavidWells/intercom-netlify-oauth/).

Without further ado, let's dive in.

<!-- MARKDOWN-MAGIC:START (REMOTE:url=https://raw.githubusercontent.com/DavidWells/intercom-netlify-oauth/master/README.md) -->
## Netlify + Intercom OAuth &nbsp;&nbsp;&nbsp;<a href="https://app.netlify.com/start/deploy?repository=https://github.com/davidwells/intercom-netlify-oauth"><img src="https://www.netlify.com/img/deploy/button.svg"></a>

Add 'login with Intercom' via Netlify Functions & OAuth!

- [About the project](#about-the-project)
- [How to install and setup](#how-to-install-and-setup)
- [Running the project locally](#running-the-project-locally)
- [Deploying](#deploying)
- [How it works with Netlify Functions](#how-it-works-with-netlify-functions)
  * [auth.js function](#authjs-function)
  * [auth-callback.js function](#auth-callbackjs-function)

## About the project

This project sets up a "login with Intercom" OAuth flow using Netlify Functions.

Here is a quick demo of the login flow, and the OAuth Access data you get back:

![Intercom oauth demo](https://user-images.githubusercontent.com/532272/42738995-7a8de2a0-8843-11e8-8179-d1865ded82ab.gif)

You can leverage this project to wire up Intercom (or other OAuth providers) login with your application.

> TLDR; [Watch the 11 minute video](https://www.youtube.com/watch?v=HuIS6jvK8S8) explaining **everything**

<iframe width="560" height="315" src="https://www.youtube.com/embed/zErvY08uNM0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


<p>Let's get started with how to get setup with the repo and with Intercom.</p>

## How to install and setup

1. **Clone down the repository**

    ```bash
    git clone git@github.com:DavidWells/intercom-netlify-oauth.git
    ```

2. **Install the dependencies**

    ```bash
    npm install
    ```

3. **Create an Intercom OAuth app**

    Lets go ahead and setup the Intercom app we will need!

    [Create an Intercom OAuth app here](https://app.intercom.com/developers/)

    You need to enable a 'test' app in your account. It's a tricky to find but you can create a TEST app in your Intercom account under `Settings > General`

    `https://app.intercom.com/a/apps/your-app-id/settings/general`

    ![intercom-test-app-setup](https://user-images.githubusercontent.com/532272/42739711-0ec30506-8851-11e8-8c0a-b4b1d5bd4174.jpg)

    After enabling the test app, you can find it listed in your [intercom developer portal](https://app.intercom.com/developers/).

    We now need to configure the test app.

    Input the live "WEBSITE URL" and "REDIRECT URLS" in the app edit screen.

    ![itercom-oauth-app-settings](https://user-images.githubusercontent.com/532272/42740025-0ea5833c-8856-11e8-827a-369189b951a1.jpg)

    You will want to have your live Netlify site URL and `localhost:3000` setup to handle the redirects for local development.

    If you haven't deployed to Netlify yet, just insert a placeholder URL like `http://my-temp-site.com` but **remember to change this once your Netlify site is live with the correct URL**

    Our demo app has these `REDIRECT URLS` values that are comma separated

    ```bash
    https://intercom-login-example.netlify.com/.netlify/functions/auth-callback,
    http://localhost:3000/.netlify/functions/auth-callback
    ```

    Great we are all configured over here.

4. **Grab your the required config values**

    We need our Intercom app values to configure our function environment variables.

    Navigate back to the main OAuth screen and grab the **App ID**, **Client ID**, and **Client Secret** values. We will need these to run the app locally and when deploying to Netlify.

    ![intercom-config-values](https://user-images.githubusercontent.com/532272/42739965-25d15c26-8855-11e8-925b-105c1fa381f5.jpg)

## Running the project locally

Because we are using `netlify-lambda` to build & serve functions locally, we can work on this project without needing to redeploy to reflect changes!

We need to set an Intercom app id and OAuth client id + secret in your terminal environment for the  functions to connect to your Intercom app.

After creating and configuring your [Intercom OAuth app](https://app.intercom.com/developers/), it's time to plugin the required environment variables into your local terminal session.

On linux/MacOS, run the following command in your terminal:

```bash
export INTERCOM_APP_ID=INTERCOM_APP_ID
export INTERCOM_CLIENT_ID=INTERCOM_CLIENT_ID
export INTERCOM_CLIENT_SECRET=INTERCOM_CLIENT_SECRET
```

If you are on a window machine, set the environment variable like so:

```bash
set INTERCOM_APP_ID=INTERCOM_APP_ID
set INTERCOM_CLIENT_ID=INTERCOM_CLIENT_ID
set INTERCOM_CLIENT_SECRET=INTERCOM_CLIENT_SECRET
```

Then run the start command

```bash
npm start
```

This will boot up our serverless functions to run locally for development. You can now login via your Intercom application and see the token data returned.

Making edits to the functions in the `/functions` will hot reload the server and you can iterate on building your custom logic.

## Deploying

Use the one click "deploy to Netlify" button to launch this!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/davidwells/intercom-netlify-oauth)

Alternatively, you can connect this repo with your Netlify account and add in your values.

In `https://app.netlify.com/sites/YOUR-SITE-SLUG/settings/deploys` add the  `INTERCOM_APP_ID`, `INTERCOM_CLIENT_ID`, and `INTERCOM_CLIENT_SECRET` values to the "Build environment variables" section of settings

![intercom-deploy-settings](https://user-images.githubusercontent.com/532272/42740147-ece388c8-8857-11e8-93af-a1dd721e345a.jpg)

After your site is deployed, you should be able to test your Intercom login flow.

## How it works with Netlify Functions

Once again, serverless functions come to the rescue!

We will be using 2 functions to handle the entire OAuth flow with Intercom.

**Here is a diagram of what is happening:**

![Intercom oauth netlify](https://user-images.githubusercontent.com/532272/42144429-d2717f24-7d6f-11e8-8619-c1bec1562991.png)

1. First the `auth.js` function is triggered & redirects the user to Intercom
2. The user logs in via Intercom and is redirected back to `auth-callback.js` function with an **auth grant code**
3. `auth-callback.js` takes the **auth grant code** and calls back into Intercom's API to exchange it for an **AccessToken**
4. `auth-callback.js` now has the **AccessToken** to make any API calls it would like back into the Intercom App.

This flow uses the [Authorization Code Grant](https://tools.ietf.org/html/draft-ietf-oauth-v2-31#section-4.1) flow. For more information on OAuth 2.0, [Watch this video](https://www.youtube.com/watch?v=CPbvxxslDTU)

Let's dive into the individual functions and how they work.

### auth.js function

The `auth.js` function creates an `authorizationURI` using the [`simple-oauth2` npm module](https://www.npmjs.com/package/simple-oauth2) and redirects the user to the Intercom login screen.

Inside of the `auth.js` function, we set the `header.Location` in the lambda response and that will redirect the user to the `authorizationURI`, a.k.a the Intercom oauth login screen.

<!-- The below code snippet is automatically added from ./functions/auth.js -->
```js
/* code from /functions/auth.js */
import oauth2, { config } from './utils/oauth'

/* Do initial auth redirect */
exports.handler = (event, context, callback) => {
  /* Generate authorizationURI */
  const authorizationURI = oauth2.authorizationCode.authorizeURL({
    redirect_uri: config.redirect_uri,
    /* Specify how your app needs to access the user’s account. http://bit.ly/intercom-scopes */
    scope: '',
    /* State helps mitigate CSRF attacks & Restore the previous state of your app */
    state: '',
  })

  /* Redirect user to authorizationURI */
  const response = {
    statusCode: 302,
    headers: {
      Location: authorizationURI,
      'Cache-Control': 'no-cache' // Disable caching of this response
    },
    body: '' // return body for local dev
  }

  return callback(null, response)
}
```

### auth-callback.js function

The `auth-callback.js` function handles the authorization grant code returned from the successful Intercom login.

It then calls `oauth2.authorizationCode.getToken` to get a valid `accessToken` from Intercom.

Once you have the valid accessToken, you can store it and make authenticated calls on behalf of the user to the Intercom API.

<!-- The below code snippet is automatically added from ./functions/auth-callback.js -->
```js
/* code from /functions/auth-callback.js */
import getUserData from './utils/getUserData'
import oauth2, { config } from './utils/oauth'

/* Function to handle intercom auth callback */
exports.handler = (event, context, callback) => {
  const code = event.queryStringParameters.code
  /* state helps mitigate CSRF attacks & Restore the previous state of your app */
  const state = event.queryStringParameters.state

  /* Take the grant code and exchange for an accessToken */
  oauth2.authorizationCode.getToken({
    code: code,
    redirect_uri: config.redirect_uri,
    client_id: config.clientId,
    client_secret: config.clientSecret
  })
    .then((result) => {
      const token = oauth2.accessToken.create(result)
      console.log('accessToken', token)
      return token
    })
    // Get more info about intercom user
    .then(getUserData)
    // Do stuff with user data & token
    .then((result) => {
      console.log('auth token', result.token)
      // Do stuff with user data
      console.log('user data', result.data)
      // Do other custom stuff
      console.log('state', state)
      // return results to browser
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(result)
      })
    })
    .catch((error) => {
      console.log('Access Token Error', error.message)
      console.log(error)
      return callback(null, {
        statusCode: error.statusCode || 500,
        body: JSON.stringify({
          error: error.message,
        })
      })
    })
}
```

Using two simple serverless Lambda functions, we can now handle logins via Intercom or any other third party OAuth provider.

That's pretty nifty!

<!-- MARKDOWN-MAGIC:END -->

### Wrapping Up

This pattern can be used to connect with any number of third party OAuth providers that you might need for your next application.

We hope you give Netlify Functions a spin and see all the cool things you can build.
