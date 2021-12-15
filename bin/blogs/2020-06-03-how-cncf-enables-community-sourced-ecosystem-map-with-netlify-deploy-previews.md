---
title: How CNCF enables community-sourced ecosystem map with Netlify deploy previews
description: Read insights from the Cloud Native Computing Foundation about how
  Netlify enables their community-sourced ecosystem map's workflow.
authors:
  - Netlify
date: 2020-06-04
lastmod: 2020-06-04
topics:
  - case-studies
tweet: ""
format: blog
relatedposts:
  - Environment variables and preview deploys get a boost
  - Introducing Deploy Previews in Netlify
seo:
  metadescription: See insights from the Cloud Native Computing Foundation about
    how Netlify has enabled their community-sourced ecosystem map's previews and
    developer workflow.
  metatitle: How CNCF Enables Crowdsourced Ecosystem Map with Netlify Deploy Previews
  ogimage: /v3/img/blog/cncf-landscape-map-2020.jpg
---
The [Cloud Native Computing Foundation](https://www.cncf.io/) (CNCF) serves as the home for many of the fastest-growing projects on GitHub, including Kubernetes, Prometheus, and Envoy. It also has over 550 members including the world’s largest public cloud and enterprise software companies. The idea behind the CNCF is to foster collaboration between the industry’s top developers, end users, and vendors.

To do that — and to give others more insight and accessibility into these emerging technologies — Dan Kohn, former executive director of the CNCF, (along with Repoint Ventures and Amplify Partners) created the Cloud Native Landscape.

![CNCF Cloud Native Interactive Landscape visual](/v3/img/blog/cncf-landscape-map-2020.jpg)

*Caption: [CNCF Cloud Native Interactive Landscape](https://landscape.cncf.io/)*

## What is the CNCF Landscape?

The CNCF Landscape is an interactive, comprehensive “image map,” which attempts to cover all of the active and emerging cloud-native technologies.

It acts very much like a directory, where you can search and filter hundreds of cloud-native projects and products. Within it, you can review details including GitHub stars, funding or market cap, first and last commits, contributor counts, headquarters location, and recent Tweets.

Today, the Landscape provides the world with the most up-to-date information about the top cloud-native technologies, and it continues to evolve every hour.

## The challenges

In the beginning, the Landscape required a lot of manual maintenance.

To keep the Landscape up-to-date, Dan had to spend hours searching for company news, logos, and other pertinent information. Once he had it, he then had to spend more time manually updating that information for hundreds of companies.

On top of that, new projects were coming in all the time—about two per week—which quickly became problematic.

To lower the maintenance burden, Dan and his team believed crowdsourcing the updates could be a helpful solution. But without being able to preview updates live, breaks would inevitably happen, which would create more work in the long run.

While searching for solutions, Dan looked to Kubernetes, another CNCF project that was using Netlify to keep their complex, fast-evolving site up-to-date. Dan tells us, “playing with [kubernetes.io](https://kubernetes.io/) and just getting to know how to make documentation fixes is what made me realize that we could use Netlify for the Landscape.”

Believing he had found the right solution for the Landscape, Dan signed up for Netlify to get the ball rolling.

## Lifting the maintenance burden, while significantly lowering overhead

To truly lower overhead, the Landscape needed two things:

*First*, there was the crowdsourcing component. Having contributors make updates was great, but without being able to see how those changes would affect the code was a recipe for disaster.

With [Netlify](https://www.netlify.com/enterprise/), the team began using Staging Previews, which allowed them to see contributor updates in action before they went live. 

This one improvement significantly reduced the time Dan and his team would spend on fixing issues associated with contributor updates. Now, all Dan has to do is view an update, make sure it looks good, and click “Approve.” 

According to Dan, the staging previews are the key value for him and his team: “Anyone can suggest changes and improvements and confirm those changes look the way they’re supposed to,” Dan explained. “Staging Previews are a useful way to involve content editors, PR professionals, investors, advisors, and other non-developers in adding to the project, as the new real-time previews make using Git and GitHub much less intimidating.”

The *second challenge* was the issue of manual updates. While it was incredibly important to keep each company’s information up-to-date, it was taking far too much time, especially as new projects continued to join.

To help eliminate that pain, the team now uses a nightly script that fetches the latest company information, which is then automatically re-deployed via Netlify.

This means the Landscape is never more than 24 hours out-of-date, which essentially eliminates all of the previous burden Dan and his team were experiencing.

These two changes, while seemingly simple, created two significant results:

Not only has overhead been lowered and productivity boosted for all contributors, but Dan now has the time to focus on the more meaningful parts of his job, like organizing events, consulting on projects, advising startups, and more. 

## Now the Landscape operates smoothly without additional staff or support

According to Dan, without Netlify, “we would have needed more developers to share previews and make sure that changes worked. We would’ve needed more support and more staff in order to manage the flow of external contributors.”

“Things like preview requests would be very challenging. The whole app is crowd sourced, which means we’ve had hundreds of submissions from people who had fixes for it. So, I don’t quite know how we could’ve seen that through.”

## Today, Netlify is the recommended tool for all incoming CNCF projects

New projects join the CNCF every week, each of which has a web property with information, documentation, and a community for the project. Dan helps all incoming projects switch to Netlify so they could enjoy the same benefits, such as Helm.sh with its extensive documentation with many contributors, blog, and product directory. While it’s not a requirement for maintainers to use it, Dan says, “Netlify sells itself—it scales to support any amount of complexity we add to our site, while reliably serving the pages from their global Edge network.”
