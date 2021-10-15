---
title: Integrating Netlify Identity into your Next.js apps
description: In this post you'll learn about how to use the Netlify Identity
  Widget in your Next.js projects!
authors:
  - Cassidy Williams
date: 2020-07-15T00:00:00.000Z
lastmod: 2020-07-15T00:00:00.000Z
topics:
  - tutorials
tags:
  - nextjs
tweet: ""
format: blog
seo:
  metatitle: Integrating Netlify Identity into your Next.js apps
  ogimage: /img/blog/identitynext.png
---
Today I’d like to show you how to add login/logout functionality in a Next.js application!

What’s great about the [Netlify Identity Widget](https://github.com/netlify/netlify-identity-widget) is that it’s open source, and super easy to drop in to most frameworks to enable authentication in your Jamstack apps.

## Starting fresh

You can follow this tutorial with your own projects, but if you’d like to start from the ground up, you can use this [Next.js + Netlify starter project](https://github.com/cassidoo/next-netlify-starter)! It sets up your `netlify.toml` file and some very basic starter components that you can work off of.

Once you've deployed your project, you have to enable Netlify Identity! Head over to your project on Netlify and click "Identity":

![Netlify Identity in your Project Settings](/img/blog/screen-shot-2020-07-13-at-7.26.10-pm.png "Netlify Identity in your Project Settings")

Click "Enable Identity" and then click the "Settings and usage" button that appears on the next page.

![Options for setting up Identity in your project](/img/blog/screen-shot-2020-07-13-at-7.28.42-pm.png "Options for setting up Identity in your project")

There are plenty of options here for adding in certain OAuth providers, limiting registration, setting up confirmation emails, and more. You can leave all of this to the defaults if you'd like, but it's worth checking out if you haven't used it before.

Once this is set up, save your site's URL, because you'll need it later! Now let's jump to your code.

## Installing the Netlify Identity Widget

Installing the widget into your application is one install command, using `yarn` or `npm` depending on your preference:

```bash
yarn add netlify-identity-widget
# or
npm install netlify-identity-widget
```

## Adding a `netlifyAuth` object

Create a `netlifyAuth.js` file at the top level of your application (or whatever you’d prefer), and stick this code in there:

```js
import netlifyIdentity from 'netlify-identity-widget'

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  initialize(callback) {
    window.netlifyIdentity = netlifyIdentity
    netlifyIdentity.on('init', (user) => {
      callback(user)
    })
    netlifyIdentity.init()
  },
  authenticate(callback) {
    this.isAuthenticated = true
    netlifyIdentity.open()
    netlifyIdentity.on('login', (user) => {
      this.user = user
      callback(user)
      netlifyIdentity.close()
    })
  },
  signout(callback) {
    this.isAuthenticated = false
    netlifyIdentity.logout()
    netlifyIdentity.on('logout', () => {
      this.user = null
      callback()
    })
  },
}

export default netlifyAuth
```

This will make it a little easier for us to use the functions built in to the widget. There’s several different events that you can use, and you can [check out the docs here](https://github.com/netlify/netlify-identity-widget#module-api) if you’d like to read more.

## Using the widget

Import `useState`,  `useEffect`, and our auth module at the top of your file:

```js
import { useEffect, useState } from 'react'
import netlifyAuth from '../netlifyAuth.js'
```

Now, set up a logged in state, and an effect for initializing the widget on the page.

```js
let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)

useEffect(() => {
  netlifyAuth.initialize((user) => {
    setLoggedIn(!!user)
  })
}, [loggedIn])
```

This calls the `initialize` function that we set up in our auth module as soon as the page is mounted. If a user is logged in already, it sets the `loggedIn` state to `true`, otherwise it’s `false`.

Now, inside of your return, you can use the `loggedIn` state to render different content for logged in and logged out users:

```jsx
{loggedIn ? (
  <div>
    You are logged in!
  </div>
) : (
  <button>
    Log in here.
  </button>
)}
```

## Add login and logout functionality

Add a state variable to the top of your component for the user’s data:

```js
let [user, setUser] = useState(null)
```

Then, add these functions to your component:

```jsx
let login = () => {
  netlifyAuth.authenticate((user) => {
    setLoggedIn(!!user)
    setUser(user)
    netlifyAuth.closeModal()
  })
}

let logout = () => {
  netlifyAuth.signout(() => {
    setLoggedIn(false)
    setUser(null)
  })
}
```

And an `onClick` to your button:

```diff-jsx
+ <button onClick={login}>
   Log in here.
  </button>
```

Now, you can log in! You'll have to add your site's URL in the modal the first time you run it locally and actually register with an email.

You can update your conditional rendering a little more now, too, to include user data and a sign-out button as well.

```diff-jsx
{loggedIn ? (
  <div>
    You are logged in!
+   {user && <>Welcome {user?.user_metadata.full_name}!</>}
    <br /> 
+   <button onClick={logout}>
      Log out here.
    </button>
  </div>
) : (
  <button onClick={login}>
    Log in here.
  </button>
)}
```

You can also now update your initial `useEffect` that we made to include the `user` state as well, if you’d like:

```diff-jsx
useEffect(() => {
  netlifyAuth.initialize((user) => {
    setLoggedIn(!!user)
+   setUser(user)
  })
}, [loggedIn])
```

## Seeing it in action

This is just the tip of the iceberg for how much you can do with the Netlify Identity Widget in Next.js. You can add routing/redirects based on login state, or custom hooks for widget functionality, you can style the modal to match your website’s theme, and even set your site's locale based on the user.

Once you've pushed your project live to Netlify, you can go to your app's Identity Settings where you can add as many auth providers as you'd like, limit registration, add CMS settings, and customize emails sent to your users.

![](/img/blog/screen-shot-2020-07-05-at-4.35.59-pm.png "Adding different providers and setting up authentication providers")

I put together a [demo project](https://members-only.netlify.app/) using the Identity Widget if you'd like to see how it works and roll your own:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/members-only&utm_source=github&utm_medium=identitystarter-cs&utm_campaign=devex)

(This will open up a dialog for you to start a new Netlify website based on [this project](https://github.com/cassidoo/members-only), and will make a new repository based on this project in your account.)
