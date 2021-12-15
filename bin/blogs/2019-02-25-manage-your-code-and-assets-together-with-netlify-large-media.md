---
title: Manage your code and assets together with Netlify Large Media
description: >-
  Netlify Large Media — a service built on top of Git LFS to enable you to
  manage all of your project's assets, including those large media files, all
  together in your git repo.
authors:
  - Phil Hawksworth
date: "2019-02-26T01:00:00"
lastmod: 2020-08-03
relatedposts:
  - Netlify Milestones on the road to 1 Million Devs
topics:
  - news
tags:
  - Features
  - Git
tweet: >-
  Netlify Large Media — a service built on top of Git LFS to enable you to
  manage all of your project's assets, including those large media files, all
  together in your git repo.
format: blog
---

![Netlify Large Media illustration](/v3/img/blog/large-media-blog-post-2x.jpg "Netlify Large Media illustration")

Web projects are made up of more than just code. They regularly also contain a variety of image, audio, and even video assets. The problem is that Git, the tool we use for managing our code and powering our workflows, is better at managing code than managing these large, binary files.

Repositories can get bloated. Build times and checkout times can grow. Managing your assets away from your code can get unwieldy.

But a solution exists in the form of [Git Large File Storage](https://git-lfs.github.com/) (LFS), an open source extension to Git which uses pointers in your repository to point to assets managed on a remote storage server.

## Commit the big stuff

Today we are happy to announce [Netlify Large Media](/features/large-media/) — a service built on top of Git LFS to allow you to remove those heavy binary assets from your repositories and let Netlify take care of their versioning, storage, and resolution. All powered by Git. And backed by robust cloud storage, managed seamlessly for you.

By using [Netlify Large Media](/features/large-media/), you’ll be able to reduce the size of your code repositories, increase the speed of bootstrapping projects and cloning repositories, and even speed up your site build times thanks to the more efficient use of your resources.

And there’s more.

![Image transformation illustration](/v3/img/blog/large-media-blog-post-2-2x.jpg "Image transformation illustration")

## Image transformations

Netlify Large Media is more than just an optimized asset storage system. With the mechanics in place to efficiently host large source assets, Netlify can also perform transformations upon the assets too.

Now, you can serve transformed image assets to your visitors without the need to first transform them during your build step. You can command Netlify to transform images on the fly and serve them directly from our [highly optimized ADN](https://www.netlify.com/features/adn/) by adding parameters to the asset’s URL like this:

```
<img src="/img/dog.jpg?nf_resize=fit&w=100" alt="dog image, with a width of 100px"/>
```

There are a variety of settings you can use when transforming image assets, such as `nf_resize=fit` which resizes your image while retaining its proportions. Or you could use `nf_resize=smartcrop` to instruct Netlify to honor the dimensions provided, while cropping to the area of the image determined to be of focus.

```
<img src="dog.jpg?nf_resize=smartcrop&w=300&h=350" alt="smartcrop dog image, at 300px by 350px"/>
```

For more details about the transformation options available, take a look at the [image transformation section of the docs](/docs/image-transformation). Or you could explore some examples in this little [reference site](https://netlify-photo-gallery.netlify.com/photos_s/).

## Your responsive image helper

This technique supports specifying many different representations of the same source asset, making it a great option when [using srcset for responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images). All by adding URL parameters to your images. No JavaScript shims or third party plugins required!

## Getting started

In order to use Netlify Large Media in your projects, there are some prerequisites:

- [Netlify CLI](https://www.netlify.com/docs/cli/)
- [Git LFS](https://git-lfs.github.com/) (v2.5.1 or above)
- A Netlify site with a connected Git repository

See the docs for detailed [instructions on how to set](/docs/large-media) [up and configure Netlify Large Media](/docs/large-media) and [using image transformations](/docs/image-transformation).

## Start streamlining your builds today

Whether you are requesting multiple versions of transformed image assets from our [ADN](https://www.netlify.com/features/adn) on the fly, or just using Netlify Large Media to remove source assets from your repo to optimize build times and simplify your projects, we think you’re going to love using this feature.

The launch of this capability opens the door to more asset transformations and other functionality down the line, and we’re excited to see what you’ll build and how you’ll use it. Watch this space (or register for our newsletter) for more information as things develop.

To get started with your own site, head to the [Netlify Large Media docs](/docs/large-media) page.

And don’t forget to reach out with any feedback, questions, or concerns [@Netlify](https://twitter.com/Netlify). We’d love to hear from you!

---

_This post has been featured on **[Netlify Milestones on the road to 1 Million Devs](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#netlify-large-media-is-born)**_:

[![Netlify 1 Million Devs article feature](/v3/img/blog/featured-on-1-million-devs-banner.png)](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#netlify-large-media-is-born)