---
title: 5 pro-tips and plugins for optimizing your Gatsby + Netlify site
description: Get the most out of Gatsby and Netlify with a few handy tips for your setup.
authors:
  - Dennis Padiernos
date: '2018-06-28'
topics:
  - tutorials
tags:
  - Gatsby
  - static site generator
  - tips
tweet: ''
format: blog
---
We love [Gatsby](https://github.com/gatsbyjs/gatsby). With more than 20K stars on GitHub, it’s one of the most popular static site generators — and like they say, it’s blazing fast. We’ve seen thousands of developers deploy Gatsby sites to Netlify, and in the process, come across several tips and tricks for making the process really smooth.

This post will run through several tips for optimizing your Gatsby site on Netlify. If you’re just getting started, check out the [step-by-step guide](https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/) for deploying a Gatsby site on Netlify. Or you could explore one of the getting-started [project templates](https://templates.netlify.com/tags/gatsby) available for Gatsby which deploy to Netlify with a single click.

## 1. Formulate functional forms

### Protect your form from spam

Netlify offers some built-in functionality for protecting your form from spam, but in order to make sure things run smoothly on your Gatsby site, you’ll need to take one more step and set up one of our [spam-filtering](https://www.netlify.com/docs/form-handling/#spam-filtering) features like the [honeypot field](https://www.netlify.com/docs/form-handling/#honeypot-field) or explicit reCAPTCHA.

We highly recommend that you [use your own re](https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings)[CAPTCHA](https://www.netlify.com/docs/form-handling/#custom-recaptcha-2-with-your-own-settings) with Gatsby (our built-in version does not work with Gatsby’s `<Link>` tags).  When you do so, you’ll also need to make sure you have `'data-netlify-recaptcha=true'` as a prop to your `<form>` tag. Then you’ll need to add the following to your form:

Create a function to handle the recaptcha response:

```
handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  };
```

Add the recaptcha field:

```
<Recaptcha
  ref="recaptcha"
  sitekey={RECAPTCHA_KEY}
  onChange={this.handleRecaptcha}
/>
```

You can check out an example [here](https://github.com/imorente/gatsby-netlify-form-example/blob/master/src/pages/recaptcha.js).

### Set up forms with file uploads

Traditional HTML forms require [very little setup](https://www.netlify.com/docs/form-handling/) on Netlify, but React-based sites need a little extra consideration. Though we previously covered [how to integrate forms with React-based apps](https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/), we recently added support for file uploads, which will require a few extra configurations.

First, you’ll create a function that pulls the files from the input :

```
  handleAttachment = e => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };
```

Then, add the `onChange={this.handleAttachment}` prop to your file upload input field:

```
    <label>
      File:<br />
      <input
        type="file"
        name="attachment"
        onChange={this.handleAttachment}
      />
    </label>
```

Here’s an [example](https://github.com/imorente/gatsby-netlify-form-example/blob/master/src/pages/file-upload.js).

## 2. Get redirects right

Gatsby builds on top of React’s react-router and adds some great features like [pre-caching](https://www.gatsbyjs.org/blog/gatsbygram-case-study/#client-routing-and-pre-caching), which means there are a couple of considerations when you’re also using [Netlify’s redirect rules](https://www.netlify.com/docs/redirects/).

### Proxy Redirects & JWT-based access control

Gatsby uses special pre-caching `<Link>` tags to handle routes without sending requests back to the server. This makes Gatsby sites lightning fast, but it doesn’t give [proxy redirects](https://www.netlify.com/docs/redirects/#proxying) a chance to work or [JWT-based access control](https://www.netlify.com/docs/redirects/#role-based-redirect-rules) a chance to authenticate the request.

To get these redirects working, you’ll want to use `<a>` instead of `<Link>` for URLs that should be handled by Netlify redirects:

```
<a href="/someurl">...</a>
```

## 3. Make content manageable with Netlify CMS

Thanks to a ton of passionate Gatsby fans, there are some really handy ways to get started with Netlify CMS, an open source, Git-centric CMS for static sites. In addition to Gatsby’s own [in-depth tutorial](https://www.gatsbyjs.org/docs/netlify-cms/), there’s also a [plugin](https://www.gatsbyjs.org/packages/gatsby-plugin-netlify-cms). And if you just want to explore what it’s like to use Netlify CMS with a Gatsby site, there’s a [starter template](https://www.netlifycms.org/docs/start-with-a-template/) that automatically sets up a new site on Netlify in a just a few clicks.

## 4. Get your service workers, um, working

Gatsby uses service workers by default (Awesome! They increase your site availability in spotty connectons, and are essential to making a PWA).

The job of a service worker is to tell the browser to cache content, but if the browser caches the service worker file, you won’t see changes to the service worker itself, so you end up with stale content. A general [best practice](https://github.com/w3c/ServiceWorker/issues/893) is to add a `Cache-Control` header when fetching the service worker file, explicitly telling the browser not to cache it. This is necessary for older browsers, though very recent browsers will handle this automatically.

Thankfully, Netlify provides a really easy way make Gasby’s built-in service workers work well. Add a  `_headers` file to your `/static` folder, and include the following lines:

```
/sw.js   # Gatsby's default service worker file path
   Cache-Control: no-cache
```

Update: With the latest version of Gatsby, you may find that your Netlify-handled forms no longer work. This is typically caused by the serviceworker as well (specifically the gatsby-offline-plugin). To work around this issue, you can add the query parameter `?no-cache=1` when posting your form submissions.

## 5. Keep an eye on image size

Image size can be a really big deal. (See what we did there?)

Gatsby has some fantastic plugins, like [gatsby-image](https://www.gatsbyjs.org/packages/gatsby-image/) and [gatsby-plugin-favicon](https://www.npmjs.com/package/gatsby-plugin-favicon), which will process your source images during the build, creating the sizes you need for optimal viewing on your site. However, this processing takes time and memory, especially if the images are extremely large. If you see a build time out or an `Error 137 (“out of memory”)`, try using smaller images (max 3x the width you’ll display), or adjusting your use of these plugins to be more conservative.

If your site is really image-heavy, you may want to stop storing all those image files in your repository, and move them to an image service like [Cloudinary](https://cloudinary.com/) or [Imgix](https://www.imgix.com/).

## What’s next?

We’ve come across loads of tips for building Gatsby sites on Netlify and are always eager for more. Check out [Netlify Community](https://community.netlify.com) for other questions and suggestions, and we’ll be keeping an eye out in case you have some questions of your own!
