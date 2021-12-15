---
title: 'Creating better, more predictable redirect rules for SPAs'
description: >-
  In a SPA, routes are client side rendered, meaning that route changes only
  correspond to changes in page content. In this post, we dive into enabling
  predictable redirect rules by diving into enforced and unenforced rules in
  Netlify's redirects logic.
authors:
  - Divya Tagtachian
date: '2020-04-07'
lastmod: '2020-04-06'
topics:
  - tutorials
tags:
  - Redirects
tweet: ''
format: blog
relatedposts:
  - Redirect Rules for All; How to configure redirects for your static site
  - Restrict access to your sites with role based redirects
seo:
  ogimage: /v3/img/blog/redirectpage.jpg
  metadescription: >-
    Redirects are handy to manage how browsers serve content. Learn how to use
    Netlify redirects in SPAs effectively so users get content predictably.
  metatitle: How to Create Better Redirect Rules for SPAs with Netlify
---
On Netlify, ensuring clean URLs is a matter of adding the following rule to the `_redirects` file:

```bash
/*   /index.html   200
```

This rule ensures that every path successfully resolves to `index.html`  and the client has full control over the routing logic. 

Generally, redirect rules are followed unless otherwise specified; If no conditional such as a role based or a GeoIP based redirect is present, Netlify’s proxy server adheres to all redirect rules present. Under the hood, Netlify distinguishes and categorizes redirect rules as “forced” and “unforced” for maximum granularity.  Unforced rules resolves a path to a matching file. In other words, if a static file exists under the initial path being redirecting from, Netlify will serve that file in place of applying that rule. 

To further illustrate this concept, let’s look at a Netlify redirects in action. Say we had the following redirect rule in our `_redirects` file or the equivalent redirect in our `netlify.toml` file:

```bash
/docs/routing/redirections /docs/routing/redirects 301
```

```toml
[[redirects]]
  from = "/docs/routing/redirections"
  to = "/docs/routing/redirects"
  status = 301
```

If Netlify finds an `index.html` page under the path `/docs/redirections` it will serve that file up in place of handling the redirect.  This feature is known as [file shadowing](https://docs.netlify.com/routing/redirects/rewrites-proxies/#shadowing). Broadly speaking, this behavior tends to be preferred when setting up redirect rules and routing in SPAs.

In the event that you’d rather enforce the rules and explicitly redirect regardless of whether a file exists at that path or not, Netlify offers “forced” rules. Forced rules provide a way to override Netlify’s implicit file shadowing and ignore existing content that matches a path. As the name implies, forced rules always take effect no matter the scenario. 

Using the above example, if Netlify finds an `index.html` page under the path `docs/redirections` it will ignore this file and instead redirect to the `index.html` file under `/docs/redirects`. 

To enable forced redirects, all you’ll need to do is add a `!` to the end of your redirect rule  in the `_redirects` file or a `forced=true` attribute in the specific redirects portion of the `netlify.toml` file.

```bash
/docs/routing/redirections /docs/routing/redirects 301!
```

```toml
[[redirects]]
  from = "/docs/routing/redirections"
  to = "/docs/routing/redirects"
  status = 301
  force = true
```

## Well, hasn’t this always been the case?
Despite our best efforts, this behavior hasn’t always been as predictable as we would’ve liked. Due to internal technical implementations over the last few years, the encoded conditions driving redirects changed such that forced and unforced rules did not behave as expected. This led to unpredictable, sometimes even undesired behavior where redirects were forced under certain conditions and not others. 

In an effort to maintain consistency and predictability, we’ve made updates to redirects so only rules with explicit force configurations will be treated as such. This change will take effect as of April 7th.

## Checkity check your redirects
Redirects are handy ways to manage how browsers identify and serve content. Mapping redirect rules accurately means that users will always have a predictable browsing experience and is key to enhancing overall user experience. With the new changes taking effect, be sure to check your site's redirects to make sure they behave the way you expect!

To recap, here is the behavior between “forced” and “unforced” rules. 

### Given the following _unforced_ redirect rule:
```
/docs/routing/redirections /docs/routing/redirects 301
```
 
The following file will load:
```
/docs/routing/redirections/index.html
```

### Given the following _forced_ redirect rule:
```
/docs/routing/redirections /docs/routing/redirects 301!
```

The following file will load:
```
/docs/routing/redirects/index.html
```

If you have questions about how Netlify handles redirects, be sure to check out [the corresponding post related to redirects]([Changed behavior in redirects – Updates – Netlify Community](https://community.netlify.com/t/changed-behavior-in-redirects/10084)) in our community forum!