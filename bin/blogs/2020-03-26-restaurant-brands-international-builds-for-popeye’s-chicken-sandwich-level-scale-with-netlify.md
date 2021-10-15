---
title: >-
  Restaurant Brands International builds for Popeye’s-chicken-sandwich-level
  scale with Netlify
description: >-
  How Restaurant Brands International builds JAMstack sites at-scale, with
  Netlify, for customers like Popeye’s.
authors:
  - Netlify
date: '2020-03-27'
lastmod: '2020-03-27'
topics:
  - case-studies
tags:
  - customers
  - case study
tweet: ''
format: blog
seo:
  metatitle: How Restaurant Brands International builds JAMstack sites on Netlify
  metadescription: >-
    Learn how Restaurant Brands International builds JAMstack sites at-scale,
    with Netlify, for customers like Popeye’s. Teddy Sherrill, CTO at RBI shares
    insights into their processes.
  ogimage: /img/blog/og-image-17.png
excludeFromSitemap: true
---
Whether you’re in the mood for donuts in Canada, spicy chicken sandwiches in South Carolina, or a flame broiled burger in the UK, Restaurant Brands International (RBI) can help. RBI owns iconic quick service brands Tim Hortons, Burger King, and Popeye’s. 

RBI helps their customers find, and order, exactly what they want as fast as possible. But, engineering for every ingredient substitution, every new menu item, and every special promotion across three major brands can be tricky. Luckily, RBI had the right tools for the job. 

RBI built a code base and website architecture that empowered their developers, salespersons, and marketers to focus on what their best at. Now, RBI can serve all three of their brands across 12 different apps using conditional logic, careful data schemas, and Netlify. 

### Meet RBI: Transforming to build a better digital services experience

To better understand RBI and their website architecture rebuild, you should probably know a little bit more about the Popeye’s chicken sandwich. 

On August 12, 2019, Popeye’s announced the new addition to their menu. The sandwich drew ire from competitors and record breaking sales from Popeye’s customers. The spectacle of the launch was amplified by Popeye’s smart social media branding and various skirmishes with competitors. In the first two weeks, Popeye’s gained the equivalent of $65 million in media value, according to Apex Marketing Group. Then, Popeye’s ran out of the sandwich. 

Popeye’s response to make the sandwich a permanent menu item was a savvy move, but, speed was the most critical element of the response. 

Teddy Sherrill, chief technology officer at RBI, said that while the sell out was “a good problem to have” it also presented a question to RBI: How do you build a digital services experience that can support an arbitrary degree of scale, and operate with extreme speed across any platform? 

Otherwise put: How do you ensure your digital services can scale to a Popeye’s-chicken-sandwich-level of demand on any platform, while operating as fast as a Popeye’s store sells out of chicken sandwiches. 

This is the challenge RBI tackled with the help of Netlify. 

### Challenge: Rapidly changing digital content across channels

“In the situation like what we had with Popeye’s, there’s a case where, because of a business reality that’s unfolding in real-time, it’s incredibly important to be able to change the digital content on all our channels quickly,” says Sherrill.  

RBI set out to build a digital services architecture that could work for all three brands seamlessly across web, mobile, and in-store kiosk platforms. With the Popeye’s sandwich lesson fresh in their minds, RBI needed to develop a frontend for sales and marketing to push new information and menu items out to the network of RBI properties without writing code.  

### Solution: Unified Netlify platform makes a better experience for devs and marketers

“What we’ve found happens is the more painful it is to update your content, the less it happens, and the less relevance the digital channels tend to have. So if the marketers in your company fear updating the website…it doesn’t tend to happen very much,” says Sherrill.  

Using Netlify for all of their brand websites, RBI developed a code base that could serve three brands’ different needs – from icons to menu items – from one code base. 

RBI uses the webpack build process to conditionally load React components depending on the environmental variables at build time. Meaning, when Popeye’s Netlify-powered site loads, RBI’s logic serves the site the proper logo to display based on custom, context specific-logic. It was far easier for RBI to build this bespoke system using JAMstack. 

“People in big companies are used to kind of muddling through these pretty bad development processes where it takes a long time to preview changes, run your app locally, there are a lot of interconnected systems that are very difficult. We’ve tried to simplify this and create a developer experience that’s much more reasonable,” says Sherrill.

“Our goal was to try and make one unified platform, as much as we can, that uses shared React components, and as much shared backend code as we can, that’s able to be styled by brand and platform. We wanted to try and make the content and data manageable.”

Today, RBI salespersons and marketers can easily edit and publish content to any one of RBI’s 12 application environments without writing a single line of code. 

> “JAMstack has been a really good fit for the organizational dynamics that we see in the enterprise tech and marketing groups,” says Sherrill. “It’s important to anticipate the organizational dynamics and speed at which you’re going to need to make changes and set up your stack accordingly.” 

The developers who helped build that ability for the sales and marketing teams are still able to customize data schemas to reflect restaurant menu changes and decision trees that customers ordering items would go through.

Now, when RBI has another Popeye’s-chicken-sandwich-scale event on their hands, they can rally the whole team using JAMstack. 

Learn more by watching the JAMstack Conf talk, below.

<iframe width="560" height="315" src="https://www.youtube.com/embed/dKBDUhGi76o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
