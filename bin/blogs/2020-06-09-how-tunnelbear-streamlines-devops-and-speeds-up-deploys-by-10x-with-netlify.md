---
title: How TunnelBear Streamlines DevOps and Speeds up Deploys by 10x with Netlify
description: Using Netlify, TunnelBear regained control over their process and
  site architecture while letting go of the processes that taxed developer
  productivity.
authors:
  - Netlify
date: 2020-06-11T00:00:00.000Z
lastmod: 2020-07-09
topics:
  - case-studies
tweet: ""
format: blog
relatedposts:
  - How CNCF enables community-sourced ecosystem map with Netlify deploy previews
  - "Improving and Extending the Voter Experience: Democracy Works deploys with Netlify"
seo:
  metatitle: How TunnelBear Streamlines DevOps & 10x Deploy Speed with Netlify
  metadescription: See how TunnelBear's use of Netlify empowered them to be able to regain control over their process and site architecture while letting go of the processes that taxed developer productivity. 
  ogimage: /img/blog/blogpost-4.png
---
In the middle of a deploy, developers are focused on the task at hand. They don’t quite have the luxury of taking a thousand-foot view of their work and asking “What are we best at and what should we really be focusing on?” 

But, in the precious moments between deploying sites and maintaining site infrastructure, Justin Watts asked fellow TunnelBear engineer, Jared Krause, that exact question. Netlify helped them find the answer. 

Using Netlify, TunnelBear’s team of engineers were able to regain control over their process and site architecture while letting go of the processes that taxed developer productivity. 

TunnelBear’s road to streamlined deploys, faster sites, and better developer experience all started with that one question. Taking the time to answer it has paid dividends for TunnelBear, its developers, and its customers. 

![TunnelBear DevOps logo](/img/blog/tunnelbear.jpg "TunnelBear")

## Background

Millions of users rely on two friendly bears: [TunnelBear](https://www.tunnelbear.com/) and [RememBear](https://www.remembear.com/). The TunnelBear VPN protects users’ internet connections, while RememBear’s password manager remembers and safeguards their passwords. Everyday, the two bears play a critical role in their users’ online lives, guarding users’ privacy and securing their sensitive information.  

[Jared Krause](https://twitter.com/kravse) is Tech Lead for the web development team at TunnelBear, focused on maintaining a high quality user experience and ensuring his team of developers can work as efficiently as possible. For Krause, efficiency is inextricably linked to scalability and speed. 

Jared uses modular, component-based, reusable code to craft responsive websites that aren't just beautiful, but highly performant as well. If there’s an engineering edge TunnelBear can use to level up their user experience, it’s Krause’s job to find it and master it. 

“It’s a mix between supporting our environment as a whole, our development process, and coding itself,” says Krause. “We’re working on making the whole process smoother, and focusing on what we’re actually providing to clients through the website. We’re thinking about how we can isolate the things we really do, and abstract away the things we don’t need to be doing.” 

## Challenges

Late last year, Justin Watts, head of engineering at TunnelBear, brought up the prospect of using Netlify to get around some of the hurdles Jared’s team was dealing with when shipping new sites. 

TunnelBear and RememBear’s deploy processes relied on a third-party company to spin up Node servers and write arduous NGINX rules that were difficult for TunnelBear’s team to understand or take control of. When the team needed to ship a new site, Jared would have to ping DevOps or file a ticket with the third-party company. 

“A lot of the previous process got necessarily slower because it involved three teams or more,” says Jared. 

Justin Watts’ idea to experiment with Netlify proved to be the window Jared needed to transform TunnelBear’s developer workflow and site architecture using [Netlify’s High Performance Builds and High Performance Edge](https://www.netlify.com/enterprise/#explore-netlify-offerings).  

### Finding Netlify at Nordic.js

Justin wasn’t the first person to tell Jared about Netlify. At Nordic.js, Krause attended a Netlify talk and tested it out for himself, working on a personal project shortly after the talk wrapped up. 

“I was so blown away by how few steps it took. The whole process of deploying a site is intimidating, even to a professional web developer. I can go and deploy a site, rent a server, figure out how to configure Node, and serve something from Express. But — I don’t do that everyday. Working with Netlify, I found that the process is really quick.” 

### Streamlining site deploys for TunnelBear

Months later, Jared had the opportunity to use Netlify again. This time at work. Jared’s first test with Netlify was designing a new system to reduce the cost of TunnelBear’s server spend and, most importantly, streamline website deploys. 

Jared thought that untangling TunnelBear’s web of third-party dependencies and NGINX rules would be an uphill battle. He was pleasantly surprised. 

“The moment of realization came really quick. I started and then realized this was going to be a lot easier than I thought,” says Jared. 

Netlify gave Jared’s team the flexibility and agency to deploy sites themselves, without asking anyone else, or waiting on someone to reply to a ticket. Netlify’s platform came complete with the elastic scale to support TunnelBear’s millions of users, and developer-friendly workflows that saved Jared’s team a tremendous amount of time. 

**“It used to take us ten minutes to build and deploy. Now with Netlify, it takes us one minute,”** says Jared. 

Netlify helped Jared’s team increase TunnelBear’s build and deploy speed by 10x. This made it much easier to gain confidence with stakeholders on moving more of TunnelBear’s sites over to Netlify, including RememBear. Still, in Jared’s words, “everyone was hoping this would work” and it did. 

## Solution

### Migrating to Netlify

When migrating the company’s flagship site, TunnelBear.com, as well as RememBear.com, over to Netlify, Jared felt good about how Netlify would impact his developers’ workflow. But, he was more excited to regain full control over the environment he’s responsible for, and the user experience he helps maintain. 

“Owning what you’re building is key,” says Jared. 

### Solving for Cross Domain Requests

TunnelBear owns and maintains their API. Previously, they had to rely on a third-party to write custom NGINX rules to prevent cross domain requests while serving HTTP requests from their API. This wasn’t ideal for Jared. 

“I wanted to not have to work through another service where I had to talk to support and ask them to change the set up of our servers. I wanted to be able to make choices and control it myself.” 

Netlify’s branched deploys helped TunnelBear control discrete elements of their site architecture to prevent problems like cross domain requests. TunnelBear uses Netlify [rewrites and proxies](https://docs.netlify.com/routing/redirects/rewrites-proxies/) to serve API endpoints through the TunnelBear domain. When a user hits TunnelBear’s API, Netlify requests the API domain on TunnelBear’s behalf, serves the page, and appends the path. 

### The Fewer Stages the Better

The impact of Netlify expands beyond TunnelBear’s API. Now, when TunnelBear’s team of developers test new sites in staging, it takes a matter of hours, not months. That’s a welcome change for Jared’s team. 

“I update our dev environment with a couple of lines, I make a new subdomain, and I hook it up to a new project in Netlify and we have it in an afternoon instead of a month. So, a lot of this is scaled down because we don’t have to prepare for emergencies. In emergencies, I can scale up really quickly,” says Jared. 

Along with speed, Netlify’s High Performance Build infrastructure and multi-cloud edge network give TunnelBear the confidence to build for the company’s future as opposed to wrestling with NGINX rules when they need to scale on a dime. Even more, with high performance builds enabled, their sites build faster, and developers can get to their next task much faster.

“In the past, had we wanted to scale, we would have had an instant increase in cost. We’re more flexible now,” says Jared. “We could build a new product website and it would be no problem. So that’s where I think a lot of the cost savings are going to come as we grow as a company.” 

## Results

Adopting Netlify didn’t just give TunnelBear’s team of developers more confidence, it changed the way they think about their work. A major part of Jared’s job exists outside of the lines of code he writes. Jared mentors the junior developers on TunnelBear’s engineering team. Using the right set of tools has helped those developers hone their craft independently. 

“I think Netlify is making us better at managing our code. Because master is now no longer just in theory paired with production. It is actually paired with production,” says Jared. “What is in master is production. Thinking about it like that before was a matter of principle not practice. I would say now it’s practice. It’s allowing us to naturally fall into better patterns where before it took a little more work.” 

In just a few months, Jared helped reinvent the way TunnelBear’s engineering team works, and the way both TunnelBear and RememBear work for their users. With more control over their domain, and more time to perfect their craft, Jared is excited for the future with Netlify. 

“It’s opening time and space for us to push our frontend forward and explore what we can do in this space, rather than doing what has been done before.”

---

Have a project in mind? One of our experts would love [to talk with you](https://www.netlify.com/enterprise/contact/) about the use-case and requirements.