---
title: Deploying Netlify Sites with AWS CloudFormation
description: >-
  How to deploy Netlify sites with AWS Cloudformation, SAM, and the Serverless
  Framework
authors:
  - David Wells
date: '2018-11-29'
topics:
  - tutorials
tags:
  - serverless
  - aws
  - jamstack
tweet: >-
  How to deploy Netlify sites with AWS Cloudformation, SAM, and the serverless
  Framework
format: blog
image: /img/press/logos/logomark-light.png
---

Here at Netlify, we are always looking for ways to improve & enhance our developer workflows. We strive to make it as easy as possible for folks to build and deploy onto the [JAMStack](https://jamstack.org/).

Currently, there are a wide variety of ways that devs can deploy sites & applications to Netlify:

1. **Using our [app.netlify.com](https://app.netlify.com/) UI** ([tutorial](https://serverless.com/blog/how-built-static-serverless-website-netlify/))
2. **Running `netlify deploy` via the [command line](https://cli.netlify.com/)**
3. **Clicking the mighty [deploy to Netlify button](https://www.netlify.com/docs/deploy-button/)**
4. **Calling the [Netlify API](https://open-api.netlify.com/#/default/createSite)**
5. **Defining your site in [terraform](https://www.terraform.io/docs/providers/netlify/index.html)**

And now during [AWS Re:invent](https://reinvent.awsevents.com/) we are proud to announce you can now **provision Netlify sites via AWS CloudFormation** as a custom resource!

This gives the users of [AWS CloudFormation](https://docs.aws.amazon.com/CloudFormation/index.html#lang/en_us), [SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html), and the [Serverless framework](https://github.com/serverless/serverless/) a way to deploy & manage Netlify sites from their existing workflows within the AWS ecosystem.

Bonus points: **It's infrastructure as code!**

For the `TLDR;` [checkout the video](https://youtu.be/AQ-f-U8Pncc) or read on!

##  What is CloudFormation?

[CloudFormation](https://docs.aws.amazon.com/CloudFormation/index.html#lang/en_us) is a tool from AWS that allows users to define their infrastructure as code. This makes deployments of resources programatic and removes manual setup steps.

In a nutshell, AWS CloudFormation is the declarative language for defining all the AWS services you are using for a given application or microservice.

But it doesn't just provision AWS resources, you can configure CloudFormation to deploy third party resources as well like a Twilio SMS number, Auth0 clients, or even **a Netlify site**.

For a quick overview of CloudFormation, check out [this handy video](https://www.youtube.com/watch?v=Omppm_YUG2g).

## Why is infrastructure as code important?

When you declaratively define the pieces of your application as code you remove a wide variety of problems.

1. You remove the manual process of setting up all the individual pieces of your infrastructure . This removes human error and lowers the amount of "tribal" knowledge when trying to setup the application again.

2. Multi stage and multi region deployments become much easier with your application building blocks defined and automatically provisioned.

3. Integration testing becomes easier. Because you can spin N number of identical CloudFormation "stacks" (or groups of resources) you can easily create isolated environments to test all the pieces work together before rolling out a change to production. After integration tests pass, you can simply remove everything in that isolated environment and keep things nice and clean.

You get repeatable, auditable, automated deployments of **all** the pieces of your application and spinning up and down different versions, stages, regions etc becomes increasingly easier when your stack is defined as **infrastructure as code**.

For more on IaC checkout [Infrastructure as Code: A Reason to Smile](https://www.thoughtworks.com/insights/blog/infrastructure-code-reason-smile)

## Netlify sites as custom AWS resource

We've built a Netlify custom resource to allow for AWS users to define and deploy Netlify sites as part of their existing CloudFormation stacks.

This will setup your site and wire up the Netlify deploy & branch previews that you know and love.

When you update the site settings, like updating your build command or setting environment variables and redeploy your CloudFormation stack, those new settings will be automatically updated in Netlify.

Now you might be asking, *"How is this different than using an s3 bucket + cloudfront?"*

Well, when you deploy a site on Netlify's globally distributed [multi-cloud](https://www.netlify.com/blog/2018/05/14/how-netlify-migrated-to-a-fully-multi-cloud-infrastructure/) CDN, you get [automatic CI/CD integration](https://www.netlify.com/features/workflow/), [branch & build previews](https://www.netlify.com/blog/2016/07/20/introducing-deploy-previews-in-netlify/), and an advanced [redirects engine & proxy layer](https://www.netlify.com/docs/redirects/) to handle routing, [role based access control](https://www.netlify.com/docs/redirects/#role-based-redirect-rules), & [GeoIP redirects](https://www.netlify.com/docs/redirects/#geoip-and-language-based-redirects)

##  Demo

<iframe width="560" height="315" src="https://www.youtube.com/embed/AQ-f-U8Pncc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The code for the serverless project used in the demo can be [found here](https://github.com/DavidWells/netlify-site-as-aws-custom-resource-example).

## How to use it?

Declare one or many Netlify sites in your AWS CloudFormation template by adding the following to your [`Resources` section](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html) of your CF template.

```yml
# Logical ID
myNetlifySite:
  # Resource type
  Type: Custom::NetlifySite
  # Resource properties
  Properties:
    # AWS ARN of provisioning function uses to create Netlify site
    ServiceToken: {
      "Fn::Join": ["",
        ["arn:aws:lambda:",{"Ref":"AWS::Region"},":453208706738:function:custom-resource-netlify-site"]
      ]
    }
    # Settings required for provisioning Netlify site
    netlifyToken: xyz-123-netlify-token
    githubToken:  xyz-123-github-token
    name: new-new-new-site-new-name
    custom_domain: lol-wow-cool.com
    build_settings:
      repo_url: https://github.com/DavidWells/test-site
      repo_branch: master
      dir: build
      cmd: npm run build
      allowed_branches:
        - master
      env:
        MY_ENV_KEY: hello
        MY_OTHER_KEY: there
```

### Raw CloudFormation Example

Below is an example of using the custom resource using [AWS CloudFormation](https://docs.aws.amazon.com/cloudformation/index.html#lang/en_us)

```yml
---
AWSTemplateFormatVersion: '2010-09-09'
Description: The AWS CloudFormation template with Netlify Site
Resources:
  myNetlifySite:
    Type: Custom::NetlifySite
    Properties:
      ServiceToken: {
        "Fn::Join": ["",
          ["arn:aws:lambda:",{"Ref":"AWS::Region"},":453208706738:function:custom-resource-netlify-site"]
        ]
      }
      netlifyToken: your-netlify-token
      githubToken: your-github-token
      name: your-netlify-site-name
      # custom_domain: site.com
      build_settings:
        repo_url: https://github.com/username/site-repo
        repo_branch: master
        dir: build
        cmd: npm run build
        allowed_branches:
          - master
        env:
          MY_ENV_KEY: hello
          MY_OTHER_KEY: there
```

### AWS SAM example

Below is an example of using the custom resource using [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html)

```yml
AWSTemplateFormatVersion: '2010-09-09'
Transform: 'AWS::Serverless-2016-10-31'
Description: 'SAM template for Serverless framework service: '
Resources:
  myNetlifySite:
    Type: Custom::NetlifySite
    Properties:
      ServiceToken: {
        "Fn::Join": ["",
          ["arn:aws:lambda:",{"Ref":"AWS::Region"},":453208706738:function:custom-resource-netlify-site"]
        ]
      }
      netlifyToken: your-netlify-token
      githubToken: your-github-token
      name: your-netlify-site-name
      # custom_domain: site.com
      build_settings:
        repo_url: https://github.com/username/site-repo
        repo_branch: master
        dir: build
        cmd: npm run build
        allowed_branches:
          - master
        env:
          MY_ENV_KEY: hello
          MY_OTHER_KEY: there
```

### Serverless Framework example

Below is an example of using the custom resource using the [serverless framework](https://github.com/serverless/serverless/)

Contents of the `serverless.yml` config file:

```yml
service: my-service-with-netlify-site

provider:
  name: aws
  runtime: nodejs8.10

resources:
  Resources:
    myNetlifySite:
      Type: Custom::NetlifySite
      Properties:
        ServiceToken: {
          "Fn::Join": ["",
            ["arn:aws:lambda:",{"Ref":"AWS::Region"},":453208706738:function:custom-resource-netlify-site"]
          ]
        }
        netlifyToken: your-netlify-token
        githubToken: your-github-token
        name: your-netlify-site-name
        # custom_domain: site.com
        build_settings:
          repo_url: https://github.com/username/site-repo
          repo_branch: master
          dir: build
          cmd: npm run build
          allowed_branches:
            - master
          env:
            MY_ENV_KEY: hello
            MY_OTHER_KEY: there
```

## Wrapping up

We now has a nice way to deploy new sites & frontend apps onto Netlify as part of an AWS stack. We hope this helps developers leverage some of the power features of Netlify along side their existing AWS infrastructure.


Try it out yourself with the [demo repo](https://github.com/DavidWells/netlify-site-as-aws-custom-resource-example).
