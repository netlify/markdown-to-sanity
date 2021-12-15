---
title: The role of roles and how to set them in Netlify Identity
description: >-
  Role management is an integral part of any application's authorization
  process. In this post, we examine the part roles play in securing your
  applications and how to effectively manage them. 
authors:
  - Divya Sasidharan
date: '2019-02-21'
topics:
  - tutorials
tags:
  - Roles
  - Access Control
  - Identity
tweet: ''
format: blog
---
When building any web application, an important consideration is whether or not to grant users access to specific content. In the world of authorization, this decision is determined by checking for user roles and subsequently granting or denying a user access based on their role. A user’s role therefore defines a set of permissions in terms of what a user can and cannot do in an application. A common pattern that uses roles is role-based redirects, where a user is redirected to a login page or another publicly accessible page if they try to navigate to a site or page that they are not authorized to visit. For more on this check out [this post on implementing role based redirects with Netlify](https://www.netlify.com/blog/2019/01/31/restrict-access-to-your-sites-with-role-based-redirects/). 

Setting a user’s role is fairly standard with most authentication providers. With Netlify, setting a user role can be done either from the UI or via an API endpoint. In this post, we’ll dive into these two strategies to better understand role management with Netlify.

## UI

In Netlify, you can assign user roles directly from the dashboard by navigating to an individual user page. From here, you can then set the role of the user appropriately. (See diagram below)


![Workflow of setting a user role through the Netlify UI](/v3/img/blog/set-role-identity.jpg)


Once assigned, these roles can now be used to gate content on your site. 

## API 

Another option to setting a user’s role is via a serverless Lambda function. When certain events happen in Netlify, like a new user signup or site deploy, a lambda call can be triggered. For more on the default serverless function triggers available, check out the [Functions docs](https://www.netlify.com/docs/functions/#event-triggered-functions). Alternatively, you can create a custom serverless function and trigger them via the notifications webhook. This allows you to subscribe to events like user registration and create added actions directly linked to Identity-related events. For our use case, we will be creating a custom serverless function called `handle-signup`, which gets triggered when a new user signs up. Binding to the identity event means that we can modify user data (like add a user role) when a new user signs up.   

To modify the user data, we will update the user metadata to include a new role and send it to our Identity instance via the the body of the callback function. Identity expects data to be in a specific format to create a user and generate a JWT token.

```json
{
  "app_metadata": {
    "roles": ["investigator", "photographer"]
  },
  "user_metadata": {
    "full_name": "Jessica Jones"
    "email": "jessica@aliasinvestigations.com"
  }
}
```

In order to follow this convention, we will construct a new data object, called `responseBody` in the above specified format. For now, we will hard code the visitor role so all new users will be assigned a role of `visitor` and we’ll append the existing user metadata available from the body of the `event` parameter to our new data object. Then, we’ll send this data in the body of the callback, via `JSON.stringify(responseBody)` with a status code of `200`.

```js
exports.handler = function(event, context, callback) {
  const data = JSON.parse(event.body);
  const { user } = data;
    
  const responseBody = {
    app_metadata: {
      roles: ["visitor"],
      my_user_info: "this is some user info"
    },
    user_metadata: {
      ...user.user_metadata, // append current user metadata
      custom_data_from_function: "hurray this is some extra metadata"
    }
  };
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  });
};
```

While we’ve managed to successfully create a role for our users, the role creation itself is hardcoded. Let’s work on adding some logic to our roles. Specifically, let’s check a user’s email and assign a role of `editor` for domains of a trusted company domain—i.e. trust-this-company.com—and  `visitor` for every other domain. For this, we’ll create a function called `ValidateUser` where we’ll return a role array based on the user’s email domain. We can then append this to the `responseBody` we constructed earlier, so our roles are now assigned based on a user’s email domain.

```js
exports.handler = function(event, context, callback) {
  ...
  const validateUser = email => {
    if (email.split("@")[1] === "trust-this-company.com") {
      return ["editor"];
    } else {
      return ["visitor"];
    }
  };
    
  const roles = validateUser(user.email)
    
  const responseBody = {
    app_metadata: {
      roles,
      ...
    },
    ...
  };
      
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(responseBody)
  });
};
```

## Role Call

Role management is one of the most important features to building any robust web application. With Netlify, you have many options when creating and modifying a user’s role. Once configured, you can sleep soundly knowing that Netlify is handling authentication for your most valuable assets.

As always, we’d love to hear about how you’re using roles and authentication in your application, give us a shout on twitter [@Netlify](https://twitter.com/netlify)! 

