---
title: "Build wicked fast sites with Astro: An Introduction"
description: "From the creators of Snowpack comes Astro: A framework for building
  faster websites with less client-side JavaScript. Learn how to use it and get
  started!"
authors:
  - Cassidy Williams
date: 2021-07-08
lastmod: 2021-07-08
topics:
  - tutorials
tags:
  - astro
  - Javascript
  - SSG
tweet: ""
format: blog
relatedposts:
  - 10 static site generators to watch in 2021
seo:
  metadescription: "From the creators of Snowpack comes Astro: A framework for
    building faster websites with less client-side JavaScript. Learn how to use
    it and get started!"
  metatitle: "Build wicked fast sites with Astro: An Introduction"
  ogimage: /v3/img/blog/wickedfastastro.png
---
One of the hot new frameworks on the scene is [Astro](https://astro.build/), and it's all about shipping less client-side JavaScript. I decided to give in a whirl and was pretty pleased with being able to write React, and see the immediate performance benefits when loading scripts only when I *want* to.

Astro is still early in its life (version 0.17.3 at the time of writing), but already has a great community going of folks playing with it. Let's join them and try it out!

## What comes out of the box

Astro comes with quite a bit without you having to install anything!

### `.astro` files

`.astro` files are *mostly* HTML, but with some extra JavaScript goodies. If you're comfortable with HTML and JS, you'll be comfy in `.astro`.

These `.astro` files borrow concepts from JSX and Frontmatter to make some pretty powerful templates. For example:

```jsx
---

// Area A
	
import MyComponent from './MyComponent.astro'

let name = 'Cassidy'
let food = ['apple', 'banana', 'cake']

---

<!--Area B-->

<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <MyComponent></MyComponent>
	
	{name} was here
	<ul>
	  {food.map((item) => (
        <li>{item}</li>
      ))}
	</ul>
  </body>
</html>
	  
```

"Area A" in the above code snippet is the "Frontmatter" script. It's fully compatible with both JavaScript and TypeScript, and you can import other components, or write whatever scripts you'd like there. This will be run at page build time. This area is totally optional, as well, so you can remove it entirely if you don't need it.

"Area B" is where Astro really shines, in my opinion. It's just HTML... until it's not. You can add in components that you import (in *any* framework you choose, as in you could have React and Vue living _side by side_), render expressions, include fragments, use the native HTML `<head>`, and a lot more.

These `.astro` files can also take in `props`, so you can use them as components within each other, and import given values in the Frontmatter!

There's even more power to `.astro` components than I've mentioned here, [here's the docs](https://docs.astro.build/core-concepts/astro-components) if you'd like to read more.

### Renderers for your favorite frameworks and libraries

Astro is automatically configured with renderers for React, Vue, Svelte, and Preact! You don't actually need to install these frameworks for them to work. [You can override this](https://docs.astro.build/reference/renderer-reference), if you want to add or remove any renderers you'd like.

It also supports Markdown out of the box (so any `.md` files you might make), and you can use a `<Markdown>` component in your `.astro` files, too!

You might be wondering, "hey, I thought Astro doesn't like client-side JavaScript?" You're right. When you make a React/Vue/whatever component in Astro, it will render the HTML for that component by default, but *not* the client-side interactions! If you'd like to use your components though, never fear, there's some [built-in hydration](https://docs.astro.build/core-concepts/component-hydration) options for you:

- `<MyComponent client:load />` will render `MyComponent` on page load
- `<MyComponent client:idle />` will render `MyComponent` as soon as the main thread is free
- `<MyComponent client:visible />` will render `MyComponent` when the element enters the viewport (so when a user scrolls to it)

### Page-based routing

Just like many other frameworks these days, Astro has a `pages/` directory already built, and any `.astro` or `.md` files inside of it automatically become routes in your application.

This is fully configurable, as well, so if you want to point your routes at a different directory, you can!

You can also make what are called **Collections** to generate pages from data! So, for example, if you have a CMS of blog posts, you could pull in and generate routes and pages from that API. You can even group content, and pagination is built in, as well. The Collections API comes from an Astro prop, and [is documented here](https://docs.astro.build/core-concepts/collections).

### Styling and state management

Styling and state management are still in early implementation in Astro, but there's quite a bit supported already.

Out of the box, global CSS is supported, and there are some limits around scoped CSS and CSS Modules. You can see the [styling quickstart](https://docs.astro.build/guides/styling) for more information, but chances are, your favorite way to style is possible.

In terms of state management, the support you want will depend on the framework/library you use. For React, the Context API, Recoil, and Jotai are currently fully supported, and Redux is partially supported. Vue has partial Vuex support, and Svelte has full Svelte Stores support. [Their team is open to PRs and issues](https://github.com/snowpackjs/astro/issues) if something you like is not built in.

### And mooooore

There's even more in Astro that's supported, including sitemaps and custom configurations. Check out their [docs](https://docs.astro.build/getting-started) if you'd like to read up on everything.

Until then though, let's build!

## Getting started

First of all, you're going to need Node.js on your machine, in particular a minimum version of 14.15.1. This is because it's built with ES Modules (or ESM), so you can use `import` statements to your heart's content. Adios, `require`!

Make a new directory, and then call:
```bash
npm init astro
```

This will pull up an app template selector, where you can choose from their starter kit and a few other options. I went with the starter kit, because I am snooty and like to build things my myself. Then you can go ahead and `npm install` and initialize your git repo if you'd like, and run it with `npm start`.

And with that, you're off to the races! The default page that you're given shows you the project structure, and you can stick with the defaults or configure them in `astro.config.js`.

## Help me!

Don't worry my little developer lamb, I've got you.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/astro-netlify-starter)

If you click this button above, it'll deploy [an Astro starter project](https://github.com/cassidoo/astro-netlify-starter) for you on Netlify, and clone it to your GitHub. It'll include all of the Astro defaults you've learned about, plus a sample React component to get going!

Or, if you'd prefer to use the CLI, you can run:

```bash
npm init astro my-new-project --template cassidoo/astro-netlify-starter
```

Until next time!
