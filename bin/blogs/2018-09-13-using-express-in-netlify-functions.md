---
title: How to run Express.js apps with Netlify Functions
description: >-
  Learn how to use the popular node express.js framework with functions on Netlify.
authors:
  - Mark Tse
  - David Wells
date: '2018-09-13'
topics:
  - tutorials
tags:
  - Functions
  - Serverless
  - Express
tweet: >-
  How to build an Express.js application on top of Netlify functions
format: blog
---

Netlify started off as a service for hosting static websites. Not only was it an
amazing service from the start, managing the hosting infrastructure so you can
focus on putting your website together, but they have since added support for
those looking to go beyond a static site. AWS (Amazon Web Services) Lambda
functions, their most recent [add-on](/docs/functions/),
means developers now have the freedom to run arbitrary backend code to support
their website without having to leave Netlify.

However, if you come from an [Express](https://expressjs.com/) background, you may not be interested in
working with or have the time to learn a new technology stack. In this post, I
will show how you can build an Express application on top of Lambda
functions. If you are using another web framework (e.g. Koa.js), stick around!
The contents of this post should also apply to any web framework built upon
Node.js's `http` module.

Although I will be referring to only AWS Lambda functions in this post, I really
mean the [API Gateway API and Lambda
integration](https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started-with-lambda-integration.html),
which Netlify Functions has abstracted away for us.

The code & examples in this post can be found [here](#trying-it-out). 

{{< toc >}}

## Quick Introduction to Lambda Functions

Imagine a function that updates a database in a web application that is running
on a server:

```js
function updateDatabase(data) {
  ... // update the database
  return newValue;
}
```

and imagine that it was tied to a route:

```js
app.post('/updatestate', (req, res) => {
  const newValue = updateDatabase(res.body);
  res.json(newValue);
});
```

How many servers do you need to serve the `/updatestate` endpoint? Do you know
when to add servers during high-load periods and when to scale down to save
money?

The idea behind Lambda functions is that you simply pay for what you need and do
not have to worry about responding to changes in load to your application. If
nothing is happening, you do not pay at all. If the number of requests spike,
AWS automatically scales for you in the background to match that load. All you
have to do is provide the code you want Lambda to execute upon each request. In
our example that would be the equivalent of `updateDatabase()`, which would look
something like this:

```js
'use strict';
function updateDatabase(data) {
  ... // update the database
  return newValue;
}

exports.handler = function(event, context, callback) {
  if(event.httpMethod === 'POST' && event.path === '/my/path') {
    const requestBody = JSON.parse(event.body);
    const newValue = updateDatabase(requestBody);
    callback(null, {
      statusCode: 200,
      body: newValue
    });
  } else {
    callback(null, {
      statusCode: 400,
      body: {}
    });
  }
}
```

Lambda will call the `handler` function for each request. The `event` object is
Lambda's way of representing the incoming request, and the `callback(err, data)`
function is how you tell Lambda what response to send back.

## Express via serverless-http

Express is a web framework that is built on the `http` module, simplifying
route management as described in [Understanding Express.js by Evan
Hahn](https://evanhahn.com/understanding-express/). If you look at the following
example from that article, you will notice that you have to manage routing when
using `http`, similar to when using Lambda functions:

```js
var http = require("http");

http.createServer(function(req, res) {
  // Homepage
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome to the homepage!");
  }

  // About page
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome to the about page!");
  }

  // 404'd!
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 error! File not found.");
  }
}).listen(1337, "localhost");
```

Going back to our Lambda function, you will notice that the `event` object and
`callback` function are very similar to Express's `req` and `res` object, in
that they facilitate getting information about the request and returning a
response to the client. In fact, it is similar enough that a library exists to
translate between the two:
[serverless-http](https://github.com/dougmoscrop/serverless-http).

With `serverless-http`, you can do something like this:

```js
'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

function updateDatabase(data) {
  ... // update the database
  return newValue;
}

app.use(bodyParser);
app.post('/updatestate', (req, res) => {
  const newValue = updateDatabase(res.body);
  res.json(newValue);
});

module.exports.handler = serverless(app);
```

The above code can be seen [in the repo](https://github.com/neverendingqs/netlify-express/blob/0780127cd575704e2a2a00a1a648ba5a5a66c388/express/server.js).

The key is that last bit, where `serverless-http` acts as a decorator and
translates Lambda's `event` into something Express can use, and `req` back to
a proper call to Lambda's `callback(err, data)`.

## Benefits of using Express in serverless functions

Using `serverless-http` and Express on top of Lambda functions simplifies the
routing decision code, similar to why you would use Express over the `http`
module.

There are a number of benefits to using Express in a Lambda function.

- **Use your favorite Express patterns.**
- **Use existing Express middleware.**

    Express has a large ecosystem of ready-to-use middleware components.

    It's very handy to be able to plug these in and use them.

    For example, the `passport` authentication middleware supports a wide array of authenication methods like Twitter Oauth, Facebook, GitHub, etc.

    You can add the middleware to our Express function and have authenicated Lambda functions with minimal effort on our part.

- **Migrate existing apps into functions.**

    Porting an existing Express application into a Lambda function using `serverless-http` doesn't require many code changes to the existing application. This makes porting over apps relatively straightforward.

## Considerations for using Express in functions

There are a couple things to consider when using the Express-in-a-function approach.

### Resource limits

By default Netlify's Lambda functions run with [128 MB memory and 10 seconds function execution
limit](/docs/functions/#custom-deployment-options). In
terms of processing power (CPU), AWS does not disclose that value, but it is
[proportional to how much memory is allocated to the Lambda
function](https://docs.aws.amazon.com/lambda/latest/dg/resource-model.html).

There is also 512 MB of temporary disk space available across all memory
configurations. It's possible to stash files or data into this `/temp` directory of the function but because the functions are ephemeral in nature, you can't rely on the cache always being present.

These limits mean you will not be able to have any large or long-running
backend requests. If you bypass those limits, the Lambda function stops
executing immediately with an error, which translates to a 500 HTTP status code.
You can see the full set of limits on [AWS's developer
guide](https://docs.aws.amazon.com/lambda/latest/dg/limits.html).

Interestingly enough, [1024 MB Lambda functions are more price-effective than
128 MB Lambda functions and they run in a shorter
time](https://medium.com/epsagon/how-to-make-lambda-faster-memory-performance-benchmark-be6ebc41f0fc).

If your application requires more memory or a longer execution time (5 minute maximum), you can contact Netlify support [as
per their documentation](/docs/functions/#custom-deployment-options) to request higher resource limits. In the future, this will likely be controllable via the `netlify.toml` config file.

### "Stateless" runtime

When running serverless functions, AWS tries to reuse running function containers as best as they can but make no guarantees an instance of a function will be reused for multiple requests. This means you need to think about your functions as "stateless".

This impacts how you need to handle any in-memory state or file system content to persist across
requests. For more details, I recommend looking at the [developer
guide](https://docs.aws.amazon.com/lambda/latest/dg/running-lambda-code.html).

When you are writing your function code, you can cache things in memory or to a `/temp` folder. On a subsequent request you need to first check the cache exists. If the cached data exists then you can use it, otherwise you will need to fetch the data again (and then save to cache for next run).

The pseudo code of this 'cache check' would look similar to this:

```js
if (dataInCacheExists) {
  // use it!
} else {
  // make expensive call / connect to database pool / etc

  // Then save the data in memory or to "/temp" directory cache
}
```

### Connecting to Databases

Behind most web applications is a database.

In the serverless world, there are no baked-in datastores in the functions. If you need a persistent data store, such as for session management, you will have to bring your own at this time.

Keep in mind that there are no guarantees that subsequent calls will reuse an
instance of your Lambda function, so do *not* rely on in-memory caches (e.g.
do not use [memorystore](https://github.com/roccomuso/memorystore) to manage
your sessions).

There are a wide array of datastores you can choose to connect to your Netlify Functions including:

- [DynamoDB](https://aws.amazon.com/dynamodb/)
- [FaunaDB](https://fauna.com/) ([example with Netlify Functions](https://faunadb-example.netlify.com/)
- [MongoDB](https://mlab.com/)
- [Firebase](https://firebase.google.com/)
- [S3 as a DB](https://www.npmjs.com/package/s3-db)
- ... the lists goes on


## Trying it out

If you are interested in exploring
this topic further, check out these two ready-to-deploy examples of running Express.js on Netlify Functions.

### Express.js on Netlify

I've made this very simple sample to help get you started.

[Repo Link](https://github.com/neverendingqs/netlify-express) and [Live Demo Link](https://netlify-express.netlify.com/)

Deploy with one click:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/neverendingqs/netlify-express)

### Netlify Express Demos

This demo by Netlify's David Wells includes how to do React server-side rendering via Express + Netlify Functions.

[Repo Link](https://github.com/DavidWells/netlify-functions-express) and [Live Demo Link](https://express-via-functions.netlify.com/)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DavidWells/netlify-functions-express)

## Conclusion

In this post, I have showed how you can use Express with Netlify Functions and
outlined the limitations with this approach. If you have any
questions or comments, feel free to [create an
issue](https://github.com/neverendingqs/netlify-express/issues) on my sample repo, and I would be happy to continue the discussion there.

Be sure to checkout the original post by Mark on his [blog](https://blog.neverendingqs.com/2018/09/08/expressjs-on-netlify.html).

Have an idea for a post you'd like to write for the Netlify blog? [Let us know](/blog/guest-post)!
