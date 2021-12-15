---
title: What it’s like to be a backend engineer at Netlify
description: To showcase and demystify this part of our engineering team, we interviewed several of Netlify's backend engineers so you can hear their experiences in their own words.
authors:
  - Chuck Groom
date: 2021-10-01
lastmod: 2021-09-30
topics:
  - insights
tags:
  - culture
  - Engineering
tweet: ""
format: blog
seo:
  metadescription: What it’s like to be a backend engineer at Netlify
  metatitle: To showcase and demystify this part of our engineering team, we interviewed several of Netlify's backend engineers so you can hear their experiences in their own words.
---

Netlify gets a lot of awareness from its active (and much beloved!) user community who sees all the great work we do promoting the Jamstack and developer tooling. When we talk with engineering candidates, it’s pretty easy to explain what our front-end and Node.js developers do, because it’s the things you interact with every day.

But did you know that a big chunk of Netlify’s engineering team is in the backend? These fine folks architect the scalable build system workflows, edge routing, telemetry, metrics, account management, lambda functions, and so much more that everything depends on. We wanted to showcase and demystify this part of our engineering team by interviewing several of our engineers to share their experiences in their own words. We are globally distributed, and these voices represent people spanning from the US West Coast to Africa and Europe.

## Meet some of our backend engineers...

<div class="people">
  <div class="avatar">
    <img src="/v3/img/blog/netlify-be-bryan.jpg" alt="Bryan Mikaelian" width="40" height="40" style>
  </div>
  <div class="name">Bryan Mikaelian</div>
  <ul>
    <li>Team: Growth</li>
    <li>Pronouns: He/him</li>
    <li>Favorite Slack Emoji: <code>:salute-cat:</code><img src="/v3/img/blog/netlify-be-salute-cat.png" alt=":salute-cat:" class="slack-emoji" style></li>
  </ul>
  <hr>
</div>
<div class="people">
  <div class="avatar">
    <img src="/v3/img/blog/netlify-be-moritz.jpg" alt="Moritz Gunz" width="40" height="40" style>
  </div>
  <div class="name">Moritz Gunz</div>
  <ul>
    <li>Team: Runtime</li>
    <li>Pronouns: He/him</li>
    <li>Favorite Slack Emoji: <code>:netlirocket:</code><img src="/v3/img/blog/netlify-be-netlirocket.png" alt=":netlirocket:" class="slack-emoji" style></li>
  </ul>
  <hr>
</div>
<div class="people">
  <div class="avatar">
    <img src="/v3/img/blog/netlify-be-kelsey.jpg" alt="Kelsey Schlarman" width="40" height="40" style>
  </div>
  <div class="name">Kelsey Schlarman</div>
  <ul>
    <li>Team: Observability</li>
    <li>Pronouns: She/her</li>
    <li>Favorite Slack Emoji: <code>:boppinpug:</code><img src="/v3/img/blog/netlify-be-boppinpug.gif" alt=":boppinpug:" class="slack-emoji" style></li>
  </ul>
  <hr>
</div>
<div class="people">
  <div class="avatar">
    <img src="/v3/img/blog/netlify-be-eric.jpg" alt="Eric Betts" width="40" height="40" style>
  </div>
  <div class="name">Eric Betts</div>
  <ul>
    <li>Team: Account Management</li>
    <li>Pronouns: He/him</li>
    <li>Favorite Slack Emoji: <code>:lurk:</code><img src="/v3/img/blog/netlify-be-lurk.gif" alt=":lurk:" class="slack-emoji" style></li>
  </ul>
  <hr>
</div>
<div class="people">
  <div class="avatar">
    <img src="/v3/img/blog/netlify-be-fawaz.jpg" alt="Fawaz Farid" width="40" height="40" style>
  </div>
  <div class="name">Fawaz Farid</div>
  <ul>
    <li>Team: Observability</li>
    <li>Pronouns: He/him</li>
    <li>Favorite Slack Emoji: <code>:batman-approves:</code><img src="/v3/img/blog/netlify-be-batman-approves.png" alt=":batman-approves:" class="slack-emoji" style></li>
  </ul>
  <hr>
</div>
<div class="people">
  <div class="avatar">
    <img src="/v3/img/blog/netlify-be-vivian.jpg" alt="Vivian Brown" width="40" height="40" style>
  </div>
  <div class="name">Vivian Brown</div>
  <ul>
    <li>Team: Serverless Apps</li>
    <li>Pronouns: She/her</li>
    <li>Favorite Slack Emoji: <code>:thumbsupparrot:</code><img src="/v3/img/blog/netlify-be-thumbsupparrot.gif" alt=":thumbsupparrot:" class="slack-emoji" style></li>
  </ul>
  <hr>
</div>
<div class="people">
  <div class="avatar">
    <img src="/v3/img/blog/netlify-be-ingrid.jpg" alt="Ingrid Epure" width="40" height="40" style>
  </div>
  <div class="name">Ingrid Epure</div>
  <ul>
    <li>Team: Workflow</li>
    <li>Pronouns: She/her</li>
    <li>Favorite Slack Emoji: <code>:llama-excited:</code><img src="/v3/img/blog/netlify-be-llama-excited.gif" alt=":llama-excited:" class="slack-emoji" style></li>
  </ul>
</div>

## What’s an interesting problem you’ve been working on lately?

I just recently shipped a feature that splits function logs for server-less functions into individual log lines for our [Log Drains](https://docs.netlify.com/monitor-sites/log-drains/) service. This made it easier for customers to create more accurate dashboards and alerts to monitor their services.

----

Running untrusted code in-process and ensuring it doesn’t spend too long executing and doesn’t block the whole process.

----

Improving our data pipeline. The Growth team is trying to make our experience with Segment better and empower other teams to do the same.

----

Automating our enterprise billing: we need it to be manageable while providing us a lot of different ways to sell at the enterprise level.

----

I’m working on extending our serverless functions to be much more expressive and to allow developers to tackle more use cases. I can’t share too much yet, but there are some really interesting problems as we expand what these can do — stay tuned!

----

How to provide data retention for the busiest collections on our build platform. The deploy volumes (200k a day), over a large amount of time, and in the same datastore, makes this a challenge to scale. Product and I are looking into ways of addressing those risks and keeping costs under control, while **maintaining a great customer experience**.

## Netlify is a globally distributed team. Describe how you do work and collaborate together on a typical day.

As an engineer based in the EMEA (Europe, Middle East, Africa), I usually start my work day earlier than folks in the Pacific time zone. So I tend to get as much work done as possible and also review PRs in the afternoons and then reserve the evenings for meetings/syncs with my colleagues. We’ve cut down the number of meetings we have weekly by improving our async communication. Most conversations happen on Slack (less emails, Yeey!) but we also use GitHub issues, pull requests, and Notion docs to track conversations, goals and milestones for our projects.

----

For me, mornings and early afternoons are usually focus time or pairing time with other Europeans, while the evenings are for meetings. This generally translates to relaxed mornings, and going a bit later into the evenings, which is perfect for me since I’m not a morning person. People often end up pairing when there’s a need, or a desire for social contact, and **sometimes these turn into huge group sessions that last for hours when nobody watches time**, with everybody doing their thing and working almost as if we were sitting right next to each other.

----

A few times a week, our team will get together during our overlapping work hours. It is helpful to have a bit of social time, discuss the most important topics for the week, and conduct retrospectives. But for everything else, async methods of communication are key! GitHub issues, Notion, and Slack are how we discuss problems, ideate on solutions, and give status updates. I love communicating asynchronously through writing. I get to take a bit more time to think through what I need to say, as well as give any feedback careful consideration.

----

My typical day would be a mix of some meetings, interacting with Slacks, reading/commenting on GitHub issues, and heads-down time. We use Slack to coordinate what to work on, but it’s also for some fun chats. There is plenty of time 1:1 with other engineers to pair on projects, or just to get to know each other.

----

I’m on the US West Coast, so most of my coworkers are working earlier. That means my mornings tend to have lots of synchronous activities like pairings or meetings. Afternoons are my heads-down/focus time. It’s challenging when there are questions or some brainstorm is needed, since coworkers are already signed off.

----

We have dedicated Slack channels for each team, and notification channels for PRs and issues. Something I love is that when a PR is opened, the entire team is notified so anyone can jump onboard to comment and review.

## What’s your favorite part about the engineering culture (or company culture) at Netlify?

**People are super friendly** and happy to jump into spontaneous pairings and 1:1s, even if just for getting to know each other.

----

Being able to have **honest 1:1s** with my manager and seeing results come from it.

----

I love all of our social Slack rooms. People post photos from their weekend, the amazing dish that they cooked, the crazy thing their dog just did, or even that they are going through a rough time. It’s great to see colleagues sharing and supporting one another across time zones and oceans, even though many of us have yet to meet in person.

I also greatly value that **our team is willing to try new things and change**. When on-call was feeling a little rough, we got together to make some key changes to improve the process and reduce the pain.

----

The company truly cares about its employees, and there is an **emphasis on personal health**.

----

There are lots of experienced engineers to learn from. I really like the interactions I have with my teammates! People are thoughtful, and solving problems is always a collaborative process!

----

Ownership and trust are some of the best features of our culture for me. I love that you are trusted to own a problem space from the get-go, and the team is there to support, listen and champion. **We believe strongly that good ideas can come from anywhere** and we listen to each other’s ideas and approach everything with curiosity.

## What’s up with the animal pictures in pull requests?

> At Netlify, we have a pull request template with the section with "Relevant links (GH issues, bugsnag, etc.) or a picture of cute animal" or "A picture of a cute animal (not mandatory but encouraged)" (you can check it out in our [open source repo](https://github.com/netlify/cli/blob/main/.github/PULL_REQUEST_TEMPLATE.md) too!). This was introduced by our former CTO David Calavera and it turned into one of our Netlify culture of the PRs (you can read more in the blog post: [Splashed Pull Requests](https://medium.com/@calavera/splashed-pull-requests-5e6adea1d12a)).

Throwing a random animal picture into a PR keeps it from being too serious, and **brings some fun**!

----

They’re like **a daily dose of cuteness** and I think it sets the friendly, collaborative tone for our PRs.

----

Everyone I know at Netlify is an animal lover, we actually have a Slack channel to post cute animal pics and someone came up with an idea to post animals in PRs (not a requirement). My favorite so far was one of a baby goat wearing a shower cap in a bathtub with a rubber duck next to it.
![Goat wearing a shower cap](/v3/img/blog/netlify-be-goat-with-shower-cap.jpg)

----

David occasionally posted shots of his doggo, I think that dog is a pretty derpy dog.
![David's derpy dog (Macchiato)](/v3/img/blog/netlify-be-david-derpy-dog.jpg)

## What kind of opportunities have you found at Netlify for personal growth, education, and professional development?

I haven’t even clocked a year at this company yet the amount of stuff I’ve learned in that short period surprises me. There’s a ton of new technologies to get acquainted with and interesting projects to work on. I get to work with really smart people who push me to grow. Pairing sessions also help a lot too. On top of that, every Netlifolk has an education budget per year to spend on books, courses and webinars to further their professional development.

----

In previous jobs, I was just handed a Jira ticket and expected to just "get stuff done". At Netlify, my engineering manager allows me to kick the tires on ideas. That forces me to think about a problem holistically, work with the respective people who have context on the problem, and codify a plan to solve the problem. This has let me improve my non-technical skills and grow as an individual contributor.

----

We have weekly internal learning meetings where we discuss topics like Rustlang or Golang, both theoretically and from our daily business.

----

During my tenure, I have been able to dive into areas that interested me and also added value to the company — performance and scalability. **Learning on the job is a great part of why I love Netlify**. We are encouraged and celebrated to speak at conferences or write.
We also have a budget for personal growth. At the end of this month I’m taking an ethics course!

## Finish this sentence: "One time, there was a scary problem..."

_One time, there was a scary problem..._ where we published deployments that had corrupted paths, due to a problem with how we keep the inventory of files in a deploy — something we call deploy tree. This means that deployments went live, but some of the paths were broken. The cool thing is that we were able to rebuild the deploys automatically and fix them in production, instead of asking the customer to take some action.

----

_One time, there was a scary problem..._ and we hopped on a Zoom to huddle talk through a solution. After the meeting ended, we had a list of action items for next steps.

----

_One time, there was a scary problem..._ until I realized **problems aren’t scary, they are just misunderstood**. They require investigation and understanding. When you understand the problem, sometimes it isn’t a problem at all. Sometimes it is a decision that needs to be made. Other times it is work that is just unexpected.

## What advice would you have for someone preparing for a backend engineer interview at Netlify?

Note down some interesting projects you’ve worked on in the past highlighting the impact you made and how it benefited the customers. Be confident and come up with questions to ask the interviewer. Also make sure you understand what’s being asked of you by the interview and if you didn’t understand feel free to ask for clarification. There’s no such thing as "stupid" questions at Netlify.

----

Be honest about what you know and don’t know. The goal isn’t to see if you can regurgitate random engineering facts; the goal is to see if you really will fit in on our team.

----

This is just as much about you as it is about us, so always tell us what you think and ask lots of questions. **We are genuinely curious about your experience and how you think** and won’t be looking for textbook theory type of answers. I always think our interview is more like a normal work day. We’re so excited to be chatting with you!

## Interested in joining our amazing team? Want to learn more?

If you have questions for our backend engineers, feel free to ask in [Twitter @Netlify](https://twitter.com/Netlify)!

Check out the [careers page](https://www.netlify.com/careers/) to learn more about our company, our positions, and to apply!
