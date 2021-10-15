---
title: How The COVID Tracking Project Scaled From 0 to 2M API Requests in 3 Months
description: Using Netlify, the COVID Tracking Project scaled easily and
  responded instantly, helping millions of unique users stay up to date on
  COVID-19 data.
authors:
  - Netlify
date: 2020-07-06
lastmod: 2021-02-23
topics:
  - case-studies
tags:
  - Jamstack
  - Jamstack Conf
tweet: Using Netlify, the COVID Tracking Project scaled easily and responded
  instantly, helping millions of unique users stay up to date on COVID-19 data.
format: blog
relatedposts:
  - How Harper Reed made the Jamstack work in government
  - Keynotes, agenda, workshops for Jamstack Conf Virtual
seo:
  metatitle: How The COVID Tracking Project Scaled From 0 to 2M API Requests in 3 Months
  metadescription: Learn how the COVID Tracking Project easily scaled and responded instantly on their Netlify setup, helping millions of unique users stay up to date on COVID-19 data.
  ogimage: /img/blog/og-erin.png
---
As the COVID-19 pandemic was emerging, [Erin Kissane](https://twitter.com/kissane) and her friends at The Atlantic found themselves trying to answer a simple question: how many people in the United States tested positive for COVID-19? 

It’s not a question they should have to ask themselves, because it’s the responsibility of the Centers for Disease Control (CDC) to provide COVID-19 testing data and results to the public. 

But, in late February, the CDC had stopped sharing a critical bit of data needed to estimate the nation’s positivity rate: the number of COVID-19 tests that had been administered. 

By taking the total number of cases performed and dividing it by the number of positive tests, you can estimate the nation’s positivity rate. Without knowing the total number tests performed, it’s virtually impossible to discern the positivity rate. 

That’s when Robinson Meyer and Alexis Madrigal decided to take on the massive and manual task of gathering each US state and territory’s testing data themselves. This endeavor became [The COVID Tracking Project](https://covidtracking.com/), an invaluable resource for citizens, journalists, and even state governments looking for COVID data. 

Erin has since become the Managing Editor of the Project, which is run by The Atlantic’s Alexis Madrigal and a network of volunteers. The Project itself is a go-to data source for leading journalistic institutions, publications, and the CDC itself. Today, it handles millions API requests and millions of unique visitors with ease. 

At [Jamstack Conf 2020](https://www.netlify.com/tags/jamstack-conf/), Erin told the story of how The COVID Tracking Project evolved from a spreadsheet to a scalable website, enabled by the Jamstack architecture, Contentful, Algolia, and Netlify. 

## It started with an all-nighter 

Before The COVID Tracking Project site existed, it was essentially a series of spreadsheets put together by Robinson Meyer and Alexis Madrigal, both staff writers at The Atlantic. The two had stayed up very late one night going to every US state and territory’s public health department website in search of COVID-19 testing data. State by state, they manually compiled the information. 

This data became the basis for The Atlantic article which caught the attention of Jeff Hammerbacher, a developer doing similarly arduous work compiling data. This dynamic of civic-minded individuals coming together to fill a gap in information was absolutely critical to forming the Project. 

“_They decided to combine their efforts and keep doing that same kind of grueling data run of going through every public health department, collecting all the data, compiling it into a spreadsheet, and trying to understand a national picture of the outbreak_,” Erin recalls. “_They realized they definitely needed help if they were going to continue doing this work so The COVID Tracking Project was formed on March 7th with a call for volunteers. That’s where I came in_,” says Erin. 

## Building a resilient site

The first thing Erin sought to do was build The COVID Tracking Project into a database and website that would prove more resilient than a spreadsheet. Harkening back to her days as a Webmaster managing servers and writing ASP code, Erin wanted to ensure that The COVID Tracking Project would remain upright.

> “I’ve been around for several generations of big, dynamic, heavy websites. I have some alarm bells about what happens to some of those kinds of websites when a whole bunch of traffic hits them unexpectedly. And, this seemed like a project that might get some traffic.” 

Erin was right. To ensure the Project could scale, Erin turned to the inventor of responsive web design, [Ethan Marcott](https://ethanmarcotte.com/). Ethan connected Erin with [Mat Marquis](https://matmarquis.com/) who, in a matter of hours, spun up The COVID Tracking Project on Netlify.

Using Netlify’s CDN, Erin felt confident the Project would stay upright and responsive. The site is built using Google Sheets, Contentful headless CMS, Gatsby open source static site generator, and Netlify. With the performant and resilient Jamstack architecture in place, The COVID Tracking Project was prepared to scale. It was a good thing they were ready. 

## COVID Tracking becomes an official resource

In late March, the United States’ number of COVID-19 cases continued to rise. Even as the United States became the leader in global cases of COVID-19, good data was still hard to come by outside of The COVID Tracking Project. 

Heralded press outlets from The New York Times, to ProPublica, to The Wall Street Journal, to CNN began relying on the Project’s data in their reporting. 

Using Netlify, the Project scaled easily and responded instantly. With millions of unique users staying up to date on COVID-19 data, the Project maintained its breakneck pace of compiling and reporting data. When the team thought they had seen the heights of their traffic, something came from left field. 

In an April press briefing, the White House released their plan for reopening the country, unexpectedly citing the Project’s data. The CDC itself still did not have any data publicly available. 

It was clear The COVID Tracking Project had become such a critical pillar of information that the institution responsible for compiling and sharing this data now relied on Project. Once the White House referenced The COVID Tracking Project as a resource, traffic spiked overnight, peaking at more than 1.4 million pageviews on April 29th.

“_The extraordinary thing for me, as a web person from the old days, is that we didn’t actually notice that traffic on the website. The website never so much as flinched_,” says Erin, recalling that day. “_Having our stack be so solid, so stable, and so fast has been a saving grace in the middle of this otherwise extremely complex project_.” 

The site still hasn’t flinched, even in the wake of unprecedented traffic and API requests. Today, the COVID Tracking Project powers over 2 million API requests daily from all around the world. Exposing the data via an API has been an invaluable resource for researchers, journalists, and disease modeling experts like the Johns Hopkins University Testing Insights Project. 

The sense of collective community responsibility is what sparked The COVID Testing Project into existence. It’s something the Project will carry on as more and more institutions turn to it for up to date, quality data. When they do, the Project will be ready to scale further thanks to its network of volunteers, and the companies that support its critical work. Netlify is honored to be one of those companies. 

Hear about the experience directly from Erin Kissane in her talk from Jamstack Conf 2020. And learn how you can [get involved](https://covidtracking.com/get-involved) by volunteering to collect data for the Project.

<iframe width="649" height="365" src="https://www.youtube.com/embed/ryngYoHXNfQ?list=PL58Wk5g77lF8jzqp_1cViDf-WilJsAvqT" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

___
Have a project in mind? One of our experts would love to [talk with you](https://www.netlify.com/enterprise/contact/) about the use-case and requirements.
