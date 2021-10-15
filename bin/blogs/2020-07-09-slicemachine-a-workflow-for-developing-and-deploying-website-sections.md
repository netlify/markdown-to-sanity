---
title: "Slice Machine: a workflow for developing and deploying website sections"
description: >
  Ever thought about using components for sections of your web pages? With Slice
  Machine, you can build page sections, define their model, edit properties,
  deploy them, and deliver a visual interface that allows even your most
  technically challenged colleagues to easily build pages without any further
  help from you.				
authors:
  - Hugo Villain
date: 2020-07-14T14:00:00.000Z
lastmod: 2020-07-14T00:00:00.000Z
topics:
  - tools
tags:
  - Prismic
  - CMS
  - Jamstack
  - Nuxt
  - Vue
tweet: ""
format: blog
relatedposts:
  - How to Deploy a Vue Site
  - Refactoring towards Pure Components in React
seo:
  metatitle: "Slice Machine: Prismic's Web Components Workflow and Management Tool"
  metadescription: Learn how Prismic, a Jamstack headless CMS, brought a new tool
    to market that focuses on workflow and management of website components.
    Check it out!
  ogimage: /img/blog/prismic-slice-machine-og.png
---
At [Prismic](https://prismic.io/), we've been experimenting a lot with building websites with components. Our [Slices feature](https://prismic.io/feature/dynamic-layout-content-components), which encourages our users to visualize sections of their pages as components, has been one of our most popular features. That popularity made us think about how we could take the feature to the next level and develop a tool to improve component workflow and management—and that’s where Slice Machine was born.

![Website page sections are macro components](/img/blog/website_page_sections_are_macro_components.png)

We know that even technical terms can sometimes be interchangeable and unclear, so when we refer to components for this project we are thinking about page sections (macro components) like carousels, FAQ sections, hero sections, CTA, etc...

So this isn’t the standard component library that you may have seen in the past, it truly is a tool that will allow you to improve your component workflow, from building the individual components, to combining them into actual pages.

The project currently runs on Prismic, [Nuxt](https://nuxtjs.org/), and [Netlify](https://www.netlify.com/), and ships with a default library of customizable components. To offer you real value right out of the box (as if you needed more) we’ve teamed up with [Sara Soueidan](https://twitter.com/SaraSoueidan) to bring you a high-quality default library that focuses on accessibility and responsiveness.

Much like Prismic, we want Slice Machine to be suitable for just about any stack, and we’ve already started working on supporting other React and Vue frameworks (including Gatsby and Next).

### So wait...what’s Prismic?

There’s every chance that you’ve made it this far without knowing what Prismic is.

Prismic is a Headless CMS that offers unlimited custom types, API calls, and a bunch of other great things. You should really check it out.

The problem is, API-based CMS’s have created a gap between the components and the data that they require and we wanted to bridge that gap.

We took our first step on that journey when we created our Slices feature.

With Slices you can break your page content into JSON components that correspond to your frontend components. Each Slice represents the JSON model (content) for a given component.

![Correspondence between slices in Prismic, a component in your code used in a webpage](/img/blog/page-code.png)

Slices also give non-technical people a visual interface that allows them to easily build and fill content and create pages simply by combining sections.

![Correspondence between slices of a page and the webpage](/img/blog/corresponding-slices.jpeg)

Slices are one of our coolest features and a big reason why so many people are choosing to use Prismic.

But we wanted to find a way to take Slices to the next level and to allow developers to adopt a totally component-based approach to how they build websites and create pages. And that’s why we’ve partnered with Netlify and Nuxt to bring Slice Machine to life.

### Slice Machine — Build website sections and combine them into pages

In its most basic form, [Slice Machine is an open-source CLI and a component library](https://www.slicemachine.dev/).

There are two parts in building webpages with components.

1. building and deploying page sections (components)
2. building pages using these components

But let’s start by focusing on the second part: combining components into pages. That’s where the cool stuff really begins.

### Slice Zone. Where the magic really starts.

So imagine that you've already built your set of sections, or maybe you're using our default library. Either way, the question is the same: _how can you combine these components to build actual pages_?

Of course, you could hard-code it and simply call the necessary components into your page. But this is far from ideal. You will have to duplicate a lot of code, rebuild your website, and deploy it each time you need to edit or re- arrange these sections.

This is where SliceZone comes into play. SliceZone is a component that you drop into your page and it will take care of calling the necessary components and provide them with their content props to build the page.

![SliceZone web component code example in Vue page template](/img/blog/slices-code.png)

This way, all that you have to do is use the visual editor Prismic interface to define your Slices. The SliceZone will automatically mirror these Slices by calling the corresponding components in your frontend code. Simple as that.

Here's a video that shows SliceZone.

<iframe width="922" height="519" src="https://www.youtube.com/embed/PO58pGIkDg0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

It really is that simple.

The other cool thing about the SliceZone is that it is linked to a page Document in Prismic. This means that you don't have to query anything manually. Just drop the SliceZone component anywhere in your page code and you’re ready to go.

SliceZone is the part of Slice Machine that separates it from anything that we’ve ever used before. But before you can see the true value of the tool it is worth taking a look at that first part that we mentioned: defining and building page sections.

### Slice Machine CLI a workflow to iterate on defining page sections

Building a page section is an iterative approach. You start by creating the component file, define the model schema, add markup and JS to the component, add more props to the model, add markup and JS, and so on and so on...

With Slice Machine, we provide you with a CLI that will help you throughout the process of building website sections and significantly improve your workflow. You can quickly create the boilerplate for the component code and the model, sync that with Prismic, and properly list your components so that SliceZone can find them.

![Slice Machine CLI and slice model in text editor](/img/blog/slices-code-model.png)

And as I mentioned, we've already built a default library of components to help you get started.

### Vue-essentials. A default library of components built by Sara Soueidan

We didn't want to launch Slice Machine with an empty library. We knew that doing so would make it more difficult for you to see the true value of the tool and make it less likely that community members would be inspired to start making libraries of their own.

By working with Sara Soueidan we have ensured that you will [immediately have access to high-quality, fully responsive components](https://vue-essential-slices.netlify.app/) that will make you want to build something beautiful.

#### Customizable without a strong design identity

Components that you can add to any page or any design. You can customize their colors, fonts, and design using CSS-variables, props, and other mechanisms.

#### Cross-browser compatibility

All of those annoying, but necessary, browser compatibility considerations have been thoughtfully handled for you.

#### Responsiveness

It’s no good having a website that doesn’t deliver the full experience on whichever browser your users choose. These fully-responsive components will ensure that all of your visitors get the exact experience that you intended for them.

#### Accessibility

All of the components in this library are accessible. ARIA attributes are used when and where they are needed.

So we’ve already partnered with Sara Soueidan to ensure that we offer a great set of components right from launch day. Headers, footers, carousels...we’ve got everything that you need to start working on that next website and get it up and running in just a couple of minutes.

The library has been developed in VUE, although we are actively working on developing more libraries and starters for other frameworks. Not only that, but we’re also working on developing components that integrate to other services ([like Netlify forms](https://www.netlify.com/products/forms/)).

![Our vue-essential library - A whole set of open source, responsible and accessible components](/img/blog/component_library.png)

### Slice Machine is open-source. It needs a community. It needs you.

If you would like to try Slice Machine out – and ideally start contributing to our open-source projects, component libraries and community – you can get started in just a few minutes by following these straightforward instructions.

The project is currently still in the beta testing phase, so we would love for you to start using Slice Machine and to let us know how it can be improved.

You’ve made it this far, so you must be at least a little bit interested.

So here are a few ways that you can help us to keep moving this project forward:

- Try out the project and give us your feedback and ideas. (There is a [section in our Forum](https://community.prismic.io/t/about-the-slice-machine-category/539) where you can share your thoughts and join in the discussion.)
- [Contribute to the open source project](https://github.com/prismicio/prismic-cli), file issues, submit PRs for the CLI.
- [Build and share your own Slice Machine library](https://github.com/prismicio/vue-essential-slices). You can start from scratch or by forking Sara's library.
- [Help us bring Slice Machine to other frameworks.](https://community.prismic.io/t/about-the-other-frameworks-category/543)

You can always reach out to me directly on [Twitter](https://twitter.com/hypervillain) with any questions that you may have.

---

*This post was contributed by Prismic.io.*

About Prismic

With [Prismic](https://prismic.io/), developers and designers are able to create the websites and apps that they want, how they want, before delivering a finished product that content creators and marketers can manage and edit autonomously. With the freedom to choose your stack, a host of great features, and the possibility of adopting a truly component-based approach, you can build just about anything.

About Netlify

[Netlify](https://www.netlify.com/) is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and sites. At Netlify we want the web to win. We empower developers to create the modern web through our platform that includes continuous deployment from Git across [Netlify Edge](https://www.netlify.com/products/edge/), our global application delivery network, alongside form handling, serverless AWS Lambda functions, an SSL integration with Let’s Encrypt, and more.