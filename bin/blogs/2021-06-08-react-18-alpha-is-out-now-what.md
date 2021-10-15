---
title: React 18 Alpha is out! Now what?
description: React 18 Alpha is here! Here's what it'll include and how to use it.
authors:
  - Cassidy Williams
date: 2021-06-08
lastmod: 2021-06-08
topics:
  - tutorials
tags:
  - react
tweet: ""
format: blog
relatedposts:
  - "React Children: The misunderstood prop"
seo:
  metatitle: React 18 Alpha is out! Now what?
  metadescription: React 18 Alpha is here! Here's what it'll include and how to use it.
  ogimage: /img/blog/react-18-learn-more.png
---

Hello!

They kept us in Suspense long enough, but HECK React developers have some new features to play with!!
The best part: Almost all of the benefits of the upgrade don't require major code changes.

## The New Root API

React has always had to have some kind of root. You're probably used to seeing something like this at the top level of your applications:

```jsx
import ReactDOM from 'react-dom';
import App from 'App';

ReactDOM.render(<App />, document.getElementById('root'));
```

Pretty normal, right? Right. This `ReactDOM.render()` is now called the **Legacy Root API**. It works the exact same way as React 17. You are still allowed to keep this, but it *will* be eventually deprecated.

The **New Root API** looks a little different:

```jsx
import ReactDOM from 'react-dom';
import App from 'App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
```

It's very similar! You use `ReactDOM.createRoot` instead of the old method.

With this change, a few things happen:
- The `hydrate` method is gone, and is now an option on `createRoot`
- The render callback is gone (and can now be a prop passed in to `<App />` or whatever you give to the root)

If you don't use these two functions, then you don't have to worry about their changes. If you'd like more details on them, [there's some code change examples here](https://github.com/reactwg/react-18/discussions/5) from the React core team.

By switching to the **New Root API**, you *automatically* get the new out-of-the-box improvements that come with React 18!

This change is *all you need to do* to upgrade your client to React 18. If you only use React client-side, then you're done and can skip to the installation section below! If you use server-side React or want to learn more about Suspense, keep reading.

## Suspense

Puns aside, I think we are ALL incredibly excited for Suspense finally coming out with full support. React 16 had support for it, technically, but it was never full support, and it was not very easy to understand. 

Soooo what the heck is Suspense? It's a set of functionality that allows for waiting for data to resolve before a state transition (AKA delayed transitions), reducing UI clashes while data loads (AKA placeholder throttling), and coordinating the appearance of a set of components by streaming them in order (AKA SuspenseList).

If you played with Suspense before, you might see some "Legacy Suspense" behavior changing, but if you'd like to try it out for the first time, the summary is that you wrap your components in a `<Suspense>` component, like so:

```jsx
<Suspense fallback={<Loading />}>
  <SomeComponentThatSuspends />
  <SomeOtherComponent />
</Suspense>
```

In this example, React will show the `<Loading />` component at first, and then will replace `<Loading />` with `<SomeComponentThatSuspends />` and `<SomeOtherComponent />` when the data is resolved in `<SomeComponentThatSuspends />`.

I want to reinterate this, because [it's different from previous versions](https://github.com/reactwg/react-18/discussions/7): Nothing inside of the `<Suspense />` component will be rendered until the data is resolved! You can see a code sample from the React core team using this [here](https://codesandbox.io/s/romantic-architecture-ht3qi?file=/src/App.js).

## Concurrent features

There are a few methods that come with React 18 that are completely opt-in. Not all of them are documented yet, but they will be as the version is optimized:

- [`startTransition`](https://github.com/reactwg/react-18/discussions/41): keep the UI responsive during a big state transition.
- `useDeferredValue`: defer updating less important parts of your app.
- `<SuspenseList>`: coordinate the order in which loading indicators show up.
- [Server-side rendering with selective hydration](https://github.com/reactwg/react-18/discussions/37): has your app load and become interactive faster.

What's nice about each of these features is that you don't have to include all of them throughout your whole application. You can opt-in to build with them in just certain parts of the app, which is very nice and flexible.

## Enough already! How do I install it?

You can use the `@alpha` tag to install React 18 right away:

```bash
npm install react@alpha react-dom@alpha
```

It will be **months**  before the Alpha reaches Beta, and more time after that until it's fully stable. You can see [more details about the roadmap here](https://github.com/reactwg/react-18/discussions/9), which also includes other functions that aren't implemented yet.

The [React Working Group](https://github.com/reactwg/react-18/discussions) has a full set of questions and discussions about these features as well, if you'd like to read more, as well as their [announcement blog post](https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html)!

'Til next time!
