---
title: The importance of Developer Experience with GitHub Founder Tom Preston-Werner
description: >-
  7 Questions about JAMstack and developer experience, with the legendary
  founder of GitHub
authors:
  - Tom Preston-Werner
  - swyx
date: '2019-01-17'
topics:
  - insights
tags:
  - DX
  - Developer Experience
tweet: >-
  7 Questions with the legendary founder of GitHub: @mojombo on @Netlify,
  Architecture, TOML, Git, Jekyll and Static Site Generators, GitHub Pages, and
  more!
format: blog
---
![Tom Preston-Werner](/img/blog/tom-preston-werner.jpg)

The next in our interview series with leaders and innovators in Developer Experience (DX) – who better to ask than the legendary founder of GitHub?

## On Netlify and GitHub

**What similarities do you see between Netlify and early GitHub?**

**TPW**: One of my favorite things about early GitHub was how quickly and relentlessly we released new features that made developer’s lives
easier. I see the same thing in Netlify now. When I first started
meeting up with Matt and Chris in the very early Netlify days, I was
always astonished at how much they would accomplish between our
meetings. I knew then that something special was happening and that I
wanted to be a part of it as an investor. Since then, the rate of
innovation and new features has only increased.

Another parallel I see is how both GitHub and Netlify chose existing,
but nascent, technologies to build upon and got in early with the hope
of riding an impending wave of adoption. At GitHub, I saw Git as an
obviously better way of versioning and collaborating on code. Matt and
Chris saw static site generators, static hosting, and the undeniable
advantages of the JAMstack. But as promising as those technologies
were when we started, they were incomplete and difficult to use to
their maximum effect. By building the missing tooling, both companies
are making mass adoption a reality.

## On architecture

**What is the architecture like at your current startup?**

**TPW**: At my current startup, Chatterbug (https://chatterbug.com), we use a pretty traditional Rails backend setup with React on the frontend. We deploy to Heroku. So, no, we don’t do any of the fancy container stuff right now, and I’d prefer to keep it that way, but we may outgrow Heroku soon and be forced to move to AWS or similar, in which case a containerized solution may be the best approach.

My dream, though, is to be able to write full web applications with a
JAMstack approach and then deploy to a compute layer that just solves
everything for me. I don’t think we’re there yet, but the work that
Netlify is doing with Functions makes me optimistic that it’s on the
horizon. In fact, I’m working on a side project right now that might
help usher in that revolution just a bit faster, so stay tuned. =)

## On TOML

**We love TOML at Netlify. Is TOML suitable for everyone who uses
YAML, and is config-as-code too much config?**

**TPW**: Awesome, thanks!

I see TOML as the 80% solution for configuration. Most software just
needs a no-nonsense, easy to read and write config file that allows
you to get things done and then forget about it. My hope for TOML
users is that they think about TOML as little as possible.

I’m confident that TOML is currently the best choice for most new
projects that need a config file, but certain situations will require
something more advanced, and that’s ok. If your use case requires some
of the advanced things that YAML can do, you’ll pay the price in
complexity, ambiguity, and probability-of-vulnerability, but you’ll be
able to do things that TOML was specifically designed NOT to do. As
developers, we should always choose the right tool for the job, and
sometimes YAML might be the right tool. But usually not. =)

## On Git

**Smashing Magazine uses Git in some ways like a data store—comments
for example are actually submitted as Git commits. What do you think
of these more automated contributions to a repository and is this a
“good” use of git?**

**TPW**: It seems like a perfectly acceptable use case to me. If you need a permanent data store, have data that needs to be updated infrequently, and don’t need the advanced capabilities of a realtime relational or NoSQL database, then Git might be the perfect solution. I’ve used Git for some pretty crazy stuff before, and that’s one of its strong suits. Underneath the command line interface, Git is just a
distributed graph of versioned content that happens to (usually) be
stored in files. There are a lot of interesting patterns you can build
on top of that, and developers writing and committing code by hand is
just one of them.

## On static site generators

**Every major frontend framework has built static site generators from
Gatsby to Vuepress. Is this a natural evolution of SSG workhorses from
backend to frontend or is there still a place for backend-only SSGs
like Hugo and Jekyll?**

**TPW**: Again, these are all just tools in our ever expanding developer tool belt. The latest generation of static site generators is opening eyes about what JAMstack can do, and it makes me really excited. We’re at the very beginning of a wave of innovation in this space that will reshape how we think about building and deploying web applications of all sorts.

At the same time, I expect Jekyll and peers to enjoy popularity for
quite some time. They have tried and true models that have already
worked for many people and will continue to do so.

## On GitHub Pages and the JAMstack

**Dec 18 was the 10 year anniversary since you launched GitHub
Pages. How do you compare the JAMstack landscape then, to what it is
today?**

**TPW**: When I wrote Jekyll, you could count the number of SSGs on one hand. I didn’t even write it for GitHub, I wrote it to power my own blog and make sure I never lost my writing again. When we came up with the idea for GitHub Pages, I thought it would be super neat if you could just push a Jekyll repo to GitHub and have it run through Jekyll and published instantly, voila! All of it was a novelty. SSGs were toys. Push to publish was a neat trick.

During the same period, the idea of adding functionality to a rendered
web page by pulling in some 3rd party JavaScript and talking to that
external service via AJAX was pretty new. You could embed a comment
system with Disqus or embed Google Maps, but not much more. It didn’t
help that JavaScript wasn’t a very good language back then.

But the kernel of the JAMstack was there, it just needed time for the
JS packaging ecosystem to develop, for ES2015 to become a reality, and
for more 3rd party APIs to speak JSON. It also needed a name so people
could talk about it without having to define it every time. Before the
term AJAX was coined, all the technology existed to do AJAX, but it
was obscure and hard to talk about, because who wants to say
“XMLHttpRequest" all day? But once we had a proper word for it, we
could wrap our brains around the potential it offered and get busy
building stuff with it. I think the same is true for JAMstack. Now
that we have a word for what’s possible, it has expanded the ability
for people to think and reason about it, triggering an explosion of
interest and experimentation.

The future of JAMstack is bright, and we’ve only just begun to see
what’s possible. I’m pretty excited to see what’s in store another 10
years from now!

## On DX

**What does “Developer Experience” mean to you?**

**TPW**: The only thing that matters to me when it comes to developer
experience is this: can I turn what’s in my mind into finished product quickly and easily, or not? I learned to code because I wanted to build things; to create something from nothing and then share it with others to change their lives for the better. Right now, writing code is still the fastest way to build large-scale, high-impact products, and any tooling that helps me do that faster, simpler, and with tighter feedback loops is on the right track!

---

_Photo credit: [JD Lasica](https://www.flickr.com/photos/jdlasica/9734863860/)_
