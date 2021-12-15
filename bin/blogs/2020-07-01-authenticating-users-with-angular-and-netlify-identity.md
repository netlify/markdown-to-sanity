---
title: Authenticating Users with Angular and Netlify Identity
description: In this post, we'll add login, add multiple external OAuth
  providers, and create user roles with just two lines of code!
authors:
  - Tara Z. Manicsic
date: 2020-07-07
lastmod: 2020-06-30T00:00:00.000Z
topics:
  - tutorials
tags:
  - Identity
  - Angular
tweet: ""
format: blog
seo:
  metatitle: Authenticating Users with Angular and Netlify Identity
  metadescription: In this post, we'll add login, add multiple external OAuth
    providers, and create user roles with just two lines of code!
---
Setting up login and user permissions doesn't have to be hard. Breaking that security, that part should be hard. I've had the opposite of both,
hard-to-code authentication and fragile security. So, I was stoked to work with
our
[Netlify Identity](https://docs.netlify.com/visitor-access/identity/?utm_source=blog&utm_medium=angular-identity-tzm&utm_campaign=devex) features. Let me give you a little preview. In this post we'll:

* add Netlify Identity login to an Angular Project
* add external OAuth providers
* assign user roles

[🐙 Here's the repo](https://github.com/tzmanics/angular-netlify-identity-demo) for the project that we'll be using today and the live site lives at
[angular-netlify-identity-demo.netlify.app](https://angular-netlify-identity-demo.netlify.app). Time to Netlify Identify (to be clear, it's Netlify Identity, but I couldn't
help it)!

## The Starter Project

For this demo we'll be using a project created with:

* the Angular CLI [🐙 <– commit where we incorporate it](https://github.com/tzmanics/angular-netlify-identity-demo/commit/71d6c9580b7359b9c9a7c2f1a930fecfcef02a25)
* [Scully](https://scully.io/), Angular Static Site Generator [🐙](https://github.com/tzmanics/angular-netlify-identity-demo/commit/d54a3990a45ac4d723c0dd649947fe9b6e143b07)
* [Netlify Edge](https://www.netlify.com/products/edge/?utm_source=blog&utm_medium=angular-identity-tzm&utm_campaign=devex) for deployment [🐙](https://github.com/tzmanics/angular-netlify-identity-demo/commit/5c3abb99a1007c15df9c17241f594a5b9b82316f)

It is a pre-rendered application, thanks to Scully, hosted on a CDN (Content Delivery Network), thanks to Netlify. We officially have a simple, Jamstack
site. We can now clone it locally and install the dependencies.

```bash
git clone https://github.com/tzmanics/angular-netlify-identity-demo
cd angular-netlify-identity-demo
npm install
```

Once that is set up we'll want to hook it up to a Netlify project. We can install the
[Netlify CLI](https://docs.netlify.com/cli/get-started/?utm_source=blog&utm_medium=angular-identity-tzm&utm_campaign=devex) then run the `netlify init` command to hook it up to a new project.

> 🙋🏻‍If you're new to Netlify, this command will get you signed up on Netlify as well!

```bash
npm install netlify-cli -g
netlify init
```

We haz a site!

![a screenshot of the project we have to far](/v3/img/blog/initial-project.jpg)

## Adding Login with Netlify Identity

To add login we only need TWO lines of code! I Shih Tzu not.

![a shih tzu giving side eye](/v3/img/blog/shihtzu.jpeg)

First, in the `index.html` file we will add a script that brings in the [Netlify Identity](https://docs.netlify.com/visitor-access/identity/?utm_source=blog&utm_medium=angular-identity-tzm&utm_campaign=devex) widget.

```diff-html
<!--src/index.html-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Angular Netlify Identity Demo</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway+Dots&display=swap"
      rel="stylesheet"
    />
+    <script
+      type="text/javascript"
+      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
+    ></script>
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

Then to add 'Log in' button we'll edit the template page it will live in. For this project that is `app.component.html`.

```diff-html
<!--src/app/app.component.html-->

<nav>
  <ul>
    <li>
+      <div class="login" data-netlify-identity-button></div>
    </li>
  </ul>
</nav>
<div class="content">
  <h1 class="title">Angular Netlify Identity Demo</h1>
  <iframe
    src="https://giphy.com/embed/IbHargNoRiQvmnGyj7"
    width="300px"
    height="250px"
    frameBorder="0"
  ></iframe>
<div class="text">
```

### Enabling Netlify Identity

The final step is enabling Netlify Identity on our project's Netlify dashboard.

![the Netlify Identity dashboard](/v3/img/blog/enable-identity.jpg)

I could write more, but we just need to click the 'Enable Identity' button. So, that's all I'll say. Nothing more, nothing less. Anything else I write would
just be more to read...oh, sorry. The video below shows how our empty button
gets populated with 'Login' once Netlify Identity is enabled.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ga0m0tdpGdE?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Adding External Providers

Now that we have Netlify Identity enabled, users have the ability to sign up and login with their emails. Creating new logins for every site you use can be
cumbersome, so many developers are turning to external authentication providers
for a faster and easier authentication process. Netlify Identity gives us the
option to add GitHub, GitLab, Google, and Bitbucket external OAuth integrations.

> 📖 You can read more about external provider authentication in [our docs](https://docs.netlify.com/visitor-access/identity/registration-login/?utm_source=blog&utm_medium=angular-identity-tzm&utm_campaign=devex#external-provider-authentication).

Going back to the Identity section of our Netlify site's dashboard, we'll need to click on the 'Settings and usage' button. Scrolling down to the
'Registration' section there is a box labeled 'External providers'. Click the
'Add provider' dropdown to select an external provider.

![dropdown of external providers](/v3/img/blog/external-providers.jpg)

When selected a pop-up window will open up and allow us to either use the default configurations or use our own credentials.

![the form for using your own external provider credentials](/v3/img/blog/own-credentials.jpg)

Using the default means that our visitors will see 'Netlify Identity' as the app requesting authorization. If we use our credentials they will see our GitHub,
Google, etc. app or site instead. Once we choose either option and provide our
info, if not using the defaults, we can refresh the page and see our new
authorization options.

![list of authorization options](/v3/img/blog/external-list.jpg)

Here's a video walking through the whole process.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dMhWfYYwB-k?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Assigning Roles

We now have a way for users to sign in. When they sign in we have their information and can easily assign them roles. We do this through another form on
our site's Identity dashboard. When users login or sign up they will show up on
the main page of the dashboard. We can click the user to go the the 'User
Information' page to see their information and assign or remove roles. When we
click the 'Edit settings' button all the user's information becomes editable.
'Roles' allows us to choose from a dropdown of roles (if any exist) or type in
new roles. If we need to remove roles we can click the 'x' next to that role to
remove it.

![the User metadata form](/v3/img/blog/roles.jpg)

Words are hard, so here's a video instead!

<iframe width="560" height="315" src="https://www.youtube.com/embed/b6oLG5mSbio?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What Just Happened?

Netlify is doing all the work behind the scenes with serverless functions. We just had to write two lines of code and press some buttons. That's good because
we have lots of other work today. I mean, *have* you watched Hamilton on Disney+ yet? Seriously though, spend less time and stress on authentication and use it
to give your users the features they're requesting.

In this post we:

* added Netlify Identity to our Angular application
* included external authorization providers to make sign up and login faster
* edited and added roles to our app's users

This is skimming the surface of what Netlify Identity can do. I highly recommend checking out the
[Netlify Identity documentation](https://docs.netlify.com/visitor-access/identity/registration-login/?utm_source=blog&utm_medium=angular-identity-tzm&utm_campaign=devex#external-provider-authentication) to learn more. In the meantime, I hope you have a great time *saving* time by skipping complicated authorization for your site. Happy coding 👩🏻‍💻!

## Resources for the Road

* [Netlify Identity](https://www.netlify.com/products/?utm_source=blog&utm_medium=angular-identity-tzm&utm_campaign=devex#identity)
* [Building an Angular Jamstack App with Scully](https://www.netlify.com/blog/2019/12/17/building-an-angular-jamstack-app-with-scully/?utm_source=blog&utm_medium=angular-identity-tzm&utm_campaign=devex)
* [GoTrue JS – bringing authentication to static sites with just 3kb of JS](https://www.netlify.com/blog/2018/12/07/gotrue-js-bringing-authentication-to-static-sites-with-just-3kb-of-js/?utm_source=blog&utm_medium=angular-identity-tzm&utm_campaign=devex)
* [Netlify Identity Docs](https://docs.netlify.com/visitor-access/identity/registration-login/?utm_source=blog&utm_medium=angular-identity-tzm&utm_campaign=devex#external-provider-authentication)
