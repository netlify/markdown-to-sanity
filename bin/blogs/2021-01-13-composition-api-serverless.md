---
title: Building an Event Registration Page with Composition API and Serverless Functions
description: We are still very excited about the Vue Composition API. So in this post, we'll explore how it works, build an event registration form and hook it up with a serverless function to submit the form.
authors:
  - Ekene Eze
date: 2021-01-12
lastmod: 2021-01-12
topics:
  - tutorials
tags:
  - serverless
  - vue
  - composition-api
tweet: ""
format: blog
relatedposts:
  - Reactivity in Vue 3
  - How we built a Vue CLI Plugin for Netlify Lambda
seo:
  metatitle: How to Build an Event Reg Page - Composition API + Serverless Functions
  metadescription: This post explores how to build an event registration signup flow using Vue's Composition API. Learn how to hook up forms and more with serverless functions.
  ogimage: /img/blog/comp-serverless.png
---

![composition api and serverless functions](https://res.cloudinary.com/kennyy/image/upload/q_auto/v1610374368/comp-serverless_qdglg1.png)

The Composition API was born out of the desire to offer Vue developers a different way of writing and organizing code while building Vue apps. It provided some flexibilities around how we build Vue applications that weren't possible in the Options API, but like every other methodology, they all have trade-offs.

The Composition API at a high-level overview offers developers a different way of writing code that ensures that codebases remain legible, readable and easier to maintain even as it grows larger.

In this post, we’ll look at how to collect data from a conference registration form with the Composition API and post it to a serverless function that will receive the request and return a response. You can do pretty much anything else you want in the function, like saving users to a database using [Hasura](https://hasura.io/), or  handling authentications with [Netlify Identity](https://docs.netlify.com/visitor-access/identity/).

If you’ll like to code along, I’ve prepared a [starter repository here](https://github.com/kenny-io/serverless-with-composition-api) for you. Check out the [start](https://github.com/kenny-io/serverless-with-composition-api/tree/start) branch and build from there.

For visual context, this is what the form looks like at the end.

![event registration form](https://res.cloudinary.com/kennyy/image/upload/q_auto/v1609936428/jaminspace_oadphi.png)

You should already have a `src/components/Registration` file set up for you in the `start` branch so we’ll go ahead and walkthrough handling the form fields with the Composition API.
We’ll have fields for `name`, `email`, `track`, `mobile track` and `tickets`. This means that we need a way to handle state for these fields.

### Reactivity in the Composition API

In the Options API, all the pieces of data in the `data()` option is tracked and made reactive in Vue by default. But, in the Composition API, all the data is static by default. This means that we need a way to make it reactive. The Composition API comes with the `reactive` and `ref` helper methods which are available by default in Vue 3. Wrapping the data we need in our Vue app with these methods ensures that they remain reactive across the app.

### ref

ref provides us a way to make data reactive. For instance, if I wanted to track when a form is submitted, I could create a ref variable for it like so:

```javascript
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const isUserRegistered = ref(false)
      return {
        isUserRegistered
      }
    }
  }
</script>
```

By returning `isUserRegistered` in the `setup()` function, I have exposed it to the template.

**Accessing ref values**

To access the value of ref variables, you have to append `.value` to it. Consider this example:

```javascript
<script>
  import { ref } from 'vue'
  export default {
    setup() {
      const isUserRegistered = ref(false)
      const sayHi = () => {
        if (!isUserRegistered.value){
          // say hi to the registered user :
        }
      }
      return {
        isUserRegistered,
        sayHi
      }
    }
  }
</script>
```

This might seem like you need to write a lot of `.value`‘s when using ref but that is not the case in the render context. When you return a `ref` in the `setup()` function, it automatically unwraps to the inner value and becomes accessible to the template. As a result, you won’t need to append `.value` to access a `ref` in the template:

```html
<template>
  <div v-if="!isUserRegistered">
    <!-- more template thingy -->
  </div>
</template>
```

### Reactive

Just like `ref`, reactive also provides us with a way of keeping data reactive in Vue 3. Albeit different from ref, it achieves the same result. Let’s demonstrate how the `reactive` helper method works in the registration form:

```javascript
<script>
  import { reactive } from 'vue'
  export default {
    setup() {
      const formData = reactive({
        name: "",
        email: "",
      })
      return {
        formData
      }
    }
  }
</script>
```

`formData` in the `setup()` function above is a reactive object that contains all the pieces of data supplied by the user. We return it in the `setup()` function to expose it for use in the template. Speaking about the template, this is how we’ll use it there:

```html
<template>
  <div>
    <h1>Let's JAM in Space!</h1>
    <p>
      Register for the upcoming Jamstack conference in space! <br />
      <strong>Free </strong>for one and <strong>$5 </strong> for 2+ tickets
    </p>
    <form>
      <label for="name">Name</label>
      <input id="name" v-model="formData.name" placeholder="Enter your name" />
      <label for="email">Email </label>
      <input
        id="email"
        v-model="formData.email"
        placeholder="Enter your email"
      />
    </form>
  </div>
</template>
```

You can immediately see why you may not want to keep binding data to the template using `formData` as doing that could lead to a bloated markup when you have multiple properties inside the object. In my case, I decided to destructure `formData` and get `name` and `email` directly from it like so:

```javascript
return {
  ...formData // spread
};
//OR
const { name, email } = formData; // destructure
return {
  name,
  email
};
```

If we do that, then you might assume that `name` and `email` would be directly bound to the template so:
<a name="reg"></a>

```html
<template>
  <div>
    <form>
      <input v-model="name" placeholder="Enter your name" />
      <input v-model="email" placeholder="Enter your email" />
    </form>
  </div>
</template>
```

But unfortunately, that’s not possible for one reason: spreading or destructuring the `formData` object will remove reactivity from the different pieces of data inside the object. It suffices to say that it seems the reactive object cannot be destructured or spread directly with the spread operator. What do we do then?

**toRefs**

With respect to the snippet [above](#reg), `toRefs` is a helper method that allows us to achieve the spread effect on the `formData` object while retaining reactivity for the different pieces of data inside it. In our case, we can use it to wrap the `formData` object like so:

```javascript
<script>
  import { reactive, toRefs } from 'vue'
  export default {
    setup() {
      const formData = reactive({
        name: "",
        email: "",
        // other piece of data
      })
      return {
        ...toRefs(formData)
      }
    }
  }
</script>
```

With this, we can go ahead and use `name` and `email` directly in the template like we wanted to do [here](#reg).


### Computed

Computed properties in the Composition API work the same way they do in the Options API. However, they have a slightly different syntax. Imagine that I have an imaginary `coupon` that gives users with 2 or more tickets a $3 discount from the total price of their ticket. If that was the case, then I would use a computed property to calculate the total price of the ticket like this:

```javascript
<script>
  import { computed, reactive, toRefs } from 'vue'
  export default {
    setup() {
      const formData = reactive({
        price: 0,
        tickets: 0,
        coupon: 3,
        discountedPrice: computed(() => {
          if (formData.tickets > 1) {
            return formData.price - formData.coupon;
          } else {
            return 0
          }
        });
        // other pieces of data
      })
      return {
        ...toRefs(formData),
      }
    }
  }
</script>
```
`discountedPrice` in the snippet above is a computed property that tracks all of it's dependencies (`formData.price` and `formData.coupon`).

Here's an even more interesting scenario. Let's introduce a `tickets` property to the `formData` object, and calculate `price` based on how many tickets are selected. 1 ticket = $0 (free) while 2 or more tickets will be a flat rate of $5. Computed properties shines in this regard as you can see below:

```javascript
<script>
  import { computed, reactive, toRefs } from 'vue'
  export default {
    setup() {
      const formData = reactive({
        tickets: 0,
        coupon: 3,
        price: computed(() => {
          if (formData.tickets > 1) {
            return 5 - formData.coupon
          } else {
            return 0
          }
        })
      })
      return {
        ...toRefs(formData)
      }
    }
  }
</script>
```
Here, the computed property `price` is tracking both `coupon` and `tickets` and ensures that anytime any of the values change, it will update automatically to capture the new changes. Bonus Point: You don't even need to have a separate `discountedPrice` property anymore.


### Methods

Methods in the Composition API are just regular functions defined in `setup()`. As the last step to creating and using them, you have to always return it in `setup()` so that it is exposed to the template. In our case, I want to create a method that takes all the information provided in the form and post it to a serverless function (which doesn’t exist yet). Here’s how to handle it in the Composition API:

```javascript
<script>
import { reactive, ref, toRefs } from 'vue'
export default {
  setup() {
    const formData = reactive({
      name: "",
      email: "",
      tickets: 0,
      price: 0
    })
    const isUserRegistered = ref(false)
    // method
    const registerUser = () => {
      // "/.netlify/functions/register" is the path to my serverless function
      fetch("/.netlify/functions/register", {
        method:"POST",
        body:JSON.stringify(formData)
      })
        .then((response) => response.json())
        .then(body => {
          // do something with the response
          isUserRegistered.value = true
        })
    }
    return {
      ...toRefs(formData),
      isUserRegistered,
      registerUser
      }
    }
  }
</script>
<template>
  <button @click.prevent="registerUser" type="submit">Register</button>
</template>
```

Remember, methods in the Composition API are normal JavaScript functions. No special syntax needed. The notable thing here is that just like everything else you need in the template, you have to return it in the `setup()` function.

### Serverless function

Serverless functions make it possible for developers to run a server without the overhead that come with fully managing a server. More-so, it comes with fewer cost implications as it only executes on demand. If this tutorial is your first look at serverless functions, I would recommend this awesome [intro to serverless functions course](https://frontendmasters.com/courses/serverless-functions/) by [Jason Lengstorf](https://twitter.com/jlengstorf).

A general rule of thumb for creating serverless functions is that it exports a function called `handler` and returns a response. The response must be an object containing at least a `statusCode` that matches a valid HTTP response code and a `body` that is a string by default. At the barest minimum, this is a valid serverless function:

```javascript
exports.handler = async (event, ctx) => {
  return {
    statusCode: 200,
    body: "Hello World"
  };
};
```

**event**

The `event` argument in the function above is an object that contains all the information you need to know about the request. Here's a quick look at the structure:

```json
{
  path: '/.netlify/functions/register',
  httpMethod: 'POST',
  queryStringParameters: {},
  multiValueQueryStringParameters: {},
  headers: {},
  multiValueHeaders: {}
  body: {},
  isBase64Encoded: false
}
```

This can be very useful to perform all sorts of operations in the function. Like validating the request methods, getting request query parameters, using data from the request body etc. When working with serverless functions, the event argument is your single source of truth for information about the request.

**context**

The second argument is `context`. It is an object that provides broader information about the request. In it, you will find information like:

- The name of the function that was called
- If Netlify identity is present
- What the client context is and
- Lots of other information that you will rarely need, but provided for you regardless.

I'll go ahead and link you up with [this doc](https://docs.netlify.com/functions/build-with-javascript/) that explains it in even more detail.

Now that we know what a serverless function looks like, let’s make one. Create a `functions/register.js` file in the root of your project and update it with this snippet:

```javascript
// export a function called handler
exports.handler = async (event, ctx) => {
  // receive the request event and get the user's details from it
  const { name, email, track, mobileTrack, price } = JSON.parse(event.body);
  // Things you can do here!
  // create a user object and do what you want with, like:
  // Save user to a database
  // Authenticate user
  // Send event details to user's email
  // etc.
  const newUserDetails = {
    username: name,
    email: email,
    track: track,
    mobileTrack: mobileTrack,
    price: price
  };
  // Send response back to the client
  return {
    statusCode: 200,
    body: JSON.stringify(newUserDetails)
  };
};
```

Serverless functions help us perform server-side operations without maintaining a dedicated server. That is what we can do here. The form data sent from the client can be handled however you want in the function. You can save to your database, do server-side validation, handle authentication, roles etc. Talk about dynamic Jamstack? serverless functions is the way to go!

Finally, you’ll need to create a `netlify.toml` file where you tell Netlify where your functions folder is. This helps Netlify locate your functions and deploy them for you along with the rest of your site.

```toml
[build]
functions = "functions"
```

This site is [hosted here on Netlify](https://spacejamconf.netlify.app/) and you can play around with the repo yourself [here on Github](https://github.com/kenny-io/serverless-with-composition-api).
I tried and failed to keep this post under 2k words, but I do hope you found some useful information here on both the Composition API and serverless functions.

### More resources

- [Introduction to Serverless Functions — Video Course — Frontend Masters](https://frontendmasters.com/courses/serverless-functions/)
- [Launching with the Composition API — Free Video Course](https://explorers.netlify.com/learn/launching-with-composition-api)
- [Netlify functions docs](https://docs.netlify.com/functions/overview/)
- [Official Vue 3 Composition API Guide](https://v3.vuejs.org/guide/composition-api-introduction.html)
