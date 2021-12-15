---
title: Improved Netlify Forms spam filtering using Akismet
description: >-
  We're very excited to announce, that starting today, all form submissions will
  be filtered for spam using Akismet, an industry leader in spam detection. 
authors:
  - Ingrid Epure
date: '2019-02-12'
topics:
  - news
tags:
  - Forms
  - spam
  - akismet
tweet: ''
format: blog
---
We know how important it is to connect with your users and customers, which is why Netlify comes with built-in form handling. On the other hand, because the internet is sometimes dark and full of terrors, adding a way to be reached often comes with an unwanted side-effect: spam. 

Initially, we filtered submissions using our own solution. With spam tactics evolving quickly, we found ourselves coming back to one of our guiding principles:  that we should leverage the expertise of other services to solve a problem, where possible. 

So we're very excited to announce, that starting today, all form submissions will be filtered for spam using [Akismet](https://akismet.com/), an industry leader in spam detection. 

## Why Spam filtering is important

Spam can be described in many ways – electronic junk, unsolicited content, and unwanted commercial advertising.  Wikipedia tells us the term comes from Spam luncheon meat by way of a [Monty Python sketch](https://en.wikipedia.org/wiki/Spam_(Monty_Python)) in which Spam is ubiquitous, unavoidable, and repetitive. 

<div align="center"> 
  <img src="/v3/img/blog/spam.gif" alt="spam!">
</div>

A quick look at our data during tests will confirm all three attributes: almost 50% of processed form submissions are spam.

<div align="center"> 
 <img src="/v3/img/blog/spam-submissions-graph.png" alt="Bar graph of spam submissions vs. total" />
  <figure>
    <figcaption><font color="grey" size="4">submissions / hour</font></figcaption>
  </figure>
</div>

But besides being annoying and wasting resources with its sheer volume, spam can also promote sensitive content and pose a number of serious security threats like phishing (the practice of defrauding users into giving up their usernames, passwords, credit card numbers, and other personal information), money scams, malware, and hurting your website reputation. 

## What is Akismet

Because content is always subjective, classifying a message as spam becomes a non-trivial issue. Akismet first started tackling this issue as a WordPress plugin in 2005, and now runs on millions of websites, filtering hundreds of millions of spam comments every day. Its signatures database is constantly [improving](https://docs.akismet.com/general/teach-akismet/), and the Akismet API can be used for all sorts of applications, including Netlify Forms submissions.

## A change in the way we process submissions

Introducing Akismet brings a few subtle changes to our process: 

### Validations

We considered multiple use cases when deciding how the new spam filtering process should work:

* From a submitter point of view, we wanted to keep the experience as simple as possible: you enter your data, submit the form, and it's on its way.
* From a site owner point of view, we believe it's important to be notified only for things that matter. As soon as the validation completes, you will be notified about the new message, and will be able to see it in the UI as usual.
* From an engineering point of view, we wanted to provide the best experience for our users, so Akismet runs in the background for every form submission, immediately after being created. This minimizes the impact the process has on the overall user experience,  and allows for no latency impact when accepting submissions.

### CAPTCHA

Our previous approach to trapping spam included presenting a CAPTCHA challenge when submissions were identified as possible spam. Thanks to your feedback, and following the addition of the improved Akismet filtering, we have decided to remove this feature, but will continue to allow you to explicitly [configure your own reCAPTCHA2](https://www.netlify.com/docs/form-handling/#explicit-recaptcha-2) directly in the form should you chose to do so. 

## Find out more

If you would like to know more, or want to get started quickly with adding forms to your sites, visit our [docs](https://www.netlify.com/docs/form-handling/) for some useful information on Netlify Forms. We’re very excited with this improvement to your experience with form submissions, and we can’t wait to share even more updates on this soon!
