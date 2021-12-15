---
title: How to use event-triggered Netlify Functions
description: Learn how to automatically trigger Netlify Functions on specific Netlify events
authors:
  - Charlie Gerard
date: 2021-07-21
lastmod: 2021-07-21
topics:
  - tutorials
tags:
  - Frontend
  - Engineering
  - Netlify Functions
tweet: ""
format: blog
relatedposts:
  - Announcing Native TypeScript Support for Netlify Functions
  - Forms and Functions
  - Can Dynamic Sites Go Serverless?
seo:
  metadescription: Learn how to automatically trigger Netlify Functions on specific Netlify events
  metatitle: How to use event-triggered Netlify Functions
  ogimage: /v3/img/blog/og-event-triggered-netlify-functions.png
---

Netlify Functions are serverless functions you can write in Node.js, TypeScript or Go. You can use them to fetch data from APIs, send notification emails, and much more. But did you know they can be triggered automatically by certain Netlify events?

Let's go through a small demo showing you how to send a Slack notification with a GIF when a deploy fails.

## Events

We know naming things is hard so we've made it easier for you. The main difference with these functions is that they have to be named after the event you want to use.

For this Slack notification example, the function file needs to be named `deploy-failed.js`.

There are many events that you can use to trigger a function like this, including events related to deployments, split tests, form submissions, and user authentication.

You can find the [full list of available events in the docs](https://docs.netlify.com/functions/trigger-on-events/).

If you would like to use [background functions](https://www.netlify.com/blog/2020/10/29/announcing-background-functions/) (which can run for longer than regular functions, and are useful for batch processing jobs), the naming convention is the same as other functions, you only need to add `-background` after the function name, so for example `deploy-failed-background.js`.

## Fetching data and sending a notification

In the `deploy-failed.js` file, I start by fetching a GIF using the [Giphy API](https://developers.giphy.com/docs/api/):

```javascript
const response = await fetch(
  `http://api.giphy.com/v1/gifs/random?tag=fail&api_key=${giphyApiKey}&limit=1`
);
const { data } = await response.json();
```

This returns a random 'fail' GIF.

Once it is available, we can do a `POST` request to the [Slack API](https://api.slack.com/) to send it to a channel:

```javascript
await fetch(
  `https://hooks.slack.com/services/${userID}/${channelID}/${slackApiSecret}`,
  {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      text: data.url
    })
  }
);
```

And finally, we return the response from the function with an empty body:

```javascript
return {
  statusCode: 200,
  body: JSON.stringify({})
};
```

If you've written Netlify Functions before, you'll notice that there is nothing different from a "normal" function, except the file naming convention.

Once this function is pushed to your Git provider and the site deploys, if it fails, a GIF will be sent to the Slack channel!

Here's an example with cancelling a deploy:

![Triggering a deploy and cancelling it before it finishes triggers the function and posts a GIF on Slack](/v3/img/blog/event-triggered-function.gif)

Event-driven functions can be used to add all sorts of automation, observability, and integrations to your projects. How might you use them?

If you'd like to check the code, the [repo is available on GitHub](https://github.com/charliegerard/event-triggered-netlify-function).

Enjoy!
