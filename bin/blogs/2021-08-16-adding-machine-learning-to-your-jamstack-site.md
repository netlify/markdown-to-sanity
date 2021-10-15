---
title: Adding machine learning to your Jamstack site
description: Machine learning can be done with JavaScript on both client and server-side. Learn about the different ways you can add machine learning to your Jamstack site.
authors:
  - Charlie Gerard
date: 2021-08-16
lastmod: 2021-08-16
topics:
  - tutorials
tags:
  - Frontend
  - Engineering
  - TensorFlow.js
  - ml5.js
  - Netlify functions
  - machine learning
  - javascript
tweet: ""
format: blog
relatedposts:
seo:
  metadescription: Machine learning can be done with JavaScript on both client and server-side. Learn about the different ways you can add machine learning to your Jamstack site.
  metatitle: Adding machine learning to your Jamstack site
  ogimage: /img/blog/og-adding-ml-jamstack-site.png
---

Machine learning can be done with JavaScript on both client and server-side.
Libraries like [TensorFlow.js](https://www.tensorflow.org/js) provide a way to do it on both, while others like [ml5.js](https://ml5js.org/) are more focused on client-side, and small utility packages written in Node.js can be run in Netlify Functions. If you don't want to write any custom code, you can even use APIs from AI solutions providers such as Microsoft, Google, Amazon, and more!

In this blog post we'll look into the different ways to add machine learning to your Jamstack site.

## Using TensorFlow.js

TensorFlow.js is the most popular machine learning library for JavaScript. It allows you to use pre-trained models, do transfer learning and create your own machine learning models.

In a Jamstack site, even though you can use TensorFlow.js in a function, I'd recommend to run your code client-side.

Let's briefly talk about why.

[Netlify Functions](https://docs.netlify.com/functions/overview/) can run Node.js code but they have an execution limit of 10 seconds. Loading pre-trained models can take up more time so your function is likely to timeout before the model finishes loading. (There are some scenarios where using a serverless function is a good fit. Keep reading for an example of that, using Netlify Functions a little later!)

Usually, a way to run functions for a longer period of time is to use [background functions](https://docs.netlify.com/functions/background-functions/). These functions have an execution limit of up to 15min. However, it is not recommended to send the response back to the UI. You can imagine that if we were updating the UI after waiting 1min to get a prediction from a machine learning model, it wouldn't be the best user experience.

Instead, using machine learning client-side gives us more flexibility.

To give you an example, let's do some text toxicity classification using [the toxicity pre-trained model](https://github.com/tensorflow/tfjs-models/tree/master/toxicity).

### Toxicity classification

You need to start by installing and importing the required packages:

```javascript
import * as toxicity from "@tensorflow-models/toxicity";
import "@tensorflow/tfjs";
```

Then, if we consider that we're using React.js, we can create a small component and start loading the model as soon as the component has mounted.

```javascript
const [model, setModel] = useState();

useEffect(() => {
  const loadModel = async () => {
    console.log("Model loading...");

    const threshold = 0.9;
    const toxicityModel = await toxicity.load(threshold);
    setModel(toxicityModel);

    console.log("Model loaded");
  };

  loadModel();
}, []);
```

Once the model has loaded, it will be available in the state as `model`.

From there, we can use it to run predictions when a user inputs a piece of text (e.g some feedback, a comment on a blog post, etc.).

If we imagine that we're building a feedback widget or a comments section for a blog, we might want to run some toxicity classification for every new input, before displaying it publicly on the page.

To do this, we'd get the input submitted by the user and feed that to the model to predict the level of toxicity.

```javascript
/* 
  In a production application, you would replace the following line 
  with input from a user submission. 
*/
const userInput = [
  "This is the most stupid blog post I've ever read. Such a waste of my time."
];

model.classify(userInput).then(predictions => {
  predictions.map(prediction => {
    if (prediction.results[0].match) {
      console.log(prediction.label);
      /*
		returns 'insult'.
	  */
    }
  });
});
```

Each prediction object has a label representing the type of toxic content and an array of results that contains probabilities and a `match` property. If this property is `true`, the content is classified as toxic and the label can be used to determine the type of toxicity.

With this code sample, machine learning can be added to an app in about 30 lines of code! 🤯

## Using ml5.js

If you'd like to use a more beginner-friendly tool to get into machine learning, you should consider [ml5.js](https://ml5js.org/). It is built on top of TensorFlow.js so it provides a lot of cool features but aims at making machine learning accessible for all by providing an approachable API.

Let's imagine we'd like to do some real-time object detection using our webcam. After installing the [ml5 npm package](https://www.npmjs.com/package/ml5), the code for this would look like this:

```javascript
import ml5 from "ml5";
import { useEffect } from "react";

const ObjectDetection = () => {
  useEffect(() => {
    const predict = async () => {
      const video = document.getElementById("video");

      // set up the live video feed from the webcam
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(function(stream) {
          video.srcObject = stream;
          video.play();
          // Create an object detector using the CocoSSD model
          const objectDetector = ml5.objectDetector("cocossd", {}, () => {
            console.log("Model Loaded!");
          });

          // Detect objects in the video element
          objectDetector.detect(video, (err, results) => {
            console.log(results); // results will be an array with predictions
          });
        })
        .catch(function(err) {
          console.log("An error occurred: " + err);
        });
    };
    predict();
  }, []);

  return <video id="video"></video>;
};
```

This component feeds the webcam input to the model and returns an array of objects detected as output.

Once again, in about 30 lines of code, you can add live object detection in your app!

## Using machine learning in a Netlify Function

If you've found a Node.js package that implements a machine learning algorithm and you'd like to be able to use it on Netlify, it's possible using functions!

⚠️ Remember this won't work if you're trying to load pre-trained models using the Node.js implementation of TensorFlow.js. ⚠️

An algorithm I really like that I've used in side projects before is called random-forest classifier, and the specific package I've used is [Jessie Frazelle](https://twitter.com/jessfraz)'s [random-forest-classifier](https://github.com/jessfraz/random-forest-classifier). The repository is archived but the code still works fine so I'll be using it for this demo.

A default example in machine learning is the one of the Iris dataset. Given some training data representing different flowers using properties such as width, length, petal length and petal width, this algorithm can classify new input to predict the correct type of flower.

From our client-side code, we could send some data about a flower we'd like to predict to our Netlify function:

```javascript
const speciesToPredict = [
  {
    length: 6.3,
    width: 2.5,
    petal_length: 5,
    petal_width: 1.9
  }
];

const response = await fetch("/.netlify/functions/predict", {
  method: "POST",
  body: JSON.stringify(speciesToPredict)
});
const { species } = await response.json();
```

Inside our function file, we'd start by requiring the package:

```javascript
var RandomForestClassifier = require("random-forest-classifier")
  .RandomForestClassifier;
```

We would then parse the content sent to the function:

```javascript
const newSpecies = JSON.parse(event.body);
```

The next step would be to use some training data about different types of flowers to train our algorithm, and predict the species of the data stored in the `newSpecies` variable, before returning it to the UI:

```javascript
var data = [
  {
    length: 5.1,
    width: 3.5,
    petal_length: 1.4,
    petal_width: 0.2,
    species: "setosa"
  },
  {
    length: 6.5,
    width: 3,
    petal_length: 5.2,
    petal_width: 2,
    species: "virginica"
  },
  {
    length: 6.6,
    width: 3,
    petal_length: 4.4,
    petal_width: 1.4,
    species: "versicolor"
  }
];

var rf = new RandomForestClassifier({
  n_estimators: 10
});

let predictedSpecies;
rf.fit(data, null, "species", function(err, trees) {
  var pred = rf.predict(newSpecies, trees);
  predictedSpecies = pred;
});

return {
  statusCode: 200,
  body: JSON.stringify({ species: predictedSpecies })
};
```

This example is a classic demo in machine learning but you can modify the training data to use this algorithm for other use cases.

For example, I used it in one of my recent side projects to [predict indoor location from Wifi data](https://github.com/charliegerard/whereami.js). That project does not use a Netlify Function because the data gathered was coming from my router, which would not be available once the function is deployed, but the logic to run predictions is the same!

## Using APIs

Another way to use machine learning is with APIs.

You can find APIs from companies such as Google, Amazon or Microsoft but for the purpose of this post, I'll be using [Deep AI](https://deepai.org/)'s instead as it is easier to setup.

For this demo, we're going to run some content moderation in a Netlify Function.

Start by installing the [npm package](https://www.npmjs.com/package/deepai):

```javascript
npm install --save deepai
```

Then, in a Netlify Function, require it:

```javascript
const deepai = require("deepai");
```

To be able to use this API, we need to get an API key. To get it, you need to sign up for a free account at [deepai.org](https://deepai.org).

Once this is done, you need to pass this key to the `setApiKey` method before running your detection. Overall, this is what a function using this API could look like:

```javascript
const deepai = require("deepai");

exports.handler = async () => {
  deepai.setApiKey("YOUR_API_KEY");

  var result = await deepai.callStandardApi("content-moderation", {
    image: "<An image URL>"
  });

  return {
    statusCode: 200,
    body: JSON.stringify(result.output)
  };
};
```

The `result` variable is an object of the following shape:

```javascript
{
  id: '5546e215-382c-4ce8-a1c4-1612149b1111',
  output: { detections: [], nsfw_score: 0.0001704218884697184 }
}
```

Tip: An API key is a good candidate for using an environment variable. You can read about [how the Netlify CLI can help manage your environment variables](https://www.netlify.com/blog/2021/07/12/managing-environment-variables-from-your-terminal-with-netlify-cli/).

The `nsfw_score` property indicates the probability of the image being NSFW (Not Safe For Work). In this case, I tested it with a picture of a cat so the result comes back as 0.0001 as a cat is in general considered safe for work. 🐱

If you're working on a project that accepts images submitted by users, this can be very useful!

More importantly, this example shows that adding machine learning to your Jamstack site can only require a couple of lines of code!

If you'd like to learn more about what this API can do, check out [the docs](https://deepai.org/api-docs/)!

---

Overall, this post covered the different ways you can add machine learning to your Jamstack site.

There's a lot that can be done using ML in JavaScript and I hope this post gave you some ideas!
