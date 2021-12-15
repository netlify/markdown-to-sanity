---
title: "From WordPress to Jamstack: ButcherBox Moves to Headless Commerce"
description: ButcherBox transitioned from a monolith to the Jamstack
  architecture, improving page speed and performance. Learn how its page speed
  went from 4 seconds to under 1 second.
authors:
  - Netlify
date: 2020-10-13
lastmod: 2020-10-12
topics:
  - case-studies
tags:
  - Jamstack
  - E-commerce
  - Headless
tweet: ""
format: blog
relatedposts:
  - How Fostr used Shopify and the Jamstack to power e-commerce on Victoria
    Beckham Beauty
  - "Watch the Videos from Headless Commerce Summit: E-Commerce Jamstack stories"
seo:
  metatitle: See How Netlify + Gatsby Bring Responsiveness to E-commerce Startup
  ogimage: /v3/img/blog/og-butcherbox.png
  metadescription: This ButcherBox case study dives into benefits of the Jamstack, including improved page speed and performance, faster time-to-market using Netlify, and security improvements.
---
## Netlify and Gatsby bring agility and responsiveness to a fast-growing e-commerce startup.

E-commerce web development teams that value agility and speed to market are becoming more interested in headless commerce. This architectural approach separates the frontend from the backend of an e-commerce app stack. Headless commerce lets teams build and evolve apps in a flexible environment, delivering the agility they need to improve customer experiences by iterating new features without worrying as much about how individual changes would impact a monolithic web app.

Let’s talk about one company’s transition from a monolith to the [Jamstack](https://www.netlify.com/jamstack/) architecture, reducing complexity by separating the front and backend.

![ButcherBox logo](/v3/img/blog/butcherbox-logo.png)

Recently, ButcherBox, a delivery service for quality meats, otherwise known as the neighborhood butcher for modern America, made the transition from a PHP monolith to the Jamstack. The company had started out with WordPress, allowing them to move quickly to market. It was easy to hire developers who knew PHP and jQuery, and it was great for nontechnical content collaborators to use the WordPress CMS. Jeff Gnatek, head of engineering at ButcherBox talked about the [Butcher Box journey to headless commerce](https://www.youtube.com/watch?v=pGjEz9bVoos) with Jamstack and Netlify at the Headless Commerce Summit 2020. This story dives into benefits with the Jamstack, including:

* Improved page speed and performance
* How a site can get up and running within an hour using Netlify
* Security improvements realized

<iframe width="823" height="463" src="https://www.youtube.com/embed/pGjEz9bVoos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Outgrowing Monolithic WordPress

Business needs at fast-growing ButcherBox soon outgrew the plugin ecosystem. So the web development team started to build custom PHP, but as complexity grew, page-load performance suffered. The company had deployed a mix of frontend and backend code with a single PHP file—which was rather usual at the time but quickly proved problematic. The team also relied on session state for saving data across a user’s page visits if they were, for instance, completing a multistep form. It was also hard to share components across different pages: while there are many options available in the PHP ecosystem, none used React.

# Stack Choices and Results

ButcherBox decided to move to a headless commerce architecture, and it separated the core business functionality from the ephemeral content, effectively separating the product catalog, inventory, merchandising, and promotional ads. One of the goals was to dramatically improve page performance over the old, monolithic stack.

Marketing content was transitioned to Contentful, Laravel Nova replaced WordPress admin, and Gatsby was selected for the new, component-based front end. TypeScript was chosen to reduce bugs from type coercion issues, and Cypress was used to test the new frontend. Netlify was used to support rolling out the newly rearchitected e-commerce application components one at a time, without impacting the original site as the transition unfolded.

## Speed and Performance Gains

ButcherBox was able to separate different parts of the site and have shared components that Netlify builds independently of each other. Page speed went from around four seconds to under one second, owing to the use of Netlify and Gatsby. “The user experience of the new member page is near instantaneous,” recalls Gnatek. “Previously, if users tried to transition from page to page, they would have to wait for the server to respond. And if there happens to be a slow API response, the team can share a loading state on the page, because studies show that if you can show a partially rendered page first and then have blocks of that page come in as they're ready, users still perceive this to be faster than just blocking the entire render of the page until the server is ready.”

## Getting a Site Up and Running Within an Hour Using Netlify

A specific example of how the combination of Netlify and Gatsby helped ButcherBox is the company’s Farms.ButcherBox.com project. Conceived as a pandemic resource when meat was scarce in grocery stores, the company needed to create a directory of local farms that offered food like ButcherBox, and it had only a few days to deliver the service. Using Netlify, Gatsby, and Contentful, Gnatek quickly got an initial site running—in about an hour. “The Netlify experience, paired with Gatsby in Contentful, is amazing. There's very little to do besides click a few buttons and get your GitHub repository configured.”

Gnatek delivered the farm directory in three days, powered by an Excel file of farms and offerings that the business team had compiled. A Node script used the .CSV file and created Contentful content types. The team was able to hand off maintenance to nontechnical team members, and the stack required no special servers and no DevOps team: Gnatek delivered the entire project over the course of three evenings.

![ButcherBox- ig image](/v3/img/blog/butcherbox-instagram-image-cooked-fowl.png)

## Things to Consider when Transitioning Architectures

The ButcherBox experience highlights several things to consider. First, do you really need to underpin the server side? For instance, you might have to dynamically render a page completely based on the user that visits it. For ButcherBox, most pages could be pre-rendered, and the parts that still needed to be dynamic could be rendered on the fly using the API.

Another question to consider, is whether it is okay if content takes a few minutes to propagate during a build cycle. Users are often accustomed to querying a web page and getting instant results from the database, but in the Jamstack that may not happen unless the page reaches out to an API. So if there's something that needs to be fairly instant, you're going to have to still keep that dynamic. Gnatek points out, “That doesn't mean that you can't use the Jamstack, but it means that you probably don't want to pre-render it.”

Also, do you already have an API or a different source of content? The Gatsby framework uses sources that allow you to quickly pull in WordPress posts or CSVs or APIs and generate pages. “We didn't have an API, but it was the right decision for us to make one,” recalls Gnatek.

Sometimes, building a separate API in the front end can create significantly more work. The ButcherBox team believes that building a solid API is always a great investment, but every ecommerce business—and budget—is different.

Gnatek also points out that users can become more dependent on third-party services. “The convenience you get comes at the cost of depending on the reliability of those services. Honestly, I think this is actually more of a plus than a minus, because I would prefer to defer to third parties who specialize and let us focus on what we do best.”

Finally, the ButcherBox team points out that complexity can shift to the frontend in a statically generated site. This isn't necessarily a problem, but you might think about hiring people with those skill sets.

## Security No Longer a Concern

Gnatek calls attention to plusses worth considering. ButcherBox gains improved security from static hosting. “We're not exposing a whole PHP server to the internet with the traditional security vulnerabilities that come along with that. We just have our API behind a web application firewall.”

- - -

Have a project in mind? One of our experts would love to [talk with you](https://www.netlify.com/enterprise/contact/) about the use-case and requirements.