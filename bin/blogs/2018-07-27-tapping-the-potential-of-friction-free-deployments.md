---
title: Exploring the potential of friction-free deployments
description: >-
  What I learned from an experiment to make a world clock from a static site
  generator and Netlify's build automation.
authors:
  - Phil Hawksworth
date: '2018-08-02'
topics:
  - insights
tags:
  - Automation
  - Webhooks
tweet: ''
format: blog
---
One of Netlify's goals is to reduce the friction in deploying web projects. We believe that by making this task as simple and routine as possible, developers can turn their attention to the parts of their projects where they need to be truly creative. Allowing them to focus on what they are building, and to differentiate themselves from their competition.

This is why we created a deployment process which sits atop the common development workflows which exist already. By hooking into standard Git actions, deployments can be a natural extension of the activities developers perform on a daily basis.

Deploying should not be daunting. It should be mundane. The excitement should come from releasing something new to the world, not from wondering if the release is going to work as planned.

## People are noticing

It is wonderful to see people using Netlify to good effect. And to observe that their deployment processes become routine. Our low friction deployments even cause some to crack wise about it.

I spotted this playful comment on Twitter:

> free side project idea: HTML-only static site generated clock that deploys a new version to [@netlify](https://twitter.com/netlify) every minute
>
> — [@zachleat](https://twitter.com/zachleat/status/1020034115817680896)

This made me smile broadly. Not just because it hinted at scheduling and triggering builds and deployments – something of a sweet spot for Netlify – but also because it described a site which could tangibly demonstrate the benefits of a confident and automated approach to deployments.

So, when Zach playfully suggested that something as dynamic as a clock could be served up by a pre-rendered site... I had to work quite hard to resist taking the bait.

And I was doing so well.

But then Chris Coyier joined in the fun on Twitter. Suggesting that this would even be good marketing for Netlify, tweeting this (no doubt, with a twinkle in his eye):

> ...Builds so cheap you can set your clock by them.
>
> – [@chriscoyier](https://twitter.com/chriscoyier/status/1020038761042784256)

Well... I'm not made of stone. I could resist no longer:

> Hold my beer.
>
> – [@philhawksworth](https://twitter.com/philhawksworth/status/1020057018974031872)

## You did what?!

Yes, I took the bait. I decided to look at what could happen when continuous deployment is so mundane, so solved, so predictable, that I could deploy with confidence every day. Every hour. Every minute. 

Crazy? Perhaps! Recommend? No. Not every single minute. But… possible?! 

To find out I made something a little playful. Playful but effective. And something which [performs extremely well](https://twitter.com/zachleat/status/1020362835459805189). Take a look:

[![Screenshot of setyourwatchby.netlify.com showing the time 5:17pm](/v3/img/blog/setyourwatchbynetlify.png)](https://setyourwatchby.netlify.com/)

> [setyourwatchby.netlify.com/](https://setyourwatchby.netlify.com/)


I stole the idea from [Zach](https://twitter.com/zachleat). I stole the name from [Chris](https://twitter.com/chriscoyier). I regret nothing.

When the build runs, it pre-renders a page which shows the time. That is the current time during the build. It creates such a page for a number of different cities with their local time and in the preferred time format for that locale. You can see the time for:

* [London](https://setyourwatchby.netlify.com/Europe/London)
* [Paris](https://setyourwatchby.netlify.com/Europe/Paris)
* [New York](https://setyourwatchby.netlify.com/America/New_York)
* [Chicago](https://setyourwatchby.netlify.com/America/Chicago)
* [Los Angeles](https://setyourwatchby.netlify.com/America/Los_Angeles)
* [Sydney](https://setyourwatchby.netlify.com/Australia/Sydney)
* and [a few more](https://setyourwatchby.netlify.com/timezones)

Thanks to Netlify's intelligent CDN, a visitor to the site can automatically be shown the page with has been set to correspond to their country. The [configuration for that](https://github.com/philhawksworth/html-time/blob/master/_redirects) is simple, but powerful.

Of course, each build, and the time shown in each location, will only be correct for a minute. So this is where I'm getting a bit silly. I rebuild and redeploy a new version of the site _every single minute of every day!_

## Is this wise?

![Your scientists were so preoccupied with whether or not they could that they didn't stop to think if they should.](/v3/img/blog/jeff-goldblum-gif.gif)

Let's be honest. This is overkill. But it proves a point nicely.

The build of this site is very light. It uses a site generator to pre-render around 20 simple pages, so I don't feel _too_ shady rebuilding it so frequently via a webhook and a cron job running on [webtask.io](https://webtask.io/). But it's not a frequency that I'd generally recommend. I'm being a little extreme in order to illustrate a point.

If this were a heavy build which performed a lot more actions and perhaps called in data or content from APIs, or performed all sorts of image manipulation and compression... I'd probably not sleep so well unless I throttled back the frequency of the builds a touch.

So, what point does this prove? Well, a few:

1. On Netlify, a build and deployment can be triggered easily and you can have great confidence in the result. Deployment friction is reduced to zero.
2. Routing users to the resource appropriate for them, depending on their locale, is  surprisingly simple with Netlify. And when combined with a site which has been pre-rendered with a site generator, it can work wonderfully for localization and internationalization.
3. Thanks to the expanding JAMstack ecosystem, with resources providing integrations via webhooks, APIs and microservices, we are seeing an increasing number of ways to creatively combine services. Doing this with confidence and with little friction creates huge opportunities.

## Want to explore more?

You can take a look at the code for this pre-rendered HTML clock, complete with the localization rules for the CDN in its [GitHub repository](https://github.com/philhawksworth/html-time).

You can also explore more site generators and a range of project templates which can get you started quickly with automated builds and a ready-made continuous integration deployment process, by checking out the starter templates at [templates.netlify.com](https://templates.netlify.com)

But if you just want to know the time..? There is probably a slightly more convenient clock near by.
