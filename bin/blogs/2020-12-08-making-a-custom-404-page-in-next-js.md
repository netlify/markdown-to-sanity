---
title: Making a custom 404 page in Next.js
description: Why have a boring default error page when you can spruce it up?
  Next.js has a custom static 404 page built right into the framework. Here's
  how to use it.
authors:
  - Cassidy Williams
date: 2020-12-08
lastmod: 2020-12-07
topics:
  - tutorials
tags:
  - nextjs
  - blogvent
tweet: ""
format: blog
relatedposts:
  - Absolute Imports in Next.js
  - |
    How to Deploy Next.js Sites to Netlify
seo:
  metadescription: Why have a boring default error page when you can spruce it up?
    Next.js has a custom static 404 page built right into the framework. Here's
    how to use it.
  metatitle: Making a custom 404 page in Next.js
  ogimage: /img/blog/blogvent8.png
---
Welcome to Blogvent, day 8!

If you've ever messed around enough with your Next.js applications and poked around with new routes, you're probably familiar with this error page:

![Next.js 404 Error Page](/img/blog/the404.png "Next.js 404 Error Page")

It's a well-designed, simple page, but what if you want to add your own branding and linking to it? Well, luckily for you, they thought of that, and it's as simple as adding a `404.js` file inside of your `pages/` directory.

Here's a quick example of what you could do:

```jsx
// 404.js
import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <h1>404 - Page Not Found</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}
```

Because this is just like any other page component in Next.js, you can add whatever styling, links, data, or copy you'd like.

For other errors, you can do the exact same thing with an `_error.js` file in the `pages/` directory! The 404 error is special because it is always statically generated, but the others rely on the server. If you'd like to use the server-rendering aspects of Next.js on Netlify, check out [our one-click install build plugin](https://www.netlify.com/blog/2020/12/07/announcing-one-click-install-next.js-build-plugin-on-netlify/?utm_source=blog&utm_medium=nextplugin-cs&utm_campaign=devex).

Wanna a custom Next.js 404 page in action? [Take a look at the 404 page on Jamstack Explorers](https://explorers.netlify.com/youareverygoodlooking?utm_source=blog&utm_medium=404-cs&utm_campaign=devex)! You can also [check out the code here](https://github.com/netlify/explorers/blob/main/src/pages/404.js).
