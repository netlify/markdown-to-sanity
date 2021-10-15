---
title: "How to build a database-driven Jamstack site"
description: "This tutorial walks through the building a Hugo Site with a MySQL backend, but works for any SSG and database, including REST APIs and Postgres."
authors:
  - Brian Rinaldi
date: 2021-06-10
lastmod: 2021-06-09
topics:
  - tutorials
tags:
  - "stepzen"
  - "graphql"
  - "Hugo"
  - "nextjs"
  - "databases"
tweet: ""
format: blog
relatedposts:
  - "Advice from a GraphQL Expert"
  - "Netlify Build Plugin of the Week: StepZen"
seo:
  metatitle: "How to build a database-driven Jamstack site"
  metadescription: "Learn how to use StepZen to build a Jamstack site with a MySQL backend. This approach works with works for any SSG, including Next.js and Hugo, and data sources like REST APIs and Postgres."
---
Raymond Camden wrote a good post about [Building a Data-driven Eleventy Site](https://www.raymondcamden.com/2021/04/15/building-a-database-driven-eleventy-site). In it, he makes a direct connection to a MySQL database using the mysql npm package to pull the posts for a simple blog that is statically generated (aka pre-rendered). While Ray does this for Eleventy specifically, you could leverage a similar workflow to generate content from a MySQL database in other static site generators (SSGs) like Next.js for instance.

This got me thinking. While there are relatively straightforward methods for pulling from various external APIs or databases using the JavaScript-based SSGs, the same cannot be said for some other traditional SSGs like Hugo or Jekyll. I'm a big Hugo fan, so could I replicate this for Hugo? Or what if I needed to connect more than just a database?

As it turns out, [StepZen](https://stepzen.com) just released a [Netlify Build Plugin](https://www.netlify.com/blog/2021/05/14/netlify-build-plugin-of-the-week-stepzen/) that will deploy a GraphQL API to StepZen along with your Netlify site. Since my StepZen GraphQL API can pull from MySQL databases, I can then pull that data and populate my site.

In this post, we'll explore how I recreated Ray's data-driven Jamstack site using StepZen as a backend and Hugo as the SSG. One of the key benefits of this approach is that it will not just work for MySQL but also for any number of sources including REST APIs and Postgres databases, regardless of what SSG you use. Rather than relying on a single npm MySQL connector, we could even combine data from any or all of these sources into a single API and populate our site with this.

> The completed code for this tutorial is [available on GitHub](https://github.com/remotesynth/Netlify-Plugin-StepZen-Sample).

## Getting Set Up

There are two pieces we need to get set up. The first is the data backend in MySQL and then the web frontend using Hugo.

### Creating Your MySQL Database

The first thing we'll need is a MySQL database. I chose to set mine up via Heroku, which uses Cleardb MySQL because it is free for my purposes, but there are a number of other options you can choose. If you want to copy my setup, here are the steps:

1. If you don't already have one, [sign up for a free Heroku account](https://signup.heroku.com/)
2. Click New > Create New App and give it a name.
3. Within the new app, go to the "Resources" tab and under Add-ons, type "cleardb mysql" to find and select the ClearDB MySQL add on. The Ignite - Free plan is sufficient (Note: although the plan is free, you may need to add a credit card to your account before you can add it). Click "Provision."
4. To get the connection details, go to  the Heroku dashboard and then to the Settings tab on your app and, in the "Config Vars" section, click "Reveal Config Vars." Click on the Edit Pencil, and you will see a new pane open up. You will see value like `mysql://user:password@hostaddress/databasename` (there might be an additional `?` at the end, you **must** remove that in the `databasename` above).

The database I created is very basic. You can create and populate it using [this SQL file](https://github.com/remotesynth/Netlify-Plugin-StepZen-Sample/blob/master/petsblog.sql) or just create your own with the following tables:

1. A `posts` table with an ID (int), title (varchar), body (blob) and published (datetime)
2. A `categories` table with an ID (int) and name (varchar)
3. A `posts_categories` table with an ID (int), postid (int) and categoryid (int)

### Setting Up Hugo

[Hugo](https://gohugo.io/) is a Go-based static site generator that is famous for being extremely fast at generating sites - even large ones with thousands of pages.

Technically, Hugo is just an executable that you can download and run anywhere (though you'd have to add it to your path), but the easiest way to install it on a Mac is using Homebrew:

```bash
brew install hugo
```

There are multiple other options for installing on Windows or Linux. Check the [installation instructions](https://gohugo.io/getting-started/installing).

Let's create a new site.

```bash
hugo new site pets-blog
cd pets-blog
```

This command just created the structure and shell of a Hugo site, but we need at least a theme to run it. There are a lot of [Hugo themes](https://themes.gohugo.io/), but I chose [Hugo Vitae](https://github.com/dataCobra/hugo-vitae) for this project, which offers a basic blog site design.

The easiest way to do this is to download the [latest version of the theme](https://github.com/dataCobra/hugo-vitae/releases/tag/2.1.7), unzip it and place it in our site's `/themes` folder. (Note that, after unzipping, you may need to rename the folder within the theme directory `hugo-vitae`)

Finally, let's tell Hugo to use the theme in the `hugo-vitae` folder. Open the `config.toml` in the root of our Hugo site and change the values for `title` and `theme`:

```toml
baseURL = "http://example.org/"
languageCode = "en-us"
title = "My Pet Blog"
theme = "hugo-vitae"
```

The value of `theme` should be the folder for our theme within the `/themes` directory (i.e. `hugo-vitae`) The `title` will show in the header of the theme. You can ignore the `languageCode` and `baseURL` values for now.

You can actually run your site locally now using the `hugo serve` command but it will only show the "My Pets Blog" header as we haven't added any posts yet. Also, as we're going to use Netlify, let's install the Netlify CLI as we'll need it later.

```bash
npm install netlify-cli -g
```

Now, instead of running `hugo serve` to run the site locally, we can use `netlify dev`. At the moment, it will simply run `hugo serve` for us, but we'll enhance that later.

## Creating a GraphQL Schema Connected to MySQL

StepZen allows us to write a GraphQL schema and then connect it to a variety of data sources including REST APIs and databases. We can connect multiple data sources to a single GraphQL API and even combine them to get resources from multiple backends in a single query. However, in this case, we'll be connecting our schema to just a single MySQL datasource.

Within our Hugo project, let's create a folder in our root directory named `stepzen` to hold our schema. This is the folder the [StepZen Netlify Build Plugin](https://www.npmjs.com/package/netlify-plugin-stepzen) assumes. Inside that folder, we'll place the `.graphql` files that represent our GraphQL types. These types will mirror the MySQL backend we just set up.

Before we create the types however, let's set up the coniguration that we'll use tell StepZen how to connect to our MySQL database. We need to put this in a `config.yaml` file in our `stepzen` folder. Inside that, we'll provide StepZen with the DSN information we copied from Heroku earlier. Note that the DSN should be formatted as shown in the example below.

```yaml
configurationset:
  - configuration:
      name: mysql_config
      dsn: [username]:[password]@tcp([datacenter].cleardb.com)/[database_name]
```

Be sure to add this `config.yaml` file to your `.gitignore` so as not to check protected information into your repository.

Next, let's create a type for the blog post. First, make a `post.graphql` file in the `/stepzen` folder. Let's define the properties of this type.

```graphql
type Post {
  id: ID!
  title: String!
  body: String!
  published: String!
}
```

We'll want to be able to query to get data containing posts including getting all our blog posts (i.e. `getPosts`) and getting a single post by id (i.e. `getPost`). In order to connect this to our MySQL database, we'll use StepZen's `@dbquery` directive. Place the following queries below the type definition:

```graphql
type Query {
  getPosts: [Post]
    @dbquery(type: "mysql", table: "posts", configuration: "mysql_config")
  getPostByID(id: ID!): Post
    @dbquery(type: "mysql", table: "posts", configuration: "mysql_config")
}
```

All that is needed to connect this type to MySQL data is the database type (`mysql`), the table we are pulling the data from (`posts`) and the configuration to use for the connection (the `mysql_config` that we defined earlier in the `config.yaml` file).

Next, let's create a type for our blog post category in a file in the `stepzen` directory called `category.graphql`.

```graphql
type Category {
  id: ID!
  name: String!
}

type Query {
  getCategories: [Category]
    @dbquery(type: "mysql", table: "categories", configuration: "mysql_config")
  getCategoryByID(id: ID!): Category
    @dbquery(type: "mysql", table: "categories", configuration: "mysql_config")
}
```

Now we have two types but they don't yet know about each other. What we want is that when we query for blog posts, we get the categories they've been assigned. Let's fix that.

First, in `category.graphql`, let's add a third query to get categories by post ID. Rather than specify a `table` to connect to in MySQL, this GraphQL query will specify a SQL `query`. The `?` in the query will be replaced by the `id` argument that is passed into the GraphQL query.

```graphql
getCategoriesByPostID(id: ID!): [Category]
    @dbquery(
      type: "mysql"
      configuration: "mysql_config"
      query: "SELECT categories.id, categories.name FROM posts_categories RIGHT JOIN categories ON categoryid = categories.id WHERE postid = ?"
    )
```

Now we'll use another special StepZen directive, `@materializer`, to populate categories in our `Post` type. We just need to supply the name of the query on our `Category` type that StepZen will use to populate `categories`, which will be the `getCategoriesByPostID` query we just created above.

```graphql
type Post {
  id: ID!
  title: String!
  body: String!
  published: String!
  categories: [Category] @materializer(query: "getCategoriesByPostID")
}
```

We're almost ready to test this schema. We just need to create an `index.graphql` file in the `stepzen` directory to tell StepZen how to assemble our schema.

```graphql
schema @sdl(files: ["post.graphql", "category.graphql"]) {
  query: Query
}
```

Ok. Let's deploy and test our schema before we connect it to Netlify. You'll need the StepZen CLI if you don't already have it (of course, you'll need a [StepZen account](https://stepzen.com/request-invite/) too).

```bash
npm install -g stepzen
```

If this is your first time using the CLI, you'll need to run `stepzen login` and supply your account name and admin key from your [My Account](https://my.stepzen.com/account) page. Once the CLI is configured, make sure you `cd` into the `stepzen` folder and run the following command:

```bash
stepzen start
```

You'll be asked to give a name to the API in the format of `[folder_name]/[endpoint_name]`. By default, the StepZen Netlify Build Plugin wants a folder name of `netlify`, so enter `netify/pets-blog`. The CLI will launch a browser window with a query editor and schema explorer that allows us to test the queries we just launched.

![StepZen Start Query Explorer](https://codimd.s3.shivering-isles.com/demo/uploads/upload_0a5297f54b3ccb4617d8276daf149541.png)

> For more details on how to build GraphQL APIs connected to a database, check out [this blog post](https://stepzen.com/blog/how-to-create-graphql-endpoint-on-database).

## Connecting the StepZen Netlify Build Plugin

Now that we have an initial API built and deployed, what we'd like is to be able to build and deploy our site and our schema at the same time, that way any changes to our schema are deployed whenever we update our site on Netlify. Even better, we'd like this schema to be deployed *prior* to Netlify running its build so that we can access the updated schema at build time. Thankfully, the StepZen Netlify Build Plugin does just that.

The first step is to deploy this site to Netlify. We haven't done anything to populate the content yet, but we need a Netlify site to connect the plugin to. If you haven't already done so, push this site code to a GitHub, GitLab or Bitbucket repository. Then head over to Netlify and click the "New site from git" button in your Netlify dashboard.

Walk through the steps, leaving the defaults for now. For example, the build command can be left as `hugo` and the publish directory as `public`.  However, when it asks you to set environment variables, set one for `HUGO_VERSION` and set the version as `0.74.3`, which is the current version as of this writing (if you're on a newer version of Hugo, feel free to use that instead).

Once the initial deploy is done, head to the "Plugins" tab in the dashboard and then click on "Go to Plugins Directory". Search for "StepZen" and then click the "Install" button.

![Netlify Plugins Directory](https://codimd.s3.shivering-isles.com/demo/uploads/upload_33bf7e246871ec7c46aae5a7ceeae417.png)

We'll be asked which site we want to install the plugin on. Choose the site we just created.

The plugin requires a few additional environment variables to configure it. Head to your site's Netlify dashboard and choose "Site Settings > Build and Deploy > Environment." We should see the `HUGO_VERSION` we added during the creation process. Add the following variables:

* `STEPZEN_ACCOUNT` - is your account name from your [My Account page](https://my.stepzen.com/account).
* `STEPZEN_ADMIN_KEY` is your admin key from your [My Account page](https://my.stepzen.com/account).
* `STEPZEN_NAME` is the endpoint name we gave for our API. When we deployed and tested our API, we called it `netlify/pets-blog`, so here we only need the `pets-blog` as `netlify` is the default folder the plugin assumes (we can override the default folder with the `STEPZEN_FOLDER` environment variable).

That's all that is needed for the plugin to work, but let's set one last variable we'll need when calling our StepZen GraphQL API. Set another environment variable named `STEPZEN_API_KEY` and set it to the value of your API key from your [My Account page](https://my.stepzen.com/account).

Finally, click the "Save" button. Our plugin is configured and any changes we make to our StepZen schema will now be deployed whenever a Netlify build is triggered by checking code into our GitHub repository.

## Connecting Our StepZen API to Hugo

We're ready to connect everything to Hugo. Hugo does not have a built-in way to pull data from an API and generate pages, so we're actually going to write a Node script that will do the work for us. We'll integrate this script into the build process as well and, since the StepZen API is generated before the build is run, this means that we'll be pulling content off the latest version of the API for every build.

First, we'll need to install one npm library called [slugify](https://www.npmjs.com/package/slugify) that helps us turn the titles of posts into a slug that we can use to generate the Markdown file name.

```bash
npm install slugify
```

> Note that we'll hook this all up to the build using `netlify dev`, which automatically injects the environment variables we created in the Netlify dashboard. However, if you want to run this script directly, outside the scope of `netlify dev`, you'll need a library like [dotenv](https://www.npmjs.com/package/dotenv) and a local `.env` file with the value of `STEPZEN_API_KEY` to make it work.

One final step before we work on the script – you'll need a folder for `/content/blog/`, which is where the generated Markdown files will be placed. Since these will be generated on each build, it can be empty, however we need to create a simple `.gitignore` file within the `/content/blog/` directory with the following contents so that the empty folder will stil commit in your git repository.

```yaml
# Ignore everything in this directory
*
# Except this file
!.gitignore
```

Next, we need to create a file named `pullContent.js` in the root of our site. This will be the script that pulls the content and writes the files. Let's walk through what it is doing.

1. It sets up a GraphQL query that will be sent to our StepZen GraphQL API to get all the posts and categories.
2. It sets up a simple template literal that will be used to generate the Markdown files from the data provided by the API.
3. It sets up the `options` that will be sent via `https` to the API, including our StepZen API key environment variable that we set up in our Netlify dashboard and which will be automatically injected for us by `netlify dev`. Note that you need to replace the value of `hostname` with your account name in place of mine (i.e. `biggs`)
4. We call the GraphQL API, loop through the results and generate a page using the template literal for each result. The content is written to a Markdown file in the `/content/blog/` folder we created.

```javascript
const https = require('https');
const fs = require('fs');
const slugify = require('slugify');

const data = JSON.stringify({
  query: `{
    getPosts {
      title
      body
      published
      id
      categories {
        name
      }
    }
  }`,
});

const markdownFileTemplate = (post, categories) => `
---
title: ${post.title}
categories:  ${categories}
published: ${post.published}
---

${post.body}
`;

const options = {
  hostname: 'biggs.stepzen.net',
  path: '/netlify/pets-blog/__graphql',
  port: 443,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    Authorization: 'Apikey ' + process.env.STEPZEN_API_KEY,
    'User-Agent': 'Node',
  },
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (d) => {
    data += d;
  });
  res.on('end', () => {
    const results = JSON.parse(data).data.getPosts;
    results.forEach((post) => {
      let categories = '';
      post.categories.forEach((category) => {
        categories += '\n- ' + category.name;
      });
      let content = markdownFileTemplate(post, categories);
      let filename = './content/blog/' + slugify(post.title) + '.md';
      fs.writeFileSync(filename, content);
    });
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();
```

The final step in the process is to update our build scripts so that this runs every time we test the site locally as well as every time Netlify builds the site. Let's open the `package.json` file in the root directory of our site and add the following scripts:

```json
"scripts": {
    "build": "node pullContent.js && hugo",
    "dev": "node pullContent.js && hugo serve"
  }
```

To make Netlify dev use our new build command instead of the Hugo default, create a `netlify.toml` file in the root of your site with the following contents:

```
[dev]
  command = "npm run dev"
```

We also need to link our local site to the deployed site on Netlify so that it pulls our environment variables locally. From the root of your site, run the following command:

```bash
netlify link
```

You should be able to automatically link your site using the external repository URL (i.e. GitHub, GitLab or Bitbucket). Once that's done, let's test this out locally by running it:

```bash
netlify dev
```

You should see something like the following in your command line (note that the environment variables are being injected and that it is overriding the default command and running `npm run dev` instead).

![netlify dev command line](https://codimd.s3.shivering-isles.com/demo/uploads/upload_1ca40aebaeb43e15979c0e3c9b094ec7.png)

The local site should also automatically open in the browser.

![our blog running locally](https://codimd.s3.shivering-isles.com/demo/uploads/upload_61bb7ca196543659c840d3333dd81afe.png)

We're almost done. Before this will work on Netlify, we also need to update our build command there. In our Netlify site dashboard, open "Site Settings > Build & deploy > Build settings." Click the "Edit settings" button, change the build command to "npm run build" and click the "Save" button.

If you check all the changes into your external Git repository, it should now trigger a build in Netlify that pulls content from our MySQL database and generates the content files to populate our site. 🥳 You can see mine running [here](https://angry-boyd-908ea5.netlify.app/).

## Where To Go From Here

While there were a number of steps involved, we've created a pipeline of content that runs from our MySQL database directly into our static Hugo site generated on Netlify. The key thing to consider about this approach and using StepZen as part of the process is that this same process will work for any data source StepZen connects to, including REST APIs or other databases.

We also don't need to create separate scripts or queries if we have multiple data sources, which we probably will in a "real world" situation. Our one GraphQL query can get data from all our sources in a single query. For instance, if we used a separate API to manage comments for our blog, we could connect that to StepZen and get the post's comments along with the post data in the same query.

I should also note that the core of this process would work for any SSG. We could modify our script, for instance, to work for a Jekyll site. We could generate pages from data in Eleventy using its built-in functionality. We could call our StepZen GraphQL API from `getStaticPaths()` and `getStaticProps()` in Next.js to generate blog posts and more. Or we could even create a simple plugin for Gatsby to integrate our API into Gatsby's data layer, which is also GraphQL-based.

Finally, we could take this some steps further by having database updates call a webhook in Netilfy to trigger a build automatically. Or we could even create a simple admin interface that calls our GraphQL API to allow content editing from within the site (using Netlify Identity, perhaps, for authentication). The point is, GraphQL can help you free yourself from worrying about which backends you are connecting to or how many, opening up a ton of possibilities.
