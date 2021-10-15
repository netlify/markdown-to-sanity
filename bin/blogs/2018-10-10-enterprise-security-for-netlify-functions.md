---
title: Enterprise security for your Netlify Functions
description: Protect yourself against the worst type of app-level attacks via Intrinsic runtime policies
authors:
  - David Wells
date: '2018-10-10'
topics:
  - news
tags:
  - serverless
  - functions
  - enterprise
tweet: Protect yourself against the worst type of app-level attacks via Intrinsic runtime policies
format: blog
---

Today's Node.js ecosystem runs on npm, an amazing resource that brings an enormous set of community-maintained libraries to the fingertips of every JavaScript developer.

However, this also means that most Node-based projects have large trees easily pulling in thousands of third-party libraries with little insight into updates of transitive dependencies. For security teams, this deeply nested dependency graph poses a huge challenge, and we've seen the occasional horror story like the [eslint-scope module getting hijacked](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes) by malicious attackers.

## How Netlify can help

Netlify Functions allow you to add backend functionality to your website in a matter of minutes.  It relies on the power of serverless architectures while providing an improved developer experience that handles things like configuration, builds, version control and deployments.

When your Node-based functions are automatically deployed via Netlify, that puts Netlify in a unique position to transparently add security layers during the deploy stage. That's why we're partnering with [Intrinsic](http://intrinsic.com/) to offer a new level of automated security guarantees to enterprise customers.

## Protecting against dependency hijacking

Securing code is difficult – especially when it's not your own. The average Node.js application is made up of more than 90% third-party code, which can easily be vulnerable or even actively malicious. Attacks via third-party modules, commonly known as supply-chain attacks, are on the rise and have been exploited in the wild. Lately we've heard of attacks against modules such as eslint-scope and getcookies. Protecting against these attacks is a huge challenge, as even the most popular modules can be compromised. To learn more about this, check out Intrinsic's blog post, ["The Dangers of Malicious Modules"](https://medium.com/intrinsic/common-node-js-attack-vectors-the-dangers-of-malicious-modules-863ae949e7e8).

By partnering with Intrinsic, we're able to offer our enterprise customers advanced runtime security for Netlify Functions. By signing up for this feature, you'll be able to automatically secure your serverless functions and protect them against the worst type of code-level attacks such as remote code execution by defining clear security policies for your functions.

Intrinsic leverages a new runtime sandboxing technology that allows you to whitelist the exact privileges your application has access to, such as the ability to make specific outbound HTTP calls, access parts of the file system, or spawn child processes. We like to think of Intrinsic as the Content Security Policies (CSP) of the backend.

Let's take for example the following serverless function that processes a payment using Stripe.

```js
const stripe = require('stripe')(process.env.STRIPE_API_KEY);
exports.handler = function(event, context, callback) {
  const charge = await stripe.charges.create({
	amount: 100,
	currency: 'usd',
	source: 'tok_amex',
	description: 'payment'
  });
  callback(null, {
	statusCode: 200,
	body: charge
  });
};
```

Suppose that this functions' dependency tree unknowingly included a malicious module, built to infiltrate your code through a supply chain attack. The malicious module now has access to your sensitive data and can exfiltrate it to the attacker's servers. Your code would function normally, but in addition to processing a payment, your data would be sent to an evil endpoint. Even worse, the attacker would also get access to your Stripe API key.

Suppose instead that you're running this code as a Netlify Function with Intrinsic Policies, you can now protect yourself against this type of attack by whitelisting the endpoints your function is able to talk to. For example, you would define the following policy for the the Stripe function above:

```js
const IntrinsicLambda = require('@intrinsic/lambda');

module.exports = new IntrinsicLambda()
  .configurePolicies(policy => {
      policy.outboundHttp.allowPost('https://api.stripe.com/v1/charges');
  })
  .setHandlerName('handler')
  .setHandlerFile(`${__dirname}/handler.js`)
  .run();
```

Now your function has an outbound HTTP policy that whitelists a POST to https://api.stripe.com/v1/charges. If your code tries to make an HTTP call other than what is defined, then Intrinsic will block the call. This means that even if an attacker was able to gain access to your data, they wouldn't be able to send it anywhere. An attack like the eslint-scope hijack would fail to extract any sensitive environment variables or secrets.

Intrinsic for Netlify Functions is currently in private beta for select enterprise customers. If you're interested in more information, please sign up through our form below:


<form id="intrinsic-form" name="intrinsic-form" method="POST" class="floating-labels" netlify>
	<p class="form-field">
    <label>
      <span class="label">
       	Name
      </span>
      <input name="name" type="text" required>
    </label>
  </p>
  <p class="form-field">
    <label>
      <span class="label">
       	Company
      </span>
      <input name="company" type="text" required>
    </label>
  </p>
  <p class="form-field">
    <label>
      <span class="label">
        Email address
      </span>
      <input name="email" type="email" required>
    </label>
  </p>
  <p class="form-footer">
    <button type="submit" class="button">Request Private Beta Access</button>
  </p>
</form>

