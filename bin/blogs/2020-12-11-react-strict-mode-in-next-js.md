---
title: React Strict Mode in Next.js
description: Learn what React Strict Mode is, and how to implement it across
  your Next.js applications!
authors:
  - Cassidy Williams
date: 2020-12-11
lastmod: 2020-12-11
topics:
  - tutorials
tags:
  - nextjs
  - blogvent
tweet: ""
format: blog
relatedposts:
  - Using React Context for state management in Next.js
  - What is React Fast Refresh?
seo:
  metadescription: Learn what React Strict Mode is, and how to implement it across
    your Next.js applications!
  metatitle: React Strict Mode in Next.js
  ogimage: /img/blog/blogvent11.png
---
Welcome to Blogvent, day 11!

You may or may not have heard of Strict Mode in React before. Strict Mode is a tool for highlighting potential problems in a React application. It doesn't render any UI, but it adds extra warnings to any components inside of the `<React.StrictMode>` tags. This is something that only runs in development mode, so you don't need to worry about it in production!

## What does Strict Mode help with?
It helps you avoid legacy code, and deprecated APIs. Specifically:

- Lifecycle methods [deemed unsafe](https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html)
- Legacy string ref and context APIs
- Unexpected side effects
- Deprecated APIs

## Seems important. How do I use it?
If you want to add Strict Mode just to certain parts of your application, you can wrap which components and pages you want with the Strict Mode tags:

```jsx

function Example() {
  return (
    <>
      <Header />
      <React.StrictMode>
        <>
          <Sidebar />
          <Content />
        </>
      </React.StrictMode>
    </>
  );
}
```

Similar to how [React Context](https://reactjs.org/docs/context.html) works, this will work on the `Sidebar` and `Content` components, as well as their descendants!

If you'd like to add Strict Mode to your entire Next.js application, not just certain pages and components, you might think that you should just wrap your `_app.js` file [like you do with Context](https://www.netlify.com/blog/2020/12/01/using-react-context-for-state-management-in-next.js/?utm_source=blog&utm_medium=nextcontext-cs&utm_campaign=devex). And, technically, you can! But, it's actually even easier than that.

In your `next.config.js` file at the top level of your project, you can enable it in one line:

```js
// next.config.js
module.exports = {
  reactStrictMode: true,
}
```

That's it! If you'd like to try it yourself, here's a starter application to get going:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-starter&utm_source=blog&utm_medium=nextstarterstrictmode-cs&utm_campaign=devex)

(Clicking this button will deploy a Next.js starter project to Netlify, and clone it to your chosen Git provider)
