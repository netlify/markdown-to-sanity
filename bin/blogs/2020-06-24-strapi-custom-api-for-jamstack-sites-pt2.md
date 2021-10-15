---
title: >
  Use a Custom Strapi Back-End to Build a Jamstack App
description: >
  Have a custom back-end or API? You can build a Jamstack app with that! Learn how it works in this step-by-step tutorial.
authors:
  - Jason Lengstorf
date: 2020-06-24T00:00:00.000Z
lastmod: 2020-06-24T00:00:00.000Z
topics:
  - tutorials
tags:
  - custom-strapi-back-end
  - apis
  - how-to
  - serverless
  - strapi
  - tutorial
tweet: ""
format: blog
seo:
  metatitle: >
    Use a Custom Strapi Back-End to Build a Jamstack App
  metadescription: >
    Have a custom back-end or API? You can build a Jamstack app with that! Learn how it works in this step-by-step tutorial.
  ogimage: /img/blog/custom-strapi-api-jamstack-app.png
relatedposts:
  - Learn How to Accept Money on Jamstack Sites in 38 Minutes
  - Building Large Sites on Netlify
---

Can Jamstack apps use custom backends to create dynamic app experiences? Absolutely!

This is the conclusion of a [two-part tutorial series](/tags/custom-strapi-back-end/?utm_source=blog&utm_medium=strapi-custom-backend-jl&utm_campaign=devex) teaching you how to build a complete custom backend to house our custom data, then create a Jamstack app to both read and write to that backend.

In [part 1](/blog/2020/06/23/create-a-custom-back-end-for-jamstack-apps-with-strapi/?utm_source=blog&utm_medium=strapi-custom-backend-jl&utm_campaign=devex), you used [Strapi](https://strapi.io/) to build a custom API to store corgi data, pets, and boops.

In part 2 (this article), you’ll build a Jamstack app that uses the custom backend to:

- asynchronously load data from the backend
- update the backend when users click a button

**By the end of this series, you’ll create a fully functional frontend and backend for a Jamstack app deployed to production!**

## tl;dr

In this part of the tutorial, you will:

- write [serverless functions with Netlify Functions](/products/functions/?utm_source=blog&utm_medium=strapi-custom-backend-jl&utm_campaign=devex) to read and write data to Strapi
- build a frontend with HTML and vanilla JavaScript to call the serverless functions and display data from the backend
- deploy the frontend to production with [Netlify](/products/build/?utm_source=blog&utm_medium=strapi-custom-backend-jl&utm_campaign=devex)

**If you’d like to skip straight to the code, you can [see the app demo](https://strapi-corgi-pets.netlify.app/) or [review the source code on GitHub](https://github.com/learnwithjason/strapi-corgi-pets).**

## Create a Jamstack frontend From a GitHub Template

Now that we have a backend ready, we can build out our front-end! To give the frontend a ready-made layout so you have a nice-looking app without having to write the boilerplate, this tutorial will [use the *Learn With Jason* demo starter](https://github.com/learnwithjason/demo-base) as a base.

### Create a new frontend repository.

Visit https://github.com/learnwithjason/demo-base and click the “Use This Template” button at the top-right of the page, then choose a name for your new repo and click “Create repository from template”.

![Create a new GitHub repo using a template repository.](/img/blog/github-create-repo-from-template.png)

> **Heads up!** If you don’t want to use the starter, that’s totally fine! The demo code will be unchanged — it just won’t look as freakin’ sweet as the demo base does. <span style="font-style: normal">😎</span>

### Clone the new repo to your computer.

To start writing code, click the “clone or download” button and copy the URL to your clipboard.

![Repo cloning URL in the GitHub UI.](/img/blog/github-clone-repo.png)

In your terminal, run the following commands to clone the repo, move into the new project folder, and install dependencies:

```bash
# clone the repository
git clone git@github.com:YOUR_USER_OR_ORG_NAME/YOUR_REPO_NAME.git

# move into the new project
cd strapi-corgi-pets/

# install dependencies
npm install
```

### Get set up to write code.

Open `src/index.liquid` — this is where you’ll write all of the frontend code for this tutorial. Remove the contents and start with this:

```html
---
layout: default
title: Strapi on Digital Ocean + Netlify Functions
---

<h1>TODO: build an app!</h1>
```

If you don’t already have the [Netlify CLI](https://docs.netlify.com/cli/get-started/?utm_source=blog&utm_medium=strapi-custom-backend-jl&utm_campaign=devex) installed, run `npm i -g netlify-cli`, then start the app with `ntl dev`, then visit `http://localhost:8888` in your browser.

![Demo in the browser with a TODO headline.](/img/blog/front-end-demo-start.png)

> **Heads up!** This tutorial uses [Netlify Dev](/products/dev/?utm_source=blog&utm_medium=strapi-custom-backend-jl&utm_campaign=devex) to make it easy to test serverless functions locally. If you don’t want to use the Netlify CLI, you can also deploy the site to test the functions.

## Create the Custom frontend to Display Data from Strapi

Now that the frontend repo is created and set up for coding, it’s time to write some code!

### Add styles for the app (optional).

If you want to make your frontend look snazzy, add these styles to `src/index.liquid`:

```diff-html
  ---
  layout: default
  title: Strapi on Digital Ocean + Netlify Functions
  ---

+ <style>
+   .corgi-kennel {
+     display: grid;
+     gap: 1rem;
+     grid-template-columns: repeat(auto-fit, 300px);
+     text-align: center;
+   }
+   .corgi img {
+     height: 250px;
+     width: 100%;
+     object-fit: cover;
+   }
+   .credit {
+     color: var(--text-muted);
+     font-weight: 200;
+     margin-top: 0;
+   }
+   .reactions {
+     display: flex;
+     justify-content: space-around;
+   }
+   .pet,
+   .boop {
+     display: flex;
+     flex-direction: column;
+   }
+   .count {
+     color: var(--black);
+     font-size: 1.5rem;
+     font-weight: 900;
+   }
+   .pet button,
+   .boop button {
+     background: var(--light-gray);
+     border: none;
+     border-radius: 0.25rem;
+     color: var(--gray-dark);
+     font-family: var(--font-family);
+     font-size: 1rem;
+     font-weight: 900;
+     padding: 0.25rem 0.5rem;
+   }
+ </style>
+
  <h1>TODO: build an app!</h1>
```

These styles set up each corgi photo in a grid on the page and styles the reaction buttons and counts to line up below the photo. The CSS variables are set in the demo base, so you can leave them out or set new values if you decided not to use the demo base for your frontend.

### Add HTML markup for the frontend.

Now that we have styles ready, we can write the markup for our frontend. 

```diff-html
  </style>
 
- <h1>TODO: build an app!</h1>
+ <h1>Look at These Good Doggos</h1>
+
+ <div class="corgi-kennel"></div>
+
+ <template id="corgi">
+   <div class="corgi">
+     <img src="" alt="" />
+     <p class="credit"></p>
+     <div class="reactions">
+       <div class="pet">
+         <span class="count"></span>
+         <button>Pet This Corgo</button>
+       </div>
+       <div class="boop">
+         <span class="count"></span>
+         <button>Boop This Corgo</button>
+       </div>
+     </div>
+   </div>
+ </template>
```

This code has three components:

1. A heading
2. A div to contain the corgi images
3. An HTML template to provide the markup for a corgi image and reaction buttons, which we’ll use to add each corgi image from our backend to the page

### Create a serverless function that loads the corgi entries.

To get data from the backend into the front-end, you *could* just directly hit your Strapi API endpoints. However, this would create a handful of issues:

1. You don’t necessarily want the whole world to know how to find the Strapi instance
2. If you set an API token to restrict access, you can’t send that from the frontend without exposing it
3. It means dealing with [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), which can be a headache

To avoid these issues, we’re going to use a serverless function to proxy the request, which gives you advantages over directly hitting Strapi endpoints:

1. The source of data is hidden from the browser — snoopers can only see that a serverless function exists, not where it sources content from
2. API keys can be used securely in a serverless function by setting environment variables
3. The serverless function can make requests to other APIs without CORS issues, and the function itself lives on your site’s domain, eliminating CORS problems altogether

Because of these advantages — and since [Netlify Functions](/products/functions/?utm_source=blog&utm_medium=strapi-custom-backend-jl&utm_campaign=devex) are quick to set up — this tutorial will use a serverless function to access your Strapi instance.

To start, install `node-fetch`, which allows you to use the Fetch API in the Node environment.

```bash
# install the dependency for Netlify Functions
npm install node-fetch
```

Inside `functions/load-corgis.js`, add the following code:

```js
const fetch = require('node-fetch');

exports.handler = async () => {
  const response = await fetch('http://167.172.202.57/corgis')
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
```

> **Heads up!** Don't forget to use your own Strapi Droplet IP address in the fetch call!

This function exports a `handler`, which sends off a `GET` request using the Fetch API to your Strapi server. The serverless function acts as a proxy between your app and the actual Strapi server, which gives you extra control over how people access the data.

Once you’ve saved this, run `ntl dev` again, then visit [`http://localhost:8888/.netlify/functions/load-corgis`](http://localhost:8888/.netlify/functions/load-corgis) to see your corgi data loaded!

![Corgi data from Strapi loaded from a Netlify serverless function.](/img/blog/netlify-functions-corgi-data.png)

### Call the serverless function to load corgi data into the frontend.

All the way at the bottom of `src/index.liquid`, below the template, let’s add JavaScript to load our corgis from the serverless function:

```diff-js
  </template>
+
+ <script>
+   async function loadCorgis() {
+     const data = await fetch('/.netlify/functions/load-corgis')
+       .then((res) => res.json())
+       .catch((err) => console.error(err));
+ 
+     data.forEach((corgi) => {
+       console.log(corgi);
+     });
+   }
+ 
+   loadCorgis();
+ </script>
```

This code creates a function that loads corgis using our serverless function, then loops through each corgi and — for now, at least — logs it to the console.

![Corgi data logged in the console.](/img/blog/front-end-data-console-logging.png)

### Use the HTML template to display corgi data on screen.

Next, let’s write the JavaScript that takes that data and combines it with our template to actually show the corgis in our app.

```diff-js
  <script>
    async function loadCorgis() {
      const data = await fetch('/.netlify/functions/load-corgis')
        .then((res) => res.json())
        .catch((err) => console.error(err));

+     const template = document.getElementById('corgi');
+     const container = document.querySelector('.corgi-kennel');

      data.forEach((corgi) => {
-       console.log(corgi);
+       // use the template to add the corgi information into a new DOM node
+       const node = template.content.cloneNode(true);
+
+       const img = node.querySelector('img');
+       img.src = corgi.photo;
+       img.alt = corgi.title;
+
+       node.querySelector('.credit').innerText = `Photo by ${corgi.credit}`;
+
+       // show the current reaction counts for each corgi
+       const pets = corgi.reactions.filter((r) => r.type === 'pet');
+       const boops = corgi.reactions.filter((r) => r.type === 'boop');
+       const pet = node.querySelector('.pet');
+       const boop = node.querySelector('.boop');
+
+       pet.querySelector('.count').innerText = pets.length;
+       boop.querySelector('.count').innerText = boops.length;
+
+.      // add the corgi to the page! show me that good doggo!
+       container.appendChild(node);
      });
    }

    loadCorgis();
  </script>
```

This code selects the template node and the corgi container div node, then creates a new DOM node for each corgi and inserts the corgi data into the template before appending it to the container.

Finally! Save this file, then look in your browser to see the corgi content we all came for!

![Corgi images displaying in the front-end with reaction counts and buttons.](/img/blog/front-end-corgi-display.png)

## Write to a Custom Strapi backend Using Serverless Functions

Next, let’s make those “pet” and “boop” buttons work!

### Create a serverless function to add reactions

To save reactions to Strapi, we need another serverless functions. Create `functions/add-reaction.js` and place the following code inside:

```js
const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { corgi, type } = JSON.parse(event.body);
  const response = await fetch('http://167.172.202.57/reactions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      type,
      corgi,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
```

> **Heads up!** Don't forget to use your own Strapi Droplet IP address in the fetch call!

This sends a `POST` request to Strapi telling it which reaction type to add for which corgi — now we need to write the frontend code to send over the right data to create reactions.

### Add the client-side JavaScript to handle user interactions

When someone clicks a button, you want to make sure to save their reaction and increment the counter in their browser.

To do this, add the following JavaScript to the script section of `src/index.liquid`:

```diff-js
  <script>
+   async function addReaction(corgi, node, type) {
+     const response = await fetch('/.netlify/functions/add-reaction', {
+       method: 'POST',
+       headers: {
+         'Content-Type': 'application/json',
+       },
+       body: JSON.stringify({
+         type,
+         corgi,
+       }),
+     })
+       .then((res) => res.json())
+       .catch((err) => console.error(err));
+
+     // increment the counter’s value by 1
+     const countNode = node.querySelector('.count');
+     countNode.innerText = Number(countNode.innerText) + 1;
+   }

    async function loadCorgis() {
      // use the template to add the corgi information into a new DOM node
      const data = await fetch('/.netlify/functions/load-corgis')
        .then((res) => res.json())
        .catch((err) => console.error(err));

      const template = document.getElementById('corgi');
      const container = document.querySelector('.corgi-kennel');

      data.forEach((corgi) => {
        const node = template.content.cloneNode(true);

        const img = node.querySelector('img');
        img.src = corgi.photo;
        img.alt = corgi.title;

        node.querySelector('.credit').innerText = `Photo by ${corgi.credit}`;

        // show the current reaction counts for each corgi
        const pets = corgi.reactions.filter((r) => r.type === 'pet');
        const boops = corgi.reactions.filter((r) => r.type === 'boop');
        const pet = node.querySelector('.pet');
        const boop = node.querySelector('.boop');

        pet.querySelector('.count').innerText = pets.length;
        boop.querySelector('.count').innerText = boops.length;

+       // when someone clicks a reaction button, save it and update the count
+       const petHandler = () => addReaction(corgi.id, pet, 'pet');
+       const boopHandler = () => addReaction(corgi.id, boop, 'boop');
+
+       pet.querySelector('button').addEventListener('click', petHandler);
+       boop.querySelector('button').addEventListener('click', boopHandler);

        // add the corgi to the page! show me that good doggo!
        container.appendChild(node);
      });
    }

    loadCorgis();
  </script>
```

This creates a click handler that will send off a request to the serverless function and increment the appropriate reaction count for both the “pet” and “boop” buttons.

Save this, reload the browser, then click the reaction buttons to pet and boop these corgis!

![Reaction counts stored and retrieved from Strapi using Netlify Functions.](/img/blog/front-end-reaction-counts.png)

Refresh the page and/or load this in another browser to see that your reactions persist between page loads!

## Summary

**Hot dog! You just build and deployed a full-blown Jamstack app *and* a custom backend for it!** 

In [part 1 of this series](/blog/2020/06/23/create-a-custom-back-end-for-jamstack-apps-with-strapi/?utm_source=blog&utm_medium=strapi-custom-backend-jl&utm_campaign=devex), you:

1. Created a new Strapi instance using on a DigitalOcean Droplet
2. Defined custom types (corgis and reactions) and set permissions for accessing them

Then, in this part, you:

3. Created serverless functions to read from your backend using Netlify Functions
4. Wrote an app frontend using HTML, JavaScript, and CSS to load data from your backend asynchronously, then display your corgis
5. Wrote JavaScript to save reactions to your backend and update the frontend

That’s a significant amount of work! Great job!

**This also shows the power of the Jamstack: in total, you were able to configure your entire backend with no code at all; your whole frontend is fewer than 150 lines of code.** Holy buckets!

## What to Do Next

To go further, check out these resources for more information:

- [Check out the live demo](https://strapi-corgi-pets.netlify.app/)
- [Look at the frontend source code](https://github.com/learnwithjason/strapi-corgi-pets)
- [Learn more about Netlify Functions](/products/functions/?utm_source=blog&utm_medium=strapi-custom-backend-jl&utm_campaign=devex)
- [Set up Strapi as a CMS for Gatsby](https://www.learnwithjason.dev/set-up-strapi-as-a-cms-for-gatsby)
- [Learn more about Strapi](https://strapi.io/)

What will you build with Strapi and Netlify? [Hit me up on Twitter and let me know!](https://twitter.com/compose/tweet?text=Learn%20how%20to%20create%20a%20custom%20@strapi%20back-end%20for%20Jamstack%20sites%20using%20@Netlify%20Functions,%20by%20@jlengstorf&url=https://www.netlify.com/blog/2020/06/22/create-a-custom-back-end-for-jamstack-apps-with-strapi/?utm_source=twitter%26utm_medium=strapi-custom-backend-jl%26utm_campaign=devex)
