---
title: Supercharge your local development with Netlify Dev
description: Learn how you can use the Netlify CLI to add utilities to your
  local dev environment, replicate Netlify's edge logic and routing rules, and
  improve you local testing and development.
authors:
  - Phil Hawksworth
date: 2021-12-02
lastmod: 2021-12-02
topics:
  - tutorials
tags:
  - Tips
  - Features
  - CLI
tweet: ""
format: blog
relatedposts:
  - " Netlify Dev — our entire platform, right on your laptop"
  - Netlify CLI 2.0 now in Beta 🎉
seo:
  ogimage: /v3/img/blog/og-feature-ntl-dev.png
---
> Throughout December we'll be [highlighting a different Netlify feature each day](https://www.netlify.com/blog/2021/12/01/highlighting-a-different-netlify-feature-each-day-in-december/). It might just be the thing you need to unlock those creative juices, and [dust off that domain](https://www.netlify.com/blog/2021/12/01/dusty-domains-your-forgotten-domains-raise-money-for-charity/?utm_campaign=devex-ph&utm_source=netlify&utm_medium=blog&utm_content=adventure-cli-dev) you registered but never deployed! Keep an eye [on the blog](https://www.netlify.com/blog/2021/12/01/highlighting-a-different-netlify-feature-each-day-in-december/?utm_campaign=devex-ph&utm_source=netlify&utm_medium=blog&utm_content=adventure-cli-dev) and on [Twitter](https://twitter.com/netlify) for each feature!

Ok, Time to get productive!

[Netlify Dev](https://www.netlify.com/products/dev/?utm_campaign=devex-ph&utm_source=netlify&utm_medium=blog&utm_content=adventure-cli-dev) brings a variety of utilities to your local development environment, and even replicates some of Netlify's edge logic and routing rules available to you for testing and development.

Netlify Dev is available as part of the [Netlify CLI](https://github.com/netlify/cli) which you can install globally on your system with:

```
npm install -g netlify-cli
```

Got that? Great! Lots of goodies await!

Now you can run `netlify dev` in your local project folder and it will automatically:

- Detect and run your site generator
- Serve your site locally
- Make environment variables available (More on those later this month!)
- Performs edge logic and routing rules (More on *those* later this month!)
- Compile and run serverless functions (And more on *those* later this month!)
- ...and more!

## More information

- [Netlify Dev](https://www.netlify.com/products/dev/?utm_campaign=devex-ph&utm_source=netlify&utm_medium=blog&utm_content=adventure-cli-dev)
- [Netlify Dev documentation](https://docs.netlify.com/cli/get-started/?utm_campaign=devex-ph&utm_source=netlify&utm_medium=blog&utm_content=adventure-cli-dev#netlify-dev)
- [Netlify CLI](https://github.com/netlify/cli)