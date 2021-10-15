---
title: Handy new features in Next.js 9.4
description: Next.js 9.4 is out, and there's a handful of juicy features to try out!
authors:
  - Cassidy Williams
date: 2020-05-18T00:00:00.000Z
lastmod: 2020-05-18T00:00:00.000Z
topics:
  - tutorials
tags:
  - nextjs
  - static site generator
tweet: ""
format: blog
relatedposts:
  - "Building a Markdown blog with Next 9.3 and Netlify"
  - "Improve your SEO and Social Sharing Cards with Next.js"
seo:
  metadescription: Next.js 9.4 is out, and there's a handful of juicy features to try out! This post outlines fast refresh, absolute imports and aliases, web vitals reporting, and more. Check it out!
  metatitle: Check Out New Next.js 9.4 Features
---
Ahoy mateys! Next.js 9.4 came out this past week, and boy howdy, there are [some cool things that came out](https://nextjs.org/blog/next-9-4). My favorites though are Fast Refresh, Absolute Imports and Aliases, and Web Vitals Reporting!

## Fast Refresh

First of all, Fast Refresh! This is something that’s a from the React team itself, not just Next.js, but it’s really exciting to see the team supporting it. It’s a new way of hot reloading that [will soon be the recommended way to do all of your reloads](https://github.com/gaearon/react-hot-loader#moving-towards-next-step). This is cool for a lot of reasons, my favorite being: local state will be preserved for function components and hooks out of the box! In Next.js in particular, they originally had their own version of hot reloading that would reset the entire application state. Now though, Next.js will only refresh the components in the file that you edited, and won’t lose that application state. This makes debugging easier too, with more accurate error locations and session handling built in. How cool is that?

## Absolute Imports and Aliases

Okay, we’ve all done it. You have a web project that’s starting to get pretty big, and your import statements start to look like:

```js
import Flashbacks from '../../../../components/awkwardyears'
```

This is not great. But! Next.js 9.4 handles this for us! You can set up your `jsconfig.json` (or `tsconfig.json`, TypeScript works too!) with a `baseUrl`  and will allow absolute imports from anywhere in that root directory you set. 

This isn’t the best part, though! My favorite part of this feature is that you can make your own custom module aliases! So, let’s just say you have a super cool design system (after you read [Jason’s awesome series on the subject](https://www.netlify.com/blog/2020/05/11/intention-vs.-drift-lets-learn-design-systems-part-1/?utm_source=nextblog&utm_medium=designsystems-jl&utm_campaign=devex), of course) and you have it living in a folder that’s kind of hard to navigate to from a given file. You can make an alias for it if you have that `baseUrl` set! Open up your `jsconfig.json` or `tsconfig.json`, and add in whatever aliases you want like this:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/buttons/*": ["shared/components/design-system/buttons/*"],
		"@/forms/*": ["shared/components/design-system/forms/*"]
    }
  }
}
```

So if you actually wanted to use these, you could import them using the aliases you made!

```js
import IconButton from '@/buttons/iconbutton'
import PasswordInput from '@/forms/password'
```

I love how clean this is. You can stop counting the number of `../`s you have in your imports, and just get the components you need and run with it!

## Web Vitals Reporting

This was a pleasantly surprising feature I didn’t expect to be included in Next.js. Recently, the Google Chrome team released [Web Vitals](https://web.dev/vitals/) as an initiative to “provide unified guidance for quality signals that are essential to delivering a great user experience on the web.” Their team worked with the Next.js maintainers to release a `reportWebVitals` functionality, which allows you to capture several different metics, like Time to First Byte, First Contentful Paint, Largest Contentful Paint, and several others (including some Next.js specific ones, like the length of time it takes to render a route change).

![The spectrum for Largest Contentful Paint](/img/blog/lcp_ux.svg "The spectrum for Largest Contentful Paint")

It’s a very simple, clean API, and you can do something as small as this to get reporting started:

```js
export function reportWebVitals(metric) {
  if (metric.name === 'Next.js-render') {
    // handle length of time for render 
  }  
}
```

There’s a LOT of meat to this feature that would be super useful to you as you optimize the performance of your projects. [Check out the documentation](https://nextjs.org/docs/advanced-features/measuring-performance) to get it into your app.

## And mooooore

You can use all of these features on Netlify today! Go ahead and start your own with the click of a button, or [check out the starter repo](https://github.com/cassidoo/next-netlify-starter)! This is a starter project that has some sample components, absolute alias imports enabled, and a `netlify.toml` for easy deployment. 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex)

If you'd like to learn about the other features tucked in to Next.js 9.4, you can [take a look at their announcement blog post](https://nextjs.org/blog/next-9-4) to check them out.