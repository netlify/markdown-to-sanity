---
title: Creating Netlify's Schematics for Angular
description: A guide on how to add Netlify schematics to your Angular project ♥.
authors:
  - Tara Z. Manicsic
date: '2020-03-15'
topics:
  - tutorials
tags:
  - Angular
tweet: ''
format: blog
seo:
  metatitle: How To Use Netlify's Schematics for Angular - Part 1 - Creating Netlify Schematics
  metadescription: Explore this guide to learn how to add Netlify Schematics to your Angular project. In this first part of a three part series, learn to integrate Netlify into your Angular projects with one command- ng add netlify-schematics.
  ogimage: /img/blog/screen-shot-2020-03-10-at-10.23.48-am.png
---
We want to make your development process as seamless and easy as possible. My goal is to hone in on working with Angular and Netlify. One way I realized we could do this was to take advantage of [Angular Schematics](https://angular.io/guide/schematics) and Angular's [ng add](https://angular.io/cli/add) functionality. Let me break down what these two sets of words mean.

- [**Schematics**](https://angular.io/guide/schematics): Schematics allow you to programmatically add to and edit a project to incorporate tooling and/or features. This can cut out a lot of steps in project setup and help customize projects to automate common practices. It does this by creating a virtual file system, or [tree](https://angular.io/guide/schematics-authoring#schematics-concepts), checking to make sure your changes don't break the project, then applying the changes.

- [**`ng add`**](https://angular.io/cli/add): This CLI command incorporates a library into your project by installing it, and running its schematics (if they exist).

In making this `v1` of the [Netlify schematics](https://github.com/tzmanics/netlify-schematics) I had to search for a lot of reference pieces and glue them together. I also had some great help from [Mike Brocchi](https://twitter.com/brocco) and [Justin Schwartzenberger](https://twitter.com/schwarty) on [ngBS](https://twitter.com/ngBS_show). Not everyone can be fortunate enough to have direct help from someone who helped write the CLI. So, I wanted to create a resource that went straight into the process, helped you create a quick schematics project, and give you my collected knowledge as succinctly as possible.

In this first post we'll look at the current [Netlify schematics](https://github.com/tzmanics/netlify-schematics/) and how to add them to your project. Then you can follow along in a couple other posts to learn the process and make your own schematics. Here's what is covered in the other posts in this series:

Part 2: [Creating and Editing Files](https://www.netlify.com/blog/2020/03/18/creating-and-editing-files-with-angular-schematics/?utm_source=blog&utm_medium=create-netlify-schematics_tzm&utm_campaign=devex)

- generate a blank schematic with the cli tool
- make an `ng add` schematic that will:
  - create files using user input (via `x-prompt`)
  - edit _or_ create the project's `.gitignore` file

Part 3: [Testing and Publishing Schematics](https://www.netlify.com/blog/2020/03/19/testing-and-publishing-schematics/?utm_source=blog&utm_medium=create-netlify-schematics_tzm&utm_campaign=devex)

- create tests for each outcome
- run and publish our schematic

Let's take a look at the finished product we have so far!

## What The Netlify Schematics Do

In order to break the ice with the schematics, I decided to have them add a few pieces of handy data. So, this version of the schematics creates two files.

1. `netlify.toml`: this is a [Netlify configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=blog&utm_medium=create-netlify-schematics_tzm&utm_campaign=devex) that holds the build command for the project and the path to where the built project lives. You can add a lot more to this file ([here's](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=blog&utm_medium=create-netlify-schematics_tzm&utm_campaign=devex) info on that) but for now this will give Netlify the information it needs to do a simple deploy.

2. `netlifyConfig.json`: there are a few pieces of information that will help you communicate with the Netlify API (API ID, Personal Access Token, and project name), this file will store them.

Finally, I wanted to make sure the sensitive information stayed local and wouldn't be pushed up to any public repos. To do this the schematics will check if the project has a `.gitignore` file. If so, it adds the `netlifyConfig` file to the list of items to ignore. If there is no `.gitignore` it adds one with the config file listed.

This is currently what the schematics do. I'm [super open to suggestions or requests](https://github.com/tzmanics/netlify-schematics/issues) and know that this project will evolve. Let's check out what we get to play with now!

## Using the Netlify schematics

You can find the current version of our Netlify schematics [in this repo](https://github.com/tzmanics/netlify-schematics). To run these schematics in your Angular project you simply write this command from your projects directory.

```bash
ng add netlify-schematics
```

It will prompt you to enter a few bits of information:

- [project's build command](https://docs.netlify.com/configure-builds/get-started/#definitions?utm_source=blog&utm_medium=create-netlify-schematics_tzm&utm_campaign=devex): for Angular projects this is usually `ng build` or for production builds, `ng build --prod`.
- [directory of your build project](https://docs.netlify.com/configure-builds/get-started/#definitions?utm_source=blog&utm_medium=create-netlify-schematics_tzm&utm_campaign=devex): when you run your build command where does the built project live (for Angular it's `/dist/<project name>` for Angular + [Scully](https://github.com/scullyio/scully/blob/master/README.md) prerender it's `dist/static`)
- Netlify API ID: this is found in your Netlify Site information page in the path `/sites/sitename/settings/general#siteinformation`.

  ![where to find API ID on Netlify](https://cdn.netlify.com/0330ba7502466c14075dd4f7705c5f1ce01c0f05/27760/img/blog/app-id.png)

- Personal Access Token: this is a very sensitive piece of data (why we add this file to the .gitignore file) that can be generated by going to your [User Settings/Application/Personal access tokens](https://app.netlify.com/user/applications/personal).

  ![finding personal access token generator](https://cdn.netlify.com/654e259c62607bbc261a5d7e3cb49e8d5971b867/3c228/img/blog/token.png)

- project name: the name of your project, ummm, yes, a little self-explanatory there 😄.

Here's what that output will display:

![netlify schematics output](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1584591508/Screen_Shot_2020-03-19_at_12.16.51_AM_gztmit.jpg)

## The end...or is it?

This is v1 of our schematics for Netlify. There are a few more things I want to do and this project will evolve and change in time. I will definitely keep you updated, because 1. I care about you and 2. it's my job. So stay tuned, and always feel free to [ping us in the Netlify Community](https://community.netlify.com/?utm_source=project-repo&utm_medium=netlify-schematics_tzm&utm_campaign=devex) if you have any requests or questions. Happy coding 👩🏻‍💻!

## Resources for the Road

- [What's Angular in the JAMstack? It Sounds Delicious!](https://www.netlify.com/blog/2019/10/30/whats-angular-in-the-jamstack-it-sounds-delicious/?utm_source=blog&utm_medium=ubnetlify-schematics-v1_tzm&utm_campaign=devex)

- Part 2: [Creating and Editing Files](https://www.netlify.com/blog/2020/03/18/creating-and-editing-files-with-angular-schematics/?utm_source=blog&utm_medium=create-netlify-schematics_tzm&utm_campaign=devex)

- Part 3: [Testing and Publishing Angular Schematics](https://www.netlify.com/blog/2020/03/19/testing-and-publishing-schematics/?utm_source=blog&utm_medium=create-netlify-schematics_tzm&utm_campaign=devex)

- [Authoring schematics Docs](https://angular.io/guide/schematics-authoring)

- [Building an Angular Jamstack App with Scully](https://www.netlify.com/blog/2019/12/17/building-an-angular-jamstack-app-with-scully/?utm_source=blog&utm_medium=create-netlify-schematics_tzm&utm_campaign=devex)
