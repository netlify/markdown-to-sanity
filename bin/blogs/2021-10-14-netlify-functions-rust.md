---
title: Write Netlify Functions in Rust
description: We're launching experimental support for Rust in Netlify Functions, with the same developer experience offered for JavaScript, TypeScript, and Go.
authors:
  - Eduardo Bouças
date: 2021-10-14
lastmod: 2021-10-14
topics:
  - news
tags:
  - Functions
  - Serverless
  - Rust
  - Engineering
  - Product
tweet: ""
format: blog
relatedposts:
  - Netlify Functions - for an unrivaled serverless workflow
  - Test Drive Netlify Beta Features with Netlify Labs
seo:
  metatitle: "Write Netlify Functions in Rust"
  metadescription: Netlify is launching experimental support for Rust in Netlify Functions, with the same developer experience offered for JavaScript, TypeScript, and Go.
  ogimage: /v3/img/blog/og-write-netlify-functions-rust.png
---

[Netlify Functions](/products/functions/) give developers an unrivalled workflow for building the backend of a web application, allowing them to focus on writing the business logic instead of provisioning servers, orchestrating deployments, or navigating verbose configuration.

With an integrated local development experience, it’s possible to make changes to functions with a very short feedback loop, with compilation or build steps taken care of automatically behind the scenes. Developers can even generate a public URL for their local server, allowing colleagues or clients to follow along wherever they are in the world.

Currently, this complete experience is available for [JavaScript](https://docs.netlify.com/functions/build-with-javascript/), [TypeScript](https://docs.netlify.com/functions/build-with-typescript/), and [Go](https://docs.netlify.com/functions/build-with-go/) functions. Today, we're excited to announce experimental support for Rust in the Netlify Functions offering.

## Enabling the feature

During the experimental period, support for Rust must be enabled on a per-site basis by setting the `NETLIFY_EXPERIMENTAL_BUILD_RUST_SOURCE` environment variable to `true`. You can do this in the Netlify UI by going to **Site settings** > **Build & deploy** > **Environment**, or using the CLI:

```sh
netlify env:set NETLIFY_EXPERIMENTAL_BUILD_RUST_SOURCE true
```

## Creating a function

To create a new Rust function, you can run `cargo init FUNCTION_NAME` from your [configured functions directory](https://docs.netlify.com/functions/configure-and-deploy/#configure-the-functions-folder).

The name you choose for the function determines its endpoint. For example, running `cargo init hello` will create a function which, when deployed, will be accessible on the `/.netlify/functions/hello` endpoint.

Alternatively, you can get a jump-start with the [Netlify CLI](https://ntl.fyi/cli)'s function generator. Run `netlify functions:create --language=rust`, choose a template, and you'll get a fully working function, ready to be deployed and modified to fit your needs.

(You'll need Netlify CLI version 6.12.0 or later. Run `npm i -g netlify-cli` to install the latest.)

## Function structure

Every function must include a handler that receives requests and returns responses. This takes shape as a function using the `ApiGatewayProxyRequest` and `ApiGatewayProxyResponse` types from the `aws_lambda_events` crate.

Below is an example of a Rust function that returns a message saying "Hello world".

```rust
use aws_lambda_events::event::apigw::{ApiGatewayProxyRequest, ApiGatewayProxyResponse};
use aws_lambda_events::encodings::Body;
use http::header::HeaderMap;
use lambda_runtime::{handler_fn, Context, Error};
use log::LevelFilter;
use simple_logger::SimpleLogger;

#[tokio::main]
async fn main() -> Result<(), Error> {
    SimpleLogger::new().with_level(LevelFilter::Info).init().unwrap();

    let func = handler_fn(my_handler);
    lambda_runtime::run(func).await?;
    Ok(())
}

pub(crate) async fn my_handler(event: ApiGatewayProxyRequest, _ctx: Context) -> Result<ApiGatewayProxyResponse, Error> {
    let path = event.path.unwrap();

    let resp = ApiGatewayProxyResponse {
        status_code: 200,
        headers: HeaderMap::new(),
        multi_value_headers: HeaderMap::new(),
        body: Some(Body::Text("Hello world".to_owned())),
        is_base64_encoded: Some(false),
    };

    Ok(resp)
}
```

To try this function, you can clone [the GitHub repository](https://github.com/netlify/rust-functions-example), or deploy it directly to your Netlify account using the button below.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/rust-functions-example)

## Local development

You can use [Netlify Dev](https://www.netlify.com/products/dev/) to test your functions locally. Run `netlify dev` and open http://localhost:8888/.netlify/functions/hello in the browser. If you'd like to generate a public URL that is accessible from anywhere, use `netlify dev --live`.

Your function will be rebuilt automatically every time you change a file, so that you and your colleagues can see the changes immediately.

## Deployment

Once you're happy with your changes, you can commit and push the files to Git. We'll take care of building and deploying your functions automatically.

Our build system runs `cargo build --release` under the hood. If you'd like to customize the build pipeline, you can do so by [specifying a build command](https://docs.netlify.com/configure-builds/get-started/#basic-build-settings) that builds the functions and places the binaries in the configured functions directory. If you do that, make sure to use `x86_64-unknown-linux-musl` as the build target.

Deploying a function for the first time may take a few minutes, since compiling a binary for release is a time-consuming process. But the build artefacts are cached between builds, so subsequent deploys should be significantly faster.

## Lab goggles required

This feature may change substantially while we fine-tune the implementation. Still, in the spirit of [involving our customers in the development of the product](https://www.netlify.com/blog/2021/03/31/test-drive-netlify-beta-features-with-netlify-labs/), we’re excited to get it in front of _you_ sooner rather than later. Your feedback will help us create the best possible experience for everyone using Netlify.

Happy builds, fellow Rustaceans! 🦀 🥽
