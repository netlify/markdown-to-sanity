---
title: Cornerstone OnDemand Delivers Web Projects 30% Faster with Netlify
description: >-
  Cornerstone OnDemand migrated from an outdated, monolithic CMS architecture to
  the JAMstack, powered by Netlify, Gatsby, and Sanity.io. Now, page loads are
  25% faster and time to market has improved 30%. As a bonus, the team has also
  greatly improved its ability to retain and attract new talent.
authors:
  - Lauren Sell
date: '2019-07-02'
topics:
  - case-studies
tags:
  - Gatsby
  - Sanity CMS
  - Marketo
  - Performance
  - Case Studies
tweet: ''
format: blog
---
We love to feature customers who are finding business success with Netlify and JAMstack technologies. In this post, we'll share how Cornerstone OnDemand, a talent management company, migrated from an outdated, monolithic CMS architecture to the JAMstack, powered by Netlify, Gatsby, and Sanity.io. As a result, page loads are 25% faster and time to market with new web pages and content has improved 30%. As a bonus, the team has also greatly improved its ability to retain and attract new talent. 

## Background

[Cornerstone OnDemand](https://www.cornerstoneondemand.com/) is a public company that helps organizations recruit, train, and manage their people. Its customers include hundreds of the world’s largest companies—from Walgreens and Starwood Hotels & Resorts to Deutsche Post DHL and Western Union, as well as government agencies, hospitals, nonprofits, and schools. Its software and services are used by **over 42+ million people in 192 countries and in 43 languages** to manage the entire employee lifecycle.

Cornerstone relies on its website with 12 international versions to attract potential buyers and convert them into sales leads by providing educational, product, and company information, all while maintaining consistent branding across the web properties. As a software company, it is paramount that the web properties give visitors a fast and pleasant digital experience so they know they can expect the same from Cornerstone products.

As a critical channel for marketing and sales, the web properties are owned and managed by the Cornerstone marketing team. The seven-person web development team responsible for the sites' architecture, performance, and features, works closely with their marketing colleagues, content managers throughout the world, and executive stakeholders. 

Despite their modern design, the web properties relied on legacy code, an outdated content management system (CMS), and a self-managed web server. That is, until some challenges grew too large to ignore, and the team recognized a golden opportunity.

## Challenges

**Slow Performance and Downtime**

As the company continued to grow rapidly, so did its web traffic and content. Unfortunately, the web architecture lagged behind, stuck with an outdated CMS programmed in a language that is declining in usage (PHP), running on self-managed servers. As a result, web visitors experiences slow load times and even occasional downtime, causing potential harm to customer acquisition and the company’s reputation.

**Slow Time-to-Market**

The web development team was eager to resolve issues of performance and uptime, but faced another challenge that slowed them down: The site’s outdated architecture made any kind of technical updates a long and arduous process.

Three particular things slowed down their time-to-market:

* **IT Bottleneck**: Because the site was hosted on a self-managed server, any infrastructure and operational (DevOps) changes had to be requested and done by the company’s IT department, who often had other priorities.
* **Technical Limitations**: The size and age of the architecture limited what the team could do in a reasonable amount of time and with the resources available. For example, automating the change-deployment process took over a year and the assistance of IT. As another example, leveraging a content delivery network (CDN) to improve load times would have required paying upwards of $30,000 per year for additional components and services from a third-party provider.
* **Collaboration Friction**: The existing architecture and tools were not suited for modern, version-controlled (git-based), agile workflows. Developers had to delicately coordinate their work to avoid undoing or breaking one another’s changes. They also had no convenient way to share previews of work-in-progress with executives and marketing stakeholders for feedback and approval.

As a result, many updates were delayed by long review cycles, stuck in support tickets, or halted for troubleshooting. Worse yet, many improvements were never started at all because there was not enough time. “If you can't make changes quickly, then they're not going to happen,” said Eric Johnson, Principal Web Developer.

**Stagnation and Difficulty Hiring**

Naturally, a company focused on enabling employee growth employs people who value their own personal and professional growth. Being hampered by legacy architecture and a high-friction development process left the development team feeling stagnant, and yearning to learn new skills and tools.

> “If we don’t learn and advance, we’ll get left behind or bored,” said Johnson. “I felt like my hands were tied with the legacy platform.”

This was not just a matter of chasing novelty, but a matter of survival. As interest and support for the PHP programming language continued to decline, the development team found it challenging to find job candidates interested in working with a PHP-based technology stack. It took over six months to fill a junior developer role. At this pace the development team would not be able to find enough talent to keep up with the company’s growing demands.

## Solution

When Cornerstone decided to begin a major rebranding project, the development team saw an opportunity to address the challenges plaguing them and the executive team: The website would require a big overhaul as part of the rebranding, so the team could rebuild it from the ground up with new technology that improve performance, accelerate the pace of development, and attract world-class developers.

The internal development team was confident they could improve site speed by 25%. The secret to their confidence was a two-part solution they learned about from personal projects. The first part was [Gatsby](https://www.gatsbyjs.org/), a modern JavaScript framework for building fast websites. The second was [Netlify](https://www.netlify.com/products/), a platform for developing, deploying, and managing performant web applications.

Over the next several months the team began revamping the web properties, starting with the US (primary), UK, Australia/New Zealand, and APAC sites. Right away they made great strides by leveraging several features of Netlify:

* **CDN**: All applications and sites deployed by Netlify are served through a global [Application Delivery Network](https://www.netlify.com/products/edge/) (ADN), resulting in a lightning-fast browsing experience for visitors throughout the world.
* **Branch Deploys**: Deploy multiple versions of the site, synced with branches in the git-based code repository. Branches are used for workflow stages (such as staging, review, and production), experimenting, and for avoiding conflicts during development.
* **Branch Previews**: Each branch, or version of the site, is deployed to a unique URL and behaves exactly as it would when published to the main site. Developers, stakeholders, and contributors can see and test changes precisely as they would appear in production.
* [**Continuous Deployment**](https://www.netlify.com/docs/continuous-deployment/): Netlify syncs to the git-based code repository (such as GitHub), so changes are deployed as soon as code edits are saved, with full version control and rollback ability.
* [**Serverless Functions**](https://www.netlify.com/products/functions/): Add advanced scripts to interact with APIs and perform functions such as processing and relaying sales leads to Marketo, without a backend server.
* **Redirects**: As content is updated and URLs need to be changed, URL redirect rules can be applied within Netlify by editing a simple text file, without any involvement from IT.
* **CMS Integrations**: Netlify seamlessly connects with dozens of CMS solutions, so the development team was able to integrate with [Sanity](https://www.sanity.io/) to meet the needs of marketing colleagues and global content contributors.

Even before the launch of the overhauled website and brand, the team has already proven themselves and their decision to modernize their stack. The results can already be seen and felt by the executive, marketing, and development teams.

## Results

**Performance Without Overhead**

**Page load times have improved by well over 25%, without the high cost of a third-party CDN.** The straightforward architecture, transparent processes, seamless integrations, and out-of-the-box functionality of Netlify allowed the team to:

* Complete the project themselves, without the cost and associated risks of bringing in an outsourced development firm.
* Understand how things work and quickly troubleshoot any issues without waiting for the IT department. “Netlify dumbs it down for me… And I'm OK with that," said Vlad Neyer, Web Development Manager.
* Reuse the architecture for international versions of the site, eliminating repeat work.
* Eliminate the dependency on an IT administrator or a DevOps engineer, since there is no server or infrastructure to manage. 

> “Netlify takes the team build team out of the build process,” said Neyer.

Most comforting of all, the team never needs to worry about performance and uptime again, because Netlify continuously monitors and resolves any slowdowns or availability issues.

**The boost in performance is expected to increase rates of customer acquisition**, especially in APAC markets with large proportions of mobile users, who will be able to find what they need much faster.

**Accelerated Time-to-Market**

Now that Netlify has eliminated friction in the development, review, and deployment process, Johnson estimates that **development tasks and projects now take 30% less time than they did before**.

For instance, the ability to split development work onto parallel and versioned branches lets the team create prototypes without waiting for permission or worrying about breaking something downstream.

The team can get feedback and approval from stakeholders and executives much faster thanks to Branch Previews, which lets reviewers experience an in-progress version of the site exactly as if it were already live.

Besides accelerating the time-to-market of high-priority updates and features, the accelerated pace created time and opportunities to do things that wouldn’t fit into the schedule before. For example, the team is planning to begin an A/B testing program (using the Split Testing capability in Netlify) to optimize conversion rates.

> “We now have the capability to develop easily and quickly. Netlify is a time saver, and a money saver,” said Johnson.

**Enthusiasm from Employees, Candidates, and Executives**

Switching to modern web development best practices and tools also had an effect on the team’s morale and hiring prospects. Whereas previously it took six months to find a developer willing to work with PHP, the team was able to hire two new developers in just two months after making the switch.

Executives, too, are noticing the increased speed and quality of web development work. With their growing enthusiasm, they are beginning to request new and exciting web projects that would not have been possible before, such as more complex functionality and real-time integrations with third-party APIs.

Most importantly, the team is once again excited about their work. They are now learning and utilizing the most modern web development technologies, skills, and methodologies to make a meaningful impact for the organization. To use the words of the Cornerstone slogan, Netlify is helping them and the company realize their potential.
