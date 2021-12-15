---
title: What is decoupling, actually?
description: Decoupling is a term in the Jamstack you might hear often, but what does it actually mean?
authors:
  - Cassidy Williams
  - Natalie Davis
  - Phil Hawksworth
  - Ekene Eze
date: 2021-11-03
lastmod: 2021-11-03
topics:
  - insights
tags:
  - Jamstack
  - Terminology
tweet: ""
format: blog
relatedposts:
  - "Terminology explained: Atomic and immutable deploys"
seo:
  metatitle: What is decoupling, actually?
  metadescription: Decoupling is a term in the Jamstack you might hear often, but what does it actually mean?
  ogimage: /v3/img/blog/decouplingactually.png 
---

In the Jamstack world the word "decoupling" is thrown around a lot, and it can be intimidating to not actually understand that as a concept when it seems so prevalent.

We had a conversation about that in our company Slack this week, and I thought it'd be worth sharing the awesome insights and perspectives!

## It all starts with a question

**Natalie:**
 Silly question time! I keep hearing the Jamstack described as "decoupling" the UI from the backend. I'm not sure I understand this well. I'm starting to think that might be because every thing I've ever worked on had this decoupled approach, can someone describe to me what the inverse looks like? What would a "coupled" architecture look like?
 
 **Phil:**
 An example of a "coupled" architecture (although we'd never really hear that term) would be one where a web server is responsible for generating the view that gets sent to the browser.

Like a site built with PHP, where there is a web server running always. A request for a page comes in, and some PHP chugs away on the server, perhaps gets some data from a database, and then builds the HTML and returns it.

"Decoupling" is about putting distance between asking for a view, and the work that has to happen to generate that view.

In our happily decoupled world, the work of generating all those possible views happens at build time on some build server (like in a Netlify deploy or on your local machine) and not as a response to each request made by browser.

**Natalie:**
Ok, so if my site is set up in a way where some user action triggers a request to the server, and then my UI changes based on that server response, that's totally made up word "coupled"?

**Phil:**
You might still update UI in the browser based on the data that comes back from a request... but the decoupling is about making sure that the server response isn't driven by some "active" code being run.

Your UI might make requests to various APIs or JSON files which could influence what happens in the browser, but the server isn't responsible for figuring out what data to return AND formatting that into an HTML view.

**Natalie:**
Okay, I think I'm getting there now. So suppose I've got an ecomm site. A user logs in (server request) and once they're authenticated the nav bar changes, but the server doesn't send me the the HTML, I've got a component on standby waiting to be rendered the moment an authenticated user comes back. That's decoupled?

**Kenny:**
What helped me is think of a coupled architecture as a Node app with an EJS template. Where literally every view you see in the browser is processed by the Node server when a request comes in and then rendered to the user with the EJS template.

In this kind of setting, you CANNOT separate the server from the template, they’d both be useless without the other, hence why they are “coupled.”

**Natalie:**
Ok, I think I'm getting it and I'm pretty sure my confusion was stemming from the fact that I've never built anything where the server is determining my HTML.

**Phil:**
Yeah, that is still a very dominant pattern.

Wordpress is a great example of a monolithic architecture. It is one application which has the DB, the templates, the content, the code, and it does all the work of combining those things for each request.

Does that help?

**Natalie:**
It does, but I think what I'm still getting tripped up on, is how user interaction comes into play. Does this mean that at build time, all possible views are generated and then just kinda hanging out until or if they're needed?

**Phil:**
A term that might help as a comparison might be "Monolith" .

In a monolithic application, a server is responsible for processing the request, applying logic to determine data should be applied to what template, combining those things and returning the result.

So the effort of generating the response is coupled to each response.

When we decouple, we break apart that monolith, generating the responses ahead of time, and only serving up what we prepared earlier when the request comes in.

**Natalie:**
Yep, that makes sense! Why would anyone build any other way??

(I know things were rough in the old days and you all did what you had to, very glad to be new school)

Knowing that a good chunk of Jamstack users started learning to code after I did, I think it would be really good when addressing folks new to the Jamstack in content to keep in mind that a lot of us have never considered a monolithic approach to building a project.
I'm not sure how that gets balanced against not boring folks who have used that pattern in the past or at least think of it alongside of a decoupled approach, but it's something to think about. (because us newer folks will over-complicate everything and assume we don't understand, even when we do)

**Phil:**
Please never stop asking questions!

**Cassidy:**
Can I just screenshot this conversation and put it in a blog post?

## And that, reader, she did

These sorts of concepts can be confusing, and asking questions is the best way to get the best answers! I hope this conversation was helpful for anyone out there who are struggling with some of the concepts in the Jamstack, and the rationality behind them.

If you'd like to read more, check out the [Jamstack Glossary](https://jamstack.org/glossary/decoupling/), and feel free to ask more questions in the [Jamstack Community](https://jamstack.org/community/)!
