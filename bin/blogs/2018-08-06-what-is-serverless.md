---
title: Five Key Benefits of "Going Serverless"
description: >-
  What "serverless" truly means for developers and 5 characteristics that define a serverless application
authors:
  - David Wells
date: '2018-08-06'
topics:
  - tutorials
tags:
  - serverless
  - functions
  - faas
  - jamstack
tweet: 5 Key Benefits of "Going Serverless" & What it means for developers
format: blog
image: /img/press/logos/logomark-light.png
---

You've probably heard the buzzword de jour "serverless" by now.

What does it mean and **aren't there still "servers" somewhere?**

Yes! There are still servers that run your code. The cloud hasn't actually become a literal cloud. 😁

The term, **"serverless"** (love it or hate it), really implies that many of the complexities that come with running & scaling your own servers have been abstracted away from you the developer. 

In this post, we'll dive into the benefits & key characteristics of what **"going serverless"** truly means.

{{< toc >}}

<iframe width="560" height="315" src="https://www.youtube.com/embed/AEBWLm1L-qI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## What are the benefits of going serverless?


### 1. Auto Scales for you 📈

Serverless functions will auto scale for you. You no longer need to think about how many instances of your application you with need to run or how to handle load balancing.

If you get a surge of inbound traffic, the functions will spin up more function instances automatically to handle the increased load.

![autoscale](https://user-images.githubusercontent.com/532272/43603396-afaae7be-9647-11e8-9fb8-725f1023b953.png)

### 2. Pay per execution pricing model 💸

Running code on traditional servers in heroku, digital ocean, AWS, etc all come with an hourly/monthly cost even if the server is sitting around idle with no incoming requests.

In the serverless model, you only pay for the exact amount of time your server side code runs by the millisecond.

This opens up a wide range of use cases and opportunities that have been traditionally burdensome to handle using "normal" servers.

Imagine wanting to setup a cron job to scrape stack overflow once a day for support questions about your open source project. It's hard to justify paying 7 bucks a month for a server for something like this but in the serverless pay-per-execution landscape this would likely land under the free tier or a couple of cents a month.

### 3. Leverage third party services 🤝

Serverless isn't just about Functions and FAAS providers (Functions as a service). The notion of something being "serverless" extends to other third party software providers.

For example, it wouldn't make very much sense for your business to invest in building telecom infrastructure to send text messages to users. Instead, you'd leverage a pay per use SAAS like twilio to handle this for you.

Similarly, rolling your own authentication service with password reset/reminders/2 factor auth etc, is no walk in the park. So leveraging providers like Auth0, AWS cognito, Okta, or Netlify Identity would let you get back to the actual business logic of your application.

### 4. Focus on your business logic 😁

Serverless at its core is an added abstraction layer over things that used to be on the developer (or devOps) teams plate.

Now many of those concerns are shifted over to the third party providers you are using to run functions. Scaling your server side code, load balancing traffic, patching the underlying servers for security vulnerabilities (the list goes on) are now all handled by your FAAS of choice.

This leaves you, the developer, more time to:

- focus on your apps core business logic
- Spend more time on UX
- Adding Easter eggs
- dare I say, sipping mai tais on the beach?

The main point being there is less operation stuff to think and/or worry about.

Does serverless mean noOps? Nope. There are still things you will want to keep an eye on and monitor. We will dive into this in a later post.

### 5. Event driven (push based) workflows 🚀

Think push based applications instead of polling.

Serverless tech pushes us into a world where we try to streamline everything we are doing, where we want our program to be as efficient as possible. We are after all being charged by the millisecond of compute, so let's save some money and code while we are at it.

Things like polling a database for changes or scanning a bucket for new files is a thing of the past.

Infrastructure providers are now exposing events from databases, buckets, webhooks (etc) as a mechanism for triggering your business logic.

**A quick example:**

Let's say a new user signs up for your app. We can listen to items being added to the `new_users` table and trigger a function to send them a welcome email. This can be wired up pretty easily with less code being written and maintained by you the developer.

**Another quick example:**

A user uploads a new profile image. The image is 2mb and we need to resize it for performance reasons to show in our app. We can do this by listening to an s3 bucket `objectCreated` event and trigger a function to resize the image for us. This can all happen asynchronously behind the scenes via lambda functions. 

## What can you build with serverless functions?

- Web + Mobile backend APIs
- Form processing
- Image processing
- Web scraping / testing
- Running binaries like headless chrome, pandoc, etc.
- Serving dynamic HTML / dynamic binaries
- SAAS Webhook listeners
- Scheduled Cron jobs
- DevOps/Infrastructure Automation
- Event driven apps via Infrastructure events
- IoT events
- ... The list goes on & on

## What wouldn't be a good fit for serverless functions?

Serverless functions shine in a lot of places as described above except in a couple.

The first limitations is a maximum timeout of 5 minutes on functions. If your code takes longer than 5 minutes to return a response, it's better suited to run in a long running container.

This is an "artificial" limitation imposed by the different FAAS providers and one that is likely to vanish in the future.

Here is a slide from serverless conf SF with tim wagner, head of AWS Lambda, hinting at some future predictions. Perhaps one is the 5 minute limit?

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Serverless Prediction from <a href="https://twitter.com/timallenwagner?ref_src=twsrc%5Etfw">@timallenwagner</a>: “The combination of blockchain ledger maintained state and changes to it + serverless functions is a match made in heaven!” at <a href="https://twitter.com/Serverlessconf?ref_src=twsrc%5Etfw">@Serverlessconf</a> <a href="https://twitter.com/hashtag/ServerlessConf?src=hash&amp;ref_src=twsrc%5Etfw">#ServerlessConf</a> <a href="https://t.co/IdRJsMcIcI">pic.twitter.com/IdRJsMcIcI</a></p>&mdash; Richard Dulude (@RichDulude) <a href="https://twitter.com/RichDulude/status/1024338370971881472?ref_src=twsrc%5Etfw">July 31, 2018</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Another limitation you might want to consider is applications that requires ultra low latency characteristics, like realtime gaming or applications using websockets. They can work but might not be the best fit for a serverless function.

##  Wrapping up

Serverless technologies bring a wide array of "super-powers" to developers and open up a world of possibilities that might have been too costly to run, scale, & maintain with traditional server setups.

A frontend developer with no backend or devops experience can now setup an API that will handle production traffic. **How cool is that?**

If your curious on learning more about how companies are using new serverless technologies, I'd highly recommend watching previous [serverless conf talks](https://www.youtube.com/channel/UCqlcVgk8SkUmve4Kw4xSlgw) and this video on [serverless patterns & anti-patterns](https://www.infoq.com/presentations/serverless-patterns-antipatterns)

If you enjoyed this post, subscribe to the netlify blog for more serverless & JAMStack content!
