---
title: Restrict access to your sites with role based redirects
description: >-
  Restricting access to your content is important to keeping your content secure
  from unauthorized users. In this post, we dive into how to configure role
  based redirects with Netlify.
authors:
  - Divya Sasidharan
date: '2019-01-31'
topics:
  - tutorials
tags:
  - Redirects
  - Access Control
  - serverless
  - functions
tweet: ''
format: blog
---
In the lifecycle of any application development, there often comes a time when you’ll need to need to restrict who can view or edit certain content. One method of restricting access is via role based access control, which is the mechanism used to gate content based on a user’s set role within an organization. When an unauthorized user tries to navigate to restricted content, they are either shown an error page or are navigated back to a login page where they must enter the proper credentials.

## Introducing Role Based Redirects

Restricting access to sites is easy when you use Netlify. With Role Based Redirects, a pro-feature that is available with the [Teams Business plan or above](https://www.netlify.com/pricing/#teams), you can add role-based permissions to your pages and/or sites with as little as one line of text. There are two steps to enabling role based redirect in your Netlify applications; first, you’ll need to add the appropriate redirect rule to your redirects file, then you’ll need to configure your JSON web token with specific user roles.

## Step One: Redirect Rules

To start taking advantage of role based redirects, you start by defining the role conditions in your redirects file.  In the example snippet below, we added the role condition of `editor` in the main `/index.html` path so only users with the role of editor can access the site. The `Role` attribute in the redirect rule is where you define the specific user role you want to grant permission to.

```txt
# If visitor has 'nf_jwt' with role of editor set, let them in.
/* /index.html 200! Role=editor
```

With the current state of redirect rules as defined above, there is no error handling or redirection for users who don’t meet the current condition, which is to have a role of editor. As a result, users without a role of editor will be sent to a default 404 Not Found page. The flowchart below shows the respective paths taken based on whether or not a user’s role has been granted access to a site. 


![Flow Diagram of Netlify Redirects without fallback rule](/img/blog/redirects-wo-fallback.png)


To gracefully handle this, you can customize the default navigation by adding an additional redirect rule to navigate users back to a login page. So it would work like this:

![Flow Diagram of Netlify Redirects with fallback rule](/img/blog/redirects-w-fallback.png)

In the code snippet below, we’ve added this rule and included the gated site as a query parameter called `site`. Including the gated site as a query parameter allows us to grab the appropriate URL and return users to the site they had just left prior to logging in. The additional `splat` path at the end of the `site` query parameter adds extra granularity and enables us to capture the specific path a user was on.

```txt
# If visitor has 'nf_jwt' with role of editor set, let them in.
/* /index.html 200! Role=editor

# else redirect back to login
/* https://login-site.netlify.com/?site=https://gated-site.netlify.com/:splat 302!
```

If you're interested to learn more about redirect rules in Netlify, check out the [docs](https://www.netlify.com/docs/redirects/) or [this post we wrote about configuring redirect rules in Netlify](https://www.netlify.com/blog/2019/01/16/redirect-rules-for-all-how-to-configure-redirects-for-your-static-site/).

## Step Two: Configure JWT 

For role based redirects to work as expected, the proper role must be set in the (JSON Web Tokens) JWT. JWT is a method used to securely send user information and any relevant site data using a shared `secret`. To determine whether or not to grant site access to a user, Netlify relies on the authentication and proxying logic that global edge nodes on the Application Delivery Network (ADN) provide. These  global edge nodes look specifically for the app_metadata key in the JWT to read user roles when granting or denying access to sites. Below is an example of the expected format for `app_metadata`:

```json
{
  "app_metadata": {
    "authorization": {
      "roles": ["admin", "editor"]
    }
  }
}
```

There are many strategies to generating a JWT. Netlify’s Identity feature is one way to generate a JWT without needing additional configuration. When you use Identity, it provides you with a JWT with the proper credentials and app_metadata expected by the global edge nodes. If you prefer, you can also take advantage of role based redirects without Netlify’s Identity feature. Third party authentication providers like Okta and Auth0 provide a JWT that you can use with role based redirects. An important consideration when assessing the best authentication strategy is the algorithm used to sign the token. Netlify applications require JWT tokens to use HS256 algorithm. Both Auth0 and Okta use RS256 by default but provide the option to switch to HS256. You can find out more about how to do so in their respective doc sites. 

For the purpose of explaining the internals of JWT and to abstract away the complexity that often comes with finagling authentication, we will be using a “naïve” authentication strategy to generate our JWT. Specifically, we will be using the `jwt` npm module to generate a token on the fly. In the below snippet, we “sign” the token with an expiry (in Unix time), the desired roles (as defined above) and secret ( `secretsAreLiesInDisguise`). In most third party auth providers, you specify the secret and any desired roles for users from the admin or user management panel. The additional details like `user_metadata` and `user_id` are not required by Netlify per say but are generally useful when signing a JWT.

```js
const jwt = require("jwt")
const uuid = require("uuid/v4")
    
const getExpiryDate = () => {
  const exp = Math.floor(Date.now() / 1000) + 60 * 60;
  return exp;
};
    

const generateJWT = () =>
    jwt.sign(
      {
        exp: getExpiry(),
        app_metadata: { 
          authorization: {
            roles: ["editor", "admin"]
          } 
        },
        user_metadata: {
          name: Jane Doe
          email: doe@adear.com
        },
        user_id: uuidv4()
      },
      secret: "secretsAreLiesInDisguise"
    );
```

Once the token is signed, you’ll need to add the secret to Netlify’s application dashboard . Since JWTs require a shared secret between client and provider, Netlify will need the secret to accurately decode a JWT it receives. To do so, navigate to Settings > Access Control > Edit JWT Secret and add your secret to the input prompt. ([This gif](https://imgur.com/a/B5ZH29X) and the image below provide a visual walk through of this process.) For more on how to do this, check out the documentation for [visitor access control](https://www.netlify.com/docs/visitor-access-control/).

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A6F664AFAC902885C1E14100DE27ACC8C30AB5DCAA924B5E5969A11CCE0193FD_1548790211428_image_preview.jpg)
 
With the JWT generated and the necessary secret added to the Netlify dashboard, we’ll now need to save the JWT to a cookie so browsers can use it when making future requests. Setting a cookie on our gated site, means that authorized users will be able to successfully access a site up until the token expires. For this to work with a Netlify site, we’ll need to save the JWT to a cookie named `nf_jwt`. To accomplish this, we’ll be using a serverless [Netlify function](https://www.netlify.com/docs/functions/). We’ll call this function `set-cookie`  and add it to our functions directory. Below is an example of what this code looks like: 

```js
const cookie = require("cookie");
const axios = require("axios");
exports.handler = function(event, context, callback) {
  const parsedBody = JSON.parse(event.body);
  const { token } = parsedBody;
  
  const twoWeeks = 14 * 24 * 3600000
  
  const netlifyCookie = cookie.serialize("nf_jwt", token, {
    secure: true,
    path: "/",
    maxAge: twoWeeks
  });

  callback(null, {
    statusCode: 200,
    headers: {
      "Set-Cookie": netlifyCookie,
      "Cache-Control": "no-cache"
    },
    body: JSON.stringify({token})
  });
};
```

We can now call the function directly when we make a request to a gated site via [axios](https://www.npmjs.com/package/axios) like so: 

```js
accessGatedSite: async function() {
      const token = createJWT() // call an external function to generate a JWT
      try {
        const response = await axios.post(
          "/.netlify/functions/set-cookie",
          JSON.stringify(token)
        );
        const { token } = response.data;
        console.log(token)
      } catch (err) {
        console.log(err);
      }
}
```

Once the relevant cookie is set on the gate site, the edge nodes will respond in kind by either granting or denying a user access based on their specified role. 

## Demo Time!

If you’re interested in seeing this process in action, check out [this demo](https://login-to-gated-site.netlify.com). The demo has both gated content on the current site https://login-to-gated-site.netlify.com/protected as well as a separate gated site [https://festive-brown-c3df1a.netlify.com](https://festive-brown-c3df1a.netlify.com/). The gated site requires you to generate a token with role of `admin` and/or `editor`. Feel free to play around with creating different tokens with different roles to see how Netlify handles access based on various roles set. If you’re interested in digging into the source code for the demo, check that out on [GitHub](https://github.com/shortdiv/jwt-generate).

## Role Based Redirects ftw!

Role based access controls allow you to set more granular access to your site, or specific pages so only authorized users have access to classified information. They also has an effect on the overall flow of your application since controlling access to pages influences navigation via redirects etc. As a result, ensuring that your access controls are up to date and are regularly managed is important to ensuring both the security of your information and the user experience of your application. With Netlify, we aim to make this process as easy as possible with the Role Based Redirects feature, which allows you to manage your redirect rules right from your client side application. Moreover, because this feature is implemented at the CDN edge, your application doesn’t have to make an extra round trip to the server when authorizing access to users. ✨ If you aren’t already on a Teams Plan, sign up today to get access to this incredibly powerful feature! 
