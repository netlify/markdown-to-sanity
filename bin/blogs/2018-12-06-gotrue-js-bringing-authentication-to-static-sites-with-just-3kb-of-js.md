---
title: GoTrue JS - bringing authentication to static sites with just 3kb of JS
description: >-
  For the uninitiated, integrating authentication into an application can be a
  confusing, if not daunting process. In this post, we dive into adding
  authentication into your JAMstack apps.
authors:
  - Divya Sasidharan
date: '2018-12-07'
topics:
  - tutorials
tags:
  - vue
  - authentication
  - identity
tweet: ''
format: blog
---
For the uninitiated, integrating authentication into an application can be a confusing, if not daunting process. [In an earlier post](https://www.netlify.com/blog/2018/11/28/authentication-for-the-rest-of-us/?utm_source=blog&utm_medium=social&utm_campaign=blog), we covered the many options available when it comes to authentication. We also shared some tips and tricks for choosing the best authentication tool based on your use case. Picking an authentication solution is a useful first step, albeit a small one in the long road to keeping our applications secure. In this post, we will illustrate key concepts of the authentication flow using the example of the most basic of authentication workflows, the login/logout process.

In our implementation, we will be using Netlify’s open source [GoTrue JS library](https://github.com/netlify/gotrue-js) to provide authentication since its one of the more lightweight authentication solutions available. Many authentication solutions provide you with a default interface via a widget that cannot be customized.  GoTrueJS allows you to design your own interface to keep in line with your brand identity and enable continuity in the overall user experience without significantly adding to your page weight.

Before we begin, let’s look at an overview of the flow of a basic login/logout process. 


![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F2507508DB100B311C1331E4531EBBCEE62EFBB38F8620EFB94DB2C10CD9F92_1543535182242_flowDiagram.png)


When we first navigate to a landing page, we are presented with a login prompt. Navigating past the landing page requires either logging in or signing up. For this example, let’s assume we’re accessing the page as a first time user, so we will have to go through the sign up flow. In most sign up processes, a confirmation email is sent on initial sign up as a way to verify an account. On clicking the confirm sign up button from our inbox, we are then brought back to the login page where we can proceed to login. On successful login, the page then redirects to the dashboard from which we can navigate to other similarly restricted pages or logout. 

Let’s dig a little deeper to examine the implementation details that goes into architecting such a flow. For this, example we will be using VueJS. The concepts however translate regardless of the framework you use, so feel free to skip over the Vue specific parts to get the gist of using GoTrueJS. To learn more about the available functionality in GoTrue JS, be sure to check out the [GoTrue JS Playground](https://gotruejs-playground.netlify.com/).

## A Vue on Authentication with GoTrue JS
Here’s an overview of how the API calls are made with respect to the general authentication flow: 

![](https://d2mxuefqeaa7sj.cloudfront.net/s_2F2507508DB100B311C1331E4531EBBCEE62EFBB38F8620EFB94DB2C10CD9F92_1543596588801_signupFlow.png)

To return to the previous authentication flow diagram, a sign up process begins with a user signing up, confirming their account from an email sent to their inbox, and logging in from the page the email confirmation navigates them back to. At every step of this auth flow, we make calls back to the authentication API to notify it of a user’s actions with the relevant data entered. We will be focusing on `signup`, `confirm`, `login` and `logout` specifically.

To see a full working version of the application and the code for it, check out [netlify-gotrue-in-vue.netlify.com](https://netlify-gotrue-in-vue.netlify.com) and [GitHub](https://github.com/shortdiv/gotruejs-in-vue) respectively.

If you'd like a React implementation of this example, check out [this demo](https://netlify-gotrue-in-react.netlify.com/) and [this repo](https://github.com/netlify/create-react-app-lambda/tree/reachRouterAndGoTrueDemo).

## The magic is in the details

### Routes

```
.
├── src/
├── router/
  ├── index.js
  ├── routes.js
├── ...
└── package.json
```

Since our application requires logging in to navigate past the main landing page, we’ll start by defining the routes of our application. To do this, we’ll add the relevant routes to the  `routers.js` file located in `src/router`. Our application is pretty straightforward, so we only need to define routes for dashboard and for login. Login is the default page users see when they first navigate to the application and Dashboard is the page users are navigated to when they successfully log in. Note the meta attribute in the dashboard page that indicates that authentication is required to access that route.

```js
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";

export default [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
    meta: {
      authRequired: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];
```   
*router/routes.js*

Now that we’ve defined the relevant routes, we’ll update the `router/index.js` file to register those routes and add the necessary navigation guards so that pages that require authentication are redirected to the login page. 

```js
import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";
Vue.use(Router);
const router = new Router({
  routes,
  mode: "history"
}); 
export default router;
```
*router/index.js*

In order to add the navigation guards, we’ll need to check the route’s metadata for the `authRequired` attribute as well as the store to check that the user has already logged in (more on this later). If authentication is not required for a route, we’ll let the user through to the requested route with `next()`. In the event that authentication is required, we will redirect the user to the default login page.

```js
router.beforeEach((to, from, next) => {
  const authRequired = to.matched.some(route => route.meta.authRequired);
  if (!authRequired) return next();
  // check if current user
  if (store.getters["auth/loggedIn"]) {
    // maybe do some validation to check token is valid //
    next()
  }
  next({ name: "login", query: { redirectFrom: to.fullPath } });
})
```
*router/index.js*


### Components

Now that we’ve defined our routes, let’s move on to defining our components, so we have a better sense of how to manage the state of our application. At the bare minimum the landing page should have form fields for signing up or logging in. Though the logic of a login and a signup form are similar, they make separate API calls so we’ll separate them into individual forms.

```html
<form @submit.prevent="login()">
  <label>
    Username:
    <input type="text" v-model="loginCreds.email">
  </label>
  <label>
    Password:
    <input type="password" v-model="loginCreds.password">
  </label>
  <button type="submit">Login</button>
</form>


<form @submit.prevent="signup()">
  <label>
    Username:
    <input type="text" v-model="signupCreds.email">
  </label>
  <label>
    Password:
    <input type="password" v-model="signupCreds.password">
  </label>
  <button type="submit">Sign Me Up!</button>
</form>
```
*src/components/login.vue*

Notice that we’re using `v-model` in the form fields. Doing this allows us to keep track of the state of our inputs without having to grab the data from the DOM when a form is submitted.

```js
export default {
  name: "Login",
  data() {
    return {
      loginCreds: {
        email: null,
        password: null
      },
      signupCreds: {
        email: null,
        password: null
      }
    }
  }
}
```
*src/components/login.vue*

The next step is to define the `login` and `signup` methods that each form calls on submission. Logging in and Signing up require calls to the API, so we’ll name those calls `attemptSignup` and `attemptLogin` and define them in our Vuex actions later. 

```js
export default {
  name: "Login",
  ...
  methods: {
    ...mapActions("auth", ["attemptLogin", "attemptSignUp"]),
    signup() {
      //call API signup//
      this.attemptSignUp(this.signupCreds) 
        .then(() => console.log("A confirmation email has been sent to you!"))
        .catch(err => console.log(err, "womp womp. Something went wrong."))
    },
    login() {
      //call API login//
      this.attemptLogin(this.loginCreds)
        .then(() => {
          this.$router.push(this.$route.query.redirect || "/");
          console.log('You have successfully logged in')
        })
        .catch(err => console.log(err, "womp womp. Something went wrong."))
    }
  }
}
```
*src/components/login.vue*

Similarly, we’ll create an `attemptLogout` call in our main dashboard component, so a user can logout after they’ve logged in.

```html
<button @click="logout">Log me out</button>
```


```js
export default {
  name: "Dashboard",
  methods: {
    ...mapActions("auth", ["attemptLogout"]),
    logout() {
      //call API logout//
      this.attemptLogout()
        .then(() => {
          this.$router.push(this.$route.query.redirect || "/login");
          console.log('You have successfully logged out')
        })
        .catch(err => console.log(err, "womp womp. Something went wrong."))
    }
  }
}
```
*src/components/dashboard.vue*

### States

```
.
├── src/
 ├── state/
   ├── modules/
     ├── auth/
       ├── index.js       
       ├── actions.js
       ├── getters.js
       ├── mutations.js
       ├── store.js
   ├── store.js
├── ...
└── package.json
```

Let’s now move on to define those actions `attemptSignup`, `attemptLogin` and `attemptLogout` that we made reference to earlier. We’ll be leaning heavily on Vuex to handle state management in our application. In order to make calls to GoTrue JS, we first need to create a new instance of it. Since this instance needs to be accessible for every action in our store, we’ll define it in the state.

```js
import GoTrue from "gotrue-js";
    
export const auth = new GoTrue({
  APIUrl: "https://clever-williams-469dd0.netlify.com/.netlify/identity",
  audience: "",
  setCookie: false
});
```
*src/auth/modules/auth/state.js*

We can now import the auth instance from our state and use them in our [login](https://gotruejs-playground.netlify.com/#log-in), [logout](https://gotruejs-playground.netlify.com/#log-out) and [signup](https://gotruejs-playground.netlify.com/#sign-up) actions. The authentication methods in GoTrue JS don’t return a promise, so we’ll “promisify” our actions so we can chain them to additional methods and catch any errors should they occur.

```js
import { auth } from "./state";
    
const attemptSignup = (credentials) => {
  return new Promise((resolve, reject) => {
    auth
      .signup(credentials.email, credentials.password)
      .then(response => {
        console.log("Confirmation email sent", response);
        resolve(response);
      })
      .catch(error => {
        reject(error);
        console.log("It's an error", error);
      });
  });
};

const attemptLogin = ({ commit, dispatch }, credentials) => {
  return new Promise((resolve, reject) => {
    auth
      .login(credentials.email, credentials.password)
      .then(response => {
        resolve(response);
        commit("SET_CURRENT_USER", response);
      })
      .catch(error => {
        reject(error.json);
      });
  });
};

const attemptLogout = ({ commit }) => {
  return new Promise((resolve, reject) => {
    const user = auth.currentUser();
    user
      .logout()
      .then(response => {
        console.log(response);
        resolve(response);
        commit("SET_CURRENT_USER", null);
      })
      .catch(error => {
        reject(error);
        console.log("Could not log out", error);
      });
  });
};

export default {
  attemptSignup,
  attemptLogin,
  attemptLogout
}
```
*src/auth/modules/auth/actions.js*

## Confirmation, success.  

So far we’ve defined the general flow of authentication in our application. However, with the current setup, authentication still doesn’t quite work. While the signup step may work, login will fail since the API requires a confirmation token to verify a user’s account. That’s because we have not yet defined the confirmation step in the auth flow. Let’s do that now.

```js
const attemptConfirmation = (credentials) => {
  return new Promise((resolve, reject) => {
    auth
      .confirm(credentials.token)
      .then(response => {
        console.log("User has been successfully confirmed!");
        resolve(response);
      })
      .catch(error => {
        reject(error);
        console.log(error);
      });
  });
};
```
*src/auth/modules/auth/actions.js*

This confirmation token is generated when a user confirms an account from their email and is redirected back to the login page. The token is accessible via a [fragment identifier](https://en.wikipedia.org/wiki/Fragment_identifier) in the site URL.
Don’t worry, since this is a redirect, the confirmation token is hidden from the browser. We’ll be using this token to confirm the user. 

```js
export default {
  name: "Login",
  methods: {
   ...
    login() {
      let token = decodeURIComponent(window.location.search)
        .substring(1)
        .split("confirmation_token=")[1];
      this.attemptLogin({ token, ...this.loginCreds })
        .then(...)
        .catch(...)
    }
  }
}
```
*src/components/login.vue*


The confirmation step is so tightly coupled with the login flow, especially when a user logs in for the first time upon confirming an account. As a result of this, we’ll wrap the `attemptConfirmation` call in our `attemptLogin` via a dispatch. 

```js
const attemptLogin = ({ commit, dispatch }, credentials) => {
  return new Promise((resolve, reject) => {
    dispatch("attemptConfirmation", credentials).then(() => {
      auth
        .login(credentials.email, credentials.password)
        ...
    });
  });
};
    
const attemptConfirmation = ({ commit, dispatch }, credentials) => {
  return new Promise((resolve, reject) => {
    if (!credentials.token) {
      resolve();
      return;
    }
    auth
      .confirm(credentials.token)
      .then(response => {
        credentials.token = null;
        dispatch("attemptLogin", credentials);
        console.log("User has been successfully confirmed!");
        resolve(response);
      })
      .catch(error => {
        reject(error);
        console.log(error);
      });
  });
};
```
*src/auth/modules/auth/actions.js*

`attemptLogin` will automatically dispatch the `attemptConfirmation` action. If there is a token in the payload, the action will run `auth.confirm`. On successful confirmation, the action nullifies the token and dispatches back to `attemptLogin` to proceed with the login flow.


## TLDR; Never Compromise when it comes to Authentication

We covered a lot of ground in terms of creating a custom authentication workflow while leaning on the power of gotrue-js. Here’s a quick refresher of the steps to securing your apps using GoTrueJS.


1. Create a new instance of GoTrueJS
2. Hook up GoTrue JS Confirmation, Sign Up and Login methods
3. Grab the token from the email redirect URL and pass that to the confirmation method
4. Always be sure to call confirm BEFORE login if the user is a first time visitor
5. Save the token on successful login to local storage and be sure to destroy it on logout

Authentication is a complex subject, and this post does not go into some of the deeper technicalities. But hopefully this post has helped bring to light the fundamentals of architecting your own authentication flow in your applications, and helped you get started with GoTrue JS. 

As always, we’d love to hear from you. Let us know know how you’re building authentication into your applications!
