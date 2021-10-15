---
title: '"Escaping" Next.js to access the browser'
description: Sometimes you need what's called an "escape hatch" to access
  certain browser properties and methods in a Next.js application. Here's how to
  make one!
authors:
  - Cassidy Williams
date: 2020-12-04T15:00:00.000Z
lastmod: 2020-12-04
topics:
  - tutorials
tags:
  - nextjs
  - blogvent
tweet: ""
format: blog
relatedposts:
  - How to Deploy Next.js Sites to Netlify
  - "Next.js: Should I use SSR or SSG?"
seo:
  metatitle: 'How to "Escape" Next.js to Access the Browser'
  metadescription: Sometimes you need what's called an "escape hatch" to access
    certain browser properties and methods in a Next.js application. Here's how
    to make one!
  ogimage: /img/blog/blogvent4.png
---
Welcome to [Blogvent](https://www.netlify.com/tags/blogvent/), day 4!

Often when you are trying to add event listeners or DOM variables outside of a Next.js application, you'll get a particularly unhelpful error:

```
ReferenceError: window is not defined
```

To get around this, you can use the React hook, `useEffect`! There's a couple options depending on what you need.

If you just need to access the window, you can use `useEffect` by itself, in something like this:

```jsx
import { useEffect } from 'react'

function Page() {
  useEffect(() => {
    // use/set the window variable in here
  })
  ...
}
```

And if you need to get an object in the browser (a DOM node or something) outside of Next.js, and render something into it, you can combine `useEffect` with `useRef`!

```jsx
import ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react'

function Page() {
  let ref = useRef()

  useEffect(() => {
    ReactDOM.render(<OtherThing/> ref.current);
  }, [])

  return <div ref={ref}/>
}
```

## I can't think of a use case for this!
That's okay! It's something that comes up for very specific cases of "escaping" Next.js (or even Gatsby or vanilla React projects), for example using event listeners, using external JavaScript libraries, or adding certain animations. If you'd like to see an example in a real codebase, [check out this part of the Activity Graph](https://github.com/netlify/explorers/blob/main/src/components/UserActivityGraph.js#L25-L34) in Jamstack Explorers.

Speaking of which, if you'd like to learn more about Next.js, check out the course (with more to come) on [Jamstack Explorers](https://explorers.netlify.com/learn/nextjs?utm_source=blog&utm_medium=nextmission-cs&utm_campaign=devex)!