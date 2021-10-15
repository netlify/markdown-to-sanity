---
title: Redirect Rules for All; How to configure redirects for your static site
description: >-
  Rewrite rules help determine the flow of traffic to your sites. In this post,
  lets walk through configuring redirect rules with your existing Netlify
  deploys.
authors:
  - Divya Sasidharan
date: '2019-01-16'
topics:
  - tutorials
tags:
  - Redirects
tweet: ''
format: blog
---
Browsers need to be told exactly what to do and where to go. You can think of them like the web’s version of a postperson who has to collect mail from one address and deliver it to another. In the postal world, the action of moving mail is, most of the time, fairly straightforward; mail gets picked up from Point A and is delivered to Point B. However, there are times when further steps are required for successful mail delivery. For instance, if a person moves, the postperson must be notified of this change so the mail can be successfully “redirected” via a change of address. 

On the web, a similar outcome is achieved via redirect rules. To better grasp redirects, let’s dive into what the process of a redirect entails. 


## A tale of HTTP

In a redirect, the browser first attempts to visit a URL at, say, `netlify.com/features/forms` but on arrival is instructed to visit another URL `netlify.com/docs/forms` instead. A redirect is an explicit instruction by the server to find a specific resource elsewhere.

Similar to the process of mail delivery, a browser needs explicit instructions from the server on how to respond to a request from the client. This communication between client and server happens over HTTP/HTTPS, a web protocol that enables the server to communicate the status of a request to the browser. `200 OK` (i.e. request succeeded) and `404 Not Found` (i.e. request failed) are examples of status codes we are likely all familiar with. HTTP status codes are broadly categorized by their response type; informational responses (1XX), successful responses (2XX), redirects (3XX), client errors (4XX), and servers errors (5XX). Redirect rules make use of 3XX to handle browser redirects. 

## Handling redirects

Achieving a redirect requires configuring your server with the necessary instructions on how to handle incoming requests. This can come in the form of a redirect file like `htaccess` for Apache and `nginx.conf` for Nginx, or by setting a 301/302 redirect in the response headers sent to the application server. While all these options are perfectly valid, they can be cumbersome to configure, and are especially problematic when it comes to maintaining and debugging. 

With Netlify however, achieving a redirect is a total breeze.

### The `_redirects` file
The most common strategy to enable redirects in Netlify is via the  `_redirects` file. Place the file in the root of your published site and it all just works; this file should be in your build output file, which, depending on your project’s configuration, is generally a folder called `build/`, or `public/`. A basic redirect looks something like this: 

```txt
/news  /blog
```

By default, redirect rules are given a status code of 301, which is a permanent redirect. If you wish to make the redirect temporary, if a user needs to login before viewing the page for example, you can easily do so by specifying the status code like so: 

```txt
/news /blog 302
```

You can specify the HTTP status code for the response. Specifying status codes in the redirect rules can also be handy when you want to gracefully handle no longer used routes and permanently deleted resources.

```txt
/store  /closed-forever 404
```

Another common use case for having redirects with an explicit status code in Netlify is in enabling [history pushstate](https://developer.mozilla.org/en-US/docs/Web/API/History_API) for clean URLs in single page applications (SPAs). In a setup without redirects, a url like, `outrageous-penguin.netlify.com/about` is routed to a `404: Not Found` error page on page refresh. In a SPA, routes are client side rendered, meaning that route changes only correspond to changes in page content. Without an explicit redirect, the Netlify bots assume you’re requesting a page separate from `/index.html` and since that page doesn’t actually exist, it returns an error. To enable clean URLs in your Netlify deployed SPAs, add the following rule to your redirects file. 

```txt
/* /index.html 200
```

### Structured configuration with `netlify.toml`
Another way to enable redirects is through the `netlify.toml` file. This approach is more explicit than the former and gives you more control over the structure of the your configuration without enforcing a predefined structure. It is also useful if you want to add custom headers for your proxy redirects, since this is not possible with a redirects file. Here’s an example of adding a custom header to a redirect rule. 

```toml
[[redirects]]
  from = "/search"
  to = "https://api.mysearch.com"
  status = 200
  force = true
  headers = {X-From = "Netlify"}
```

This structured configuration approach to redirect rules is also handy if your URL contains many query parameters and/or there are multiple conditions to be met to successfully handle a redirect. (Note: role based redirects are currently a feature only available with the Teams Business plan or above). In the example snippet below, we are redirecting a url from the site root to the dashboard route on the condition that the JSON web token (JWT) includes an admin role in its `app_metadata`. In addition, we are also passing any necessary query parameters to the new URL. (For more on role based redirects, [check out the docs](https://www.netlify.com/docs/redirects/#role-based-redirect-rules).) Netlify generally parses redirect rules from top to bottom. As a result, it will always use the first match it finds when processing redirect rules and ignore any subsequent matches. In the example therefore, if a role has not been set, the user is redirected via the second rule to the `/login` page. Its worth noting that should you include *both a* redirects file and redirect rules in your toml file, Netlify will prioritize the redirects file first before moving on to the .toml file.

```toml
[[redirects]]
  from = "/*"
  to = "/dashboard"
  status = 200
  force = false
  query = {path = ":path"} # apply this rule for /?path=example
  conditions = {Role = ["admin"]}
      
[[redirects]]
  from = "/*"
  to = "/login"
  status = 302
```

## Redirects All Around

Redirect rules are useful mechanisms to manage the flow of traffic to your websites. Thankfully, Netlify provides an easy solution to handle redirects without having to fuss with unwieldy server configurations. To learn more about redirects and to start working on building your own redirects on your websites, check out the [redirect docs](https://www.netlify.com/docs/redirects/) as well as the [Netlify Redirects Playground](https://play.netlify.com/redirects). 
