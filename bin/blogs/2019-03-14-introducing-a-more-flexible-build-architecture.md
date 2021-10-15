---
title: 'A more flexible build architecture with updated Linux'
description: >-
  One of our primary goals at Netlify is to make deployments something you don’t have to worry about. With that in mind, we designed our process for making a site from Git so that it “just works” with very little configuration. We get daily feedback about how much people love this!
authors:
  - Bret Comnes
  - Jessica Parsons
date: '2019-03-14'
topics:
  - news
tags:
  - Netlify
  - Buildbot
  - Linux
tweet: >-
  Introducing selectable build images!
  Also a brand new Ubuntu Xenial build image!
format: blog
---
One of our primary goals at Netlify is to make deployments something you don’t have to worry about. With that in mind, we designed our process for creating a site from a connected Git repository so that it “just works” with very little configuration. We get daily feedback about how much people love this!

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I deployed my first site on <a href="https://twitter.com/Netlify?ref_src=twsrc%5Etfw">@Netlify</a> in less than 1 min and with a single command!!😱😱😱 Awesome docs BTW😉</p>&mdash; Marta Sánchez (@martasr90) <a href="https://twitter.com/martasr90/status/975795408218750976?ref_src=twsrc%5Etfw">March 19, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Under the hood, this workflow has relied on a single [build image](https://github.com/netlify/build-image) with a variety of common languages and build tools pre-installed. We’ve made non-breaking changes to it over the years, adding support for new features without changing behavior on legacy sites. It has served us well, but the time has come where we need to make a change.


## Moving from “Trusty” to “Xenial”

Our original build image was made to use [Ubuntu Linux 14.04 LTS](http://releases.ubuntu.com/14.04/) (codenamed “Trusty Tahr”). This is a stable release with long term support, but it will be reaching its [end of life](https://wiki.ubuntu.com/Releases) in April 2019. Also, some features included in newer versions of the popular site generator [Hugo](https://gohugo.io/) require a newer version of Linux.

We knew we wanted to upgrade to [Ubuntu Linux 16.04 LTS](https://wiki.ubuntu.com/XenialXerus) (codenamed “Xenial Xerus”), but unlike adding a language version or a new build tool, changing the operating system version on our build image is a potentially breaking change. We needed a way to test changes, and to roll them out selectively.

The answer came in modifying our infrastructure to accommodate multiple build images, with the ability to assign a particular build image to a site. This required collaboration from members of our platform and API teams, working together over a period of months, but it means that we can now test new changes an iterate more quickly than before.

It also means we can roll out changes for all new sites, without affecting builds on existing sites. And that’s exactly what we’re doing today.

## New site? New build image

Starting today, all new sites on Netlify use the “Xenial” build image by default. This means your new sites are on a modern operating system version with long term support. It also means you can start using Hugo extended and taking advantage of features like [Hugo pipes](https://gohugo.io/news/0.43-relnotes/)!

Meanwhile, existing sites will continue running on the same “Trusty” image they always have. But what if you want to upgrade, too? We’ve got a button for that.


![Build image selection settings UI at Settings > Build & deploy > Continuous deployment](/img/blog/build-image-selection-settings.png)


You can change your build image from your site’s **Build & deploy settings** page at any time. When you run a new deploy, the image version will display in the deploy logs:

![The third line of a deploy log reads, 'build-image tag: xenial'](/img/blog/deploy-log-build-version.png)


If you run into build issues, or you change your mind, you can go back to the same settings panel and switch back. You can find our more in the [build image selection docs](/docs/build-settings/#build-image-selection).


## More changes to come

Having a more flexible build infrastructure paves the way for lots more improvements and innovations down the line. We may add experimental or staging images for customers to enable in the UI, or we might experiment with offering images that serve more niche use cases. If you have ideas, mention them in the comments here, or open an issue in our open [build-image repository](https://github.com/netlify/build-image)!

We look forward to hearing from you, and to sharing further improvements as we keep iterating!
