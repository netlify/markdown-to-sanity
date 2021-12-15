---
title: 'A Step-by-Step Guide: Hexo on Netlify'
description: >-
  A step-by-step guide on how to host a website built with static site generator
  Hexo.
authors:
  - Aaron Autrand
date: 2015-10-26T00:00:00.000Z
topics:
  - tutorials
tags:
  - NodeJS
  - hexo
  - Tutorial
format: blog
image: /v3/img/blog/hexo-screenshot.png
---
**This guide was most recently updated/verified on Tuesday, February 26th, 2019. Below are the package versions used:**

* hexo-cli 1.1.0

Screenshots may be outdated.

---

Today, we're going to look at how to host a website built with [Hexo](https://hexo.io/) on Netlify, including setting up continuous deployment.

Let's start from scratch. If you already have a Hexo site set up, you can skip straight to the [Connecting to Netlify](#netlifystart) section.

## Installing Hexo

This guide assumes you have [Node.js](https://nodejs.org) installed.

Open your terminal, and enter the following command:

```
npm install -g hexo-cli
```

Hexo will create a directory for your project with this command:

```
hexo init /PATH/TO/hexo
```

Switch to the `hexo` directory:

```
cd /PATH/TO/hexo
```

## Building Your Site

Hexo can build a skeleton for your site, which will set up directories within the hexo directory to hold your content, html that hexo builds for you, and all of your necessary configuration files. Let's do that now:

```
npm install
```

Once that's done, the basic bones of your site are ready to go! Check out your work so far:

```
hexo server
```

You can take a look at your new site at http://0.0.0.0:4000/

Wow. Seriously, that's it. You're already done. Of course, you'll probably want to add some content (that's why you are building a site in the first place, isn't it?).

Hexo will create a new post for you:

```
hexo new "Hexo Websites on Netlify"
```

It even gives you a helpful file path for your new post. Follow that file path to open your new Markdown document (or just paste that path into the "Open" dialogue of your favorite text editor).

```
title: Hexo Websites on Netlify
date: 2015-10-09 16:03:33
tags: [easy, free]
---

This is how easy it is to create a static website hosted with Netlify.
```

The title and date are already set up. You can copy/paste in the above content to get a better idea of how Hexo handles text.

It's time to display your content. Use this command to generate your site:

```
hexo generate
```

Now, let's see how the hexo server displays your new content:

```
hexo server
```

Boom! Look at that new post. Like what you see? Great. Let's move on!

## Creating your Git Repo

Create a new repository on GitHub. To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub.

Open Terminal (for Mac users) or the command prompt (for Windows and Linux users).

For our purposes, let's call your new repo "hexo".

Change the current working directory to your local project.

```
cd ~/PATH/TO/hexo/
```

Initialize the local directory as a Git repository.

```
git init
```

Add the files in your new local repository. This stages them for the first commit.

```
git add .
```

Commit the files that you've staged in your local repository.

```
git commit -m 'First commit'
```

At the top of your GitHub repository's Quick Setup page, click the clipboard icon to copy the remote repository URL.

In Terminal, add the URL for the remote repository where your local repository will be pushed.

```
git remote add origin Git_Repository_URL
```

Verify your URL

```
git remote -v
```

Now, it's time to push the changes in your local repository to GitHub.

```
git push -u origin master
```

Now that your assets are up and running on GitHub, let's connect them to Netlify.

<a id="netlifystart"></a>

## Connecting to Netlify

### Step 1: Add Your New Site

![New site from Git](/v3/img/blog/hexo_new_site_from_git.png)

Creating a new site on Netlify is simple. Once you've logged in, you'll be taken to https://app.netlify.com/account/sites. If you're just starting out, there's only one option.

### Step 2: Link to Your GitHub

Clicking "New site from Git" brings you to this screen:

![step 2 - link](/v3/img/blog/create_a_new_site.png)

When you push to GitHub, Netlify does all the work. No more manual deploying of updates or changes!

Since your assets are hosted on GitHub, we'll need to link Netlify to GitHub. Click "GitHub".

### Step 3: Authorize Netlify

![step 3 - authorize](/v3/img/blog/github_authorization.png)

It's time to allow Netlify and GitHub to talk to each other. Clicking the "Authorize Application" button will do just that. Netlify doesn't store your GitHub access token on our servers. If you'd like to know more about the permissions Netlify requests and why we need them, please refer to [GitHub permissions](https://www.netlify.com/docs/github-permissions/).

### Step 4: Choose Your Repo

![step 4 - repo](/v3/img/blog/link_repo.png)

Now that you've connected Netlify and GitHub, you can see a list of your Git repos. There's the "hexo_netlify" repo we just pushed to GitHub. Let's select it.

### Step 5: Configure Your Settings

![step 5 - configure](/v3/img/blog/ready_to_deploy.png)

Here you can configure your options. For the purposes of this tutorial, there's nothing you need to change, so just click "Deploy site".

### Step 6: Build Your Site

![step 6 - build](/v3/img/blog/deploying.png)

Now it's time to sit back and relax. Go grab something cold to drink, scratch the dog behind the ears, or just get up and walk around (you've probably been in front of the computer for too long today, right?). Netlify will do the rest, and you can watch the progress.

### Step 7: Done

![step 7 - done](/v3/img/blog/deployed.png)

Wait, you thought there was going to be more? Nope! Netlify has done it all for you, including giving your site a temporary name. Let's make it look a little prettier. Go to _Domain settings > Edit site name_:

![step 8 - change subdomain name](/v3/img/blog/update_subdomain_name.png)

And 🎉

![step 9 - pretty](/v3/img/blog/updated_subdomain_name.png)

There, that's better. Now you can add your custom domain, and your site will be live for your adoring public to view. Congratulations, and thanks for using Netlify!
