---
title: Saving data to Supabase and getting it back again
description: "How to add a database to your web project with Supabase and
  interact with it using serverless functions "
authors:
  - Phil Hawksworth
date: 2021-06-28
lastmod: 2021-06-28
topics:
  - tutorials
tags:
  - Database
  - Serverless
  - API
tweet: ""
format: blog
relatedposts:
  - Building Serverless CRUD apps with Netlify Functions & FaunaDB
  - Netlify Functions - for an unrivaled serverless workflow
seo:
  metadescription: "How to add a database to your web project with Supabase and
    interact with it using serverless functions "
  metatitle: Saving data to Supabase and getting it back again
  ogimage: /img/blog/og-blog-supabase.png
---
[Supabase](https://supabase.io) is the most recent *database as a service* to catch my eye. It has an elegant API, lovely documentation, and a nice shallow on-ramp which means that you can start doing useful things with it very quickly. 

I commonly use serverless functions to save content and also to retrieve it. Let's do that now with Supabase and a couple of [Netlify Functions](https://www.netlify.com/products/functions/).

## Before we begin

If you want to work along with me, you'll need an account on [Supabase](https://supabase.io), which you can create in a few short steps for free. Off you go. I'll wait.

## Creating a database and your first table

Let's make a fresh new database to experiment with, and then we can define a table that we'll send our data to.

Create a Supabase account and sign in and then Click **New project**. 

![Screenshot of Supabase New project screen](/img/blog/supabase-screenshot-new-project.png "Screenshot of Supabase New project screen")

Provide a name, a password, and a region for your new database, and click **Create new project**.

![Screenshot of Supabase New project options screen](/img/blog/supabase-screenshot-new-project-options.png "Screenshot of Supabase New project options screen")

This sometimes takes a moment or two while Supabase generates everything for your new database, including various authentication and authorization schemes, and the API credentials that we'll use in a moment to interact with our new database via its API.

Now we'll need to create some tables. Supabase provides an intuitive UI to help us with this. Click **New Table** and define some columns. For this example, I've created a table to store the date, a text note, and a unique identifier which the database will generate for each new record.

![Screenshot of Supabase New table screen](/img/blog/supabase-screenshot-new-table.png "Screenshot of Supabase New table screen")

We could start editing content directly in the Supabase UI, but instead lets make a function which we'll use to insert data into it programmatically. We'll need to be authorized to do that.

## Getting your creds

Supabase supports several ways for us to authenticate so that we can access the data. By using a serverless function we avoid sending the authentication credentials out over the wire to our client-side code. This means that we can use the service API without leaking sensitive details.

Your functions will need two details from Supabase in order to use the API

1. The address of the database
2. The secret service API key

You can find them both by going to Settings and then API. It's best to stash these in environment variables rather than hard-coding them into your function so that they don't get leaked into your version control.

![Screenshot of Supabase API credentials screen](/img/blog/supabase-screenshot-api-auth.png "Screenshot of Supabase API credentials screen")

## Discovering the API and writing data

Supabase generates API documentation for your database dynamically which is lovely as it means that the docs are contextualized for your database and you can discover how to work with your data quickly.

Let's save some data. A look at the API docs shows us how to install and use the [Supabase JavaScript client](https://github.com/supabase/supabase-js) and also shows us this query:

```javascript
// Insert a row
const { data, error } = await supabase
 .from('notes')
 .insert([
 	{ note: 'I need to not forget this' },
 ])
```

Executing this code will save content into our database table. Let's invoke it in a serverless function after connecting to the database using the Supabase JavaScript client.

```javascript
// Grab our credentials from a .env file or environment variables
require('dotenv').config();
const {
	DATABASE_URL,
	SUPABASE_SERVICE_API_KEY
} = process.env;

// Connect to our database 
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

// Our standard serverless handler function
exports.handler = async event => {

  // Insert a row
	const { data, error } = await supabase
		.from('notes')
 		.insert([
 			{ note: 'I need to not forget this' },
		]);

  // Did it work?
  console.log(data, error);
  
}
```

With [Netlify Functions](https://www.netlify.com/products/functions/) we can put this code into a `netlify/functions` folder  in our project, and Netlify will deploy it for us and give us a URL which will invoke it.

You can find out more about that in the [docs for Netlify Functions](https://docs.netlify.com/functions/overview/) or if you want to go deeper or prefer videos for learning, you should check out this excellent and concise set of videos from [Ben Hong](https://twitter.com/bencodezen) in his Jamstack Explorers mission: [Up and Running with Serverless Functions](https://explorers.netlify.com/learn/up-and-running-with-serverless-functions) 🚀.

## How about reading data?

Another look at the API docs for our database helps us find this code which queries our database.

```javascript
// Get everything from the notes table
let { data: notes, error } = await supabase
	.from('notes')
	.select('*')

// Just return the date and note columns of every note 
let { data: notes, error } = await supabase
	.from('notes')
	.select('date, note')
```

I was pleasantly surprised at how easy I found the Supabase API to navigate. It feels intuitive and logical to me. While experimenting, I found myself wanting to do things like:

### Query for a specific record

We can use `eq()` to find a record which matches a value:

```javascript
let id = "some_id_we_are_curious_about";
let { data: notes, error } = await supabase
	.from('notes')
	.select('date, note')
	.eq('id', id)
```

And the API gives us lots of other ways to filter down the results in our queries. 

```javascript
 .eq('column', 'Equal to')
 .gt('column', 'Greater than')
 .lt('column', 'Less than')
 .gte('column', 'Greater than or equal to')
 .lte('column', 'Less than or equal to')
 .like('column', '%CaseSensitive%')
 .ilike('column', '%CaseInsensitive%')
 .is('column', null)
 .in('column', ['Array', 'Values'])
 .neq('column', 'Not equal to')
```

## Mix and match

Supabase is ready to use with whichever framework or library you are working with. It is a great choice for rapidly adding the ability to persist and query data, either during your build, or dynamically from serverless functions. As a one-stop-shop for hosting a database and providing an expresive API, you can really get moving quickly with it.

Made something? We'd love to see it. Tell us how you are combining Supabase, Netlify and your other favourite tools over on [Twitter](https://twitter.com/Netlify)
