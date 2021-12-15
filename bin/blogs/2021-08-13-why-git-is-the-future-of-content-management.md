---
title: How Git Can Power an Exciting Future for Content Management
description: What is a Git-based CMS? This article explores the new type of
  content management system that is enabling Git workflows for content editors.
authors:
  - Mike Neumegen
date: 2021-08-31
lastmod: 2021-08-31
topics:
  - insights
tags:
  - Git
  - CMS
  - headless cms
  - CloudCannon
  - content
tweet: ""
format: blog
seo:
  metadescription: What is a Git-based CMS? This article explores the new type of
    content management system that is enabling Git workflows for content
    editors.
  metatitle: Why Git is the Future of Content Management
  ogimage: /v3/img/blog/git-cms-og.png
---
*This post is contributed by [Mike Neumegen](https://twitter.com/mikeneumegen), CEO of CloudCannon.*

<hr>

Git has forever changed how developers collaborate on software. It's now almost a given that a software development project will use the distributed version control system. But if it's so powerful, why are developers the only people using Git? Imagine how powerful a collaborative Git workflow can be for a content team, who add, remove, edit and subedit their content on a daily basis. Enter the Git-based CMS. This article explores the new type of content management system that is enabling Git workflows for content editors.

## Why do developers use version control?

Almost all software projects will use a version control system (VCS). Why is that? We have platforms like Dropbox, Box, and Google Drive for backing up and sharing files, so why not use those? It comes down to three core reasons:

### Collaboration

When multiple people edit a file simultaneously with Dropbox, the last person who saves is the one who has their changes reflected. Stomping on your colleague's changes is not a great path to workplace collaboration. Google Drive does a better job of this with live editing. You can see which parts of a document other people are working on and write content simultaneously.

Version control takes this a step further with branching. Developers can work on a copy of a project in isolation, then merge their changes into the original version later in time. Branching workflows allow huge teams of developers to work on the same code base without stepping on each other's toes.

### Versions

Dropbox provides a history of when a document changes and who changed it. VCSs do this and more. As well as tracking the history of each file, modern VCSs track groups of changes, also known as commits, allowing you to return an entire project to a particular point in time.

### Backup

Imagine if Apple lost the source code to iOS. Millions of dollars would be spent to recreate it. Ensuring you never lose any source code is an essential investment for any software company. Dropbox can backup files, but what about the metadata associated with the changes? VCS repositories keep track of who changed what and why, which is invaluable when tracking down bugs.

## A brief history of Git

Git is by no means the first version control system. The history of VCSs dates back to the early 70s, with the release of Source Code Control System (SCCS), the first widely available VCS. SCCS is considered a first-generation VCS. It allowed you to check out files, but only one person could do so at a time.

The second generation of VCSs started with Concurrent Versions System (CVS) in 1986. CVS introduced the idea of having a central server and allowing multiple people to checkout code at once. This was a significant improvement for remote development teams as they collaborated on code over what would become the internet.

Apache Subversion took ideas from CVS and took them further in 2000 by introducing two new concepts:

Atomic commits — either all files are committed or none. CVS could get in a corrupted state if it were interrupted mid-commit.

Grouped changes — CVS would track changes on each file individually but not as a group. A commit groups all the changed files with Subversion, allowing you to revert an entire project to a previous point in time.

In 2005 we reached the third generation of VCS with Git. With Git, you no longer have a centralized server. Instead, all instances of the repository are equal. You might have a centralized workflow, but the repository on the server is precisely like the repository you have locally.

## How Git changed the game

Git is the most popular version control system, used by millions of software developers around the world. It's changed how developers build software together. What makes Git so revolutionary?

### It's Distributed

The distributed nature of Git means you have the entire repository locally, allowing you to branch, merge, commit, and look through the history offline without touching a remote repository. Working locally made it far easier to experiment with new ideas as you're not committing to having your branch and code exist on the central server accessible by your colleagues. It also helps keep the repository cleaner because you don't see all of your colleague's random experiment branches too. With Git, you can try out an idea locally and push it to a remote server when it's ready for review or deployment.

### Better Branching/Merging

Git made massive improvements on branching and merging strategies from Subversion. Subversion stores changes in a tree. Trees are an excellent data structure for branching (as they should be!) but are not suited for merging. When you merge one branch to another in Subversion, there's no reference that the merge happened. It simply adds the changes from one tree to the other. Working on even a few branches can quickly turn into conflict hell. This frustration drives developers to fear branching, which impacts productivity and experimentation.

Git stores changes as a graph which is a data structure much better suited for merging workflows. A graph structure allows Git to keep track of previous merges between branches, resulting in far fewer conflicts and no fear of trying new ideas on a branch.

### GitHub

GitHub is a platform that has forever changed open-source development and played an enormous part in Git's rise in popularity. It's not the first platform catering to open-source projects, however.

Before GitHub, Sourceforge, a platform with over 200k registered developers, was the home of the majority of open-source projects. These projects were built by a small community of hackers who strongly believed in the ideals of open-source. Fast-forward to now, and you have GitHub boasting a developer community of over 50 million and the largest companies in the world pouring significant resources into open-source.

GitHub made two major innovations to drive this radical change in open-source:

The pull request: Before pull requests, developers would use mailing lists to submit and discuss patches. Streamlining this process and other features like issues and wiki significantly lowered the bar for contributing to open-source projects.

The social element: Now, you could follow favorite developers, projects, and companies. With more eyes on these projects, it was suddenly a way for developers to build their profiles, and for companies to build their reputation with developers. This latter shift was most apparent with Microsoft: under Steve Ballmer, open-source was a threat to the Windows ecosystem, and he infamously labeled Linux 'a cancer'. When Satya Nadella took the reins, this outlook changed. Microsoft became one the most significant contributors to open-source, added Windows Subsystem for Linux in 2016, and acquired GitHub in 2018.

GitHub as we know it would not have been possible without the distributed nature and other foundations Git provides.

## Content management and Git

The simplest way to store content on a software project is to hardcode it in the source files. There's no database, third party, or any extra infrastructure required — just files. Even better, because the content is part of a file, you get all the benefits of Git for your content. Static site generators typically take this approach by sourcing content from Markdown and other source files.

While storing content in files is simple, it's often not realistic. Updating source files through Git is a developer's world. The technical barrier is too high for content editors, and they would rather use a tool with an intuitive GUI.

Git-based CMSs address this technical barrier by providing simple interfaces to Git functionality for non-technical editors. Editors can commit content, create and merge branches, and create pull requests, all without a technical understanding of Git.

## Advantages of a Git-based CMS

This new approach to managing content brings many advantages over the database-driven and content API-based content management systems:

### Flexible editorial workflows

Making changes on a live WordPress site can be daunting. There's always the fear that if you mess something up, you won't be able to get back to the state you had before. CMS platforms typically have a staging environment or ability to draft content to address this concern. Staging environments help mitigate this fear as editors can review content updates before they make it to the live server.

The problem is keeping your staging and production server in sync. On a WordPress site, you need a way to keep everything — your theme, plugins, assets, database structure, database content, and the versions of all your software — identical, to be confident the changes you make on staging will be the same on production. Platforms like [WPEngine](https://wpengine.com/) help with this by allowing you to copy one environment to another. The copying is only intended for the developer however, content editors are stuck with a basic draft/published workflow on the production site.

Most editors opt for a drafting workflow on WordPress. You create a new blog post in draft so only you and your teammates can see it. Once all the appropriate people have signed off on it, you publish it live. This works for blogging, but as soon as you need to work on a set of changes across multiple pages that all need to go out at the same time, it quickly breaks down.

Some content API platforms have taken ideas and workflows from VCSs and rebuilt them for their platform. They might allow you to set multiple states on a piece of content to indicate that it's in draft, changed, or published, similar to a simple branching model. Some also provide access to the history of content changes, allowing you to revert to older versions.

While sometimes simpler for broader team adoption, these workflows often lack the power and flexibility of Git. With a git-based CMS, your editors have the full power of branching and pull request workflows available to them. You can build any publishing workflow you'd like on top of that, from a simple staging/production workflow to needing multiple steps and sign-offs before content goes live.

Editors have the freedom to experiment with radical content changes on a branch. If it doesn't work out, no problem — just delete the branch. You don't need to restore a previous database state or work out which pieces of content were part of your experiment.

### Tight developer/editor collaboration

Git-based CMSs create a unified workflow between developers and editors, where both parties stay in sync through Git. Editors work in an intuitive web GUI to make content changes that sync back Git. Developers pull in the latest changes, develop on their local environment and push back to the Git repository. You might have a large set of changes that needs major engineering and content work. It can all happen on the same branch and be part of the same pull request with a Git-based CMS.

### Visual editing

A Git-based CMS has access to all the source files on a static site generator website, not just the content. With this context, a Git-based CMS understands the content types, configuration, and structure of the SSG website allowing for an editing experience that is tightly reflective of the website. Visually editing content is intuitive for editors as it removes the guesswork of what your content will look like on your live site.

### Own your content

Content is king. It's your brand. It's your customer education. It's how you're found. If it's so important, why would you lock your content in a third-party platform?

With a Git-based CMS, you own your content. It's in your repository, and you have complete control over what you do with it. The Git-based CMS is a smart editing layer on top of the content in your Git repository.

There are numerous benefits to storing your content in your repository:

* It's always accessible — There's no risk of losing access to your content with downtime on a third party or a piece of infrastructure.
* No lock-in — There's no lock-in to a particular provider. You have the freedom to switch Git-based CMS platforms without any content exporting necessary.
* Flexible — Utilize content the way you want. Most static site generators (SSGs) support Markdown files with front matter, which is how you typically manage content on a Git-based CMS. From here, you have the power of your SSG to render the content however you'd like. Want to render it as a web page? Most SSGs will do this by default. Want a content API? Render content as a JSON file in your SSG.
* Faster build times — Pulling in large amounts of content from a content API can blow out your build time. Having your content all there as Markdown files means no network requests to build your site, significantly speeding up your build.

## Git-based CMS vs. headless CMS

You might have heard of headless CMSs. But how does a headless CMS compare with a Git-based CMS? A headless CMS allows you to create content without tying it to a particular output. Instead, developers access the content, typically through an API, to render it on a website, mobile app, or whatever use case they'd like. One of the benefits of headless is that you can manage and reuse content across different use cases.

Not all headless CMSs are Git-based, but a Git-based CMS can be set up as a simple headless CMS. Storing and editing content in Markdown files allows you to reuse it in multiple use cases such as a marketing site and a web app. In your SSG, you can also output content as JSON, effectively creating your own content API.

It all comes down to how you set up your Git-based CMS, and what tradeoffs you want to make. If you're visually editing content, it's tightly coupled with the website, which provides an intuitive editing experience, but will be harder to reuse in other situations. If you're looking for a headless solution, optimizing for content reuse through Markdown files or JSON output of content in your SSG might make more sense. In either case, a Git-based CMS allows you the absolute freedom to make these decisions and configure for your specific use case.

## Limitations of a Git-based CMS

It's not all rainbows and butterflies in the world of Git-based CMSs, though. It's not a silver bullet for all your content editing needs, and there are some limitations to be aware of:

### Digital Asset Management

For a small site, adding assets like images directly to your repository is ideal. It means you have easy access to all your assets, they're backed up, and all the files on your site live together in one place. The problem comes when you have large quantities of assets. GitHub, Bitbucket, and GitLab all have maximum repository sizes of somewhere between 2-10GB, which is plenty for text-based files. However, for a site with many images and videos, you could quickly approach the maximum.

With a Git-based CMS, you have two strategies to address this limitation:

1. **Use [Git Large File Storage](https://git-lfs.github.com/) (LFS)** — Git LFS allows you to store pointers in a repository that point to large files. This gives you the best of both worlds, a Git interface for dealing with large files and not bloating your repository with large files.
2. **Use a Digital Asset Management (DAM**) — A DAM is a tool that specializes in managing a company's digital assets. DAMs often have approval processes, search and organization structures, on-the-fly resizing/manipulation, and much more. You can use a DAM to look after all your assets and a Git-based CMS to look after your text-based content.

### Simple interfaces for complex concepts

There's no question that a pull request workflow is a lot for an editor to understand. With multiple branches and states, it can be challenging for large teams to coordinate content publishing. We need to think about the right terminology for content editors to fully buy into these concepts. For example, a pull request might sound overly technical, whereas a "sign off" mirrors existing content editing processes.

### Content relationships

The ability to define relationships between two pieces of content is essential to ensuring clean, maintainable content models. For example, you might have a blog post that has many authors. You could have all the author information as part of the blog post. The problem is if you want to update the author information, you'll have to update it on every page. A better way to model this is to separate authors into a separate content model which the blog post references. That way you can update the author information in one place and it will update it across all blog posts.

Git-based CMSs are capable of defining content relationships. The problem is the relationships are references to other files, and there's no referential integrity. If you delete an author, there's not a process to remove the references to that author in your blog posts. By default, the build will fail if an expected relationship does not exist. This might be the behavior you want to catch issues around your content model swiftly. You can also write code to check if the referenced file exists and fail gracefully. You may be better off with a CMS backed by a database for projects that require complex content relationships.

## Where Git-based CMSs are heading

We're in the early stages of Git-based CMSs, and they're already changing how companies manage content. Git-based CMSs are poised to become a prevailing way to manage content on the web. To achieve that, we need innovation in the following areas:

### Pull requests

The open-source community has flourished under the pull request model. Anyone from anywhere can contribute to the most influential open-source projects out there. The review process and tooling ensure that the software quality remains high. We are seeing content workflows that mirror this success with pull requests on Git-based CMSs, but it's still early. Content editors need much more visual information to understand the state of branches, pull requests, and what happens when you merge. As we make these workflows more intuitive, content editors will be able will gain more power to:

* Create and schedule content in parallel
* Have large content teams collaborating without stepping on each other's toes
* Have a deep understanding of where content sits in a publishing workflow and what needs to happen to get it live

Pull requests are at the heart of a new way to work. Git-based CMSs are working on the tooling and interfaces to bring these benefits beyond developers.

### Review processes

When you compare content review processes to code review processes, they're in different leagues.

With a code review process, developers run a gamut of static checkers to find issues before expensive human eyes take a look. Static checkers can catch a range of issues including, failed tests, code formatting inconsistencies, and bad coding practices. Once these tests pass, a maintainer can see every line of code that's changed to get the full scope of the changes someone is making. As part of a pull request, there's the option to discuss and give line-by-line feedback on improvements. Once the maintainer is happy, they can merge it into the main codebase. There's a complete catalog of who did what, the conversations and decisions made, and the resulting changes. Anyone working on that code in the future can use this information to make better decisions on their iteration.

Content reviews have some of these processes. As far as static checking goes, the first spell and grammar checkers date back to the 1970s. Services like [Grammarly](https://grammarly.com/) have taken static checking a step further by detecting passive voice, complicated sentences, and word overuse. Writing for the web adds another layer of complexity and issues. Your content might have broken links, accessibility issues, or need SEO optimization. We already have the static checking tools to surface these issues quickly. We just need interfaces for them, so content editors can find and fix them.

Just like the familiar process of code review, even with the most advanced static checking tools, content still needs a human eye to catch softer issues. Is this copy easy to read? Does it match our brand? Does it tell the right product story? Does legal approve? Is the content accurate? The most common way to conduct a content review process is using a platform like Google Docs where you can have conversations directly on the content. This process works, but it doesn't match the structured process of a pull request. You don't have a history of all the decisions made on a piece of content, you lose the context of who wrote each word, and you still have to copy and paste the content into the CMS after review, which could introduce its own set of issues.

When we have the tools for content reviewers to see exactly what has changed, have inline conversations on the CMS platform about the content, and have all of this information as part of a pull request, we're going to reach a new frontier of collaborative content management. [Deploy Previews](https://www.netlify.com/products/deploy-previews/) is a newly enhanced feature from Netlify which has made great progress in this space. Feedback is posted directly on the preview of the site, and integrates with developer workflows by syncing with platforms such as GitHub, Trello, and Clubhouse.io.

### Visual editing

What could be more intuitive than updating content directly on your website? Git-based CMSs have made good progress here, but we're not yet at the level of ease that website builders like SquareSpace and Wix provide. And there's no reason Git-based CMSs can't achieve that level of intuitive, in-context editing. When we do, it will open up content creation on Jamstack websites to an entirely new audience.

### Social content creation

In the same way GitHub built a social network for the open-source community, there's an opportunity for a Git-based CMS to build a social network around content contribution. Imagine going to a website and spotting a typo, clicking an edit button, fixing the issue, and submitting the change to the website owners for approval. Or to take it a step further: the same workflow, but you're writing a guest blog post or generating entirely new pages of content that you feel is missing. These workflows won't just transform content creation on the web. They can also apply to writing a book, academic writing, print media ... the list goes on. Having a strongly linked social element means you could follow your favorite writers and projects, and gather feedback from your growing community as you write. This is only the beginning of what is possible when we build more intuitive tooling around Git.

## How to get started with a Git-based CMS

Now you've learned about the world of Git-based CMSs, how can you start to empower your content team with Git?

Start by choosing a Git-based CMS platform. I'd recommend looking at:

* **[CloudCannon](https://cloudcannon.com/)** (disclaimer: I'm the cofounder) - Visual editing and publishing workflows for Jekyll, Hugo, and 11ty sites with support for more SSGs coming soon.
* **[Tina](https://tina.io/)** - Visual editing for Next.js and Gatsby websites with omnichannel storage support.
* **[NetlifyCMS](https://www.netlifycms.org/)** - Extendable React based CMS with built in publishing workflows.

Once you've chosen the Git-based CMS that fits your needs, you'll need to authenticate your GitHub account with the CMS and select the repository containing your Jamstack site. (If you're not familiar with Jamstack, check out [Jamstack.org](https://jamstack.org).) Once it's linked to your repo, the Git-based CMS will pull in your files and provide an editing interface for your content. From there, it's a matter of configuring the CMS to your content and determining the level of access your content team needs.

Git-based CMSs are an emerging technology, and the challenge of large-scale content coordination is one that all content management systems face. It's an exciting time to be a developer working with content teams: we're all going to see these interfaces evolve, and enable editors to utilize the full power of Git for their content workflows.

**I'd love to hear your thoughts on the future of content management systems. You can find me at [@mikeneumegen](https://twitter.com/mikeneumegen) on Twitter.**