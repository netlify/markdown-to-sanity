---
authors:
  - Brian Douglas
  - David Wells
cmsUserSlug: ''
format: blog
short_title: Deploy React in 30 Seconds
date: 2016-07-22T00:00:00.000Z
tags:
  - popular
  - Deploy
  - continuous delivery
  - React
thumbnail: thumbnails/react-logo.png
title: Deploy React Apps in less than 30 Seconds
image: /v3/img/blog/react-logo.png
description: Deploy React apps easily with Netlify.
topics:
  - tools
---

At Netlify we use React in production and are familiar with the challenges in deploying it to production as well. Up until today, React has had no opinions on what to use with tooling, which has made deploying a unique problem to each project.

Today [Facebook announced](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) their opinated boiler-plate for getting React
projects started. This is great news, since the ecosystem around getting React projects
started has been in a state of [Flux](https://facebook.github.io/flux/) (see what I did there?).

Now you can get a React project up and running with a few commands, and
in less than 30 seconds you can have it deployed with Netlify.

Open your terminal and enter the following:

```bash
npm install -g create-react-app
create-react-app hello-world
cd hello-world
npm run build

npm install netlify-cli -g
netlify deploy
```

Or deploy a create-react-app site with Netlify Functions support with just 1 click:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/create-react-app-lambda)

If you are using the netlify CLI, follow command line prompts and choose yes for new project and `./build`
as your deploy folder and voila you have a production React app!

If that was too hard to follow, here is a gif of me doing it:

![preview gif](/v3/img/blog/react-deploy-30-seconds.gif)

You can also link to a GitHub repo for [continuous deployment](https://www.netlify.com/docs/continuous-deployment) for specified branches and will grant you our nifty <a href="/blog/2016/07/20/introducing-deploy-previews-in-netlify/">Deploy Preview</a> feature.

Happy Hacking :)

If you choose to use something for routing (like React Router for example), you will need to set up a [redirect and rewrite rule](https://www.netlify.com/docs/redirects) for the single page app.

That redirect rule would look like this:

```
/*    /index.html   200
```

This redirect rule above will serve the index.html instead of giving a 404 no matter what URL the browser requests.

You can add redirect rules to the `_redirects` file or to your `netlify.toml` config file. For more information on redirects on Netlify [checkout the docs](https://www.netlify.com/docs/redirects).

Go forth and React!
