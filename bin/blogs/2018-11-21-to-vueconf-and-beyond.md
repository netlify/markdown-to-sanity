---
title: TO VueConf and Beyond
description: Highlights from VueConf Toronto 2018
authors:
  - Divya Sasidharan
date: '2018-11-21'
topics:
  - insights
tags:
  - Vue
  - Events
tweet: ''
format: blog
---
Last week, the inaugural Vue Conference Toronto kicked off with much fanfare and [to the skirl of bagpipes](https://vimeo.com/302127478). Like the users of the framework itself, the conference was incredibly well represented with attendees, and speakers hailing from over 25 countries. The content of the conference itself was top notch with talks ranging Content Optimization, VuePress, Accessibility and WebGL. [Jilson Thomas](https://twitter.com/jilsonthomas) and his team of organizers did a fantastic job (despite this being their first rodeo) putting together and keeping up the smooth operation of the conference.  

![](https://d2mxuefqeaa7sj.cloudfront.net/s_4126829485E5DE6A05765D89022A85313FCD0F63C99F9D83A1B15B5C1FD1B0CF_1542826484662_first_img.jpg)


## The talks

I had the honor of both hosting and speaking at Vue Conf Toronto, alongside the inimitable [Jacob Schatz](https://twitter.com/jakecodes). In spite of the weather, which held up to everyone’s expectations of what Canada is like (hint: cold and snowy), I was blown away by the energy and enthusiasm of the audience and speakers alike. The conference was chock full of incredibly delightful talks, many of which I can’t possibly cover in a post of reasonable length. So here are a few of the talks that I enjoyed in no particular order:

### [Evan You](https://twitter.com/youyuxi)
Evan You, the founder of VueJS opened the conference with a brilliant keynote highlighting what’s to come with a preview of the next iteration of Vue, Vue 3.0. With his iconic methodical style, Evan laid out the plans and progress milestones that were being made towards shipping the next major release of Vue. He focused on strategies to making Vue faster, smaller, more maintainable, and easier to target native to make Vue developers’ lives just a little bit easier. Some ways in which he along with the team hope to accomplish this is via runtime improvements through a full virtual dom re-write **and a custom renderer API*, and* compiler improvements through static tree hoisting, static props hoisting. Vue 3 will bring this and many other improvements all while ensuring IE11 remains supported (albeit in a separate build with the same reactivity limitations of Vue 2.x.) For more details on this check out the [Vue Mastery summary](https://medium.com/vue-mastery/evan-you-previews-vue-js-3-0-ab063dec3547) and [the slides from Evan’s keynote](https://docs.google.com/presentation/d/1yhPGyhQrJcpJI2ZFvBme3pGKaGNiLi709c37svivv0o/edit#slide=id.g46b2d60f5b_0_58).

### [Jacob Schatz](https://twitter.com/jakecodes)
Following Evan’s keynote, Jacob delivered an in-depth talk where he dove into the internals of [Vuex](https://vuex.vuejs.org/), the global state management system for Vue. Jacob made a compelling case for the why, when and how to use Vuex effectively in your projects. He began with the argument that most of us reach for Vuex too soon and asserted that this is oftentimes the primary reason our Vue apps become bloated. With this assertion, he then dove into the implementation details of Vuex and demonstrated how Vue’s reactivity system in actuality powers Vuex. In spite of the bloat that Vuex sometimes introduces to our apps, he contended with its usefulness as a developer tool—Vuex gives you global state management and allows you to debug state changes. He even introduced a [tinier Vuex library](https://github.com/jschatz1/litevuex) he’d written so you can use Vuex without using the entire library. Jacob closed his talk with a cautionary warning to all developers to “Know Thy Library” and “[Not] blindly follow the masses”. [You can find a link to his slides here](https://drive.google.com/file/d/1cIGR29L-JIocB-fziwOlCDyhrljX4eQh/edit).


### [Gregg Pollack](https://twitter.com/greggpollack)
In true [Code School](https://www.pluralsight.com/codeschool)—and now [Vue Mastery](https://www.vuemastery.com/)—fashion, Gregg Pollack blew the audience away with his detailed explanation of Vue’s reactivity system complete with a well animated slide deck. His walkthrough of the code that powers Vue’s reactivity system, via getters and setters, was chock full of knowledge yet easily understandable thanks to his well paced and polished presentation. His use of Egyptian mythology as a metaphor where the knowledge of the almighty Evan (Ra) written in hieroglyphics must be deciphered by us mere mortal developers was also a nice touch to thematically carry the talk through. My one biggest disappointment however remains the lack of an inspired jingle ([ala code school](https://www.youtube.com/watch?v=-EmJrX6-tbc&list=PLA57A0401B1F54273)) to accompany this talk. 


![A view of Gregg's talk featuring Evan Ra](https://d2mxuefqeaa7sj.cloudfront.net/s_4126829485E5DE6A05765D89022A85313FCD0F63C99F9D83A1B15B5C1FD1B0CF_1542823956730_evan-ra.jpg)


### [Colin Bendell](https://twitter.com/colinbendell)
To build up his premise on the importance of media performance and optimization, Colin began by giving us all a huge reality check on the giant performance gap between top tier mobile devices and most other devices used around the world. To further strengthen his case on the importance of web performance, particularly that of media, on overall user experience he showered us with a plethora of data and graphs courtesy of his extensive research on web performance. One metric I found most startling was that increasing image width, nearly doubles byte size (a 600px image weighs in at 33.9kb, while a 800px weighs a whopping 74.7kb). By highlighting these key metrics, such as page load times, and conversion rates, he then pointed out strategies for optimizing web performance using the existing web API. Some of these include utilizing Intersection Observer, the Memory API and the Network Information API. He ended his talk by mentioning the beta of cloudinary’s network info API, which would allow developers to query a user’s network information. 


![A graph of the performance gap of mobile devices we often forget about. — by @bencodezen](https://d2mxuefqeaa7sj.cloudfront.net/s_4126829485E5DE6A05765D89022A85313FCD0F63C99F9D83A1B15B5C1FD1B0CF_1542824025773_colin.jpg)


### [Hassan Djirdeh](https://twitter.com/djirdehh)
As an author of the comprehensive book on VueJS, [Fullstack Vue](https://www.fullstack.io/vue/), Hassan is an expert at all things Vue. It is no wonder that his talk on understanding client side routing was so enlightening and well delivered. To help the audience concretize the concepts and ideas he covered in his talk, Hassan used the example of building a Pokedex, a basic Pokemon routing application to display statistics of a selected Pokemon. By building a Pokedex from the ground up, Hassan uncovered the basic workings of Vue Router. Even so, he cautioned us against reinventing the wheel. He argued that building our own routers while seemingly trivial, does not take into account various factors such as consistency across browsers, lazy loading and dynamic route matching. His talk concluded with a nice call to action to use Vue Router since it is well tested and supported by the Vue ecosystem. To learn more Hassan’s talk, [check out his post on building a custom Vue router that he wrote for CSS tricks](https://css-tricks.com/build-a-custom-vue-router/). 


### [Callum Macrae](https://twitter.com/callumacrae)
Callum’s talk was an emphatic call to developers to invest more in accessibility. To make his point, he live demo-ed a screen reader’s interpretation of the VueJS website and discussed the current state of accessibility in single page applications and how we as developers can improve it. To further hone in on the importance of accessibility in making the web usable for everyone, Callum showed us a video of a blind user and his frustrating experience navigating a website. As developers, he noted, we should feel empowered to help make the web a better experience for everyone, not just for others like us. In closing, Callum provided the audience with various tools and methods to achieving accessibility while maintaining the agility of your team. You can find some of this thoughts and opinions on accessibility in [this post he wrote for his blog](http://macr.ae/article/case-for-accessibility.html).

![A view of Callum's talk](https://d2mxuefqeaa7sj.cloudfront.net/s_4126829485E5DE6A05765D89022A85313FCD0F63C99F9D83A1B15B5C1FD1B0CF_1542826575869_callum.jpg)

### [Victoria Bergquist](https://twitter.com/vicbergquist)
In her talk, Victoria premiered the application she had built, Shapy, a wysiwyg CSS gradient generator that uses CSS and VueJS. As a CSS aficionado who self confessed to writing JavaScript begrudgingly (and only under duress), Victoria did an excellent job showcasing how VueJS removes the trickiness that sometimes accompanies writing JavaScript. Through her live demonstration of the app, Victoria also made CSS gradients just a little more enjoyable for those of us who shy away from the complexity that is configuring color stops and hex colors. Check out her app here at https://shapy.app.


### [Ignacio Anaya](https://twitter.com/ianaya89)
Building authentication into a single page application can be a daunting process, especially given all the options we have. Ignacio’s talk aimed to demystify the fear around authentication, specifically token based authentication via JSON web tokens (JWT). The purpose of JWT, he claimed, is to  remove the need for a stateful, centralized approach to authentication. In the spirit of helping us grok JWT more concretely, Ignacio used a very Canada-appropriate example of buying a ticket to an ice hockey game and how the authentication process works when liaising between client and server. With the basic premise for JWT explained, Ignacio then dove into strategies and best practices when using JWT in Vue applications. He encouraged us to lean on the existing functionality of Vue Router and Vuex to set up navigation guards and store tokens and to use silent authentication when handling token refreshes. To make his talk more actionable, Ignacio ended by plugging resources and tools to get started when integrating authentication into our Vue applications. [Slides to his talk can be found here.](https://speakerdeck.com/ianaya89/a-token-walks-into-spa/)


### [Tamara Stefanovic](https://twitter.com/sofanisba)
In many (if not most) applications, Vue is hardly ever used in isolation or in a strictly single page application context. It is often used in a multi page application and embedded in legacy codebases where the cost of refactoring or breaking code is significant. Tamara walked us through these less than ideal, but very real situations, and offered strategies to stay productive when working within these systems. Many application frameworks like Rails and Laravel offer solutions to integrating single page applications out of the box. Given these options, she reasoned, it’s not hard to just start using Vue. And if you’re feeling ambitious, she even encouraged us to configure our set ups to our heart’s content by messing with delimiters and configuring hot module reloading. Some other fantastic ideas she covered include using libraries such as \[ng-vue\](https://github.com/ngVue/ngVue) and \[vue-django\](https://github.com/NdagiStanley/vue-django) to integrate Vue into your existing codebases. A key takeaway from Tamara’s talk was that a good and proper separation of concerns isn’t easy and so you have to work with what you’ve got. To dive into the content of Tamara’s talk, [check out her slides here](https://docs.google.com/presentation/d/1kBwGQ3y3xjsl5u6PO6H_3rCNvmTEfFk4LLrWt_M-kDg/edit).  


### [Ben Hong](https://twitter.com/bencodezen)
Through the course of his talk, Ben asserted the importance of good and up to date documentation. Documentation, he maintained, is the key to any project’s long term success and contributes directly to the overall happiness of the team. Regardless, writing and maintaining documentation isn’t easy, especially when the task is seen as more as an afterthought. VuePress makes it easy to keep living documentation. In his talk, Ben showed us numerous tips and tricks to using VuePress replete with hilarious gifs and memes to accompany his points. Some tricks he covered include VuePress’ theming system, and markdown extensions that allow you to do syntax highlighting and insert emoji into your documentation. He even managed to blow the audience away by mentioning that VuePress works seamlessly with Vue Components. With the hype built up around VuePress, Ben ended his talk by providing the audience with resources on how to get started with VuePress. You can find those along with [Ben’s slides here](https://noti.st/bencodezen/fQDYDD/vuepress-documentation-made-easy#s059lzb).


### Lightning Talks
While the talks I covered in this post were all full length conference talks, it’d be remiss of me to not mention the delightful lightning talks that were interspersed through the two conference days. We had a whopping total of 14 lightning talks, all of which could have easily been standalone talks. Some notable ones include [Jocelyn Joffrey](https://twitter.com/samlovesemail)’s talk *Building a fortune-teller app using Vue.js* (where she built an Ask Zandar clone in Vue), Tessa P’s talk *$nextTick(downToBusiness)* (where she dove into how nextTick in Vue works alongside the browser's event loop) and [Robin Hamill](https://twitter.com/rbnhmll)’s talk *Tooling down: choosing the simplest approach when starting a project* (where he debated the importance of simplicity over unnecessary abstraction).

![A view of Jocelyn's talk](https://d2mxuefqeaa7sj.cloudfront.net/s_4126829485E5DE6A05765D89022A85313FCD0F63C99F9D83A1B15B5C1FD1B0CF_1542824659008_askzandar.jpg)


## And Beyond!

This year has seen a sharp growth of regional Vue Conferences across the world. Vue Conf Toronto joins the ranks of other noteworthy Vue conferences like [VueJS London](http://vuejs.london), [Vue Fes Japan](https://vuefes.jp/), [VueJS Amsterdam](https://www.vuejs.amsterdam/), [Vue Summit Brazil](https://vuejssummit.com/en/) and [VueConf US](http://VueConf US). This rapid growth is heartening and evidence of the widespread growth and adoption of Vue around the world. Make sure to keep an eye out for more next year!

Video recordings of the talk will be published in the near future thanks to the sponsorship of [Vue Mastery](https://www.vuemastery.com/).
