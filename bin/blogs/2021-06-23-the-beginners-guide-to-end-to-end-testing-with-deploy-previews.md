---
title: The Beginner's Guide to End-to-End Testing with Deploy Previews
description: "End-to-end testing has a lot of benefits, but it can be hard to
  get started. Learn how to kick off end-to-end testing with deploy previews and
  QA Wolf. "
authors:
  - Laura Cressman
date: 2021-06-29
lastmod: 2021-06-29
topics:
  - tutorials
tags:
  - testing
  - deploy previews
  - QA wolf
  - QA
  - open source
tweet: ""
format: blog
relatedposts:
  - "Netlify Build Plugin of the Week: Cypress"
seo:
  metatitle: The Beginner's Guide to End-to-End Testing with Deploy Previews
  metadescription: "End-to-end testing has a lot of benefits, but it can be hard
    to get started. Learn how to kick off end-to-end testing with deploy
    previews and QA Wolf. "
  ogimage: /img/blog/e2e-tests-og-image.png
---
### 3 common problems with E2E tests, and how to solve them with Deploy Previews

Let me know if this sounds familiar: someone pushed code to production and now there's a massive bug. 🐛

End-to-end (E2E) tests can help prevent this scenario by checking that your most important user flows are working. For example, Amazon would test that a user can create an account and add an item to their cart. A software-as-a-service (SaaS) startup would test that a user can sign up for a free trial and subscribe to a paid plan. E2E testing is also sometimes referred to as browser testing or smoke testing.

When done well, automated E2E tests empower teams to ship faster and more confidently. Your company benefits too. Revenue increases as people abandon your product less. Costs also go down. [According to Microsoft](https://msdn.microsoft.com/en-us/library/ms182613(VS.80).aspx), smoke tests are the most cost-effective method for identifying and fixing defects in software, after code reviews.

But despite the benefits, automated tests remain difficult and out of reach for many teams. [76% of developers are still running more than half their tests manually](https://www.techrepublic.com/article/software-tests-are-essential-in-improving-quality-but-most-developers-arent-automating-them/), which slows down the development cycle.

Enter deploy previews. 🦸

[Deploy previews](https://www.netlify.com/products/deploy-previews/) create a public URL for every commit you push. These URLs empower teams to collaborate on changes early in the development cycle.

In addition to speeding up the development cycle, deploy previews pave the way for better E2E testing. Before deploy previews, powerful test infrastructure often required a team of automation engineers. Now, companies of all sizes can leverage modern tooling to test as fast as they commit.

![End-to-end testing with QA Wolf and Netlify](/img/blog/qa-wolf-blog.png)

If you have deploy previews but aren't yet running E2E tests, now just might be the time to get started.

Let's do a deeper dive on how why traditional E2E testing can be so difficult, and how deploy previews can help.

## **Problem #1: Tests take forever to run**

One of the biggest drawbacks of E2E testing today is that tests can take a long time to run.

I've personally experienced the pain of "babysitting builds" and waiting an hour for tests to run before I can deploy. This makes me sad as a developer who wants to spend time shipping awesome features.

Before deploy previews, this was a necessary evil of E2E testing. If you wanted to run E2E tests, you used a CI provider like [GitHub Actions](https://github.com/features/actions) or [CircleCI](https://circleci.com/). On every commit, you would spin up your application in your CI provider and run your tests.

E2E tests are particularly slow in CI providers because they require a lot of computing resources. After all, E2E tests have to launch an entire browser to go through your critical user flows.

Because of these resource constraints, CI providers can generally run one E2E test at a time. At best, you can set up limited "parallelization" to run a few tests concurrently. The result? It can take hours for your tests to run.

The world is different with deploy previews. Now every commit has its own public URL.

This means we no longer have to rely on the limited resources of CI providers to run E2E tests. Rather, we can leverage the cloud to run tests in 100% parallel.

With 100% parallelization, the time it takes to run tests shrinks from half an hour or more to a few minutes.

For example, say you have 45 tests that each take 1 minute to run. Without parallelization, it would take about 45 minutes to run all your tests (45 tests x 1 minute to run each test). With parallelization, it would take about 1 minute to run all tests since each test runs independently.

![Running QA tests in parallel ](/img/blog/qawolf-parallelization.png)

All that's left is to set up the infrastructure to run your tests in 100% parallel. One way to do this is with tools like [AWS Lambda](https://aws.amazon.com/lambda/). On each deployment, you can call an independent function to run a test script against your preview URL.

However, setting up this infrastructure can be a hassle. You need to:

* configure Lambda to run your tests
* deploy a new Lambda every time your tests change
* set up a way to get test results and understand failures

This problem inspired us to build an [open source](https://github.com/qawolf/qawolf) tool called [QA Wolf](https://www.qawolf.com/), which provides 100% parallelization out of the box. You can create tests online with QA Wolf, then install our [Netlify build plugin](https://app.netlify.com/plugins/netlify-plugin-qawolf/install) to run tests automatically on preview and production deploys.

**TL;DR: If you have deploy previews, you can run tests on every commit in 100% parallel. Get test results in minutes, not hours.**

## **Problem #2: Testing is done late in the development cycle**

Without deploy previews, testing every commit can be prohibitively slow. Running tests in CI also requires some serious wrangling to spin up a test environment.

These difficulties often push E2E testing late in the development cycle. For example, you may test your staging environment only after a pull request is merged.

Testing late in the game can be expensive. [It costs as much as 30x more to fix a bug](https://deepsource.io/blog/exponential-cost-of-fixing-bugs/) after it's been released than during early-stage development. First you need to figure out which change caused it, then reproduce it locally, then submit a pull request to fix it, and then redeploy to staging while hoping you didn't break something else in the process....

Deploy previews give you a URL for every commit. Now your whole team can review changes and raise issues before customers do. With Netlify's [collaborative deploy previews](https://www.netlify.com/blog/2021/05/19/give-meaningful-feedback-with-collaborative-deploy-previews/), you can even give feedback directly from the preview site.

Having a URL for every commit also invites new team members to join the party: automated test robots. These robots find bugs early so you can fix them before deploying. 🤖

**TL;DR: If you're using deploy previews, you can start testing as soon as you commit. Find bugs before you deploy to staging or production.**

## **Problem #3: Test failures are hard to debug and share**

We've just covered how deploy previews make it possible to test faster and more often. But what happens when our tests fail?

When you run tests in a CI provider, you usually can't access the test environment. So when a test fails, it can be hard to reproduce the bug. This problem is compounded by every developer having their own separate environment running locally.

If developers can't reproduce a test failure, they start to suspect the test itself. As developer trust erodes, you risk giving up on testing altogether and letting bugs escape to customers.

Once again, deploy previews are our friend.

Sharing a test environment is as simple as sharing a URL. Your tests run against the same preview URL that you and your team has access to.

This means that you can dig into failures without worry about environment differences. You can also share failures with team members who are running different environments locally.

**TL;DR: Reproduce and share test failures with public URLs. Remove environment differences as a cause of test failures.**

## **Conclusion**

In short, deploy previews help us go from testing zeros to testing heroes. We no longer have to worry about slow tests, testing too late in the game, or hard-to-reproduce failures.

If you have deploy previews, now is the perfect time to try E2E testing. Your customers will thank you. 💝

Of course, some challenges with E2E testing still remain. The biggest barrier is being able to create the tests in the first place, which is something I'm working on at [QA Wolf](https://www.qawolf.com/). I'd love to help you start testing or hear any feedback on this post. You can find me at [laura@qawolf.com](mailto:laura@qawolf.com) :)
