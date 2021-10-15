---
title: Give Meaningful Feedback with Collaborative Deploy Previews
description: "Learn how to easily give feedback on your dev team's work with new
  capabilities available in Collaborative Deploy Previews, including
  screengrabs, videos, and annotations.  "
authors:
  - Melanie Crissey
date: 2021-05-19
lastmod: 2021-05-18
topics:
  - tutorials
relatedposts:
  - "Feedback Ladders: How We Encode Code Reviews at Netlify"
  - "Next-generation Deploy Previews, plus Netlify acquires FeaturePeek"
tags:
  - deploy previews
  - code review
  - QA
tweet: ""
format: blog
seo:
  metatitle: "How to Use Collaborative Deploy Previews with Netlify "
  metadescription: "Learn how to easily give feedback on your dev team's work with
    new capabilities available in Collaborative Deploy Previews, including
    screengrabs, videos, and annotations.  "
  ogimage: /img/blog/CDP-Feedback-og-image-2.png
---

Reviewers rejoice! Now when your dev team sends you a preview of an upcoming web update ([aka Deploy Preview](https://www.netlify.com/blog/2021/05/19/next-generation-deploy-previews-plus-netlify-acquires-featurepeek/)), you can leave feedback right from the preview.

Here’s how it works:

* Every change that your development team makes to a website or web app generates a unique Deploy Preview link which is a staging URL you can open in your browser to visualize the changes before they go live.
* When someone shares a Deploy Preview link, you can use a set of on-page review tools to leave detailed feedback directly from your browser.
* This feedback syncs into GitHub and other development productivity tools where developers can view your comments, create follow-up tasks, and mark issues as resolved.

This tight feedback loop integrates directly into the developer workflow so important details are less likely to get lost. Everybody wins.

## Starting your first review on Netlify

Ready to start reviewing? First, be sure to get a [Deploy Preview URL](https://www.netlify.com/products/deploy-previews/) from a developer with a Netlify account. Open the URL in your browser. This URL should look like the version of your site or app that’s ready for your review.

> Hint: Consider the appropriate scope for your review. Are you QA’ing the page for functionality? Checking the copy for typos? Looking for a specific design change? Or, is the request for a more holistic critique? Having some direction before you jump into the review process will make it easier to focus and provide meaningful feedback to your team.

Next, find the Netlify drawer in the bottom-left corner of your browser window and click to open the drawer.

![Netlify Drawer in Collaborative Deploy Previews ](/img/blog/netlify-drawer-ui.png "Look for a tab with the Netlify logo. That’s the Netlify drawer.")

### Sign in or sign up for free

If you already have a Netlify account, sign in! If you don’t yet have a Netlify account, you will want to sign up for a free Reviewer seat. The sign-up process takes 5 seconds. Check your inbox to verify your email address. When you log in, you will get dropped into a staging version of your site or app.

> Note: If you're only reviewing a specific page or two, you might need to navigate to the pages you've been asked to review from your site's homepage

### Test, screengrab, record, and comment

The handy Netlify drawer gives you a few tools to help make your review as clear as possible.

![Record videos and take screengrabs in Netlify's Collaborative Deploy Previews](/img/blog/netlify-cdp-tools.png "Once you’re signed into Netlify, you’ll see additional utilities stacked on top of the Netlify drawer tab.")

\
Here’s what you can do:

* **Draw focus with marked up screenshots.** Select whether to screenshot your whole screen or a single tab. Then, crop and mark up the screen capture image with shapes, arrows, or circles to highlight the area that needs attention.
* **Record your screen as a video.** Got an issue with some animation or interactive content? Record a short video. Netlify will turn the video into a GIF and attach it to your comment.
* **Add some notes.** Once you’re ready to share your visual feedback with your team, write a comment to submit. In your comment, you can add some notes and descriptions along with your images or recordings. All comments start in markdown format, but you can easily toggle over to the Preview tab to ensure all of your links and style changes are applied for maximum legibility. Send when ready!
* **Tag collaborators to weigh in.** You can @ mention other members of your organization to invite their attention to specific comments.

When you hit submit on your comment, your feedback and any image details you provided get posted directly into the thread on GitHub, the platform where your developers make code changes and get stuff done.

Want to see collaborative Deploy Previews in action? Check out the demo from our [announcement event](https://www.netlify.com/events/product-reveal):

<iframe width="560" height="315" src="https://www.youtube.com/embed/c2TrTPoYxrc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

> One awesome detail to note: when you use Netlify to leave feedback, you don’t need to supply your browser version, viewport details, or even the URL path you were visiting when you submitted feedback. All of those important metadata details get bundled up automatically and sent along with your comment.

Once a developer has responded to your request, they can mark it as resolved which will collapse the feedback in view. High-five, go team!

## Best Practices for Sending Feedback

Tools like Netlify’s collaborative Deploy Previews can make it easier to send feedback, but there’s an art to sending feedback that will be well received. As you start your review process, keep these best practices in mind.

1. **One comment per suggestion.** It may be tempting to gather all of your thoughts and write one very thorough post to include everything you caught in your review. Resist the temptation to do this! For developers, it’s much easier to create tasks and address specific issues if each issue has its own comment. Err on the side of creating more, shorter comments about specific items on the page instead of writing a detailed novel of everything that you saw.
2. **Be direct and specific. Avoid colorful language.** When you open your website on mobile and see a bunch of wrapped text overlapping part of the page where it doesn’t belong, your first reaction might be, “This looks super-janky!” This comment accurately captures the spirit of the issue, but it doesn’t tell the developer what the problem is. Be more specific and try to take your feelings out of it. For example, “This text is wrapping too far and overlaying on top of the image in the section below” is more clear, meaning the issue is more likely to get fixed faster.
3. **Include the steps to reproduce functional bugs.** Now, if you’re using the Netlify drawer to leave comments on a Deploy Preview, you don’t need to provide your Browser, Viewport, or explain whether or not cookies are enabled. That’s covered. But, you should describe any steps you took before you encountered a bug. Number your steps and include any relevant details, like this example:

   1. *Scroll down to the on-page form.*
   2. *Enter your first and last name but don’t enter a phone number.*
   3. *Hit Submit on the form.*
   4. *See an error “This field is required” even though the phone number field is labeled as optional.*
4. **Make it clear whether feedback is blocking or non-blocking.** When you’re reviewing a Deploy Preview ahead of an upcoming release, you should be clear about which changes are requirements before launch versus other suggestions which may be considered as non-blocking feedback. At Netlify, we use a [Feedback Ladder framework](https://www.netlify.com/blog/2020/03/05/feedback-ladders-how-we-encode-code-reviews-at-netlify/) to clearly communicate blocking issues and also estimate the size of the problem. For example, a Mountain may need immediate attention where a Pebble in your shoe could probably be a fast-follow after launch day. Communicating expectations keeps the workflow from being bogged down so your whole team can ship new stuff faster.

## Ready to review?

Ask an engineer on your web development team for a [Deploy Preview URL](https://www.netlify.com/products/deploy-previews/) ahead of your next release. Not using Netlify yet? [Sign up for an account today](https://app.netlify.com/signup/email) and invite a developer to your team.
