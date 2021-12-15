---
title: Reactivity in Vue 3
description: >-
  The introduction of Vue 3 will undoubtedly change the way we write and reason
  about Vue moving forward. In light of this imminent change, it’s worth
  examining how we think about state management in Vue to embrace this upcoming
  change. In this post, we’ll dive into the new Composition Functions API and
  take a peek at what’s to come in Vue 3. 
authors:
  - Divya Tagtachian
date: '2020-03-10'
topics:
  - tutorials
tags:
  - Vue
tweet: ''
format: blog
seo:
  metadescription: >-
    See how Vue 3 changes the way we write and reason about Vue moving forward.
    Check out this post that dives into the new Composition Functions API and
    what else is coming in Vue 3.
  metatitle: Vue 3 Reactivity - Learn Composition Functions API
  ogimage: /v3/img/blog/reactivity-in-vue3.jpg
---
If you take even the slightest peek at [the infamous and since merged Function-based Component RFC](https://github.com/vuejs/rfcs/pull/42) that launched a thousand comments, you immediately notice that the new 3.0 syntax is unfamiliar compared to the current 2.x syntax. From a superficial standpoint, it’s hard not to assume that Vue is trying to “*pull an Angular”* with its upcoming release. In the RFC, Vue 2.x is directly contrasted with Vue 3.0 and there are examples of how to migrate from the current syntax to the new one indicating that a 2.x deprecation is imminent. There is even mention in the RFC (*in early versions, this has since been changed*) of separate builds that could potentially split the community in terms of how Vue is used and adopted. While these criticisms are valid and Vue has since accounted for this miscommunication, it’s worth noting that this new syntax posits a shift in how we currently think and reason about Vue. Most notably, it highlights a significant change in how cross component state management and reactivity will work in future versions of Vue.

In addition to changes in the underlying system powering reactivity (from getters/setters to proxies), the new API introduces syntax to access Vue’s reactivity system so that it is now independent of a component instance. Beside making change detection more explicit, it also introduces a significant performance boost since you no longer have to create component instances to access Vue’s reactivity system.

## TLDR; Function API

In previous versions of Vue, encapsulating state management related logic required using patterns such as Higher Order Components, Render Props, and/or mixins. These patterns, while nifty, brought with them added complexity and performance issues. For one, extrapolating core functionality necessitates creating extra stateful component instances thereby adding an added layer of complexity to otherwise straightforward use cases.

In Vue 3, we now have the ability to encapsulate and reuse logic across multiple components without the need for abstracted patterns like Mixins and Higher Order Components (HOCs). This makes organizing state management in Vue more declarative—a huge win for the framework overall.

### Reactivity Changes
With the change to how encapsulated state management works, comes an inevitable modification in the way we handle data properties in Vue. Instead of setting data directly via `this.[dataPropertyName]`, data properties are declared via reactive state; in Vue 3 this is represented by `ref` and `reactive`. 

Declaring reactive state is handy because they allow for a way to pass mutable and reactive references *regardless of their type.* This way, state can be tracked and remain encapsulated at the same time. Let’s break this down, so the significance of this change is clearer.

Say you had some logic that calculates the position of a map marker over a specific time period. This marker updates every time a new position is calculated. An example for such a case is to update a marathon runner’s position in real time or at least as they move through a route over time. To get this to work in Vue 2, you would have to use a pattern like [render props](https://vuejsdevelopers.com/2018/01/15/vue-js-render-props/) to encapsulate the calculation functionality without *mucking up* the view logic. This pattern is often clunky and non intuitive, and can introduce unnecessary hurdles for developers newer to Vue.

In Vue 3, with the help of composition functions (*more on this later!*) and the value wrapper, we can easily encapsulate the map marker calculation logic while also ensuring that the state is reliably reactive. 

In the code below, we are pulling the point position value from our `useWaypoint` function. This value is updated with every new animation frame, within the `useWaypoint` function itself. Because value wrappers take care of the reactivity of data property within our composition function, we can simply watch the `waypointVal` value and update our map appropriately. 

```js
<script>
import useWaypoint from "../functions/useWaypoint.js";

export default {
  name: "PointLayer",
  props: {
    map: Object,
    data: Object
  },
  setup(props) {
    //logic in useWaypoint mutates the exposed val
    const waypointVal = useWaypoint(props.data, 6) // run this route in 6 seconds
    watch(() => waypointVal.value, val => {
      if (props.map.getSource('point') !== undefined) {
        props.map.getSource('point').setData(val)
      }
    })
  },
  render() {
    return null;
  }
}
</script>
```

### Enter Composition Functions
Composition functions is a new way of programming reactivity in Vue 3. It provides a clean, flexible way to compose logic inside and between components. With composition functions, logic related to different pieces of functionality can be easily abstracted away and the relevant reactive state can be returned and used as needed. Let’s return to our previously mentioned example of calculating a map marker position and animating it in real time. 

To get a better sense of how state is being handled in our function, we’ll gloss over the implementation details of how the map position is calculated and focus on how we’re managing state—[*Feel free to check out the code if you’d like to dig into this detail*](https://github.com/shortdiv/vue-three/blob/master/src/functions/useWaypoint.js)*.* Because our function returns a map marker position, we’ll have to instantiate the starting point of the map marker by setting it to the first coordinate in the feature array. We’ll do this by declaring a reactive state so our point position is reactive. We’ll then return the point position so we can access it outside of this function.  

```js
export default function useWaypoint(route) {
  const waypointVal = reactive({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: route.geometry.coordinates[0] // set starting point
    }
  })
  return {
    waypointVal
  }
}
```

The next step is to instantiate our request animation frame instance and set the clock so we can calculate the point position as the clock runs. For this case, we’ll use the `reactive` property, which is equivalent to Vue.observable in Vue 2.x. I’m choosing to use `reactive` instead of `ref` mainly because updating the requestAnimationFrame instance (raf) and the clock (timestamp) is fairly trivial and they don’t need to be reactive outside of this function. Unlike `ref`, accessing a property inside `reactive` can be done directly via the object it is contained within. So if we created our function logic state and called it `waypointState`, we can access our timestamp by doing `waypointState.timestamp`. 

```js
const waypointState = reactive({
  timestamp: performance.now(), // set the clock
  raf: null // set a pointer to our raf instance so we can cancel it
});

console.log(waypointState.timestamp)
console.log(waypointState.raf)
```

Similarly, we can update our `waypointState` state object by simply reassigning it. In the `animateMarker` function below, we’re re-setting our raf value to a new requestAnimationFrame instance every time we want our `animateMarker` to be re-run. This allows for the point position to be recalculated assuming that the marker has not yet reached its final destination.

```js
var turf = require("turf");

export default function useWaypoint(route, timeperiod) {
  const waypointVal = reactive({
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: route.geometry.coordinates[0] // set starting point
    }
  })
  const from = turf.point(route.geometry.coordinates[0]);
  const to = turf.point(route.geometry.coordinates[route.geometry.coordinates.length - 1]);
  const distance = turf.distance(from, to) * 1000; // distance in m
  const movePoint = () => {
    const waypointState = reactive({
      timestamp: performance.now(), // set the clock
      raf: null // set a pointer to our raf instance so we can cancel it
    });
    const animateMarker = () => {
      let time = performance.now(); // set 2nd clock to get time lapsed from 1st clock
      const duration = timeperiod * 1000; // set duration the func will run for
      let speed = distance / duration; // set speed in m/ms
      const path = turf.lineString(route.geometry.coordinates); 
      const timeElapsed = time - waypointState.timestamp; //get time lapsed
      if (timeElapsed * speed >= distance) { // check if race is finished
        cancelAnimationFrame(waypointState.raf); // cancel raf
      } else {
        var distTravelled = timeElapsed * speed; // get dist travelled 
        waypointVal.value = turf.along(path, distTravelled, "meters"); // get position
        waypointState.raf = requestAnimationFrame(animateMarker.bind(this)); //update raf
      }
    };
    waypointState.raf = requestAnimationFrame(animateMarker.bind(this)); // set raf
  };
  movePoint();
  return waypointVal;
}
```

The beauty of encapsulating our code this way is that our `useWayPoint` code is now reusable and we can re-use it to animate another marker within the same component without worrying about muddling up state. Behold this thing of beauty. 


![Moving map markers](https://media.giphy.com/media/el6zkATUwaqac8mt3c/giphy.gif)

## Vue 3 and Beyond

There are lots of speculations as to how the composition API will impact Vue 2.x features and its ecosystem—particularly whether Vuex is necessary (*[Check out Vue core team member, Natalia Tepluhina's talk on that](https://speakerdeck.com/ntepluhina/you-might-not-need-vuex)*). Regardless, the introduction of Vue 3 will undoubtedly change the way we write and reason about Vue moving forward. In light of this imminent change, it’s worth re-examining how we think about state management in Vue and embrace the change. To check out the code mentioned in this post and to deploy your own version of it, check out [the GitHub repo here](https://github.com/shortdiv/vue-three/)
