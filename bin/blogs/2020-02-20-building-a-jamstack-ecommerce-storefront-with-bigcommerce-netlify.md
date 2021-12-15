---
title: Building a JAMstack Ecommerce Storefront with BigCommerce & Netlify
description: >-
  Learn how to build a JAMstack Ecommerce Store with BigCommerce, Netlify, &
  Gatsby.
authors:
  - Ashley McKemie
  - Sarfaraz Rydhan
date: '2020-02-21'
lastmod: 2020-07-09
topics:
  - tutorials
tags:
  - Jamstack
  - E-commerce
  - BigCommerce
  - Gatsby
  - Netlify
tweet: ''
format: blog
relatedposts:
  - "Create a Fully-fledged Jamstack commerce store with Commerce.js and Netlify"
seo:
  metadescription: >-
    Follow this in-depth headless commerce tutorial to learn how to build a
    JAMstack Ecommerce store using BigCommerce, Netlify, & Gatsby. Fast,
    performant, optimized ecommerce.
  metatitle: How to Build JAMstack Ecommerce Store - BigCommerce & Netlify
  ogimage: /v3/img/blog/bigcommerce-netlify-headless-tutorial.png
---
There are a number of use cases for building a website on the JAMstack, but the value that static sites provides is especially compelling for companies selling online. Ecommerce is already a significant portion of retail sales, with Statista reporting that global [ecommerce sales were 14% of the total global retail sales](https://www.statista.com/study/10653/e-commerce-worldwide-statista-dossier/). This number is predicted to rise to 16% in 2020, reaching $4.2 billion in sales in the global market. 

Headless commerce is the decoupling of the frontend presentation layer that the shopper sees from the backend commerce functionality that enables merchants to drive the shopper flows, such as checking out or returning products. Merchants [choose a headless  ecommerce approach](https://www.bigcommerce.com/blog/headless-commerce/?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront) for many varied reasons, though the ability to scale quickly using the frontend technology of choice and create fast, personalized shopping experiences are the primary drivers. It’s for these reasons that BigCommerce has spent the last 2 years heavily investing in headless commerce functionality, with a focus on building an open, flexible, API-first platform.

In particular, creating these unique, content-driven, fast shopping experiences is the primary driver for merchants using the JAMstack, as [data shows](https://www.retaildive.com/news/half-of-mobile-shoppers-spend-less-than-3-minutes-on-sites/541037/) this can result in better conversion rates and lowered customer acquisition costs. With BigCommerce and Netlify, merchants get a superior combination of ecommerce functionality, including PCI compliant checkout, and the performance of static sites that are distributed globally on the Netlify CDN and a breeze to manage.   

So, the question you may find yourself asking now is how do I get started building an ecommerce site? Good news! In partnership with [Third and Grove](https://www.thirdandgrove.com/?ref=netlify), BigCommerce has created a starter plugin for deploying a JAMstack ecommerce storefront on Netlify.

{{< toc >}}

## Tutorial: Using the Starter Plugin

Developers are a first class citizen at BigCommerce, and it’s our priority to ensure we make it easy to get started building an integration to the platform, whether it’s an app extending our native capabilities or a [headless storefront](https://developer.bigcommerce.com/api-docs/developers-guide-headless/?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront). As such, providing developers with tools to accelerate their understanding of the platform and development is critical. With [the BigCommerce Netlify starter plugin](https://github.com/bigcommerce/gatsby-bigcommerce-netlify-cms-starter), we’ve created a plugin that allows a developer to get a functioning JAMstack storefront (with sample data), built using Gatsby, up and running in less than 5 minutes.

Check out [the demo storefront](https://bigcommerce-store.netlify.com/) to see what you'll be developing in this tutorial.

### Getting Started

In order to get the storefront up and running, you’ll need to complete a few prerequisites, which are also listed in the starter [READ.me](https://github.com/bigcommerce/gatsby-bigcommerce-netlify-cms-starter/blob/master/README.md), first:

1. Create a BigCommerce store
2. Create a BigCommerce API user
3. Install dependencies 

We’ll assume that you do not already have a BigCommerce store for the rest of this tutorial; however, if you do, you can skip step 1. You may also be able to skip step 2 if you have an API User with the specified scopes.

#### Step 1:  Creating a BigCommerce Store

First, you’ll need to create a BigCommerce trial store, which you can do in just a few easy steps here. This store will have access to all the features you need to run and deploy a headless JAMstack storefront.

As BigCommerce provides our developers and partners with sandbox stores, you can change your trial store to a sandbox later if you decide to continue working with the BigCommerce platform.

#### Step 2:  Creating a BigCommerce API User

Next, you’ll need to create an API user with the necessary scopes to get API credentials that will allow you to successfully read and write data from our APIs. The scopes that you will need for this tutorial are:

* Products: read-only
* Carts: modify

![bigcommerce dashboard api scopes](/v3/img/blog/api_scopes.png)

Follow [these steps](https://developer.bigcommerce.com/api-docs/getting-started/authentication/rest-api-authentication#obtaining-store-api-credentials?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront) to create an API user account on your store. You’ll be creating an API user for a “V2/V3 API Token”.

#### Step 3:  Install Dependencies

Install the following dependencies, if you don’t already have them:

* Node (v8.2.0 or higher)
* Gatsby CLI
* Netlify CLI

### Deploying the Storefront

After you’ve set up your dependencies, you’ll need to get the repo set up and deployed on Netlify to see the storefront. We’ll break this up into 3 major steps:

1. Set up the repo
2. Update environment information
3. Deploy the storefront on Netlify

#### Step 1:  Set up the Repo

In order to set up the repo locally, do the following:

1. Clone the starter repo to your local machine.\
   `git clone https://github.com/bigcommerce/gatsby-bigcommerce-netlify-cms-starter.git bc-storefront`
2. Move to the starter directory and install the dependencies
   `cd bc-storefront`
   `yarn`

#### Step 2:  Updating Environment Information

Once you’ve got the repo setup, you’ll need to set the proper environment variables so that the storefront can successfully connect to the BigCommerce API. You will do this by:

1. Creating an environment file
   `cp SAMPLE.env .env`
2. Update the credentials in the `.env` file using your preferred text editor (Sublime, Vim, etc.). You’ll enter the credentials you received when creating your API user.
   * Store Hash – This is the alphanumeric hash for your particular store. It can be found in the API path

![bigcommerce api credentials txt file setup example](/v3/img/blog/api_credentials.png)

#### Step 3:  Deploy on Netlify

There are a number of methods that you can use to deploy your site with Netlify, but the one that we’ll be using today is via the Netlify CLI. 

Working under the assumption that you already have a Netlify site, you simply just need to do the following:

1. Link to an existing Netlify site
   `netlify link`
2. Build the project
   `npm run build`
3. Deploy to Netlify
   `netlify deploy`

![netlify cli deploy commands example in terminal](/v3/img/blog/netlify_deploy.png)

This is very flexible, so you can use a net new site if you wish or deploy via any of the [many methods that Netlify supports](https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-git?utm_source=blog&utm_campaign=headless-bigcommerce-tutorial-feb-2020&utm_content=jamstack-ecomm-storefront).

### Understanding the Starter Plugin

As you’ll see when you deploy your own BigCommerce storefront on Netlify, the starter plugin comes with a few of the most critical pieces of functionality necessary to run an online storefront:

* View all products (i.e. Products List)
* View single product (i.e. Product Detail Page, PDP)
* Cart
* Checkout

![gatsby netlify bigcommerce headless storefront example catalog and product pages](/v3/img/blog/gatsby-netlify-bigcommerce-product-page-example.gif)

In order to generate the list of all products and the specific product detail pages, we’re pulling the key catalog data from the BigCommerce store via the [catalog API](https://developer.bigcommerce.com/api-reference/store-management/catalog?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront). In the starter plugin, this is actually done by passing configuration options in the “gatsby-config.js” file for the “[gatsby-source-bigcommerce](https://github.com/thirdandgrove/gatsby-source-bigcommerce)” plugin, which is an open source plugin to pull in BigCommerce API data to any Gatsby site.

```
var proxy = require('http-proxy-middleware');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby + BigCommerce + Netlify CMS Starter',
    description:
      'This repo contains an example ecommerce website that is built with Gatsby, BigCommerce and Netlify CMS. It follows the JAMstack architecture by using Git as a single source of truth for content, BigCommerce for catalog / cart / checkout, and Netlify for continuous deployment.'
  },
  plugins: [
    {
      resolve: 'gatsby-source-bigcommerce',
      options: {
        // REQUIRED
        clientId: process.env.API_CLIENT_ID,
        secret: process.env.API_SECRET,
        accessToken: process.env.API_TOKEN,
        storeHash: process.env.API_STORE_HASH,
        endpoints: {
          BigCommerceProducts: '/catalog/products?include=images,variants,custom_fields,options,modifiers,videos',
          BigCommerceCategories: '/catalog/categories',
          BigCommerceBrands: "/catalog/brands"
        }
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048
            }
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static'
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/all.sass'] // applies purging only on the bulma css file
      }
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify' // make sure to keep it last in the array
  ],
  // for avoiding CORS while developing Netlify Functions locally
  // read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': ''
        }
      })
    );
  }
};
```

`gatsby-config.js` file setting API options: <https://github.com/bigcommerce/gatsby-bigcommerce-netlify-cms-starter/blob/master/gatsby-config.js>

All the product pages are built during the Gatsby build process. The main product page, which lists all the products, is generated by transforming the markdown in the `/src/pages/products/index.md` file into HTML and filling in the components with catalog data fetched via graphQL.

```
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProductCard from '../components/bigcommerce/ProductCard';

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  products
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`
      }}>
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow:
            '0.5rem 0 0 rgba(0, 0, 0, 0.75), -0.5rem 0 0 rgba(0, 0, 0, 0.75)',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          color: 'white',
          padding: '1rem'
        }}>
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section bc-product-grid bc-product-grid--archive bc-product-grid--4col">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  products: PropTypes.array
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const products = data.allBigCommerceProducts.nodes;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        products={products}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    }),
    allBigCommerceProducts: PropTypes.shape({
      nodes: PropTypes.array
    })
  })
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    allBigCommerceProducts {
      nodes {
        id
        brand_id
        name
        sku
        price
        calculated_price
        retail_price
        sale_price
        map_price
        bigcommerce_id
        custom_url {
          url
        }
        images {
          url_thumbnail
          url_standard
        }
        variants {
          product_id
          id
          option_values {
            label
            option_display_name
          }
          sku
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
```

`product-page.js` with GraphQL query and product template: <https://github.com/bigcommerce/gatsby-bigcommerce-netlify-cms-starter/blob/master/src/templates/product-page.js>

The product detail pages are created similarly, except that each page is programmatically created in the `gatsby-node.js` file.

```
const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
      allBigCommerceProducts {
        nodes {
          id
          name
          custom_url {
            url
          }
        }
      }
    }
  `);

  if (result.errors) {
    result.errors.forEach(e => console.error(e.toString()));
    return Promise.reject(result.errors);
  }

  const posts = result.data.allMarkdownRemark.edges;
  const products = result.data.allBigCommerceProducts.nodes;

  products.forEach(({ custom_url, id }) => {
    createPage({
      path: `/products${custom_url.url}`,
      component: path.resolve(`src/templates/product-details.js`),
      context: {
        productId: id
      }
    });
  });

  posts.forEach(edge => {
    const id = edge.node.id;
    createPage({
      path: edge.node.fields.slug,
      tags: edge.node.frontmatter.tags,
      component: path.resolve(
        `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
      ),
      // additional data can be passed via context
      context: {
        id
      }
    });
  });

  // Tag pages:
  let tags = [];
  // Iterate through each post, putting all found tags into `tags`
  posts.forEach(edge => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });
  // Eliminate duplicate tags
  tags = _.uniq(tags);

  // Make tag pages
  tags.forEach(tag => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`;

    createPage({
      path: tagPath,
      component: path.resolve(`src/templates/tags.js`),
      context: {
        tag
      }
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
```

`gatsby-node.js` file dynamically creating product detail pages: <https://github.com/bigcommerce/gatsby-bigcommerce-netlify-cms-starter/blob/master/gatsby-node.js>

With the add to cart functionality, we are creating dynamic content using a few components:

* AddtoCartButton
* Cart


```
import React, { useContext } from 'react';
import CartContext from '../../context/CartProvider';

const AddToCartButton = ({ children, productId, variantId }) => {
  const value = useContext(CartContext);
  const addToCart = value && value.addToCart;
  const addingToCart = value && value.state.addingToCart;

  return (
    <div className="bc-product-card">
      <div className="bc-product__actions" data-js="bc-product-group-actions">
        <div className="bc-form bc-product-form">
          <div className="bc-product-form__product-message"></div>
          <button
            className="bc-btn bc-btn--form-submit bc-btn--add_to_cart"
            type="submit"
            disabled={addingToCart === productId}
            onClick={() => addToCart(productId, variantId)}>
            {addingToCart === productId ? 'Adding to Cart' : children}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartButton;
```

`AddToCartButton.js`: <https://github.com/bigcommerce/gatsby-bigcommerce-netlify-cms-starter/blob/master/src/components/bigcommerce/AddToCartButton.js>

As you can see in the code snippet above, when the “Add to Cart” button is clicked by the shopper, the product ID and specific variant ID are passed through the component to update the cart’s state.

```
import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const initialState = {
  cartLoading: false,
  cartError: false,
  cart: {
    currency: {
      code: 'USD'
    },
    cartAmount: 0,
    lineItems: {},
    numberItems: 0,
    redirectUrls: {}
  }
};

export const CartProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  const [notifications, updateNotifications] = useState([]);

  const addNotification = (text, type = 'notify') => {
    updateNotifications([...notifications, { text, type, id: Date.now() }]);
  };

  const removeNotification = id => {
    updateNotifications(notifications.filter(ntfy => ntfy.id !== id));
  };

  const fetchCart = () => {
    fetch(`/.netlify/functions/bigcommerce?endpoint=carts`, {
      credentials: 'same-origin',
      mode: 'same-origin'
    })
      .then(res => res.json())
      .then(response => {
        refreshCart(response);
      })
      .catch(error => {
        setState({ ...state, cartLoading: false, cartError: error });
      });
  };

  // eslint-disable-next-line
  useEffect(() => fetchCart(), []);

  const refreshCart = response => {
    if (response.status === 204 || response.status === 404) {
      setState({ ...state, cartLoading: false });
    } else {
      const lineItems = response.data.line_items;
      const cartAmount = response.data.cart_amount;
      const currency = response.data.currency;

      setState({
        ...state,
        cartLoading: false,
        updatingItem: false,
        cart: {
          currency,
          cartAmount,
          lineItems,
          numberItems:
            lineItems.physical_items.length +
            lineItems.digital_items.length +
            lineItems.custom_items.length +
            lineItems.gift_certificates.length,
          redirectUrls: response.data.redirect_urls
        }
      });
    }
  };

  const addToCart = (productId, variantId, retry) => {
    setState({ ...state, addingToCart: productId });
    fetch(`/.netlify/functions/bigcommerce?endpoint=carts/items`, {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        line_items: [
          {
            quantity: 1,
            product_id: parseInt(productId, 10),
            variant_id: parseInt(variantId, 10)
          }
        ]
      })
    })
      .then(async res => ({ response: await res.json(), status: res.status }))
      .then(({ response, status }) => {
        if (status === 404 && !retry) {
          // re create a cart if cart was destroyed
          return fetch(`/.netlify/functions/bigcommerce?endpoint=carts`, {
            credentials: 'same-origin',
            mode: 'same-origin'
          }).then(() => addToCart(productId, variantId, true));
        }
        status < 300 && addNotification('Item added successfully');

        const lineItems = response.data.line_items;
        const cartAmount = response.data.cart_amount;
        const currency = response.data.currency;

        setState({
          ...state,
          addingToCart: false,
          addedToCart: productId,
          cart: {
            currency,
            cartAmount,
            lineItems,
            numberItems:
              lineItems.physical_items.length +
              lineItems.digital_items.length +
              lineItems.custom_items.length +
              lineItems.gift_certificates.length,
            redirectUrls: response.data.redirect_urls
          }
        });
      })
      .catch(error => {
        setState({ ...state, addingToCart: false, addToCartError: error });
      });
  };

  const updateItemInCart = (itemId, updatedItemData) => {
    fetch(
      `/.netlify/functions/bigcommerce?endpoint=carts/items&itemId=${itemId}`,
      {
        credentials: 'same-origin',
        mode: 'same-origin',
        method: 'put',
        body: JSON.stringify(updatedItemData)
      }
    )
      .then(res => res.json())
      .then(response => {
        refreshCart(response);
      })
      .catch(error => {
        setState({ ...state, cartLoading: false, cartError: error });
      });
  };

  const removeItemFromCart = itemId => {
    fetch(
      `/.netlify/functions/bigcommerce?endpoint=carts/items&itemId=${itemId}`,
      {
        credentials: 'same-origin',
        mode: 'same-origin',
        method: 'delete'
      }
    )
      .then(res => {
        // addNotification('Item removed successfully');
        if (res.status === 204) {
          setState(initialState);
          return;
        }
        // addNotification('Item removed successfully');
        return res.json();
      })
      .then(response => {
        response && refreshCart(response);
      })
      .catch(error => {
        setState({ ...state, cartLoading: false, cartError: error });
      });
  };

  const updateCartItemQuantity = (item, action) => {
    const newQuantity = item.quantity + (action === 'minus' ? -1 : 1);
    setState({ ...state, updatingItem: item.id });
    if (newQuantity < 1) {
      return removeItemFromCart(item.id);
    }
    let productVariantReferences = null;

    if (typeof item.product_id !== 'undefined') {
      productVariantReferences = {
        product_id: item.product_id,
        variant_id: item.variant_id
      };
    }

    updateItemInCart(item.id, {
      line_item: {
        quantity: newQuantity,
        ...productVariantReferences
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeItemFromCart,
        updateCartItemQuantity,
        notifications,
        addNotification,
        removeNotification
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
```

addToCart function in `CartProvider.js`: <https://github.com/bigcommerce/gatsby-bigcommerce-netlify-cms-starter/blob/master/src/context/CartProvider.js>

The cart page is also dynamically rendered using cloud functions, allowing the shopper to add items, remove items, and update items already in cart.

```
require('dotenv').config();
const axios = require('axios');
const cookie = require('cookie');
const setCookie = require('set-cookie-parser');

// only log in development mode
const devModeLog = str => process.env !== 'production' && console.log(str);

export function handler(event, context, callback) {
  devModeLog(' ');
  devModeLog(' ');
  devModeLog(' ');
  devModeLog('-----------------------');
  devModeLog('----- New Request -----');
  devModeLog('-----------------------');

  // Get env var values we need to speak to the BC API
  const API_STORE_HASH = process.env.API_STORE_HASH;
  const API_CLIENT_ID = process.env.API_CLIENT_ID;
  const API_TOKEN = process.env.API_TOKEN;
  const API_SECRET = process.env.API_SECRET;
  const CORS_ORIGIN = process.env.CORS_ORIGIN;
  // Set up headers
  const REQUEST_HEADERS = {
    'X-Auth-Client': API_CLIENT_ID,
    'X-Auth-Token': API_TOKEN,
    'X-Client-Type': 'Gatsby',
    'X-Client-Name': 'gatsby-bigcommerce-netlify-cms-starter',
    'X-Plugin-Version': '1.0.0',
    Accept: 'application/json'
  };
  const CORS_HEADERS = {
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': CORS_ORIGIN,
    'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS'
  };
  // Get endpoint value from query string
  const ENDPOINT_QUERY_STRING = event.queryStringParameters.endpoint;

  // Parse out cookies and change endpoint to include cartId for certain cart requests
  const cookies = setCookie.parse(event.headers.cookie, {
    decodeValues: true, // default: true
    map: true // default: false
  });
  const hasCartIdCookie = cookies.hasOwnProperty('cartId');
  devModeLog(`- hasCartIdCookie? ${hasCartIdCookie.toString()} -`);

  // Assemble BC API URL
  const constructURL = () => {
    let ROOT_URL = `https://api.bigcommerce.com/stores/${API_STORE_HASH}/v3/`;
    if (ENDPOINT_QUERY_STRING === 'carts/items') {
      if (hasCartIdCookie) {
        if (typeof event.queryStringParameters.itemId != 'undefined') {
          return `${ROOT_URL}carts/${cookies.cartId.value}/items/${event.queryStringParameters.itemId}?include=redirect_urls`;
        } else {
          return `${ROOT_URL}carts/${cookies.cartId.value}/items?include=redirect_urls`;
        }
      } else {
        // If there is no cartId cookie when adding cart items, resort to creating the cart
        return `${ROOT_URL}carts?include=redirect_urls`;
      }
    } else if (ENDPOINT_QUERY_STRING === 'carts') {
      if (hasCartIdCookie) {
        return `${ROOT_URL}carts/${cookies.cartId.value}?include=redirect_urls`;
      } else {
        return `${ROOT_URL}carts?include=redirect_urls`;
      }
    } else {
      return ROOT_URL + ENDPOINT_QUERY_STRING;
    }
  };
  // Function to determine return cookie header that should be returned with response
  const setCookieHeader = (responseType, response) => {
    let cookieHeader = null;

    devModeLog('(in setCookieHeader function) responseType: ', responseType);
    devModeLog(
      '(in setCookieHeader function) ENDPOINT_QUERY_STRING: ',
      ENDPOINT_QUERY_STRING
    );
    // devModeLog('(in setCookieHeader function) response: ', response)

    const statusCode = response.status;
    const body = response.data;

    if (ENDPOINT_QUERY_STRING === 'carts' && statusCode === 404) {
      cookieHeader = {
        'Set-Cookie': cookie.serialize('cartId', '', {
          maxAge: -1
        })
      };
      devModeLog('- Expiring cardId cookieHeader: -');
      devModeLog(cookieHeader);
    } else if (responseType === 'response') {
      if (!hasCartIdCookie && body.data.id) {
        cookieHeader = {
          'Set-Cookie': cookie.serialize('cartId', body.data.id, {
            maxAge: 60 * 60 * 24 * 28 // 4 weeks
          })
        };
        devModeLog('- Assigning cookieHeader: -');
        devModeLog(cookieHeader);
      }
    }

    return cookieHeader;
  };

  // Here's a function we'll use to define how our response will look like when we callback
  const pass = (response, cookieHeader) =>
    callback(null, {
      statusCode: response.status,
      body: JSON.stringify(response.data),
      headers: { ...CORS_HEADERS, ...cookieHeader }
    });

  // Process POST
  const post = body => {
    axios
      .post(constructURL(), body, { headers: REQUEST_HEADERS })
      .then(response => {
        const cookieHeader = setCookieHeader('response', response);

        pass(response, cookieHeader);
      })
      .catch(err => pass(err.response));
  };
  if (event.httpMethod === 'POST') {
    devModeLog('--------');
    devModeLog('- POST -');
    devModeLog('--------');
    post(JSON.parse(event.body));
  }

  // Process GET
  const get = () => {
    axios
      .get(constructURL(), { headers: REQUEST_HEADERS })
      .then(response => {
        const cookieHeader = setCookieHeader('response', response);

        pass(response, cookieHeader);
      })
      .catch(err => {
        const cookieHeader = setCookieHeader('error', err.response);

        pass(err.response, cookieHeader);
      });
  };
  if (event.httpMethod === 'GET') {
    devModeLog('-------');
    devModeLog('- GET -');
    devModeLog('-------');
    get();
  }

  // Process PUT
  const put = body => {
    axios
      .put(constructURL(), body, { headers: REQUEST_HEADERS })
      .then(response => {
        pass(response);
      })
      .catch(err => pass(err.response));
  };
  if (event.httpMethod === 'PUT') {
    devModeLog('-------');
    devModeLog('- PUT -');
    devModeLog('-------');
    put(JSON.parse(event.body));
  }

  // Process DELETE
  const del = () => {
    axios
      .delete(constructURL(), { headers: REQUEST_HEADERS })
      .then(response => {
        pass(response);
      })
      .catch(err => pass(err.response));
  };
  if (event.httpMethod === 'DELETE') {
    devModeLog('----------');
    devModeLog('- DELETE -');
    devModeLog('----------');
    del();
  }
}
```

Cart cloud functions in `/lambda/bigcommerce.js`: <https://github.com/bigcommerce/gatsby-bigcommerce-netlify-cms-starter/blob/master/src/lambda/bigcommerce.js>

And finally, when the shopper is directed to checkout, they are actually redirected from the static site on Netlify to the fully customizable, PCI Compliant checkout that is hosted on BigCommerce. It is worth noting that this is only 1 of several ways in which a checkout can be built for merchants. There is also the option of [embedding the checkout on the site via an iFrame](https://developer.bigcommerce.com/api-docs/cart-and-checkout/embedded-checkout/embedded-checkout-overview?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront) or building a fully custom checkout using our [server to server cart](https://developer.bigcommerce.com/api-reference/cart-checkout/server-server-cart-api?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront) and [checkout APIs](https://developer.bigcommerce.com/api-reference/cart-checkout/server-server-checkout-api?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront). If you take the latter path, please keep in mind that you will then be responsible for PCI compliance.

### Extending the Plugin for Additional Use Cases

While the starter plugin gets you pretty far in setting up an ecommerce storefront, there’s likely going to be some functionality that needs to be added to support the merchant’s desired shopper experience and critical business flows. Fortunately, BigCommerce is an API-first ecommerce backend, which means that we focus on providing developers with the APIs and SDKs they need to create flexible solutions. This makes it easy to add the ecommerce functionality you need on your JAMstack site.

Some key use cases that merchants commonly want to support for their online storefront and that can be added to the starter plugin to extend its functionality are:

* Multi-brand – merchandising and creating a unique brand shopping experience under one merchant .
* Internationalization – selling in international markets, including multi-language, currency, and cross-border shipping.
* Embedded Checkout – keeping the shopper on the headless storefront rather than redirecting to a hosted checkout.

When it comes to enabling these and other uses cases, your business requirements are going to drive how you extend the plugin and which APIs you use. However, some common APIs that we recommend looking into include:

* [Channels API](https://developer.bigcommerce.com/api-reference/cart-checkout/channels-listings-api?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront) – supports selling across multiple sales channels, whether in a multi-storefront use case or on various marketplaces and more.
* [Sites & Routes](https://developer.bigcommerce.com/api-reference/cart-checkout/sites-routes-api?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront) – supports creating sites (domain) and routes (subpages on a domain) for headless storefronts, which is particularly helpful for routing shoppers to the proper storefront after key actions (such as checkout or unsubscribing to marketing emails).
* [Storefront API](https://developer.bigcommerce.com/api-docs/storefront/graphql/graphql-storefront-api-overview?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront) – supports optimized data retrieval and enhanced storefront performance via a graphQL API that pulls data from several different BigCommerce APIs. 
* [Price Lists](https://developer.bigcommerce.com/api-docs/catalog/price-list-overview?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront) – supports creating specific pricing for different customer groups and sales channels.

You can find more information and resources for extending the ecommerce functionality by reading the extensive documentation on our [Developer Portal](https://developer.bigcommerce.com/api-docs?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront), reading reference code, like the BigCommerce for WordPress plugin, or reading through the [BigCommerce Dev Library](https://developer.bigcommerce.com/dev-library/?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront).

### Conclusion

While this tutorial walks through building a JAMstack site with Gatsby, you can deploy an ecommerce storefront with BigCommerce and Netlify using your preferred frontend framework, such as Next.js, Vue JS, and more. Check out the [JAMstack presentation](https://www.youtube.com/watch?v=Wnm_ErMrjDM) (also embedded below) covering the starter plugin and how BigCommerce enables headless ecommerce for more information!

<iframe width="560" height="315" src="https://www.youtube.com/embed/Wnm_ErMrjDM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Thanks for reading! [Reach out directly](https://www.netlify.com/enterprise/contact/?utm_source=blog&utm_campaign=headless-bigcommerce-tutorial-Feb-2020&utm_content=jamstack-ecomm-storefront) if we can help with your project or to let us know about your experience building a JAMstack site with BigCommerce and Netlify.

---

#### About BigCommerce

[BigCommerce](https://www.bigcommerce.com/?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront) is a privately held technology company and provides a SaaS ecommerce platform. The company was founded in 2009 and has 600+ employees with headquarters in Austin, Texas. At BigCommerce, our primary focus is to help merchants grow their business and sales across every stage of growth. And we’re betting on [headless commerce](https://www.bigcommerce.com/blog/ecommerce-trends/#14-ecommerce-trends-leading-the-way/?utm_medium=partner&utm_source=Netlify&utm_campaign=USA_MM_ACQ_Headless_CT_2020_Q1_&utm_content=jamstack-ecomm-storefront) and the [JAMstack](https://jamstack.org/) being a major player in enabling this growth for merchants, whether they’re relatively new to ecommerce or already an established player.

#### About Netlify

[Netlify](https://www.netlify.com/?utm_source=blog&utm_campaign=headless-bigcommerce-tutorial-Feb-2020&utm_content=jamstack-ecomm-storefront) is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and sites. At Netlify we want the web to win. We empower developers to create the modern web through our platform that includes continuous deployment from Git across [Netlify Edge](https://www.netlify.com/products/edge/?utm_source=blog&utm_campaign=headless-bigcommerce-tutorial-Feb-2020&utm_content=jamstack-ecomm-storefront), our global application delivery network, alongside [form handling](https://www.netlify.com/products/forms/?utm_source=blog&utm_campaign=headless-bigcommerce-tutorial-Feb-2020&utm_content=jamstack-ecomm-storefront), [serverless AWS Lambda functions](https://www.netlify.com/products/functions/?utm_source=blog&utm_campaign=headless-bigcommerce-tutorial-Feb-2020&utm_content=jamstack-ecomm-storefront), an SSL integration with Let's Encrypt, and more.

---

