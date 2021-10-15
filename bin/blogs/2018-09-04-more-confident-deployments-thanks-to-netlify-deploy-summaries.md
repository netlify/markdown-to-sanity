---
title: More confident deployments thanks to Netlify Deploy Summaries
description: >-
  Announcing the release of Deploy Summaries. Helping you to understand the
  status of your deploys even better.
authors:
  - Luna Yu
  - Phil Hawksworth
date: '2018-09-05'
topics:
  - news
tags:
  - Continuous Deployment
  - Netlify Drop
  - HTTPS
  - Redirect rules
  - Custom Header rules
tweet: ''
format: blog
---
At Netlify, we strongly believe that a good developer experience can lead to the creation of a better user experience on your sites. That is one of the reasons that we strive to make the process of building and deploying your sites as pleasant as we can. Clarity and simplicity are key, and we continue to work on making those better and better in the Netlify admin UI.

That work never ends.

## A helping hand during your deployments

One way that we try to make your life easier during deployment and development is by relaying information back to you in the Deploy Logs. These logs already display all of the standard output which comes from running your build in our Continuous Deployment environment. But there are a few convenient Netlify-specific things that we've now added to the deploy logs:

* Redirect rules
* Custom header rules
* Mixed content warnings

[Redirect rules](https://www.netlify.com/docs/redirects/) and [Custom Header rules](https://www.netlify.com/docs/headers-and-basic-auth/#custom-headers) are configurations that Netlify let you include in your code, which we then use to automatically configure the global CDN on your behalf. This is powerful, but can be hard to validate from within your own build. (Especially locally where, you don’t have [Netlify’s multicloud global CDN](https://www.netlify.com/blog/2018/05/14/how-netlify-migrated-to-a-fully-multi-cloud-infrastructure/) replicated and running!) Rather than expecting you to go hunting around your latest deployment to ensure that these rules have been correctly applied, we simplify things by reporting successful or failed configurations of these rules in your deploy logs.

[Mixed content warnings](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/what-is-mixed-content) are also important for us to report to you in a timely way. We believe very strongly in the importance of security on the web and we recently made all [new sites use HTTPS by default](https://www.netlify.com/blog/2018/07/02/all-new-sites-on-netlify-are-https-by-default/) thanks to the free and automatic provision of digital certificates. We’d rather not have the browser report to you (or your users) if you have accidentally left some resources to be served explicitly over HTTP rather than HTTPS. That is why we automatically detect this for you during site compilation, and let you know via a warning in your build logs.

## Making the information more obvious

All of this additional information is very useful. But we wanted to make it far easier for you to see.

So now, in addition to a live-streamed Deploy Log for you to watch during a build (or review any time afterwards), we have introduced a [Deploy Summary](https://www.netlify.com/docs/continuous-deployment/#deploy-summary) to your dashboard.

<iframe width="560" height="315" src="https://www.youtube.com/embed/4kF_ra88A7I?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

These summaries are available at the top of each new site deploy, whether those sites use our automated [Continuous Deployment](https://www.netlify.com/docs/continuous-deployment/) service, or the drag-and-drop simplicity of [Netlify Drop](https://app.netlify.com/drop).

We think that this small change will make it easier for you to keep the web secure, one web site at a time. And to be confident that your custom HTTP headers and redirect rules are all specified as intended. We hope you like it.
