---
title: >-
  JAMstack_conf NYC session recap: Citrix delivers better UX with less overhead
  using JAMstack and Netlify
description: >
  At JAMstack_conf NYC in April 2019, Beth Pollock and Luis Ugarte of Citrix
  shared their journey from a legacy web management system to the JAMstack
  powered by Netlify, resulting in a 65% cost savings and a significantly
  improved user experience. 
authors:
  - Lauren Sell
date: '2019-06-12'
topics:
  - case-studies
tags:
  - Jamstack
tweet: ''
format: blog
---
At [JAMstack_conf NYC](https://jamstackconf.com/) in April 2018, Beth Pollock and Luis Ugarte of Citrix shared their journey from a legacy web management system to the JAMstack and Netlify. They executed a massive migration in mere months--ahead of schedule--resulting in a **65% cost savings** and a significantly better user experience, measured in faster page loads, faster publishing times and improved customer satisfaction. 

Video from Beth Pollock & Luis Ugarte, JAMstack Conf NYC April 2019: 

<iframe width="560" height="315" src="https://www.youtube.com/embed/kvS5h5domf0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Meet the Citrix team

Citrix’s docs.citrix.com is home to business critical product documentation for 15 products and all related components. It serves more than 3.5 million users annually, including Citrix tech support and partners, as well as enterprise administrators.

More than 50 content contributors, distributed globally, publish technical documentation to the site. Content is localized in eight languages.

## Challenges

From 2007 to 2015, the Citrix documentation site used proprietary editing software with DITA-structured XML, a common pattern in technical authoring. Then, as part of an initiative to use the same toolset across all web properties, they migrated to a monolithic web-based enterprise CMS. 

The enterprise CMS took more than a year to roll out, but ultimately fell short. From a user perspective, it resulted in slow response times, no real PDF support, and subpar search. The content contributors faced broken localization workflows, publishing challenges and diminished efficiency. And the platform team, who is responsible for the experience of both users and technical authors, were also challenged by a huge ongoing financial investment, no useful audit trail and frequent platform changes. 

## Solution

Beth Pollock, Senior Principal Information Development, and her team of platform engineers decided they needed a better, more agile and easier to use system. First they had to stabilize and enhance the legacy enterprise CMS platform, and then consider how to replace the legacy system by treating docs as code. 

Their primary goals for the new system were lower total cost of ownership, an improved user experience and better content development. Additional requirements included the facilitation of crowd-sourcing, use of common tools, automated QA and publishing, and multi-publishing outputs. 

Before embarking down a new path, Citrix first ran a pilot in January 2018 using the following mix of technologies: Netlify as the platform, Visual Studio Code for authoring, Markdown for markup, Bitbucket for version control, Jekyll as a static site generator and Jenkins for automation. Overall, the approach was much more modern and lightweight than the legacy CMS and required much less overhead from her team to deploy and maintain.

> In choosing Netlify, Beth said other competitors “didn’t come close” in meeting their needs to scale and performance, including page views, data, and number of deploys per day. Netlify also provided the best support option for their global team. And they were able to complete the migration with one administrator.

Following the initial proof of concept, one of the technical authors commented, “It’s so easy,” and “OMG! Fast builds!”

## Results

The initial plan was to migrate to the new platform by October 1, 2018, but that deadline was actually moved up to July 1—and met! The migration went “beyond our expectations,” according to Beth, and site visitors had a seamless experience as they straddled both the legacy and new environments during the migration. Word spread and other teams “were pushing to be next, lighting up our Slack DMs,” which rarely happens during migrations. 

The total migration involved **more than 150,000 files in eight languages**, supported 50 authors and six translation project managers. Content is now divided into 80 repositories of English content and dozens more for other languages.

With Netlify, Citrix has 120 microsites in production and 120 microsites in staging, creating a seamless integration with each content team working without interference from others. Fifty percent of the content migrated within five months, and it could have been more if not for other business considerations, compared to the year it took to migrate the legacy platform.

The new JAMstack platform powered by Netlify is 65% less expensive than the legacy CMS in part because of reduced licensing costs, far fewer server and infrastructure requirements, less required IT support and reduced agency partner costs regarding developer talent. The savings does not even reflect the soft costs related to efficiency, author productivity, and reduced support burden due to increased customer satisfaction.

In addition to significant cost and time savings, results of the migration to JAMstack using Netlify include:

* **Agility.** Changes can easily and cheaply be made to the front or back end, which was not possible with the legacy system.
* **Improved performance.** Average page load times improved by 7%, average page download times improved by 9%, average server connection time improved by 57%, average redirection time improved by 71% and publishing times average five minutes vs. about 20 minutes common with the legacy system.
* **Increased user satisfaction.** Before JAMstack with Netlify, 41% of surveyed users said they wanted a better user experience. That dropped by 65% after the migration.
* **Better search.** Site search and indexing were subpar with the legacy platform, but now use the power of Google and custom search.
* **Enabling offline work.** With the legacy CMS, one could not work offline and authors lost time and work if servers went down. Now all work is offline, with syncing handled with Git.
* **PDF output.** PDFs are built from source along with the site, so they are always in sync with HTML.

## Conclusion

**Working with Netlify, Citrix was able to migrate its entire product documentation site to the JAMstack with one admin, beating its initial deadline by three months.** The result was not only 65% cost savings, but significant improvement for both the user experience and content contributor experience. Pages are served up faster, easier to search and reference, and technical authors are more productive with a streamlined workflow.

Join as at the upcoming JAMstack_conf events in [London, July 9-10](https://jamstackconf.com/london/), and [San Francisco, October 16-18](https://jamstackconf.com/sf/), to hear more case studies about companies moving to the JAMstack.
