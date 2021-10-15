---
title: >
  Intention vs. Drift — Let’s Learn Design Systems, Part 1
description: >
  If you write software, you’ve already built a design system. How can you make sure it’s making you more efficient and not wasting your time?

authors:
  - Jason Lengstorf
date: 2020-05-11T01:00:00.000Z
lastmod: 2020-05-09T01:00:00.000Z
topics:
  - insights
tags:
  - design
  - teams
  - let’s learn design systems
tweet: ""
format: blog
relatedposts:
  - The Rise of Design Systems
  - Migrate Your WordPress Site to the Jamstack
seo:
  metatitle: >
    Intention vs. Drift — Let’s Learn Design Systems, Part 1
  metadescription: >
    If you write software, you’ve already built a design system. But how can you make sure it’s making you more efficient and not wasting your time? Check this post out to learn how!
  ogimage: /img/blog/intention-vs-drift.jpg
---

**Every time you create software, you’re creating and using a design system.** So the question isn’t “should we create a design system”, but rather, “should we be _intentional_ about the design system we’re creating?” You can create a bunch of code that’s really complicated and terrible to use, and _that’s still a design system_ — it’s just not a very good one!

Since design systems happen whether we want them to or not, our task is not to decide whether or not we need one. **We need to decide if we’re better served by being intentional about our design system decisions or letting the design system drift to see what emerges from real-world use.**

In this post, we’ll dive into what that means, what design systems actually are, and how we can create effective design systems for ourselves without spending too much time or creating too much internal process.

> **Heads up!** This post is part one in a [three-part series](/tags/lets-learn-design-systems/) that expands on a conversation with [Dan Mall about design systems on _Learn With Jason_](https://www.learnwithjason.dev/let-s-learn-design-systems).

## Before we start: what is a design system?

In general, it’s useful to have a more general, inclusive definition of what design systems are:

> **A design system is the smallest set of components and guidelines that an organization needs to make digital products better.**

This definition leaves a lot of room for interpretation — and that’s very much by design.

### Don’t put design systems in a box.

Avoiding specifics isn’t an attempt to evade the question; it’s an acknowledgment that **each design system is a unique product of its environment.**

Any attempt to create a rigid definition of design systems inevitably requires exceptions and caveats that add complexity and, ultimately, don’t actually matter. What _matters_ is that the design system is [improving the baseline](https://lengstorf.com/baseline/) of the organization’s effectiveness.

### An effective design system is distinct and purpose-built.

If we take into account a company’s specific needs and purpose, we end up creating a [distinct design system](https://superfriendlydesign.systems/articles/distinct-design-systems/). Every company will have different priorities and different needs, and its design system should reflect that.

**We shouldn’t create a design system because we’ve been told we need a design system. Instead, we should look for specific components or contexts that affect our product and design those solutions.** Remember: a design system is a means to an end, not an end in itself.

### Design systems need to be adaptable to the organization they’re supporting.

Every organization has its own unique blend of people, goals, history, and existing work. **There’s no Objectively True definition of a design system; what a design system looks like in a given company necessarily needs to reflect that company’s unique situation.**

> **Anything that helps you make more consistent, higher quality products in less time qualifies as part of a design system.**

Can Photoshop be the home of a design system? A shared component library package? Sure! The medium doesn’t matter. What matters is that it empowers your team to do better work.

![Intention vs. Drift](/img/blog/intention-vs-drift.jpg)

## What is the difference between emergent and deliberate design systems?

A design system can be _deliberate_, where decisions are intentional and driven by research.

A design system can also be _emergent_, meaning it drifts into existence as teams develop for the product.

What’s the difference? And is one better than the other?

**Most design systems fall somewhere in between intentional and emergent.** The sweet spot for creating a design system isn’t to choose one approach or the other, but rather to develop the ability to blend the two approaches effectively.

### Many of the most popular design systems are deliberate.

A design system that is _deliberate_ comes into being through research, discussion, testing, and iteration. It’s much slower to get started, but can lead to incredible consistency across huge teams — or even across companies!

Have you ever looked at a site and immediately recognized that it’s using [Bootstrap](https://getbootstrap.com/) or [Material](https://material.io/)? A strong, deliberate design system makes it possible for developers who have no connection to the design system’s maintainers to quickly build consistent, quality interfaces.

These design systems are impressive, and while we may aspire to create a design system like this one day, it’s also important to recognize the incredible amount of effort and time required, both up front and in maintenance, to create something like Material design.

**For many companies, being intentional about everything just isn’t feasible.** In addition to the high upfront cost and maintenance overhead, being 100% intentional can make a design system inflexible and slow to adapt.

### Many design systems tend to be emergent.

In many companies, design systems are _emergent_, meaning they’re a byproduct of other decisions and are never directly considered (or really even thought about). This isn’t necessarily a bad thing, but it _can_ lead to pain as teams grow.

If you’ve ever worked on a team where design decisions were all made on the fly, often with a “gut feeling” guiding the choices, you’ve worked on an emergent design system. This can sometimes be a great way to keep things moving quickly, but it can also create bottlenecks and tension.

**The benefit of an emergent design system is that it avoids premature optimization.** Rather than trying to predict every way the company will use its design system, the needs of the product lead design decisions, and the design system itself drifts into existence over time.

### Find the right balance of drift and intention.

**In practice, most design systems will be a blend of deliberate and emergent design.** The challenge is learning how to identify an emergent pattern and deliberately refine it at the right time.

Done well, watching the drift of a system and intentionally designing the important patterns creates enormous value while avoiding unnecessary cost, time, and formality. **If we pay attention the the software we’re building, we can see what gets used the most and what would benefit from additional guidance. We can then apply deliberate design to those pieces, informed by real-world use and experience, to transform an emergent pattern into one that’s intentionally designed.**

A tangible example of this is the design of the Oval at Ohio State University, where the [walkways were paved _after_ students wore paths in the grass](https://www.reddit.com/r/DesirePath/comments/8nihbj/the_oval_walkways_at_ohio_state_university_were/). Rather than spend a bunch of time, money, and effort guessing where people would walk, the university noticed the pathways that were naturally emerging, then spent the time and money to improve them. This strategy of allowing drift before intentionally designing a permanent solution helped the university ensure that the walkways were actually what people wanted and would use — a win for everyone!

## How do you know when to switch from emergent to deliberate design systems?

Choosing when to be intentional and when to let things drift depends on whether you’re trying to learn or whether you’re trying to implement a known solution.

The subtext of the question is, “How can I make sure I get this right?” In order to get something right, however, we need to know what “right” actually means.

### Do you know what “right” is for your design system?

In the most reductive sense, if you know exactly what you’re trying to accomplish with a component in the context of your product, it’s worth at least having a discussion about being intentional in its design. When you have that clarity, you can be reasonably sure that you know what “right” is for your product in the context of this decision.

If you’re still feeling out how a component will be used, it’s probably wise to let it drift for a while and see how teams actually use it.

### Usually, we learn what “right” is by drifting.

We need to give ourselves permission to _not_ get things right. If we’re building something for the first time, we have no way of knowing what the right thing is. Before we can be intentional, we need to try things out, learn, get it wrong, and adjust as we go.

If we give ourselves the space to build an MVP instead of the “right” thing, we can iterate quickly. Maybe we spend four hours on a card component — instead of four weeks! — and shop it around to try it out and get feedback. This means we’re able to get a ton of information about what “right” means in a short period of time.

The alternative is to spend a long time trying to design for hypothetical use cases before releasing anything in hopes of “getting it right” on the first try. Ironically, this approach is both more expensive _and_ more likely to result in getting it wrong.

**In order to figure out how we can design our products well — how we can “get it right” — we need to try things quickly, borrow ideas from other sources, and learn from our progress to adapt our approach.**

## What kind of design system are you building?

Whether or not you realized it, you’ve been creating a design system for everything you build.

Now that you know that, how do you plan to shape your design system going forward? Let’s continue this [discussion on Twitter](http://twitter.com/compose/tweet?text=Intention%20vs.%20Drift%20%E2%80%94%C2%A0@jlengstorf%20wrote%20up%20reflections%20on%20design%20systems%20after%20a%20great%20conversation%20with%20@danmall&url=https://www.netlify.com/blog/2020/05/11/intention-vs.-drift-lets-learn-design-systems-part-1/%3Futm_source%3Dtwitter%26utm_medium%3Ddspt1-jl%26utm_campaign%3Ddevex)!

For more on design systems, check out the [resources on SuperFriendly’s site](https://superfriendlydesign.systems/), and make sure to watch out for the next post in this [series](/tags/lets-learn-design-systems/)!
