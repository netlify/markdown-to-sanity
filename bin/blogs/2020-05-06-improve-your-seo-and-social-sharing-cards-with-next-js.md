---
title: Improve your SEO and Social Sharing Cards with Next.js
description: Here's a primer on the Open Graph Protocol, and how to update
  metadata in your Next apps!
authors:
  - Cassidy Williams
date: 2020-05-08
lastmod: 2020-07-09
topics:
  - tutorials
tags:
  - nextjs
  - static site generator
  - seo
tweet: ""
format: blog
relatedposts:
  - Building a Markdown blog with Next 9.3 and Netlify
  - "Next.js 101: What you should know"
seo:
  metatitle: How to Improve your SEO and Social Metadata with Next.js
  metadescription: Check out this Next.js primer on SEO fundamentals. Utilize the
    Open Graph Protocol to update metadata in your Next apps, ship sites with
    optimize page titles, and more!
  ogimage: /img/blog/good-cards.png
---
Look, we’ve all done it. We’ve shared a post of our latest blog or project to Twitter, or LinkedIn, or Slack, or something, and it ends up looking like a blurred mess on the timeline, or has a boring default thumbnail. We've taken a stroll over to [check your Lighthouse score](https://web.dev/measure/) and find that SEO is in the red. We've thought about how our users will *React* to our apps, realizing they don't have the *Context* when they see our links in the feed. Heyo.

![On the left, a generic, unhelpful link. On the right, a properly tagged site!](/img/blog/boo.png "Look what you can do if you try")

When you want something to look decent on a feed, you can use something called the [Open Graph Protocol](https://ogp.me/). It allows you to customize your `<meta>` tags on your site so that it looks nice and beautiful when you share the URLs around.

Here’s the problem though: if you want different metadata on different pages of your website, you have to go beyond the “single page application” route. As much as I love SPAs, they simply are more restricted when it comes to custom metadata per page.

But, there is a solution! With a static site builder, you can programmatically customize `<meta>` tags on every page. Let’s go through an example with Next.js.

Let’s say that you have a site with multiple pages (say, a [blog post](https://url.netlify.com/rJreiI15L), perhaps?), and you have some `Layout` component that pulls in Next’s built-in `next/head`:

```jsx
import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
      </Head>
      <section>
        <Header />
        <div className="content">{children}</div>
      </section>
    </>
  )
}
```

The `<Head>` component from Next appends elements into the `<head>` of your rendered HTML page. So, if I wanted to add a “description” tag for example, I could just stick it in right inside `<Head>`:

```diff-jsx
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
+       <meta name="description" content={description} />
        <title>{pageTitle}</title>
      </Head>
```

Now, let’s add your custom Open Graph tags. Right now in your `Layout` component’s props, we have the `pageTitle` and `description` passed in. We can use that right away to add `og:title` and `go:description` tags.

```diff-jsx
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="description" content={description}></meta>
+       <meta property="og:title" content={pageTitle} key="ogtitle" />
+       <meta property="og:description" content={description} key="ogdesc" />
        <title>{pageTitle}</title>
      </Head>
```

Note that we add some `key` props to these tags. This is to avoid duplicate tags, just in case!

Now, there are other Open Graph tags to add. This is where you can look at your page components that are rendering your `Layout` components, and pass in more information, like images, the preview URL, and the site name. [Twitter also has some proprietary tags](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/markup) for their cards too, some of which have Open Graph fallbacks.

Here’s the tags that I try to always include in my projects!

```jsx
{/* Twitter */}
<meta name="twitter:card" content="summary" key="twcard" />
<meta name="twitter:creator" content={twitterHandle} key="twhandle" />

{/* Open Graph */}
<meta property="og:url" content={currentURL} key="ogurl" />
<meta property="og:image" content={previewImage} key="ogimage" />
<meta property="og:site_name" content={siteName} key="ogsitename" />
<meta property="og:title" content={pageTitle} key="ogtitle" />
<meta property="og:description" content={description} key="ogdesc" />
```

If you’re curious about image sizes, there are *many* guides out there for this. Generally though:

* The minimum size you should use is 200 x 200 pixels
* Images smaller than 600 x 315 pixels will often be styled differently on Facebook and Twitter (it will be on the side of the link text, rather than big and in the middle of everything)
* For most cards that appear on Twitter and Facebook, images that are 1200 x 630 pixels have the best display on high resolution

I hope this is helpful for you, and here’s a great list of resources for more information!

## Useful resources

* [Twitter card validator](https://cards-dev.twitter.com/validator)
* [Open Graph Specification](https://ogp.me/)
* [Favicon + HTML Generator](https://realfavicongenerator.net/)
* [Twitter thread on image cropping](https://twitter.com/nanobop/status/1255002567131557888)
* [Images in link shares by Facebook](https://developers.facebook.com/docs/sharing/webmasters/images/)
* [Automatically Generate Social Images for Blog Posts](https://www.learnwithjason.dev/blog/auto-generate-social-image/)

Keep an eye on this space. We'll have more posts on leveling up your SEO coming soon!