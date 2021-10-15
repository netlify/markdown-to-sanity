---
title: Using the Angular Builder for Netlify
description: A walkthrough of how to use `netlify-builder` with your Angular CLI project.
authors:
  - Tara Z. Manicsic
date: '2019-09-17'
topics:
  - tutorials
tags:
  - Angular
tweet: ''
format: blog
---
I was stoked to try out the [`netlify-builder`](https://github.com/ngx-builders/netlify-builder) built for the Angular CLI by [Santosh Yadav](https://www.santoshyadav.dev). It's _super_ easy to use. One thing I was hesitant 😬 about was putting my personal access token in the public `angular.json` file. Instead I made a script to deploy any project by passing in my token as an environment variable. Come code with me 🤗.

## First step: add the builder 🛠

To use the the builder we first want to add it to our Angular project with the handy `ng add` command. The [`ng add`](https://angular.io/cli/add) command from the Angular CLI will configure your project to use a published npm package library based on that library's schematic.

_code to run in the command line:_

`ng add @netlify-builder/deploy`

Running this command will walk us through setting up the builder. It first asks for the project API ID or Site ID of your Netlify project. We can find this by going to the project page clicking 'Settings' in the top menu, then 'Site Settings' under the 'General' menu tab (https://app.netlify.com/sites/{your site name}/settings/general#site-information) 

![guide to find the site id in the settings page](/img/blog/app-id.png "site id")

The next step in the builder setup asks for our Personal Access Token but we don't want to put that in a public file. If we do add it in this setup the builder adds that information to the `angular.json` file.

![an example of the angular.json deploy setting](/img/blog/deploy-angular-json.png "deploy settings")

We want to avoid ☠️having that sensitive information in a public file that anyone can see. Luckily, the way Santosh set up the builder we don't have to add the Token here, [instead it will check for an environment variable](https://github.com/ngx-builders/netlify-builder/blob/master/command-builder/deploy/index.ts#L33). So, we just hit enter to skip that part.

<iframe width="560" height="315" src="https://www.youtube.com/embed/tILx6ylyP_4?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Second || Final Step: setting the Token 🗝 variable

We want to set the token by using a `process.env` global variable. To find your Netlify Token just head to [your application's token generating page](https://app.netlify.com/user/applications/personal) or click on your avatar, the 'User Settings' option, click 'Applications' in the left menu, then click the 'New access token' button under 'Personal access tokens'. We can type anything that is a good reference for you as the description of your token and click the 'Generate' button.

![finding your token through the Netlify UI](/img/blog/token.png "netlify access token")

> NOTE: Make sure you copy the newly created token once it's generated. You can't view it again after you leave that page. You can always create a new one though 😎👍.

 Normally, we would just need to write the command `ng deploy`. With this environment variable we now write:

_code to run in the command line:_

`NETLIFY_TOKEN=<token> ng deploy`

> ‼️ UPDATE: Since writing this post and creating these videos the Angular CLI team released a minor update that changes the deploy command from `ng run <project name>:deploy` to, simply, `ng deploy`. If you see this old command syntax in the video just know that the Angular CLI team has just saved you all those keystrokes 😍.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yHETIuM391E?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## 🌈 Way Cooler Last Step 🧜‍

Why type all that when we can make a shell command. In our `.bashrc` file we make a function of any name, in this case we'll call it `netliLove`. In this function we can set the `NETLIFY_TOKEN` environment variable to the access token we copied earlier. We can use this token for every product so we will hardcode it here.

_code to add to  `~/.bashrc`:_

```bash
netliLove() {
  NETLIFY_TOKEN=<token> ng deploy
}
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/sL7XYI74XWc?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Here's what we've accomplished in this post:

* added [`netlify-builder`](https://www.npmjs.com/package/@netlify-builder/deploy) to our Angular application
* used it to deploy our application with an environment variable instead of adding our token to a public file
* made a totally rad bash script that stores our token to be used with any project and saves us keystrokes

You should be proud of yourself. I'm proud of you. Go you!

## No 🙅🏻‍ More Steps

That's it! Whichever way you decide to use the builder, I hope you had a fun time setting it up. At least, I hope you found it to be a painless process. I really appreciate Santosh putting the work into creating this builder AND making it [open source](https://github.com/ngx-builders/netlify-builder). If you'd like to contribute or check out the code you can find it [here on GitHub](https://github.com/ngx-builders/netlify-builder/) and you can learn more about Santosh [on his website](https://www.santoshyadav.dev/).

Not ready for the coding fun to end? Check out these other resources:

* Dive into our [docs](https://www.netlify.com/docs/)!
* Add [Fauna DB](https://www.netlify.com/blog/2019/09/10/announcing-the-faunadb-add-on-for-netlify/) to your project.

Happy coding, everyone!
