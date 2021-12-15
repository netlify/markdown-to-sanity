---
title: How to Integrate Netlify Forms in a Vue App
description: A quick rundown on integrating Netlify forms into a Vue application.
authors:
  - Divya Sasidharan
date: '2018-09-07'
topics:
  - tutorials
tags:
  - Vue
  - Forms
  - Tutorial
tweet: ''
format: blog
---

**This guide was most recently updated on Mon, Dec 17th, 2018.**

Forms, put simply, are user-friendly ways of configuring an HTTP request to send data to a server. Even so, they can become cumbersome to configure in a web application since a form is never really _just a form_ and often requires additional configuration to handle data validation, spam protection and storing (and retrieving) data collected from successful form submissions. Oftentimes, these very reasons are what lead people to move from a simple static web application into a complex full stack one. While there is nothing necessarily wrong with this approach (especially if you want full control over storing the data you collect), adding a backend purely to handle form submissions can be overkill and be a maintenance burden later in the future. 

## Enter Netlify Forms

With Netlify, you have the ability to process form submissions without the need to configure a backend. This magic is brought to you by our build bots, which parse your markup at deploy time and spot any `form` elements in your code which would need somewhere to post their data. The build bots then automagically create the necessary form handlers and APIs for you, so there is no need for you to include additional JavaScript or API calls in your code. Huzzah. To start integrating Netlify forms in your app, all you have to do is add a `netlify` attribute to the form element. Once deployed, you can access form submissions via the Netlify interface under `forms` and selecting one of the active forms listed under `Active Forms.` 

![image of forms admin](/v3/img/blog/netlify-forms-in-a-vue-app1.png)

With the form selected, you now have access to viewing every submission collected from that form. 
![image of forms admin showing data collected](/v3/img/blog/netlify-forms-in-a-vue-app2.png)

We’ve previously written about integrating Netlify forms into a React application. Though the general gotchas and takeaways can be adapted from that article but there are some additional configurations that are specific to using Netlify forms with Vue, so let’s dive into the specifics.  

## Forms in Vue

Getting started with using Netlify forms in a Vue app is as easy as including the relevant form and input tags into your component. For our example, let’s create a form to submit questions to a panel of Vue core team members. Here’s an abbreviated version of what a netlify form looks like.  

```js
<template>
  <form
    name="ask-question"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
    <input type="hidden" name="form-name" value="ask-question" />
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        :value="panelist"
        @input="ev => updatePanelist"
        :checked="panelist === currentPanelist"
      />
      <span>{{ panelist }}</span>
    </label>
    ...
    <button>Submit</button>
  </form>
</template>
<script>
export default {
  name: "QAForm",
  methods: {
    updatePanelist (ev) {
      this.currentPanelist = ev.target.value
    }
  },
  data () {
    return {
      panelists: ['Evan You', 'Chris Fritz'],
      currentPanelist: 'Evan You'
    }
  }
}
</script>
```

[As the documentation suggests](https://www.netlify.com/docs/form-handling/), be sure to add the following attributes to your form element `name`, `method`, `data-netlify`, and `data-netlify-honeypot` and a hidden input field. The honeypot and the hidden input field are necessary to guard your form against spam. The hidden input field should have a `name` attribute called `form-name` and a value matching the name of the form, which in this case is `ask-question`.

## Netlify bots, do you read?

Though integrating Netlify forms into a plain HTML file is all well and good, integrating it into a single page app like Vue requires additional legwork. By default Vue renders client side but the Netlify post processing bots expect HTML on site deploy. Any `netlify` form attribute tags included in a Vue app would only be inserted into the DOM client-side, rather than in the HTML and thereby runs the risk of being totally overlooked by the build bots.

To handle this, you have two options. You can either pre-render your application or add the netlify form to your static HTML file in your public folder.

### Remember Remember to always Pre Render

To handle this, we’ll use [Chris Fritz’s](https://twitter.com/chrisvfritz) handy [prerender-spa-plugin](https://github.com/chrisvfritz/prerender-spa-plugin/).  In our vue config file, we simply include the plugin and configure to our hearts content. The plugin will then pre-render HTML files with matching routes at build time, so Netlify can render them appropriately and our forms can work as expected.

```js
const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          [ '/'],
          {
            // options
          }
        ),
      ]
    }
  }
}
```

### Stand-in static forms

If you'd rather not add to your list of dependencies, you can instead add a basic skeleton of a Netlify form in the `public` folder of your application. Since this form acts as a stand-in for the form component, be sure to add the `hidden` attribute to the form, so your application doesn't end up rendering two forms. Additionally, you can choose to drop in the expected form name attributes to this form (i.e. name, panelist and question), so the netlify bots know what to expect when form submissions come in.

```html
<form name="ask-question" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="radio" name="panelist" />
  <textarea name="question"></textarea>
</form>
```

## Reactive Forms in Vue

Our example so far shows a pretty basic implementation of forms. On submit, Netlify simply grabs data from the input elements and posts that to the Netlify forms endpoint automagically. However, in most cases, we may want to have more control over the user workflow by taking advantage of Vue’s reactivity system so a user inputting information updates the form appropriately. To harness Vue's reactivity system, we'll first refactor each input element so they are tied directly to a data attribute.

```js
<template>
  <form 
    name="ask-question"
    ...>
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        @input="ev => form.askPerson = ev.target.value"
        :value="panelist"
        :checked="form.askPerson === panelist"
      />
      <span>{{ panelist }}</span>
    </label>
    ...
  </form>
</template>
<script>
exports default {
  name: "QAForm",
  data () {
    return {
      form: {
        askPerson: ""
      },
      panelists: ['Evan You', 'Chris Fritz'],
    }
  }
}
</script>
```

Now every time you update the input field, the data attribute for form changes accordingly. In addition to updating the data set up, we will also update the current form submission, so we have full control over how the data is structured when it gets sent.

To handle how our form is submitted, we'll add `@submit.prevent="handleSubmit"` to the form tag. We'll be utilizing axios here to handle our POST request. Additionally, since our HTTP request needs to be encoded appropriately, we'll create a method called `encode` to set our data to the appropriate URI format.

```js
<template>
  <form
    ...
    @submit.prevent="handleSubmit">
    <label v-for="(panelist, index) in panelists" :key="index">
      <input
        type="radio"
        name="panelist"
        @input="ev => form.askPerson = ev.target.value"
        :value="panelist"
        :checked="form.askPerson === panelist"
      />
      <span>{{ panelist }}</span>
    </label>
    ...
  </form>
</template>
<script>
import axios from "axios";

export default {
  name: "QAForm",
  data () {
    return {
      form: {
        askPerson: ""
      }
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/",
        this.encode({
          "form-name": "ask-question",
          ...this.form
        }),
        axiosConfig
      );
    }
  }
}
</script>
```

## Handling Form Submissions with Vue Router

Now let’s add vue router so we can create a notification when a user submits a form. For this, we’ll create two components, one for submission success and another for submission failure.

```js
<template>
  <div>
    <h1>Oops, looks like something went wrong!</h1>
    <router-link to="/">
      <button>Back to form</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "SubmissionFail"
  }
</script>
```

```js
<template>
  <div>
    <h1>You're Awesome! Thank you for your submission!</h1>
    <router-link to="/">
      <button>Back to form</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "SubmissionSuccess"
  }
</script>
```

With these components, we can now configure our router.

```js
import Vue from 'vue';
import Router from 'vue-router';
import QAForm from '../components/QAForm';
import SubmissionSuccess from '../components/SubmissionSuccess'
import SubmissionFail from '../components/SubmissionFail'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'QAForm',
      component: QAForm
    },
    {
      path: '/thanks',
      name: 'success',
      component: SubmissionSuccess
    },
    {
      path: '/404',
      name: 'fail',
      component: SubmissionFail
    }
  ]
})

export default router;
```

```js
<script>
export default {
  name: "QAForm",
  data () {
    return {
      form: {
        askPerson: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      axios.post('/', {
        ...
      })
      .then(() => {
        this.$router.push('thanks')
      })
      .catch(() => {
        this.$router.push('404')
      })
    }
  }
}
</script>
```

If you’ve followed the tutorial so far, you can pat yourself on the back, because you’ve successfully integrated Netlify forms into a vue app. Good going you! You can check out the source code for all the code we’ve covered so far here → https://github.com/shortdiv/live-qa-board

## Caveats

At the moment, Netlify maintains the admin view of your form submissions based on the latest configuration of your html forms. If the format of your forms changes (as they tend to) over time, this can cause a couple of issues in the admin UI. For instance, renaming a form field from  \`panelist\` to \`panellist\`, results in past entries being “blanked out”. Don’t worry the data is still there and available to fetch via the API; its just not visible via the UI. Since Netlify does not track the history of a form field, it cannot detect that the two are in fact the same form fields and assumes that the previous form field has been deleted and therefore no longer tracks it. To work around this, keep old form fields hidden instead of replacing them entirely. This way, Netlify continues to track previous data entries and your UI will still show data as expected.

## Forms without all the backend fuss

Forms are the quintessential way of adding interactivity to a page that also allow you to easily collect valuable data to better engage with users. With Netlify forms, you can quickly and painlessly integrate forms into your favorite framework without the hassle of configuring a backend to collect and manage your data.
