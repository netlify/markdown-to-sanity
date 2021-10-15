---
title: Creating and Editing Files with Angular Schematics
description: Using Netlify Schematics to create and edit files for your Angular projects.
authors:
  - Tara Z. Manicsic
date: '2020-03-18'
topics:
  - tutorials
tags:
  - Angular
tweet: ''
format: blog
seo:
  metatitle: >-
    How To Use Netlify's Schematics for Angular - Part 2 - Creating and Editing
    Files
  metadescription: >-
    Explore this guide to learn how to add Netlify Schematics to your Angular
    project. In part two of a three part series, learn how to create and edit
    files for your Angular projects.
  ogimage: /img/blog/angular-netlify-schematics-prompt-screenshot.jpg
---
Welcome to the journey of creating Netlify schematics for Angular projects. If this is your first post, I'm very happy to have you :). Also, you can find more information about the Netlify schematics project in the other posts in this series:

* Part 1: [Creating Netlify Schematics](https://www.netlify.com/blog/2020/03/15/creating-netlifys-schematics-for-angular/?utm_source=blog&utm_medium=create-editing-files_tzm&utm_campaign=devex): Where we go over what the Netlify schematics are and how to add them to your Angular project.
* Part 3: [Testing and Publishing Angular Schematics](https://www.netlify.com/blog/2020/03/19/testing-and-publishing-schematics/?utm_source=blog&utm_medium=create-editing_tzm&utm_campaign=devex): Where, wouldn't you know it, we talk about how we tested and published the schematics we built.

In this post that you're looking at right now, part two of this series, we are going to do a few things:

1. generate a blank schematic using the schematic CLI
2. add `ng-add` functionality
3. build out a schema for configuration information
4. create two configuration files
5. edit or create a `.gitignore` file

Let's go!

## Generating a Schematic

The [Schematics CLI tool](https://www.npmjs.com/package/@angular-devkit/schematics-cli) will help us create a schematics skeleton, manage, and test the schematics. To create a basic schematic skeleton and name it we'll run this command:

```bash
schematics blank --name=my-schematic
```

That schematics command will create this file structure:

```
|- .gitignore
|- .npmignore
|- README.md
|- package.json
|- package-lock.json
|- tsconfig.json
|- src
  |- collections.json
  |- <schematic-name>
    |- index.ts
    |- index_spec.ts
```

*🐙 Go to [this commit](https://github.com/tzmanics/netlify-schematics/commit/fcc55749d3a7bb2d36b49080568e060af653b0bd) on the Netlify schematics repo to check out what's in these files.*

## Setting Up `ng add` Functionality

The `collection.json` file has all the information about the schematic. It first points to a schema setup that lives inside the project. Then it has a `schematics` object where we'll add the different schematics we create. The schematics CLI skeleton project will list the schematic name (if given one), a default description, and a factory that will point to a function inside the project's `index.ts` file.

For this project I want to utilize the `ng add` functionality so the user will be able to write `ng add netlify-schematics` to install and run these schematics in their project. To do this I renamed the schematic from the project name to `ng-add` like so:

```json
{
  "$schema": "../node_modules/@angular-devkit/schematics/collection-schema.json",
  "schematics": {
    "ng-add": {
      "description": "An ✨ awesome Netlify addition to your 💯 NG project.",
      "factory": "./netlify-schematics/index#netlifySchematics"
    }
  }
}
```

🐙 *You can check out the changes to the `collection.json` file in [this commit](https://github.com/tzmanics/netlify-schematics/commit/f11f5a7d0d65deb335ead1afbe84d27465b3df85).*

## Making the Schema

Since we know what information we need to gather from the user in order to create the configuration files, we can create a schema file to hold those variables. To break it down here are the two files we are going to make and the information we need in each:

* `netlify.toml`– is the [Netlify configuration file](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=blog&utm_medium=create-editing-files_tzm&utm_campaign=devex) that will need to include the [build command and the path to the built project](https://docs.netlify.com/configure-builds/file-based-configuration/#build-settings?utm_source=blog&utm_medium=create-editing-files_tzm&utm_campaign=devex).
* `netlifyConfig.json`– is a file that will hold the user's Netlify information including their API ID, Personal Access Token, and project name.

The schema file is where we can define variables or enumerated data types using the TypeScript interface. This file will live inside the schematics directory and be named `schema.json` (you can name it whatever you like as long as you reference it correctly in your [`collection.json` file](https://github.com/tzmanics/netlify-schematics/blob/51355d86ed22cfeaae7f221a3165e9bf9be709f5/src/collection.json#L7)). So, in the Netlify schematics project the path is `src/netlify-schematics/schema.json`.

Here's a snippet of the netlify-schematics schema (you can check out the whole file [here](https://github.com/tzmanics/netlify-schematics/blob/master/src/netlify-schematics/schema.json):

```json
{
  "$schema": "http://json-schema.org/schema",
  "id": "NetlifySchematicsNgAdd",
  "title": "ng add schematic",
  "type": "object",
  "description": "Creates Netlify config files and edits the gitignore file 🔒",
  "properties": {
    "command": {
      "type": "string",
      "description": "Default build command.",
      "x-prompt": "What is 🧱 your project's build command? (maybe `ng build --prod`)"
    },
    "publish": {
      "type": "string",
      "description": "The project directory.",
      "x-prompt": "What 🗂 directory holds you built project? (maybe `dist/project-name`)"
    },
    ...
  }
}
```

Let's break each of part of this down.

* [`$schema`](https://json-schema.org/understanding-json-schema/reference/schema.html) – this keyword declares that this JSON is a schematic and declares the JSON schema format this schema is written against.
* `id` – an identifying name.
* `title` – a human-readable description.
* `type` – the form in which the properties will be delivered, in this case my properties are an object (this is common).
* `description` – another descriptor for more details of what this code does.

### `properties`

This `properties` object is going to get its own section because it needs its own set of bullets 😁. This is an object defining the available options for the schematic.

* `type` – is the [data type](https://www.typescriptlang.org/docs/handbook/basic-types.html) of this value.
* `description` – describes what this property is or is used for.
* `x-prompt` – this is where user interaction comes into play, you can learn more [in the docs](https://angular.io/guide/schematics-authoring#schematic-prompts) but basically, for this schematic, we're going to use the short form and just ask the user the question listed here and use their answer as this properties value.

Here is a screen capture to show you what the prompts will look like: 

![prompts output](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1584591508/Screen_Shot_2020-03-19_at_12.16.51_AM_gztmit.jpg)

## Creating a New File

With all the user information we need we can now create the files to hold that information. Inside of the `src/<schematic-name>/index.ts` file is where we do the tree manipulation to edit the project that runs these schematics.

To recap, for the v1 of this schematic we'll add a [Netlify config file](https://docs.netlify.com/configure-builds/file-based-configuration/?utm_source=blog&utm_medium=netlify-schematics-v1_tzm&utm_campaign=devex), `netlify.toml`, and a file that will contain more sensitive project and account information, `netlifyConfg.json`. Since we don't want that sensitive data to see the light of day we'll also add it to the [`.gitignore`](https://git-scm.com/docs/gitignore) file if it exists or create a `.gitignore` file listing the `netlifyConfig.json` file.

At the top of the file, `options` is already passed in from when we generated this schematic. It is referencing our schema thanks to `SchematicContext`. Each schematic runs in a context which is an object that provides access to utility functions and metadata, here, that's `SchematicContext`.

```js
import { Rule, SchematicContext, Tree } from "@angular-devkit/schematics";

export function netlifySchematics(options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
  ...
```

The next step is to create variables that will hold the data for each file. This will make the file creation process look much cleaner.

```js
const netlifyConfigData = `[build]\n  publish = "${options.publish}"\n  command = "${options.command}"`;
const privateNetlifyConfigData = {
  apiId: options.apiId,
  accessToken: options.accessToken,
  projectName: options.projectName
};
```

For the file creations we'll be using `tree.create()` which transforms the existing tree into a tree that now has that file.

```js
tree.create("/netlify.toml", netlifyConfigData);
tree.create(
  "/netlifyConfig.json",
  JSON.stringify(privateNetlifyConfigData, null, 2)
);
```

Inside `tree.create()` we pass two parameters: a string filename and the contents we want in the file. For the first config file we just pass the variable we created (`netlifyConfigData`) and for the second we pass the [stringified](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) version of `privateNetlifyConfigData`.

[🐙 You can check out the full `index.ts` file for netlify-schematics here](https://github.com/tzmanics/netlify-schematics/blob/master/src/netlify-schematics/index.ts).

## Checking And Editing A File

We want to add the file with the sensitive information to the project's `.gitigore` file so it won't be pushed up to the user's git repository in case it's public. First, we'll check if the `.gitignore` file is inside the users's tree using the `tree.exist()` function, passing in the file name. If it doesn't, we immediately make one with the `netlifyConfig.json` file as the content. Then we return the tree since we're done changing things with this schematic.

```js
if (!tree.exists("/.gitignore")) {
  tree.create("/.gitignore", "netlifyConfig.json");
  return tree;
}
```

If it does exist we create a variable called `gitIgnoreBuffer` and assign the contents of the `.gitignore` file. To do this we'll use the `tree.read()` function passing in the file name (like we did with `tree.exist`). If the buffer isn't empty we'll make yet another variable called `newGitIgnore`. This variable will be assigned to the a stringified version of `gitIgnoreBuffer`, a new line, plus the name of the file we want to start ignoring, `netlifyConfig.json`. The last step of this process is to use `tree.overwrite()` passing in the file we're overwriting, `.gitignore`, and what we're overwriting with, `newGitIgnore`. Now that we're done with that we can `return tree` since we have nothing left to change.

That was a lot of words! Here's what the code looks like:

```js
let gitIgnoreBuffer = tree.read("/.gitignore");
if (gitIgnoreBuffer != null) {
  let newGitIgnore = `${gitIgnoreBuffer.toString()}\nnetlifyConfig.json`;
  tree.overwrite("/.gitignore", newGitIgnore);
}
return tree;
```

[🐙 Here's a link to the `index.ts` file in full.](https://github.com/tzmanics/netlify-schematics/blob/master/src/netlify-schematics/index.ts)

### Function Recap

That was a lot of functions so I just want to write them here for my own future reference. Oh, I mean, *obvioulsy* you're welcome to them too 😘.

* `tree.create("filename", content)`: to create a new file in the tree
* `tree.exists("filename")`: check if a file exists
* `tree.read("filename")`: read the contents of a file
* `tree.overwrite("filename", "new content")`: change the contents of a file with the provided content

## Try It Out

To see how this works we first need to build out the project by running the command:

```bash
ng run build
```

Once it's built we can use the schematics CLI to walk through how the schematic works.

```bash
schematics .:ng-add --dry-run=false
```

You can learn more about this command in the next post on [how to test and publish schematics](https://www.netlify.com/blog/2020/03/19/testing-and-publishing-schematics/?utm_source=blog&utm_medium=create-editing_tzm&utm_campaign=devex). After running the schematic we'll have the two new files and an edit to the `.gitignore` file. Yay!

![list of files and the .gitignore file](https://res.cloudinary.com/dzkoxrsdj/image/upload/v1584590747/Screen_Shot_2020-03-19_at_12.01.50_AM_o5z8l7.jpg)

## You've Got Files

Now you know how to add and edit files with schematics. Remember, with great power comes great testing. That's how the quote goes, right? Anyhoo, to check out how to test what we've created so far you can mosey on over to [the next post I made covering just that](https://www.netlify.com/blog/2020/03/19/testing-and-publishing-schematics/?utm_source=blog&utm_medium=create-editing_tzm&utm_campaign=devex)! Have something that you wish this schematic did for *your* Angular project? Let's chat about it in the [Netlify Community](https://community.netlify.com/?utm_source=blog&utm_medium=create-editing-files_tzm&utm_campaign=devex). In the meantime, happy coding! 👩🏻‍💻

## Resources for the Road

* [What's Angular in the JAMstack? It Sounds Delicious!](https://www.netlify.com/blog/2019/10/30/whats-angular-in-the-jamstack-it-sounds-delicious/??utm_source=blog&utm_medium=create-editing-files_tzm&utm_campaign=devex)
* Part 1: [Creating Netlify's Schematics for Angular](https://www.netlify.com/blog/2020/03/15/creating-netlifys-schematics-for-angular/?utm_source=blog&utm_medium=create-editing-files_tzm&utm_campaign=devex)
* Part 3: [Testing and Publishing Angular Schematics](https://www.netlify.com/blog/2020/03/19/testing-and-publishing-schematics/?utm_source=blog&utm_medium=create-editing_tzm&utm_campaign=devex)
* [Authoring schematics Docs](https://angular.io/guide/schematics-authoring)
* [Building an Angular Jamstack App with Scully](https://www.netlify.com/blog/2019/12/17/building-an-angular-jamstack-app-with-scully/?utm_source=blog&utm_medium=create-editing-files_tzm&utm_campaign=devex)
