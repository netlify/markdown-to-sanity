---
title: Pair programming with the Netlify CLI
description: Learn how to share your local development server with anyone in the world!
authors:
  - Charlie Gerard
date: 2021-11-17
lastmod: 2021-11-17
topics:
  - tutorials
tags:
  - Jamstack
  - Netlify CLI
  - programming
tweet: ""
format: blog
relatedposts:
seo:
  metatitle: Pair programming with the Netlify CLI
  metadescription: Learn how to share your local development server with anyone in the world!
  ogimage: /v3/img/blog/pair-programming-cli.png
---

Did you know you can share a live development server over HTTPS when running the [Netlify CLI](https://docs.netlify.com/cli/get-started/)? That's super cool! But... how?

If you run the command `netlify dev --live`, you open a tunnel from your local development server over the internet, so you can work with anyone with the link, anywhere in the world, as long as the session is open!

If you've used tools like [ngrok](https://ngrok.com/) before, it is similar but built directly in the Netlify CLI so you can take advantage of all the other features too!

Want to try it out? Start by installing the Netlify CLI with `npm install netlify-cli -g`, run `netlify init` or `netlify link` to connect a local project to a site on Netlify, and then run `netlify dev --live` to start your local server and generate the link you can share!

If everything works well, the browser should automatically open with the `.live` URL and you should see something like this in your terminal.

![](/v3/img/blog/netlify-cli-terminal.png)

If you're curious about the other features our CLI has, check out [the full commands list](https://cli.netlify.com/)!

Happy pairing 👩‍💻👨‍💻
