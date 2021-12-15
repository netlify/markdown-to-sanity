---
title: Two-Factor Authentication is live on Netlify!
description: Two-factor authentication is live and ready for your Netlify account!
authors:
  - Cassidy Williams
date: 2020-07-07
lastmod: 2020-07-06
topics:
  - news
tags:
  - security
tweet: ""
format: blog
relatedposts:
  - The role of roles and how to set them in Netlify Identity
  - Authentication for the REST of us
seo:
  ogimage: /v3/img/blog/86273482-3a0ceb80-bbc8-11ea-8da0-f676ed6d92ae.png
  metatitle: Two-Factor Authentication Now Live on Netlify
  metadescription: Learn about Netlify's introduction of Two-factor authentication. This is now live and ready for all customers - easily get started within your Netlify account!
---
At Netlify, we take your security and privacy seriously. To put actions behind our intentions, we are so excited to officially release two-factor authentication! This is a (highly encouraged) opt-in feature that enables you to have even more secure access to your account.

TL;DR: If you have an account, you can enable two-factor auth [here](https://app.netlify.com/user/security)!

## Was this a secret?

Welp... we thought it was, until the awesome Jane Manchun Wong figured us out!

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Netlify is working on Two-Factor Authentication!!! <a href="https://t.co/rGLXEANNv8">pic.twitter.com/rGLXEANNv8</a></p>&mdash; Jane Manchun Wong (@wongmjane) <a href="https://twitter.com/wongmjane/status/1276251505868148736?ref_src=twsrc%5Etfw">June 25, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Good job Jane. Even though [you played yourself](https://twitter.com/wongmjane/status/1276256617407713280).

Anyway. Back to our regularly scheduled release!

## What really is two-factor auth?

When you log in to a given website, you typically enter your username and password to access your account. This is one-factor authentication, because it's a single step taken to verify your identity.

So, as you can imagine, two-factor authentication adds another step to the password-only authentication system to further protect your account! That second step is an additional piece of information to verify your identity. Typically, you'll see two of these three things in a 2FA-enabled service:

* Something you know (like a password, PIN, or secret)
* Something you own (like a phone number or card)
* Something you are (like a fingerprint or facial recognition)

Adding this extra level of security on your account ensures that if someone were to access your information in some way, they still won't be able to access your Netlify account because of the second level of security.

## I'm sold! How do I enable 2FA?

Great! Head over to your **User Settings** and go to the **Security** tab, and you'll find a spot to enable two-factor authentication. Or, you can just [click here](https://app.netlify.com/user/security) if you're already logged in.

![User Security page](/v3/img/blog/screen-shot-2020-06-29-at-5.48.15-pm.png "User Security page")

Once you click the button that says "Enable two-factor authentication", you'll see a screen like this:

![Setting up 2FA via a third-party application](/v3/img/blog/screen-shot-2020-06-29-at-2.32.04-pm.png "Setting up 2FA on your account")

Netlify offers two-factor authentication through your favorite authentication apps. Use <a href="https://authy.com/" target="_blank">Authy</a>, <a href="https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en" target="_blank">Google Authenticator</a>, <a href="https://lastpass.com/auth/" target="_blank">LastPass Authenticator</a>, <a href="https://support.1password.com/one-time-passwords/" target="_blank">1Password</a>, or any others to scan the provided QR code (or manually enter in your authentication token) to connect your account.

Once you've connected your accounts, the next step is to save your recovery codes in case you lose access to your two-factor authentication apps. Save these in a safe place, and you can use each of them once to regain access to your account.

![Recovery codes page](/v3/img/blog/screen-shot-2020-06-30-at-5.51.47-pm.png "Save your recovery codes!")

And voilà! In just a few steps your Netlify account is more secure than ever. Now go forth and coooode!
