---
title: Let’s Learn Eleventy! Boost your Jamstack skills with 11ty
description: >-
  Jamstack with no bloat! See what the static site generator Eleventy can do and why it’s exciting in this quick overview and tutorial.
authors:
  - Jason Lengstorf
date: '2020-04-09'
lastmod: 2020-07-09
topics:
  - tutorials
tags:
  - Eleventy
  - SSG
tweet: ''
format: blog
relatedposts:
  - Deploy a free Gatsby, Hugo, or Eleventy website template in 30 seconds
  - "Gatsby 101: Features, Benefits, and Trade-Offs"
seo:
  metadescription: >-
    Check this tutorial out to see what the static site generator Eleventy can do. Spin up a fast, performant Jamstack site in this quick overview and tutorial from Learn With Jason.
  metatitle: Let’s Learn Eleventy! Boost your Jamstack skills with 11ty
---
There’s been a lot of buzz about the static site generator Eleventy recently, and for good reason: it’s quick to start, doesn’t ship *any* extra code to browsers, and it’s extremely customizable.

Let’s take a quick tour of what Eleventy can do and why it’s exciting.

The code for all the examples in this post is [available on GitHub](https://github.com/jlengstorf/11ty-examples).

## Before we start: there’s a video version of this!

If you learn better by seeing something get built, Eleventy creator [Zach Leatherman](https://twitter.com/zachleat) joined _Learn With Jason_ to walk through [creating a new site using Eleventy](https://www.learnwithjason.dev/let-s-learn-eleventy) starting from an empty folder.

<iframe width="560" height="315" src="https://www.youtube.com/embed/j8mJrhhdHWc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Eleventy's Low barrier to entry — you only need a single Markdown file

Create a new Markdown file called `index.md` with some content:

```md
# Hello world!
This is my website.
```

Then build the site using 11ty’s CLI:

```bash
npx @11ty/eleventy
```

> NOTE: We’re using `npx` here, which allows us to execute the Eleventy CLI's build command without needing to install it as a dependency. For more information on how this works, see [the npm blog announcing `npx`](https://blog.npmjs.org/post/162869356040/introducing-npx-an-npm-package-runner).

![A screenshot of the above steps being run in the CLI.](/v3/img/blog/11ty-quickstart.png)

A `_site` folder with the generated `index.html` gets built, and you’re done.

Wow! 🤯

[Check out this example on GitHub.](https://github.com/jlengstorf/11ty-examples/tree/master/01-quick-setup)

## No runtime — only ship the code you wrote to browsers

If your Markdown file contains:

```md
---
layout: layout.liquid
---
# Hello world!
This is my website.
```

And you create `layout.liquid` with the following:

```html
<html>
  <head>
    <title>My Eleventy Site</title>
  </head>
  <body>
    {{ content }}
  </body>
</html>
```

Eleventy outputs the following HTML:

```html
<html>
  <head>
    <title>My Eleventy Site</title>
  </head>
  <body>
    <h1>Hello world!</h1>
    <p>This is my website.</p>
  </body>
</html>
```

No magic. No extras. Just your content.

[Check out this example on GitHub.](https://github.com/jlengstorf/11ty-examples/tree/master/02-no-runtime)

## Frontmatter is available to layouts

Want to control the title tag from your Markdown files? Add frontmatter!

```md
---
layout: layout.liquid
title: Hello frontmatter!
---
This is my website.
```

In `layout.liquid`, we can reference the title anywhere using `{{ title }}`:

```html
<html>
  <head>
    <title>{{ title }}</title>
  </head>
  <body>
    <h1>{{ title }}</h1>
    {{ content }}
  </body>
</html>
```

11ty outputs the title from frontmatter:

```html
<html>
  <head>
    <title>Hello frontmatter!</title>
  </head>
  <body>
    <h1>Hello frontmatter!</h1>
    <p>This is my website.</p>
  </body>
</html>
```

[Check out this example on GitHub.](https://github.com/jlengstorf/11ty-examples/tree/master/03-frontmatter)

## Add global data with the `_data` directory

If you have data that should be available on every page, create a `_data` directory and add a JSON file — for example, `_data/site.json`:

```json
{
  "title": "My Great 11ty Site"
}
```

We can now access our global data using the file name and the property. For example, in our `layout.liquid`:

```html
<html>
  <head>
    <title>{{ title }} · {{ site.title }}</title>
  </head>
  <body>
    <h1>{{ title }}</h1>
    {{ content }}
  </body>
</html>
```

Now every page title will end with  `· My Great 11ty Site`!

[Check out this example on GitHub.](https://github.com/jlengstorf/11ty-examples/tree/master/04-global-data)

## Overriding global data is straightforward

If we want to override global data in a given directory or post, all we have to do is redeclare it. For example, to override the global site title in one of our blog posts, we can add this frontmatter:

```md
---
layout: layout.liquid
title: Hello frontmatter!
site:
  title: Testing!
---
This is my website.
```

This outputs the following HTML:

```html
<html>
  <head>
    <title>Blog One · Testing!</title>
  </head>
  <body>
    <h1>Blog One</h1>
    <p>My first post!</p>

  </body>
</html>
```

[Check out this example on GitHub.](https://github.com/jlengstorf/11ty-examples/tree/master/05-override-data)

## Want to group posts in 11ty like a blog? Just add tags!

To group content in 11ty, add a tag — 11ty will make it available in other pages!

Create a folder called `blog` and include a `blog` tag in the frontmatter of each post:

```md
---
layout: layout.liquid
title: Blog One
tags: blog
---
My first post!
```

Then loop through the blog "collection" in your home page:

```md
---
layout: layout.liquid
title: Hello frontmatter!
---
Welcome to my site!

## Latest blog posts

{% for blog in collections.blog %}

- [{{blog.data.title}}]({{blog.url}})

{% endfor %}
```

[Check out this example on GitHub.](https://github.com/jlengstorf/11ty-examples/tree/master/06-group-by-tags)

## Add shared data for all files in a given directory

To avoid retyping a bunch of frontmatter for each post, we can create a JSON file with the same name as a directory to add data to *all* posts in that directory. In our `blog` directory, create `blog.json`:

```json
{
  "layout": "layout.liquid",
  "tags": "blog"
}
```

Now our post frontmatter can be simplified:

```md
---
title: Blog One
---
My first post!
```

The layout and tags still apply!

[Check out this example on GitHub.](https://github.com/jlengstorf/11ty-examples/tree/master/07-directory-data)

## Pagination is baked in

If you want to paginate posts, 11ty has it built into collections. Update `index.md`:

```md
---
layout: layout.liquid
title: Hello frontmatter!
pagination:
  data: collections.blog
  size: 2
  alias: blogs
---
Welcome to my site!

## Latest blog posts

{% for blog in blogs %}

- [{{blog.data.title}}]({{blog.url}})

{% endfor %}

{% if pagination.href.previous %}
  <a href="{{pagination.href.previous}}">Previous Page</a>
{% endif %}
{% if pagination.href.next %}
  <a href="{{pagination.href.next}}">Next Page</a>
{% endif %}
```

Now the home page has two posts and a "Next Page" link that leads to a new page with the more posts.

[Check out this example on GitHub.](https://github.com/jlengstorf/11ty-examples/tree/master/08-pagination)

## Creating pages from third party data is a snap

We can make third-party API calls as part of setting global data! Create `_data/characters.js` and add:

```js
// don’t forget to `npm install axios`!
const axios = require('axios');

module.exports = async () => {
  const result = await axios.get('https://rickandmortyapi.com/api/character/');

  return result.data.results;
};
```

Next, create a new file called `character.md` and add the following:

```md
---
pagination:
  data: characters
  alias: character
  size: 1
layout: layout.liquid
permalink: '/characters/{{character.name|slug}}/'
title: Rick & Morty Characters
---

## {{character.name}}

![{{character.name}}]({{character.image}})
```

Setting the `pagination.size` to 1 means we create a page for each result!

[Check out this example on GitHub.](https://github.com/jlengstorf/11ty-examples/tree/master/09-third-party-data)

## 11ty can do more

This isn't everything 11ty is capable of. In addition to the features we covered here, 11ty also has data filters, plugins, shortcodes, and advanced configuration options to customize it to your needs.

You can see everything 11ty is capable of [in the 11ty docs](https://www.11ty.dev/docs/)!
