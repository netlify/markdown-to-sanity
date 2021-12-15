---
title: "Meet our Netlifolks: Emily Zhang, Sr. Software Engineer"
description: What's it like to work at Netlify? Learn about the experience from
  current team member Emily Zhang.
authors:
  - Netlify People Team
date: 2021-09-10
lastmod: 2021-09-08
topics:
  - insights
tags:
  - netlifolks
  - culture
  - Engineering
tweet: ""
format: blog
relatedposts:
  - "Meet our Netlifolks: Bhavana Srinivas"
seo:
  metatitle: "Meet our Netlifolks: Emily Zhang, Sr. Software Engineer"
  metadescription: "What's it like to work at Netlify? Learn about the experience
    from current team member Emily Zhang. "
---
In this Netlify team interview series, we’ll be giving you a sneak peek of a day in the life of some of our teammates. Next up: meet Emily, Senior Software Engineer at Netlify.

![](/v3/img/blog/emily-zhang.jpg)

**What was your path into engineering?**

I grew up in Cupertino, which is a very tech-centric community. Both of my parents are engineers. Like a lot of people born in the 1990s, I got my start learning HTML and CSS by editing Neopets profile pages and playing around with gaming sites where you could design your own web page. I took computer science classes in high school and enjoyed them, so I decided to continue learning computer science when I went to college.

**What was it like to join Netlify?**

One of my friends had used Netlify before and really liked the product, so she recommended Netlify as an interesting place to work. I read the job description for Internal Tools and the position really appealed to me. At the time of the job posting Netlify was only around 50 or so employees, and I felt that working at a slightly smaller startup would give me more ownership over projects, as well as the opportunity to "wear many hats".

Everyone I talked to at Netlify had great communication skills. The recruiting team kept me very well informed at every single stage of the interview. They even sent me a guide describing all of my interviews and what to expect from each stage, as well as a general timeline of when I could expect responses. I found this thoughtfulness and consideration of my time to be a green flag for the company's values and processes.

I was impressed with my onboarding experience at Netlify and all the care taken by the People team to ensure the company culture was truly remote-first. I especially liked Netlify's policy of "no stupid questions", as I was reassured many times that no matter how simple the question was, I shouldn't feel embarrassed for asking it. The environment was very supportive and collaborative, and more senior engineers would often offer to pair with me if I was approaching a new codebase for the first time. Even though it was my first time working in a remote role, I felt like a part of the community, as there were plenty of video calls to get to know people and slack channels in which people freely shared personal details of their lives and hobbies that they enjoyed.

**How has your role evolved during your time at Netlify and what have you been working on?**

I started on the Internal Tools team here and was in that role for about a year before I switched onto a product team (Runtime and Integrated Apps). I found the scope of the Internal Tools team to be fairly large. For most of my time there we were a small team of 3 people, and we worked on developer tooling as well as support and sales tooling.

One of my first projects was setting up standardization for local developer environments across our organization. At the time, local dev environments weren't standardized among the codebases across Netlify, which made onboarding onto new projects more difficult. Some projects didn't have a local dev environment at all. My task was to come in and and create a process to make the setup more unified and automated, document all of the steps, and set up local dev environments for a few of the repos as an example. This task involved refactoring the local dev setup of one of the oldest repositories that we have at Netlify. At the time, the test suite took a long time to run locally (at least 20-30 mins). Part of the problem was that the test script was rebuilding a very large docker image during every test run. I refactored the test script and build process and shaved 15 minutes off of the testing time. It was awesome to see the impact of this change and it was literally the first big project I got to do at Netlify. I really enjoyed getting to work briefly with all of the different projects and learn more about how Netlify works internally.

Over the past few months I've transitioned onto one of our product pods, which is called the Runtime team. I made that transition because I'm still relatively early in my career and I'm trying to optimize for breadth versus depth in my learning. Previously, I did a fair amount of internal infrastructure/SRE work, but I had never worked on a customer-facing product team before. Another big reason I was excited about Runtime was their usage of Rust. My primary language is Go, and I was excited for the opportunity to learn Rust in a production setting. I think learning a language to ship something to production is very different than learning a language as a side hobby because there are many more considerations that you have to worry about when you're shipping to production, as well as a lot more care taken around code cleanliness and maintainability and thinking through how to structure your system. In contrast, when you're learning something for fun in your free time, it's easier to give into the temptation to hack your way around hurdles and do something that would never pass a code review in a production setting. There were also many knowledgeable Rustaceans on the Runtime team that I was excited to learn from.

The transition process itself was fairly smooth. My manager on Internal Tools was so supportive and really helped me during the transition. I didn't feel like I had much of a problem picking up Rust and getting involved in the projects that they work on. We had Rust learning sessions every week that were extremely helpful. I'm glad that I was able to jump in immediately, pick up tasks one after another and grow from there. It's only been a couple of months since the transition, but I've already learned so much from the amazing people around me. I'm excited to see what's next for our team.

**Is there a particular memory from your time here that stands out?**

There's a recent memory I have from a happy hour in SF. I joined right around the beginning of the pandemic, so I had never met anyone on the team in person, despite working with some people for over a year already. It was funny to meet people after working with them for so long and feeling like you know them but you don't know them at the same time. During the happy hour I was reminiscing a little bit about joining Netlify with the manager who had hired me. I told him about how I was so nervous before I joined I even had trouble sleeping the night before my first day. He told me that he'd taken a chance on hiring a more junior engineer at the time, but that he knew he'd made the right decision since I was doing an amazing job and he was happy to see how I'd grown in my time at Netlify. Despite the slight awkwardness in the beginning, the happy hour turned out to be quite heartwarming and I felt that there was a real sense of camaraderie. I'm looking forward to more in-person meetups with my coworkers!

**What has your remote experience been like?**

This is my first remote work experience. The main thing I've learned is that you have to be very communicative about your work and optimize for working async. I try to document everything now - well-written documentation has saved me so many times. A lot of traditional teams stay in touch through daily standups, but our team currently has more of an ad-hoc process where we have weekly meetings to do general status updates but we don't really micromanage our time day to day. I find it much easier to sink into flow state and work for hours without interruption at home versus in the office. I enjoy the flexibility that remote work offers and it's been neat working with people from all around the world because you get to see so many diverse and interesting perspectives.

One thing that was tough for me is that it's easier to have spontaneous interactions with people when you're in the office, whereas when you're remote you need to take a lot more initiative to form those connections. I've found setting up recurring one on one calls with various people to be really helpful because relationships are built up over the course of many months or even years. You have to be intentional about putting time and energy into nurturing connections and talking to people consistently. Because of these recurring video calls, I feel that I've made actual friends at Netlify versus just being surrounded by acquaintances that I don't know as well. I also have to thank the people who reached out to me to build those connections, it's definitely a mutual effort. Overall my experience working at a remote company has been extremely rewarding. I love not having a commute anymore!

**How do your teams collaborate being remote?**

The Internal Tools team was mostly based in the US, so even though we started work at different times of the day there was still quite a large overlap in which we were able to pair. That team was very pairing-oriented which was great for learning. Sometimes we could just be on a call for 3-4 hours and casually debug our projects together.

The Runtime team is much more fragmented in terms of location. There are a few other members of the team that are in my timezone, but everyone else is in Europe, so there's really only a few hours in the day where we can all talk synchronously and a lot of that time is already occupied by company or team meetings. It can be challenging to find those meeting spots but we make it work. Sometimes people will stay online later or I'll wake up earlier to try to get a meeting in, especially if we're working on the same project.

**Do you have any advice for someone looking to join Netlify?**

You should definitely apply! The people here are amazing. After you join, take the initiative and reach out to people for conversations - everyone I've talked to is welcoming and open.

Another piece of advice I'd have is to make sure you set work boundaries for yourself. When you're remote, there's no clear beginning or end to your work day. If you're invested in solving an interesting problem, it's tempting to continue cracking away at it until you look up and realize it's already 9pm and you haven't had dinner or gotten up from your desk in hours. Burnout can easily creep up on you, so I've been setting an "end of day" alarm for myself to stay mindful about how long I'm working.

**What are your passions outside of work?**

I enjoy reading and digital painting in my free time. I also keep fish! I have several different aquariums; I find it relaxing to have some nature at home.

<p style="text-align:center"><a href="https://www.netlify.com/careers/" class="button">Check out open positions</a></p>

Follow [@Netlify on Twitter](https://twitter.com/netlify) or on [LinkedIn](https://www.linkedin.com/company/netlify) to keep up to date.