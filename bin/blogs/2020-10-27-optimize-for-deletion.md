---
title: >
  Optimize for Deletion: Speed Up Development Without Adding Risk
description: >
  We need to ship quickly, but we also need to avoid burying ourselves in tech debt. Learn how to set up experimental projects to accomplish both goals.
authors:
  - Jason Lengstorf
date: 2020-10-28T00:00:00.000Z
lastmod: 2020-10-28T00:00:00.000Z
topics:
  - insights
tags:
  - engineering
  - teams
tweet: ""
format: blog
seo:
  metatitle: >
    Optimize for Deletion: Speed Up Development Without Adding Risk
  metadescription: >
    We need to ship quickly, but we also need to avoid burying ourselves in tech debt. Learn how to set up experimental projects to accomplish both goals.
  ogimage: /img/blog/optimize-for-deletion.png
relatedposts:
  - "Metrics-driven engineering leadership: How to elevate the visibility of your distributed team"
  - How to Scope Down PRs
---

Recently, I worked on a greenfield project intended to validate an idea. Our instructions were to move quickly so we could get this project into real customers' hands, and that we should optimize for information rather than production-readiness — in short: treat it less like a final product and more like a prototype.

We wanted to be as autonomous as possible, so we reached for [Hasura](https://hasura.io/) as a data layer because it would allow us to stand up a full-blown backend for our app without bothering other teams to provision databases or build APIs. We felt confident it would be a huge speed boost for development.

> **Heads up!** If you're interested in learning more about Hasura, Sarah Drasner wrote a [tutorial for getting started with Hasura](/blog/2020/10/26/graphql-with-hasura-and-nuxt/?utm_source=blog&utm_medium=optimize-for-deletion-jl&utm_campaign=devex) that shows how to create and configure a Hasura instance and build a Jamstack site with it.

However, Hasura was a new tool for us, and we didn't want to dump an unvetted tool into production. Suddenly we were in multiple meetings, writing proposals, doing research on alternatives, and considering how this would fold into our existing systems — none of which were helping us build out and validate this idea.

We were feeling stuck. **We started out with a goal to prototype, learn, and (potentially) trash our work and start over, but our fear of having to maintain this in production forever had stopped us in our tracks.** We didn't want to leave ourselves open to problems later, but at the same time we were losing the autonomy and speed that we had hoped to gain.

In a conversation with [Dalia Havens](/authors/dalia-havens/?utm_source=blog&utm_medium=optimize-for-deletion-jl&utm_campaign=devex), our VP of Engineering, we dug into the problem. Together, we identified where we think things got muddy and proposed a solution for how to get back on track.

## Fool me once...

I have yet to see a company that isn't running code in production that was intended to be a proof of concept or quick prototype. Something that was thrown together by the founder over a weekend is somehow powering a critical piece of production code and no one knows how to get rid of it because making the change would require rewriting huge sections of the codebase.

**Codebases are fluid, and they leak.** Over time, code will be shared and repurposed. New code will be scaffolded on top of the old code. It's a spiderweb of interdependency.

That makes engineers nervous; we're _told_ that something is just a prototype, but what _happens_ is we get stuck maintaining that prototype in production for the foreseeable future.

So when we proposed a new tool for the project, the rest of the engineering team — very reasonably — wanted to be sure we weren't tossing them a time bomb. After all: **there's a decent chance that whatever gets built ends up in production, and that means we have to maintain it.**

## This is at odds with shipping quickly to learn and grow

While it's completely understandable that engineering needs to be cautious about introducing new tools into the stack, **it's also important that companies have the ability to rapidly build and ship things to get feedback from real customers.** If we're building the wrong things, we want to find out as early as possible, and with the lowest possible cost.

These two needs are both true — and seemingly at odds with each other.

## How to build your cake fast and avoid maintenance nightmares, too

In order to balance the trade-offs between shipping quickly and avoiding unnecessary technical debt, we needed to find a way to make two things true:

1. Teams need to be able to safely introduce new tools and ideas for early-stage projects so they can build, ship, and iterate quickly.
2. Teams need to be able to quickly and safely change — or remove entirely — components of experimental systems without having to rewrite the entire codebase.

**To make this possible, we landed on a strategy called _optimizing for deletion_.**

## Optimize for deletion

**If we optimize for deletion, we create guard rails that prevent our prototypes from leaking into other parts of the codebase.** In essence, we're trying to write code in a way that keeps it from leaking into other parts of the codebase. This is critical for reducing the risk of building prototypes because, as [Chris Biscardi puts it](https://www.christopherbiscardi.com/post/if-you-cant-delete-code-then-youre-stuck-with-it), "If you can't delete code, you're stuck with it."

To optimize for deletion, a few things in our code need to be true:

1. **The code is completely isolated from other production code.** A great example of this is creating a separate repository for the experiment that can be [served separately and added to the rest of the codebase through a subdomain or proxy](/blog/2020/06/16/building-large-sites-on-netlify/?utm_source=blog&utm_medium=optimize-for-deletion-jl&utm_campaign=devex). This guarantees that the experiment doesn't leak into other code because it's literally two separate apps.
2. **The code only interacts with other codebases through clearly defined interfaces.** For example, the data layer should only be accessible through an API — it shouldn't be possible for another part of the codebase to reach into the data layer to get data some other way. This guarantees that the data layer can be completely rewritten as long as the API continues to work the same way.
3. **The links between codebases should be limited and easy to find.** If the frontend makes calls to an API, don't put a bunch of [`fetch` calls](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) in files throughout the codebase; that's hard to refactor later if the API moves or changes. Instead, consolidate data access to a centralized place — something like [React's Context API](https://reactjs.org/docs/context.html), [serverless functions](https://www.learnwithjason.dev/blog/serverless-functions/overview/), or some other utility helper — so that it's clear where the frontend is reaching out to other services.

**If we can meet these conditions, we're able to greatly reduce the risk of building with something new, because if we're wrong we only have to replace the tool itself, and not the entire product.**

## What this looks like in real code

Because talking about code in the abstract can be frustrating, let's take a look at examples from real projects that show how this works in practice. (In an effort to keep the examples as simple as possible, unrelated code has been removed.)

### The frontend loads in data through a single utility

In one project my team is working on right now, we're [using Next.js to build out a frontend](/blog/2020/06/10/2-ways-to-create-server-rendered-routes-using-next.js-and-netlify/?utm_source=blog&utm_medium=optimize-for-deletion-jl&utm_campaign=devex) that pulls in data. Here's what one of our page components looks like:

```jsx
import Layout from '../components/Layout';
import VideoPlayer from '../components/VideoPlayer';
import { loadVideoBySlug, loadVideos } from '../data/video';

export default function Video({ title, description, videoId }) {
  return (
    <Layout>
      <h1>{title}</h1>
      <VideoPlayer videoId={videoId} />
      <p>{description}</p>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const video = await loadVideoBySlug(params.slug);

  return {
    props: { ...video },
  };
}

export const getStaticPaths = async () => {
  const videos = await loadVideos();

  return {
    paths: videos.map(({ slug }) => `/video/${slug}`),
    fallback: false,
  };
};
```

Looking at this code, we can see that the data comes from two helper functions, and that those helper functions live in a `data` folder. During development, we can `console.log` the return values to see what's available to us, but we can also see that the video information is listed out in the props of the component.

Where does this data come from? For the purposes of UI development, we don't care. **And that's the point. By building this app with clear boundaries, we've removed the need to know or care about the underlying database while building the frontend.**

Under the hood, we could completely replace the data layer with a whole new system. It could be a REST API, GraphQL, or a direct connection to a database. As long as `loadVideoBySlug` and `loadVideos` still return the same data, we don't have to make a single change to any of the components using this data access utility.

### Data access can be proxied to further separate codebases

In the project with Hasura, we needed to set secret keys in our requests to Hasura for access control, which meant we couldn't make the calls directly from the frontend. Instead, we set up serverless functions to manage that access, which could be called from our frontend like any REST API endpoints.

This means that our frontend is calling a REST API _no matter what we're doing under the hood_ — which in the Hasura case meant sending GraphQL queries.

Here's what one of these serverless functions looks like:

```jsx
const { getPosts, sendQuery } = require("./util/posts");

exports.handler = async (event) => {
  const { post, currentUser } = JSON.parse(event.body);
  const { text, url } = post;

  if (!text || !currentUser || !url) {
    return {
      statusCode: 400,
      body: "Bad Request",
    };
  }

  await sendQuery({
    query: `
      mutation AddPost($userID: String!, $text: String!, $url: String!) {
        insert_posts_one(object: {
          text: $text,
          url: $url,
          user: $userID
        }) {
          id
          date
          text
        }
      }
    `,
    variables: {
      text,
      url,
      userID: currentUser.id,
    },
  });

  const posts = await getPosts(url);

  return {
    statusCode: 200,
    body: JSON.stringify(posts),
  };
};
```

The implementation details of calling out to Hasura — the secret keys, headers, URL endpoint, and so on — are abstracted away in the `sendQuery` utility. Our serverless function only needs to know what the query and its variables are.

If, in the future, we swap Hasura for something else, we'll be able to refactor `sendQuery` with the new details in one place, then update this serverless function to call the new `sendQuery` function differently.

By setting up data access this way, our frontend has no awareness _at all_ of the Hasura backend, and our serverless functions connect to Hasura through a single `sendQuery` utility that we can quickly refactor in the future with minimal impact to the rest of our codebase.

## Bonus #1: code that's optimized for deletion is faster to build

Because code that's optimized for deletion is deliberately isolated and the connections between parts of the codebase kept small, it's faster to work on a codebase architected in this way because there are fewer complexities to navigate:

- It's less likely that the change you make will unexpectedly break something else
- It's less likely that you won't be able to find where that rogue API call is being made
- It's less likely that adjusting based on feedback will require major rewrites

By clearly defining boundaries, the codebase stays small and flexible, enabling faster development.

## Bonus #2: code that's optimized for deletion makes better production code anyways

The clearly defined boundaries of code that's optimized for deletion also means that it tends to be less labyrinthine to navigate. This is a Very Good Thing™ when it comes to onboarding new teammates, making changes later on, or fixing bugs in the future. Isolated code is easier to test, and we have more confidence shipping changes when we have a clear understanding of how other code interacts with the bits we're changing.

## Ship with confidence; maintain without pain

As engineers, we need to strike a healthy balance of moving fast, delivering quickly, and not creating maintenance nightmares for ourselves as we do it. **By optimizing for deletion, we're able to create a set of boundaries around how we write code that set us free to experiment without leaving our future selves holding the bag.**
