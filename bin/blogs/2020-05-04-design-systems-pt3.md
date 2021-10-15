---
title: >
  It Only Matters If We Use It — Let’s Learn Design Systems, Part 3
description: >
  Is your design system useful? Power up collaboration between designers & developers and drive adoption of design systems on your team.

authors:
  - Jason Lengstorf
date: 2020-05-13T03:00:00.000Z
lastmod: 2020-05-09T03:00:00.000Z
topics:
  - insights
tags:
  - design
  - teams
  - let’s learn design systems
tweet: ""
format: blog
relatedposts:
  - Intention vs. Drift — Let’s Learn Design Systems, Part 1
  - Treat It Like Trash — Let’s Learn Design Systems, Part 2
seo:
  metatitle: >
    It Only Matters If We Use It — Let’s Learn Design Systems, Part 3
  metadescription: >
    Is your design system useful? Power up collaboration between designers & developers and drive adoption of design systems on your team.
---

We know [what design systems are](/blog/2020/05/11/intention-vs.-drift-lets-learn-design-systems-part-1/?utm_source=blog&utm_medium=dspt1-jl&utm_campaign=devex) and [how to approach design processes](/blog/2020/05/12/treat-it-like-trash-lets-learn-design-systems-part-2/?utm_source=blog&utm_medium=dspt2-jl&utm_campaign=devex), but how do we actually work across disciplines and convince our teams to use the design system we build?

In this post, we’ll talk about cross-functional design work and driving adoption in an organization so you’ve got everything you need to roll out your design system!

> **Heads up!** This post is part three in a [three-part series](/tags/lets-learn-design-systems/) that expands on a conversation with [Dan Mall about design systems on _Learn With Jason_](https://www.learnwithjason.dev/let-s-learn-design-systems).

## Find a good rhythm for when to collaborate and when to work apart.

Should developers and designers always be working together? Not always!

There’s value in both working together and in working apart, and that value changes depending on which stage of the design process the team is currently in.

It can be extremely helpful to have what [Mina Markham](http://twitter.com/minamarkham) calls a “pixel engineering session” for a few hours to work something out, then split up and work individually to finish the work that was started in the session. **We should work together when we don’t know what to do, and we should work apart after we’ve got a plan and can work on our own to execute.**

Teams should aim for a good blend of working together and working apart. There’s no exact science for what the right amount of balance is — it’s safe to say it’ll most likely be different for every project.

### Don’t throw things over the wall.

A common source of frustration between design and development teams is that designs are “thrown over the wall”, leaving developers to implement a design they weren’t consulted on.

Similarly, design teams are often frustrated that developers don’t reach out when they have questions and instead improvise, often in ways that don’t align with the design system.

Both designers and developers should actively work to communicate throughout the design and development process. Collaborative sessions go a _long_ way in this situation — we’ve mentioned this over and over again — that’s because it’s so important that it bears repeating.

## How do you build cross-functional communication skills?

On teams where this kind of collaborative working isn’t common, one of the biggest challenges can be getting started. This is especially true if teams have had unsuccessful attempts to collaborate in the past, or if there’s any tension between design and development.

### Start by incentivizing the change.

If a team feels like nothing’s wrong, why should they change?

**The case for why changing the way teams work together needs to be clear, and tied to value not only for the company, but for the designers and developers individually.** What pain are they experiencing that will go away by switching to this system? What benefit does the change bring?

We need to do our best to empathize with everyone involved, and to make sure we clearly communicate how their lives will improve by adopting this change.

### Lower the risk to changing the working relationship.

**Large organizational changes are a huge source of stress for teams.** When a large change is announced, the first thoughts that might enter someone’s mind are, “If this doesn't go well, am I going to get fired? If it doesn't go well do I have to work over the weekend to fix it?”

When introducing a change like this, it can be helpful to [reframe the change to minimize its risk](https://lengstorf.com/draw-the-box-smaller/).

For example, rather than saying, “This is how we do things now,” propose a test: just do a 4-hour session. In many cases, people see how much they get done in 4 hours and are blown away — that makes it _so much easier_ to convince them to keep going.

Another option is to [run a pilot program](https://superfriendlydesign.systems/articles/design-systems-pilots-scorecards/) to prove out the benefits before fully committing to the change. Choose a small part of the product to try out the new design system with as a way to gauge its impact and effectiveness.

**A short test explicitly de-risks the change:** this is a test, and it’s just 4 hours. If it doesn’t work, no big deal! We’ll go back to what we’ve always done. And if it _does_ work, great! Life improves!

## Designers and developers should speak the same language.

In the previous part of this series, we talked a lot about how [the goal of design is to enable our teams to ship high quality software faster](/blog/2020/05/12/treat-it-like-trash-lets-learn-design-systems-part-2/).

To improve collaboration and make sure the team is communicating as effectively as possible, it’s important that everyone speaks the same language. The terminology used by designers to describe the design system should be the same as that used by developers.

> **Protip from Dan:** it’s often most effective to talk about the design system in the context of software, because at the end of the day, the design system is a form of documentation for building software. If your team uses React, talk about the design system’s elements in the context of React: use the shared language of “props” and “components” rather than trying to translate between “design” terms and “developer” terms.

## The hardest part of design systems is convincing people to use them.

A design system is only valuable if it gets used. Convincing everyone involved to change and adopt a new system is a big challenge. **Realistically, driving adoption the hardest part and the largest time investment when introducing a design system.**

### Invest in internal training, workshops, and communication.

Once a design system is built, invest in training the team on how to use it, creating internal advertising for it like posters, and creating high-quality documentation.

Raising awareness and providing training will make or break a design system. So many objectively correct software solutions fail because the value isn’t made obvious and people don’t end up using it.

### Create a breadcrumb trail of documentation.

Documentation is everything from code comments to design comps to full-blown websites, and it’s critical that these are not only accurate and maintained, but that they give the people reading them a thread to tug at for more information.

Documentation doesn’t need to be fancy, though. It can be a well-written README and well-placed code-comments to start, with links between them to provide additional context. Maybe the comments follow the [KSS spec](https://github.com/kneath/kss/blob/master/SPEC.md) to describe how components work. As the design system matures, it may be worth adopting something more formal, like [Storybook](https://storybook.js.org/). **The specifics don’t really matter as long as the documentation is helpful and clear.**

Think of documentation like a breadcrumb trail: it should be possible to drop in anywhere and follow the trail to other relevant parts of the design system.

## How do your teams work together?

How do designers and developers collaborate on your teams? What strategies do you use that boost collaboration? How have you driven adoption of new tools internally?

We’d love to discuss it with you [on Twitter](https://twitter.com/compose/tweet?text=%E2%80%9CThe%20hardest%20part%20of%20design%20systems%20is%20convincing%20people%20to%20use%20them.%E2%80%9D%0D%0A%0D%0A@jlengstorf%20talked%20about%20design%20systems%20with%20@danmall%20and%20wrote%20a%20series%20with%20what%20he%20learned&url=https://www.netlify.com/blog/2020/05/13/it-only-matters-if-we-use-it-lets-learn-design-systems-part-3/%3Futm_source%3Dtwitter%26utm_medium%3Ddspt3-jl%26utm_campaign%3Ddevex)!

For more on design systems, check out the [resources on SuperFriendly’s site](https://superfriendlydesign.systems/), and make sure to check out the other posts in this [series](/tags/lets-learn-design-systems/)!
