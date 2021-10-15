---
title: "React Children: The misunderstood prop"
description: Children in React have a changing data structure, there's multiple
  ways to use them, and they have a module. Let's deep dive into how to use
  them!
authors:
  - Cassidy Williams
date: 2020-12-17
lastmod: 2020-12-17
topics:
  - tutorials
tags:
  - blogvent
  - react
  - nextjs
  - gatsby
tweet: ""
format: blog
relatedposts:
  - What is React Fast Refresh?
  - Building a custom React media query hook for more responsive apps
seo:
  metadescription: Children in React have a changing data structure, there's
    multiple ways to use them, and they have a module. Let's deep dive into how
    to use them!
  metatitle: "React Children: The misunderstood prop"
  ogimage: /img/blog/blogvent17.png
---
Welcome to Blogvent, day 17!

Children are misunderstood. I'm talking mostly about React children, we can talk about human ones another time.

Let's go through step by step why children are weird, so you can understand them better. Again: React children. Not humans.

## Children are props
Chances are if you've written React before, you've dealt with props and children in some way. Let's say we have a super simple button component:

```jsx
const Button = () => (
  <button>
    I am a button.
  </button>
)
```

If you want to pass things to this button, you would use a prop.

```jsx
// our button
const Button = ({ color }) => (
  <button className={color}>
    I am a button
  </button>
)

// somewhere else
<Button color="red" />
```

If you want to make our button say more than just "I am a button," you can pass `children` to it.

```jsx
// our button
const Button = ({ color, children }) => (
  <button className={color}>
    {children}
  </button>
)

// somewhere else
<Button color="red">
  I am still a button
</Button>
```

By passing `children` in this way, you are passing it to the component **by position**. Now, if you notice that little header there of this section, I call `children` a prop. Did you know that it can be passed as a named prop, too?

```jsx
// turn this
<Button color="red">
  I am still a button
</Button>

// into this
<Button color="red" children={"I am still a button"} />
```

These two syntaxes produce the exact same result on the page! Children is a prop, and can be passed in to components in different ways.

## Children can be an object or an array
Sometimes our children act differently, and that's okay.

If we were to run the following what do you think would be logged?

```jsx
// our button
const Button = ({ color, children }) => {
  console.log(children)
  return (
    <button className={color}>
      please, my
      {children}
      are starving
    </button>
  )
}

// somewhere else
<Button color="red">
  <h1>Oh</h1>
</Button>
```

Logged here would be an object that looks something like, `{type: "h1", key: null, ref: null, props: Object, ...}`. Okay. So `children` is an object. But what if we change up the children in the button so there's more of them?

```jsx
<Button color="red">
  <h1>Oh</h1>
  <h2>My</h2>
  <h3>Goodness</h3>
</Button>
```

Logged in our terminal would be `[Object, Object, Object]`, because `children` is an array.

Gosh, make up your mind, children!

The data structure for `children` can change depending on how many there are. If only there were a way to deal with these children!

## A way to deal with these children
[`React.Children`](https://reactjs.org/docs/react-api.html#reactchildren) is a module that helps you use `children` better. It has a bunch of functionality so that you can avoid type-checking every time if it's an object, or an array. 

```jsx
// Turns children into an array
React.Children.toArray(children)

// Counts the children
React.Children.count(children)

// Makes sure there's only one child
React.Children.only(children)

// Lets you run map over children without having to worry about if it's an object or not
React.Children.map(children, fn)

// Lets you run forEach over children without having to worry about if it's an object or not
React.Children.forEach(children, fn)
```

## Can we talk about human children now?
No, unfortunately we're out of time. React children are a funky thing to deal with, but if you use them right, you can unlock the ability to make more reusable, flexible, and composable components.

Til next time!
