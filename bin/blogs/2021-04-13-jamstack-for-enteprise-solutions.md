---
title: Best Practices for Enterprise Applications on the Jamstack
description: The Jamstack model is currently capable of powering large enterprises, however, we've heard claims that Jamstack is only for small and static sites. Let's take a look at the reality of that in this post.
authors:
  - Ekene Eze
date: 2021-05-03
lastmod: 2021-05-03
topics:
  - insights
tags:
  - Jamstack
  - enterprise
  - migration
tweet: ""
related posts:
  - "Building Large Sites on Netlify"
  - "Introducing Netlify Technology Partners: Helping Enterprises Build Better Jamstack Sites"
format: blog
seo:
  metatitle: Learn How the Jamstack Can Power Enterprise Applications
  metadescription: The Jamstack model is currently capable of powering large enterprises, however, we've heard claims that Jamstack is only for small and static sites. Let's take a look at the reality of that in this post
  ogimage: /v3/img/blog/ent-jam.png
---

There’s an occasional misconception that since [Jamstack](https://www.netlify.com/jamstack/) sites and applications don't rely on traditional server architectures, they aren't able to handle powerful and dynamic enterprise experiences. But the Jamstack, like any other technology, [has evolved a lot since its inception](https://www.smashingmagazine.com/2021/05/evolution-jamstack/) and is currently capable of handling large sites and enterprise applications.

In this post, we'll walk through some practical strategies you can employ to leverage the Jamstack offerings for your enterprise projects and applications.

## How we are solving for enterprise sites on the Jamstack

- [Making real architectural assessments](#percieved-complexity)
- [Solving for long build times](#high-build-times)
- [Integration / Migration from legacy stacks](#migration-difficulty)
- [Content personalization](#content-personalization)

<h3 id="percieved-complexity">1. Real architectural assessments</h3>

There are lots of assumptions that big companies make about how exotic their requirements are (because it has always been expensive and complex, so we MUST need the most expensive, most specialist tools, right?). Often, companies poorly assess their requirements, basing them on capabilities they see in a list of features from large enterprise software vendors instead of what they actually need.

Better education and more intentional assessments of enterprise infrastructural requirements can offer a solution to this. As a community, it falls on us to collectively educate ourselves and others about the perceived complexities of enterprise applications. Making real assessments of enterprise stacks and representing them accordingly as it relates to the Jamstack would ultimately lead to better solutions.

<h3 id="high-build-times">2. Long build times</h3>

Enterprise sites are sometimes very large, with many thousands of pages. Over time regular addition of content by the teams managing it can also see the site size and its build time swell. Seeing that the Jamstack architecture is based on pre-generating all the site's pages at build time and hosting it on a CDN, build times can get unfavourably long for very large sites.

The disadvantages of that is:

- Cost - the more build minutes your site demands, the more you pay
- Longer lead times for update previews

This is a common challenge when dealing with large sites on the Jamstack. However, a number of techniques have become popular in addressing this challenge, including:

- Splitting large sites into logical sub-sections
- Generating only necessary pages at build time
- Incremental builds

#### Splitting large sites into logical sub-sections

This approach encourages you to break out your large site into smaller, focused micro sites that are independent of each other. Then, tie them back together using [Netlify redirects](https://docs.netlify.com/routing/redirects/) and [proxies](https://docs.netlify.com/routing/redirects/rewrites-proxies/). A theoretical exmple would be:

- You have a main site at `www.company.com` that links off to multiple other pages like `/about`, `/docs`, `/products`, `/blog` etc.
- If that is the case, then it makes sense to build `products`, `blog`, and `docs` as standalone micro sites which will be available as independent sites.
- In your main site `(www.company.com)`, you can use Netlify redirects or proxies to connect the micro sites back to your primary site as:

1. `www.company.com/docs` - With proxies or
2. `docs.company.com` - With redirects, depending on your preference.

> If this theory sounds a bit too vague, please refer to this [indepth guide](https://www.netlify.com/blog/2020/06/16/building-large-sites-on-netlify/) for a better understanding

With this approach, updates to the `docs`, `blog` or `products` micro sites will not trigger a full rebuild of your main site, which will result in a faster go-live time and save you cost on build minutes. Not to mention that you get the power of independent reviews and previews on all the micro sites. My colleague [Bhavana Srinivas](https://deploy-preview-3795--www.netlify.app/authors/bhavana-srinivas/) did a great job at explaining this process in more detail [here](https://www.netlify.com/blog/2020/06/16/building-large-sites-on-netlify/). I also just finished recording [this tutorial](https://youtu.be/BhQ76OyZTPE) that demonstrates this exact functionality. If you prefer learning with tutorials, feel free to give it a shot!

#### Generate only necessary pages at build times

Often, we find that there are some pages in a site that are rarely visited. This is different for everyone, but in my experience, I've found that pages like: `/legal`, `/codeofconduct`, `/archives`, etc are rarely visited by users. If you have such pages that users don't ordinarily visit in your site, then you can delay generating them until after the main build has finished and your site has gone live. This allows you to use the Jamstack architecture without getting bottlenecked by long build times.

Having a function like [On-Demand Builders](https://ntl.fyi/3ae6DK8) which can generate a view and put it in the CDN when it is first requested is a great solution to the need for generating sites with huge numbers of pages. This will ensure that only necessary pages are generated at build time, resulting to much faster builds and better development experience for maintainers. We have a proposal for a framework agnostic approach to this solution called [Distributed Persistent Rendering](https://ntl.fyi/32fP5ZK) which you can also contribute to [here](https://ntl.fyi/3x8UAYq).

#### Incremental builds

Incremental builds are approaches employed by some static site generators like Gatsby and react-static to rebuild only certain parts of your site when there are new changes. This can make a significant difference seeing that by default, any update on your site (no matter how small) would trigger a rebuild of your entire site.

With incremental builds, you can configure your site of a thousand pages to only rebuild a specific page when there's an update to the said page, while leaving the rest of the site as is. Here's a [guide](https://www.netlify.com/blog/2020/04/23/enable-gatsby-incremental-builds-on-netlify) that [Jason Lengstorf](https://www.netlify.com/authors/jason-lengstorf/) wrote to enable incremental builds on Gatsby sites hosted on Netlify.

<h3 id="migration-difficulty">3. Integration / Migration from legacy stacks</h3>

There's an assumption that as an enterprise, adopting Jamstack will mean a large and expensive migration process or should be a huge, big bang launch. This assumption is not unfounded, as it comes from the experience of previous architectures where this is the case.

Luckily we can solve for that since the architectural model of Jamstack is easier to reason about. We can conceptualise things like:

- Where the traffic is going and
- What we need to serve people; far more easily than before.

Migrations can be done very gradually by adding a layer of Jamstack in front of the existing platform (no matter what that is) and gradually capturing more and more of the requests in the new Jamstack layer over time as we migrate more to it. That is the model explained in this [Jamstack Explorers video](https://explorers.netlify.com/learn/exploring-netlify-redirects/migrations-with-proxies), this [blog post](https://www.netlify.com/blog/2020/03/19/learn-how-to-add-jamstack-to-your-infrastructure-in-8-minutes/), and this [case study](https://www.netlify.com/blog/2020/09/30/from-legacy-infrastructure-to-a-lean-and-powerful-stack-with-netlify/#main).

If you have migrated to the Jamstack following a different approach, we'd be glad to get your thoughts on that experience; what worked and what didn't, or any recommendations for a better experience.

<h3 id="content-personalization">4. Personalization</h3>

We've often heard claims that pre-generated pages cannot be personalized because they are static. However, there are lots of models to support this. Personalization is a spectrum, from universal content, to localized content, to targeted category content, to individually personalized content. Jamstack can satisfy them all. Here's how:

- Universal content - This is readily available via your standard build process. On Netlify, your site is automatically deployed to our [global content delivery network](https://www.netlify.com/products/edge/) therefore, serving your users from the edge nodes closest to them.

- Localized content - Build versions for different locales and route to it using [Netlify redirects](https://docs.netlify.com/routing/redirects/). If you would like to serve content to your users based on their location (e.g. deliver a site in a user's local language) that is already being done by multpile users. See [Edge Handlers](https://www.netlify.com/products/edge/edge-handlers/) for more details.

- Targeted category content - To do this, you need users to be identified and associated with certain categories. This is achievable with user accounts and auth supported by things like identity providers, [jwt](https://jwt.io/), roles and routing.

- Personlized content - Again with auth and accounts, but perhaps now using APIs and progressive enhancement to populate some (or all) content client-side. Think [app.netlify.com](https://app.netlify.com/)!

### Motivations to rethink your stack?

Enterprise applications generally operate at scale, which makes them an ideal candidate to leverage the Jamstack to increase performance, security and also reduce cost. It is also easier to scale on the Jamstack model, seeing that traditional enterprise architectures deal with heavy traffic loads by adding more logic to cache popular views and resources, Jamstack provides this by default.

You also get a boost in performance and consequent user experience improvements - amongst [other benefits](https://jamstack.org/why-jamstack/) available on the Jamstack. If it helps, there are a ton of enterprises currently running on the Jamstack, some of which are captured in the screenshot below and also documented [on the Netlify customers page](https://www.netlify.com/customers/)

![Netlify Enterprise customers logos](https://res.cloudinary.com/netlify/image/upload/v1617820760/blog/ent-jammies.png)

If you would like to read about these companies and how they are using the Jamstack to power their products and sites, feel free to check out our [case studies section](https://www.netlify.com/topics/case-studies/) where we tell most (if not all) their stories in detail.

Lastly, if you can migrate to the Jamstack to improve your users' experience, save on costs, and help your engineers become more productive, confident and fulfilled. Then the question really is, why not?

#### More resources:

[How to Split large Jamstack sites into microsites](https://youtu.be/BhQ76OyZTPE)

[Migrate to the Jamstack in 8 minutes](https://www.netlify.com/blog/2020/03/19/learn-how-to-add-jamstack-to-your-infrastructure-in-8-minutes/)

[From legacy to Jamstack - case study](https://www.netlify.com/blog/2020/09/30/from-legacy-infrastructure-to-a-lean-and-powerful-stack-with-netlify/#main)
