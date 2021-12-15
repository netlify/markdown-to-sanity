---
title: Speed Up Productivity with Terminal Aliases
description: A beginner's guide to terminal aliases, which shows how to speed up
  productivity by making good use of your `.bash_profile`
authors:
  - Sarah Drasner
date: 2020-04-12T00:00:00.000Z
lastmod: '2020-04-13'
topics:
  - tutorials
tags:
  - bash_profile
  - bash
  - terminal
tweet: ""
format: blog
relatedposts:
  - Setting Up Your JAMstack from Scratch
  - Domain Aliases–as Many as You Like
seo:
  metatitle: How to Create Bash Aliases for Git Commands & Search for Strings
  metadescription: Want to increase developer productivity? Then create terminal aliases! Check out this guide to learn how to create bash aliases for git commands and more, making full use of your `.bash_profile`.
  ogimage: /v3/img/blog/screen-shot-2020-04-12-at-12.46.00-pm.png
---
I like to use aliases in my terminal as much as possible, in part because I like increasing my speed of execution, and in part because it feels pretty nice to customize this way.

This is a quick little guide that covers how to set up aliases for some fairly common commands, as well as how to make your terminal distinctively your own. This covers bash, you can do something similar in zsh profiles as well. 

If you don’t already have one, you can create a bash profile- make sure it's in your home directory:

```
cd ~
touch .bash_profile
```

I like editing in VS Code, so I’ll open it from here, though there are truly, so many ways of editing this file.

```
code .bash_profile
```

Let’s start with some very common and useful commands (implicit IMO here):

* `git add -A`  adds files to the current local working repository
* `git commit -m "some message here"` saves a revision of the code at this particular point in time and allows you to set a message about the changes.
* `grep --color -r 'some string' .` shows all the instances of a string in the current directory.
* `ls` lists all files in the given directory
* `ls -la` similarly lists all files, but with a bit more information.

## Git Commands Bash Aliases

I typically use `git add -A` and `git commit -m “some message”` together, so I can create an alas like this: `git add -A && git commit -m “some message”`. The nice thing about these aliases is that they literally output that command as a string, so we can use the other parameters that follow as an addendum.

If I want to use this command, but change the message at the end I would alias it this way: `alias ga='git add -A && git commit -m'`. **Then the usage would become: `ga “some message”`**

You can choose your own aliases, here are mine for git:

```
alias gi='git add -A && git commit -m'
alias gm='git push origin master'
```

## Search for Strings Bash Alias

It’s fairly common that I want to look for a certain incidence of a string within a repo or project. This handy tool lets us find all of the matches for that string in a given directory. You can use a dot for the current directory, or the name of the directory otherwise. The `-r` flag searches recursively through all the inner directories, and the `--color` will colorize the term you’re searching for in each line so you can see it more clearly

Here's what I use:

```
alias gr='grep --color -r'
```

![Look for a string recursively in a directory and highlight the string](/v3/img/blog/screen-shot-2020-04-12-at-1.17.23-pm.png)

## Reset Once You Alias

Once you set an alias in `.bash_profile`, you need to make sure it’s working. You can do this by running this command: `source ~/.bash_profile`. This will reload everything without having to quit out of terminal to reset, so that you can see the changes in action. 

Then you can run `alias`. This will list all the aliases the `.bash_profile` is using, so you can double check if it registered correctly.

## Make a Rainbow Party in your Terminal, Why Not

When I first created this alias a few years back, a few folks doubted that I could it keep it going for long. Surely, day after day, rainbows would get annoying? I’m happy to report that everyone who doubted me now has this installed. This isn’t surprising when you consider two things: the color actually helps with readability- you can separate the lines and scan more easily when there’s some visual distinction. And also because rainbows are dope.

First we’ll have to [install lolcat](https://github.com/busyloop/lolcat). If you have homebrew installed, you would run: `brew install lolcat`

Then in our `.bash_profile`, we’ll enable the color output and add two different aliases- one for simple ls (I use `l`, but you could use `ls` here, too), and one for `ls -la` which shows hidden files and some more information like when it was created, how many bytes, and so forth. I  alias this to `la`.

```
#enable color output 
export CLICOLOR=1
export LSCOLORS=gx

alias l='ls | lolcat' 
alias la='ls -la | lolcat'
```

Now we have a nice colored output for a lot of file information:

![rainbow ls -la terminal output](/v3/img/blog/screen-shot-2020-04-12-at-12.46.00-pm.png)

This isn't the only way you can customize, there are many extensions and other small things you can do. I use hyper, so I even have commands that [let me emit particles](https://github.com/zeit/hyperpower) as I type.

## Wrapping up

There you have it! You're not at all limited to the commands I just showed you- truly the sky's the limit on what you can do, and aliases help you do it quickly. Have some fun aliases of your own? You can reach out to me on [twitter](https://twitter.com/sarah_edo).