---
title: Ship JavaScript where it counts with Vite + Partial Hydration
description: Learn what an “opt in” mindset can do for our JavaScript bundles,
  how Vite makes component hydration so dang easy, and what simple SSGs like
  11ty can do for prerendering.
authors:
  - Ben Holmes
date: 2021-11-12
lastmod: 2021-11-09
topics:
  - tutorials
tags:
  - vite
  - Eleventy
tweet: ""
format: blog
seo:
  ogimage: /v3/img/blog/ben-holmes-og.png
  metatitle: How to build speedy sites with Vite + partial hydration
  metadescription: Learn what an “opt in” mindset can do for our JavaScript
    bundles, how Vite makes component hydration so dang easy, and what simple
    SSGs like 11ty can do for prerendering.
---
*Based on the Jamstack Conf talk: [The 11ty, Vite and JAM sandwich](https://jamstackconf.com/talk/31cadaf67b08/the-11ty-web-component-and-jam-sandwich-a-recipe-for-making-the-static-interactive/)*

The Jamstack saw a pretty big shift after this year’s [Jamstack Conf](https://jamstackconf.com/). Where we used to see JS-intensive single page apps getting all the love, we’re now seeing a focus on “getting back to basics” and “partially hydrating our websites.” This is all thanks to a single build tool in my opinion: **[Vite](https://vitejs.dev/).**

I hope you’re hungry, because we’re exploring:

* Why we should bridge Jamstack’s MPA vs SPA divide
* What an “opt in” mindset can do for our JavaScript bundles
* How Vite makes component hydration so dang easy
* What simple SSGs like 11ty can do for prerendering

Let’s dig in 😋

## The Jamstack’s great (and tasty) divide

There are 2 prevailing ways to enjoy the Jamstack these days:

1. **🥗 Keep things light with a bundle-less Jekyll or 11ty summer salad.** This sticks with those HTML template leafy greens using Markdown, [Liquid](https://shopify.github.io/liquid/), or [Nunjucks](https://mozilla.github.io/nunjucks/), with a medley of SCSS veggies to add a pop of color. This certainly keeps load times down and learning curves shallow. But without a pipeline for JS bundling out-of-the-box, it does make complex user interactions more difficult to pull off.
2. **🍔 Reach for that juicy, JS-driven burger.** These often come between the buns of a [single page app (SPA)](https://bholmes.dev/blog/spas-clientside-routing/), opening the door for shared JS state between routes and animated page transitions. This plethora of features still comes with some famous caveats: a steeper learning curve for new devs, and slower load times as your browser’s arteries start feeling those bundled KBs.

Both of these meals have their place, but as [Rich Harris put it](https://www.youtube.com/watch?v=860d8usGC0o):

> We talk about documents (salads) vs. apps (burgers) as though it is a dichotomy, but it's not. It's a spectrum.

So why should we be asked to choose a React-based burger for every meal / route on our site, only to find the learning curve too demanding? Or stick with a Jekyll summer salad every time, only to regret it when we need beefy multi-step forms and the like?

Well, let’s explore what the world of “partial hydration” and “islands architecture” can do for us.

## A quick primer on hydration

If you haven’t heard the term “hydration” before, here’s a step-by-step of the hydration process:

1. **⚙️ Pre-render your components** to static HTML + CSS at build time.Popular frameworks like Gatsby and Nuxt handle this for you.
2. **✉️ Send those same components to the client** as a JavaScript bundle
3. **🔎 Your browser finds the root** of that pre-rendered markup, matches it up with your JS bundle, and…
4. **💧 Hydrates that markup with interactivity.** These make your button clicks actually do something. Your UI framework of choice typically has a helper method for this hydration dance, like [React’s `ReactDOM.hydrate(…)`](https://reactjs.org/docs/react-dom.html)

This offers a pretty nice win-win: show the user some HTML and CSS while your resources load, and bring interactivity once that JS is parsed. But remember, JS can slow down the page while it’s parsing! So if you’re shipping components for every DOM element on the page, this could mean a slower [time to interactive metric](https://web.dev/interactive/). If only we could pick and choose which elements actually need that hydration…

## How partial hydration changes “opt out” to “opt in”

Right now, the Jamstack landscape definitely relies on an opt-out mindset. Too much JavaScript on initial page load? Opt-out with code splitting and [lazy ESM loading](https://bholmes.dev/blog/how-es-modules-have-redefined-web-development/). Need less JavaScript on your company’s splash page? Opt-out with server-rendered components.

This works fine for addressing performance concerns as your team discovers them. Still, as you might imagine, this lets other developers stick with the defaults and ignore these inefficiencies. Roughly 95% of people stick with default settings on average. So as long as DX (developer experience) is rock-solid, these UX performance concerns could go unnoticed 😬

The world of partial hydration introduced by [Astro](https://astro.build/), [Slinkity](https://slinkity.dev/) + [11ty](https://www.11ty.dev/), or [Îles](https://iles-docs.netlify.app/) flips that opt-out to an opt-in. Too much JavaScript on initial page load? Well, you’ll need to opt-in to JavaScript hydration for your UI components to create that problem! These frameworks default to no JavaScript shipped for your React, Vue, Svelte, etc, with hydration “modes” to decide how and when those resources should be loaded (if at all). This sensible default adds slightly more developer friction, but offers an upside for end user experience.

## Let’s render our first component with Vite

Now that we understand hydration a bit better, let’s grab our favorite framework beverage and get going 💧

### What is Vite?

For those unaware, Vite is a new sort of build tool that’s meant to replace both your existing build setup and your local debugging experience. You can think of it like a “glue” between 2 powerful bundlers (Esbuild and Rollup) and a dev server. This integration offers all sorts of benefits, but here’s the main takeaway: **since Vite knows which page you’re visiting in the browser, it will only load resources for that page.** This avoids needlessly bundling your entire site into a single `main.js` file. Your `.html` files are the entrypoint here, so Vite can efficiently ignore resources you don’t need to see 💪

> **Extended reading:** this resource by Harlan Wilton is an excellent [comparison on Vite vs Webpack](https://vitejs.dev/), complete with comparative diagrams 📈

### Building a simple create-react-app clone

Let’s load our first component with Vite. We’ll start with an empty directory and install our dependencies like so:

```
npm init -y # create a package.json with default settings
npm i vite react react-dom # add deps for Vite and React
```

We’re using React here, but the process should be similar for your framework of choice!

Now, let’s write a simple component to render to the page. We’ll use a `GlassCounter` here to track how hydrated we are. I’d also recommend placing this in an `_includes` folder. No, this isn’t required for Vite! It’ll just put us in a good place once we try 11ty later on 😉

```jsx
// _includes/GlassCounter.jsx
import React, { useState } from 'react'

function GlassCounter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <p>You've had {count} glasses of water 💧</p>
      <button onClick={() => setCount(count + 1)}>Add one</button>
    </div>
  )
}

export default GlassCounter
```

Now, we can scaffold a basic `index.html` page with a `script` tag like so:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jam with Vite</title>
</head>
<body>
  <!--render our React component here 👇-->
  <div id="root"></div>

  <!--type="module" lets us use ESM import syntax in the browser-->
  <script type="module">
    // yes, we can just import .jsx directly here!
    import Component from "./_includes/GlassCounter.jsx";
    // we can import node_modules too
    import React from 'react';
    import ReactDOM from 'react-dom';
    const root = document.getElementById('root');
    ReactDOM.render(React.createElement(Component), root);
  </script>
</body>
</html>
```

That’s all there is to it! No need for [Babel](https://babeljs.io/) transforms or [Webpack](https://webpack.js.org/) configs. Vite is pre-configured to resolve a number of resources out-of-the-box, including:

* `jsx` files
* `node_modules` imports (aka any import without a leading `/` or `./`)
* `scss` or `css` imported into JavaScript

Here’s how our project directory should look now:

```
_includes/
  GlassCounter.jsx
index.html
package.json
package-lock.json
```

To view this page in the browser, we’ll run the `vite` command from our terminal:

```bash
npx vite
```

And you should see this nice output to try the dev server:

```
vite vX.X.X dev server running at:

> Local: http://localhost:3000/
> Network: use `--host` to expose

ready in XXXms.
```

I invite you to play with live reloading, [adding the HMR plugin](https://github.com/vitejs/vite/tree/main/packages/plugin-react), trying out CSS and [CSS modules](https://vitejs.dev/guide/features.html#css-modules)… all the Vite features that just work ™️

## Bringing in prerendering + hydration

That makes for a great tech demo. But you’ll notice we’re not really “hydrating” our component. We’re rendering the page top-to-bottom using JS, without any HTML prerendering for those initial page load benefits.

For this, let’s reach for our beautifully simple summer salad: [11ty](https://www.11ty.dev/). 11ty (also written as Eleventy) is a capable static site generator that supports every HTML template you could want. If you’re interested, I’d recommend exploring [11ty.rocks](https://11ty.rocks/) for extended reading!

### Using shortcodes

Let’s refactor that `index.html` from earlier to use a single “shortcode” statement:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jam with Vite</title>
</head>
<body>
  {% react 'GlassCounter.jsx' %}
</body>
</html>
```

[Shortcodes](https://www.11ty.dev/docs/shortcodes/) are similar to functions you’d write in JS. They take a series of arguments (the name of our component, `GlassCounter.jsx`) and return a string of HTML to add to our HTML template. If your Vite server’s still running, you’ll notice nothing is rendering anymore. That’s because we need to teach eleventy what our “react” shortcode should do.

### Defining our eleventy config

Create an `.eleventy.js` at the base of your project with the following entry:

```js
const { join } = require('path')

module.exports = function (eleventyConfig) {
  // we'll use this to generate a unique ID for each component root (formerly just "root" in our create-react-app example)
  let idCounter = 0
  eleventyConfig.on('beforeBuild', function () {
    // reset the counter for each new build
    idCounter = 0
  })
  eleventyConfig.addShortcode('react', async function (componentPath) {
    idCounter += 1
    const componentRootId = `component-root-${idCounter}`
    // generate an absolute path to our component, relative to that "_includes" directory for simplicity
    const resolvedComponentPath = join(process.cwd(), '_includes', componentPath)
    return `
<div id="${componentRootId}"></div>
<script type="module">
// wrap our import in "quotes" using JSON.stringify
import Component from ${JSON.stringify(resolvedComponentPath)};
import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById('${componentRootId}');
ReactDOM.render(React.createElement(Component), root);
</script>`
  })
}
```

In short (pun intended), we’ve moved that `script` tag from earlier into a re-usable shortcode we can place anywhere on our site.

To see this in our browser, we’ll need to run 2 processes now:

* **11ty** in `--watch` mode to process our shortcodes
* **Vite** pointing to 11ty’s build output (`_site` by default)

Let’s install a couple more dependencies to make this seemless:

```bash
npm i @11ty/eleventy concurrently # 11ty for shortcode processing, concurrently to run multiple terminal commands at once
```

And run these 11ty and Vite processes from our terminal like so:

```
concurrently 'npx eleventy --watch --incremental' 'npx vite _site'
```

You can also add a `scripts` entry in your `package.json` to drop that “npx” on the front:

```json
"scripts": {
  "start": "concurrently 'eleventy --watch --incremental' 'vite _site'"
},
```

…And run `npm start` from our terminal instead.

With any luck, we should see our component render in the browser just like before. We’ll also find 11ty’s build output under the `_site` directory:

```
_site
  index.html # with shortcodes resolved
_includes
  GlassCounter.jsx
index.html #without shortcodes resolved
package.json
package-lock.json
.eleventy.js
```

We could even duplicate that shortcode a few times to generate multiple component trees + multiple `script` tags:

```
...
<body>
  {% react 'GlassCounter.jsx' %}
  {% react 'GlassCounter.jsx' %}
  {% react 'GlassCounter.jsx' %}
</body>
```

### Adding our prerendering step

Now that we have an HTML build tool at our disposal, we can pull off pre-rendering as well!

We’ll just need one additional dependency called [require-from-string](https://www.npmjs.com/package/require-from-string) to process our components within Node:

```
npm i -D require-from-string
```

Then, we’ll add a call to [Vite’s `build` command](https://vitejs.dev/guide/api-javascript.html#build) within our `.eleventy.js` shortcode:

```js
const { join } = require('path')
// 1. import some new dependencies:
// - Vite's build command
// - requireFromString to turn that build output into a Node module
// - React's createElement + renderToString to squeeze the static HTML out of our component
const { build: viteBuild } = require('vite')
const requireFromString = require('require-from-string')
const { renderToString } = require('react-dom/server')
const React = require('react')

module.exports = function (eleventyConfig) {
  ...
  eleventyConfig.addShortcode('react', async function (componentPath) {
    idCounter += 1
    const componentRootId = `component-root-${idCounter}`
    const resolvedComponentPath = join(process.cwd(), '_includes', componentPath)
    // 2. Call "build" in SSR mode and grab the output
    const { output } = await viteBuild({
      root: '_site',
      build: {
        ssr: true,
        // prevents Vite from generating an output file
        write: false,
        rollupOptions: {
          input: resolvedComponentPath,
        },
      },
    })
    // 3. Use requireFromString to process the raw build output
    const { default: Component } = requireFromString(output[0].code)
    // 4. Use renderToString to grab our markup and throw it into our root <div>
    const html = renderToString(React.createElement(Component))
    return `
<div id="${componentRootId}">${html}</div>
<script type="module">
// ...same script as before
</script>`
  })
}
```

> **Note:** You’ll probably want to change `ReactDOM.render` to `ReactDOM.hydrate` inside that `<script>` tag if you’re using React 17 or below. But for [React 18](https://dev.to/cassidoo/react-18-alpha-is-out-now-what-2apj), you’ll want to use the new root API for rendering and hydrating.

The key is that `${html}` to insert our HTML into the shortcode’s returned markup. To check your handiwork, check that build output under `_site/index.html`. If you see your component’s markup between those `div`s… congrats! You just learned how SSR and prerendering work 🥳

You can also [disable JavaScript in your browser](https://developer.chrome.com/docs/devtools/javascript/disable/) to check that your prerendering works correctly. With JavaScript enabled, you’ll get the same interactive button as before, now with the benefits of hydration.

## Introducing our opt-in hydration switch

So we’ve reverse-engineered how SSGs like Gatsby approach hydration. How can we introduce that opt-in-to-JavaScript switch that Astro et al encourage?

Well, let’s add a new argument to our shortcode called `shipJavaScript`. This will be a simple true / false value that conditionally inserts that `script` tag. In our template, we’ll add this argument like so:

```
...
<body>
  <!--for demo purposes, we'll render 1 shortcode that opts-in to JS hydration-->
  {% react 'GlassCounter' true %}
  <!--and another that doesn't-->
  {% react 'GlassCounter' %}
</body>
```

Then, we’ll update our `.eleventy.js` to recognize this flag:

```js
...
// set our flag to "false" by default
eleventyConfig.addShortcode('react', async function (componentPath, shipJavaScript = false) {
  ...
  return `
<div id="${componentRootId}">${html}</div>
${shipJavaScript
      ? `<script type="module">
import Component from ${JSON.stringify(resolvedComponentPath)};
import React from 'react';
import ReactDOM from 'react-dom';
const root = document.getElementById('${componentRootId}');
ReactDOM.hydrate(React.createElement(Component), root);
</script>`
      : ''
    }
  `
}
```

From our browser, we should see 1 version of our `GlassCounter` with a click-y button, and another version without that reactivity.

Sure, it doesn’t make much sense to ditch hydration for interactive elements like this. But for a static SVG logo, informational text, or full-on design system libraries built for cosmetics, this can save you a lot of bundled KBs!

### We just used islands architecture

This is a simplified form of partial hydration with [islands architecture](https://jasonformat.com/islands-architecture/). Every shortcode is a mini component tree, or island, of interactivity. As you can imagine, every island could use its own hydration strategy, its own component framework, etc. Believe it or not, the built output from this scrappy example is very close to what tools like [Astro](https://astro.build/) and [Slinkity](https://slinkity.dev/) will give you!

## Going further

If this way of thinking about the Jamstack excites you, awesome! There’s quite a few emerging tools to check out:

* **🔥 Bring partial hydration to [11ty](https://www.11ty.dev/) with [Slinkity](https://slinkity.dev/)** - this is closest to the shortcode approach we just built, but with several added niceties: a single CLI command to spin up 11ty and Vite, that `react` shortcode with added partial hydration modes, the option to use components as page templates themselves, built-in HMR, and more. Plus, if you have an existing 11ty site, Slinkity can slide on top with zero extra refactoring.
* **🚀 Use the framework built on islands architecture, Astro** - This framework has really sparked the islands architecture discussion across the Jamstack. Unlike our shortcode example, Astro lets you embed components directly into your templates, MDX-style, using `.astro` files. They also take inspiration from popular tools like NextJS for their static site generation story. If you’re going greenfield, this is an excellent pick!
* **🏝 Partially hydrate your Vue templates with [Iles](https://iles-docs.netlify.app/)** - This brings Astro’s syntax for partial hydration modes to the Vue templating language. They support React, Svelte, and Solid out-of-the-box as well, making it a viable alternative to the other options I’ve listed. The SSG story is still developing, but this is definitely a tool to watch if you’re a Vue fan!

I also invite you to keep tinkering with Vite on its own. It really is the key that’s unlocked the partial hydration explosion we’re seeing, and it’s built to bolt onto just about any Jamstack you could want 😁

## Wrapping up

I hope this got your gears turning on partial hydration and the future of JS bundling. You can find the source code for our code walkthrough here, complete with a sandbox to try in your browser:

🥪 [The 11ty, Vite, and JAM sandwich](https://github.com/Holben888/eleventy-vite-jam-sandwich)
