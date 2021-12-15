---
title: How Algolia Created Its Netlify Build Plugin
description: "Algolia's team developed a custom Netlify build plugin that
  indexes sites for search after a deploy is successful. This post is a deep
  dive into their process and includes insights for developers who are curious
  about rolling their own custom plugins on the Netlify build infrastructure. "
authors:
  - Sylvain Bellone
date: 2021-01-20
lastmod: 2021-01-19
topics:
  - tutorials
tags:
  - Build Plugins
  - Search
tweet: ""
format: blog
relatedposts:
  - Tech Partners Create Custom Build Plugins to Reach Developers in Their
    Workflow
  - Creating and using your first Netlify Build Plugin
seo:
  ogimage: /v3/img/blog/how-algolia-created-its-netlify-build-plugin.png
  metadescription: Learn how Algolia developed a custom Netlify build plugin that
    indexes site's structured date for search after a deploy is successful. Gain
    insights for developing your own build plugin.
  metatitle: How Algolia Created Its Netlify Build Plugin - Site Search Indexer
---
*This post was contributed by our friends at Algolia.*

We recently released [the Algolia Netlify plugin](https://www.globenewswire.com/news-release/2020/10/06/2104357/0/en/Algolia-Streamlines-Search-for-Jamstack-Powered-Websites-With-New-Plugin-for-Netlify.html). You can [read more about](https://www.netlify.com/blog/2020/10/07/tech-partners-create-custom-build-plugins-to-reach-developers-in-their-workflow/) the plugin, [watch an intro](https://www.youtube.com/watch?v=zbdfqfn1yiM), or get [started with it right away](https://app.netlify.com/plugins/@algolia/netlify-plugin-crawler/install). Algolia is a flexible search and navigation platform, which enables cutting-edge, web, app and e-commerce experiences. This post is a deep dive about how we built it and offers some insights for other creators of Netlify build plugins.

> Learn more about how to [use Netlify Build Plugins](https://docs.netlify.com/configure-builds/build-plugins/) or [create your own](https://docs.netlify.com/configure-builds/build-plugins/create-plugins/) Netlify Build Plugin.

## What is the Algolia Netlify plugin?

The Algolia Netlify plugin is an easy way to add search on your Netlify website, allowing you to add an Algolia search experience in just a few lines of code. One advantage is that after setup, the search results provided by the plugin will evolve with your website content, automatically refreshing each time you publish a new version of your site, which removes the hassle of maintaining the search index. Each time you publish a new version of your site the plugin triggers a crawler that browses and extracts your website's content and pushes it into an Algolia index.

![Diagram representation of how Algolia triggers the crawler based on Netlify versions](/v3/img/blog/plugin_flow.jpg)

## How we built it

The goal of the plugin is to offer an easy-to-setup Netlify search experience by leveraging the following existing Algolia products:

* The Search API, the actual search engine
* The Crawler, an add-on that crawls websites, extracts pages content into structured data, and pushes them into Algolia
* The Autocomplete.js UI library

Our main objective was to create a Netlify plugin that would, after each deployment, trigger the Crawler to browse the website and build a ready-to-use Algolia index. This sounds simple, but you will see that there were a lot of things to put together in order to provide a great user experience. In the following sections, we will detail the work that was needed on each existing and new component.

## Algolia account and authentication

To use Algolia, the first requirement is to have an account. Then, to access the Algolia Crawler interface you need dedicated permissions, normally activated manually. To provide a smooth experience, and avoid having the users to copy/paste tokens or request accesses, we added a new login option: "Login with Netlify" that is integrated with [Netlify's OAuth2 API](https://docs.netlify.com/api/get-started/#authentication). When you login to Algolia with your Netlify account, we automatically create an Algolia account (or link it if you already have one), and grant access to the Algolia Crawler interface. We also retrieve and store a Netlify token, that we'll use later on.

![The login screen for Algolia with options for Github, Google, and the new Netlify login button](/v3/img/blog/netlify_login.png)

## Crawler UI Updates

We needed to provide a reporting interface for users to know how the Crawler was behaving on their website. To make this a smooth experience we give Netlify users access to the existing Crawler interface, with a few tweaks.

To manage the available tools, we introduced a new "Netlify" role that provides access to some of the advanced configuration screens and most of the advanced debugging tools that we provide to our normal customers.

![Algolia Crawler Interface](/v3/img/blog/crawler_interface.png)

This Netlify role also grants access to a few extra pages that were developed exclusively for the plugin and are only available for Netlify users. These pages permit to manage the plugin installation on the Netlify sites. They use the OAuth token that we retrieve during authentication to talk with the Netlify API, list the sites of the user, and push the necessary API credentials to Netlify when the plugin is installed on one of the sites.

![Screenshot of Plugin Configuration for Netlify Sites](/v3/img/blog/plugin_management.png)

## API update

We already had a public API to programmatically manage a crawler. What we needed was an extra endpoint dedicated to Netlify tasks when a website is deployed:

* Create a crawler if none already exist (we create up to one crawler per branch)
* Update the settings according to the options set in `netlify.toml`
* Run the actual crawl

This endpoint is called when a build is triggered on Netlify.
It is protected by credentials that are automatically added to the environment variables of your Netlify site when you install the plugin from our Crawler interface, thanks to the OAuth token.

## Data extraction

Algolia Crawler was originally named Algolia Custom Crawler, as the data extraction can be fully customized. Indeed, our crawler enables paying customers complete control over the data extracted using a `recordExtractor` function, a JavaScript function that you have to implement yourself. It exposes the DOM of each visited page through a [Cheerio](https://cheerio.js.org/) instance, and you have the responsibility to extract the data and return structured records:

```
recordExtractor: ({ $, url }) => {
  const hierarchy = $('.breadcrumb > ul > li > a')
    .map((i, el) => $(el).text())
    .get()
  const content = $('#main-content .section-main p')
    .map(function() { return $(this).text() })
    .get()
    .join(' ');
  return [{
    url,
    hierarchy,
    content,
  }];
}
```

This is a premium feature which produces stellar results, as each of our customers can create a function tailored for its website, and extract exactly the desired data.

For the Netlify plugin, we wanted to provide a generic solution that would handle most websites and without the need of any code or advanced configuration. The challenge is that every website is very different, and even though HTML now provides a lot of [tags to structure the content of a page](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning), most websites still rely mainly on good old `divs`. This makes it more difficult to extract the actual content and get rid of the rest (menus, footers, etc...).

There is no magical way to do this. The solution is to start with a simple extraction function that tries to extract the content from multiple places in each page and test it on real webpages. From there, we can identify common patterns and iterate. To be sure that each modification in the extraction process is beneficial, we took the time to make snapshots of various web pages (hosted on Netlify of course!), run the extractor on them and create extraction snapshots. This way, each time we tweak the extraction algorithm, we immediately see what it breaks or improves:

![Screenshot of regression test results related to data extraction](/v3/img/blog/regression_tests_extraction.png)

## Front-end bundle

An important piece in a great search experience is the front-end to display the search results, which is always up to the website maintainer to build and integrate. At Algolia, we have many libraries available to help our users with this process, but with the Netlify plugin, we wanted this step to be even easier. Since we know the structure of the extracted records, we decided to build a pre-packaged UI based on [Autocomplete.js](https://github.com/algolia/autocomplete.js/), a very lightweight autocomplete library that we develop internally and have been using to build [DocSearch](https://docsearch.algolia.com/) UIs for years.

The result is that, by copy/pasting those few lines in your website code...

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.css" />
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@algolia/algoliasearch-netlify-frontend@1/dist/algoliasearchNetlify.js"></script>
<script type="text/javascript">
  algoliasearchNetlify({
    appId: '<YOUR_ALGOLIA_APP_ID',
    apiKey: '<YOUR_ALGOLIA_SEARCH_API_KEY>',
    siteId: '<YOUR_NETLIFY_SITE_ID>',
    branch: 'master',
    selector: 'div#search',
  });
</script>
```

...that you end up with an autocomplete UI.

![Screenshot of search results with autocomplete user interface](/v3/img/blog/autocomplete_ui.png)

Of course, for the design to be perfectly adapted to your website, we still recommend building your own, but we believe this pre-packaged UI is a great way to get started in a few minutes. Of course, we expose a [theme property](https://github.com/algolia/algoliasearch-netlify/tree/master/frontend#theme) to let you tweak the colors.

## The Actual plugin

The last piece of the Algolia Netlify plugin is... the actual plugin itself!

Creating a Netlify plugin is a smooth experience. Netlify’s APIs and tools are very complete and easy to use, we can see that it's designed to be used with API services like Algolia. The core of our plugin could be summarized to the following API call:

```
function onSuccess(params) {
  require('https').request('https://crawler.algolia.com/api/1/netlify/crawl', { method: 'POST' }).end();
}
```

But when we've implemented the initial version, the `onSuccess` build event wasn't available. The last event triggered by a build was `onPostBuild`, which is triggered after the build, before the site is published. Since our plugin is meant to crawl the live website, we needed a later event. We contacted the Netlify team who were very reactive and soon enough, the `onSuccess` event was made available for our plugin. It is at this stage that the plugin calls our Crawler API to trigger the crawl.

Note: the `onSuccess` event is currently under development by the Netlify team, and the timing of when that event fires could change in the future. Watch for product updates around this topic!

![Screenshot of Netlify build logs showing site is live, focused on the logs generated by the Algolia plugin](/v3/img/blog/netlify_logs.png)

Since the complete crawl can take time (depending on the number of pages of each website), the plugin doesn't block the build process and continues in the background.

## Development and release

We decided to put the plugin code and the UI code in the same repository. We also added a directory containing a static test website.

![Screenshot showing the organization of a repo with three directories labeled frontend, plugin, and public](/v3/img/blog/repo_organisation.png)

This allows us to have centralized scripts for development and release. Since the [Netlify CLI](https://docs.netlify.com/cli/get-started/) permits to simulate a Netlify build locally, we were able to setup a single `yarn dev` command, which:

* Runs a development version on the frontend
* Serves a test website, which uses the development frontend
* Trigger a Netlify build which runs the local version of the plugin, and can call a local crawler

It is similar for releasing: Netlify plugins are distributed through npm’s Public Registry. The frontend is distributed with [jsDeliver](https://www.jsdelivr.com/), also relying on npm’s Public Registry. As for our [test website](https://algoliasearch-netlify.netlify.app/), it's hosted on Netlify of course. That means that each time we push all our latest changes on GitHub, the test website is updated. The release process can be summarized in 3 steps:

* Run our [release script](https://github.com/algolia/algoliasearch-netlify/blob/master/scripts/release.sh), which builds the Netlify plugin and the frontend, and publish them on npm
* Push all changes on GitHub
* [Submit the new version of the plugin](https://github.com/netlify/plugins/blob/master/docs/CONTRIBUTING.md#update-a-plugin) for validation by the Netlify team

## Recent changes and enhancements

If you have tried the first beta version of the plugin back in October, we've made a lot of improvements and polish since then! So we wanted to finish this article with a summary of all the changes that have been included in the v1. Try them out!

* 🆕  New option to execute the JavaScript of pages
* 📑  Extraction templates, to extract multiple records per page, compatibles with the DocSearch UI
* ✨  Our pre-built UI now uses [Autocomplete.js v1](https://autocomplete.algolia.com/), a complete rewrite of our autocomplete library
* ⚙️  Support of custom Algolia index settings across branches: all changes made on your main index settings will be propagated to new branches
* 💻  Possibility to setup a custom domain

## Conclusion

For Algolia, building the plugin with the help of the Netlify team was a rewarding experience, one that we would recommend to other SaaS companies. The work was interesting because a lot of various components were involved, the Netlify tooling is pleasant to work with, and their team was responsive and helped us along the way.

Now after taking a step back, we really think the Netlify Build Plugin is a perfect fit to integrate a service like Algolia.

In the end, it benefits everyone as:

* Netlify can offer a free and easy to setup search feature to its users
* Algolia can showcase its product to [1M Netlify developers](https://www.netlify.com/blog/2020/08/03/celebrating-1-million-developers-whats-next-for-netlify-and-the-jamstack/)
* The Netlify users have yet another plugin available to build their Jamstack sites

For all these reasons, we encourage other SaaS companies to also build their own Netlify plugin! And if you have a Netlify website, [try it out](https://github.com/algolia/algoliasearch-netlify/)!

- - -

#### About Algolia

[Algolia](https://www.algolia.com/) is a hosted search API that gives developers a complete toolkit for building search into their products. Our SaaS solution takes the pain out of building and maintaining search. We maintain the infrastructure and API clients for all important programming languages and platforms, and focus on the developer experience with extensive documentation, tooling and support.