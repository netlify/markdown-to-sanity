---
title: Scully Template Project with Angular 12 and Netlify
description: Hit the ground running with this new template for a pre-rendered
  Angular 12 site using Scully and Netlify.
authors:
  - Tara Z. Manicsic
date: 2021-06-07
lastmod: 2021-06-04
topics:
  - tutorials
tags:
  - Angular
  - Scully
tweet: ""
format: blog
seo:
  metatitle: Scully Template Project with Angular 12 and Netlify
  metadescription: Hit the ground running with this new template for a
    pre-rendered Angular 12 site using Scully and Netlify.
---
Coding is hard, let me try to make it a bit easier by giving you some code. I created a template project using [Angular 12](https://blog.angular.io/angular-v12-is-now-available-32ed51fbfd49?gi=a642c140976c), [Scully](http://scully.io/) static site generator, and threw in a sprinkling of Netlify setup to help easily deploy to a [CDN](https://www.netlify.com/products/edge/). What can I say except you're welcome™️. Now [that song](https://www.youtube.com/watch?v=79DijItQXMM&ab_channel=DisneyMusicVEVO) will be stuck in my head and your head all day (does that make us friends? yes). The goal of this template is to give you a head start on your next pre-rendered Angular project. In this post we'll just run through:

* Using the template for your project
* Running it locally
* Deploying it to a global CDN via Netlify

You can find the [project repo here](https://github.com/tzmanics/scully-template-project) and this is what the template looks like.

![screenshot of the template live](/v3/img/blog/screen-shot-2021-06-04-at-12.41.10-am.jpg "tempalte screenshot")

You can also use the button below to immediately deploy this project onto your Netlify account.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tzmanics/scully-template-project&utm_source=github&utm_medium=scully-template-tzm&utm_campaign=devex)

Are you still humming the 'You're Welcome' song? Me too. Let's jump into the code, shall we?

## Using this Lovely Template

I was thinking ahead and made the project repo for this template a template project. So, we can just click the 'Template' button or clone the repo locally with the command `git clone https://github.com/tzmanics/scully-template-project`. Template, template, template, in case I hadn't used that word enough.

![the template button on github](/v3/img/blog/screen-shot-2021-06-04-at-12.43.46-am.jpg "template button")

If we need to rename the project we'll have to find and replace every instance of `scully-template-project`. It exists many places in an Angular project so cloning with a new name (`git clone https://github.com/tzmanics/scully-template-project new-name`) is just the start. Most code editors will allow you to 'replace all' on a searched phrase to make the job easier.

Now that we have it all to ourselves we can start coding!

## Running it Locally

To get started we can use the Angular command [`ng serve` || `ng s`](https://angular.io/cli/serve) which will serve the site at `localhost:4200` and rebuild with any file changes. Before we can run Scully we need to build the project (so that Scully knows what to pre-render) with the [`ng build`](https://angular.io/cli/build) command. This needs to be done with every change before running Scully or the changes won't be reflected. Once it is built we can also run `scully serve` to see the pre-rendered version of the site locally.

## Deploying to the Edge

This template comes with a [Netlify configuration file](https://github.com/tzmanics/scully-template-project/blob/main/netlify.toml) that sets us up to easily deploy to Netlify's CDN ([Content Delivery Network](https://jamstack.org/glossary/cdn/)). If we want to also take advantage of continuous deployment we can install the [Netlify CLI](https://cli.netlify.com/) and initialize the project with these two commands.

```bash
npm install netlify-cli -g
netlify init
```

Now, whenever we push code changes to GitHub the project will automatically update and deploy the new build.

> 🧠 Fun Feature Fact: We recently released [Collaborative Deploy Previews](https://www.netlify.com/blog/2021/05/19/give-meaningful-feedback-with-collaborative-deploy-previews/) to help teams give impactful feedback on projects. You can try it out when you deploy this project.

Well, how about that, we got ourselves our own live Scully site.

![screenshot of the site's Netlify dahsboard](/v3/img/blog/screen-shot-2021-06-04-at-1.06.08-am.jpg "The site's Netlify dashboard")

## The Future

This is the end...of this post. We've come so far and I've enjoyed it immensely, so let's discuss the future. My hope is that we can both make contributions to this relationship, ahem, I mean template. With that in mind, this [project is open](https://github.com/tzmanics/scully-template-project) and awaiting any issues and pull requests you can think of. I look forward to building on this template together and can't wait to see what you create.

Happy coding 👩🏻‍💻!
