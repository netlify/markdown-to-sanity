---
title: Logging in Next.js
description: Where are my logs? Next.js is a hybrid framework, so depending on
  where you call console.log(), the results could be in different spots.
authors:
  - Cassidy Williams
date: 2020-12-13
lastmod: 2021-11-16
topics:
  - tutorials
tags:
  - Next.js
  - blogvent
tweet: ""
format: blog
relatedposts:
  - '"Escaping" Next.js to access the browser'
seo:
  metadescription: Where are my logs? Next.js is a hybrid framework, so depending
    on where you call console.log(), the results could be in different spots.
  metatitle: Logging in Next.js
  ogimage: /v3/img/blog/blogvent13.png
---



Welcome to Blogvent, day 13!

Next.js is a hybrid framework. Some parts of it live in the browser, and some parts live in Node.js. When you're developing, that can make for some fairly confusing development, sometimes!

Depending on where you put your `console.log()` statements, your logs will appear in different spots. Here's some rules of thumb for figuring out where they are:

**If your logs are declared in a function that renders/uses React, they will appear in the browser.** <br />
Whether it is one of your React hooks, your React components, or a page-level component, that log will be in your browser console. This part of your code is the front-end of your application, so you can remember this that the front-end is client-side, in the browser! This is true for both development and production mode.

**If your logs are in a data fetching function, they will appear in your terminal or build/function logs.** <br />
If you have utilities, call APIs, or render certain routes based on external data, these logs will be in your terminal in development mode. Your terminal is where the "back-end" of your application lives, and where you can see pages being built. It's a Node.js environment! In production mode, these logs will appear at build time in your build logs at build time, or in your function/API logs at runtime.

## I want to experiment with this!
Who doesn't? Here's a starter application to try this out:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=blog&utm_medium=nextstarterlogging-cs&utm_campaign=devex)

(Clicking this button will deploy a Next.js starter project to Netlify, and clone it to your chosen Git provider)

