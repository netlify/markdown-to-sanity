---
title: Gatsby Build Speed Improvements With Parallel Image Processing
description: >-
  Make your Gatsby builds twice as fast by taking advantage of parallel
  processing! This step-by-step tutorial will show you how.
authors:
  - Jason Lengstorf
date: '2020-02-25'
topics:
  - tutorials
tags:
  - Gatsby
  - build speeds
  - Performance
tweet: ''
format: blog
seo:
  metadescription: >-
    Learn how to make your Gatsby builds twice as fast by taking advantage of
    parallel image processing! This step-by-step tutorial will show you how.
    Check it out!
  metatitle: Improve Gatsby Build Speeds With Parallel Image Processing
  ogimage: /v3/img/blog/parallel-speed-comparison.jpg
---
Recently, Gatsby introduced powerful open source features that allow massive build speed improvements for sites with lots of images. Taking advantage of those features, Matt Biilmann set up parallel image processing for Gatsby using Google Cloud and [open sourced it as `gatsby-parallel-runner`](https://www.npmjs.com/package/gatsby-parallel-runner).

**In this article we'll implement `gatsby-parallel-runner` to make image-heavy Gatsby builds on Netlify nearly 2× faster!**

![Comparison of before parallel image processing (6m 21s) and after (3m 22s).](/v3/img/blog/parallel-speed-comparison.jpg)

On a [demo site with lots of images](https://github.com/jlengstorf/image-processing), adding `gatsby-parallel-runner` reduced build times for the site from [6 minutes and 21 seconds](https://app.netlify.com/sites/without-gatsby-parallel-runner/deploys/5e51653c34b48ddcd5e549e3?utm_source=blog&utm_medium=gatsby-parallel-images-jl&utm_campaign=devex) down to [3 minutes 22 seconds](https://app.netlify.com/sites/with-gatsby-parallel-runner/deploys/5e51648c051f084f3fabe4f6?utm_source=blog&utm_medium=gatsby-parallel-images-jl&utm_campaign=devex) — a whopping 47% drop!

## Watch: `gatsby-parallel-runner` setup in 15 minutes

If you prefer to watch videos instead of reading, I also put together a video walkthrough of this tutorial, which you can watch here:

<iframe width="560" height="315" src="https://www.youtube.com/embed/NKNKk83znhA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

(If the video above doesn’t load, you can [watch the walkthrough on YouTube](https://youtu.be/NKNKk83znhA).)

## How does parallel image processing work in Gatsby?

There’s a much better explanation of this in [Matt Biilman’s post detailing how he built `gatsby-parallel-runner`](https://dev.to/biilmann/open-source-parallel-processing-for-gatsby-270d), but the short version is: Gatsby recently introduced support for running as a child process that can send messages to the parent process. **This means that, in theory, any Gatsby plugin can pass work _outside of Gatsby_ to be done by another process, which allows for parallel processing.** This is huge, because prior to this, the work all needed to happen in the same process, which limited us to the capabilities of whatever machine was building the site.

If you’ve ever seen your Gatsby builds chug along for multiple minutes at the "generating image thumbnails" step, that's Gatsby doing all the work in a single process.

With the introduction of support for Gatsby as a child process that can pass work outside of itself, **we now have the ability to send tasks to an entirely separate process** — this means we can parallelize!

## A note before we start: this is still experimental

We've been dogfooding this approach on several of our own sites and seeing great benefits, but this is still pretty experimental. Every once in a while, I've seen timeouts from Google Cloud, and there aren't safeguards like retry logic built in yet. However, retrying the failed build usually clears it up.

That being said, use this with the standard disclaimer that we're it's still pretty early, so you may hit some weirdness. If you do, please open issues and — if you can — submit pull requests!

## Set up the demo Gatsby site repo (optional)

For this tutorial, we'll be using a repo with a lot of unoptimized images to make the impacts of parallel image processing clear. To avoid testing the speed of your internet connection, we'll work entirely on Netlify for this tutorial.

![The “deploy to Netlify” flow: 3 steps to deploy a new site!](/v3/img/blog/deploy-to-netlify.jpg)

[Deploy the demo site to your Netlify account](https://app.netlify.com/start/deploy?repository=https://github.com/jlengstorf/image-processing&utm_source=blog&utm_medium=gatsby-parallel-images-jl&utm_campaign=devex) to get started. It'll start building right away using the standard `gatsby build` command, which will take about 6 or 7 minutes.

You can also [fork the demo repo on GitHub](https://github.com/jlengstorf/image-processing) and run tests locally, but bear in mind that the speed of your internet connection can have a huge impact on the results.

> Heads up! The steps we're about to follow should work for most Gatsby sites, so feel free to upgrade an existing site instead of using the demo repo — remember, Netlify supports [atomic deploys and rollbacks](https://docs.netlify.com/site-deploys/overview/?utm_source=blog&utm_medium=gatsby-image-processing-jl&utm_campaign=devex), so even if something goes wrong your site will stay up and you can roll back the changes with one click!

### Where are we starting?

To get an idea of where things are _without_ enabling parallel image processing, the demo repo contains 238 images ranging in size from 398 KB to 8.5 MB.

We can see how long this takes by checking the deploy log after the site builds:

![The Netlify deploy summary for the unoptimized build.](/v3/img/blog/unoptimized-build-time.png)

The site took 6 minutes and 27 seconds to build. If we look into [the raw build logs](https://app.netlify.com/sites/loving-northcutt-b764eb/deploys/5e51c446f91fc677a36cbd98?utm_source=blog&utm_medium=gatsby-parallel-images-jl&utm_campaign=devex), we can see that the vast majority of that build time comes from the "Generating image thumbnails" step:

```
4:22:29 PM: success Generating image thumbnails - 260.467s - 2140/2140 8.22/s
```

In an image-heavy site like this one, almost all of the build time comes from image processing.

## Enable the required services on Google Cloud

If we want to take advantage of parallel builds, we need to have somewhere to do the work when it gets passed out of Gatsby. For this, we're going to use Google Cloud. Specifically, we'll use: 

* [Cloud Pub/Sub](https://cloud.google.com/pubsub) for sending messages between processes
* [Cloud Functions](https://cloud.google.com/functions/) for doing the work
* [Cloud Storage](https://cloud.google.com/storage/) to make sure any images that exceed the Pub/Sub size limits don't break our builds

This means we'll need to have a Google Cloud account and enable a few services.

> Heads up! [Google Cloud has a free plan](https://cloud.google.com/free) that covers the services we're using. You also get $300 when you sign up. So you can set this up for free!

### Create a new project

Once you've created a Google Cloud account, go to the [Google Cloud Platform dashboard](https://console.cloud.google.com/home/dashboard).

![Google Cloud Dashboard.](/v3/img/blog/gc-dashboard.png)

If you already have a Google Cloud account, click the dropdown next to the "Google Cloud Platform" banner, then choose "New Project" from the top-left of the modal that opens. Give it a name like "Gatsby Image Processing" so it's easy to remember why you created it later.

If you just set up your Google Cloud account, it should walk you through creating your first project.

### Enable Cloud Pub/Sub

From the dashboard, type "pub sub" into the search bar at the top, then click "Subscriptions" in the results that appear.

![Google Cloud Pub/Sub selected in the search dropdown.](/v3/img/blog/gc-pubsub.png)

You'll see a note that the Pub/Sub service is being enabled for your account.

This also enables the Pub/Sub API, which is called by the `gatsby-parallel-runner` to send and receive messages from Gatsby.

### Enable Cloud Storage

Next, type "cloud storage" into the top search bar and choose "Google Cloud Storage JSON API" from the results.

![Google Cloud Storage JSON API selected in the dropdown.](/v3/img/blog/gc-storage.png)

This is required for handling any images that are too large to send using Pub/Sub.

### Enable Cloud Functions

In the top search bar, type "cloud functions" and choose "Cloud Functions" from the options (there are a few options here — choose the one that _only_ says "Cloud Functions").

![Cloud Functions selected in the dropdown.](/v3/img/blog/gc-functions.png)

The parallel runner uses Cloud Functions to actually process images for Gatsby.

### Create a service account and get credentials

Next, click the top-left hamburger nav, choose "IAM & Admin", then click "Service Accounts".

On the [service accounts dashboard](https://console.cloud.google.com/iam-admin/serviceaccounts), click "+ CREATE SERVICE ACCOUNT" near the top center of the screen.

On the next screen choose a name for your service account — to make it easy to remember, maybe choose something like "gatsby-parallel-runner".

![The create service account page in Google Cloud.](/v3/img/blog/gc-service-account.png)

On the next screen add two roles:

1. Storage Admin — required to create storage buckets and access them
2. Pub/Sub Editor — required to create topics, as well as send and receive messages

![Workflow for setting service account permissions in Google Cloud.](/v3/img/blog/gc-roles.png)

On the third screen, scroll down to the "Create key (optional)" section and click the "+ CREATE KEY" button. Leave the key type as JSON and click the "Create" button. A JSON file will be downloaded with your credentials.

![Confirmation after generating and downloading credentials.](/v3/img/blog/gc-private-key.png)

Move the downloaded file somewhere safe. **For the purposes of this tutorial, we will assume that the file will be renamed to `google-cloud-creds.json`.**

> Heads up! The information in this file allows access to your Google Cloud account, so make sure it's stored somewhere secure. **Do not commit this file to GitHub!**

## Deploy the Google Cloud services for parallel image processing

Now that we have a service account with the appropriate permissions, we need to deploy the Pub/Sub, Cloud Storage, and Cloud Functions setup to support processing images.

### Install the Google Cloud SDK

In order to deploy the Google Cloud services using the credentials we just created, we'll need to have the Google Cloud SDK installed.

Head over to <https://cloud.google.com/sdk/docs/quickstarts> and install the SDK on your computer, then log in by running the following command:

```
gcloud auth login
```

### Define the required environment variables

We need three environment variables set to use `gatsby-parallel-runner`:

* `GOOGLE_APPLICATION_CREDENTIALS`: this will be set to the path of the credentials file we saved (e.g. `~/Downloads/google-cloud-creds.json`)
* `WORKER_TOPIC`: Pub/Sub and Cloud Storage use this value to name things (e.g. `my-image-processor`) — this **MUST** be unique to your account, but note that you _can_ use the same Google Cloud setup for multiple sites
* `TOPIC`: this is a unique identifier for the site being built (e.g. `site-name-1234`) — this **MUST** be unique to avoid collisions if two sites are building on your account at once

### Deploy the Google Cloud services required for parallel processing

Now that we have the credentials and environment variables, we're ready to deploy the Google Cloud services to enable parallel image processing!

Since we won't need `gatsby-parallel-runner` installed on our local computer except for this one command, we'll use `npx` to run it without installing.

When we put it all together, we can declare the env vars inline, then call `npx gatsby-parallel-runner deploy`:

```
# the `\` allows us to escape newlines so this command is more readable
# set our environment variables inline, then run the deploy command using npx
GOOGLE_APPLICATION_CREDENTIALS=~/Downloads/google-cloud-creds.json \
WORKER_TOPIC=my-image-processor \
TOPIC=site-name-1234 \
npx gatsby-parallel-runner deploy
```

This will log out details as new Google Cloud resources are provisioned.

> Heads up! If you see `Sorry, that name is not available. Please try a different one.` it means your `WORKER_TOPIC` value isn't unique and needs to be changed.

When it gets to the Cloud Function deployment it will ask you:

```
Allow unauthenticated invocations of new function
[gatsbySharpProcessorPubSub]? (y/N)?
```

We don't need unauthenticated invocations, so type `N` (or press enter) to continue.

Next, it'll ask about a second function:

```
Allow unauthenticated invocations of new function
[gatsbySharpProcessorStorage]? (y/N)?
```

Again, we don't need unauthenticated access, so we can type `N` or press enter to continue.

Once this process completes, Google Cloud is set up and ready for parallel image processing!

## Update your Netlify sites to use parallel image processing

The last step is to update our sites on Netlify to use `gatsby-parallel-runner`.

### Get a Base64 version of the Google Cloud service account credentials

Since we can't commit our credentials file to our repo safely, we need to store the credentials entirely as an environment variable.

To do this, we'll convert the credentials to base64:

```
base64 -i ./.credentials/google-cloud-creds.json
```

> Heads up! If you’re on a Mac, you can add  `| pbcopy` to the end of the command, which means the output will be copied directly to your clipboard instead of being printed in the terminal.

### Add the environment variables to Netlify

Go to [your Netlify dashboard](https://app.netlify.com/?utm_source=blog&utm_medium=gatsby-parallel-images-jl&utm_campaign=devex) and choose the site you want to update.

Click "Settings" in the top nav, then click "Build & deploy" in the left-hand nav.

In the "Environment" section, add the following environment variables:

* `GOOGLE_APPLICATION_CREDENTIALS` — set to the base64 credentials from the previous step
* `WORKER_TOPIC` — set this to a unique value (this can be shared between your own sites, but it has to be unique to your Google Cloud account)
* `TOPIC` — set this to a unique value that identifies your site

![Environment variables settings page in Netlify with requried env vars set.](/v3/img/blog/netlify-env-vars.jpg)

### Change your Netlify build command

In the same "Build & deploy" settings on your Netlify dashboard, change the build command to `gatsby-parallel-runner`:

![Netlify build settings updated to use `gatsby-parallel-runner`](/v3/img/blog/netlify-build-settings.png)

> Heads up! If you use a [Netlify config file](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=blog&utm_medium=gatsby-parallel-images-jl&utm_campaign=devex), change the build command there instead.

### Trigger a new build by pushing the repo changes

Earlier in this process we modified our repo to add the `gatsby-parallel-runner` as a dependency — if we commit those changes and push them, it will trigger a new build using the `gatsby-parallel-runner`.

**On our demo repo, building the site is 47% faster when using `gatsby-parallel-runner`.**

![Comparison of before parallel image processing (6m 21s) and after (3m 22s).](/v3/img/blog/parallel-speed-comparison.jpg)

## This is (probably) just the beginning

As of right now, Gatsby's Sharp plugin is the only one that takes advantage of parallelization, but it's easy to imagine a world where even more of the work done in Gatsby is able to take advantage of these improvements, resulting in even faster builds!

After you've added this to your own site, [let us know how big the difference is](https://twitter.com/compose/tweet?text=Hey%20@jlengstorf%20and%20@biilmann,%20I%20added%20gatsby-parallel-runner%20to%20my%20@netlify%20site%20using%20https://www.netlify.com/blog/2020/02/25/gatsby-build-speed-improvements-with-parallel-image-processing/%20and%20here%E2%80%99s%20what%20happened:) — we'd love to hear from you!

Huge props go to the Gatsby OSS team for enabling parallel processing, and many thanks to [Matt Biilmann](https://twitter.com/biilmann) and [Shawn Erquhart](https://twitter.com/erquhart) for helping guide and edit this tutorial.
