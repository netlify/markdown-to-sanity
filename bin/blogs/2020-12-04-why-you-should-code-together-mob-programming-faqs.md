---
title: "Why you should code together: Mob Programming FAQs"
description: If you're interested in pair or mob programming with your team but
  you aren't sure if it's the right fit for you, here's a bunch of answers to
  common questions to help you make your decision.
authors:
  - Cassidy Williams
date: 2020-12-06
lastmod: 2020-12-04
topics:
  - insights
tags:
  - blogvent
  - Jamstack Explorers
  - teamwork
tweet: ""
format: blog
relatedposts:
  - Introducing Jamstack Explorers - Get started and learn with Netlify
  - Building a custom React media query hook for more responsive apps
seo:
  metadescription: If you're interested in pair or mob programming with your team
    but you aren't sure if it's the right fit for you, here's a bunch of answers
    to common questions to help you make your decision.
  metatitle: "Why you should code together: Mob Programming FAQs"
  ogimage: /img/blog/blogvent6.png
---
It's Blogvent, day 6!

Today I want to talk about a subject that's less technical, but important for technical teams to consider: group programming. This has many names, "pair programming," "group pairing," "mob programming," "collaborative coding," and really it all means the same thing: You work in a group on a particular feature, bug, problem, or idea.

On the Developer Experience team at Netlify, we love mob programming. While building [Jamstack Explorers](https://explorers.netlify.com/?utm_source=blog&utm_medium=explorers-cs&utm_campaign=devex), we mob programmed a grand majority of the features together! We try to have around one session a week where someone leads the meeting to teach the group how to do something, or to learn something from the group.

We get a lot of questions about mobbing. Here's some answers to common ones we've seen!

## Don't features take more time to build because there's more developers working on one thing at a time?
First of all, to solve a lot of problems, two (or 8) heads are better than one. If the current "driver" gets stuck on something, chances are someone in the group has the context to solve the problem, or we can "[rubber duck](https://en.wikipedia.org/wiki/Rubber_duck_debugging)" together and talk out the solution. This not only helps the driver solve that problem, but it gives more learning and context to everyone on the call.

When multiple people are working on a problem, there are fewer coding mistakes because there are others looking over your work. Plus, it keeps the current driver more focused than they might be if they were programming alone and had an interruption or two. Because of the quality assurance upfront, code reviews are faster because there's more context across the team, and fewer mistakes in general.

## How do you deal with egos and people taking over calls?
This is definitely something that you have to establish early with your team. Mob programming isn't about showing off how much you know to your team, but rather information-sharing. On our team at Netlify, we designate who will be the driver of the call, and what we'll be covering beforehand. By establishing those logistics early, it sets expectations for everyone.

Several of our calls for Jamstack Explorers (and outside of that project) involved disagreements on how something should be done, but because the team was on the call together, we talked out those decisions. It's important to make sure everyone has a voice (we purposely pause to ask for feedback from people who haven't spoken as much as others), and once a decision is made, we commit to it. Sometimes that involves some disagreement, but what matters is that the team decision is the final decision, not the loudest person in the room.

Mob programming is a great tool for developing a team's interpersonal skills. If there's someone on your team that has a tough ego to crack, this could be a solid way for you to work together and establish trust with your team.

## What if someone knows a lot more/less than everyone else?
What an AMAZING opportunity mob programming provides for both teaching and learning!

My favorite example of this was when we were first using [Sanity](https://www.sanity.io/) as our data layer in the Jamstack Explorers project. [Jason](https://twitter.com/jlengstorf) on our team was the only one who was really an "expert" on the subject, and so for our mobbing session where we were setting up schemas, he taught us all how schemas worked, he set one up on his own, and then we all had to make our own for a different part of the project. Once we each had finished, we all went through them together, fixed mistakes, and Jason was able to teach us the nuances of the software that we wouldn't have known without a deep-dive into the documentation. It was an amazing learning experience for us, and a really great teaching experience for Jason!

We've also had times on the team where someone is not sure how to implement something, and because of how we've established this "mobbing culture" on the team, folks will say, "can someone teach me how to make X work?" These calls are wonderful, because you can both be taught by multiple people how to do something (and how to do it properly, with less guesswork), and the team together can talk out how different solutions can come about for different problems.

## What tools do you use for mobbing?
A lot of times, we just use a good ol' video call and screen sharing. When we want to switch between drivers in a session, we often commit our work to a branch, and then the next driver pulls that branch and shares their screen.

There's also some other tools that are built for collaboration that have been awesome for us, including [VSCode Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare), and [CodePen Collab Mode](https://blog.codepen.io/documentation/collab-mode/)!

## How do I convince my team this is a good idea?
Our team first started dipping our toes into mobbing by just throwing up a video call and saying, "hey, anyone want to jump in and help me debug this?" here and there, until we established it as a pattern, and turned it into a scheduled occurrence. This was definitely a more "natural" approach that may or may not work for you and your team.

I'd recommend you start by booking a time on the calendar for folks to solve a ticket here and there, or to talk out how to use a certain feature of a framework you're using, or even just call it a "Lunch n Learn" first and add the participation later. There's so many ways to go about it that come down to establishing good communication, and fostering a culture of learning on your team. If you start there with your goals, there's nothing that can stop you!

## Soooo can I see this Jamstack Explorers website you keep talking about?
[Heck yeah](https://explorers.netlify.com/?utm_source=blog&utm_medium=explorers-cs&utm_campaign=devex). We've got a few free courses in there now and there's more to come.

This project was built with mob programming at its core, and we're so proud of what we accomplished together! I hope this has been helpful as you venture into the world of collaborative programming.

## Is there more?
Yes there's more! We recorded a [Remotely Interesting podcast episode](https://remotelyinteresting.transistor.fm/episodes/008-pandemic-pair-and-mob-programming) on this subject too, if you'd like to hear the rest of the team's perspective.

Til next time!
