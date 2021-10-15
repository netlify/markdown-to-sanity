---
title: >-
  Creating a map of the best pizza in Chicago with Yelp’s Fusion API & Netlify
  Dev
description: >-
  With Netlify Dev, spinning up a local development environment that matches
  that of production is as easy as typing a single command. Let's walk through
  how easy it is to work with Netlify Dev by building a map that visualizes the
  best pizza in Chicago!
authors:
  - Divya Sasidharan
date: '2019-05-29'
topics:
  - tutorials
tags:
  - Netlify Dev
  - Serverless
tweet: ''
format: blog
---
The process of writing and deploying code can be a finnicky one. Given that development environments rarely matches that of production, bugs can be hard to pin down and testing as a result may have to happen after deploy rather than before. To best replicate production conditions, an optimal testing strategy would be to locally emulate production environments. Several serverless providers like AWS, Netlify and Microsoft offer such local emulators for their services either via a CLI or a sandbox testing environment.

By giving developers the tools to emulate production environments on their local machines, the process of writing and testing code pre-deploy is vastly improved. To best understand how local emulators help with this, let's dive into a concrete example.

## Getting started with Netlify Dev
For this example, we’ll be using [Netlify Dev](https://www.netlify.com/products/dev/), an extension of the Netlify CLI that allows you to run the Netlify platform right from your local terminal. We'll also be working with an example project where we make an external request to an API. Specifically, we'll be creating an application that pings the Yelp API for the best pizza places in Chicago and visualizes it on a map.

To start, let's first install the Netlify CLI globally onto our local machine. To do this, run the following command in your terminal:

```bash
npm install -g netlify-cli
```

With Netlify CLI installed, we can now run netlify commands right from the terminal regardless of project directory. To check that netlify is up and running and to see what Netlify commands we have access to run:

```
netlify --help
```
![](https://paper-attachments.dropbox.com/s_FAB1038EDE639F78351BBE6E6410DAA4255A8786E56E82C6C50C20F6EBE67537_1559137250838_Screen_Shot_2019-05-29_at_9_38_28_AM.png)

## The Project
Now that we have Netlify Dev up and running, let’s start building our example project. For this example, we will be creating [a map that visualizes top pizza spots in Chicago](https://chipie-conf.netlify.com/).

![](https://paper-attachments.dropbox.com/s_FAB1038EDE639F78351BBE6E6410DAA4255A8786E56E82C6C50C20F6EBE67537_1559138729694_Screen+Shot+2019-05-29+at+9.55.55+AM.png)

Specifically, we will be using [Yelp’s Fusion API](https://www.yelp.com/developers/documentation/v3/get_started), to fetch a list of the best pizza places in Chicago. In order to query Yelp’s API, we will need a node backend. This is where our serverless function comes in. Before we move forward, let's create a basic project scaffold from which we can work off of.

### Scaffolding
Since this project requires some extra code to configure a map with [mapbox](https://docs.mapbox.com/mapbox-gl-js/api/) that we won't cover in this tutorial, we'll work off of [an existing base project](https://github.com/shortdiv/pieconf). The bare bones structure that we will use for this can be found in the `step-1` branch in the repo provided.

### Linking to Netlify
Once you've pulled down and set up the project with its respective dependencies (run `npm i` or `yarn` for this), let's move on to connecting the project to Netlify via the CLI.
To do this, run `netlify init` from your terminal. This will take you through a series of steps to link your local project to the Netlify app. This step is doubly handy because it will effectively set your project up for Netlify by creating a `netlify.toml` file.

***Note***
If this is your first time running Netlify from your command line, you'll have to first login to Netlify. You can do this by running `netlify login` and following the steps for logging in. [Here's a video with a walkthrough of what that process is like.](https://res.cloudinary.com/shortdiv/video/upload/v1559149822/ntlifylogin.mp4)

## Connecting to an API
Now that we've got Netlify up and running in our project, let's connect to our API to grab data from Yelp. Generally, connecting to an API can be done directly from the frontend—as long as they support Cross Origin Requests (CORS). In the case of the Yelp API we will be using, CORS is not supported and so we will have to run an external server in order to make the request. But we can avoid the need to run an entire server for this purpose, by instead using a serverless function.

## Our first serverless function
To create our serverless function, we'll use the Netlify CLI to scaffold a [function](https://www.netlify.com/docs/functions/) for us. To do this, run: `netlify functions:create`. This will provide you with a series of function templates to choose from. Because our function is pretty standard, we'll pick the `hello-world` example and modify it to fit our needs.

```js
exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      msg: "Hello, World!"
    })
  });
}
```

### Calling an API
Now that we have a semblance of a function, let's swap out the hello world code for one that makes a call to the yelp API and change the name of our function to `get-yelp`.

```js
const yelp = require("yelp-fusion");

exports.handler = function(event, context, callback) {
  const { VUE_APP_YELP_API } = process.env 
  const client = yelp.client(VUE_APP_YELP_API);

  const { term, location } = event.queryStringParameters;

  const searchRequest = {
    term: term,
    location: location
  };

  var fetchFromYelp = async function() {
    try {
      let res = await client.search(searchRequest);
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          results: res
        })
      });
    } catch (err) {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          err: err
        })
      });
    }
  };

  fetchFromYelp();
};
```

**A note about dependencies**
Since our function uses the [Yelp Fusion npm package](https://www.npmjs.com/package/yelp-fusion), we'll have to make sure that is properly installed in our function directory. If we don't do this, Netlify will not know where to find the appropriate dependency and return an annoying `Could not find "yelp-fusion" module` error when deploying to production.
To circumvent this, run `npm init` in your `get-yelp` function folder and then `npm i yelp-fusion`. This will add a `package.json` file to your yelp function folder and install the dependency there. Additionally, you'll have to add the install step to your build command so Netlify knows to install dependencies before zipping and shipping your function. To do this simply add the following line to the scripts section of the main package.json file:

```json
{
  scripts: {
    ...
    "prebuild": "cd functions/get-yelp && npm install"
  }
}
```

### Connecting the pieces
With our function created, we can now make a call to it from our main frontend code. Before we do so however, we'll have to make sure the function is up and running. To stand up our function, we'll run `netlify dev` from our command line. This will run two servers—one for the frontend and another for the backend. In addition, Netlify Dev will proxy our backend server so that we can make calls to it without running into Cross Origin (CORS) issues.

Now that our dev servers are running, we can ping our API to retrieve data from Yelp and visualize it on a map. Let's start by adding the fetch to the mounted hook in the `src/views/MapView` file and setting the result to a data property.

```js
<script>
export default {
  ...
  data() {
    return {
      yelpData: null
    }
  },
  mounted() {
    axios
      .get("/.netlify/functions/get-yelp", {
        params: {
          location: "chicago,il",
          term: "pizza"
        }
      })
      .then(res => {
        this.yelpData = res;
      });
  }
}
```

### Cleaning the Data
Though we've successfully received data from Yelp, we still have more work to do to massage the data into a mappable format. Data needs to be in a geojson format before it can be properly placed on a map. To ensure our data is in the right format, we'll pass it through a geojson helper function, which we'll define in the methods portion of our component:

```js
methods: {
  geojsonify(response) {
    let features = [];
    response.map(item => {
      features.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [item.coordinates.longitude, item.coordinates.latitude]
        },
        properties: {
          ...item
        }
      });
    });
    return {
      type: "FeatureCollection",
      features
    };
  }
}
```

### Mapping the data
With our data retrieved and formatted, let's now add it to our sourcelayer and feature layer components. The source layer component is what mapbox uses to add data to a map instance and the feature layer is used to visualize data on the map. To make the data accessible to our feature layer component, we'll add the `yelpData` data property to the source layer component via props. 

Like so:

```html
<SourceLayer
  :map-context="mapContext"
  source-id="yelp"
  source-type="geojson"
  :data-src="yelpData"
/>
```

We can now move on to visualizing the data added to the map with our feature layer component. To add the data to our feature layer component, we'll add a `source-id` to it that exactly matches the `map-id` from our previous created source layer from which we called `yelp`.

```html
<FeatureLayer
  :map-context="mapContext"
  :img="pins"
  layer-type="symbol"
  img-name="pins"
  img-size="0.3"
  map-id="yelp-pops"
  source-id="yelp"
/>
```

## Netlify Live
When working on a project, there often comes a time when you have to share progress either with fellow developers or key stakeholders. This can send developers in a frenzy since it means deploying code in a potentially broken state. While staging or preview deploy branches are great for testing and showing code, waiting for builds to complete can slow down the feedback process during more interactive reviews with stakeholders. The ability to get instant feedback while making adjustments would be powerful. This is where local tunnels come in handy. You can easily share your locally running build. With Netlify Dev, you have access to this feature via the `netlify dev --live` command. This will spin up a local tunnel with a unique url that you can easily share without having to push a single deploy.

## Conclusion
The ability to reproduce production environments locally is key to an optimal development workflow. Being able to do so means potentially fewer bugs since the disparity between local and production is vastly reduced. Local emulation tools like Netlify Dev, by replicating production in local build pipelines makes it incredibly easy to forecast issues before even hitting deploy. Moreover, once you're ready to ship your application, you can rest easy knowing that your setup is production ready.
