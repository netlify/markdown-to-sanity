---
title: Forms and Functions
description: >-
  In previous posts, we’ve raved about how awesome forms are, especially when
  you get to take full advantage of them without having to even configure a
  backend to handle data collection. In this post, we cover how we can
  turbocharge our form workflows with serverless functions.
authors:
  - Divya Sasidharan
date: '2018-09-14'
topics:
  - tutorials
tags:
  - Vue
  - Functions
  - Forms
  - Serverless
tweet: ''
format: blog
---
Web Forms are at the heart of most products, we love and use today. With Netlify, you can start using forms and get insight into form submission data in your applications with just a few of lines of HTML. Once integrated, you can further take charge of your form workflows, by hooking them up with third party APIs and services all without even having to think about how to set up a customized workflow or configure a backend. ✨


## Fun with Functions

Forms in Netlify are automagically configured to work with Netlify Functions. In the current workflow, a form submission triggers a serverless function call to `submission-created`, which gives you access to data collected from that form submission. The figure below is an example of data collected from a single form submission. The `ordered_human_fields` key is what the processing bots of Netlify use to display data from submissions in the UI. To get a more detailed sense of the structure of the payload, check out [https://open-api.netlify.com/](https://open-api.netlify.com/)

![API Data Structure](https://d2mxuefqeaa7sj.cloudfront.net/s_7BE3871641A343202E19CACE9024DA13303F7030423283D4B16A42499014DE48_1536874114737_dataStructure.png)

In order to better demonstrate the power that serverless functions bring to forms, let’s build an application where we’ll use both. We’ll be building a polling application that allows users to answer a poll and get immediate feedback on the breakdown of responses thus far. For this example, we’ll be using Vue, but in the interest of giving you a general sense of how to integrate forms with serverless functions, we won’t be diving too deeply into the implementation details. As a result, the concepts we will cover here translate well to any other framework of your choosing.

[Here’s the complete application for reference](https://yanny-a-hear-laurel.netlify.com/#/)

## Make the form

Since [we’ve](https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/) [covered](https://www.netlify.com/blog/2018/09/07/how-to-integrate-netlify-forms-in-a-vue-app/) the basics of creating an HTML form and integrating it with the Netlify forms feature before, I’ll gloss over this bit. Even so, it is worth noting that for a working form, you must:

1. Prerender your app
2. Check that you are making a POST request that includes a `form-name` parameter with the correct name of the form.
3. Check that the name of input fields in the HTML version of the form match the names sent in the POST request
4. Create a honeypot to protect your form from spam

Here’s a quick rundown of what a valid Netlify form looks like:

```html
<template>
  <div>
    <h2>Which did you hear?</h2>
    <form
    name="yanny-v-laurel" method="post" data-netlify="true" data-netlify-honeypot="bot-field" @submit.prevent="handleSubmit">
      <input type="hidden" name="form-name" value="yanny-v-laurel" />
      <ul>
        <li v-for="(soundBite, index) in soundClips" :key="index">
          <label>
            <input
              type="radio"
              name="clip"
              :value="soundBite"
              :checked="soundBite === form.chosenClip"
              @input="ev => form.chosenClip = ev.target.value"
            >
            <span>{{ soundBite }}</span>
          </label>
        </li>
      </ul>
      <button type="submit">Just tell me already</button>
    </form>
  </div>
</template>

<script>
export default {
  export default {
  name: "PollForm",
  data() {
    return {
      soundClips: ["Yanny", "Laurel", "Both"],
      form: {
        chosenClip: "Both"
      }
    };
  },
  methods: {
    handleSubmit () {
      //some stuff
      fetch('/', {...})
      .then(res => {
        this.$router.push('thanks')
      })
      .catch(err => {
        this.$router.push('404')
      })
    }
  }
}
</script>
```

## Make the function

To enable serverless functions usage with forms, create a folder in the root directory called `functions` and create a file with the name `submission-created.js`. Here is where the magic will happen.

```
.
├── functions
  ├── submission-created.js
├── src
├── public
├── ...
└── package.json
```

[As the documentation states](https://www.netlify.com/docs/functions/), a function must export a `handler` method with the following general syntax:

```JS
exports.handler = function(event, context, callback) {
    // your server-side functionality
}
```

## Optional: Zip the function to manage dependencies

If your Netlify function has additional dependencies, there’s a chance that your function call may fail as a result of node modules not being imported as expected. To ensure that your serverless function has access to the correct dependencies, you can either a) include the `node_modules` directory that has the relevant dependency in a zip archive alongside the function or b) bundle the module into your function itself, so it becomes a self contained package. I recommend choosing the latter, so you can easily manage and update dependencies that my function uses.

*Update (April 2019): Starting in Netlify CLI version 2.7.0, you can [deploy unbundled JavaScript functions directly via the command line](https://www.netlify.com/docs/cli/#unbundled-javascript-function-deploys).*

```
.
├── functions
  ├── submission-created
    ├── submission-created.js
    ├── package.json
├── src
├── public
├── ...
└── package.json
```

To zip up the file, we’ll use the zip functionality available in default linux and move the zipped folder to another folder, called `functions-build`. This will be the folder from which Netlify will deploy your serverless functions. Be sure to update the functions config option in the `netlify.toml` file to enable this.

```JSON
{
  ...
  "scripts": {
    "clean": "rm -rf functions-build && mkdir functions-build",
    "zip": "cd functions/submission-created && yarn install && zip -r submission-created.zip *",
    "postzip": "mv functions/submission-created/submission-created.zip functions-build",
    ...
    "prebuild": "npm run clean && npm run zip",
    ...
    }
  ...
}
```

```TOML
[build]
  Functions = "functions-build"
  command = "yarn run build"
  publish = "dist"
  NODE_ENV = "8.11.3"
```

## Make the database

There are lots of options available to store the data for our serverless function. For our example, we’ll be using Firebase. Once you get set up with a new account, head over to the console option on the top right corner and add a new project.

![](https://g.recordit.co/tnUHdOk5Gx.gif)

With a new project created, we’ll now create a new database from which we will store and retrieve data from our form. Note, we’ll be using the realtime database in firebase and not the beta firestore option. This will give you a url that you can now post data to; something like this → `https://[YOUR_APP_NAME].firebaseio.com/`

![](https://g.recordit.co/49hGMMw6FA.gif)

## Connect to the database

To start using firebase with our application, we’ll have to configure our application to use environment variables. In Netlify, environment variables can be added via the `site settings` → `build & deploy` tab under `Build Environment Variables`

![](https://d2mxuefqeaa7sj.cloudfront.net/s_7BE3871641A343202E19CACE9024DA13303F7030423283D4B16A42499014DE48_1536870598290_Screen_Shot_2018-09-13_at_3_28_01_PM.png)

To write the data collected from a form submission into our firebase instance, we’ll utilize firebase’s database API to push new submissions to an overall `submission` object in our database. Note that when using serverless functions in Netlify always remember to include a callback for success and failure to prevent the Lambda function from timing out.

```JS
var firebase = require("firebase");
const config = {...}

firebase.initializeApp(config);
const db = firebase.database();

exports.handler = function(event, context, callback) {
  const body = JSON.parse(event.body).payload
  var newPostKey = db.ref().child(`submissions`).push().key;
  db.ref(`submissions/${newPostKey}`).set({
    body
  }, function(error) {
    if (error) {
      console.log('failed')
      return callback(null, {
        statusCode: error.status,
        body: JSON.stringify({
          message: error.message,
          error: error,
        })
      })
    }
    console.log('saved')
    return callback(null, {
      statusCode: 200,
      body: "Beep, boop, you just got serverless."
    })
  })
}
```

If you’ve gotten all the pieces in order, congratulations you’ve successfully integrated a form with a serverless function in Netlify! 🎉 If you’re interested in learning more about how to supercharge your form with  a global state management library like Vuex, [head on over to this repo](https://github.com/shortdiv/yanny-ya-hear-laurel) to check out an implementation of an application that uses forms and serverless functions with Vuex, and Vue Router.


## Form + Function = ✨

With so many freely accessible APIs, there are infinite possibilities on what you can create using Netlify Forms and Functions. We’d love to hear about what you’re creating with forms and serverless functions. Let us know!
