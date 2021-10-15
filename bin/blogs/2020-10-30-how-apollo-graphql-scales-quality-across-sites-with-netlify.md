---
title: "How Apollo GraphQL Scales Quality Across Sites with Netlify "
description: Learn about how Netlify grew from an experiment to a core strategy
  for Apollo GraphQL. Revamping its internal site architecture made its team
  more efficient and impactful.
authors:
  - Netlify
date: 2020-11-05
lastmod: 2020-11-04
topics:
  - case-studies
tags:
  - graphql
tweet: ""
format: blog
relatedposts:
  - Advice from a GraphQL Expert
  - GraphQL with Hasura and Nuxt
seo:
  metatitle: How Apollo GraphQL Scales Quality Across Sites with Netlify
  metadescription: Learn how Netlify grew to a core strategy for Apollo GraphQL.
    Revamping its internal site architecture unlocked powerful ways to iterate
    and improve how they serve devs.
  ogimage: /img/blog/og-apollo-graphql-case-study.png
---
An experimental project can become a core part of your business. All it takes is a window of opportunity to see what might happen if you pursue that idea that tends to get filed away to the next development sprint.

Apollo GraphQL started with a single project, moving their marketing page over to Netlify. They could have stopped there and called it a day after a successful migration. But, Apollo’s Developer Experience team remained on the lookout for ways to build the ideal experience for the developers they serve.

By revamping Apollo’s internal site architecture, the Developer Experience team unlocked powerful new ways to iterate and improve the way they serve developers, while making their own team more efficient and impactful.

Slowly, and then all at once, Netlify grew from an experiment to a core strategy for Apollo.

## Background: Apollo GraphQL

[Apollo](https://www.apollographql.com/) builds tools developers use everyday to corral, fetch, and populate data across apps, websites, databases, and microservices. Developers rely on Apollo to manage all their data sources in a unified data graph, and keep that data up to date.

Instead of wrestling with different REST APIs and writing code to grab data from those APIs, developers can simply ask Apollo to fetch the data they need without the heavy lift other services require.

## Challenges

As a company that is founded on making data management simple and scalable, Apollo takes the same approach when it comes to their documentation.

“Our team’s mission is to inspire and equip millions of developers to be successful with Apollo. Obviously, there’s many different ways we tackle that. Our documentation is probably one of the most important ways,” says Peggy Rayzis, engineering manager at Apollo and leader of the Developer Experience team.

The clearer Apollo’s documentation is, the more successful developers will be. Peggy focuses on ensuring that Apollo’s developer documentation is interactive, reliable, and above all else, iterative.

“Making sure our documentation is able to be updated quickly is very important to us. Making sure it’s always up and it’s reliable, that’s important to us being able to iterate and add new features to our documentation,” says Peggy.

While some companies approach developer-facing docs as a one-way transaction in which developers use the documentation that’s handed to them, and then wait for a company to improve those docs down the line, Apollo takes a more transparent, communal approach.

As a company deeply committed to open source, Apollo encourages their community of developers to contribute to their docs. In fact, the Apollo team interacts with 1,200+ open source contributors across Apollo Client (JS, iOS, Android), Apollo Server, and the Apollo CLI. So, Apollo focuses not only on the quality of their documentation, but the quality of experience developers have when contributing to their documentation. Trevor Blades, senior software engineer at Apollo, is responsible for continuously improving that experience.

In 2018, at Apollo’s GraphQL summit, Trevor proposed changing a navigation feature in the docs to Peggy. The two realized that the small feature change would entail a lot more work than they realized. That’s when they had the seed of an idea to move the docs over to Netlify. The only problem was that their docs were already working so well.

“When we were first doing it, there wasn’t a lot of buy in,” said Peggy. “We heard, ‘We have documentation that works, why do we need to rewrite it?’ I said, ‘Trust me, this is going to make a difference.’”

Spoiler alert—she was right.

## Solution: Investing in Netlify and Iterative Documentation

The Developer Experience team was confident that their investment in Netlify and improving their documentation would pay off. To help spread that same sense of confidence, they used **[Netlify’s Deploy Previews](https://www.netlify.com/products/build/)** to show their coworkers exactly what the revamped docs would look like before they were live.

This helped win over those team members who might have been on the fence before the migration. It also helps the Developer Experience team vet changes from external contributors before pushing them live on the site.

“We really enjoy Netlify Deploy Previews. It makes it super easy for developers who are contributing. A lot of our documentation is open source, so being able to see those changes right there with the Deploy Preview link is super impactful,” said Peggy.

When the Developer Experience team brought their newly revamped docs pages into production, their developer community and their coworkers saw the impact of their investment. Apollo could now update their documentation seamlessly, and empower their community to contribute in a friction-free manner.

“The company as a whole has just been really impressed with the quality of our documentation,” said Peggy.

The Developer Experience team used this momentum to expand their use of Netlify across their blog, microsites, product sites, and conference page. By making Netlify a key component of their site infrastructure, they found a way to make an outsized impact with a small, but mighty team.

## Building with Gatsby and Netlify

Trevor Blades is responsible for about 15 out of more than 50 different Apollo web properties running on Netlify. While that might seem like a herculean task for one person, Apollo developed a system to expand their reach while maintaining dexterous control of each web property.

On a typical day, Trevor might be spinning up a new microsite, helping a coworker troubleshoot the way a GIF displays on a blog post, or reviewing pull requests. His work extends across Apollo’s developer, marketing, and operations teams.

Many of Apollo’s Netlify-powered sites use the same [Gatsby](https://www.netlify.com/with/gatsby) theme, giving Trevor a more streamlined way of controlling multiple websites across Apollo’s web infrastructure. Instead of working alongside a backend engineer, Trevor has the freedom to tackle entire parts of website development himself.

“We’ve had a big focus on reliability and ensuring that the end result is what we expected it’s going to be,” said Trevor. “We’ve iterated rapidly on the underlying web infrastructure. We like to use cutting edge technologies, so we’re constantly pushing forward that speed and quality metric on our end. What we expect and depend on Netlify for is that uptime, availability and consistency between builds.”

He built new custom newsletter signup forms for Apollo without dusting off his backend chops. Instead, he used **[Netlify Functions](https://www.netlify.com/products/functions/)** and **[Netlify Forms](https://www.netlify.com/products/forms/)** in conjunction with Apollo’s component-based architecture to cover more ground despite being a one-man team.

> “Netlify has allowed our team to be able to do so much with only one engineer,” said Peggy.

> “That's really another reason why we use Netlify as well—the ease of developer experience and being able to do more with less people.”

## Architecting the Ideal Documentation Experience

Apollo is pushing the envelope of website architecture as a tight knit, hyper-productive team. One of their most ambitious projects was finding the right balance between the way they host their documentation and the way they let their community contribute to their docs.

Peggy and the Developer Experience team wanted to host their documentation in the repository where their code lives. That way, it’s much easier for contributors to interact with code and submit pull requests. But, this can be extremely tricky when you also want to have your company website act as one-stop shop for all of your documentation, as opposed to a scattered network of GitHub repos.

Debating between fragmented documentation hosting where individual bits of code live in their own individual repos, and a more cohesive documentation architecture where all code is in one place, but further away from their respective repos - Apollo chose neither option.

Instead, Apollo used **[Netlify as a proxy to redirect users to individual repos](https://www.netlify.com/blog/2020/06/16/building-large-sites-on-netlify/)** while hosting the entire experience on their website. Now, users can get to specific docs sites, and specific repos without leaving Apollo’s domain.

![visual representation of Netlify implementation/web stack - Apollo GraphQL](/img/blog/apollographql-netlify.png "Netlify implementation/web stack - Apollo GraphQL")

“The company trusted in us to be able to move fast. We were able to kind of use what we had learned from building the documentation to then build other properties,” said Peggy. “Even though we're adding more surface area, we've still been able to maintain that quality.”

“Now, our website router is like the backbone of our web properties,” added Trevor.

They are able to manage 75-100 changes across their docs sites alone per month.

## Expanding reach, backed by Netlify

Apollo continues to make room for the experiments, projects, and ideas that could open the door to a breakthrough for their company.

They’re set to launch a new Netlify-powered Developer Hub and other projects in the near future. As Apollo expands their reach and works to serve their developer community, they’re confident they’re building on the right platform.

“You want to feel like the team behind the product that you're using has your back and has invested in your success and wants to see you shine. I definitely feel that way with Netlify,” said Peggy.