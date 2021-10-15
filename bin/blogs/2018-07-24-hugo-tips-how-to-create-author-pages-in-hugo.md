---
title: 'Hugo tips: How to create author pages'
description: >-
  Ever wondered how to create an author page in Hugo that displays

  the author’s name, their bio, and a list of their articles, like WordPress
  does?


  Check out this tutorial to learn how.
authors:
  - Irene Morente
date: '2018-07-24'
topics:
  - tutorials
tags:
  - hugo
  - tutorial
tweet: ''
format: blog
---
Ever wondered how to create an author page in Hugo that displays
the author’s name, their bio, and a list of their articles, like WordPress does? It can be done 🙌

{{< toc >}}

## Create authors taxonomy

Hugo includes support for user-defined groupings of content called [taxonomies](https://gohugo.io/content-management/taxonomies/).

To create our `authors` taxonomy, add the following block to your Hugo site **config.toml**:

```toml
[taxonomies]
  author = "authors"
```

If you’re already using `tags` or `categories` as taxonomies, make sure to add them to the config as well. Hugo creates `tags` and `categories` taxonomies by default, but they'll stop working once you define any custom taxonomies unless you include them too.

```toml
[taxonomies]
  author = "authors"
  tag = "tags"
  category = "categories"
```

## Add author metadata

Now that we have the authors taxonomy, we need a place to store information about each author:

1. Create an `authors` directory under `content`.

2. Create a subdirectory for each author. The name of the subdirectory should be the slugified version of the author's name; for example, if the author’s name is **Ursula K. Le Guin**, the folder will be **ursula-k-le-guin**.

3. Add an `_index.md` (note the underscore is important!) with information about the author in each subdirectory.

```
└── content/
    └── authors/
        ├── author-1/
        │   └── _index.md
        ├── author-2/
        │   └── _index.md
        └── author-3/
            └── _index.md
```

*_index.md* example for an author:
```
---
name: Ursula K. Le Guin
photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Ursula_K_Le_Guin.JPG'
twitter: @ursulaleguin
---
Ursula Kroeber Le Guin (October 21, 1929 – January 22, 2018) was an American
novelist. The New York Times described her as “America’s greatest  science fiction writer”, although she said that she would prefer to be known as an “American novelist”.
```

## Create author templates

Hugo searches for the layout to use for a given page in a [well defined order](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-taxonomy-list-pages), starting from the most specific.

To create a specific author template:

1. Create an `authors` folder under `layouts`.
2. Add a `list.html` template to display information about the author and list their posts.

```
└── layouts/
    └── authors/
        └── list.html
```

*layouts/authors/list.html*
```html
<h1>{{ .Params.name }}</h1>
<img src="{{ .Params.photo }}" alt=""/>

<h2>Bio</h2>
{{ .Content }}
{{ with .Params.twitter }}
  <p>
    <a href="https://twitter.com/{{ substr . 1 }}">
      Follow {{ $.Params.name }} on Twitter
    </a>
  </p>
{{ end }}

<h2>Articles</h2>
<ul>
{{ range .Data.Pages }}
    <li><a href="{{ .Permalink }}">{{ .Title }}</a></li>
{{ end }}
</ul>
```

By default, Hugo will also use the `list.html` template to render a list of all existing authors.
Using the same template to display different things can get messy quickly 🙈

Instead of adding extra logic to our `list.html`, we can take advantage of [Hugo’s template lookup order](https://gohugo.io/templates/lookup-order/#examples-layout-lookup-for-taxonomy-terms-pages) for taxonomy terms, and add a template called `terms.html` to render the list of authors:

```
└── layouts/
    └── authors/
        └── list.html
        └── terms.html
```

*layouts/authors/terms.html*
```html
<h1>Authors</h1>
<ul>
{{ range .Data.Pages }}
  <li><a href="{{ .Permalink }}">{{ .Params.name }}</a></li>
{{ end }}
</ul>
```

To disable listing authors all together, add `taxonomyTerm` to the list of `disableKinds` in your **config.toml**
```
disableKinds = ["taxonomyTerm"]
```

## Add authors to posts

We can now add a list of one or more `authors` to the front matter of our posts.

```
---
title: "Ursula K. Le Guin: Conversations on Writing"
authors:
  - Ursula K. Le Guin
  - David Naimon
---
In a series of interviews with David Naimon (Between the Covers), Le Guin
discusses craft, aesthetics, and philosophy in her fiction, poetry, and
nonfiction respectively.
```

In the template that renders your post, you can show additional information about the author(s), like an avatar and a link to their page, with the following snippet:

```html
{{- range .Params.authors }}
  {{- with $.Site.GetPage "taxonomyTerm" (printf "authors/%s" (urlize .)) }}
    <figure>
      <img src="{{ .Params.photo }}" alt=""/>
      <figcaption>
        <a href="{{ .Permalink }}">{{ .Params.name }}</a>
      </figcaption>
    </figure>
  {{ end }}
{{ end }}
```


## Example site

Want to see an example in action? Take a look at this [example GitHub repository](https://github.com/imorente/hugo-multiauthor-example) for a Hugo site using this technique.
