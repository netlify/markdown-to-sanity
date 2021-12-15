---
title: Automate your Netlify sites with Zapier
description: Looking for more ways to automate your workflow? Learn more about
  the Zapier-Netlify integration that connects you and your Netlify site to
  1,000+ apps.
authors:
  - Alanna DeMuro
date: 2018-11-07
lastmod: 2020-06-05
topics:
  - news
tags:
  - Zapier
  - Automation
tweet: ""
format: blog
---
We are excited to announce the full public launch of our integration with Zapier, an online tool for handling automated tasks with minimal set up! Zapier and Netlify share a common goal to make the developer experience better and easier so you can focus on what really matters.

We are confident that this integration makes Netlify easier for anyone looking to connect their site with other tools and services. This Zapier integration will simplify integrations even further than when using code, webhooks, and API keys directly.

## So, what exactly is Zapier?

Zapier connects over 1,000 different apps and tasks to automate your workflow and improve the developer experience by acting as a translator between different web APIs. Each connection between apps is called a “Zap.” Zaps connect services through **triggers** and **actions,** where you can choose an event from one service that will trigger an action in another. 

The Netlify App currently has the following triggers and actions:

**Triggers:**

* **New form submission:** Triggers an action upon a new submission
* **New deploy succeeded:** Triggers an action upon a successful deploy of a new version of your Netlify site

**Actions:**

* **New deploy of an existing site** when triggered

Already thinking of ways to use these triggers and actions to save time and improve your workflow? Let’s talk about how they work!

## How to use Zapier to enhance your Netlify workflow

First, head to [Zapier](https://zapier.com/) to log in or create a new account. 

Once you have logged in, you can start making Zaps right away on the [home page](https://zapier.com/app/home) by connecting Netlify to another app. The example below highlights a Netlify-Google Sheets automation. Each time a new form is submitted on the Netlify site, a new row in a Google Sheet will update with the information from the submission. 

![On the Zapier homepage, select Netlify and Google Sheets apps, then select New Form Submission and Create Spreadsheet Row.](/v3/img/blog/zapier-setup.png)

We’ve also created some Zap Templates to get you started. You can click the **Make a Zap!** button in any template (even in this blog post!), and it will take you directly to the Zap setup interface.

### Deploy on a schedule

Many Netlify customers ask if they can automatically trigger a deploy on a certain schedule. Previously, you could set up a cron job and a webhook, but with Zapier, you can accomplish the same thing with a few clicks:

<style>a.zap-button {text-shadow: none}</style>

<div id="zap-template-scheduled-deploy">
</div>
<script async src="https://zapier.com/apps/embed/widget.js?guided_zaps=29330&html_id=zap-template-scheduled-deploy"></script>

### Send form confirmation emails

Currently, site owners can receive notification emails when a form has been submitted. Now with Zapier, you can customize those emails and send confirmation emails directly to form submitters.    

<div id="zap-template-form-email">
</div>
<script async src="https://zapier.com/apps/embed/widget.js?guided_zaps=29683&html_id=zap-template-form-email"></script>

### Get your dog photoblogging

If you are really feeling creative and automated, put a [flic button](https://flic.io/?gclid=EAIaIQobChMIzM71-bnA3gIVBtNkCh1HXwtfEAAYASAAEgICp_D_BwE) next to your dog camera and set up your site to pull an image from the camera with each new deploy.  With this Zapier integration, you can trigger a new deploy each time your dog presses the button. You’ll never need to manually update your dog blog again! Don’t forget to give him a treat for pressing the button! 

<div id="zap-template-flic-deploy">
</div>
<script async src="https://zapier.com/apps/embed/widget.js?guided_zaps=29780&html_id=zap-template-flic-deploy"></script>

## How will you connect your Netlify app?

The above steps will get your site connected to 1,000+ apps to give you more ways to execute automatic deploys to ensure an always updated site, to better organize your form submissions, and to ultimately make the developer experience better. 

For more ideas and inspiration, check out the [Netlify page](https://zapier.com/apps/netlify/integrations) on Zapier.

Happy automating!