---
title: 'Funding update: our next steps for a better web'
description: "We have exciting news: fueled by that developer faith in us (thank you!), we’ve raised $30M in additional funding with Kleiner Perkins, Andreessen Horowitz, and the founders of Slack, Yelp, GitHub and Figma all participating."
authors:
  - Matt Biilmann
  - Chris Bach
date: '2018-10-09'
lastmod: 2020-08-03
relatedposts:
  - Netlify Milestones on the road to 1 Million Devs
topics:
  - news
tweet: ''
format: blog
---
At Netlify, we've always loved the open web and believed in it as an incredible platform for both content and applications. But over 20 years in, the process of standing up all the infrastructure to power a web application feels complex and fragile. (When did we get to the point where the first step to creating an app became learning container orchestration?) We couldn't help but imagine web development modernized, without the complexity, without the bandages or duct tape. That goal inspired us to found Netlify with a mission to simplify web development. To make building web sites and apps more productive, fluid, and fun. 

We aren't alone. A passionate community has emerged around a new architecture that makes sites and apps many times faster, safer, more scalable and more compatible with modern workflows. It became known as the [JAMstack](https://jamstack.org/), as a nod towards its focus on JavaScript, reusable APIs, and prebuilt Markup. The JAMstack borrows ideas from mobile development—where apps are prebuilt and optimized ahead of delivery—and applies them to the open web. It also proposes a radical idea: perhaps the best way to fix the challenges we've had with scaling and securing web servers is to eliminate the need for them all together.

It's an approach that's catching on. Over 300,000 developers have deployed JAMstack sites and applications to Netlify.  Today we have more exciting news: fueled by that developer faith in us (thank you!), we've raised $30M in additional funding with Kleiner Perkins, Andreessen Horowitz, and the founders of Slack, Yelp, GitHub and Figma all participating. [Read the press release here](/blog/2018/10/09/netlify-raises-30m-to-replace-webservers-with-a-global-application-delivery-network/).

## The Need For Something New

Over the last few years, the web has matured tremendously. Browsers are much more powerful. JavaScript has advanced. Web Assembly is on the horizon. It certainly feels like the beginning of a new chapter for the web. You've likely felt this as you've witnessed the explosion of new frontend frameworks and API based services.

But even as we’ve moved to the cloud, we’ve largely continued to power sites with monolithic applications residing on servers and containers. There’s still origin infrastructure, and it’s increasingly complicated to maintain. We pushed on every piece to make it more performant, adding complex layers for caching and security and monitoring. But every new layer adds more complexity, and it’s starting to feel like we’ve hit the limits of the legacy web.

## A Modern Approach

That’s exactly why there’s a large shift happening towards decoupled applications. Developers obsessed with web performance have started to deploy sites in a way that mirrors the architecture patterns used for native mobile applications. Those apps are performant in part because their interfaces are pre-complied and delivered in advance, with the runtime primarily making API calls. This approach differs from the way the web has been served traditionally, with markup rendered dynamically on a server each and every time a link or button is clicked. 

There’s nothing that says the web has to work that way.  Using Git and continuous integration, web developers can prebuild web UIs and content and distribute them to the edge of the network. Connected to the explosion of API services powering everything from payment to artificial intelligence, these apps bypass the need for web servers entirely. And they are fast. Really fast.

Of course a web without web servers changes a lot of things. It requires a new infrastructure. Think of a CDN, but with the caching, routing, and deployment intelligence required to support entire applications. We're building exactly that, calling it the Netlify [Application Delivery Network ](/features/adn/)(ADN). First and foremost, It’s a developers platform, centered on Git with build bots that can prerender markup and run site generators in almost any language. The result: sites with better scalability, security and conversion rates—created via a [workflow](/features/workflow/) that takes all the maintenance, devops and server environments out of the equation. We’re pretty excited by this new way of building. So too, it seems, is the web community.

## The Next Chapter

Our goal is to continue to push what's possible with git-based workflows. Already, Netlify creates deploy previews, which function as a full staging URL for every commit. That ability alone is pretty addictive: We use deploy previews daily to collaborate on everything from homepage tweaks to new blog posts. You can do the same for each Git branch, and we recently introduced the ability to do [native split testing](https://medium.com/netlify/10-netlify-features-to-surprise-and-delight-225e846b7b21) across your branches, right at the edge of the network. 

We've also added the ability to [version and deploy AWS's serverless Lambda functions](/features/functions/) right alongside your frontend code, simply using a folder inside your repository. Features coming in the future include improvements for handling large assets in Git as well as programatic setup for API services. Imagine using Netlify's famed one-click deploy across an entire collection of cloud services! We're just getting started, and we're grateful to our supporters, community, and customers for sharing our vision.

With this next round of funding, we've never been in a better position to bring more features and capabilities to the development community. If all this excites you, too, consider [creating a free Netlify account](/pricing/) to test it out. You can also join us this month at [JAMstack_conf](https://jamstackconf.com/) in San Francisco. And if you are really committed to the cause, we're hiring and we'd love you to apply to [join our team](/careers/).

---

_This post has been featured on **[Netlify Milestones on the road to 1 Million Devs](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#world-s-first-jamstack-conf)**_:

[![Netlify 1 Million Devs article feature](/v3/img/blog/featured-on-1-million-devs-banner.png)](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#world-s-first-jamstack-conf)