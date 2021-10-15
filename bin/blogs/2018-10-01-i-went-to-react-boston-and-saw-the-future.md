---
title: I Went to React Boston and Saw the Future
description: Talking trends and trending talks at React Boston 2018
authors:
  - swyx
date: '2018-10-01'
topics:
  - insights
tweet: Talking trends and trending talks at React Boston 2018
format: blog
---
This was a big gamble.

I cleared my throat, checked my mic a couple times.

One last look around the room. Here goes.

I began my talk: **"It's so nice to be here at GraphQL Boston!"**

The audience obliged with a mix of laughter, groans, and probably a few people checked that they were in the right place.

It was a somewhat edgy joke, but there was a grain of truth: We did have a lot of GraphQL talks at React Boston.

Conferences are curious things, and React Boston was curiouser: dozens of [Wayfair Tech](https://tech.wayfair.com/) employees volunteering their weekend to put on an event for hundreds of React developers *paying* to fly into Boston to spend their weekend learning about React. 

And what a packed weekend it was: With 17 full talks and 8 lightning talks, it was chock full of technical deep dives and passionate exhortations. I'm supposed to write the weekend up here but if I did it any justice it would just be a transcript of every talk and every hallway conversation.

So I won't. Instead, I'll just focus on three themes for the future.

## GraphQL

![https://pbs.twimg.com/media/DoRGSCiX0AExHKD.jpg](https://pbs.twimg.com/media/DoRGSCiX0AExHKD.jpg)

[Chris Toomey](https://twitter.com/christoomey) of the wonderful [Thoughtbot](https://thoughtbot.com/) and [Bikeshed podcast](http://bikeshed.fm/) did one of the best React + GraphQL intros I have ever seen. First he made the philosophical link between how React rethinks how we separate concerns on the frontend, and how GraphQL adds a missing data layer at the component level. As a bonus, he also showed the impressive modern tooling integration between Typescript for React frontends and typed endpoints as a result of GraphQL schema backends, which everyone was buzzing about after.

[Hillary Bauer and Mark Faga](https://twitter.com/swyx/status/1046482557997584386) of ezCater (who also catered the incredible food at the conference) showed us how to mock and test Apollo GraphQL + React apps, and launched their toolkit, [Lunar](https://github.com/ezcater/lunar-core), for making the process a lot easier. From my hallway conversations it was clear that GraphQL was at the very top of everyone's "want to learn" list.

## Performance: Profiling and SSR Suspense

React has succeeded and survived in part by studiously doing one thing well and avoiding being a full framework — but because the set of concerns in making performant apps is far bigger than those directly addressed by React, there are a lot of gaps that developers often miss. React developers deal with this in two ways: community-maintained frameworks (like [Gatsby](https://www.netlify.com/blog/2018/09/24/netlify-dx-qa-gatsby-v2-with-jason-lengstorf/) and [React-Static](https://react-static.js.org/)) and libraries, and growing the responsibilities of React itself.

![https://pbs.twimg.com/media/DoWozv9U4AAOsu6.jpg](https://pbs.twimg.com/media/DoWozv9U4AAOsu6.jpg)

[Houssein Djirdeh](https://twitter.com/hdjirdeh) of Google taught us about the state-of-the-art set of easy wins to make React apps performant, from using the newest [React DevTools Profiler](https://www.netlify.com/blog/2018/08/29/using-the-react-devtools-profiler-to-diagnose-react-app-performance-issues/), to dynamic import and loading with Webpack and various React "Loadable" component libraries, to using [Service Workers](https://www.netlify.com/tags/service-workers/) and Google's [Workbox](https://developers.google.com/web/tools/workbox/) to make awesome progressive web apps.

He also touched on [React Suspense](https://medium.com/@baphemot/understanding-react-suspense-1c73b4b0b1e6), which is an upcoming API in React that many are excited about, not least of which the energetic [Tejas Kumar](https://twitter.com/TejasKumar_) of Contiamo. He showed off a [proof of concept Pokedex](https://suspense-pokedex.now.sh/) built with React Suspense, including a [version using streaming server side rendering](https://suspense-ssr-pokedex.now.sh/) — where the app looks good even without Javascript! It's not widely known, but [the original idea for Suspense came from wanting to do streaming server side rendering](https://twitter.com/acdlite/status/969368473443774464), which  dramatically brings forward the time to first paint and removes the need for hacky double-pass-rendering tricks common in SSR React apps today.

In lightning talks we also saw a courageous callout of Wayfair's Lighthouse scores from Fly.io's charismatic [Christina Keelan](https://twitter.com/swyx/status/1046103554065420288) as a case study of easy optimizations we can do to boost performance, which translate to real dollars especially for an ecommerce company. (You can also use a framework like Gatsby or React Static for performance gains out of the box!)

On the React third-party library front, there was also a very impressive and on-brand demo of Brian Vaughn's [react-window](https://github.com/bvaughn/react-window) by [Cole Turner](https://twitter.com/swyx/status/1046467995084689408) of Netflix — it turns out that the way to win Render Jeopardy is to **[Render Less Stuff™](https://render-less-2018.surge.sh/)**! (Seriously, check it out — [the slides](https://render-less-2018.surge.sh/) are beautiful and dynamically rendered based on your screen resolution. I did say it was on brand for Netflix....)

![https://pbs.twimg.com/media/DoXNFqQXUAUDn-b.jpg](https://pbs.twimg.com/media/DoXNFqQXUAUDn-b.jpg)

## React-DOM Alternatives

There are a few sayings about React that are mostly true while not being *entirely*, *universally* true:

- "React is just a library, not a framework."
- "React is just Javascript."
- "React-DOM is the best choice for web UIs, and React-Native is the best choice for cross-platform UIs."

As React enters its sixth year, it is clear that the idea of React is growing bigger than just its present day implementation, and all these assertions are being tested, and boundaries being pushed.

![https://pbs.twimg.com/media/DoRFE01U0AAnQNy.jpg](https://pbs.twimg.com/media/DoRFE01U0AAnQNy.jpg)

[Ken Wheeler](https://twitter.com/ken_wheeler), the [industry topic](https://twitter.com/swyx/status/1046452713368834048) and [unapologetic hydrophobe](https://twitter.com/ken_wheeler/status/1045719823337033728), showed us what the future of React could be with a live demo of ReasonML (which many on the original React team are now working on) and [ReasonReact](https://reasonml.github.io/reason-react/). While this is probably not new to most folks familiar with the existential zeitgeist of JavaScript (We're supposed to [always bet on JavaScript](https://twitter.com/alwaysbetonjs?lang=en) but better languages keep showing up!), what was new to me was the surprisingly wide support for ReasonML in the tooling ecosystem, including [Repl.it](https://repl.it/languages/reactre) and [Sketch.sh](https://t.co/LHr4NT2xZs).

![https://pbs.twimg.com/media/DoRTbsYXgAc6MH7.jpg](https://pbs.twimg.com/media/DoRTbsYXgAc6MH7.jpg)

We also got a spooky [early Halloween storytime session](https://react-boston-horror-stories.now.sh/) with the professorial [Vincent Reimer](https://twitter.com/vincentriemer) on the nasty, dirty, uncomfortably fascinating tricks he was forced to use in building the experimental [React Native DOM](https://github.com/vincentriemer/react-native-dom). My favorite was the tale of how he had to figure out how to capture the physical back button in Android and prevent the user from leaving the page, so he pushed two pages in history instead of one, borrowing a trick or three from the world of black hat JavaScript hackers that make pop-unders and other such stains on the Web.

[Florian Rival](https://twitter.com/Florianrival) from [GDevelop](https://twitter.com/Game_Develop) showed off the biggest production [React + Web Assembly app](https://slides.com/florianrival/beyond-web-apps) in existence today. (I think?) Both days were capped off with VR-related talks — from [Vladimir Novick](https://twitter.com/swyx/status/1046142817955975168) who showed us [_real_ React Portals](https://twitter.com/winkler1/status/1046380936814841857) and Matt Hamil with [a Frogger demo](https://docs.google.com/presentation/d/1Q9xbas0G2_6s5OT4uF0_ZshnAzg3Bza2E4G5xhi4FH8/edit?usp=sharing) showing off React-360. It is clear that alternative React stacks and renderers are an extremely fertile area of exploration right now.

## And One for the Present

![https://pbs.twimg.com/media/DoWgyYQXcAAJ7tn.jpg](https://pbs.twimg.com/media/DoWgyYQXcAAJ7tn.jpg)

As a naive technologist I admittedly often tune out during talks whichfocus more on the people behind the technologies we use. But of course, these are arguably the **most important** topics that guide our day-to-day experience and our careers. React Boston was also not lacking in this department, and for me the standout talk was Jen Luker's talk on imposter syndrome. 

As a career changer myself with no CS degree I have dwelled on this a lot, but Jen's format using the hit 1956 Sci-fi film [Forbidden Planet](https://en.wikipedia.org/wiki/Forbidden_Planet) was captivating and visually stunning, while also remaining eminently relatable. In particular, her [warning symptoms](https://twitter.com/swyx/status/1046424211886141441) for impostor syndrome/burnout resonated with many folks during my Twitter and hallway conversations. Relatedly, I also recommend the hilarious and wisdom-packed lightning talk from the not-junior-anymore [Erin Fox](https://twitter.com/swyx/status/1046098192369168384) on [Learning React Native as a Junior Engineer](https://www.youtube.com/watch?v=Wwr9tr16q6w), which touches on more recent experiences with the same realities.

There were also passionate, evocative calls to action for **more empathy in open source** from [Ankita Kulkarni](https://twitter.com/swyx/status/1046107700466208769) of Rangle.io and a **demand to be heard** by the illustrious [Samantha Bretous](https://twitter.com/swyx/status/1046069555964071943) of MailChimp. (Definitely check out her [gorgeously designed talk](https://docs.google.com/presentation/d/1f0qsztWZh71M6CL971YK6x4pIBj9vQQ-4uNuCWfdgWI/edit?usp=sharing), which was also about better designer-to-developer workflow — something very apt and which I strongly related to since I was that guy working with my designer through Zeplin and Storybook!)

## React is stronger than ever

Conferences are notorious for thought leading on the most "hipster" technologies, but at React Boston I met folks who were still working with everything from React 0.14 to interoperating Backbone.js and jQuery. I haven't even had space or time to process my favorite talk, Josh Comeau's [The Case for Whimsy](https://github.com/joshwcomeau/react-boston-2018). (If you think you saw it at React Europe, you haven't — watch this talk when it comes out on Youtube).

At its core, React Boston was where practitioners and tinkerers could meet to share their thoughts on what *is*, and dream about what *could be*. As a New Yorker I am also personally happy that there is such a great, now regular, React conference on the East Coast, which makes these occasions more accessible to more folks who do React for a living.

The talk videos will be up soon on Youtube, but for the participants who gathered in Boston this past weekend, these great talks are already forever etched in our minds.
