---
title: Using React Context for state management in Next.js
description: Ever wondered how you should manage state information across your
  Next.js applications without installing anything extra? Look no further!
authors:
  - Cassidy Williams
date: 2020-12-01T15:00:00.000Z
lastmod: 2020-12-01
topics:
  - tutorials
tags:
  - nextjs
  - blogvent
tweet: ""
format: blog
relatedposts:
  - Introducing Jamstack Explorers - Get started and learn with Netlify
seo:
  ogimage: /img/blog/blogvent1.png
  metatitle: Using React Context for state management in Next.js
  metadescription: Ever wondered how you should manage state information across
    your Next.js applications without installing anything extra? Look no
    further!
---
Happy Blogvent season, Jamstackers!

If you'd like to manage state across your Next.js applications, the easiest way to do it (without installing anything extra!) is using [React Context](https://reactjs.org/docs/context.html)!

If you'd like to use Context across every page in your application, you'll want to go to `pages/_app.js` and make it look a little something like this:

```jsx
// src/pages/_app.js

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
```

Then, make a file somewhere in your application that builds a Context object:

```jsx
// src/context/state.js
import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  let sharedState = {/* whatever you want */}

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}

```

Once this is done, go back to `pages/_app.js` and wrap your component with the `AppWrapper`:

```diff-js
// src/pages/_app.js
+ import { AppWrapper } from '../context/AppContext'; // import based on where you put it

export default function Application({ Component, pageProps }) {
  return (
+    <AppWrapper>
      <Component {...pageProps} />
+    </AppWrapper>
  )
}

export default Application
```

Now, in every component and page in your application, if you'd like to access the values inside of that `sharedState` object, you can import and call the React `useAppContext` hook!

Now, be discerning about how much you put into Context. You wouldn't want unnecessary re-renders across pages when you can just share them across certain components.

## Woo hoo!
If you want to see this in action in a real application, you can check out the open sourced repo for [Jamstack Explorers](https://explorers.netlify.com/)!

[Here is the code](https://github.com/netlify/explorers/blob/main/src/pages/_app.js#L10) for `_app.js`, and [here is the folder](https://github.com/netlify/explorers/tree/main/src/context) for the different providers created!
