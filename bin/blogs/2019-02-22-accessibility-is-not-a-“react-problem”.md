---
title: Accessibility is not a “React Problem”
description: Nothing in React prevents us from building accessible web apps.
authors:
  - Leslie Cohn-Wein
date: '2019-02-25'
topics:
  - insights
tags:
  - Accessibility
  - React
tweet: ''
format: blog
---
Every few months, it seems like there’s a revival of the Twitter War™ about JavaScript libraries and accessibility. React is a common target, with developers naming a litany of issues: 

* infinite wrapper `<div>`s
* inline styles overriding custom user stylesheets
* no focus management when navigating between routes
* and on and on…

While these are valid concerns, it should be noted that **nothing in React prevents us from building accessible web apps**.

At Netlify, we believe [accessibility on the modern web](https://www.netlify.com/blog/2017/05/18/accessibility-on-the-modern-web/) is important. We also spend a lot of time in React; it actually powers the frontend of our app. As such, we’ve collected some tips from our frontend engineers on how to leverage accessibility best practices in React.

## Semantics matter

* **Check your DOM structure.** Building with components can make it harder to scan your app’s document structure for accessibility. Use dev tools or a browser extension like [HTML5 Outliner for Chrome](https://chrome.google.com/webstore/detail/html5-outliner/afoibpobokebhgfnknfndkgemglggomo/) to scan the DOM for a reasonable outline as you write JSX and nest components.



* **Use semantic HTML structuring.** Instead of using `<div>`s and `<span>`s as generic wrappers, err on the side of using [semantic elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantic_elements) with inherent meaning, like `<section>`, `<details>`, and `<aside>`.



* **Group elements with Fragments.** Need to return multiple elements inside of your `render()` method? If there isn’t a semantic element that makes sense as a wrapper to group them together, use a [Fragment](https://reactjs.org/docs/fragments.html) as a placeholder instead.



* **Use semantic naming in CSS-in-JS.** Ever struggled to understand the document structure in a file using [Styled Components](https://www.styled-components.com/) or [Emotion](https://emotion.sh/docs/introduction) that’s littered with `<RandomlyNamedComponent>` s? Check out this case study on [Naming Styled Components](https://medium.com/inturn-eng/naming-styled-components-d7097950a245), and consider the following rules:
  * avoid generic names like `<MenuWrapper>` that don’t communicate which semantic element, if any, was used
  * use a `Styled` or `S` prefix to indicate this component is a styled element
  * stick to the same naming convention, such as `<StyledNav>` or `<S.Nav>`, throughout your app



* **Use props to manage disparate semantics in reusable components.** What to do if a reusable component requires an `<h2>` on the homepage, but an `<h3>` on detail pages? Consider adding a prop to handle semantic details, like [this example on managing heading levels](https://medium.com/@Heydon/managing-heading-levels-in-design-systems-18be9a746fa3).

## Lean on React when state changes

* **Use an accessible router.** Single page apps are notoriously bad at managing focus as routes change, leaving users with limited vision lost and confused after a route transition. Consider using a router that has accessibility built in, like [Reach Router](https://reach.tech/router/accessibility).



* **Manage focus using refs.** To set or change focus in React, use refs to DOM elements in order to call the `focus()` method when desired.



* **Leverage lifecycle events and event listeners to react to state.** Developers can toggle ARIA states and properties in response to changes in the virtual DOM using React’s built-in lifecycle events and event listeners.

## Back to basics

Building an accessible React app is, at its core, not about React at all. The key is mastering the fundamentals of web accessibility: semantic document structure, appropriate labeling, and managing focus. 

Assuming those principles are properly implemented, React can actually provide useful tools for building accessible apps. By leveraging React’s state management and reactivity, we can respond to UI changes while providing the necessary context for _all_ users.

## Recommended resources

* First stop: the official [React docs on Accessibility](https://reactjs.org/docs/accessibility.html)
* Accessibility 101: [Getting Started with Web Accessibility in React](https://blog.usejournal.com/getting-started-with-web-accessibility-in-react-9e591fdb0d52) by Emily Mears
* Accessibility master class: Udacity’s free [Web Accessibility course](https://www.udacity.com/course/web-accessibility--ud891) (2 weeks)
* Accessibility in single page apps (SPAs): pick up [Smashing Book 6](https://www.smashingmagazine.com/printed-books/smashing-book-6-new-frontiers-in-web-design/) for Marcy Sutton's chapter on modern web accessibility (including React code samples!)
* Accessibility in React (in 36 minutes): ForwardJS 2018 talk on [Creating Accessible React Apps](https://www.youtube.com/watch?v=9pDr4sBVXUI) from Scott Vinkle of Shopify
* Testing: try out [React-axe](https://github.com/dequelabs/react-axe), an accessibility testing library
* Linting: add the accessibility linter [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) 
* Bookmark: the [Reach UI project](https://ui.reach.tech/), which aims to be a accessible React component library, and the [Inclusive Components blog](https://inclusive-components.design/), which outlines how to make common UI patterns more accessible
