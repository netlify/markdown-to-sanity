---
title: Control your asset optimization settings from netlify.toml
description: >-
  Control asset optimization options directly from your code as to keep your
  code and configuration all in the same place, and under the same version
  control.
authors:
  - Shayon Mukherjee
date: '2019-08-05'
topics:
  - news
tags:
  - Features
  - CI
  - Builds
tweet: ''
format: blog
---
Netlify deploys include the ability to automatically optimize assets as part of the build process.

Available options like CSS and JS minification, image compression, and pretty URLs allow you to improve the performance of your sites with just a few clicks.

![](/img/blog/assetoptimization.png)

Until now, this feature was only available via the admin interface. We are happy to announce that from today, you'll also be able to control these options directly in your code as part of your `netlify.toml` file. Now you can keep your code and configuration all in the same place, and under the same version control.

This also provides very granular control over these optimizations, right down to a per-deploy-context basis. For example, if you want to try out CSS bundle and minify on a specific branch, the settings would look something like:

```toml
# Default site wide settings
[build.processing]
  skip_processing = true

# Branch specific settings
[context.branch-name.processing]
  skip_processing = false
[context.branch-name.processing.css]
  bundle = true
  minify = true
```

We think that this is a useful improvement in the level of control you have over these post-processing steps. It's something we have been wanting to do for a long time.

Find more details and options in the [netlify.toml reference docs](https://www.netlify.com/docs/netlify-toml-reference/#post-processing) and feel free to give it a shot 🙂 — this capability is now live!

Let us know what you think over in the [Netlify Community](https://community.netlify.com/t/control-your-asset-optimization-settings-from-netlify-toml/2533).
