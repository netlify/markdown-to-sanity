---
title: How to Process  Multipart Form Data with a Netlify Function
description: If you've ever built a file upload into your website, you might
  have come across the multipart/form-data encoding. In this post, we take a
  look at how the encoding looks and how to process it inside a Netlify
  Function.
authors:
  - Netlify
date: 2021-07-29
lastmod: 2021-07-28
topics:
  - tutorials
tags:
  - forms
  - netlify forms
  - guide
  - functions
  - netlify functions
tweet: ""
format: blog
relatedposts:
  - Forms and Functions
  - How to use event-triggered Netlify Functions
seo:
  metatitle: How to Parse Multipart Form Data with Netlify Functions
  metadescription: In this post, we'll cover learned what multipart/form-data is,
    how it can be parsed using busboy, and how that ties in to Netlify
    Functions.
  ogimage: /img/blog/multipart-forms-og.png
---
If you've ever built a file upload into your website, you might have come across the `multipart/form-data` encoding. It's the encoding browsers use for forms with file inputs in them, and it's also notoriously uncomfortable to work with.

Netlify gives you speedy access to [built in form handling](https://www.netlify.com/products/forms/). But you
can also have your forms submit to serverless functions, which can be helpful when working with backend services.
This post will help you understand a related area of complexity: multi-part form data, and how to process it inside a [Netlify Function](https://www.netlify.com/products/functions/).


## What's `multipart/form-data`, anyway?

Most forms are well-suited by the `urlencoded` encoding. You may have come across it, it's the one with where form fields are separated by `?` and `&`:

```jsx
?favourite_food=sushi&preorder_for=tonight&guests=4
```

This doesn't work well for file uploads though, since a file need some more context: The filename, its mime type and the actual contents.

If we add a file upload field to our form and change the encoding to `multipart/form-data` , this is how the payload looks:

```jsx
------WebKitFormBoundary8TPJmPk86DOKFN5a
Content-Disposition: form-data; name="favourite_food"

sushi
------WebKitFormBoundary8TPJmPk86DOKFN5a
Content-Disposition: form-data; name="preorder_for"

tonight
------WebKitFormBoundary8TPJmPk86DOKFN5a
Content-Disposition: form-data; name="guests"

4
------WebKitFormBoundary8TPJmPk86DOKFN5a
Content-Disposition: form-data; name="company_logo"; filename="some_logo.svg"
Content-Type: image/svg+xml

<svg width="142" height="81" viewBox="0 0 142 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M141.69 36.6L104.95 0L36.61 0.03L0 36.8L0.02 43.67L36.79 80.28L105.15 80.25L141.73 43.49L141.69 36.6Z" fill="black"/>
<path d="M75.37 5.93998C71.2717 5.82294 67.2497 7.064 63.93 9.46999L63.72 8.84999L61.85 6.84999H50.2L48.09 8.95999V71.9L50.2 74.02H62.71L64.83 71.9V54C67.9834 55.9783 71.6484 56.9867 75.37 56.9C88.04 56.9 97.25 46.18 97.25 31.42C97.25 16.66 88.05 5.93998 75.37 5.93998ZM72.66 41.94C67.47 41.94 64.83 38.39 64.83 31.4C64.83 24.41 67.47 20.86 72.67 20.86C77.87 20.86 80.51 24.4 80.51 31.4C80.51 38.4 77.87 41.96 72.66 41.96V41.94Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0">
<path d="M0 0H141.73V80.28H0V0Z" fill="white"/>
</clipPath>
</defs>
</svg>

------WebKitFormBoundary8TPJmPk86DOKFN5a--
```

As you can see, every form field is transferred individually, separated by the `----WebKitFormBoundaryzt0ANlA4AJJAzE3w` boundary. You can also see that the part with our file contains some additional information: The filename and the file type! 🎉

There's some performance considerations between `multipart/form-data` and `urlencoded` that are elaborated on [in this RFC](https://www.rfc-editor.org/rfc/rfc2388#section-5.2). Just know that generally, you should use `multipart/form-data` for forms with file inputs and `urlencoded` for everything else. 

## Parsing `multipart/form-data` inside a Netlify Function

While you certainly could build a parser for the above format yourself, this is the kind of task that's better left to a well-optimised library.

We like to use [busboy](https://github.com/mscdex/busboy), which is a high-performance parser that's also used internally by popular Express package `multer`.

Here's a snippet that implements the parsing logic:

```jsx
import * as Busboy from "busboy"

function parseMultipartForm(event) {
  return new Promise((resolve) => {
    // we'll store all form fields inside of this
    const fields = {};

    // let's instantiate our busboy instance!
    const busboy = new Busboy({
      // it uses request headers
      // to extract the form boundary value (the ----WebKitFormBoundary thing)
      headers: event.headers
    });

    // before parsing anything, we need to set up some handlers.
    // whenever busboy comes across a file ...
    busboy.on(
      "file",
      (fieldname, filestream, filename, transferEncoding, mimeType) => {
        // ... we take a look at the file's data ...
        filestream.on("data", (data) => {
          // ... and write the file's name, type and content into `fields`.
          fields[fieldname] = {
            filename,
            type: mimeType,
            content: data,
          };
        });
      }
    );

    // whenever busboy comes across a normal field ...
    busboy.on("field", (fieldName, value) => {
      // ... we write its value into `fields`.
      fields[fieldName] = value;
    });

    // once busboy is finished, we resolve the promise with the resulted fields.
    busboy.on("finish", () => {
      resolve(fields)
    });

    // now that all handlers are set up, we can finally start processing our request!
    busboy.write(event.body);
  });
}
```

This snippet is not the easiest thing in the world, and if you don't get everything that's going on - no worries. This uses Node.js Streams, which is super fast (even when used outside of Netlify Functions), and that it returns a promise of your form values.

To use it, call it with your Netlify Function Event:

```js
// netlify/functions/restaurantReservationEndpoint
module.exports.handler = async (event, context) => {
  const fields = await parseMultipartForm(event)

  fields.favourite_food // "sushi"  
  fields.company_logo   // { filename: "some_logo.svg", type: "image/svg+xml", content: Buffer([...]) }  
  ...
}
```

Now that you have the file, you can do whatever you want with it! Do image processing, write into a database, send it to another API ... the possibilities are endless.

## Conclusion

In this post, you learned what `multipart/form-data` is, how it can be parsed using busboy, and how that ties in to Netlify Functions. Got more questions? Come on over to answers.neltify.com!
