---
title: Absolute Imports in Next.js
description: Absolute imports can save the day when you have to deal with
  project organization and multiple levels of folders.
authors:
  - Cassidy Williams
date: 2020-12-07
lastmod: 2020-12-07
topics:
  - tutorials
tags:
  - Next.js
  - blogvent
tweet: ""
format: blog
relatedposts:
  - "Next.js: Should I use SSR or SSG?"
  - '"Escaping" Next.js to access the browser'
seo:
  metatitle: Absolute Imports in Next.js
  ogimage: /v3/img/blog/blogvent7.png
  metadescription: Absolute imports can save the day when you have to deal with
    project organization and multiple levels of folders.
---



Welcome to Blogvent, day 7!

We've all been there, you're organizing your files in a project, and you see a dreaded import statement:

```js
import Button from '../../../../designsystem/buttons/Button'
```

Gross. Now that you've re-arranged some folders and files, what breaks? What imports have to change? How many files have to be updated?

Next.js has a handy little feature built right into the framework for that, called **absolute imports**.

With absolute imports, you can alias certain folders to a name, and not have to worry about all of the files that change when you do!

## Implementing absolute imports
Make a (or use your existing) `jsconfig.json` at the top of your project. If you're using TypeScript, you can make a `tsconfig.json` instead. Put something like this inside of that file:

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@components/*": ["src/components/*"],
      "@designsystem/*": ["src/designsystem/*"],
      "@buttons/*": ["src/designsystem/buttons"]
    }
  }
}
```

The `baseUrl` here allows you to import directly from the root of the project (or wherever you put it), and the `paths` are all of the different paths that have a "nickname".

Your import statement from earlier can now look like:
```js
import Button from '@buttons/Button'
```

Now, if you ever rearrange big folders, you can change it just in the one `jsconfig` file, or no changes will be needed because your imports in each individual file stay the same!

## Cool! How does this work in a production app?
Glad you asked! If you'd like to see a working example of this, check out the [Jamstack Explorers](https://explorers.netlify.com/?utm_source=blog&utm_medium=imports-cs&utm_campaign=devex) repository:

- [The jsconfig file](https://github.com/netlify/explorers/blob/main/jsconfig.json)
- [Example imports on the About page](https://github.com/netlify/explorers/blob/main/src/pages/about.js#L1-L3)

