---
title: Building Large Sites on Netlify
description: >
  When the site you are building keeps growing in size and is very large, the
  time it takes to pre-build that site takes longer too. This article goes into
  detail about how best to architect your web property to build quickly and with
  confidence.
authors:
  - Bhavana Srinivas
date: 2020-06-16T00:00:00.000Z
lastmod: 2020-06-16T00:00:00.000Z
topics:
  - insights
  - tutorials
tweet: ""
format: blog
relatedposts:
  - Announcing Faster Deploys for Large Sites
  - 5 Optimizations for Faster Gatsby Builds
seo:
  metatitle: How to Build Large Sites effectively on Netlify
  metadescription: Learn how Netlify makes it easy to build and host your site as
    it scales. Use Netlify Redirects and Proxy to provide a seamless web
    experience for your users as your site grows in size.
  ogimage: /v3/img/blog/building-large-sites-netlify.png
---
Sites typically grow in size and complexity; over time, teams add new content and new sections. With the Jamstack architecture , sites are pre-built as static assets and hosted on a CDN. So as more content is added to the site, the build times can grow. This also depends on the kind of processing you do in the build phase (processing images takes a really long time), the static site generator you use to build the site and the infrastructure you build the site on. For the purpose of this article, I am going to focus on how to structure the site, and less on the specific frameworks and tools to build it.

Long Build times means that your editors and developers have to wait for some time before they can preview the changes they have made or go live with it.

Netlify not only provides the infrastructure and workflows for frontend teams to [build and host sites](https://www.netlify.com/products/) really easily but also really clever features that allow your site to scale up. This blog post walks through a scalable way to architect the site while also using Netlify Redirects and Proxies to provide a uniform experience for the end users of your site.

### tl;dr

As sites grow, the time and complexity required to build and maintain them grows as well. To keep your [site builds](https://www.netlify.com/products/build/) fast, consider breaking your site into smaller, focused microsites, then using Netlify redirects/proxy to recombine them to provide a seamless web experience for your end users.

## Building a large site on Netlify

Let us take an example ecommerce site to explain how to architect the site. Assume the site can be reached at [www.e](http://www.custom-ecommerce.com)[xample.org](http://xample.org) and has 3 sections:

1. Marketing pages (about us, values, contact us etc) that are mostly static and barely change in content.
2. Blog (a few 100 posts, keeps growing, content editors use the headless CMS to post content)
3. Product catalogue and information (this is fed into the headless ecommerce platform)

![E-commerce sites with multiple sections](/v3/img/blog/site-structure.png "E-commerce sites with multiple sections")

When the site builds, the static site generator will use APIs to pull content and product information (images, descriptions, etc.) and build static assets for each of the content/code changes will trigger builds on Netlify. Folks will have to wait for the site to build before changes go live.

![Building a large site on Netlify](/v3/img/blog/building-site-on-netlify.png "Building a large site on Netlify")

## Splitting the large site into microsites

Instead, what if you split the site up into multiple smaller sites; one per section? In our e-commerce site example, the logical split seems to be the marketing pages, the blog and the product catalog. Maybe if you are selling several designer brands, each brand can be a microsite as well.

What does building a site this way look like?

![Building e-commerce microsites on Netlify](/v3/img/blog/splitting-ecommerce-site.png "Building e-commerce microsites on Netlify")

## Splitting up the site will reduce the build time

1. The build time is much smaller now, corresponding only to the microsite that you are building at any time.
2. Different teams can add content to the microsites independent of each other.
3. Content updates to your site goes live much faster than before.

## Setting up domains to reflect microsites

Now that we know how this architecture affects build time, let's move on to Hosting. Here we have two options based on whether you want to use subdomains or different URL paths for the different sections of your site.

#### Set up the microsites as their own subdomains, use Netlify Redirects

1. You have the main www subdomain for the landing page of the site.
2. 1. say [www.example.org.com](http://www.custom-ecommerce.com)
3. Each microsite has a custom subdomain.
4. 1. Each of the other sections are subdomains like blog.[example.org.com](http://custom-ecommerce.com), [products.example.org.com](http://products.custom-ecommerce.com).
5. You can now host each of these subdomains on the [Netlify High Performance Edge](https://www.netlify.com/enterprise/) so that users see the content on the site as soon as possible and as reliably as possible.
6. You redirect users from 1 subdomain to the other using Netlify Redirects.

![Redirecting to subdomains using Netlify Redirects](/v3/img/blog/redirecting-to-subdomains.png "Redirecting to subdomains using Netlify Redirects")

Setting up the redirects is very straightforward on Netlify.

By adding a single line of configuration to a[`_redirects` file](https://docs.netlify.com/routing/redirects/?utm_source=blog&utm_medium=proxy-shadows-pnh&utm_campaign=devex#syntax-for-the-redirects-file) or the [`netlify.toml`](https://docs.netlify.com/routing/redirects/?utm_source=blog&utm_medium=proxy-shadows-pnh&utm_campaign=devex#syntax-for-the-redirects-file#syntax-for-the-netlify-configuration-file), we can catch all requests for URLs which can be satisfied by assets deployed to the Netlify Edge.

`/blog /https://blog.example.org/:splat 301`

`/products /https://products.example.org/:splat 301`

#### Setup the microsites as different URL paths, proxy content from them

If you do not want separate subdomains per section, you can still populate the Blog and Products section by proxying content from those microsites.

1. You have the main www subdomain for the landing page of the site – same as above.
2. The other microsites retain the default netlify subdomain say blog.netlify.app and, products.netlify.app
3. You host the main www on our High Performance Edge network.

![Proxying to microsites at Netlify Edge](/v3/img/blog/proxying-to-microsites.png "Proxying to microsites at Netlify Edge")

As users navigate to different paths in your site, say [www.example.org.com/blog](http://www.custom-ecommerce.com/blog), the content from the blog microsite will be proxied to them.

By adding a single line of configuration to a `_redirects` file or the `netlify.toml`, we can catch all requests for URLs which can be satisfied by assets deployed to the Netlify High Performance Edge, and proxy all others through to other sites, either on or [off Netify.](https://www.netlify.com/blog/2020/03/19/learn-how-to-add-jamstack-to-your-infrastructure-in-8-minutes/)

`/blog https://blog.netlify.app/:splat 200`

`/products https://products.netlify.app/:splat 200`

### Considerations for splitting up a large site into smaller sections

It is totally up to you how you split the site, but some ways to think about it are:

1. Are there parts of your site that change often via frequent edits, or new content being added often?
2. Are there parts of your site that are more static than the rest?

   1. Sometimes most of the site is static, while a section of it can be dynamic, making API calls and changing frequently.
3. Are there parts of your site that need to be LIVE much faster than others?

   1. If your site has a section (like Products or “breaking news”) that needs to go live soon without too much build time?
4. Are there different teams that contribute/own different parts of your site?

   1. If your site is really big, and several teams contribute to it (say Product, Marketing, Engineering etc), then it can make sense to split up the site by these functionalities.

I used an ecommerce application as an example, but this can easily extend to any kind of web property. Docs sites for instance grow in size, and different teams internally are responsible for the different products/services that a company offers. That will be a great candidate for this architecture. In fact, the [Citrix docs site](https://docs.citrix.com/) is built and hosted on Netlify, and they have 120 microsites in production.

### Achieving Optimal Build Times!!

This way, you can split your site into microsites based on different criteria to achieve optimal build time. The end user browsing your site still gets a superior web experience on your site with the redirects and proxy rules that you set up per site.

Also, based on the type of site you are building, it might not even matter that the site takes a while to build.

1. For instance, yours could be a mostly static site that barely changes in content or code, and that content does not have to go live immediately.
2. Or you have a nightly build scheduled, and it does not matter how long the site takes to build.

If you and your team are working on a large site or have a use-case in mind for Netlify, [drop us a line and we will get in touch with you](https://www.netlify.com/enterprise/contact/).