---
title: Jamstack Helps American Civil Liberties Union Quickly Respond, Inform
description: At Jamstack Conf the ACLU explained how it leveraged the Jamstack
  to support incremental and flexible web development, including building a new
  site for the 2020 election.
authors:
  - Netlify
date: 2020-11-13
lastmod: 2020-11-10
topics:
  - case-studies
tags:
  - Jamstack
  - Jamstack Conf
tweet: ""
format: blog
relatedposts:
  - "Improving and Extending the Voter Experience: Democracy Works deploys with
    Netlify"
seo:
  metatitle: How Jamstack Helps American Civil Liberties Union (ACLU) Respond
  metadescription: At Jamstack Conf the ACLU explained how it leveraged the
    Jamstack to support incremental and flexible web development, including
    building a new site for the 2020 election.
  ogimage: /v3/img/blog/og-aclu-blog-for-netlify.png
---
New technologies are often touted by companies who use them to serve their customers better than ever, and increase profitability while reducing costs. But another sector also is a critical beneficiary of new technologies, and their work helps all of us, and that is the nonprofit sector.

The American Civil Liberties Union (ACLU) has been fighting for civil rights and civil liberties for a century. But its digital work is young and ever evolving, noted Rhonda Friberg, Director of Engineering for the ACLU, at the most recent [Jamstack Conf](https://jamstackconf.com/2020/october/).

The ACLU, in a highly attended conference session, explained how it leveraged the [Jamstack](https://jamstack.org/) model to support incremental and flexible web development, including the building of a new site, [“Let People Vote”](https://www.aclu.org/voter/), for the 2020 presidential election.

The story of the ACLU’s use of the Jamstack’s modern approach to web development underscores how things are improving in terms of how the web, and applications, are being built and delivered.

You can watch the session, and highlights include:

* The Jamstack architecture enabled the ACLU to build its Let People Vote site within a few weeks.
* The site was so fast that it had to add animation so people knew they were jumping from one state’s information to another state’s information.
* The Jamstack is also enabling the ACLU to respond faster and set up new campaigns more quickly.

<iframe width="1076" height="605" src="https://www.youtube.com/embed/0IMMaX62ezY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Path to the Jamstack

The ACLU is a non partisan organization set up to protect and advance individual civil liberties and the rule of law. After the 2016 presidential election, ACLU site traffic surged overnight. Shortly thereafter, the ACLU took on more cases and doubled its budget, Friberg told the audience.

The rapid growth also precipitated the ACLU forming a product and technology team to bring expertise in house. Prior to this time, the ACLU had “followed the path of many nonprofits,” Friberg said, and used a major CMS for its website and outsourced most other digital experiences. As the ACLU’s online presence grew, so did its CMS with new content, plugins and so on. Every new campaign microsite meant a new agency contract and project to build from scratch. By contracting with design agencies, the ACLU was able to move quickly. But it ended up with siloed sites and disconnected data.

While the process made sense for a long time so the ACLU could concentrate on its primary mission, the ACLU knew it needed to adapt as digital organizing, online fundraising and other online initiatives gained ground. The web site also supports decades of court case documents, reports, press releases, guides, blog posts, and other sources of content. The ACLU wants to make all content accessible to all. The ACLU is also a rapid response organization.

## Testing the Jamstack

As a result, the ACLU needed a system that could handle all of its changing and expanding needs.

Its first project for its new design team was not to overhaul a long-lived CMS. Instead, it was to start small to test the Jamstack approach to see if it could chip away at what had become a monolithic system. Its first open source API, “What the District?” revealed how district voting boundaries had been changed over the years. Knowledge from that project shaped the work of the next project, “Elections API,” which included a look up service to deliver targeted information to voters.

By decoupling the front and back ends, and developing small reusable services, the ACLU was able to make quick, targeted updates, increase development speed and put build strategies in place that provide continual and easy deployment. With a flexible, iterative approach, the ACLU can chip away at major site design one step at a time, Friberg said.

## Pandemic Voting

“Let People Vote” was another project built using the Jamstack. Voting rights is an issue the ACLU has worked on for decades, said Alison Abreu-Garcia, ACLU senior software engineer. Yet the pandemic highlighted the importance of early and mail in voting, and many states have eligibility rules. The ACLU filed several lawsuits to open up voting and wanted a tool to help people navigate the voting rules.

For the 2018 midterm election, the ACLU built a Jamstack site, largely powered by the Elections API, that drew data from multiple sources, including polling places and voting records of legislators. For the 2020 site, the ACLU wanted to provide more detailed information, including information on how to vote in context of COVID-19, and to react quickly to update information when rules changed.

The team utilized existing internal tools and expanded their headless CMS to quickly get voting content into the hands of editors. Taking this approach meant the ACLU had a backend ready to go within a day. With new frontend tools, it built a shared component library so it could use the same functionality across sites. It also devised a starter template to quickly generate frontends. The site was up within weeks.

For the general election, the ACLU wanted to update the site to provide more detailed information about voting by mail, and state specific conditions. Content was continuously evolving. The iterative approach allowed it to frequently shift messaging and improve the user experience. The Jamstack approach also enabled it to easily connect to multiple data sets to give voters even more tailored information. Even the ACLU team was surprised by how fast the site became. Different state pages loaded so fast the ACLU had to change them so viewers would notice that the page had changed. “It was a good problem to have,” Abreu-Garcia said.

## The Tech Stack

What the ACLU uses for its technology stack comes down to what has good documentation, what has a good learning curve, and what engineers want to use, Friberg said.

In a Q&A after the session, the ACLU noted its use of certain technologies, including headless WordPress, Vue, Nuxt, Python and Netlify, as well as other hosting options.

Security is high priority. A pain point includes routing as the site changes over time. Splitting the site into microservices means that global updates take a little longer than if using a monolithic stack, it says.

## Moving Web Design Forward

The ACLU has helped protect and extend the USA’s democracy and move it forward by giving more people access to more timely information regarding everything from their voting to their broader civil rights. We’re pleased to see a project of such importance benefit from the performance, scalability and iteration speed of the Jamstack.
