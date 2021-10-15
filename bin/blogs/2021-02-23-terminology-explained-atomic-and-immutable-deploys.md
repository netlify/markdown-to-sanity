---
title: "Terminology explained: Atomic and immutable deploys"
description: The terms "immutable deploys" and "atomic deploys" can be
  confusing. Let's define each of those and call out why they are important and
  beneficial to an efficient and reliable development workflow.
authors:
  - Phil Hawksworth
date: 2021-02-23
lastmod: 2021-02-23
topics:
  - insights
tags:
  - Build
  - Deploys
  - Workflow
  - Terminology
tweet: ""
format: blog
relatedposts:
  - See 13 Netlify features for the best control of development workflow
seo:
  ogimage: /img/blog/explaining-atomic-immutable.png
  metatitle: What are Atomic deploys? Immutable deploys? Learn here!
  metadescription: "Let's define the terms immutable deploys and atomic deploys and call out why they are important and
    beneficial to an efficient and reliable development workflow."
---
There are terms and expressions used when talking about modern web development practices which can be confusing until explained.

Two such terms are *immutable deploys* and *atomic deploys*. Let's define each of those and call out why they are important and beneficial to an efficient and reliable development workflow.

## tl;dr:

- **Atomic deployment** - Make updates available only when they are complete and totally in place. 
- **Immutable deployment** - Guarantee the integrity of previous deploys by insulating them from future actions. 


## Atomic deploys

The word "atomic" refers to a single irreducible unit. It is used to describe deploys which include no interim state or maintenance window. With atomic deploys, all of the code, assets and configuration of a site are updated at once so that a website cannot be be served in a partially updated state.

While deploying and updating sites via FTP was once popular, this would result in some updated files being present on the server and actively served while others were still in transit. This can lead to missing dependencies and sites being served in a conflicting, partially deployed state. Modern platforms such as Netlify avoid this situation by providing atomic deploys where the new version of the site only begins receiving requests when all assets and configurations are available.

Our deployment workflow was created specifically to provide atomic deploys. Whether you are deploying your site via our CI/CD pipeline ([Netlify Build](/products/build/)), building remotely and pushing your site to us from the command line with [Netlify CLI](https://docs.netlify.com/cli/get-started/), or even using the [drag and drop interface](https://netlify.com/drop/), your updates only begin being served when all of the assets, functions, redirect rules, and configurations you send us are deployed and ready to be served to your visitors.

This is an essential part of knowing the state of your site at any given time. And of being sure that *all* the assets required by your site are available when a visitor requests them.

## Immutable deploys

While a "mutable" item can change (be mutated) over time, an "immutable" item cannot. Once created, an immutable deploy of a website becomes an artifact which will not change. Instead, deploys result in new versions or instances of the site, and traffic is routed to them accordingly.

When paired with atomic deploys, immutable deploys make it possible for sites to enjoy abilities such as instant rollbacks and versioning, and help to ensure that the code and assets of a website can always be maintained in a known state.

![Screenshot of the Netlify site deploys page](/img/blog/deploys-ui-screenshot.jpg "Screenshot of the Netlify site deploys page")

A great demonstration of this concept can be found in the Deploys tab of your Netlify sites. Here, each deployment is listed as an entry in the page. Each one is an addressable instance of the site which will not change over time, no matter what actions you take during your future development. Having this confidence that a deployment will remain the same in perpetuity means that it can be given a unique address and visited as required. It unlocks efficient and effective workflows!

## Power from fundamentals

Thanks to the fundamental principles of atomic and immutable deploys, development teams can have confidence that their sites are being served as intended. They can be confident that no deployment will ever be accessed while partially completed. And they can be confident that no deployment to their site can be destructive or jeopardize the ability to revert to any previous version of the site, all of which are ready to serve at a moment's notice and with a couple of clicks.

For more definitions of terms common to web development and the Jamstack, check out at the glossary at [jamstack.org](https://jamstack.org/glossary)
