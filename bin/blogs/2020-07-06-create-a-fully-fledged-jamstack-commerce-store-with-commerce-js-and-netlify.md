---
title: Create a Fully-fledged Jamstack commerce store with Commerce.js and Netlify
description: Learn how to use Commerce.js and React with Next.js to create your
  own Jamstack eCommerce sites in this detailed tutorial with demonstrations
  and code samples.
authors:
  - Jaeriah Tay
date: 2020-07-09
lastmod: 2020-07-09
topics:
  - tutorials
tags:
  - E-commerce
  - Jamstack
  - Next.js
tweet: Learn how to use Commerce.js to create your own Jamstack eCommerce sites
  in this detailed tutorial with demonstrations and code samples.
format: blog
relatedposts:
  - |
    Automate Order Fulfillment w/Stripe Webhooks & Netlify Functions
  - Building a JAMstack Ecommerce Storefront with BigCommerce & Netlify
seo:
  metatitle: How to Build eCommerce Stores on Netlify with Commerce.js and Next.js
  metadescription: Learn how to use Commerce.js and Next.js to create your own Jamstack eCommerce sites. Follow this detailed tutorial for hands-on demonstrations and code samples.
---
![Commerce.js Next.js demo store screenshot](/v3/img/blog/commercejs-nextjs-demo-store-1-.jpg "Commerce.js Next.js demo store screenshot")

Performance and experience expectations for modern websites are at an all time high. This is especially true for websites that bid for the attention of users with the goal of selling products or services. Commerce websites that are built on the **Jamstack** have a particular edge when it comes to converting users into customers and growing a successful business. **Jamstack** commerce websites are lightning fast, secure, scalable, easily maintainable and hyper flexible for developers to build experiences wherever customers are.

We won’t bore you with [how quickly the eCommerce market is growing](https://twitter.com/2PMinc/status/1261521046290739200), you’ve probably already bought something online this week, and if not this week, then next week for sure. As we continue to buy more online, businesses will need to adapt to become digital first and more technology focused. The concept of headless commerce allows businesses, and developers to build flexible, relevant experiences for the customer on any frontend or device.

So, do commerce businesses that are built on the **Jamstack** have a clear advantage when it comes to delivering frictionless and high converting experiences to customers? We think yes. Being an API-first commerce platform, [Commerce.js by Chec](https://commercejs.com) helps businesses to freely decouple and tool their websites. **Jamstack** architecture, paired with a headless commerce platform, allows businesses to:

*   Curate customer purchasing journeys that are fast, frictionless, and unique to their use case
*   Customise, optimize, and improve the customer experience overtime
*   Integrate conversion enhancing 3rd party services at the cart, checkout and receipt level
*   Test and go live with new designs and sales channels (video, IOT, mobile app) with ease and speed

Building a commerce business with Chec/Commerce.js and Netlify gives you the tactical advantage to build better customer experiences. Updates to a product catalogue or enhancements to a checkout form are instantly deployed to Netlify’s global CDN network and are rendered for your customers to experience.

So let’s build something shall we? Using Commerce.js, Next.js and Netlify, we’ll build a powerful, open source, fully fledged commerce website that you can then build on-top of or pick apart at the end.

[![Chec see live demo button](https://cdn.chec.io/email/assets/marketing/chec-demo-btn.svg)](https://commercejs-demo-store.netlify.app)

You can explore the code directly in the [GitHub repository here](https://github.com/chec/example-checkout-hifi).

* * *

Tutorial – Deploy a fully-fledged eCommerce store in minutes
------------------------------------------------------------

For this tutorial, we’ve developed a fully customizable, open-source, commerce storefront. This demo comes with all the bells and whistles needed to sell online, and best of all, it’s ready for you to go live with today. This is a production ready storefront, using modern development tools and frameworks. We’ve bundled together tools like Next.js and Redux so you can easily add in your necessary data, customize or A/B test any elements, add new features or extend on other capabilities. The possibilities to add and build on-top of this resource are truly endless!

As mentioned above, we are using the **Jamstack,** a term coined by Netlify, which is an architectural pattern for building modern applications. It effectively stands for a stack that includes **JavaScript**, **APIs**, and **Markup**. A **Jamstack** approach allows for greater extendability and dynamic capabilities within your project. We have chosen to go with Next.js as the **JavaScript** frontend framework. Next.js has all the benefits of server-side and client-side rendering, statically serving your application for better performance, SEO, and easier scalability. Read [more on all the other features of Next.js](https://nextjs.org/#features).

Chec is the **API** platform that powers your commerce store, Commerce.js is the SDK layer we will be using to help with abstracting complex commerce logic. Lastly, Netlify will take the built static **Markup** generated at build time and deploy to its global CDN.

Alright, enough on selling you on this kickass stack of Next.js, Commerce.js, and Netlify, let’s jam!

**Summary of Tutorial**

In this tutorial, we will walk you through:

*   Creating a Chec account and setting up your store
*   Deploying the application with Netlify
*   The core parts of the eCommerce application development
    *   Using Redux for the application’s state management
    *   Pre-fetching server-side rendered data for the static pages
    *   Rendering our product pages
    *   Handling our cart functionality
    *   Handling our checkout process
    *   Rendering an order confirmation page with print receipt functionality
*   Customizing and extending the project

**Prerequisites**

This tutorial assumes you have some basic to mid-level knowledge of React, ES6 and state management concepts with Redux. Throughout the tutorial where intermediate to advanced concepts are referenced, links to documentation will be included.

* * *

Setup
-----

**Step 1: Install initial dependencies**

Open up your command line and install the Chec CLI and Netlify CLI. Be sure your Node version is up-to-date before installing the CLI tools. We’ve created the [Chec CLI](https://commercejs.com/blog/getting-started-with-the-chec-cli) for ease of managing your store right in the command line.

1.  Node (v8.2.0 or higher)
2.  Chec CLI

    # Install Chec CLI globally
    yarn global add @chec/cli


**Step 2: Creating a Chec account**

Now that you’ve installed Chec CLI globally, you will be able to access the list of `chec [COMMANDS]`, one of which is registering for a Chec account. Let’s go ahead and get that set up!

    # Open the Chec registration page in your browser
    chec register


Follow the rest of the walk-through to set up your merchant details. Alternatively, you can [register for a Chec account here](https://dashboard.chec.io/signup).

Deploying the application
-------------------------

Now you get to see the real beauty of deploying a static site with minimal effort. Netlify has created a powerful mechanism for deployment, continuous integration, and maintenance of modern applications. There are two options to launch a live deploy of the application:

1.  **One-click deploy** helps to deploy the application with… you guessed it, one single click!
2.  **Manual setup** involves cloning the repo into your local environment and manually deploying the application to Netlify. Skip to the manual steps below if you prefer to go this route.

**One-click Deploy**

The **one-click deploy** allows you to connect Netlify to your GitHub account to clone the `commercejs-nextjs-demo-store` repository and deploy it automatically. Be sure to go to [Netlify](https://app.netlify.com/signup) and sign up for an account before clicking the deploy button.

[![Deploy to Netlify button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store)

By clicking the above button, you will be navigated to the Netlify’s direct deploy page with the project’s repository passed as parameters in the url.

![Connect to GitHub](/v3/img/blog/commerce-connect-to-github.png)

Click the **Connect to GitHub** button, name your repository and enter in this [public key](https://github.com/chec/commercejs-nextjs-demo-store/blob/master/.env.example#L2) in the “Chec Public Key” input. Please note that for the purpose of getting you up and running with a live deploy preview of the demo store, we provided you with the Public Key from our demo merchant account. Now, save & deploy your site.

![Save and Deploy screen](/v3/img/blog/commerce-save-and-deploy.png)

Once you’ve hit that save button and run a deploy, you will now see a live preview of the site! Hooray, you’ve just deployed a full application! So go on and explore all the functionalities of a full-blown commerce application.

**Manual setup**

Manual setup involves cloning the repo into your local environment, seeding the provided sample data into your Chec account and deploying to Netlify.

**Step 1: Clone the repository and install dependencies**

    # Clone the repository locally, optionally rename the repo
    git clone https://github.com/chec/commercejs-nextjs-demo-store.git chec-store

    # Change into the directory and install dependencies
    cd chec-store && yarn


**Step 2: Set up your environment variables**

Replace the sample `.env.example` dotenv file at the root of the project to store your Chec `public_key` as well as your `secret_key`.

    # Copy from source file to destination file .env
    cp .env.example .env


You can access your API key under Setup, then navigate to the Developer tab to copy your Public Key and Secret Key:

![Accessing public key](/v3/img/blog/commerce-public_key.png)

Replace the provided `CHEC_PUBLIC_KEY` with your own and fill in your `CHEC_SECRET_KEY` in the `.env` file. The secret key is necessary for the seed script to have the proper permission to seed the sample data in `/seeds` into your Chec account. Remove the secret key once the data is seeded.

    // .env

    # Replace the provided demo merchant account public API key with your own
    CHEC_PUBLIC_KEY=
    CHEC_API_URL=https://api.chec.io
    # Secret key is used with chec/seeder to access your Chec account to seed it with sample data
    CHEC_SECRET_KEY=
    NODE_ENV=


This file is meant to not be committed to source control and also will be hidden in file browsers.

**Step 3:** **Seed the data necessary to power your Chec store and start your development environment**

Now run the below commands to execute the seeding script and start up your development environment.

    # Seed data in /seeds into your Chec account
    yarn seed


The seeding may take a bit of time but once it’s completed, you should see this in your command line.

![Seeding completed confirmation message](/v3/img/blog/commerce-seeded.png)

The utility script, [Chec Seeder](https://github.com/chec/seeder), in the dev dependencies is used to enable the seeding of data into your Chec account. Currently, we have included the products, categories and assets data in `.json` files that are going to be seeded into your Chec account when you run the seed scripts along with providing your API keys.

Now head on over to [http://localhost:3000](http://localhost:3000) after starting your development, your site should now be populated with the sample data!

    # Run your development environment on http://localhost:3000
    yarn dev


**Step 4: Make needed changes and push your project to a remote repository**

Make your necessary changes then create a new remote repository in GitHub to push up your local project.

    # Specify new remote repo to sync with cloned project
    git remote set-url origin http://github.com/YOU/YOUR_REPO

    # Push local repo to remote repo
    git push -u origin master


**Step 5: Deploy to Netlify**

Once your above configurations are set up, you are ready to deploy your site! Be sure to sign up for a [Netlify](https://app.netlify.com/signup) account if you haven’t already and log in to it. Click the “New site from Git” button and give access to the repository you created in the previous step. Your build settings are automatically filled out for you from the `netlify.toml` in the template. To enter your environment variables, click “Show advanced” then “New variable and fill in the k_ey_ input as **CHEC\_PUBLIC\_KEY** and the _value_ input with your **Public Key.** You can access your API key in your Chec dashboard under Setup, then navigate to the Developer tab to copy your Public Key. The value is automatically encrypted and stored in Netlify’s system.

Now go ahead and click the "deploy site" to see your live site! Any changes now made to the application and pushed to GitHub (or other version control platforms) will update your live site.

**We mentioned that this Jamstack** **commerce template comes packed with all the bells and whistles above, what exactly are they?**

*   An aesthetically-clean landing page with categories and latest products data
*   A collections page filtered by your product categories
*   Dynamic product detail pages with all your product information
*   A functional cart modal showing the current items in cart
*   A checkout page handling your order
*   A thank you order confirmation page and an option to print the order receipt

Now let’s get into the thick of the jam, and walk through the core parts of the application.

* * *

Project walk-through
--------------------

There are definitely some advanced concepts and strategies in this project that we will be glazing over, but have included additional resources and encourage you to read into them after.

As you will see later on, we have separated the application into using server-side rendering, static generation, and client-side rendering strategies to cater to varying use-cases. With a stack that includes Next.js, Commerce.js, and Netlify, we are gifted the flexibility of making computational strategies on a per-page basis. A hybrid project like this also helps decrease the runtime library that is being downloaded to the client’s browsers by not having to do as much backwards compatibility, and so increasing speed and performance of the application. We’ve made this project open-source for the community and can’t wait to see what you end up deploying!

For brevity, we are going to focus on three core parts of the project, in addition to the initial configuration of `store`, `pages`, `components`. We will be covering each of these areas as we walk through the project.

We also want to clarify that this guide is a walk-through rather than a detailed technical tutorial. Being a fully functional open-sourced template, you will be up and running with a commerce application as soon as you deploy! Feel free to jump in, customize it and build on top of it as you see fit!

**Initial configuration**

One of the major benefits of Next.js is that it requires minimal configuration due to it being a framework built on top of React. Next.js has bootstrapped all the good parts of React with all the under-the-hood project configurations already done for you. We’d only need to come in and set up the Chec client in the application. Let’s dive in to what we’ve done here!

In `next.config.js` at the root of your project, you can see that we are using the `dotenv` module to load the Chec API key from the `process.env`. During build time, the value of `CHEC_PUBLIC_KEY` will be replaced by the actual key provided in our `.env` file. This allows us to consume our Chec client API key stored in the environment variable.

    // next.config.js

    require('dotenv').config()

    const withSass = require('@zeit/next-sass')
    module.exports = withSass({
      /* config options here */
      webpack: config => {
        config.node = {
          fs: 'empty'
        }
        return config
      },
      env: {
        'CHEC_PUBLIC_KEY': process.env.CHEC_PUBLIC_KEY
      }
    })


Commerce.js is an SDK built on top of Chec’s API abstracting all the complex commerce logic away, leaving your hands free to create a unique shopping user experience. The SDK comes packed with all the [frontend oriented functionality](https://commercejs.com/docs/overview/getting-started.html#features) to get a customer-facing web-store up and running. In order to utilize all the features of Commerce.js, we’ve imported the module in `lib/commerce.js` so that we can have access to our `Commerce` object instance throughout our application.

    // lib/commerce.js

    import Commerce from '@chec/commerce.js';

    const checAPIKey = process.env.CHEC_PUBLIC_KEY;
    export default new Commerce(checAPIKey);


**Using Redux for state management**

Redux’s main function is to consolidate all the data your application so it works with a state container called the `store`, the one source of truth if you will. Redux in isolation is a fully agnostic library with neatly packaged helper functions for you to pull into your application to manage an application's state. Effectively, it is a state management tool that makes it easy to manage state across shared components. The main grunt work is the initial setup of the `store` and wiring it up to your application. It might be a great idea of get a bit more familiar with [some features of Redux](https://redux.js.org/) if you haven’t already.

To build a robust commerce application, we will be dealing with a considerable amount of data and not to mention, state changes while the application runs. Since one of the core beauties of Next.js is its hybrid ability to handle pre-rendering at build time as well as client-side rendering, we will be wiring up Redux to store and render our state at build-time and at run-time. A core principle of **Jamstack** is to pre-render as much as possible, during build phase rather than in the requests timeline, and have the data be made available to pre-populate. We chose to pre-fetch our products and categories static data, so that data will populate the necessary views on initial page load and be publicly cached by Netlify’s CDN. For a commerce application, pre-rendering data is very useful as it increases performance and optimizes SEO. You can read more about [when pre-rendering is favourable](https://www.netlify.com/blog/2016/11/22/prerendering-explained/).

After the load of intro above to get you familiar with our state management scope, we are now going to dive into the `action` (fore-shadowing pun here) bit we promised you earlier.

_From here on out, whenever code blocks are referenced, we are intentionally leaving out code lines that do not relate to the sections we are currently focusing on. We will cascade the code in as we go through the guide._

If you look in our `package.json`, you can see an additional Redux wrapper library `next-redux-wrapper` along with `react-redux`. Redux works the same way in React as it would in Next.js when dealing with client-side rendering. When pre-rendering data is involved, it gets a bit trickier. We will not get into the nitty gritty, but will reference [this wrapper’s documentation](https://github.com/kirill-konshin/next-redux-wrapper#redux-wrapper-for-nextjs--) for you.

The core concepts of Redux comes in three main building blocks: **store**, **actions**, and **reducers**. The **store** is the state container we have been referring to where your data lives. **Actions** are event emitters to get the data out from our application to our Redux store. API calls to Chec backend are examples of actions. Lastly, think of **reducers** like a funnel that takes in the initial state of your application, run some actions on it, and returns out an updated state.

    // store/index.js

    import { createStore, applyMiddleware, compose } from 'redux';
    import { createWrapper, HYDRATE } from 'next-redux-wrapper';
    import thunk from 'redux-thunk';

    import {
      STORE_PRODUCTS,
      STORE_CATEGORIES,
    } from './actions/actionTypes';

    // Declare initial state
    const initialState = {
      categories: [],
      products: [],
    };

    // Create reducer
    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case HYDRATE:
          // These are server side rendered from MyApp.getInitialProps, everything else should
          // come from client side state and should not be overwritten here by subsequent server
          // side hydration actions.
          const { categories, products } = action.payload;
          return { ...state, categories, products };
        // Dispatch in App SSR
        // Check if action dispatched is STORE_CATEGORIES and act on that
        case STORE_CATEGORIES:
          return { ...state, categories: action.payload };
        // Dispatch in App SSR
        // Check if action dispatched is STORE_PRODUCTS and act on that
        case STORE_PRODUCTS:
          return { ...state, products: action.payload };
        default:
          return state;
      }
    };

    // Enable Redux dev tools
    const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
      ? window.__REDUX_DEVTOOLS_EXTENSION__(
        // { trace: true, traceLimit: 25 }
      )
      : f => f;
    // Create a makeStore function and pass in reducer to create the store
    const makeStore = () => {
      return createStore(
        reducer,
        initialState,
        compose(applyMiddleware(thunk), devtools)
      );
    };
    const debug = !process.env.NETLIFY;
    // Export an assembled wrapper with store's data
    export const wrapper = createWrapper(makeStore, { debug });


In the above code block, we’ve first imported in methods from `redux`, `next-redux-wrapper` and `redux-thunk`. We then define our initial state and pass it into a `reducer` function along with `actions`. By using conditional statements in our `reducer`, we determine what actions are being dispatched and then act on it.

Actions are object payloads that require a unique identifier property `type`, which tells you _‘what happened’_ or _‘what action took place'_ during a page load or an emitted event. When actions are dispatched in the application’s components, it triggers an update to the store.

The `next-redux-wrapper` library comes with a handy `createWrapper` function we are using to wrap our store instance created by Redux’s `createStore`. As you can see we are exporting a `wrapper` from our `store/index.js` with a newly created store.

**Pre-fetching data for the static pages**

    // pages/_app.js

    import App from 'next/app';
    import React from 'react';
    import '../style/scss/style.scss';
    import { wrapper } from '../store';
    import commerce from '../lib/commerce';
    import collections from '../lib/collections';

    class MyApp extends App {
      static async getInitialProps({ Component, ctx }) {
        // Fetch data on load
        // Fetch categories
        const categoriesResponse = await commerce.categories.list();
        // Match static data record to API data to find category name
        const categories = categoriesResponse.data.map(item => ({
          ...collections.find(data => data.slug === item.slug),
          ...item,
        }));
        // Fetch products
        const { data: products } = await commerce.products.list();
        // Allows store to be updated via the dispatch action
        ctx.store.dispatch({ type: 'STORE_CATEGORIES', payload: categories });
        ctx.store.dispatch({ type: 'STORE_PRODUCTS', payload: products });
        return {
          pageProps: {
            // Call page-level getInitialProps
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
          },
        };
      }
      render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
      }
    }
    export default wrapper.withRedux(MyApp);


In our entry point component, which is our `_app.js`, you’ll see we are passing the created store to the app component. We fetch our static data products and categories using `getInitialProps`, a [Next.js method](https://nextjs.org/docs/api-reference/data-fetching/getInitialProps) which enables the initial data population at build time. The `commerce.js` functions [`commerce.categories.list()`](https://commercejs.com/docs/api/#list-all-categories) and [`commerce.products.list()`](https://commercejs.com/docs/api/#list-all-products) are used to fetch the initial data from the products and categories endpoints. Next.js takes the props returned from the `getInitialProps` method, and funnel it through our Redux store to return a newly updated store object.

On successful requests to pre-fetch our products and categories data, we receive the store’s state on initial page load as you can see below in our terminal. There is the performance advantage of pre-fetching data and populating your pages with your static content in that we don’t have to wait for API responses on browser requests. (W_e have condensed the built data here._)

    [ wait ]  compiling ...
    [ ready ] compiled successfully - ready on http://localhost:3000
    1. getProps created store with state { categories: [], products: [] }
    3. getProps after dispatches has store state {
      categories: [
        {
          image: '/images/collection/1.png',
          slug: 'facial-products',
          link: '/collection',
          translateRatio: 30,
          id: 'cat_xA12JwrK8oPjnk',
          name: 'Facial Products',
          description: '',
          created: 1583103163
        },
        products: [
        {
          id: 'prod_VKXmwDm1norgDA',
          created: 1585538674,
          last_updated: 1586063842,
          active: true,
          permalink: 'shampoo-conditioner',
          name: 'Shampoo & Conditioner Set',
          description: '<p>Weightless, color safe, and cleansing Verb Ghost shampoo and conditioner set.</p>',
          price: [Object],
          quantity: 0,
          media: [Object],
          sku: null,
          conditionals: [Object],
          is: [Object],
          has: [Object],
          collects: [Object],
          checkout_url: [Object],
          variants: [Array],
          categories: [Array]
        },
    4. WrappedApp.constructor created new store with {
      initialState: {
        categories: [ [Object], [Object], [Object] ],
        products: [
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object], [Object],
          [Object]
        ],
      },
      initialStateFromGSPorGSSR: undefined
    }


**Rendering our product pages**

Now that we’ve laid out the structure of our state management and pre-fetched our products and categories data objects, how exactly is this data flowing into the rest of the components that require it? Enter the `connect` higher order function from `react-redux`, a [higher-order component](https://reactjs.org/docs/higher-order-components.html) and an advanced technique in React. For the sake of simplicity, we like to use analogies, think of `connect` being the vein that simply helps our data to flow into our application.

There are three component and pages in which we first utilize our pre-rendered products and categories data. `CategoryBanner.js`, and `ProductsBanner.js` in `components/homepage/` and `Collections.js` in `components/collections/` In these components, we are connecting our store’s state and passing as props to render these views. In Next.js, page components have automatic routing as part of the [built-in routing system](https://nextjs.org/docs/routing/introduction).

    {% raw %}
    // components/collections/Collections.js

    import React, { Component } from 'react';
    import Link from 'next/link';
    import Head from 'next/head';
    import { connect } from 'react-redux';

    class Collections extends Component {
      constructor(props) {
        super(props);
        this.sidebar = React.createRef();
      }

      renderSidebar() {
        const { categories } = this.props;
        return (
          <>
          {categories.map(category => (
          <div key={category.id} className="custom-container">
            <div className="row">
              <div className="col-2 d-none d-lg-block position-relative">
                <p className="font-size-title font-weight-medium mb-3">
                  {category.name}
                </p>
                <Link href={`/collection#${category.slug}`}>
                  <div className="mb-5">
                    <div className="d-flex">
                      <p className="mb-2 position-relative cursor-pointer">
                        Products
                        <span
                          className="position-absolute font-size-tiny text-right"
                          style={{ right: '-12px', top: '-4px' }}
                        >
                          {category.count}
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          ))}
        </>
        )
      }


      /**
      * Filter products by category
      */
       filterProductsByCat(catSlug) {
        const { categories, products } = this.props;
        const cat = categories.find(category => category.slug === catSlug);
        if (!cat) {
          return [];
        }
        return products.filter(product => product.categories.find(productCategory => productCategory.id === cat.id));
      }


      /**
      * Render collections based on categories available in data
      */
      renderCollection() {
        const { categories } = this.props;
        const reg = /(<([^>]+)>)/ig;
        return (
          <div className="collection">
            {categories.map(category => (
              <div key={category.id}>
                  <p className="font-size-title font-weight-medium mb-4" id={category.slug}>
                    {category.name}
                  </p>
                  <div className="row mb-5 collection-1">
                    { this.filterProductsByCat(category.slug).map(product => (
                      <div key={product.id} className="col-6 col-sm-4 col-md-3">
                        <Link href="/product/[permalink]" as={`/product/${product.permalink}`}>
                          <a className="mb-5 d-block font-color-black cursor-pointer">
                            <div
                              className="mb-3"
                              style={{
                                paddingBottom: '125%',
                                background: `url("${product.media.source}") center center/cover`
                              }}
                            />
                            <p className="font-size-subheader mb-2 font-weight-medium">
                              {product.name}
                            </p>
                            <p className="mb-2 font-color-medium">
                              {product.description.replace(reg, '')}
                            </p>
                            <p className="font-size-subheader font-weight-medium pb-2 borderbottom border-color-black">
                              {product.price.formatted_with_symbol}
                            </p>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
              </div>
            ))}
          </div>
        )
      }

      render() {
        return (
          <div className="py-5 my-5">
            <Head>
              <title>Collections</title>
            </Head>

            <div className="py-4">
              {/* Sidebar */}
              <div
                ref={this.sidebar}
                className="position-fixed left-0 right-0"
                style={{ top: '7.5rem' }}
              >
                { this.renderSidebar() }
              </div>

              {/* Main Content */}
              <div ref={this.page} className="custom-container">
                <div className="row">
                  <div className="col-12 col-lg-10 offset-lg-2">
                    { this.renderCollection() }
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    export default connect(state => state)(Collections);
    {% endraw %}

Let’s walk through `Collection.js` as some magic is happening in here. In order for us to be able to filter through our `products` array according to its `categories` property, we have written a filter function to map through products and output only the products matching the `catSlug` being passed in at render. Having the content pre-rendered during build-time, the `collections` page would be publicly cached when hosted on Netlify’s CDN, which is a huge SEO bonus for a commerce web application.

**Dynamic routing to product detail pages**

Let’s now switch gears to static-site generation (SSG) for our single product detail pages. We create our product detail pages by querying the Chec API using the new [static generation hook](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) `getStaticProps()`, these pages are then automatically pre-built as static pages. The Chec API structure for `products` allows us to query for the specific product with the `id` or `permalink`. You may notice the square brackets around the `[permalink].js` file in `pages/product/`. This means the route is dynamically queried with `getStaticPaths()`.

When the user clicks a single product link from the collections page, Next.js then handles which pre-built product detail page to render according to client-side dynamic routing. The product’s permalink/slug value is being provided as parameters to `getStaticPaths()` to help statically generate the pages at build time.

    // pages/product/[permalink].js

    // Use getStaticPaths() to render product display page according to page path
    export async function getStaticPaths() {
      const { data: products } = await commerce.products.list();
      // Store product permalink paths to render at build time
      const paths = products.map(product => ({
        params: {
          permalink: product.permalink,
        },
      }));
      // We'll pre-render only these paths at build time.
      return {
        paths,
        // Fallback false means other routes should 404.
        fallback: false,
      }
    }
    // Use getStaticProps() to fetch the product data and render in view
    export async function getStaticProps({ params: { permalink } }) {
      // params contains the product `permalink`.
      // If the route is /product/shampoo-conditioner, then params.permalink is shampoo-conditioner
      const product = await commerce.products.retrieve(permalink, { type: 'permalink '});
      // Pass product data to the page via props
      return {
        props: {
          product,
        },
      };
    }
    export default connect(state => state)(Product);


You may notice that each product page also contains additional image assets in the side carousel. Although the Chec dashboard UI doesn’t currently support adding multiple images per product, you may use the [create new asset](https://commercejs.com/docs/api/#create-new-asset) API endpoint to upload new assets and associate the additional image assets to each product at [this endpoint](https://commercejs.com/docs/api/#add-asset-to-product).

* * *

Earlier on, you might’ve also noticed we imported a module called `redux-thunk` in our `_app.js`. [Redux Thunk](https://github.com/reduxjs/redux-thunk) is a promise-based middleware that helps to handle chained async actions. In our `ProductDetail.js`, we are using our first async cart action created in `store/cartActions.js`. When a user clicks the ‘add to cart’ button from the product detail page, the action with Commerce.js [`commerce.cart.add()`](https://commercejs.com/docs/api/#add-item-to-cart) is being dispatched, sent to our Redux store which gets updated, and a new UI is reflected in our cart and header component.

    // components/productAssets/ProductDetail.js

    import React, { Component } from 'react';
    import ReviewStars from './ReviewStars';
    import VariantSelector from '../productAssets/VariantSelector';
    import { connect } from 'react-redux';
    import { addToCart } from '../../store/actions/cartActions';

    class ProductDetail extends Component {
      constructor(props) {
        super(props)
        this.state = {
          selectedOptions: [];

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleSelectOption = this.handleSelectOption.bind(this);
      }

      componentDidMount() {
          this.setSelectedOptions();
      }
      componentDidUpdate(prevProps) {
        if (!prevProps.product || prevProps.product.id !== this.props.product.id) {
          // Product was changed, reset selected variant options
          this.setSelectedOptions();
        }
      }
      /**
       * Work out which options should be selected by which variants
       */
      setSelectedOptions() {
        this.setState((state, props) => ({
          selectedOptions: {
            // Assign the first option as the selected value for each variant
            ...props.product.variants.reduce((acc, variant) => ({
              ...acc,
              [variant.id]: variant.options[0].id,
            }), {}),
          },
        }));
      }

      /**
       * On selecting variant
       */
      handleSelectOption(variantId, optionId) {
        this.setState({
          selectedOptions: {
            ...this.state.selectedOptions,
            [variantId]: optionId,
          },
        });
      }

      /**
       * Get price of selected option
       */
      getPrice() {
        const { price: { raw: base }, variants } = this.props.product;
        const { selectedOptions } = this.state;
        if (!selectedOptions || typeof selectedOptions !== 'object') {
          return base;
        }
        const options = Object.entries(selectedOptions);
        return base + options.reduce((acc, [variant, option]) => {
          const variantDetail = variants.find(candidate => candidate.id === variant);
          if (!variantDetail) {
            return acc;
          }
          const optionDetail = variantDetail.options.find(candidate => candidate.id === option);
          if (!optionDetail) {
            return acc;
          }
          return acc + optionDetail.price.raw;
        }, 0);
      }

      /**
       * Add to Cart
       */
      handleAddToCart() {
        const { product } = this.props
        const { selectedOptions } = this.state;
        this.props.dispatch(addToCart(product.id, 1, selectedOptions))
      }

      render() {
        const { product } = this.props;
        const { name, description, variants, formatted_with_symbol: price } = product;
        const { selectedOptions } = this.state;
        const reg = /(<([^>]+)>)/ig;
        return (
          <div>
            {/* Product Summary */}
            <p className="font-size-display3 font-family-secondary mt-2 mb-2">
              {name}
            </p>
            <div className="mb-4 pb-3 font-size-subheader">{(description || '').replace(reg, '')}</div>
            {/* Product Variant */}
              <div className="d-none d-sm-block">
                <VariantSelector
                  className="mb-3"
                  variants={variants}
                  onSelectOption={this.handleSelectOption}
                  selectedOptions={selectedOptions}
                />
              </div>
            {/* Add to Cart & Price */}
            <div className="d-flex py-4">
              <button onClick={this.handleAddToCart}
                  className="h-56 bg-black font-color-white pl-3 pr-4 d-flex align-items-center flex-grow-1" type="button">
                <span className="flex-grow-1 mr-3 text-center">
                  Add to cart
                </span>
                <span className="border-left border-color-white pl-3">
                ${this.getPrice()}
                </span>
              </button>
            </div>
          </div>
        );
      }
    }
    export default connect(state => state)(ProductDetail);


**Cart**

With user-specific requests where the output such as cart and checkout depends on the individual user, we will be handling the requests with client-side rendering. In other words, the content is fetched from Chec API running on the client-side browser.

Below you can see that we have updated our `/store` to handle our cart and checkout actions.

    // store/index.js

    import { createStore, applyMiddleware, compose } from 'redux';
    import { createWrapper, HYDRATE } from 'next-redux-wrapper';
    import thunk from 'redux-thunk';
    import {
      STORE_PRODUCTS,
      STORE_CATEGORIES,
      RETRIEVE_CART_SUCCESS,
      ADD_TO_CART_SUCCESS,
      UPDATE_CART_ITEM_SUCCESS,
      REMOVE_FROM_CART_SUCCESS,
      CAPTURE_ORDER_SUCCESS,
      GENERATE_CHECKOUT_TOKEN,
      GET_SHIPPING_OPTIONS,
      REMOVE_SHIPPING_OPTIONS,
      UPDATE_CHECKOUT_LIVE_OBJECT,
      ABORT_CHECKOUT,
    } from './actions/actionTypes';

    // Declare initial state
    const initialState = {
      categories: [],
      products: [],
      cart: {},
      checkout: {
        shippingOptions: [],
        checkoutTokenObject: {},
      },
      orderReceipt: {},
    };

    // Create reducer
    const reducer = (state = initialState, action) => {
      switch (action.type) {
        case HYDRATE:
          return { ...state, ...action.payload  };
        // Dispatch in App SSR
        // Check if action dispatched is STORE_CATEGORIES and act on that
        case STORE_CATEGORIES:
          return { ...state, categories: action.payload };
        // Dispatch in App SSR
        // Check if action dispatched is STORE_PRODUCTS and act on that
        case STORE_PRODUCTS:
          return { ...state, products: action.payload };
        // Dispatch in Product client-side
        // Check if action dispatched is STORE_CART and act on that
        case RETRIEVE_CART_SUCCESS:
          return { ...state, cart: action.payload };
        // Dispatch in ProductDetail client-side
        // Check if action dispatched is ADD_TO_CART and act on that
        case ADD_TO_CART_SUCCESS:
          return { ...state, cart: action.payload.cart };
        // Dispatch in Cart client-side
        // Check if action dispatched is UPDATE_CART_ITEM and act on that
        case UPDATE_CART_ITEM_SUCCESS:
          return { ...state, cart: action.payload.cart };
        // Dispatch in Cart client-side
        // Check if action dispatched is REMOVE_FROM_CART and act on that
        case REMOVE_FROM_CART_SUCCESS:
          return { ...state, cart: action.payload.cart };
        case GENERATE_CHECKOUT_TOKEN:
          return { ...state, checkout: { ...state.checkout, checkoutTokenObject: action.payload }};
        case GET_SHIPPING_OPTIONS:
          return { ...state, checkout: { ...state.checkout, shippingOptions: action.payload }};
        case REMOVE_SHIPPING_OPTIONS:
          return { ...state, checkout: { ...state.checkout, shippingOptions: [] }};
        case UPDATE_CHECKOUT_LIVE_OBJECT:
          return { ...state, checkout: { ...state.checkout, checkoutTokenObject: { ...state.checkout.checkoutTokenObject, live: action.payload }}};
        case ABORT_CHECKOUT:
          return { ...state, checkout: initialState.checkout };
        case CAPTURE_ORDER_SUCCESS:
          return { ...state, checkout: initialState.checkout, orderReceipt: action.payload };
        default:
          return state;
      }
    };

    // Enable Redux dev tools
    const devtools = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__)
      ? window.__REDUX_DEVTOOLS_EXTENSION__(
        // { trace: true, traceLimit: 25 }
      )
      : f => f;

    // Create a makeStore function and pass in reducer to create the store
    const makeStore = () => {
      return createStore(
        reducer,
        initialState,
        compose(applyMiddleware(thunk), devtools)
      );
    };

    const debug = !process.env.NETLIFY;

    // Export an assembled wrapper with store's data
    export const wrapper = createWrapper(makeStore, { debug });


Going back to our `store/actions/`, note that we have defined our action constants in `actionTypes` and then created our actions in `cartActions` using those constants.

    // store/actions/actionTypes.js

    // Define cart action types
    export const RETRIEVE_CART_SUCCESS = 'RETRIEVE_CART_SUCCESS';
    export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
    export const REMOVE_FROM_CART_SUCCESS = 'REMOVE_FROM_CART_SUCCESS';
    export const UPDATE_CART_ITEM_SUCCESS = 'UPDATE_CART_ITEM_SUCCESS';


In our cart modal UI, the increment/decrement and remove from cart buttons will trigger the cart actions `REMOVE_FROM_CART` and `UPDATE_CART_ITEM` given by the dispatch. The Redux `reducer` will then update the store’s state. Our cart component is then able to pull the `cart` object in as props from the `line_items` array to display the items in our UI. When events like these are fired from the client, only the necessary changes are updated in the UI. How React does this is by comparing the differences of UI in its [virtual DOM](https://reactjs.org/docs/faq-internals.html), then only re-rendering the required updated change instead of the entire view whenever the state changes. The virtual DOM was created by React and other modern frameworks to reduce costly rendering and re-rendering of the UI.

Using our cart `actionTypes` we created the async cart actions using Commerce.js helper functions [`commerce.cart.retrieve()`](https://commercejs.com/docs/api/#retrieve-a-cart), [`commerce.cart.update()`](https://commercejs.com/docs/api/#update-item-in-cart), [`commerce.cart.remove()`](https://commercejs.com/docs/api/#remove-item-from-cart). We have also added success and error states to handle the requests timeline for easier debugging.

    // store/actions/cartActions.js

    import commerce from '../../lib/commerce'
    import {
      RETRIEVE_CART_SUCCESS,
      RETRIEVE_CART_ERROR,
      ADD_TO_CART_SUCCESS,
      ADD_TO_CART_ERROR,
      UPDATE_CART_ITEM_SUCCESS,
      UPDATE_CART_ITEM_ERROR,
      REMOVE_FROM_CART_SUCCESS,
      REMOVE_FROM_CART_ERROR
    } from './actionTypes';

    // Create all Cart actions, define the callbacks to the reducers
    /**
     * Set cart and update Redux store
     */
    export const retrieveCartSuccess = (cart) => {
      return {
        type: RETRIEVE_CART_SUCCESS,
        payload: cart
      }
    }

    /**
     * Handle error on retrieve cart fail
     */
    export const retrieveCartError = (error) => {
      console.log('Error retrieving cart', error)
      return {
        type: RETRIEVE_CART_ERROR,
      }
    }

    /**
     * Async retrieve cart from API
     */
    export const retrieveCart = () => dispatch => commerce.cart.retrieve()
      .then(cart => {
        dispatch(retrieveCartSuccess(cart))
      })
      .catch(error => {
        dispatch(retrieveCartError(error))
      });

    /**
     * Handle add to cart success and update store
     */
    export const addToCartSuccess = (product) => {
      return {
        type: ADD_TO_CART_SUCCESS,
        payload: product
      }
    }

    /**
     * Handle error on adding product to cart
     */
    export const addToCartError = (error) => {
      console.log('Error adding product to cart', error);
      return {
        type: ADD_TO_CART_ERROR,
      }
    }

    /**
     * Async add product to cart
     */
    export const addToCart = (productId, quantity, selectedOption) => (dispatch) => commerce.cart.add(productId, quantity, selectedOption)
      .then(product => {
        dispatch(addToCartSuccess(product))
      })
      .catch(error => {
        dispatch(addToCartError(error))
      });

    /**
     * Handle update cart item success and update store
     */
    export const updateCartItemSuccess = (item) => {
      return {
        type: UPDATE_CART_ITEM_SUCCESS,
        payload: item
      }
    }

    /**
     * Handle error on updating cart item
     */
    export const updateCartItemError = (error) => {
      console.log('Error updating cart item', error);
      return {
        type: UPDATE_CART_ITEM_ERROR
      }
    }

    /**
     * Async update cart item
     */
    export const updateCartItem = (lineItemId, quantity) => (dispatch) => commerce.cart.update(lineItemId, { quantity })
      .then(item => {
        dispatch(updateCartItemSuccess(item)
      })
      .catch(error => {
        dispatch(updateCartItemError(error))
      });

    /**
     * Handle remove cart item success and update store
     */
    export const removeFromCartSuccess = (item) => {
      return {
        type: REMOVE_FROM_CART_SUCCESS,
        payload: item
      }
    }

    /**
     * Handle remove cart item error
     */
    export const removeFromCartError = (error) => {
      console.log('Error removing cart item', error)
      return {
        type: REMOVE_FROM_CART_ERROR
      }
    }

    /**
     * Async remove cart item
     */
    export const removeFromCart = (lineItemId) => (dispatch) => commerce.cart.remove(lineItemId)
      .then(resp => {
        dispatch(removeFromCartSuccess(resp))
      })
      .catch(error => {
        dispatch(removeFromCartError(error))
      });


In our `cartItem.js` in `components/cart/` is where we are retrieving our cart action functions to dispatch in the component. The actions are triggered when the user clicks the increment/decrement or remove buttons.

    {% raw %}
    // components/cart/CartItem.js

    import React, { Component } from 'react';
    import { connect } from 'react-redux';
    import { removeFromCart, updateCartItem } from '../../store/actions/cartActions';
    class CartItem extends Component {
      constructor(props) {
        super(props);

        this.handleUpdateCartItem = this.handleUpdateCartItem.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
      }

      /**
       * Update cart item
       */
      handleUpdateCartItem(lineItem, quantity) {
        this.props.dispatch(updateCartItem(lineItem, quantity));
      }

      /**
       * Remove item from cart
       */
      handleRemoveFromCart(lineItem) {
        this.props.dispatch(removeFromCart(lineItem));
      }

      render() {
        const { item } = this.props;
        return (
          <div className="px-4 px-md-5 mb-2">
            <div className="cart-item d-flex">
              <div
                className="cart-item--image mr-4"
                style={{ backgroundImage: `url("${item.media.source}")` }}
              ></div>
              <div className="flex-grow-1 borderbottom border-color-gray400 h-100">
                <div className="d-flex justify-content-between mb-2">
                  <p>{item.name}</p>
                  <p className="text-right font-weight-medium">
                    ${item.line_total.formatted_with_symbol}
                  </p>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  {item.variants.map((variant, i) =>
                    <p key={i} className="font-color-light font-weight-small">
                      {variant.variant_name}: {variant.option_name}
                    </p>
                  )}
                </div>
                <div className="d-flex align-items-center justify-content-between pt-2 pb-4">
                  <div className="d-flex align-items-center">
                    <button className="p-0 bg-transparent" onClick={() => item.quantity > 1 ? this.handleUpdateCartItem(item.id, item.quantity -1) : this.handleRemoveFromCart(item.id)}>
                      <img src="/icon/minus.svg" className="w-16" alt="Minus icon"/>
                    </button>
                    <p className="text-center px-3">{item.quantity}</p>
                    <button className="p-0 bg-transparent" onClick={() => this.handleUpdateCartItem(item.id, item.quantity +1)} >
                      <img src="/icon/plus.svg" className="w-16" alt="Plus icon"/>
                    </button>
                  </div>
                  <p className="text-right text-decoration-underline font-color-medium cursor-pointer" onClick={() => this.handleRemoveFromCart(item.id)}>
                    Remove
                  </p>
                </div>
              </div>
            </div>
        </div>
      )
      }
    }

    export default connect(state => state)(CartItem);
    {% endraw %}

**Handling our checkout functionality**

Following the same format with defining our cart action types, we are doing the same for our checkout action types to handle our checkout flow.

    // store/actions/actionTypes.js

    // Define checkout action types
    export const GENERATE_CHECKOUT_TOKEN = 'GENERATE_CHECKOUT_TOKEN';
    export const GET_SHIPPING_OPTIONS = 'GET_SHIPPING_OPTIONS';
    export const REMOVE_SHIPPING_OPTIONS = 'REMOVE_SHIPPING_OPTIONS';
    export const UPDATE_CHECKOUT_LIVE_OBJECT = 'UPDATE_CHECKOUT_LIVE_OBJECT';
    export const ABORT_CHECKOUT = 'ABORT_CHECKOUT';
    export const CAPTURE_ORDER_SUCCESS = 'CAPTURE_ORDER_SUCCESS';


In our `checkoutActions.js` file, we imported in our action types and use the same action creator concepts to create async calls to the Chec API using Commerce.js. We first generated our checkout token using our previously retrieved `cartId` as a parameter to initiate capturing our order later on. `getShippingOptionsForCheckout()` is a Commerce.js [checkout helper](https://commercejs.com/docs/api/#checkout-helpers) that returns a list of shipping options according to the country selected. In this case, with the country predefined as US, will return the shipping options available for the US. We then wrote functions to validate and update the [checkout live object](https://commercejs.com/docs/api/#get-the-live-object) when the shipping option and discount is set. We then use the updated checkout live object to reflect in our checkout summary UI.

    // store/actions/checkoutActions.js

    import commerce from '../../lib/commerce';
    import {
      GET_SHIPPING_OPTIONS,
      GENERATE_CHECKOUT_TOKEN,
      REMOVE_SHIPPING_OPTIONS,
      UPDATE_CHECKOUT_LIVE_OBJECT,
      ABORT_CHECKOUT,
      CAPTURE_ORDER_SUCCESS,
    } from './actionTypes';

    // Use commerce.js checkout helper, commerce.checkout.getShippingOptions
    // to return list of available shipping methods for the provided checkout token
    export const getShippingOptionsForCheckout = (checkoutId, country = 'US') => (dispatch) => {
      return commerce.checkout.getShippingOptions(checkoutId, { country })
        .then(shippingOptions => {
          dispatch({
            type: GET_SHIPPING_OPTIONS,
            payload: shippingOptions,
          })
          return shippingOptions;
        })
        .catch(error => {
          dispatch({ // assuming there are no available shipping options
            type: REMOVE_SHIPPING_OPTIONS
          })
          console.log('error while fetching list of available shipping options', error);
          throw error;
        })
    }

    // Use commerce.js checkout generateToken method to
    // generate a checkout token object from a cart.id
    // which can be used to initiate the process of capturing an order
    export const generateCheckoutTokenFromCart = (cartId) => (dispatch) => {
      return commerce.checkout.generateToken(cartId, { type: 'cart' }).then(checkout => {
        dispatch({
          type: GENERATE_CHECKOUT_TOKEN,
          payload: checkout,
        })
        return checkout;
      }).catch(error => {
        dispatch({
          type: ABORT_CHECKOUT,
        })
        console.log('error while generating checkout token object');
        throw error;
      })
    }

    // Validates a shipping method for the provided checkout token, and applies it to the checkout.
    export const setShippingOptionInCheckout = (checkoutId, shippingOptionId, country, region) => (dispatch) => {
      return commerce.checkout.checkShippingOption(checkoutId, {
        shipping_option_id: shippingOptionId,
        country,
        region,
      }).then(resp => {
        if (resp.valid) {
          dispatch({
            type: UPDATE_CHECKOUT_LIVE_OBJECT,
            payload: resp.live,
          })
        }
      }).catch(error => {
        console.log('error while attempting to update live object with selected shipping option')
        throw error;
      })
    }

    // Validates a discount code for the provided checkout token and applies it to the checkout.
    export const setDiscountCodeInCheckout = (checkoutId, code) => (dispatch) => {
      return commerce.checkout.checkDiscount(checkoutId, { code })
        .then(resp => {
          dispatch({
            type: UPDATE_CHECKOUT_LIVE_OBJECT,
            payload: resp.live,
          });
          return resp;
        })
        .catch(error => {
          console.log('error while attempting to update live object with discount code');
          throw error;
        })
    }

    // Captures an order and payment by providing the checkout id and order data derived from checkout
    export const captureOrder = (checkoutId, order) => (dispatch) => {
      return commerce.checkout.capture(checkoutId, order)
        .then(resp => {
          // reset checkout, and set global order-receipt state
          dispatch({
            type: CAPTURE_ORDER_SUCCESS,
            payload: resp,
          });
          return resp;
        }).catch(error => {
          console.log('error while attempting to capture order in captureOrder checkout action creator');
          throw error;
        })
    }


**Order confirmation screen**

The last checkout action you see above, `captureOrder`, encapsulates our order object `orderReceipt` to be used in our order confirmation page. For our order confirmation view, we use the [dynamic](https://nextjs.org/docs/advanced-features/dynamic-import) Next.js function to import our `Confirm.js` component in to `Pages/checkout/confirm.js` in order to persist our `orderReceipt` object to post-checkout. We’ve done up a simple thank you page that renders details with a confirmation reference of `orderReceipt.customer_reference` and an order summary listing our order `line_items`.

    // components/checkout/Confirm.js

    import React, { Component } from 'react';
    import Root from '../../components/common/Root';
    import Link from 'next/link';
    import { connect } from 'react-redux';
    class Confirm extends Component {
      constructor(props) {
        super(props);
        this.handlePrint = this.handlePrint.bind(this);
      }

      /**
       * Print the window using the browser's native print functionality, if possible
       */
      handlePrint() {
        if (window && window.print) {
          window.print();
        }
      }

      renderPrintButton() {
        if (typeof window === 'undefined') {
          return null;
        }
        return (
          <button onClick={this.handlePrint} className="d-flex align-items-center text-decoration-underline cursor-pointer mt-3 mt-sm-0 no-print bg-transparent" role="button">
            <img src="/icon/print.svg" className="mr-2 w-20 no-print"/>
            <div className="no-print">Print Receipt</div>
          </button>
        );
      }

      render() {
        const { orderReceipt } = this.props;
        return (
          <Root>
            <div className="pt-5 mt-2 checkout-confirm receipt">
              {/* Row */}
              <div className="row mt-4">
                <div className="col-12 col-md-10 col-lg-6 offset-md-1 offset-lg-0">
                  <div className="h-100 d-flex flex-column align-items-center justify-content-center py-5 px-4 px-sm-5">
                    <div className="bg-success700 h-64 w-64 d-flex rounded-circle align-items-center justify-content-center mb-4">
                      <img src="/icon/check.svg" className="w-40"/>
                    </div>
                    <h3 className="text-center font-family-secondary mb-3">
                      Thank you for your purchase!
                    </h3>
                    <h4 className="text-center font-size-subheader mb-3">
                    Your order completed successfully
                    </h4>
                    <p className="text-center font-color-light mb-5">
                      Here is your order number for reference : {orderReceipt.customer_reference}
                    </p>
                    <div className="d-flex w-100 justify-content-center flex-column flex-sm-row">
                      <Link href="/">
                        <button className="checkout-confirm-buttons h-48 px-3 flex-grow-1 border bg-white border-color-gray500 font-color-light mb-2 mb-sm-0 mr-sm-2 no-print">
                          Go back home
                        </button>
                      </Link>
                      <Link href="/collection">
                        <button className="checkout-confirm-buttons h-48 px-3 flex-grow-1 bg-black font-color-white no-print">
                          Continue shopping
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="bg-brand300 checkout-receipt p-4 p-md-5 overflow-auto">
                    <div className="p-sm-4">
                      <div className="border-bottom border-color-gray400 d-flex justify-content-between align-items-start pb-3 flex-column flex-sm-row">
                        <div>
                          <p className="font-color-light mb-2">
                            Receipt Number: {orderReceipt.customer_reference}
                          </p>
                          <p className="font-size-subheader">Order Details</p>
                        </div>
                        { this.renderPrintButton() }
                      </div>
                      <div className="border-bottom border-color-gray400 d-flex align-items-start py-4 flex-column flex-sm-row">
                        <div>
                          <p className="font-color-light mr-4 mb-3 mb-sm-0">
                            Ships to
                          </p>
                        </div>
                        <div className="flex-grow-1">
                          <p className="font-color-medium">{orderReceipt.shipping.street}</p>
                          <p className="font-color-medium">{orderReceipt.shipping.town_city}, {orderReceipt.shipping.country_state}</p>
                          <p className="font-color-medium">{orderReceipt.shipping.postal_zip_code}, {orderReceipt.shipping.country}</p>
                        </div>
                      </div>
                      <div className="py-4 borderbottom border-color-gray400">
                        {orderReceipt.order.line_items.map((item, index) => (
                          <>
                            <div className="d-flex flex-grow-1 mb-3">
                              <div className="flex-grow-1">
                                <p className="mb-2 font-weight-medium">
                                  {item.quantity} x {item.product_name}
                                </p>
                                <p className="font-color-light">
                                  {item.variants[0].variant_name}: {item.variants[0].option_name}
                                </p>
                              </div>
                              <div className="text-right font-weight-semibold">
                                {item.line_total.formatted_with_symbol}
                              </div>
                            </div>
                            </>
                        ))}
                      </div>
                      <div className="py-3 borderbottom border-color-black">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <p>Subtotal</p>
                            <p className="text-right font-weight-medium">${orderReceipt.order.total_with_tax.formatted_with_code}</p>
                          </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-2 pt-3">
                        <p className="font-size-title font-weight-semibold">
                          Order total
                        </p>
                        <p className="text-right font-weight-semibold font-size-title">${orderReceipt.order.total.formatted_with_code}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Root>
        );
      }
    }

    export default connect(state => state)(Confirm);


Customization and Extendability
-------------------------------

Wow, we’ve made it this far! Thank your coffee for kicking in and kept you going ‘til this point! Give yourself a breather and a huge pat on the back, bravo and brava! We sure covered a lot of ground here, let’s recap to see what we’ve accomplished here:

*   You created a Chec merchant account

*   You deployed the demo store to Netlify using the one-click feature or manual setup

*   We went through the below concepts of the demo store application:

    *   How we used Redux for the application’s state management
    *   How we pre-fetched data at build time to render the home page and collections page
    *   How we use static site generation to render our product display pages
    *   How we handled our cart and checkout functionalities on the client-side
    *   How we handled our post-checkout flow with an order confirmation page and print-receipt functionality

The fun does not end here! There are so many other options and features you can customize and extend on to ensure the best brand experience for your customers.

Some enhancements to consider
-----------------------------

*   Adding shipping zones and enable shipping options for each product in your dashboard
*   Customizing the styling
    *   All global styles are done using SASS and Bootstrap
*   A/B testing unique checkout designs and flow
*   Integrating other backend tools like Content Management Systems, Customer Support, Fulfilment services, and more
*   Fetching real client reviews from reviews APIs
*   Adding search products functionality
*   Leveraging [webhooks](https://commercejs.com/blog/webhooks-pizza-and-order-notifications-via-twilio) to automate post checkout actions

Now what?
---------

If you’d like to get involved for more custom commerce projects and applications, we’d love to connect!

*   Join the [Commerce.js community Slack](https://chec-commercejs-community.herokuapp.com/)
*   Share a project with [@CommerceJS](https://twitter.com/CommerceJs) on Twitter
*   Check out other CommerceJS [integration resources](https://commercejs.com/resources/)
*   Get in touch [hello@commercejs.com](mailto:hello@commercejs.com)

About the author
----------------

[Jaeriah Tay](https://jaeriah.com/) is a multilingual Frontend developer/designer currently building and designing product at [Chec/Commerce.js](https://commercejs.com/). Outside of work, you will find her engaging with the developer community, whipping up new recipes, and slinging back espresso shots.