---
title: How Our Build Bots Build Sites
description: 'How we build your site, what can go wrong, and how to fix it'
authors:
  - Chris McCraw
date: '2016-10-18'
topics:
  - tutorials
tags:
  - popular
  - Build
  - debugging
format: blog
image: /v3/img/blog/robot_builds.jpg
---
At Netlify, we believe in the simplicity of the [JAMstack](http://www.jamstack.org), and we are thrilled that you are contributing to the success of the stack along with us. Developing sites can be simple, but once you start thinking outside of the box, you’re probably using more than one framework, more than a few modules in the language that your site generator is written in, and some of your own code to glue them together.

Your carefully crafted development environment, which came together organically during the creation and growth of your site over weeks or months, builds your site just fine.  But then you send us your repository to build for you, and all we generate is a build failure...bummer!  You’re always welcome to [ask us for help](https://community.netlify.com/) in Community. However, we do have some best practices and some debugging suggestions if you’d rather do your own investigation.

## How we make the sausage

To give some context for diving into build issues, let’s take a high-level tour of our build system. Note that the build system is only used when you use us with a git repo — sending us your code, rather than your finished site.  It works the same for a repository we’re watching, a deploy from the command line, or a build you trigger from our UI — but not for API deploys where you send us a zip file or drag and drop deploys. Those are pre-built by you and we just send your content out to our CDN.

The build system is actually quite straightforward — we fire up a [docker container](https://github.com/netlify/build-image) and then run this script to do the build: https://github.com/netlify/build-image/blob/xenial/run-build.sh

Why do we do it this way?  Several reasons:

* Making sure there is no information leakage (or other side effects) between your build environment and others’.
* To create a build image that we can easily share with you.
* Neatly encapsulating and enabling simple clearing of completed builds.
* Oh, and our CTO worked at Docker so we have pretty good in-house expertise 😃.

## Want to try to make your own sausage?

To debug a build, all you need to do is:

```
docker pull netlify/build:xenial ;
git clone https://github.com/netlify/build-image ;
cd build-image ;
./test-tools/start-image.sh /path/to/your/repository
```

...and then run: `build <your build command>`

This will leave you at the end of the build process, so you can read logfiles, see state, and in general debug what happened in the build.

However, I am a psychic, so I can tell you what _probably_ went wrong with your build.  Speaking as Netlify’s tech support lead, I can tell you that the root cause of a build failure is likely with your specification of the versions of build tools you want to use.  You’ve probably got a `package.json` if you use a Node.js-based system, and maybe you have a `requirements.txt` or a `Gemfile` if you’re using Python or Ruby.  That’s all you probably need on your local build system — because you can be sure that the version of Node, Ruby, or Python you’re using is the version that you’re using.  But what versions are we using?  You can check out all our defaults here: <https://github.com/netlify/build-image/blob/xenial/included_software.md#languages>

I know — **you** don’t use those versions AT ALL, how on earth could we choose such an ancient version of your language, WTF?

## A tale of several versions

The truth of the state of technology is that there is no one size fits all project specification (as our [ever-growing list of static site generators](https://www.staticgen.com) shows), but don’t worry, we do allow you to specify:

* a **Node.js** version — either via `.nvmrc` or by setting a `NODE_VERSION` environment variable in the “Build environment” section of our per-site Settings UI.  Note that there are some default npm version to Node.js version mappings — Node.js v8 will pull in npm v5, and if you want some different behavior you may have to do some fancy footwork with your package.json (or even explicitly installing an older version).  You can use any version that `nvm` can fetch!
* a **Ruby** version — put your version of choice in a `/.ruby-version` file. You can choose any version that [rvm](https://rvm.io) supports.  As of February 2020, we pre-install 2.6.2.
* a **Python** version — put your version of choice in a `/runtime.txt` .  We only have a handful of pythons (hehe) in our build environment, so you should either pick one of these or make a compelling argument for us to include another version:
  * 2.7 (default)
  * 3.5
  * 3.7
* A **PHP** version.  We only have 2 php’s installed — v 5.6 and v7.2 — and you need to explicitly call `php7.2` in your scripts if you want to use v7.2 instead of 5.6.

If our build environment is missing something other than a ruby, node, or python dependency, you might need to add it yourself.  Our build environment runs **Ubuntu Linux v 16.04 LTS using x86_64 architecture**, so you'll want to bring a binary that can run there.  Since you don't have permissions to `apt-get install` anything, you're limited to pre-compiled binaries that fit that architecture.  A frequent use pattern is to get a copy of the binary we need to build your site, and add it to your repository so you can run it directly during your build.  By default your build starts in the root of your repository, so it could be as easy as using `./my-binary`  as part of your build command.

## What else could go wrong?

There are several other paths to failure within our build environment.  One example is builds that are intended to serve content: your build command shouldn’t be `node index.js` or `npm start`! You’ll probably see a build timeout in these cases — we’ll run your commands but then after 15 minutes, we stop the build process.

The next biggest source of failures is network access.  Your docker container does have network access — you can download stuff from the internet — but what we don’t have is all of your GitHub permissions.  If you have submodules that are in private repositories, or private node modules, or other Git repositories that you need separate access to — well, our build environment only has access to them in case you send the authentication raw materials our way somehow.  In general we don’t advise this — for instance: use subtrees instead of submodules and create a copy of the private node modules _before_ sending us a deploy.

Now that you’ve gotten the versions ironed out and access permissions all dialed in, things should be working, right?  Well, just in case builds are still failing, fear not — we’ll be happy to [help you debug](https://community.netlify.com/) if things still aren’t working.  And of course, we love [PR’s on our build image](https://github.com/netlify/build-image/compare?expand=1) if you need something we don’t have!
