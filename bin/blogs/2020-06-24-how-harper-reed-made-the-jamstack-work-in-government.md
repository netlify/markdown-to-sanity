---
title: How Harper Reed made the Jamstack work in government
description: At Jamstack Conf Virtual, Frances Berriman interviewed Harper Reed
  about all things Jamstack and how speed and simplicity can help make the
  internet more equitable.
authors:
  - Netlify
date: 2020-06-25T00:00:00.000Z
lastmod: 2020-06-25T00:00:00.000Z
topics:
  - case-studies
tags:
  - jamstack
tweet: ""
format: blog
relatedposts:
  - Envisioning the future of the Jamstack
  - Keynotes, agenda, workshops for Jamstack Conf Virtual
seo:
  metatitle: Learn How CTO of Obama for America made Jamstack work on the campaign trail
  metadescription: Hear from Harper Reed, CTO of Obama for America in 2012, about how they used the Jamstack for speed and efficiency. Learn how the architecture brings communities together on the internet.
  ogimage: /img/blog/jamstack-promo-6-4-.png
---
Harper Reed has been a fan of the Jamstack for quite some time. He just didn’t know there was a proper title for the stack until, well, fairly recently. 

“When I Googled Jamstack, I thought, ‘Oh, I didn’t know this was an actual stack,’” said Harper. “For me, this was such a normal thing. I didn’t know people called it a thing. I just thought this was how it was done.”

At [Jamstack Conf](https://jamstackconf.com/), Frances Berriman interviewed Harper Reed about all things [Jamstack](https://www.netlify.com/jamstack/), a modern architecture for faster and more efficient websites, and how speed and simplicity can help make the internet more equitable. 

### Building with less
The private sector developer’s tool belt is quite different from that of a developer working within the government. As CTO of Obama for America in 2012, Harper faced that reality head on. 

“We had to get really far with very little resources,” said Harper. His team of Obama for America engineers were responsible for building everything from databases to manage voter information, to poll watching software, to an API that powered an online network for campaign supporters. But, one of the most essential products they built was the infrastructure to support, manage, and process campaign donations.

Fundraising is arguably the most critical task of any political campaign. Using the Jamstack, Harper’s team was able to build a scalable, tremendously fast fundraising platform, without overworking their small but mighty team of developers. 

### A night and day difference with the Jamstack
In 2012, the Jamstack was not exactly ubiquitous in government programming. There tended to be a sense of safety in complexity, a bias toward the idea that more complexity equals better performance. The Jamstack flipped that idea on its head. 

“We said, ‘Okay we’ll make everything static,’” said Reed. “We are going to have a way to generate these pages that will work very, very easily, and more importantly, consistently without having an adverse impact on the resources we have available.”

After adding a robust payments infrastructure and testing infrastructure in JavaScript, adding an API layer, and then using Markup, Harper was using what he now knows is called the Jamstack. The new campaign fundraising platform was up and running with a quickness. 

The difference between the Jamstack infrastructure and Obama for America’s previous infrastructure was “night and day” according to Harper. Before making the switch, the fundraising platform relied on server-side processes, rendering pages on the fly, PHP, and ExpressionEngine payment pages. Now, things were far more streamlined and scalable. 

### Speed is everything on the campaign trail
“It was so fast. It was fast to develop for. It was fast to iterate with. It was fast to do testing on. You could do five different versions with very easy configuration,” said Harper. “We didn’t have to go talk to a devops person.”

Speed was the deciding factor in using the Jamstack. The issue at hand for Harper’s team was two-sided. They needed to build a seamless, speedy way for supporters to donate to the re-election campaign. They also needed to do so in the most efficient possible manner to ensure they had time for other mission critical projects – like building a pseudo Stripe. 

“The funny thing was we kind of had to build Stripe,” says Harper. At the time, Stripe was a new startup and Harper was messaging Patrick Collison saying, “Hurry,” hoping that Stripe would mature to a government-approved level in time for Harper to use their payments API. While the timing didn’t work out for the Stripe integration, the service Harper’s team built worked like a charm. 

“It was very clear it was working. You’re either making money or you’re not,” said Harper. The payment solution worked without relying on server-side logic, or waiting on databases. It functioned using queues that popped over to a database that would store information after a campaign contribution transaction was completed. Put it more simply, “It was so, so fast,” says Harper. 

### Jamstack today, tomorrow, and in the future 
Years removed from his time as CTO for Obama for America, Harper sees a cyclical nature to the way developers can favor server-side rendering in one era and client-side rendering in the next. But, one thing that’s remained constant is user empathy and building an experience that serves the greatest number of users equitably. Rendering content in advance helps developers not only serve users faster, but also ensures they can serve all users, regardless of the device they have.

Frances Berriman noted that accessibility might not be an issue for those who have the privilege of using the best hardware, ranging from computers to handheld devices, as well as reliable internet. But, that is not the case for a large part of the world. 

There are plenty of people who “aren’t on the bleeding edge of technology, or are maybe using 3G,” says Frances. When all services perform faster, it creates a wider base of usability that allows under-resourced people to “still access all the wonderful things that the web has enabled for us,” says Frances.  

Harper also sees the Jamstack as something more than an architecture devoted to powering a campaign fundraising platform, or a company’s website. It’s something that operates on a higher plane to bring communities together on the internet. 

“Accessibility is the key. I don’t like building things for one group of people,” says Harper. “Efficacy comes from both directions. Are the developers able to be productive? And in the other direction, are users able to use the app?”

It’s a developer’s job to make sure that the answer to both questions is yes. Using the Jamstack just makes that job a little easier and a whole lot faster. 

**Watch the full replay of the fireside chat from Jamstack Conf Virtual:** 
<iframe width="922" height="519" src="https://www.youtube.com/embed/IUkRG-w_9-c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

___
Have a project in mind? One of our experts would love to [talk with you](https://www.netlify.com/enterprise/contact/) about the use-case and requirements.