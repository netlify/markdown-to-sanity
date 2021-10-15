---
title: 'Zero Config, yet Technology Agnostic: How Netlify Dev Detectors Work'
description: >-
  One of the design goals for Netlify Dev is to be technology agnostic while
  still offering a magical, universal netlify dev command that “just works”. We
  accomplish this by using project detectors. Find out how!
authors:
  - swyx
date: '2019-04-24'
topics:
  - tutorials
tags:
  - Netlify Dev
  - Tools
  - Products
tweet: >-
  One of the design goals for Netlify Dev is to be technology agnostic while
  still offering a magical, universal netlify dev command that “just works”. We
  accomplish this by using project detectors. Find out how!
format: blog
---
One of the design goals for Netlify Dev is to be technology agnostic while still offering a magical, universal `netlify dev` command that “just works”. We accomplish this by using [project detectors](https://github.com/netlify/netlify-dev-plugin#project-detection). This post walks through how we added support for the exciting new [Svelte compiler](https://svelte.dev/) in Netlify Dev and hopefully demystifies how detectors work as well as how you, too, can contribute a detector for your project.


## Svelte is Awesome

Svelte 3 was released yesterday with a fantastic, [Hooks](https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/)-inspired reactive API. I can’t do it better justice and will here just refer you to [the launch post](https://svelte.dev/blog/svelte-3-rethinking-reactivity) and especially [the introductory talk](https://www.youtube.com/watch?v=AdNJ3fydeao&).

I think Svelte (and its associated framework, [Sapper](https://sapper.svelte.technology/)) is an important step forward in frontend technology. As a result, I would love to enable Svelte users to supercharge their current workflows with the new netlify dev cli we recently launched at [JAMstack Conf](https://jamstackconf.com) NYC. (If you missed it, [here is the introduction to Netlify Dev](https://youtu.be/RL_gtVZ_79Q?t=812).) 

To scaffold a new Svelte project, follow their instructions:

```bash
npx degit sveltejs/template my-svelte-project
cd my-svelte-project
yarn # or npm install
```

And then you can use their assumed script to run the dev server:

```bash
yarn dev # or npm run dev
```

This will show you a nice “Hello World!” project you can view at http://localhost:5000/. 

```
                    ┌────────────┐      ┌────────────┐
                    │   Svelte   │      │  Browser   │
                    │            │      │            │
                    localhost:5000 ───▶ localhost:5000
```

## How Netlify Dev works (using `netlify.toml [dev] block`)

In order to enable local emulation of Netlify’s [edge logic](https://github.com/netlify/netlify-dev-plugin/#redirects), [serverless](https://github.com/netlify/netlify-dev-plugin/#netlify-functions) [functions](https://github.com/netlify/netlify-dev-plugin/#netlify-functions), [build environment variables, and addon ecosystem](https://github.com/netlify/netlify-dev-plugin/#using-add-ons), we need to be able to modify what the user sees in the browser. By default, dev servers of the various frameworks run on different ports and have varying configurations. Svelte’s for example runs on `localhost:5000` and uses specific conventions unique to that framework. For Netlify dev to remain technology agnostic, we therefore should not make assumptions or modifications that are specific to one framework.

The solution for this is to run a proxy server!

```
                            ┌───────────────┐                     
                            │    Svelte     │                     
                            │               │                     
                            └localhost:5000─┘                     
                                    │                             
                                    │                             
       ┌──────────┐                 │                             
       │  Addons  ├────┐            ▼                             
       └──────────┘    │    ┌localhost:5000─┐     ┌──────────────┐
       ┌──────────┐    └───▶│               │     │              │
       │functions ├────────▶│    Netlify    │     │   Browser    │
       └──────────┘    ┌───▶│      Dev      │     │              │
       ┌──────────┐    │    │               │     │              │
       │_redirects│────┘    └──localhost:8888───▶ localhost:8888─┘
       └──────────┘                                               
```

We need to tell Netlify Dev to run `yarn dev`  and then listen to port 5000 (we’ll call this the `proxyPort`), which is where Svelte’s dev server is publishing and reloading to. Assuming there is no built-in detector for Svelte, we could do so by declaring this in the `netlify.toml` `[dev]` block:

```toml
# netlify.toml dev block example
[dev]
  command="yarn dev"
  port=5000
```

Optionally, if we wanted to use Netlify's [`_redirects` file](https://www.netlify.com/docs/redirects/) to do redirects, we’d observe that Svelte assumes static files are placed in the `public` folder, so we’d also need to tell Netlify Dev where that is:

```toml
# netlify.toml dev block example with _redirect file
[dev]
  command="yarn dev"
  port=5000
  publish="public" # this is new
```

Now when you run `netlify dev` (or, for the lazy, `ntl dev`), it runs the start script (`dev` ), listens to the dev server, picks a free port (for example, 8888), and tells you about it:

```bash
   ┌──────────────────────────────────────────────────┐
   │                                                  │
   │   ◈ Server now ready on http://localhost:8888    │
   │                                                  │
   └──────────────────────────────────────────────────┘
```

And that is the local URL/port you interact with to have [our entire platform, right on your laptop](https://www.netlify.com/blog/2019/04/09/netlify-dev--our-entire-platform-right-on-your-laptop/).


## How Netlify Dev works (with project detectors)

That was a manual process with a few finicky bits of config to get right. What if it were zero config? That’s what [project detectors](https://github.com/netlify/netlify-dev-plugin#project-detection) can do to pave the way for recognized projects. We’ve already built in support for most of [the top static site generators](https://www.staticgen.com/) in the world, but we could always use more contributions and open source help with this!

[Netlify Dev Project Detectors are documented in a README](https://github.com/netlify/netlify-dev-plugin/tree/master/src/detectors) inside the folder itself. Because of the dominance of npm for JavaScript projects, we’ve also included [a few small utilities](https://github.com/netlify/netlify-dev-plugin/blob/master/src/detectors/utils/jsdetect.js) you can use.

At a high level though, detectors serve two roles:


- Determine if the project is or is not a match for this detector, by [checking for existence of required files and dependencies](https://github.com/netlify/netlify-dev-plugin/blob/master/src/detectors/cra.js#L12-L15) and any other specific indicators (the more specific the better). **If it is not a match, return** `false`**.**
- If it is a match, return [requisite configuration](https://github.com/netlify/netlify-dev-plugin/blob/master/src/detectors/cra.js#L29-L38) for Netlify Dev to run accordingly. The object shape is [documented in the README](https://github.com/netlify/netlify-dev-plugin/tree/master/src/detectors#writing-a-detector) and plenty of examples exist for contributors to reference (we may simplify the object in future as we figure out what assumptions we can abstract away).

Let’s write a Svelte detector!

```js
    // svelte.js
    const {
      hasRequiredDeps,
      hasRequiredFiles,
      getYarnOrNPMCommand,
      scanScripts
    } = require("./utils/jsdetect");
    module.exports = function() {
      // REQUIRED FILES
      if (!hasRequiredFiles(["package.json"])) return false;
      // REQUIRED DEPS
      if (!hasRequiredDeps(["svelte", "sirv-cli"])) return false;
      // although sirv-cli isn't strictly required...
      // it is part of the assumptions we make for this detector
      /** everything below now assumes that we are within Svelte's default template */
      const possibleArgsArrs = scanScripts({
        preferredScriptsArr: ["dev"], // we can add more if common practice requires it
        preferredCommand: "sirv public --dev"
      });
      return {
        type: "svelte-sirv-cli",
        command: getYarnOrNPMCommand(),
        port: 8888,
        proxyPort: 5000, // sirv's assumed proxyPort
        env: { ...process.env },
        possibleArgsArrs,
        urlRegexp: new RegExp(`(http://)([^:]+:)${5000}(/)?`, "g"),
        dist: "public" // where we might place a _redirect file
      };
    };
```

PR that file into [the correct folder](https://github.com/netlify/netlify-dev-plugin/tree/master/src/detectors) and Netlify Dev will take it from there!

If you are able, [follow these instructions from the Netlify Dev README](https://github.com/netlify/netlify-dev-plugin/#contributinglocal-development) to run local versions of Netlify CLI and `netlify-dev-plugin` and test it for yourself first by running `netlify dev` on your Svelte project.

Answers to some common questions:

- If *multiple* detectors match (this is rare!) we’ll [prompt the user](https://github.com/netlify/netlify-dev-plugin/blob/bab05e34f2b7771227ccbf04c888e684c9f6212c/src/detect-server.js#L50) to pick one.
- We split a simple script like `npm run dev`  or `sirv public --dev` into a `command` (in the JS world, this is based on whether you use `yarn` or `npm`, but in other languages this can be a different base command) and an array of arguments (`ArgsArrs`) because we feed this directly into `execa` to [allow Netlify Dev to programmatically run your start script](https://github.com/netlify/netlify-dev-plugin/blob/2ccb67032d2d3fd884321b7bf97079e0b8daa1af/src/commands/dev/index.js#L160).
- If you’re *using* Netlify Dev (instead of writing a detector), and you just have a special setup that our detectors don’t allow for, you can always override it with a `netlify.toml [dev]` config (see above).
## Now, it’s your turn

We’ve hopefully demystified how Netlify Dev works and how you can contribute. If you’d like practice, we’re welcoming contributions for Svelte (*ahem, we already wrote the code for you…*) and Sapper detectors, as well as your favorite projects of choice! ([**@smakinson**](https://github.com/smakinson) [recently contributed one for Quasar](https://github.com/netlify/netlify-dev-plugin/pull/153)!) 


## Just the Beginning

We definitely don’t see this as the end state of detectors:

- **Better logic:** Right now we only perform detection based on simple exact match heuristics as well as (for JS projects) [preferred scripts](https://github.com/netlify/netlify-dev-plugin/blob/master/src/detectors/utils/jsdetect.js#L84). We can surely do better. In particular we could potentially intelligently build a tree of scripts.
- **Second-run persistence:** Since project type rarely changes midway, detectors should probably be a bootstrapping tool, not a primary mechanism for `netlify dev`. We should offer to write the identified project to `netlify.toml`. This has added performance from not having to run through all detectors every time we boot up.
- **Parallelization**: When we have many detectors.
- **Function builder detectors:** We’ve generalized this concept of detection to ensure we remain technology agnostic for function builders as well. For example, for people who want to use TypeScript to write their serverless functions and therefore require a build step, they can use `netlify-lambda` as a “function builder”. The READMEs on both [Netlify Dev](https://github.com/netlify/netlify-dev-plugin/#function-builders-function-builder-detection-and-relationship-with-netlify-lambda) and [netlify-lambda](https://github.com/netlify/netlify-lambda#netlify-lambda) explain how this works and when it can be used. Right now only `netlify-lambda` is recognized, but more builders are possible.

Finally: We will be splitting out detectors into a separate, reusable, independently testable repo soon, and think it could be useful for a number of different contexts not specific to Netlify. For example, what if every CLI tool had project context-sensitive defaults like Netlify Dev does? What if every build environment had a common language for understanding build systems? What else aren’t we thinking about? Let’s build the future together. (Or better still, if you'd like to help build this and other products out fulltime, [join us!](https://www.netlify.com/careers/))

