---
title: 'Update on Scully: Angular''s Static Site Generator'
description: >-
  Angular now has a static site generator, Scully. Check out all the new
  features that have been added in the few months since its conception.
authors:
  - Tara Z. Manicsic
date: '2020-02-24'
topics:
  - tutorials
tags:
  - Angular
  - Scully
  - SSG
tweet: ''
format: blog
seo:
  metadescription: >-
    Angular now has a static site generator, Scully. Check out all the new
    features that have been added in the few months since its conception.
  metatitle: 'Update on Scully: Angular''s Static Site Generator'
---
If you've come to this post and are saying to yourself, 😲 "Wait! What? Angular has a static site generator?" Let me first catch you up with these two articles written by yours truly:

- [Introducing Scully: the Angular Static Site Generator](https://www.netlify.com/blog/2019/12/16/introducing-scully-the-angular-static-site-generator/?utm_source=blog&utm_medium=scully-update_tzm&utm_campaign=devex)
- [Building an Angular Jamstack App with Scully](https://www.netlify.com/blog/2019/12/17/building-an-angular-jamstack-app-with-scully/?utm_source=blog&utm_medium=scully-update_tzm&utm_campaign=devex)

Ok, now that we're all caught up. Let's jump into some highlights on what the [Hero Devs](https://herodevs.com/) team has been up to since they released the alpha version of Scully a few months ago. If you want to keep up-to-date you can always follow the [Scully repo](https://github.com/scullyio/scully) or their [twitter account](https://twitter.com/scullyio?lang=en). Here and now we'll be looking at these exciting changes:

- 🔄 Adding `TransferStateService`
- 📉 Performance statistics
- 🎛 Scully configuration
- 🗂 Multiple folder support with markdown files
- 🌈 Adding Angular CSS scoping
- 🕸 `baseFilter` & other command line options
- 👁 Watch mode
- 🎨 The new logo
- 📝 Spanish docs

Phew, this is quite a list, so let's jump in!

## 🔄 Adding `TransferStateService`

Ok, this one had to be first because it's very exciting. `TransferStateService` gives you the ability to `getState` and `setState`, transferring the state from the Angular application to the static site Scully rendered. Even cooler, you can load the state on subsequent route changes _after_ the initial page load! Here is what the code looks like:

```js
// fires once, returning an observable right after page navigation is finished
getState<T>(name: string): Observable<T>

// sets the values to the property key
setState<T>(name: string, val: T): void
```

A note from one of the developers, [Sander Elias](https://github.com/SanderElias):

> "You might notice that it runs SYNC on the first load, so there is no flash of content, and it now is only active [on] routes that actually use getState."

There's also a pretty interesting [thread on one of the PRs](https://github.com/scullyio/scully/pull/138) if you want some transfer state knowledge 🧠. 

🐙 [https://github.com/scullyio/scully/blob/master/docs/scully-lib-core.md#transfer-state](https://github.com/scullyio/scully/blob/master/docs/scully-lib-core.md#transfer-state)

## 📉 Performance statistics

When using Scully you have already been able to get the information on the amount of time it takes to generate your pages. The team knows how much we like numbers and data so they added a few more metrics. The output from running Scully will now tell you the time it takes for finding the routes in the app, pulling in the route-data, and rendering the pages. 

![scully performance metric output](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1582128060/Screen_Shot_2020-02-19_at_10.57.31_AM_yrmrmf.jpg)

## 🎛 Scully configuration

At the center of every Scully project lies the `scully.config.js` file. Take a look at everything you have the ability to configure.

```js
export interface ScullyConfig {
  projectRoot: string;
  homeFolder: string;
  outDir?: string;
  distFolder?: string;
  routes: RouteConfig;
  extraRoutes?: string[];
  appPort: number;
  staticport: number;
  puppeteerLaunchOptions?: LaunchOptions;
  hostName?: string;
  hostUrl?: string;
  guessParserOptions?: { excludedFiles: string[] };
}
```

There's a whole doc diving into what of each these properties does [in their repo](https://github.com/scullyio/scully/blob/master/docs/scully-configuration.md). Let's break down a few interesting ones here too:

- `routes` – There are two types of routes that Scully sorts your routes into: handled (routes with static params) and unhandled (routes with dynamic data). Now, Scully also creates `routes.config` _first_ so it is available during generation.

- `extraRoutes` – This gives you the ability to add an array of unhandled routes for Scully to discover from AngularJS, React, Vue or any other framework router. 

```
extraRoutes: ['/foo/id', new Promise('/bar/barId'), new Promise(['/foo/fooId', '/bar/id'])];
```

- `hostUrl` – Have a preferred server? Provide this setting and Scully will connect to the server and search there for your running app.

- `guessParserOptions: excludedFiles` – This option tells the `guess-parser` library to ignore files in the discovery process.

If you want to check out how to combine Scully with other tools or add resources to help show everyone else how to use Scully with your tool, you can check out the [Utils](https://github.com/scullyio/scully/blob/master/docs/utils.md) section of their documentation.

## 🗂 Multiple folder support with markdown files

When Scully's blog generator first came out it only supported a flat folder of markdown files. Now if you have a more layered file structure like /blog/year/category/post, Scully will pre-render them all. As [Antony](https://github.com/Ant59) puts it,

> "This would be super-useful for documentation site too. I would like to be able to just copy all of my directory-structured Markdown to Scully, register a single route to point to it, and have Scully generate HTML for all the Markdown files at the correct paths."

That's exactly what the team had in mind. If you look at the [code](https://github.com/scullyio/scully/pull/290/files) you can see they basically look to see if it's a directory and if so they add the contents. Doing this over and over until there are no more directories ✅.

## 🌈 Adding Angular CSS scoping

In Angular styling is scoped so styles specified in the `@Component` metadata are only applied to the template of that particular component. You can read about it more in their [documentation](https://angular.io/guide/component-styles#style-scope). Before [this PR](https://github.com/scullyio/scully/pull/250) you weren't able to style the content rendered through the `<scully-content>` component using the css of its containg component. Now you can!

![can and will meme](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1582605019/can_fqmr02.jpg)

## 🕸 `baseFilter` option & other command line options

There are some great command line options and you can learn all about them [in the docs](https://github.com/scullyio/scully/blob/master/docs/scully-cmd-line.md). One, in particular `baseFilter || --bf` which tells Scully to only render a specific route. This can save you time when you don't want to pre-render your whole application. 

The team pointed out that you can even use this command to generate, say, all the user files from your app.

```
npx scully --baseFilter /user
```

>this is using `npx` which is an npm tool that lets you use a package without having to install, more info [here](https://www.npmjs.com/package/npx).

I want to call out a few more command line options that are useful.


- `--configFile || --cf` use this if you have a different config file you want to use
- `--open || --o` option that will open your project in the browser
- `--project || --pr` lets you specify a different project instead of the default Angular CLI project

## 👁 Watch mode

The watch mode in Scully spins up a server for you that listens for changes or manual restarts to re-serve your app. Now, this mode uses a cache for the routes. This way it does not need to traverse your entire app every time.

If we wanted to use Scully to pre-render our site, keep the server updated with each change _and_ use an SSL server with a SSL cert (it's a lot but I figured, why just put a simple line of code here? 😋), here's what that would look like:

```
npx scully watch --ssl --ssl-cer=./url/to/file
```

## 🎨 The new logo

Does a project really exist if it doesn't have a logo? I don't think so either. Thanks to the talented [Stefanie Fluin](https://www.stefaniefluin.com/) the Scully project _does_ exist! They now have an awesome logo. Peep it:

![green rounded triangle and white s Scully logo](https://github.com/scullyio/scully/raw/master/assets/logos/PNG/scullyio-logo.png)

## 📝 Spanish docs

To make the code base more accessible the Hero Dev team released a Spanish translation of their getting started docs.

![screenshot of docs in spanish](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1581792742/Screen_Shot_2020-02-13_at_7.23.22_AM_yqg7a4.jpg)

It's refreshing to see this happen so early in the life of a project. They are setting the foundation to make it accessible in more languages in the future.

## That's it...for now

The Hero Devs team is still actively updating and expanding on the Scully project. Have ideas for features, ways to improve existing features, or want to contribute? Check out their [repo](https://github.com/scullyio/scully/issues) to do all these things! I look forward to seeing the JAMstack + Angular possibilities as we watch this ecosystem grow. Happy coding!

## References for the Road
- [What's Angular in the JAMstack? It Sounds Delicious!](https://www.netlify.com/blog/2019/10/30/whats-angular-in-the-jamstack-it-sounds-delicious/?utm_source=blog&utm_medium=scully-update_tzm&utm_campaign=devex)
- [Create a Static Site Using Angular & Scully](https://www.learnwithjason.dev/create-a-static-site-using-angular-scully)
- [First Steps Using Netlify & Angular](https://www.netlify.com/blog/2019/09/23/first-steps-using-netlify-angular/?utm_source=blog&utm_medium=scully-update_tzm&utm_campaign=devex) 
