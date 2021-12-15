---
title: 'The Road To Community: Part Three — Create'
description: >-
  Part three of our series on building a world class community for Netlify.
  Content is the king of value — but what is the best way to efficiently create
  content that engages?
authors:
  - Perry Eising
date: '2019-03-07'
topics:
  - news
tags:
  - Community
  - Support
tweet: ''
format: blog
---
Hot off the press — here is the third part of my series on planning, implementing, and managing a community forum for Netlify! In the previous two segments, I discussed [how we approach implementing a Community forum](https://www.netlify.com/blog/2018/10/19/the-road-to-community-part-one--define/), as well as the process we followed in order to [pick the right software platform for us](https://www.netlify.com/blog/2019/02/15/the-road-to-community-part-two--distill/). If you have feedback or comments, I’d love to hear them.

Now is the time when we shift from planning to hustling — creating the starter content so our early-stage users aren’t looking at an empty forum. Today, I’ll share all about creating content for our new Community, and deciding how that content will be organized.

![](https://lh6.googleusercontent.com/Q5ra_tIdYx93kTbs14DaThuts6O9EnqW2XOZ_9iN0YqJSXZszGGGao6Sd164pMsveTqns4KYHooLJ5IdJDmbXmT7b9FEZCrQYwh_f1U16NA0465XDLKwr9oKbEzktM3M1t48Z7Qo)

Photo by [Mack Fox (MusicFox)](https://unsplash.com/photos/GDUqwzR1pCk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/manufacturing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

In my experience, a successful and engaged community doesn’t generate itself, even if you have a motivated customer base. People are busy and dealing with many conflicting priorities – it needs to be obvious that participating in a community is worth the time and effort. Bringing forward something of value first, before making an ask to participate, can help move audiences towards engaging. (For a taste of this approach for early-career technologists looking to build their profile, take a look at [this medium article](https://medium.com/@perrysetgo/making-the-jump-from-codeschool-to-candidate-8881ad3563bd) I wrote.) 

As a result, I felt sure that launching an empty community forum and then expecting visitors to pour in wasn’t going to provide us with the results we knew we wanted.

## Use what you have — whatever that is!

As mentioned above — it’s one thing to know you have the audience, but having content of value is another matter entirely. Instead of blindly creating categories and posts, we opted to assess what we already had.

Netlify Community will be many things: it will allow users to socialize, share resources, and collaborate on projects. It will facilitate opportunities for people to organize in person, and it will allow our customers to help themselves and each other. Naturally, posting tips and solutions to our commonly received questions felt like the perfect place to start creating high value content. 
But short, to-the-point responses to a technical inquiries don’t necessarily make great community content. Here's why.

## Shifting from Efficiency to Engagement

While Netlify’s support engineers are fantastic at solving complex problems quickly for individual users, the goals are different for public facing posts. Obviously, the audience is a broader one — moving from a 1:1 to a 1:many model of disseminating information. Additionally, while real-time conversation allows for a dialogue, async posts do not have that power. 

![selective focus photo of bicycle part](https://images.unsplash.com/photo-1421429167374-8fc8ab6d0f66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)

Photo by [Wayne Bishop](https://unsplash.com/photos/7YUW7fvIYoQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/speed?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

Therefore, all Community content needs to be read and vetted for its ability to be understood by a variety of users, across different environments, spoken languages, as well as levels of technical expertise. Community posts should encourage discussion and engagement, and should empower users to support each other and problem-solve, regardless of background.

**Phew!** That’s quite a mission for our small team of hard-line tech nerds. Fortunately enough, with a little bit of practice, even the driest support topic most can be transformed into an engaging and valuable to Community post.

## Perfecting a process

Support engineers are all about process – evaluating a situation, debugging an error, implementing a fix. A process for turning existing support threads into Community content was needed. 

But where to start? Inspired by Mailchimp’s fantastic (and public) [style guide](https://styleguide.mailchimp.com/voice-and-tone/), I created a communications guide for Netlify, which we intend to publish when it is complete. This was valuable work — but a hefty tome didn’t necessarily provide much clear guidance, and progress on turning help tickets into forum threads was slow. 

![](https://lh3.googleusercontent.com/8eVoFGzfJEouxvXhPr2u04EeiGV5lLJw_2neG4PBzWOdm3QegqvDFGKBd3I2UrvvBQfiMxtLncglNRn0WqXINwuW6NPVpUuOsrW4PPFMG_BS24gWa9K7YdJxSjbjPR3tY7W9657v)

Photo by [Stephan Henning](https://unsplash.com/photos/S0hFspmvm_s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/arrow?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

After some head-scratching on my part, inspiration hit me: a clear before/after guide would be incredibly helpful.

Oh, you’d like to see that?

Here it is 🎉 

Take, for example, the following question presented by a customer:

### Sample Question:

> I don’t see form submissions when submitting using JavaScript. What am I doing wrong?

### Existing helpdesk answer:

> When you submit via JavaScript, our system is unable to present the CAPTCHA page that helps prevent spam. Because of this, you will need to implement the honeypot field. Since this basically disables our built-in CAPTCHA, you’ll want to implement your own.

While this is short and succinct, this hardly comes across as engaging and encouraging. What if a user doesn’t know how a honeypot works? What if they don't know how to implement a solution or have other questions? This was a perfect ticket to practice with. In order to share with my team what I wanted them to create, I rewrote the answer and annotated the changes for them.

### Community post with annotations:

> Hey there! You probably aren’t doing anything “wrong” at all — there’s totally a solution. **(→ make feel comfortable)** This is actually a really common question. **(→ normalize, encourage)** 
> Here’s what you need to know: we hate spam about as much as you do. **(→ humanize, give** **context)** 
>
> When you submit via JavaScript, our system is unable to present the CAPTCHA page that helps prevent spam from being sent by our system.  **(→ clarify context)**.
>
> Because of this, you will need to implement what is called a honeypot field – it is a common spam prevention tactic. Here’s a little more background on [that](https://www.netlify.com/docs/form-handling/#honeypot-field). **(→ point for discussion, provide value)**
>
> Let us know how this worked out! If you have any other questions, comment below!

## In Conclusion

Creating this before/after guide was the breakthrough the team needed in order to understand what was asked of them. We were able to quickly get our content factory up and running with material we already had, instead of re-inventing the wheel. By turning common questions into valuable Community topics with fewer revisions needed and time saved. 

Hopefully this is useful for you. We’re excited to be making some serious headway on launching Community in at the beginning of Q2! Our next blog post will be focusing on how to get the word out about your community-building efforts!
