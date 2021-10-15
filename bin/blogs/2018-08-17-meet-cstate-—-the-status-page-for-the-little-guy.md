---
title: Creating a status page for your company using cState
description: Using Netlify to host your project's status page with some help from cState
authors:
  - Mantas Vilčinskas
date: '2018-08-17'
topics:
  - tools
tags:
  - Guest post
  - projects
  - resources
tweet: ''
format: blog
---
Recently my open source project known as cState reached a major milestone — a stable 2.0 release! Now, as you may know, Netlify has a rather extensive feature list and the nature of the Netlify workflow is well applied to not just apps but also status pages, which need reliable uptime and robust infrastructure. A status page is an important tool for many developers, companies, and customers. So, when downtime comes, you want to be prepared. In this post, I’ll detail what cState is, why you need a status page, and tackle the basics.

![A preview of the CState status page](/img/blog/cstate-preview.png)


## Why do I need a status page?

The truth is that we all make mistakes and, as you might know, there’s always bound to be some downtime in the most unexpected of times. It doesn’t matter if you’re running a free community forum or a large-scale web app, everyone is upset when something goes down. Avoiding downtime isn’t easy, but the least you can do is make sure that in those moments, when something does go wrong, your users & customers know that it’s not just them.

All large-scale companies — be it Netlify, GitHub, Dropbox, or Discord — have a status page. Most fully featured status pages are expensive and more affordable options are typically very limited in features or design (for an example, see Atlassian’s status page in comparison to Exana’s, which doesn’t seem to be maintained anymore). However, If you don’t have a status page, you risk not only upsetting your existing customers but also could look unreliable or untrustworthy, as if you’re hiding how stable your systems actually are.

![A blog post heading captured for reference - Is it down right now?](/img/blog/cstate-down.png)

## Then why choose cState?

cState isn’t meant to replace these enterprise solutions. Instead, it tries to focus on a developer & user friendly experience, especially for the “little guys,” the people who run open source or hobby projects.

There’s other tools out there, which are also free (github.com/bisscomm/status), or bundled into other services (Crisp Status) but I have personally often found that these tools are lacking, for at least one of these reasons:

* There’s not enough design customization
* Or the status page isn’t “hackable” enough
* Or it’s literally hackable & not very secure
* Sometimes reliant on many other APIs
* And almost always — there’s a lot of cruft
* Or worst of all: the software requires self-hosting

cState has its flaws as well, mind you. It is not a complete monitoring system, although due to its JAMstack nature, it can interrogate APIs and report back their status. At this point in time it also does not publish any API — although there is potential for one with Netlify’s Lambda Functions and a read only API is something that is definitely worthy of a future release.

However, most of these issues can be remedied — you can add a link to a free monitoring tool like Uptime Robot on the homepage (thanks to Tabs, which are detailed on the wiki) — and the current state of cState is enough for most small business, startups, and hobby projects.

## So, how does cState work?

The first piece of the puzzle is Netlify, which takes care of a lot of the heavy lifting. No surprise there. It compiles our status page, it hosts it, it can even manage the DNS & domains of your site, it’s just great. This means we’ve got a great foundation to work with and can take advantage of Netlify’s CDN as well as the Netlify CMS.

Now for cState, I decided to go with Hugo (it’s one of the best static site generators out there) and the main advantage of that is that it’s fast. No surprise there for something written in Go. The rest is just the frontend — some HTML & CSS, with a little bit of JavaScript — where less really is more.

cState, like many other Hugo sites, uses the base `config.yml` file to instill changes in the status page’s layout or behavior (as well as some corollary files under the data folder, for language files, and such). It’s almost like magic — cState is technically just a “theme” for Hugo but it can do so much.

## Getting started, quickly

Well, you can simply click this button!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cstate/example)

Fork the cstate/example repository on GitHub and deploy it to Netlify. Simple as that. After that, you can just edit the `config.yml` file straight from GitHub to quickly set up the status page. Like with all Netlify sites, once you hit the Commit changes button, your changes will shortly appear on the live site.

### Posting incidents

There’s two ways to create incidents and both of them have their advantages.

Method 1 is doing it raw, which is more suitable for technically inclined people — incidents are simply Markdown files (like `test-issue.md`) that are under `content/issues/`. They are formatted in such a way that cState can recognize the inputted data and generate your status page appropriately. This method is [covered in depth here](https://github.com/cstate/cstate/wiki/Usage#creating-incidents-method-1), with explanations for every line of code.

Method 2 requires a little more setup but the payoff is worth it — cState supports Netlify CMS right out of the box, but you’ll still need to setup some things. The quickest way to get right to the status page is with Netlify Identity & Git Gateway. Once again, there’s [step by step instructions on the wiki](https://github.com/cstate/cstate/wiki/Usage#netlify-cms).

### Doing more

And that’s really just the tip of the iceberg — once again, there’s a lot of stuff covered on the wiki: [tabs on the homepage](https://github.com/mistermantas/cstate/wiki/Customization#tabs), [Google Analytics](https://github.com/mistermantas/cstate/wiki/Customization#google-analytics), [ways to redesign the status page](https://github.com/mistermantas/cstate/wiki/Customization#design), or just go ahead and dig right in by adding your own custom HTML.

## In conclusion

These are the basics of cState — a simple, little, lightweight status page made to work harmoniously with Netlify. I’ve been testing it on status.tmw.media and they’re happy to finally have a reliable status page, separate from other infrastructure, especially one that doesn’t require massive upkeep. There’s even more left for the future of cState — v3.0 is slated to have translations (localization), better Netlify CMS integration, and some other smaller features, like customizable date formatting. So why not give the project a star on GitHub?

Stay tuned to learn more or follow me, [@mistermantas](https://twitter.com/mistermantas), on Twitter to learn more about the development of the next version of cState.
