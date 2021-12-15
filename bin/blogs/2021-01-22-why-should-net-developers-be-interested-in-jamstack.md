---
title: Why should .NET developers be interested in Jamstack?
description: Honestly, .NET devs were second-class citizens in the Jamstack
  world for too long. Learn how to start building your next project with Statiq
  - .NET based static site generator.
authors:
  - Martin Makarsky
date: 2021-01-22
lastmod: 2021-01-22
topics:
  - tutorials
tags:
  - .net
tweet: ""
format: blog
relatedposts:
  - "Introducing Netlify Technology Partners: Helping Enterprises Build Better
    Jamstack Sites"
seo:
  metatitle: ".NET and C# Jamstack SSG: Statiq Web Tutorial"
  metadescription: "Learn how .NET or C# devs can build websites on the Jamstack.
    These tools empower you: Netlify and Statiq Web, a .NET based static site
    generator."
  ogimage: /v3/img/blog/netlify-blog-statiq-net-ssg.png
---
_This post was contributed by our friends at [Kentico Kontent](https://www.netlify.com/technology-partners/kentico-kontent)._

If you’re a .NET or C# developer, the [Jamstack](https://www.netlify.com/jamstack/) approach to building websites might have fallen off your radar over the years. With the development of the Jamstack ecosystem, now might be the right time for you to build on a Jamstack architecture and utilize all your well-deserved .NET skills.

![featured image: Why should .NET developers be interested in Jamstack? with Netlify, Kentico, and Statiq Web](/v3/img/blog/netlify-blog-net-statiq-kentico.png)

## What marmalade cake are you talking about?

[Jamstack](https://jamstack.org/what-is-jamstack/)—one of the key concepts is pre-rendering. In Jamstack sites the entire front end is prepared at the build time, and the resulting static output is served from a content delivery network (CDN).

As a Jamstack developer, you don't want to write all the logic for transforming your project into static files. Instead, you want to use some tools for this pre-rendering. These tools are doing a lot of fancy stuff for you—usually they allow you to apply templates, handle all the bundling and minification, and provide you with a rich ecosystem of plugins for specific use cases like data fetching from CMS, site map generating, or optimizing images. These tools are called static site generators. But let's talk .NET now, where a generator called Statiq is quickly becoming a popular option.

## U jokin'? Why would I want to build a static site in the 2020s?

Glad you asked! These are not static sites full of GIFs and WordArt from the `90s—though I love those retro feeling ones like on my university programming teacher's [site](https://www.fi.muni.cz/usr/pelikan/). Browsers, JavaScript, and APIs have all advanced in capabilities since then. These days you can implement dynamic functionalities like authentication, payments, or search even on static sites.

## So, how to jam on .NET?

With [Statiq](https://statiq.dev/)! Statiq is a static site generator for .NET. It brings the first-class experience of both Visual Studio and VS Code - including Intellisense and debugging - to the Jamstack world. In combination with the .NET platform and many built-in features like pipelines, modules, preview server, and shortcodes, it is a great entry ticket for .NET developers and teams into Jamstack.

The Statiq project contains a general-purpose static generation framework called Statiq Framework and a convention-based static site generator called Statiq Web that’s built on top of it. From now on, we will be referring to Statiq.Web when talking about Statiq.

## The basics of Statiq

For a start, let's explain some key concepts and specifics of Statiq. I believe these are essential to having a solid base when starting with this static site generator.

### Documents

A [document](https://statiq.dev/framework/documents/) is a primary unit of information in Statiq. It consists of content and metadata. Imagine that Statiq is like a document database that can process these documents. To be more precise, these documents are immutable. When a document is processed, it's returned a new instance of the document. Documents are manipulated by modules.

### Modules

A [module](https://statiq.dev/framework/pipelines/modules/) is a component that performs a specific action with documents. A module takes documents as input, does an operation based on those documents (possibly transforming them), and outputs documents as a result of whatever operation was performed. Modules are typically chained in a sequence called a pipeline.

### Pipelines

A [pipeline](https://statiq.dev/framework/pipelines/) is a document processing unit. A pipeline consists of one or more modules. Basically, the pipeline is a workflow blueprint of how your modules should handle documents. One might find a slight analogy with a controller in .NET MVC, nevertheless, it's good to think about pipelines in a more declarative way. You just specify what your output should be rather than how to transform and produce it.

Pipelines have their own lifecycle process defined by [phases](https://statiq.dev/framework/pipelines/#phases). When pipelines and modules are executed, the current state is passed in the [execution context](https://statiq.dev/framework/execution/execution-context).

## Gimme code!

In this section, we'll create a new static site powered by Statiq from scratch. The site will contain one root page, a listing of the articles, and article detail pages. The example will showcase rendering using Razor pages as well as Handlebars templates. Then we'll use a third party module for fetching and rendering content from the headless CMS Kontent. In the end, we'll publish our site to Netlify, with preview functionality.

Note: If you just want to see working code published on Netlify, you can fork my [repository](https://github.com/makma/statiq-tutorial) and start from Step 7.

### Prerequisites

[Installing the .NET Core SDK](https://dot.net/) is the only prerequisite. This tutorial assumes you are familiar with the basics of frontmatter, markdown formatting, and the .NET ecosystem.

### Step 1: Create a new project

1. Run `dotnet new console --name StatiqTutorial` from the command line.
2. Navigate to your newly created `StatiqTutorial` directory and run `dotnet add package Statiq.Web --version 1.0.0-beta.14` (you can find the latest version of the framework on [Nuget](https://www.nuget.org/packages/Statiq.Web)).
3. Create a bootstrapper in your `Program.cs`.

```using
using Statiq.App;
using Statiq.Web;

namespace StatiqTutorial
{
  public class Program
  {
    public static async Task<int> Main(string[] args) =>
      await Bootstrapper
        .Factory
        .CreateWeb(args)
        .RunAsync();
  }
}
```

4. In your project, create an `input` folder with an `index.md` file with the following content. The input directory is a default path where Statiq looks for input files.

```md
---
Title: My First Statiq page
---
# Hello World!

Hello from my first Statiq page.
```

5. Run `dotnet run`. This command will create an output folder with the generated page. 
6. By running `dotnet run -- preview` Statiq will generate the `output` content (same as in the previous step). In addition, it'll start your server and will serve content from the output directory.
7. You should see your rendered site at `http://localhost:5080`.

#### What just happened?

All the magic happened in the `CreateWeb(args)` method that created a bootstrapper with Statiq functionality. Default configuration runs your app with several modules. The most important one is default processing of your input markdown files and generating a page with the same name with content in HTML.

### Step 2: Create an index page with a custom Razor template

1. Go to `Program.cs` and replace it with the code below. With this bootstrapper setup, you tell Statiq you don't want all the default magic, and you'd rather take care of the content rendering on your own. However, the `AddHostingCommands()` is still providing you with preview functionality.

```
using System.Threading.Tasks;
using Statiq.App;
using Statiq.Web;

namespace StatiqTutorial
{
  public class Program
  {
    public static async Task<int> Main(string[] args) =>
      await Bootstrapper
        .Factory
        .CreateDefault(args)
        .AddHostingCommands()
        .RunAsync();
  }
}
```

2. In the `input` folder remove `index.md` and create a `content` directory. In this directory, we'll have our input files for content. In the `input/content` create a new `home.md` file with the following code.

```md
---
Title: Hello World from Statiq!
Content: This is a root page of the statically generated site powered by Statiq. This page is rendered by Razor view template. Statiq Web is a powerful static website generation toolkit suitable for most use cases. It's built on top of Statiq Framework, so you can always extend or customize it beyond those base capabilities as well. This is an example of how to render one single page. 
---
```

This will be your local content data source file for your home page. It's a basic frontmatter markdown content with the `Title` and `Content` properties.

3. In the `input` directory create `Home.cshtml` file with [content](https://github.com/makma/statiq-tutorial/blob/main/input/Home.cshtml).
4. Create [`HomeViewModel.cs`](https://github.com/makma/statiq-tutorial/blob/main/ViewModels/HomeViewModel.cs).
5. When you check the `Home.cshtml` you'll find out that your HomeViewModel is not visible from this view. To fix it, create new [`_ViewImports.cshtml`](https://github.com/makma/statiq-tutorial/blob/main/input/_ViewImports.cshtml) in the input directory.
6. Now we need to tell Statiq how we want to process and handle our input file. Create a [`HomePipeline.cs`](https://github.com/makma/statiq-tutorial/blob/main/Pipelines/HomePipeline.cs) file. In the Input phase, this pipeline reads our `content/home.md` file. The Process phase uses `ExtractFrontMatter` and `ParseYaml` modules that get content from this file. We need to somehow connect our input document with our view. We achieve this by using the `MergeContent` module in the `RenderRazor` module, where we specify how to create an appropriate view model. The `SetDestination` module determines where your files will be written. In the last Output phase, we use the `WriteFiles` module for writing our output files.
7. Run `dotnet run -- preview`. You should see your markdown content rendered on the Razor page similar to [this deployed on Netlify](https://statiq-tutorial.netlify.app/).

### Step 3: Create a listing page with a Razor template

1. In `input/content/features` copy the following markdown files. These will be our content data source for the listing page. You can find content and structure for these files on [GitHub](https://github.com/makma/statiq-tutorial/tree/main/input/content/features).
2. In the `input` folder create [`FeaturesListing.cshtml`](https://github.com/makma/statiq-tutorial/blob/main/input/FeaturesListing.cshtml).
3. Create [`Feature.cs`](https://github.com/makma/statiq-tutorial/blob/main/ViewModels/Feature.cs), [`FeaturesListingViewModel.cs`](https://github.com/makma/statiq-tutorial/blob/main/ViewModels/FeaturesListingViewModel.cs), and [`FeaturesListingRazorPipeline.cs`](https://github.com/makma/statiq-tutorial/blob/main/Pipelines/FeaturesListingRazorPipeline.cs). It's worth mentioning that in the Process phase we are using the execution context of the current pipeline, where we are adding content from our markdown files as children of the document. In the Output phase, we are iterating through the document's children, and we are creating `List<Feature>` features object, which is used by `FeaturesListingViewModel`. Other principles are similar to those described in Step 2.
4. After running `dotnet run -- preview` you should see your features listing at `http://localhost:5080/features-razor`.
   5.If you'd like to use the HandleBars template instead, you can find the [pipeline](https://github.com/makma/statiq-tutorial/blob/main/Pipelines/FeaturesListingHandlebarsPipeline.cs) and [template](https://github.com/makma/statiq-tutorial/blob/main/input/FeaturesListing.hbs) on GitHub. The principles are the same.

### Step 4: Create a detail page with default markdown rendering

1. Create [`FeatureDetailPipeline.cs`](https://github.com/makma/statiq-tutorial/blob/main/Pipelines/FeatureDetailPipeline.cs). In the Process phase, this pipeline uses the `RenderMarkdown` module that renders markdown.
2. Run `dotnet run -- preview`. Now your links from both (Razor and HandleBars) listing pages leading to the detail one should work.

### Step 5: Prepare content in the headless CMS Kontent

   When you want to enable content authors to create and manage content, it's more convenient to provide them with the capabilities of Headless CMS than to edit your codebase directly. In this step, we'll create a project in headless CMS Kontent. Moreover, we'll create a new home page, which will use content from this CMS.

1. Go to [kontent.ai](https://kontent.ai/) and [create a new project](https://docs.kontent.ai/tutorials/manage-kontent/projects/manage-projects#a-creating-projects).
2. Go to Content Types and create a new Home content type. Add Title and Content text elements. Save changes.

    ![create content type statiq kentico kontent](/v3/img/blog/create-content-type-kentico-cms.png)

3. Go to the *Content & Assets* section and create a new content item *Hello World* from *Statiq*! based on *Home* content type. Fill in *Title* and *Content* elements. Publish the content item.

    ![create content item hello world from statiq web ssg](/v3/img/blog/create-content-item-hello-world-statiq-ssg.png)

4. In the *Settings* section, you will find your *ProjectId* and *Preview* API keys. You will need them in the next step.

![API settings kentico kontent cms](/v3/img/blog/settings-api-keys-kentico-cms.png)

### Step 6: Integrate content from the CMS into our Statiq site

First, we'll generate strongly typed classes for our content types. This helps us to work with content from the headless CMS in a safe, strongly typed way. Then we'll use the [Kontent.Statiq](https://github.com/alanta/Kontent.Statiq) module to fetch and use our content in the new pipeline.

1. [Install](https://github.com/Kentico/kontent-generators-net#how-to-use-for-delivery-sdk) Kentico Kontent Generator utility.
2. In the root of your project, create a PowerShell script file named [`GenerateModels.ps1`](https://github.com/makma/statiq-tutorial/blob/main/GenerateModels.ps1).
3. For the local configuration in the root of your project, create [`appsettings.json`](https://github.com/makma/statiq-tutorial/blob/main/appsettings.json.template). Replace *projectId* with the one from the previous step.
4. When you run this script, it generates strongly typed models together with *ITypeProvider* in the *Models* folder.
5. [Add](https://github.com/alanta/Kontent.Statiq#starting-from-scratch) *Kontent.Statiq* module to your project.
6. Register *CustomTypeProvider* and *DeliveryClient* in the [bootstrapper](https://github.com/makma/statiq-tutorial/blob/main/Program.cs).
7. Create [`HomeFromCmsPipeline.cs`](https://github.com/makma/statiq-tutorial/blob/main/Pipelines/HomeFromCmsPipeline.cs) file. This pipeline uses the Kontent.Statiq module in the Input phase. In the Process phase, we are reusing the `Home.cshtml` razor view. All the magic happens in the Process phase. We are creating `HomeViewModel` using an already created new constructor. The parameter of the constructor is Statiq's document created with content from the headless CMS.
8. Run `dotnet run -- preview`. At `http://localhost:5080/index-from-cms` you should see your rendered content from the headless CMS.

*Pro tip*: You can also check how your site looks and behaves with unpublished content. Just enable preview mode in `appsettings.json` and use the *Preview API key* from the previous step.

```JSON
{
  "DeliveryOptions": {
    "ProjectId": "YOUR_PROJECT_ID",
    "PreviewApiKey": "YOUR_API_KEY",
    "UsePreviewApi": true
  }
}
```

### Step 7: Let's publish it on Netlify

We will create two sites on Netlify. While one will build our production site with published content, the other one will use unpublished preview content. Netlify's built machines got installed .NET5 framework by default. Make sure in your project's [`.csproj`](https://github.com/makma/statiq-tutorial/blob/main/StatiqTutorial.csproj#L5) file you are targeting `net5.0` as a target framework.

1. Push the whole project to your GitHub repository. Do not include `appsettings.json`. We will provide these settings in the form of [environment variables](https://docs.netlify.com/configure-builds/environment-variables/). If you don't want to follow all the previous steps, you can fork my [repository](https://github.com/makma/statiq-tutorial) and start from here.
2. Go to Netlify and create a new site from Git, select your repository.
3. Fill in `dotnet run` as a *Build command* and `output` as a *Publish directory*. Add a new `DeliveryOptions\_\_ProjectId` variable and enter your *projectId*. Note: Netlify uses double underscore (__) as the delimiter for the nested environment variables.

    ![create new site netlify app screenshot](/v3/img/blog/create-new-site-netlify-app-screenshot.png)

4. Click *Deploy site*. Your site will be ready within minutes.

### Step 8: Unpublished preview content on Netlify

1. For previewing unpublished content, create a new site following steps from Step 7. In addition, you will have to provide a *PreviewApiKey* and *UsePreviewApi* flag.
2. Besides `DeliveryOptions\_\_ProjectId` add two new environment variables `DeliveryOptions\_\_PreviewApiKey` with your *Preview API Key* value and `DeliveryOptions__UsePreviewApi` with *true* value.

    ![create new netlify site preview deploy app screenshot](/v3/img/blog/create-new-preview-site-deploy-netlify-app-screenshot.png)

3. Click *Deploy site*. Your preview site will be ready within minutes.

*Pro tip*: Add webhooks for rebuilding your site when content is changed. You can learn more about Kontent webhooks and Netlify build in this [article](https://docs.kontent.ai/tutorials/develop-apps/integrate/netlify-automation).

## Wrap-up, next steps, and resources

This tutorial is meant to be an introduction to the Statiq static site generator. There are opportunities for you to make additions to the code around styling, SEO, and even adding JavaScript for more capabilities. If you would like to use a more complete template, I'd recommend the [Statiq Lumen](https://github.com/Kentico/statiq-starter-kontent-lumen) starter, which is a blog site built with Statiq and Kentico Kontent that uses SEO best practices and had a great Lighthouse score. Another resource on connecting Statiq with the CMS is [Jamstack on .NET: From zero to hero with Statiq and Kontent](https://dev.to/kentico-kontent/jamstack-on-net-from-zero-to-hero-with-statiq-and-kontent-p4m).

- - -

##### About the author

Martin Makarsky is a developer advocate and hacker at Kentico. During the day he tries to find ways to help people with code. At nights, he’s hacking at first glance incompatible pieces into meaningful structures. He writes at <https://martinmakarsky.com>

##### About Kentico Kontent

[Kontent](https://kontent.ai/) is a cloud-native headless CMS that lets you build websites and applications fast. Integrate Kontent directly into your Netlify site for faster deployments and unrestricted design possibilities. [Reach out](https://www.netlify.com/technology-partners/kentico-kontent/contact) about using Kontent with your next production Netlify project.
