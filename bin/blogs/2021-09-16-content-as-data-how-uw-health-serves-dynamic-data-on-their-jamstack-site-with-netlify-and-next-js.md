---
title: "How UW Health Serves Dynamic Data on their Jamstack
  Site with Netlify and Next.js"
description: "Learn why UW Health migrated its monolithic Java application to the Jamstack with the help of agency Last Rev. Its new architecture with Netlify, Contentful, and Next.js allows the web team to deploy confidently and ship faster."
authors:
  - Charlotte Dillon
date: 2021-09-20
lastmod: 2021-09-16
topics:
  - case-studies
tags:
  - Case Studies
  - Case Studies
  - Next.js
  - Contentful
  - Jamstack
  - migration
tweet: ""
format: blog
relatedposts:
  - Pan Macmillan Sees 25 Percent Conversion Increase After Migrating to Netlify
seo:
  metatitle: "Content as Data: How UW Health Serves Dynamic Data on their Jamstack
    Site with Netlify and Next.js"
  metadescription: "Learn why UW Health migrated their monolithic Java application to the Jamstack--with the help of agency Last Rev, and how their new architecture with Netlify, Contentful, and Next.js allows them to ship faster."
  ogimage: /v3/img/blog/uwhealthog.png
---

Founded in the early 20th century, the [University of Wisconsin Health network](https://www.uwhealth.org/) well predates the existence of the Internet. But in order to provide best-in-class care to their 600,000 patients, they need their web experience to be as customer-friendly as their medical services. Their website helps connect patients to providers, communicate HIPAA information securely, and manage complex billing. For the web team, this requires lots of content changes, and an easy way to work with highly relational data.  

In March 2020, the team decided to take the plunge to transform their legacy web architecture, written in Java and hosted on premises, into something modern. They needed their site to be reliable, easier to test, and easier to publish to. 

In a conversation at Netlify’s Partner Day, web development agency [Last Rev](https://lastrev.com?utm_source=Netlify&utm_medium=Netlify+Blog&utm_campaign=Netlify+Partner+Summer+Kickoff) went over the details of UW Health’s migration from homegrown Java apps to the Jamstack, and how they’re using content as data to better serve their patients. 

## From Java to Jamstack: A Migration Story

Prior to their [Jamstack](https://www.netlify.com/jamstack/) migration, UW Health had a very complicated web architecture, largely based on Java. They had a homegrown CMS written in Java, hosted on a SQL Server database with lots of on-premise servers and complexity. In addition to their CMS, they’d built a couple of other smaller Java apps to help deliver content to the web application. 

The release process required code updates and rebuilding and deploying using Jenkins, manually orchestrating these deployments to multiple load-balanced servers in a very planned way. All that difficulty led to infrequent site updates.  

Nathan Morris, a DevOps Architect at UW Health, says that right off the bat, the team recognized they wanted a Jamstack approach to keep pace with modern web development trends, and help them fix many of the problems they were seeing, including: 

* *Time-consuming releases*: With their Java-based architecture in place, releasing was difficult. Any release--even just a small copy change--required code updates, rebuilding and deploying via Jenkins, and manually orchestrating these deployments to multiple load-balanced servers. Since it required so much up-front planning, releases were few and far between. 
* *Manually orchestrating on-premise servers*: Managing the servers took up a lot of the web development team’s time, and wasn’t scalable. 
* *Too many exposed endpoints*: Security was also time consuming. Since all content on the site was dynamic, it was accessible to the public itself, and required additional development work to ensure the security.
* *Trouble with editing/collaboration workflow*: With 3 or 4 content editors creating updates each day, there was an expectation that changes would be available soon. The team was not allowed to have a day-long delay, and instead of optimizing their system, found themselves on the hamster wheel of pushing changes across their hard-to-orchestrate configuration.  

These are all common problems, especially for those on legacy systems. The Jamstack would not only free them of the need to manage and scale their own servers, but it could also create easy editing workflows with a CMS, and better security. They also wanted to use [Contentful](https://www.netlify.com/technology-partners/contentful) as their CMS and Netlify as their frontend build and deployment platform, and when shopping for development agencies, sought out a team that had experience with both of those technologies. [Last Rev](https://lastrev.com?utm_source=Netlify&utm_medium=Netlify+Blog&utm_campaign=Netlify+Partner+Summer+Kickoff) is a digital dev agency that focuses on enterprise and e-commerce, with a focus on scalable and extendable Jamstack solutions. 

> “Beyond the technical proficiency of an agency, we wanted a partner we were excited to work with, which is why we went with Last Rev. It seemed like we would enjoy working side by side with them, and we absolutely have.” \
> \
> — **Noah Locke, Director of Marketing Technology at UW Health**

## The Solution: Netlify, Contentful, and Next.js 

With a [Jamstack approach](https://jamstack.org/what-is-jamstack/), the entire frontend is prebuilt into highly optimized static pages and assets during a build process. This process of pre-rendering results in sites that can be served directly from a CDN, reducing the cost, complexity and risk, of dynamic servers as critical infrastructure.

Their new Jamstack site is a [monorepo](https://www.netlify.com/blog/2021/07/08/monorepos-on-netlify-how-docs-processes-led-to-developer-experience-improvements/) with a shared component library. It consists of three deployments: 10,000 pages across 2 locales on the main UW Health site, 3,000 pages on the patient portal, and 17,000 pages on 2 external health libraries.

![](/v3/img/blog/netlify-monorepo-architecture-uwhealth.jpg)

By using this structure, the three projects and their dependencies stay in close sync and a single, atomic commit can be used to update everything at the same time. What’s more, with [atomic commits and immutable deploys](https://www.netlify.com/blog/2021/02/23/terminology-explained-atomic-and-immutable-deploys/#:~:text=When%20paired%20with%20atomic%20deploys,maintained%20in%20a%20known%20state.) offered by Netlify, the development team can deploy (and revert to previous deploys) swiftly, and with confidence. 



The monorepo lives in GitHub, and once new code is merged, Netlify triggers a build. The static elements of the site are then built with Next.js, fetching content ahead of time with Contentful, their primary CMS, as well as two health-specific content systems: KidsHealth and Healthwise. 



This delivers static HTML and assets to Netlify, which then deploys to the Netlify [edge network](https://www.netlify.com/products/edge/). Not only does this mean UW Health doesn’t have to deal with the hassle of managing their own servers, it means their content is served on a scalable, multi-cloud CDN, with performance and security benefits and instant cache invalidation. 

![](/v3/img/blog/uw-health-architecture-case-study.png)



Once a client requests the site, that static HTML is enhanced with client-side JavaScript from third-party tools like Coveo for search and Wistia for video. 



Here’s what this architectural approach allows them to do: 



### Gradually migrate the stack with Netlify Redirects 



Migrating a site this large, with so many dependencies, is no small feat. By using [Netlify’s proxying capabilities](https://docs.netlify.com/routing/redirects/rewrites-proxies/), UW Health didn’t have to migrate everything all at once. Instead, they were able to approach the [migration incrementally](https://explorers.netlify.com/learn/exploring-netlify-redirects/migrations-with-proxies). They were able to migrate high-priority pages to the Jamstack architecture first, and for pages they’re still in the process of migrating, have Netlify proxy those requests back to their legacy infrastructure.



Proxying has also helped UW Health achieve domain cohesion. What the public sees from frontend is actually a smaller number of proxying Netlify sites, which proxy to backend Netlify sites that build and deliver content. 



### Deploy confidently with CI/CD 


Running end-to-end tests is also significantly easier with the current setup. On the previous implementation, the team ran Java-based end tests that they needed to test in a staging environment. With Netlify’s Deploy Previews, CI/CD is baked into the actual build process, with no need to have a separate staging environment and port over changes after the fact.  



The team still uses the Java-based end tests they had before the migration, which are run via GitHub actions on all Deploy Previews. On top of that, [Netlify Build Plugins](https://www.netlify.com/products/build/plugins/) provide additional integration tests on all builds. The UW team is currently using a number of Build Plugins from the [Netlify Plugins directory](https://app.netlify.com/plugins) and even wrote one custom plugin that runs unit tests before a build is complete. If the unit tests fail, the build cancels. 



### Better Editorial Workflows with Deploy Previews 



Because of the code changes required to make site updates, editorial workflows before the Jamstack migration were hard. Any edits took a full deployment of the application. The combination of Contentful as their CMS and Netlify has enabled site editors at UW Health to make content changes on their own, and know that the deploy preview they see is a full, testable, immutable preview of the site. As a dispersed organization, this helps content editors and developers work better together. 



### Serverless Functions Allow for Dynamic Content on a Static Site

While the site is primarily static assets, Netlify serverless functions enhance the site with dynamic capabilities. UW Health fetches live data from lots of third-party sources, like Contentful, Coveo, and PubMed. 



They’ve also built some of their own serverless functions, which are coded in JavaScript and added to the project’s \`/function\` folder. One custom serverless function behind one of their builds catches any not found URLs, and finds a potential match from the list of 15,000 old paths. Another enables content editors to proxy directly from Contentful, which allows them to publish redirects as a piece of content. This frequently happens in the case of vanity URLs needed for marketing or communications. The dev team then uses a serverless function on the backend to connect the client-side JavaScript that needs to be fetched upon site load. 



### Treat Content as Data

One of the biggest changes to the UW Health site is how they think about their relational data. Their “Find a Doctor” database helps connect patients to thousands of providers, each associated with specialized conditions and locations. This is highly relational data that used to be housed in SQL Server. It was easy enough to access the SQL data, but hard to relate it to frontend web content. 

The team realized they could take all their existing data about providers and create it as content in Contentful. They then built a solution in which they leverage their search platform, Coveo, almost as a data layer. 



The solution they built is essentially a UI extension. It performs queries on content, stores them, and then a microservice allows all the content in Contentful to be packaged up in a way that Coveo can index and consume. Then, those saved queries generate content either on the client side or at build time. Not only does this make the site faster, but it also makes managing the data on the backend easier. 



## Migration Results

Here’s an overview of the results UW Health is seeing after the migration: 

* 1 monorepo with 85 components 
* 19 Netlify sites with 3 in production
* 30,000+ static pages with 6 external data sources
* 7-minute build times (with the intention to reduce that by 2 minutes with a future caching layer) 
* usage of 4 Build Plugins 
* 10 serverless functions used with 15,000 redirects 
* 7 web team members  
* 20 marketing team members

![](/v3/img/blog/uw-health-results2.png)

One effect of the migration that’s hard to quantify: the team’s ability to work together. The new architecture is allowing the team to rally around a new set of tools and a new way of developing. Developers used to be off working on their own app, and there wasn’t unity. Now, says Morris,  it’s all hands on deck. Thanks to the help of Last Rev, the UW Health team is empowered to stretch themselves to keep up with newer technologies and the Jamstack ecosystem. With the new architecture in place they’re looking forward to seeing what else they can do.
