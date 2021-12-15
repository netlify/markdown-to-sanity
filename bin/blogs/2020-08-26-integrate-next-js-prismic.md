---
title: Integrate Next.js & Prismic
description: In this post, you'll learn how to set up and integrate Prismic with
  Next.js on Netlify.
authors:
  - Cassidy Williams
date: 2020-08-28
lastmod: 2021-11-16
topics:
  - tutorials
tags:
  - Next.js
tweet: ""
format: blog
relatedposts:
  - Integrate Next.js & Contentful
  - "Next.js 101: What you should know"
seo:
  ogimage: /v3/img/blog/final-8-1-.png
  metatitle: Next.js + Prismic CMS Tutorial
  metadescription: Part two in a Next.js series exploring CMS options and
    integration into Next.js. Learn how to setup Prismic and Next, deployed on
    Netlify.
---
Greeeeetings!

This is the second post in a Next.js series ([here's part 1!](https://www.netlify.com/blog/2020/08/17/integrate-next.js-contentful/?utm_source=blog&utm_medium=nextcontentful-cs&utm_campaign=devex)) in which I explore the world of CMS options, and how they work with Next.js! This next one is using [Prismic](https://prismic.io/)!

TL;DR: We will be building a simple demo site [like this one](https://next-prismic-starter.netlify.app/), and you can clone the repo for it here. You’ll need to do the **Set up Prismic** and **Set up Netlify** steps to make it work for you!

## Set up Prismic

Go ahead and sign up for [Prismic](https://prismic.io/), and start a new repository. Once you've done that, create a new custom type:

![New type of Post](/v3/img/blog/prismicnewtype.png "New type of Post")

Once you create that type, you can add whatever fields you'd like. I added a `Title`, `Date`, and `Image`:

![Post can have custom attributes](/v3/img/blog/prismicnewpost.png "Post can have custom attributes")

From here, make a couple of Posts now so that you have something to populate your project with.

Navigate into the Prismic dashboard to get your keys, next!

* Go to your repository's Settings, and then click through to API & Security
* At the bottom find the section called "Generate an Access Token"
* Add an application name. Name it whatever you'd like, and you can leave the callback field empty
* Click the "Add this application" button
* Copy your access token and save it somewhere handy!

## Set up Netlify

Next (pun!), we're going to set up your project on Netlify. You can start a brand new Next.js project now, or you can use your own. Here's a lil one-click starter if you'd like to start with that:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex)

**This is a fresh, new Next.js project! If you want to use an existing basic Prismic starter, use the project linked at the bottom of this blog post (or [right here](https://github.com/cassidoo/next-prismic-starter)). You will still need to do the rest of the steps in this section to connect Netlify to Prismic!**

Now that you have a Netlify project, go to your Build & Deploy settings and stick in your access token! Make sure you name it something starting with `NEXT_PUBLIC_` so the variable will be accessible in the browser (this is [a Next.js thing](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser)).

![Netlify environment variables](/v3/img/blog/screen-shot-2020-08-26-at-12.10.30-am.png "Netlify environment variables")

Scroll to the "Build hooks" section here and make a new Prismic hook.

![New Prismic Post Build Hook](/v3/img/blog/screen-shot-2020-08-26-at-12.14.28-am.png "New Prismic Post Build Hook")

Copy the URL the UI gives you. We’re going to provide Prismic with this, so whenever you make a new post, it will trigger a site rebuild!

Go to your Prismic settings again, click "Webhooks", and make a new Webhook. Paste in the URL from Netlify into the form:

![Create a new webhook](/v3/img/blog/screen-shot-2020-08-26-at-12.15.29-am.png "Create a new webhook")

Woo hoo, we're all set up! If you used the final project I mentioned before, you're done. If you started from scratch, it's time to get coding!

## Set up Next.js

TL;DR: If you don't feel like going through this, you can copy [my existing project at this repo](https://github.com/cassidoo/next-contentful-starter), or use this one-click install:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-prismic-starter&utm_source=github&utm_medium=nextprismic-cs&utm_campaign=devex)

Assuming you didn't do the above, let's build this all from the ground up. First off, make sure you install `prismic-javascript` into your project:

```
npm install -s prismic-javascript
```

Now remember your Prismic access token? We're going to need that to develop locally!

Make a `.env.local` file at the top level of your project, and populate it with your keys:

```
NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN=something
```

Now let's use this! Make a new file called `prismicPosts.js` (I put this in a `util/` folder, but you can put it wherever you'd like), and stick this code into it:

```js
import Prismic from 'prismic-javascript'

const REPOSITORY = /* your repo name */
export const API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`
export const API_TOKEN = process.env.NEXT_PUBLIC_PRISMIC_ACCESS_TOKEN

export const client = Prismic.client(API_URL, { accessToken: API_TOKEN })
```

For your repo name, put in the name of your project on Prismic. This creates a Prismic client from which you can pull in your Post data!

Let's make a `Post.js` component in the `components/` directory that will use the data we pass to it.

```jsx
function Post({ date, image, title }) {
  let { url, alt } = image

  return (
    <div className="post">
      <img alt={alt} src={`${url}`} />
      <div className="description">{alt}</div>
      <div className="text">
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
      </div>
    </div>
  )
}
export default Post
```

All this does is pull in data via props, so that we can put it on the page. Style it however you'd like!

Now, to use this `Post` component, go ahead and go to `index.js` (or any other page where you want to use it), import `client` and `Post`, and combine their powers like so:

```jsx
// at the top of your component file
import { client } from '@utils/prismicPosts'
import Post from '@components/Post'

// inside your component markup, pull `posts` from props
<div className="posts">
  {posts !== undefined &&
    posts.map((p) => {
      let title = p.title[0].text
      let key = `${p.date}+${title}`
      return <Post key={key} date={p.date} image={p.image} title={title} />
    })}
</div>

// at the bottom of your component file
export async function getStaticProps() {
  // query() is empty on purpose!
  // https://prismic.io/docs/rest-api/query-the-api/query-all-documents
  const res = await client.query('')

  const posts = res.results.map((p) => {
    return p.data
  })

  return {
    props: {
      posts,
    },
  }
}

```

If you're having trouble, check out [this code sample](https://github.com/cassidoo/next-prismic-starter/blob/master/pages/index.js) to confirm you have the code in the right spot.

Notice how we're using `getStaticProps` to fetch our posts! That means that the data is pulled at build time, and so your users don't have to wait for posts to load. How neat is that?? Also, because you set up the webhook earlier, every new post will trigger a build for you without you having to rebuild the site yourself manually.

And with that, voilà! You have a Prismic-populated Next.js application. Now go forth and make it your own!

## Can I see how it should be?

Want to see an example as you work on your own project? Go and clone mine here (don't forget to set up your API keys and everything before testing it out):

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-prismic-starter&utm_source=github&utm_medium=nextprismic-cs&utm_campaign=devex)


Or, if you'd like to see a live version, check out [this deployed site](https://next-prismic-starter.netlify.app/).
