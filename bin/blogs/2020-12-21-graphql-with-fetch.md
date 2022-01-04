---
title: >
  Send GraphQL queries with the Fetch API (without using Apollo, URQL or other GraphQL clients)
description: >
  If you want to use GraphQL in your apps, most tutorials have you install Apollo, URQL, or other GraphQL clients. But you only need the Fetch API!
authors:
  - Jason Lengstorf
date: 2020-12-21T00:00:00.000Z
lastmod: 2020-12-21T00:00:00.000Z
topics:
  - tutorials
tags:
  - GraphQL
  - Javascript
tweet: ""
format: blog
seo:
  metatitle: >
    Send GraphQL Queries With the Fetch API (Without Apollo, URQL)
  metadescription: >
    If you want to use GraphQL in your apps, most tutorials have you install Apollo, URQL, or other GraphQL clients. But you only need the Fetch API!
  ogimage: /v3/img/blog/graphql-fetch-og.jpg
relatedposts:
  - GraphQL with Hasura and Nuxt
  - Advice from a GraphQL Expert
---

GraphQL is a powerful solution for working with data, but it often gets a bad rap for being too complicated to set up and use. In this tutorial, we'll learn how to send GraphQL queries and mutations without any third-party tools using the browser's built-in Fetch API.

How to send a GraphQL query with Fetch
--------------------------------------

Under the hood, GraphQL works by sending HTTP requests to an endpoint. This means that there's nothing magical about sending a GraphQL request — we can use built-in browser APIs to send them!

> **Heads up!** We'll be using the built-in [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for this example, but you could also use [axios](https://github.com/axios/axios), [jQuery.ajax()](https://api.jquery.com/jquery.ajax/), or your preferred library for sending HTTP requests.

First, let's look at the component parts of a GraphQL query:

1.  The query itself
2.  Any query variables

A GraphQL query might look something like this:

```graphql
query GetLearnWithJasonEpisodes($now: DateTime!) {
  allEpisode(sort: {date: ASC}, where: {date: {gte: $now}}) {
    date
    title
    guest {
      name
      twitter
    }
    description
  }
}
```

This query loads the [_Learn With Jason_](https://www.learnwithjason.dev) schedule by searching for all episodes with a date greater than `$now`.

But what is `$now`? A query variable!

Query variables are passed to GraphQL as a JavaScript object:

```js
{
  now: new Date().toISOString()
}
```

In this case, the variable will be set to the current date and time that the query is executed, which means we'll only see future episodes.

How can we send the GraphQL query to the GraphQL endpoint using Fetch?
----------------------------------------------------------------------

Once we have the query and variables, we can write a bit of JavaScript to send a call with the Fetch API:

```js
fetch('https://www.learnwithjason.dev/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: `
        query GetLearnWithJasonEpisodes($now: DateTime!) {
          allEpisode(limit: 10, sort: {date: ASC}, where: {date: {gte: $now}}) {
            date
            title
            guest {
              name
              twitter
            }
            description
          }
        }
      `,
    variables: {
      now: new Date().toISOString(),
    },
  }),
})
  .then((res) => res.json())
  .then((result) => console.log(result));
```

This sends the GraphQL query and variables as a JSON object to the endpoint `https://www.learnwithjason.dev/graphql`, then logs the result, which looks something like this:

![screenshot of GraphQL query result in the console after sending a fetch request](/v3/img/blog/graphql-fetch-result.png)

> **Heads up!** You can open your browser console and run this JavaScript to see this in action _right now!_

If you'd like to try this with other GraphQL endpoints, check out the [Rick and Morty GraphQL API](https://rickandmortyapi.com/documentation/#graphql) or the [countries API](https://countries.trevorblades.com/).

What are the requirements to send a GraphQL query request?
----------------------------------------------------------

For a GraphQL request to be successfully sent as an HTTP request, we have to meet a few requirements. Let's step through them one at a time.

### The request needs to be sent using the `POST` method

Some endpoints may support other methods, but I have yet to find one that doesn’t support `POST`, so it's a safe bet to use this with any GraphQL endpoint.

### The query and variables need to be sent as a JSON object

GraphQL endpoints expect the `body` of the request to be a stringified JSON object that contains a `query` and `variables` property.

Even if you don't have variables, send an empty object:

```js
JSON.stringify({
  query: `
    query SomeQuery {
      # your query here
    }`,
  variables: {},
});
```

### Send the right headers

This is optional, technically, but it's a good idea to include a `Content-Type` header to specify that you're sending JSON.

Many GraphQL endpoints will require an `Authorization` header or other access control, which will vary depending on the service or tools you're using to serve GraphQL data. Check the docs for your GraphQL endpoint if you run into access control issues when sending your request.

GraphQL clients are powerful, but you may not need one!
-------------------------------------------------------

GraphQL clients like Apollo and URQL add a lot of extra power, including caching support and advanced features like subscriptions. In apps that have lots of queries or that are implementing complex data management, it's probably a good idea to implement an actual GraphQL client.

However, if you're building an app that needs to make a few GraphQL queries, you may not need a full-blown GraphQL client! In a lot of cases, a simple HTTP request is enough.

Further reading
---------------

*   [Learn more about GraphQL](https://graphql.org/learn/)
*   [Learn more about the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
*   Watch me and Emma Bostian use this approach to [build a dynamic Jamstack app with Hasura GraphQL](https://www.learnwithjason.dev/we-need-to-taco-bout-your-choices)