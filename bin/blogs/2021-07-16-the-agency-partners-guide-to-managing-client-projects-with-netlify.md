---
title: The Agency Partner's Guide to Managing Client Projects with Netlify
description: "Learn best practices for managing client projects on Netlify: A
  guide for web development agencies. "
authors:
  - Bradley Johnson
  - Sarfaraz Rydhan
date: 2021-07-19
lastmod: 2021-07-16
topics:
  - tutorials
tags:
  - Partners
  - enterprise
tweet: ""
format: blog
relatedposts:
  - How Technology Vendors can Partner with Netlify to Build Better Jamstack
    Sites
  - Global Agencies are Teaming Up with Netlify for Jamstack Websites and Web Apps
seo:
  metatitle: The Agency Partner's Guide to Managing Client Projects with Netlify
  metadescription: "Learn best practices for managing client projects on Netlify:
    A guide for web development agencies."
  ogimage: /v3/img/blog/agency-partner-guide-og.png
---
At Netlify, we know there's strength in numbers. One of the most powerful parts of developing on Netlify is the vibrant ecosystem of agency partners delivering Jamstack projects for customers large and small. [Netlify agency partners](https://www.netlify.com/partners/agency/) are active participants in the Netlify community, suggesting improvements to our developer experience and educating clients about the productivity and performance benefits of developing web apps on Netlify.

After working together with so many world-class agencies, we've learned a few things about how our agency partners should best manage clients' projects on Netlify.

In this guide, we've compiled all the best practices to set your agency up for success when managing these projects with Netlify.

## 👩🏽‍💼 **Pitching** the project

Every great project first starts with a pitch. Here's how to ensure your next pitch is primed for success:

### Create an Agency sandbox

To help clients understand what to expect when hosting with Netlify, we recommend agency partners set up their own Netlify agency account. That's where you can build proofs-of-concept and demos for the clients you are pitching.

Some of our agency partners call this their "agency sandbox" and they use this space to prototype and try out new ideas. There are [multiple licensing options](https://www.netlify.com/pricing/) for creating your agency account: Starter (Free), Pro, Business, or Enterprise.

Having an agency account for your internal team is a good idea because it's a place for your team members to get familiar with Netlify, develop expertise, build internal projects, hold team hackathons, host documentation, or even your company website.

But don’t put clients’ production projects here! Running multiple different client production projects in the same account can be a recipe for confusion, and makes it difficult to troubleshoot issues or estimate billing for each client.

### Include technology fees in SOW

When determining which Netlify License is appropriate for your client's project, you'll want to consider certain indicators like the project scope, the client's brand profile, required support needs, and any [commercial requirements](https://www.netlify.com/enterprise/) such as a 99.99% uptime SLA, legal or security reviews, custom billing or invoicing, or a Master Service Agreement. You should approach your client and determine their needs with them.

In addition, what do you need to be successful on this project? Netlify can provide you collaborative project support with an engagement team that is committed to the project’s success at each stage. As you review these options let the Netlify Partner Team know when you’re working a deal and get advice on a suitable plan.

Once you've determined the appropriate Netlify license for your client, make sure to include any technology fees in your SOW so all expenses are transparent to the client.

![](/v3/img/blog/pitching_the_project.png)

## 💰 **Winning** the project

Congratulations! You won the big client project, now what? It's time to create a Netlify account for your new client so you can kickoff development.

### Setting up your client's account

It's a good idea to keep the strategy “new client, new account” in mind when you win.

To set your new project up for success, you'll want to ensure your client has a dedicated account for all their projects.

Typically, this works one of two different ways:

1. Your agency creates and manages a Netlify account for the client
2. The client creates a Netlify account / or the client has an existing Netlify account

At this time you should reach out to the Netlify Partner Team about configuring this account with the appropriate Netlify license.

If you need to transfer an existing site from your agency sandbox, you can [self-serve transfer](https://docs.netlify.com/accounts-and-billing/team-management/team-owned-sites/#transfer-sites-between-teams) to Netlify.

### "new client, new account"

By creating a dedicated account for each client, you avoid mixing or needing to manage data from several customers in one single account. Even more importantly, having dedicated accounts per client ensures your agency won't take on unnecessary compliance, data privacy, and security risks.

Dedicated client accounts make it easy for your clients to take ownership of their account anytime in the future. They might want to develop internally or hire another agency for some work and it’s a better client experience for them this way.

Lastly, dedicated client accounts better enable the Netlify team to support the client in a more personal and professional way.

> 📣 **Did you know?** Netlify introduced Teams in 2017, enabling agency users to contribute to, manage, and easily navigate between different client projects in an organized way with a single Netlify login.

![](/v3/img/blog/winning_the_project.png)

### User management

Once your client's account is set up, it's time to think about which people to add to your team. You'll want to make sure to add your development team, stakeholders from your client's team, and assign a billing admin for the account. You can [read more about managing members on a Netlify account](https://docs.netlify.com/accounts-and-billing/team-management/manage-team-members/) in our docs.

To better prepare for project handoffs or change of ownership, we recommend adhering to the following best practices:

1. **Ensure your client owns the billing** This avoids surprises about billing and account usage and makes for clean project handoffs or changes of ownership.
2. **Ensure your client is an admin** This ensures your client can add users on their team with the appropriate permissions, and ensures Netlify is able to support your client if needed.

## 🤝 How agency teams **collaborate during** **Development**

[Deploy Previews](https://docs.netlify.com/site-deploys/deploy-previews/) allow you and your team to experience changes to any part of your site without having to publish them to production. Netlify builds Deploy Previews by default for GitHub pull requests and GitLab merge requests. You can control whether or not Deploy Previews are generated for pull/merge requests. For more information, visit the [Deploy Preview controls docs.](https://docs.netlify.com/site-deploys/deploy-previews/)

Netlify recently announced the launch of [collaborative Deploy Previews,](https://www.netlify.com/blog/2021/05/19/next-generation-deploy-previews-plus-netlify-acquires-featurepeek/) which enables users to share, review, and manage feedback on web projects. Packed full of handy tools for reviewers to record their screen, take screenshots, or open the preview on a mobile device to test mobile responsiveness and even use the collaborative features on mobile devices. For now, collaborative Deploy Previews are only supported for GitHub organizations, but GitLab support is coming soon!

### Working with your internal team

For contributors on your agency's team, hopefully, you've already added them to your Netlify account during account setup. You must be signed in to Netlify and be granted access to collaborate on a Deploy Preview.

When you send a Deploy Preview to a collaborator on your team, they'll be able to leave comments directly within the Deploy Preview using the [Netlify Drawer,](https://docs.netlify.com/site-deploys/deploy-previews/#netlify-drawer) and their feedback will automatically sync back to the pull request or to project tracking tools like [Clubhouse.io](http://Clubhouse.io), Linear, or Trello.

### Working with your client’s team

To make it easier for client's to leave feedback, Netlify also introduced a new role called a Reviewer, which is ideal for sharing progress and gathering feedback from your clients

The Reviewer role is completely FREE, so it won’t impact billing. You can add an unlimited amount of reviewers to your team, and they will have access to the collaborative tools on Deploy Previews. Reviewers can only view the Deploy Previews that you’ve invited them to, and you don’t even need a GitHub account to become a reviewer.

Adding Reviewers is frictionless - there's no setup necessary for your clients. They only need to set up a Netlify account to log in.

If your client prefers to [preview changes without the Netlify Drawer,](https://docs.netlify.com/site-deploys/deploy-previews/#preview-changes-without-the-netlify-drawer) you can opt out of loading the Netlify Drawer by visiting your Site settings. You can also open a [branch deploy or deploy permalink](https://docs.netlify.com/site-deploys/overview/#branches-and-deploys) if you need to preview a deploy but don't want to access any of the collaboration features. Both links are available in the Netlify Drawer under Settings or on your site’s Deploys page in the Netlify UI.

![](/v3/img/blog/collaborating_during_development.png)

## 🚀 Getting ready to go live

Ready to go live? There are a few more things to consider before you're ready to deploy your client's project to production.

### Install guardrail plugins

To be sure your project is ready for the big time, [consider installing some plugins](https://www.netlify.com/products/build/plugins/) to help test and manage your client projects.

* **Lighthouse** - check the performance of your site before deploying
* **Cypress** - test your site, run end-to-end testing (are the images displayed correctly, etc)
* **Sentry** - trace back each deploy to when things started to break, what code cause specific changes

### Set up the DNS & SSL

You'll also want to plan for any DNS and SSL considerations before you go live. For example:

* **Plan for SSL cert provisioning** - SSL Certificates are automatic with Netlify, but not instant. If you want to avoid any downtime, you need to bring a custom SSL certificate.
* **Configuring DNS on Netlify Standard Edge** - You may need to [set up custom domains](https://www.netlify.com/docs/custom-domains) or [use an external DNS.](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/)
* **Configuring DNS on Netlify High-Performance Edge** - If you chose to upgrade to Netlify High-Performance Edge (HPE), you'll want to ensure that your site is properly hosted there. Leverage Netlify's Support team to assist with DNS configurations and avoid downtime. You can create a support ticket.

## How Agency Partners get the most from Netlify

We're always excited to help our agency partners develop better sites and win new projects. The Netlify Partner Team is your central path into Netlify, including client project and co-selling support from Netlify as well as resources for your teams. We love showing up as your partner, so let us know when you’re working a deal. And we want to make our partners famous so share win-stories with us too.

Reach the Netlify Partner Team at [partnerteam@netlify.com](mailto:partnerteam@netlify.com) or learn more about the [Netlify Agency Partner program and its benefits.](https://www.netlify.com/partners/agency/)
