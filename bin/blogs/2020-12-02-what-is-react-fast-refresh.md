---
title: What is React Fast Refresh?
description: React Fast Refresh is the latest and greatest way to load
  components in vanilla React, Next.js 10+, Gatsby, and more!
authors:
  - Cassidy Williams
date: 2020-12-03T15:00:00.000Z
lastmod: 2021-11-16
topics:
  - tutorials
tags:
  - Next.js
  - React
  - blogvent
tweet: ""
format: blog
relatedposts:
  - |
    How to Deploy Next.js Sites to Netlify
  - "Next.js: Should I use SSR or SSG?"
seo:
  metadescription: React Fast Refresh is the latest and greatest way to load
    components in vanilla React, Next.js 10+, Gatsby, and more!
  metatitle: What is React Fast Refresh?
  ogimage: /v3/img/blog/blogvent3.png
---
Hello friends, and welcome to Blogvent, day 3!

Chances are if you've looked at the latest React updates or Next.js v10, you've seen the term "Fast Refresh" thrown around. This is a new feature that doesn't affect your users as much, *but* it makes your developer experience much better.

React Fast Refresh replaces React Hot Loader. React Hot Loader, before, wasn't the most perfect thing. It lived outside of React, and led to some not-ideal debugging experiences. React Fast Refresh, however, has an updated API that is faster, handles errors better, *and* preserves state across re-renders.

So what does that mean? Let's say that you have a simple counter component:

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked the button {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Count!
      </button>
    </>
  );
```

And, let's say that you hit the "Count!" button 5 times, and then you decide to add a simple change, like a new line of code.

```diff-jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
+      <h1>Counter Example</h1>
      <p>You clicked the button {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Count!
      </button>
    </>
  );
```

In this example, if you were to look at your browser page before without Fast Refresh, you would have to click the button 5 times again before seeing that previous state. Now, with Fast Refresh, that count would stay at 5!

This is obviously a very simplistic example, but if you think about the possibilities of a game state, user preferences, forms, client-side navigation... there's so many problems here that Fast Refresh solves!

It also reloads the page automatically once syntax or runtime errors are resolved, and does a full reload when you update something outside of the React tree (because it's more deeply integrated with React itself). Keep in mind, Fast Refresh only works for function components out of the box, not class-based components.

## I wanna try it!
Check out [this repo](https://github.com/netlify-templates/next-netlify-starter) if you'd like to see a Next.js v10+ starter project (which has Fast Refresh automatically enabled), or click this button below to clone+deploy a new Next.js project right away:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex)
