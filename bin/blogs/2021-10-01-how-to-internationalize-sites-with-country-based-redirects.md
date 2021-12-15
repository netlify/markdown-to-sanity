---
title: How to Internationalize Sites with Country-Based Redirects
description: In this post, you will learn about the best practices for setting
  up localization and internationalization for your sites on Netlify. We will
  explore the different ways in which you can build a site that serves multiple
  locales on Netlify.
authors:
  - Bhavana Srinivas
date: 2021-11-05
lastmod: 2021-10-01
topics:
  - tutorials
tags:
  - internationalization
  - i18n
  - Redirects
  - localization
tweet: ""
format: blog
---
If you have a brand that serves a global audience, you probably want to internationalize your web properties so that visitors to your website see the version that makes most sense to them. This way, a visitor from Germany will see the German version or be routed to the `.de` domain rather than hit the English version on the main `.com`. Netlify can direct these requests in a couple different ways, allowing you to localize your site and provide your users a great experience.

When building sites for multiple locales or domains, Netlify provides a clean and well-tested strategy for setting these up. This involves two steps: 

1. Using a [micro frontend architecture](https://martinfowler.com/articles/micro-frontends.html), an architectural style where independently deliverable frontend applications are composed into a greater whole. We recommend you split the locales into sites of their own on Netlify. Note: this approach also works well for [building large sites on Netlify](https://www.netlify.com/blog/2020/06/16/building-large-sites-on-netlify/). 
2. Using country-based [redirects](https://docs.netlify.com/routing/redirects/) at the edge to route users to the right version of the site based on the region that the user browses the site from

Let’s dig more into this approach to internationalization. 

The basic premise of this strategy is to separate the different locales into their own individual sites on Netlify. Say you have the main `.com` site for the North America region and a `.de` site for the German market. Instead of building the English and the German pages all as 1 site, our recommendation is to split these up as two sites on Netlify - one for the NA market and the other for Germany. 

PS: creating a new site on Netlify involves [connecting your repo to Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/). You can build as many sites as you want from one repository. 

PPS: triggering a build on Netlify from the CMS can be done using [Build Hooks](https://docs.netlify.com/configure-builds/build-hooks/).

![](https://lh3.googleusercontent.com/_imIyt56rVU21X_sSIW7X-rMZI0AWKNJmiplHxRuzoN_YUVv5IdEvMYniq3N-TxFyk0CfzWcj3A0U3rrzq64RYCw25CUopjp8v-d02xey6e-MAa-Ci6w_Y_agqcSY0aE4gx52Hcx=s0)

This also assumes you are able to split your content within your CMS for the two specific sites. Typically teams use a translation service like Smartling or Transifex amongst many others that will sync the main language (say, `en`) to others. When a change is made in the CMS, the service will kick off jobs for the other languages too and keep them all in sync. 

This is what the setup looks like. 

![](https://lh5.googleusercontent.com/JHPorKYb3PAZw9ekLy6RME4NW2-ln3MUu_5TjkYfrvsPl3wUx-jZTn5Kl-KdC9_x0_9I_BkMrMR2bBogBVvblybhVxpmwULvwyKRyLygano97-ltgF34LLv-EMWeEErsGE1Q62Yk=s0)

Deploying these locales as separate sites gives you a lot of advantages:. 

* By default they come with a `.netlify.app` subdomain, which you can either retain and access the locales at the subpath —- like `www.site.com/en` and `www.site.com/de` along with [proxy rules on Netlify](https://docs.netlify.com/routing/redirects/rewrites-proxies/)
* Or, you could give it a custom subdomain that can be accessed at `www.site.com`, `site.de.com` and have a subdomain structure for the sites that you can set up using [Netlify Redirects.](https://docs.netlify.com/routing/redirects/)
* Containing and managing the builds per site/locale. Changes in a certain locale will only trigger builds in those specific sites, and not all of them.  This helps keep your build times in check and also helps push content out quickly.
* Teams have more control over the build/deploy workflow per site. As your company scales internationally, new sites can be spun up with minimal fuss and without touching the existing sites. 
* Per locale, you can even spin up multiple lower level environments like staging, UAT, etc and there will be a clean separation of the environments for you to test on. 

Ultimately, this is how the workflow for building and deploying your sites will come together:. 

![](https://lh5.googleusercontent.com/H6egIpFMQs74gLtr8Cq321SkW8b9Z9rzEcgDHbR1-7JZFzKMJLLjVJTgBH3wV6CtYZxwZbNsj9dbeAxcKhgRkIo5rFLd8iyVYXZjSlZs8ayuNm9GpIW5osS8TMawAtnntMPDkuq9=s0)

From a user perspective, you can ensure that the experience between locales is seamless. 

1. The first thing you need to know is the user’s location, so that the right site can be served. The user’s location is determined from the browser settings or can be overridden using JS when a user clicks on a specific locale. 
2. Next, you will have to add rules to the Netlify edge that will ensure the user is taken to the right site, the main `.com` or the `.de` site based on their location. For this, Netlify Redirects and Proxies can be set up at the edge. 

If you want to redirect the user to the `.de` subdomain (`de.site.com`), then you’ll need rules like this in the netlify.toml file of your main `.com` domain: 

```
# A redirect rule with many of the supported properties
[[redirects]]
  from = "/*"
  to = "/de.site.com/:splat"

  status = 301

  # By default, redirects won’t be applied if there’s a file with the same
  # path as the one defined in the `from` property. Setting `force` to `true`
  # will make the redirect rule take precedence over any existing files.
  force = true

  # Redirect based on conditions including browser language, geolocation,
  # identity role, and/or cookie presence.
  conditions = {Language = ["de"], Country = ["DE"]}
```

If instead you want to proxy content from the `/de` folder instead, you can write a rule like this:

```
/de/* /site-de.netlify.app 200 ---> This will proxy content for the /de path from the de specific site on Netlify
```

![](https://lh5.googleusercontent.com/OT3ewELhByuhDIqHHk7h4HQhitipwu1WNkOLm0GwPe1t9eShGVpdRK7L4VKo-cWLVS1QSYHC6XQm1jMK-4r4byIEUvp1ajcOVjxIhR48FNUmyT2-9KppX_sCw82O4xlFSVsK1KN-=s0)

Sometimes, within a region, you might have language specific localization. For instance, a Canadian site might have both French and English versions, say `www.site.ca/fr` and `www.site.ca/en`. In this case, you can have one root site, such as www.site.ca that will serve the `/en` content, and another Netlify site for the `/fr` content, say site-fr.netlify.app that you can proxy all the `/fr` routes to.

Another option here is to have the following structure:  `site.com/ca/fr/` and `site.com/ca/en` which you can also support with Netlify [language based redirects](https://docs.netlify.com/routing/redirects/redirect-options/#redirect-by-country-or-language).

Cornerstone OnDemand does exactly this. They’re a public company that helps organizations recruit, train, and manage their people. They have 12 international sites to attract potential buyers and convert them into sales leads by providing educational, product, and company information, all while maintaining consistent branding across the web properties. They use a similar architecture to the one described above in order to control each of the sites independently and serve internationalized content.

**[Learn how Cornerstone OnDemand manages 12 international properties with Netlify redirects → ](https://www.netlify.com/blog/2019/07/02/cornerstone-ondemand-delivers-web-projects-30-faster-with-netlify/)**

This is just one way to set up your sites on Netlify. Other teams have user different approaches based on their team size, site size and tech stack. Our Solutions Engineering and Support teams can explore these options with you and see what works best for you. [Contact us](https://www.netlify.com/enterprise/contact/) to figure out your internationalization strategy on Netlify.
