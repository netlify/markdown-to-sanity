---
title: Learn how to add Jamstack to your infrastructure in 8 minutes
description: Gradually add Jamstack capabilities to your existing platform with
  Netlify redirects. Proxying, and shadowing unlock a simple migration path.
authors:
  - Phil Hawksworth
date: 2020-03-19T00:00:00.000Z
lastmod: 2020-05-04T00:00:00.000Z
topics:
  - tutorials
tags:
  - Jamstack
  - Architecture
tweet: ""
format: blog
relatedposts:
  - The Reign of Static Site Generators 👑
  - "Top 15 from 2019: features, resources, and news on Netlify and the JAMstack"
  - JAMstack conference videos
seo:
  ogimage: /v3/img/blog/smart-cdn-proxy.png
  metadescription: See how to gradually add Jamstack capabilities to your existing
    infrastructure with Netlify redirects. Proxying and shadowing unlock a
    simple and clear migration path. Check out this explanation and video demo.
  metatitle: Learn How to Gradually Adopt Jamstack with Netlify Redirects
---
What do you do if you have an existing site running on complex infrastructure and you want to start serving some of that site from the [Jamstack](https://www.netlify.com/jamstack/?utm_source=blog&utm_medium=proxy-shadows-pnh&utm_campaign=devex)?

This is a common scenario. Especially in the enterprise where there may have been significant investment in a variety of platforms. Even though we might have identified some sections of our sites which are obvious candidates for serving with a Jamstack architecture, the path to adding this additional capability to the already complex system is not always obvious.

Thankfully, there is a solution to this. One which is very simple to start exploring.


![Image of Netlify's CDN proxying unsatisfied requests to a legacy stack](/v3/img/blog/smart-cdn-proxy.png "Proxying and shadowing with the Netlify CDN")

This solution is possible thanks to the high performance layer of logic possible at the [Netlify CDN](https://www.netlify.com/products/edge/?utm_source=blog&utm_medium=proxy-shadows-pnh&utm_campaign=devex). The [Netlify Redirects API](https://docs.netlify.com/routing/redirects/?utm_source=blog&utm_medium=proxy-shadows-pnh&utm_campaign=devex) might look simple, but it has some powerful capabilities and we can use some of those here.


By adding a single line of configuration to a [_redirects file](https://docs.netlify.com/routing/redirects/?utm_source=blog&utm_medium=proxy-shadows-pnh&utm_campaign=devex#syntax-for-the-redirects-file) or our [netlify.toml](https://docs.netlify.com/routing/redirects/?utm_source=blog&utm_medium=proxy-shadows-pnh&utm_campaign=devex#syntax-for-the-redirects-file#syntax-for-the-netlify-configuration-file), we can catch all requests for URLs which can be satisfied by assets deployed to the CDN, and proxy all others through to existing infrastructure.

```
/*   https://existing-stack.com/:splat   200
```

This small but mighty line of configuration enables wildcard proxying of all paths requested on our domain through to an equivalent path of another resource. And since Netlify honours a concept of [shadowing](https://docs.netlify.com/routing/redirects/rewrites-proxies/?utm_source=blog&utm_medium=proxy-shadows-pnh&utm_campaign=devex#shadowing), any URLs which resolve to something hosted within the Netlify site on the CDN will be captured and served directly.

As this logic runs directly at the [edge of the Netlify CDN](https://www.netlify.com/products/edge/?utm_source=blog&utm_medium=proxy-shadows-pnh&utm_campaign=devex), it is _incredibly_ fast. And a perfect approach to gradually introducing Jamstack to your stack, or managing a complete migration from legacy stack to Jamstack.

## Watch a demo and try it out

To watch a more detailed demonstration of this, take a look at this [8 minute section of this Introduction to Jamstack video](https://www.youtube.com/watch?v=A_l0qrPUJds&feature=youtu.be&t=12003) which puts this into effect from a standing start. You can also find links to [the example repository](https://github.com/philhawksworth/fcc-proxy-demo) used in that demo so you can start experimenting for yourself.

For more information on using the Jamstack for better speed, scale, performance and time-to-market, take a look at our [White Paper](https://www.netlify.com/whitepaper/?utm_source=blog&utm_medium=proxy-shadows-pnh&utm_campaign=devex) or explore our [customers page](https://www.netlify.com/customers/?utm_source=blog&utm_medium=proxy-shadows-pnh&utm_campaign=devex).