---
title: "Monorepos on Netlify: How docs processes led to developer experience
  improvements"
description: "From writing docs to improving the product! Learn more about new
  and improved monorepo support on Netlify. "
authors:
  - Rachael Stavchansky
date: 2021-07-08
lastmod: 2021-07-01
topics:
  - news
tags:
  - documentation
  - monorepo
  - Developer Experience
tweet: ""
format: blog
relatedposts:
  - Launching Monorepo support for Netlify sites
  - New and improved Netlify docs 
seo:
  metadescription: "From writing docs to improving the product! Learn more about
    new and improved monorepo support on Netlify. "
  metatitle: Improved Monorepo Support on Netlify
  ogimage: /v3/img/blog/monorepo-og.png
---
If you work with monorepos on Netlify, you may be glad to know there’s some [swanky new documentation](https://docs.netlify.com/configure-builds/common-configurations/monorepos/) available on this topic!

In the newly updated docs, you’ll find information about:

* Multiple ways you can set a base directory,
* How to configure deploy notification settings for monorepos,
* Recommended setups based on your specific tools and project needs, and
* Links to a newly added [Ignore builds](https://docs.netlify.com/configure-builds/common-configurations/ignore-builds/) docs page with clearer examples

Before this new documentation was published, it was totally possible to run monorepos on Netlify, but many users ran into errors when getting started. The developer experience had a lot of room for improvement. In fact, it was practically impossible to get started without running into an error!

As we sought to improve the documentation for monorepo support, we uncovered opportunities to illuminate hidden settings and make the whole process more clear. What started as a need to fix a content gap in the docs expanded into a cross-team effort to improve the product experience and the docs as part of that product experience.

The end result is documentation worth celebrating and a more seamless setup for developers working with monorepos.

In this post, we’ll highlight what’s new for monorepo support, and we’ll share a sneak peek into the documentation team’s process to create these updates.

## What’s new in monorepo support

### **Base directory field in the UI**

When you get started with a “New site from Git” you’ll find a new, optional field labeled “Base directory.” Before this field was added in this part of the Netlify UI, your only option was to configure the base directly in the `netlify.toml` file or to configure it in your Site settings after a first deploy failed.

![](/v3/img/blog/monorepo-ui-1.png)

### **Set the base directory with a command in Netlify CLI**

When you run the `netlify init` command in the CLI from a subdirectory instead of the root of a repository, you’ll be prompted about whether you want to set a base directory.

![](/v3/img/blog/monorepo-.png)

### Better caching for Yarn workspaces

Now, when Netlify detects the use of Yarn, it will cache all of the `node_modules` directories within the repo and install the relevant dependencies.

All of these improvements are now documented in [this newly published](https://docs.netlify.com/configure-builds/common-configurations/monorepos/) docs page outlining how to build from a subdirectory or monorepo. But, how did we get here?

## How docs processes led to developer experience improvements

From the get go, we knew we had a documentation gap with monorepo support. Developers were reporting issues on our public GitHub repos, asking questions in our Support Forums, and graciously stepping up to help each other out with solutions they discovered after painful rounds of “guess and check.”

Whenever the docs team identifies a major gap like this, we run an audit of our documentation site to compare our existing docs against all of the updates needed on a specific topic. Our team also tests out features to confirm everything works as described.

Along the way, we realized that some parts of the monorepo workflow were causing a frustrating experience for developers—even if they were following the documentation perfectly.

For example, the “Create new site from Git” workflow had no way to set a base directory. This meant our build bot would always try to install all of the dependencies from the root directory, which practically guaranteed the first build attempt would fail.

Rather than creating documentation to explain this failure and route developers through the right steps, our product manager had an idea: what if we could make this configuration more obvious in the Netlify UI?

At this point, our documentation project became a design project! Our product manager helped prioritize the effort, and our product designer jumped in to solve the problem. We came up with a way to accommodate setups for both monorepos and standard sites from the same workflow without adding complexity in the app. Now, Netlify users find an additional base directory field in their setup, and it’s clearly an option to skip this if you don’t need it.

Beyond the issue with the base directory setting, there was a whole constellation of other concerns related to monorepos that also needed attention. One of the biggest issues was specific to Yarn workspaces. Users discovered they could leverage an environment variable `NETLIFY_USE_YARN` to successfully build their monorepo sites with Yarn workspaces, but the builds were slower than ideal. This was because Netlify wasn’t caching all of the relevant `node_modules`. They got built from scratch on every build.

Netlify engineering to the rescue! The team dug in and made [some changes to caching specifically for Yarn workspaces](https://answers.netlify.com/t/improved-caching-for-yarn-workspaces/36066), and now the build times are much faster for subsequent builds.

From start to finish, the docs work and developer experience improvements were a team effort. This team effort included folks on Netlify’s support team who called attention to the confusion, our product manager who laid out a plan to address multiple concerns at once, our product designer who suggested an elegant fix, multiple docs team members to peer review new content, and engineers who made everything just work.

We’re excited to share these updates! Check out the new docs for monorepo support today, and let us know if something seems missing. We're continuously looking for ways to improve!
