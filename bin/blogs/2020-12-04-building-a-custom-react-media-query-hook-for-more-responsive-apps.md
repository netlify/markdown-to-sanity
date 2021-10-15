---
title: Building a custom React media query hook for more responsive apps
description: Make your React, Gatsby, and Next.js applications more responsive
  with a touch of JavaScript and combining some cool APIs.
authors:
  - Cassidy Williams
date: 2020-12-05
lastmod: 2020-12-04
topics:
  - tutorials
tags:
  - nextjs
  - blogvent
tweet: ""
format: blog
relatedposts:
  - '"Escaping" Next.js to access the browser'
  - "Next.js: Should I use SSR or SSG?"
seo:
  metatitle: How to Build Custom React Media Query Hook for Responsive Apps
  metadescription: Learn how to make your React, Gatsby, and Next.js applications more responsive with a touch of JS and combining some cool APIs. Media queries to the rescue!
  ogimage: /img/blog/blogvent5.png
---
Welcome to Blogvent, day 5!

Chances are if you've written any CSS before, you've written media queries. And honestly, media queries overall are solid! But, they were made for an earlier time in the browser. They were not designed for some of the rendering logic that we have on the front-end now.

You can still use media queries, of course, and should, but there are some cases where JavaScript will be a smarter option. For example, what if you’re on your phone, and browsing a website, and there is a sidebar or element that is hidden by CSS, that is making network requests? For the user, that is a waste of resources!

There has to be a better way. And there is!

## Media queries... in JavaScript!
So, to solve this problem, what you need to do here is conditionally render things based on the browser size, rather than render something and hide it with CSS.

If you'll recall in [yesterday's Blogvent post](https://www.netlify.com/blog/2020/12/04/escaping-next.js-to-access-the-browser/), you can use React's `useEffect` to access the `window` object in the browser. That `window` object has a function called `matchMedia` that returns a boolean based on if the window matches a certain media query passed in!

So, if we combine these with a little bit of state, you can make a custom hook that you can use to conditionally render components in your applications:

```js
import { useState, useEffect } from 'react';

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

```

Let's walk through this. In this custom hook, you have a `matches` state variable, and we take in a `query`. In the effect, we check if the `query` that is passed in matches the window. If it does, we set `matches` to true. We set an event listener in there as well, to keep that variable in sync with the window changing sizes. The event listener is removed when `query` changes, when the component using it unmount, or when `matches` changes.

## Whoa. How can I see this in action?
Feel free to use this hook in your projects! You can call it inside your components, for example:

```jsx
function Page() {
  let isPageWide = useMediaQuery('(min-width: 800px)')
	
	return <>
    {isPageWide && <UnnecessarySidebar />}
    <ImportantContent />
  </>
}
```

If you'd like to see it in action in a real project, check out the [Jamstack Explorers repo](https://explorers.netlify.com/) and how we render [our Navigation component](https://github.com/netlify/explorers/blob/main/src/components/Navigation.js#L14).

And, if you'd like to learn more about Next.js, check out the course (with more to come) on [Jamstack Explorers](https://explorers.netlify.com/learn/nextjs?utm_source=blog&utm_medium=nextmission-cs&utm_campaign=devex)!
