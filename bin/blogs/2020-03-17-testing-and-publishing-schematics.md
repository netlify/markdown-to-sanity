---
title: Testing and Publishing Schematics
description: A guide to help you test and publish your Angular schematics.
authors:
  - Tara Z. Manicsic
date: '2020-03-19'
topics:
  - tutorials
tags:
  - Angular
tweet: ''
format: blog
seo:
  metatitle: How To Use Netlify's Schematics for Angular - Part 3 - Testing and Publishing Schematics
  metadescription: Explore this guide to learn how to add Netlify Schematics to your Angular project. In this third part of this series, learn to easily test and publish the schematics to npm.
  ogimage: /v3/img/blog/screen-shot-2020-03-15-at-2.37.01-pm.png
---
Welcome to the third part of our series about the Netlify schematics we created for your Angular projects. I wanted to walk you through the creation process in hopes of helping you fulfill any schematics dreams you may have :). If this is the first post you're seeing you may want to check out the other two:

- Part 1 – [Creating Netlify Schematics](https://www.netlify.com/blog/2020/03/15/creating-netlifys-schematics-for-angular/?utm_source=blog&utm_medium=test-and-publish_tzm&utm_campaign=devex): Where we go over what the Netlify schematics are and how to add them to your Angular project.

- Part 2 – [Creating and Editing Files](https://www.netlify.com/blog/2020/03/18/creating-and-editing-files-with-angular-schematics/?utm_source=blog&utm_medium=test-and-publish_tzm&utm_campaign=devex): Which walks through, generating a blank schematic with the CLI tool and making an `ng add` schematic that will create files using user input (via `x-prompt`) and edit _or_ create the project's `.gitignore` file.

Here and now we'll be looking into testing and publishing the schematics that we build out in Part 2. Specifically, here is our game plan:

1. Review the initial, generated test file.
2. Add testing for file creation.
3. Add testing for the file editing.
4. Build and run the schematics.
5. Publish the schematics to npm to share it with the 🌏 world!

Away we go!

## Adding Tests

Obviously we need testing. I mean who would ever not test things? Testing is the best! [Amirite](https://thumbs.gfycat.com/UnrealisticRashApe-size_restricted.gif)? In `src/netlify-schematics-index_spec.ts` we will go through the `ng-add` functionalities we added in the [previous post in the series](https://www.netlify.com/blog/2020/03/18/creating-and-editing-files-with-angular-schematics/?utm_source=blog&utm_medium=create-netlify-schematics_tzm&utm_campaign=devex) and make sure the files are created or amended with the correct information.

### The Starter

The initial test file from the [schematics CLI](https://www.npmjs.com/package/@angular-devkit/schematics-cli)-generated blank schematic has all the setup you need. It imports the `Tree`, the schematics testing library, `SchematicTestRunner`, and `path`. It uses path to access the `collection.json` file and names it `collectionPath`. Then it starts a `describe` function to start tests.

Initially it's testing `works` using `runner` which is new instance of the `SchematicTestRunner` & our `collections.json`. It also creates `tree` which uses the runner to invoke `runSchematic` passing in the schematic name, an empty options object, and the source `Tree`.

```js
import { Tree } from "@angular-devkit/schematics";
import { SchematicTestRunner } from "@angular-devkit/schematics/testing";
import * as path from "path";

const collectionPath = path.join(__dirname, "../collection.json");

describe("netlify-schematics", () => {
  it("works", () => {
    const runner = new SchematicTestRunner("schematics", collectionPath);
    const tree = runner.runSchematic("netlify-schematics", {}, Tree.empty());

    expect(tree.files).toEqual([]);
  });
});
```

### Testing the File Creation

In [the first schematic post](https://www.netlify.com/blog/2020/03/18/creating-and-editing-files-with-angular-schematics/?utm_source=blog&utm_medium=create-netlify-schematics_tzm&utm_campaign=devex) we added some files. Let's make sure that actually happened. To do that we can keep the `runner` the same at the top of the `describe` block. Then we'll make an `it` block for "creates a netlify config file". Three variables will be used in this one:

- `options`– which holds `publish` and `command`
- `tree`– here we just change the default to the schematic name "ng-add" and the empty object to `options`
- `netlifyConfig`– this is where we'll pass the file we want to test using `tree.readContent()`

```js
...
describe("ng-add", () => {
  const runner = new SchematicTestRunner("schematics", collectionPath);

  it("creates netlify config file", () => {
    const options = {
      publish: "publish",
      command: "command"
    };
    const tree = runner.runSchematic("ng-add", options, Tree.empty());
    const netlifyConfig = tree.readContent("/netlify.toml");
...
```

Now, with that all in place we can use `expect()` to make sure the file contains the publish and command information.

```js
expect(netlifyConfig).toContain('publish = "publish"');
expect(netlifyConfig).toContain('command = "command"');
```

The second file can be checked the same way. All we need to do is change up the options, the file we're reading, and the options we expect the file to contain.

[🐙 Check out the file here to see the tests for the private config file.](https://github.com/tzmanics/netlify-schematics/blob/591409f5d989222611f761a27b0b4d250abe14cf/src/netlify-schematics/index_spec.ts#L22)

### Testing the File Additions

Currently, all we have left to test is the `.gitignore` file that we added the private config file to. Since we're only testing to see if the file name was added to the `.gitignore` file we don't need to pass any options. Here's what we have:

```js
it("adds private config to gitignore", () => {
  const tree = runner.runSchematic("ng-add", {}, Tree.empty());
  const gitignore = tree.readContent("/.gitignore");

  expect(gitignore).toContain("netlifyConfig.json");
});
```

To run these tests we need to use the npm test script.

```bash
npm run test
```

Pop that in the command line and what do we get? Basically, well, no failures. If only it were that easy to have no failures in [life](https://media2.giphy.com/media/Oc4SL1hIIgk0M/giphy.gif?cid=790b7611b85bb9c17463d1685e2271cca0d9b431514f12fd&rid=giphy.gif).

![screenshot of the test results](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1584297639/Screen_Shot_2020-03-15_at_2.37.01_PM_kxdagk.jpg)

Success! I'm very proud of us, we now have tested schematics.

[🐙 Here is the link to the complete test file.](https://github.com/tzmanics/netlify-schematics/blob/master/src/netlify-schematics/index_spec.ts#L22)

## Running & Publishing Your Schematic

We have the functionality, we have the testing, so it should work, right? Let's hope so. To find out we'll first need to build out our schematic project using the npm build script.

```bash
npm run build
```

### Using the Schematics CLI to Run `ng-add`

Once the schematics are built we can try running them. There are a few ways to run your schematic, the default is to run in dry mode. The dry mode runs through all the schematic actions, like prompting the user and creating files, but only does this on the virtual tree, not changing your actual project. This way is great for seeing that the prompts are correct and what playing through the developer experience but we want to see what the files look like. So, for this run we'll turn the dry run option off.

```bash
schematics .:ng-add --dry-run=false
```

> We could have also used `--debug=false` instead of the dry run flag. Some people like more because it saves them keystrokes ⌨️👍.

In this command we have called on the schematics CLI and passed in a reference to the schematic `ng-add` in the current directly by using `.:`. Then we set the `dry-run` flag to `false`.

Here is the output for the [Netlify schematics](https://github.com/tzmanics/netlify-schematics):

![ng add netlify-schematics output](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1584591508/Screen_Shot_2020-03-19_at_12.16.51_AM_gztmit.jpg)

If we take a look at our directory we can see that our new files are listed in our project's root directory and the `netlifyConfig.json` filename has been added to our `.gitignore` file.

![list of files and the .gitignore file](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1584590747/Screen_Shot_2020-03-19_at_12.01.50_AM_o5z8l7.jpg)

### Publish Our Schematic

It works the way we expected! Let's virtually shout it from the rooftops aka publish it on npm. This way we can all use your amazing schematics for our projects!

You will need an npm account to do this, [you can set it up on their site](https://www.npmjs.com/signup). When your account is set up you can just login and publish from your schematics directory with two commands:

```bash
npm login
npm publish
```

![npm output when running npm publish](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1584310391/Screen_Shot_2020-03-15_at_6.10.19_PM_ivspse.jpg)

Now whenever you have an update, you can [figure out the correct semver version](https://semver.org/) and just run `npm version [major, minor, patch`]. That's it! The world can now benefit from your hard work. Thank you!

## Our Journey's End

I'm so glad you came along to create some schematics with me. Don't you feel just a little closer, you know, in the grand _schema_ of things? 😋 I hope this has helped you on your schematics path. If you have any questions or are interested in what's happening next with the Netlify schematics make sure to join is in the [Netlify Community](https://community.netlify.com/?utm_source=blog&utm_medium=test-and-publish_tzm&utm_campaign=devex) or stay tuned to our [blog](https://www.netlify.com/blog?utm_source=blog&utm_medium=test-and-publish_tzm&utm_campaign=devex). I can't wait to see what you create! Happy coding! 👩🏻‍💻

## Resources for the Road

- [What's Angular in the JAMstack? It Sounds Delicious!](https://www.netlify.com/blog/2019/10/30/whats-angular-in-the-jamstack-it-sounds-delicious/??utm_source=blog&utm_medium=create-editing-files_tzm&utm_campaign=devex)
- Part 1: [Creating Netlify's Schematics for Angular](https://www.netlify.com/blog/2020/03/15/creating-netlifys-schematics-for-angular/?utm_source=blog&utm_medium=create-editing-files_tzm&utm_campaign=devex)
- Part 2: [Creating and Editing Files](https://www.netlify.com/blog/2020/03/18/creating-and-editing-files-with-angular-schematics/?utm_source=blog&utm_medium=test-and-publish_tzm&utm_campaign=devex)
- [Authoring schematics Docs](https://angular.io/guide/schematics-authoring)
- [Building an Angular Jamstack App with Scully](https://www.netlify.com/blog/2019/12/17/building-an-angular-jamstack-app-with-scully/?utm_source=blog&utm_medium=create-editing-files_tzm&utm_campaign=devex)
