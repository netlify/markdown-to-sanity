---
title: 'Introducing Scully: the Angular Static Site Generator '
description: "The Angular community now has their very own static site generator \U0001F47D❤️and we are stoked! The Angular in the Jamstack story just got even better."
authors:
  - Tara Z. Manicsic
date: '2019-12-16'
topics:
  - news
tags:
  - Angular
tweet: ''
format: blog
---
What? Angular didn't have a static site generator (SSG) yet? But, it does now! The awesome team at [HeroDevs](https://herodevs.com/) has just released the alpha version of [Scully](http://scullyio.com/):

> Scully pre-renders each page in your app to plain HTML & CSS. To do this, Scully uses machine learning techniques to find all of the routes in your project. Scully then visits each route, rendering the view and saving it to an HTML file.

If you, like me, have learned of the great benefits of [Angular in the Jamstack](https://www.netlify.com/blog/2019/10/30/whats-angular-in-the-jamstack-it-sounds-delicious?utm_source=blog&utm_medium=announcing-scully-post-tzm&utm_campaign=devex) and serving up static assets you may have also been asking for an Angular SSG. Well, Festivus/Kwanzaa/Hanukkah/Christmas doth come early, friend. You can even catch a live release by HeroDevs CEO, Founder, and Architect, Aaron Frost, [here on YouTube](https://youtu.be/Sh37rIUL-d4).

## The What & Where

Scully uses a node CLI application to run Angular schematics so you don't have to learn any new language or syntax. It's just Angular (#justAngular). To add it to an existing Angular app you just need to:

```bash
ng add @scullyio/init
ng build
npm run scully
```
Then you can see your static files in a new `dist` folder called `static` alongside your application folder. You can see here that your package size will shrink drastically. Aaaah static content 💆🏻‍♀️.

You can also take advantage of the [Angular CLI `generate` command](https://angular.io/cli/generate) to add blog support and create posts. 

```bash
ng g @scullyio/init:blog
ng g @scullyio/init:post
```

They've also created a [plugin system](https://github.com/scullyio/scully/blob/master/docs/plugins.md) to incorporate Route Plugins and Data Transform Plugins. With all this in just the alpha version, it's easy to see how powerful Scully can become and what an asset it's going to be in the Jamstack.

Here are a few resources to help you investigate Scully:
- [Scully Documentation](https://github.com/scullyio/scully/blob/master/docs/scully.md)
- [The Live Scully Video Release](https://youtu.be/Sh37rIUL-d4)
- [What's Angular in the Jamstack?](https://www.netlify.com/blog/2019/10/30/whats-angular-in-the-jamstack-it-sounds-delicious?utm_source=blog&utm_medium=announcing-scully-post-tzm&utm_campaign=devex)
- [First Steps Using Netlify & Angular](https://www.netlify.com/blog/2019/09/23/first-steps-using-netlify-angular?utm_source=blog&utm_medium=announcing-scully-post-tzm&utm_campaign=devex)

## Big Thanks & Future Fun

Such big thanks to [HeroDevs](https://herodevs.com/) for creating Scully! We can't wait to jump in and get pre-rendering. We're excited to help the project grow and evolve. If you are too, you can post issues [on the repo here](https://github.com/scullyio/scully/blob/master/docs/issues.md). Stay tuned to see some of our Netlify adventures working with Scully and Angular in the Jamstack. Happy Coding!
