---
title: Pre-rendering with Angular Universal
description: In this post, we'll walk thru the quick 2-step process of
  pre-rendering with Angular Universal then deploy it to Netlify.
authors:
  - Tara Z. Manicsic
date: 2021-02-08
lastmod: 2021-02-04
topics:
  - tutorials
tags:
  - Angular
  - Pre-render
tweet: ""
format: blog
seo:
  metadescription: In this post, we'll walk thru the quick 2-step process of
    pre-rendering with Angular Universal then deploy it to Netlify.
---
This is going to be a quick one because pre-rendering with Angular Universal and deploying to Netlify are nice and easy. Being able to pre-render parts of your Angular application will give you content on the page for quick interaction for your users and something for the bots to crawl for better SEO.

> 📓 To learn more about pre-rendering and bots [check out this blog post!](https://www.netlify.com/blog/2016/11/22/prerendering-explained/?utm_source=blog&utm_medium=prerender-au-tzm&utm_campaign=devex)

[Angular Universal](https://angular.io/guide/universal) is Angular's answer to server-side rendering and pre-rendering your applications. It has a hybrid approach to rendering: pre-render what you can at build time then send some parts to be rendered into HTML on a server at request time. Here, we're going to look at how we can run a command to pre-render routes and deploy them to a [CDN](https://jamstack.org/glossary/cdn/) using Netlify.

> ⏭ Words are hard, I get it. So, to skip all this you can check out [the project repo](https://github.com/tzmanics/angular-universal-pre-render), or click this button to immediately deploy the site to Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://github.com/tzmanics/angular-universal-pre-render&utm_source=github&utm_medium=ng-prerender-tzm&utm_campaign=devex)

## That Whole Pre-rending Part

We only need to do two things to pre-render our existing Angular applications with Angular Universal.

### Step 1. Add Angular Universal

`ng add @nguniversal/express-engine`

This command will add Angular Universal by adding a few files to manage the new server for SSR. It also adds a few scripts to the `package.json`. One of those scripts runs the pre-rendering process which we'll talk about next!

### Step 2. Pre-rendering with Angular Universal

`npm run prerender`

Running the `prerender` command will build out the project then use [guess-parser](https://www.npmjs.com/package/guess-parser) to guess the application routes. Each of these routes is pre-rendered in HTML and that HTML file is saved in its own directory in `dist/<project name>/browser/`.

![pre-rendered assets file structure](/v3/img/blog/pre-render-file-struct.jpg "pre-rendered assets file structure")

## Netlify to Make it Live

Now that we have the project pre-rendered, let's make it live!

### Tell Netlify What to Do

```toml
[build]
  command = "npm run prerender"
  functions = "./functions"
  publish = "dist/angular-universal-pre-render/browser"
```

This project already had a [`netlify.toml` configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=blog&utm_medium=au-prerender-tzm&utm_campaign=devex) so we will update the `command` and `publish` strings.

> 🐙 Check out the commit where we made this change [in the example repo](https://github.com/tzmanics/angular-universal-pre-render/commit/2482169ad6f7603cbd2f0501fafbeb16f7dd2242).

### Deploy the Site

`npm i netlify-cli -g`

`netlify init`

`netlify open`

If the [Netlify CLI](https://docs.netlify.com/cli/get-started/?utm_source=blog&utm_medium=au-prerender-tzm&utm_campaign=devex) isn't already installed, we'll do that now. Once it's installed we can run `netlify init` to hook it up to a Netlify account and deploy it. With that setup, any time we push new code a deploy will be triggered. The `netlify open` command will open a browser window showing the project dashboard. Once the project is built we can open the browser dev tools and [throttle the connection](https://css-tricks.com/throttling-the-network/) or [disable JavaScript](https://developers.google.com/web/tools/chrome-devtools/javascript/disable) to see how quickly the pre-rendered content still gets served.

![screenshot of final site homepage](/v3/img/blog/final-site.jpg "final site homepage")

> 📓 To learn more about the deployment options for Angular, I've made [this blog post](https://www.netlify.com/blog/2019/09/23/first-steps-using-netlify-angular/?utm_source=blog&utm_medium=au-prerender-tzm&utm_campaign=devex) just for you (and everyone else).


## Your Turn

With that, you have all the resources you need to jump-start your Jamification process on your Angular site ;). Always feel free to check-in with other folks in the [Netlify Community](https://community.netlify.com/?utm_source=blog&utm_medium=prerender-au-tzm&utm_campaign=devex). I can't wait to see what you create! Happy coding 👩🏻‍💻!
