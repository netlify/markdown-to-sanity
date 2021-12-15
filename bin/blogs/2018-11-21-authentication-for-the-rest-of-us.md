---
title: Authentication for the REST of us
description: >-
  Authentication can be a daunting concept to grok, especially for the
  uninitiated. In this post, we'll dive into what authentication is and the
  various options you have when working with authentication in your apps.
authors:
  - Divya Sasidharan
date: '2018-11-28'
topics:
  - tutorials
tags:
  - Authentication
  - Identity
tweet: ''
format: blog
---
If you’ve ever used accessed a web application that stores user data like Instagram, or Twitter, chances are you’ve encountered some form of authentication. Authentication is the basis for securing data and content online. It enables a client and/or server to assert the ownership of a credential before allowing a user to access confidential information. While authentication is crucial to ensuring the security of modern web applications, building out a custom, full fledged authentication service is a hassle with significant technical overhead. Services like [Auth0](https://auth0.com/), [Okta](https://www.okta.com/), and [Netlify Identity](https://www.netlify.com/docs/identity/) offer a cloud-based identity management service so you can spend less time building out complex authentication frameworks and more time building your application.


## SSO, MFA and what now?  

With so many cloud based authentication services available, deciding which one best fits your use case can be an overwhelming decision. Making an informed decision moreover relies on parsing authentication jargon, like Single Sign On (SSO), and Multi Factor Authentication (MFA) to figure out what they really mean and what the implications are when used in your application. To address this confusion, let’s begin by demystifying these terms in order to better understand how and where they fit in. 

## Single Sign On

Single Sign On (SSO) is the authentication process that enables users to authenticate once and gain access to multiple applications or services. In order to achieve this, SSO utilizes a Central Server to orchestrate signing into multiple applications. When a user first logs in, the Central Server creates a cookie, which persists as the user navigates across domains owned by the same service. Google is a well known example of a service that utilizes an SSO solution. Google’s Central Server `accounts.google.com` handles the authentication for all its subsidiary applications thereby allowing you access to Youtube, Google Drive and Hangouts without the need for you to sign in each time. To better illustrate this process, here’s a diagram of a basic SSO authentication flow. 



![SSO Authentication Flow Diagram](/v3/img/blog/auth-sso.png)



## Multi Factor Authentication

Multi Factor Authentication (MFA) is a multi (usually two) step process for verifying a user’s identity when they sign into an application. As the name suggests, it requires more than one piece of identifying information for a successful log in. This often comes in the form of something you know (i.e. password), something you have (i.e. a trusted device like a phone or a [YubiKey](https://www.yubico.com/)) and/or something you are (i.e. a biometric like a fingerprint or your face). 

![MFA Auth Flow Diagram](/v3/img/blog/auth-mfa.png)



## Social Login

Social login allows users to sign into an application with credentials from external social login providers, like Facebook, Twitter and Google. You can think of Social login as SSO for end users. Similar to the passwordless authentication flow that we’ll cover later on, social login means one less password for a user to remember since they don’t have to create a new account specifically for the application they’re accessing. Instead of authentication happening on the central auth server, the social identity provider handles authentication and sends the authentication server a token which then validates the user’s session.


![Social Login Flow Diagram](/v3/img/blog/auth-social.png)



## Passwordless

Passwordless authentication, as the name suggests is the system used to allow users to log in without the need for a password. If you’re a user of Slack, you are probably familiar with this workflow, where Slack emails you a “magic link” to log you into your account. Because of the extra layer of authentication provided by having to access an email address, or a text message to log in, passwordless authentication is in a way two factor authentication by default. In a system that uses passwordless authentication, the user first inputs an email address or a phone number. The server then creates a temporary one time use code and sends it to the user via a “magic link”. When the user clicks on the link, the server extracts the code, fetches the user associated with it, and redirects the user to a logged in page.


![Passwordless Auth Flow Diagram](/v3/img/blog/auth-passwordless.png)


 

## Getting Started

With services like [Auth0](https://auth0.com/), [Okta](https://www.okta.com/), [Firebase Auth](https://firebase.google.com/docs/auth/), [Amazon Cognito](https://aws.amazon.com/cognito/) and [Netlify Identity](https://www.netlify.com/docs/identity/), we as developers are spoilt for choice when it comes to picking an authentication provider for our applications. A good first step when accessing the right identity provider and tool for your application is to identify and assess the needs and goals of your users. Do they want to create a separate user account for your service? Do users expect a specific UI/UX workflow when working with your application? Do they need access to multiple subdomains for which they may have to log in multiple times? Other factors to consider include cost of an authentication provider, and vendor lockdown. Using an auth provider, while convenient can be expensive and often means writing provider-specific code. If you’re intrigued enough to start diving into the wonderful world of authentication but are still afraid of all the configuration, [Auth0’s Lock Widget](https://auth0.com/lock), [Okta Sign In Widget](https://developer.okta.com/code/javascript/okta_sign-in_widget) and [Netlify Identity Widget](https://github.com/netlify/netlify-identity-widget) are great tools to get started. 

As always, we’d love to know how you’re using authentication in your JAMstack apps. [Give us a shout @Netlify on twitter!](https://twitter.com/Netlify)
