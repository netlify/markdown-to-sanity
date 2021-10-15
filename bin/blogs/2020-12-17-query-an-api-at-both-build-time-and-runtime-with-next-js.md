---
title: Query an API at both build time and runtime with Next.js
description: Where and how do I call an API in Next.js? How does getStaticProps
  work? Can I mix and match build time and runtime? Learn all of this and more
  in this post.
authors:
  - Cassidy Williams
date: 2020-12-16
lastmod: 2020-12-16
topics:
  - tutorials
tags:
  - nextjs
  - blogvent
tweet: ""
format: blog
relatedposts:
  - "Next.js: Should I use SSR or SSG?"
  - |
    How to Deploy Next.js Sites to Netlify
seo:
  metatitle: Query an API at both build time and runtime with Next.js
  metadescription: Where and how do I call an API in Next.js? How does
    getStaticProps work? Can I mix and match build time and runtime? Learn all
    of this and more in this post.
  ogimage: /img/blog/blogvent16.png
---
Welcome to Blogvent, day 16!

In Next.js, you can call an API at build time, *and* at runtime. There are pros and cons to this!

If you call an API at build time, that means the data is pulled *only* at build time, and so when your users go to your site, they don't have to wait for the data to load. It will already be there, baked into the page! But, that means you need to run a build again if you want to update the content.

If you call an API at runtime, that means the data is pulled when the page is run, as the user queries it! It makes for a slower experience for your users sometimes, but the data will always be up-to-date.

## Can I see how this works more?

Of course! [Here's a demo I built](https://next-nasa-demo.netlify.app/) to illustrate this further:

![Preview demo site querying the NASA API, build time on the left, and runtime on the right](/img/blog/nasapreview.png "Preview demo site querying the NASA API")

This demo uses [NASA Open APIs](https://api.nasa.gov/) to pull in photos.

On the left, you'll see an image of Neptune. That image was pulled onto the site at build time. In the code, in my page component I call the API using the Next.js function `getStaticProps`:

```js
export async function getStaticProps() {
  const res = await fetch(`https://images-api.nasa.gov/search?q=neptune`)
  const data = await res.json()

  let image = data.collection.items[0].links[0].href
  let info = data.collection.items[0].data[0]

  return {
    props: { image, info },
  }
}
```

In this function, I fetch the API, get the image and info data for the first image returned, and then push that to the page. [You can see the full file here](https://github.com/cassidoo/next-nasa-demo/blob/master/pages/index.js). This function is called once when the site is built, and then never again until the site is built again.

On the right side, the image is pulled in at runtime. When the page loads and the component is mounted, the API is fetched. You can change the text in the input, and it will fetch more data from the API. This is using the React hooks, [`useEffect`](https://reactjs.org/docs/hooks-reference.html#useeffect) and [`useState`](https://reactjs.org/docs/hooks-reference.html#usestate):

```js
export function useQuery(passed) {
  let [planet, setPlanet] = useState(passed)

  useEffect(() => {
    let current = true
    fetch(`https://images-api.nasa.gov/search?q=${passed}`)
      .then((res) => res.json())
      .then((res) => {
        if (current) {
          setPlanet(res)
        }
      })
      .catch((error) => {
        console.log('error', error)
      })
    return () => {
      current = false
    }
  }, [planet])

  return planet
}
```

In this function, I pass in a default value (the `passed` variable) to the API. The data is pulled, and if the component is still mounted and up to date, I set a state variable (`planet`) with the response data from that API. Whenever the user passes in a different query, the API is called again. [You can see how this is used in the whole file here](https://github.com/cassidoo/next-nasa-demo/blob/master/components/QueryImage.js).

## Wow!

I know. Space is really cool. So is JavaScript.

But for real, this is just a small example of how you can use both build time and runtime code in your applications. Think about how you want to structure them, and how you might want to keep some things run once at build, and some things run on the user's end, every time.

If you'd like to see the demo again, [here is the site](https://next-nasa-demo.netlify.app/), [here is the repo](https://github.com/cassidoo/next-nasa-demo), and here is a button to clone it to your chosen Git provider and instantly deploy it to Netlify yourself:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cassidoo/next-nasa-demo&utm_source=blog&utm_medium=nextnasa-cs&utm_campaign=devex)

Til next time!
