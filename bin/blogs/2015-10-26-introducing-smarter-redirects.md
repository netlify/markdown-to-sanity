---

title: Introducing Smarter Redirects
authors:
  - Matt Biilmann
image: /v3/img/blog/signs.jpg
format: blog
short_title: Smarter Redirects
description: "We just made Netlify’s redirect engine smarter, to avoid chained redirects."
thumbnail: thumbnails/301-redirect-sign.png
cmsUserSlug: ""
date: 2015-10-26
lastmod: 2020-08-03
relatedposts:
  - Netlify Milestones on the road to 1 Million Devs
tags:
  - Netlify
  - News
  - Features
topics:
  - news
---

We just made Netlify’s redirect engine smarter.

Now redirect rules that would lead to a chain of subsequent redirects will always be flattened into one efficient redirect rule.

<!-- excerpt -->

Before if you had a site on [www.example.com](http://www.example.com) with a redirect from /blog to /news, with https enabled, then going to [http://example.com/blog](http://example.com/blog) would trigger a chain of redirects:

[http://example.com/blog](http://example.com/blog) → [https://example.com/blog](https://example.com/blog) → [https://www.example.com/blog](https://www.example.com/blog) → [https://www.example.com/news](https://www.example.com/news)

Now our redirect engine is smart enough to detect that chain and redirect straight from [http://example.com/blog](http://example.com/blog) to [https://www.example.com/news](https://www.example.com/news)

All this happens straight on our CDN nodes, so the extra roundtrip time when people get redirected is as low as possible.

---

_This post has been featured on **[Netlify Milestones on the road to 1 Million Devs](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#netlify-launches-smarter-redirects)**_:

[![Netlify 1 Million Devs article feature](/v3/img/blog/featured-on-1-million-devs-banner.png)](https://www.netlify.com/blog/2020/08/03/netlify-milestones-on-the-road-to-1-million-devs/#netlify-launches-smarter-redirects)
