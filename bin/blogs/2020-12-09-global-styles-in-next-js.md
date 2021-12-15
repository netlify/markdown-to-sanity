---
title: Global Styles in Next.js
description: Ever wanted to apply global styles across your Next.js application? Here's how!
authors:
  - Cassidy Williams
date: 2020-12-09
lastmod: 2021-11-16
topics:
  - tutorials
tags:
  - Next.js
  - blogvent
tweet: ""
format: blog
relatedposts:
  - "Using React Context for state management in Next.js"
  - "Next.js: Should I use SSR or SSG?"
seo:
  metatitle: Global Styles in Next.js
  metadescription: Ever wanted to apply global styles across your Next.js
    application? Here's how!
  ogimage: /v3/img/blog/blogvent9.png
---
Welcome to Blogvent, day 9!

In Next.js, you have TONS of support for pretty much every styling option you'd like to use. CSS Modules, Styled JSX, Sass, Less, Stylus, Styled Components, Emotion... I could go on! If you want to style a component, Next.js has you covered.

One thing that often trips people up though is adding global styles. But luckily, the framework has you covered there, too!

In your `pages/` directory, add an `_app.js` file if you don't already have one. Yours might look something like this:

```jsx
// pages/_app.js

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
```

Now, to add some simple global styles to your application, it's as simple as importing it at this level!

```diff-jsx
+ import '../styles/globals.css'

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
```

## It's done!
You now have a global stylesheet applied to your Next.js application. If you'd like to see it in a starter application, you can [check out this repo here](https://github.com/netlify-templates/next-netlify-starter), or deploy the starter directly to Netlify with one click:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=blog&utm_medium=nextstartertyling-cs&utm_campaign=devex)

If you'd like to see this applied in a more advanced application, [you can check out the repo](https://github.com/netlify/explorers/blob/main/src/pages/_app.js#L6-L8) for [Jamstack Explorers](https://explorers.netlify.com/?utm_source=blog&utm_medium=explorers-cs&utm_campaign=devex)! 
