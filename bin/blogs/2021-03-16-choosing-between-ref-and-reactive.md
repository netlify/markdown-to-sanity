---
title: Choosing Between Ref and Reactive with Vue 3's Composition API
description: An opinionated perspective on whether you should use ref or reactive in Vue 3's Composition API.
authors:
  - Ben Hong
date: 2021-03-17
lastmod: 2021-03-17
topics:
  - insights
tags:
  - vuejs
  - composition-api
tweet: ""
format: blog
relatedposts:
  - "Building an Event Registration Page with Composition API and Serverless Functions"
seo:
  metatitle: "Choosing Between Ref and Reactive with Vue 3's Composition API"
  metadescription: An opinionated perspective on whether you should use ref or reactive in Vue 3's Composition API.
  ogimage: /img/blog/og-ref-vs-reactive.png
---

When working with Vue 3's Composition API, a common question that often comes up when working with reactive data is: "Should I use ref or reactive?"

## Quick Overview of `ref`

`ref` is the fundamental building block for reactive data in Vue. As a result, it's the prerequisite for understanding what's going on and how things work.

At its simplest, when we want to define data that is reactive and will be watched by Vue, we can do it by importing the helper method and wrapping the desired value in it.

```js
import { ref } from 'vue'

const firstName = ref('Ben')
const currentCount = ref(10)

return {
  firstName,
  currentCount
}
```

While this is a clean way to declare whether or not a variable contains reactive data or not, it comes with a few downsides:

1. Requires people to learn the basics of JavaScript proxies
2. Requires you to unpack the value in some cases but not in others
3. Adds additional bulk to the code

### The need to understand a little bit about JavaScript Proxies

The thing about `ref` is that whenever you want to refer to the value of the reactive data, you need to be aware of the fact that it will utilize JavaScript Proxies to facilitate the reactivity.

In other words, it has some special properties you must be aware of. Specifically, when you want to refer to the value of a `ref`, you must unpack it by calling `.value`.

```js
// Will not give the expected result
const wrongHeroName = computed(() => {
 return firstName + ' ' + currentCount
})

// Need to access values in order to use them properly
const heroName = computed(() => {
  return firstName.value + ' ' + currentCount.value
})
```

### You need to unpack the value in some cases, but not others

This may not seem like a massive inconvenience at first, but it can introduce friction as a learning concept since it's not always clear when it should be used.

For example, while you need to unpack values manually inside of the script block, once it is returned to the template, you no longer need to unwrap it because Vue will do this for you.

```html
<script>
import { ref } from 'vue'

export default {
  setup() {
    const heroName = ref('Taco Launcher')

    return {
      heroName
    }
  }
}
</script>

<template>
  <p>Wrong: {{ heroName.value }}</p>
  <p>Correct: {{ heroName }}</p>
</template>
```

### It can add more bulk to the code

Also, for each additional `ref` that you need to expose to the template, you need to manually specify it inside the returned object at the end of your setup function.

```js
import { ref } from 'vue'

const firstName = ref('Ben')
const currentCount = ref(10)
const isTransformed = ref(false)
const powers = ref([])

return {
  firstName,
  currentCount,
  isTransformed,
  powers
}
```

## Quick Overview of `reactive`

On the other hand, `reactive` as a helper method is much closer to what many Vue developers are already familiar with: the `data` option.

In Options API, we would define our code as the following:

```js
<script>
export default {
  data: () => ({
    firstName: 'Ben',
    currentCount: 10,
  }),
  computed: {
    heroName() {
      return this.firstName + ' ' + this.currentCount
    }
  }
}
</script>
```

With the `reactive` helper method, we can refactor the `data` option into:

```js
<script>
import { ref } from 'vue'

export default {
  setup() {
    const state = reactive({
      firstName: 'Ben',
      currentCount: 10
    })

    return {
      state
    }
  },
  computed: {
    heroName() {
      return this.firstName + ' ' + this.currentCount
    }
  }
}
</script>
```

```html
<template>
  <h1>{{ heroName }}</h1>
  <p>First Name: {{ state.firstName }}</p>
  <p>Current Count: {{ state.currentCount }}</p>
</template>
```

And then, unlike `ref`, we don't have to worry about unpacking any values! You refer to the property as you would expect, without the need to call `.value`. So we can refactor the computed property into the following:

```js
<script>
import { computed, ref } from 'vue'

export default {
  setup() {
    const state = reactive({
      firstName: 'Ben',
      currentCount: 10
    })

    const heroName = computed(() => {
      return state.firstName + ' ' + state.currentCount
    })

    return {
      state,
      heroName
    }
  }
}
</script>
```

And then to top it off, we can utilize a helper method called `toRefs` to minimize the amount of boilerplate code we would ordinarily write with `ref`, while also removing the prefix of `state`!

```js
<script>
import { computed, ref, toRefs } from 'vue'

export default {
  setup() {
    const state = reactive({
      firstName: 'Ben',
      currentCount: 10
    })

    const heroName = computed(() => {
      return state.firstName + ' ' + state.currentCount
    })

    return {
      ...toRefs(state),
      heroName
    }
  }
}
</script>
```

```html
<template>
  <h1>{{ heroName }}</h1>
  <p>First Name: {{ firstName }}</p>
  <p>Current Count: {{ currentCount }}</p>
</template>
```

But like any solution, `reactive` is not without its downside. Because `reactive` is built upon the concept of `ref`, there is a little bit of a circular dependency in that you need to understand `ref` to leverage `reactive` without being too confused.

## Verdict: Use `reactive`

At the end of the day, I recommend using `reactive` as the primary way to manage reactive data in Vue 3's Composition API. By doing so, it allows us to leverage what developers are already familiar with. And to top it off, it also has the benefit of being more intuitive than `ref`, which requires more in-depth JavaScript knowledge to use.

That said, are there still use cases for using `ref`? Absolutely! It's just that when it comes to choosing one to primarily stick to, `reactive` is the way to go.

For additional resources on Vue 3's Composition API, be sure to check out these resources:

- [Free lesson on reactive data with Composition API Jamstack Explorers](https://explorers.netlify.com/learn/launching-with-composition-api/composition-api-reactive-data?utm_campaign=devex-bh&utm_source=twitter&utm_medium=social&utm_content=exploreres-comp-api-reactive-data)
- [Free course on Vue 3's Composition API](https://explorers.netlify.com/learn/launching-with-composition-api?utm_campaign=devex-bh&utm_source=twitter&utm_medium=social&utm_content=explorers-comp-api-mission)
