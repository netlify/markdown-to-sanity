---
title: Nuxt Image is here! And it's a game changer
description: Nuxt Image is here and it's a game changer for image optimization workflows
authors:
  - Ben Hong
date: 2021-06-11
lastmod: 2021-06-11
topics:
  - tutorials
tags:
  - nuxt
  - vue
tweet: ""
format: blog
relatedposts:
seo:
  metatitle: Nuxt Image is here! And it's a game changer
  metadescription: Nuxt Image is here and it's a game changer for image optimization workflows
  ogimage: /img/blog/nuxt-image-is-here.png
---

Let's face it. Managing images in the modern web is hard. Not only do we have to manage what dimensions images should render on different screen sizes, but then we also have to try and deliver the smallest possible high-quality image so that the performance of our site doesn't suffer. After all, if a user is on a 400px wide device on a mobile network, why should they be downloading a 4000px size image that is then resized down to 400px using CSS?

And while there are workflows for helping developers to generate images of different sizes, techniques for specifying media queries for images, and so on, the effort to put them all together in a seamless way is often far from trivial.

Wouldn't it be great if there was a way to leverage a powerful image optimization workflow without adding significant overhead to the development workflow? Well, for my fellow Nuxt fans, I'm happy to say that Nuxt Image has granted that wish.

## What is Nuxt Image?

[Nuxt Image](https://image.nuxtjs.org/) is a plug-and-play image optimization module designed to give developers access to powerful components that will make image optimization a natural part of your workflow. But don't take my word for it, let me show you just how powerful it is.

## A "Simple" Scenario

Let's say that we have a site that wants to display a beautiful image of space. The original image however, at its maximum resolution, it is 3.9MB in size and 5005 x 3417 pixels! 😱

### Requirements

Clearly, we can't serve this image to users without a dramatic impact to the performance of our site, so we establish the following criteria:

1. The maximum size we need the image to be is 1280px for devices that are 1280px or larger.
2. However, at smaller devices, we would still like to optimize the image at the standard breakpoints (i.e., 320px, 640px, 768px, 1024px)

This means we'd need to:

- Generate and optimize 5 image assets
- Write the HTML for the image with all the responsive breakpoints properly defined

And let's not forget this is for a **single** image. Luckily for us though, Nuxt Image is about to save day.

### Solution

Using [Nuxt Image](https://image.nuxtjs.org/), once we upload our `space.jpeg` image into our `static` directory, all we need to do to solve this is call our image with the `nuxt-img` component.

```html
<nuxt-img
  src="/img/space.jpg"
  alt="Space by Jeremy Thomas on Unsplash"
  sizes="xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
/>
```

When our site is built, this is what [Nuxt](https://nuxtjs.org/) will basically generate all of the assets we need as well as the following HTML.

```html
<img
  src="/_nuxt/image/space-61b74b.jpg"
  alt="Space by Jeremy Thomas on Unsplash"
  sizes="(max-width: 320px) 100vw, (max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
  srcset="
    /_nuxt/image/space-f4d5ae.jpg  320w,
    /_nuxt/image/space-c1b4a0.jpg  640w,
    /_nuxt/image/space-71cff9.jpg  768w,
    /_nuxt/image/space-38eb82.jpg 1024w,
    /_nuxt/image/space-61b74b.jpg 1280w
  "
/>
```

It's just that easy! 🙌

## Deploying with Nuxt Image

Believe it or not, if you're using [Nuxt](https://nuxtjs.org/) to deploy a static site on Netlify, you don't need any additional configuration!

## Next Steps

To get started with [Nuxt Images](https://image.nuxtjs.org/), be sure to check out the official [Getting Started Guide](https://image.nuxtjs.org/getting-started/installation/).

And if you'd like to check out the code mentioned in this post, here's the [live demo](https://simple-nuxt-image-demo.netlify.app/) and [GitHub repository](https://github.com/bencodezen/simple-nuxt-image-demo).
