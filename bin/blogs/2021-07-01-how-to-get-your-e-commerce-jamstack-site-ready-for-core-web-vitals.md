---
title: How to get your e-commerce Jamstack site ready for Core Web Vitals
description: Jamstack sites have all kinds of performance benefits. But is that enough for the 2021 Core Web Vitals algorithm update? Learn more about how to optimize your ecommerce Jamstack sites.
authors:
  - Steve Sewell
date: 2021-07-07
lastmod: 2021-07-01
topics:
  - tutorials
tags:
  - Ecommerce
  - jamstack
  - Performance
  - seo
  - core web vitals
  - Builder.io
  - headless commerce
tweet: ""
format: blog
relatedposts:
  - The Developer’s Intro to Core Web Vitals
  - Pan Macmillan Sees 25 Percent Conversion Increase After Migrating to Netlify
seo:
  metatitle: How to get your e-commerce Jamstack site ready for Core Web Vitals
  metadescription: "Jamstack sites have all kinds of performance benefits. But is that enough for the 2021 Core Web Vitals algorithm update? Learn more about how to optimize your ecommerce Jamstack sites. "
  ogimage: /img/blog/ecommerce-cwv-og.png
---

*This post is a contributed blog from Steve Sewell, founder and CEO of [Builder.io](https://www.builder.io) a headless CMS for ecommerce + powerful drag and drop page builder. Prior to Builder, Steve founded two other startups, a mobile & web application framework and a music gaming startup, and  led web engineering at ShopStyle.*


Most e-commerce sites fail Core Web Vitals tests. This comes as no surprise, since e-commerce staples like rich imagery, pop-ups, dynamic pricing and real-time inventory lookups can lead to slow pages and sometimes frustrating UX. 

![](/img/blog/core-web-vitals-ecommerce-1.png)

Google’s latest ranking update, “[Page Experience update](https://developers.google.com/search/docs/guides/page-experience),” includes the addition of three perceptual speed metrics to the search engine’s ranking algorithm. With the addition of these three metrics, collectively referred to as “Core Web Vitals,” Google aims to measure the experience a page provides based on the time it takes to load and become interactive.

The Page Experience update is planned to roll out gradually. Since Google I/O 2021, CWVs are a factor impacting desktop ranking in the US, and the update will continue to [roll out to mobile and additional regions through August](https://developers.google.com/search/blog/2021/04/more-details-page-experience). Ultimately, sites that are slower to load and become interactive for a majority of their users will rank lower than their faster loading competitors, for equivalent keywords.

Read on for a deep dive into CWV metrics, what updates to expect in 2021, and how to optimize your Jamstack e-commerce website for them.

## What are Core Web Vitals?

[Core Web Vitals](https://web.dev/vitals/) are the following three perceptual speed metrics that Google uses to measure the experience a page provides:

* Largest Contentful Paint (LCP) measures loading. A page’s LCP is marked when the largest visual element in the viewport has loaded (and the average user perceives the page as loaded). For e-commerce, this is typically when the hero section has loaded. LCPs that are faster than 2.5 seconds are classified as ‘good.’
* First Input Delay (FID) measures interactivity. It measures the time it takes the page to respond to user interaction. A FID that is faster than 100ms is considered ‘good.’ This appears to be the metric that is easiest to optimize e-commerce sites for, as most of them currently meet the FID threshold.
* Cumulative Layout Shift (CLS) measures visual stability. CLS is calculated by summing all of the page layout shifts that aren't caused by user interaction. A CLS that is lower than 0.1 is considered ‘good’ and a page with a CLS that of 0.25 or above will provide a janky experience. Please note that loading third-party content after the first render, or changes to the page caused by JavaScript rendering, can have a negative impact on CLS.

![LCP, FID, and CLS definitions](/img/blog/core-web-vitals-ecommerce-2.png)

In order to pass Core Web Vitals a page needs to meet the three thresholds listed above for at least 75% of its traffic.

CWV data is measured by Google’s database of real-user browsing data (Chrome UX report), which has two main disadvantages:

* It only measures the first-loads of single-page applications and progressive web apps, which are much slower than the subsequent lighting-fast loads.
* It is updated every 28 days, which means CWVs is somewhat of a lagging indicator.

Google has integrated CWV data throughout its tools for analyzing site performance. You can see page level results as well origin results for any site on PageSpeed Insights, and dive into your site’s performance page by page with the CWV report in Search Console.

## How to optimize Jamstack commerce sites for CWVs

Each Core Web Vitals metric can be optimized for speed on Jamstack sites, using the techniques detailed below.

### Optimizing Largest Contentful Paint

LCP measures perceived page speed. It measures the time it takes to render the largest image or text block visible within the viewport. There are many culprits that add to page load times driving your LCPs up, including:

* Slow server response times
* Rendering blocking JavaScript (most commonly used by personalization and marketing tools, e.g. unoptimized A/B testing) or CSS
* Unoptimized images or media
* Client-side rendering
* Pop-ups

The good news is that Jamstack sites have an advantage when it comes to LCP, since they’re static site generated. This means much of the content is pre-generated and able to be served immediately. Using [modern static site generators](https://www.netlify.com/blog/2021/06/02/10-static-site-generators-to-watch-in-2021/) like Next.js or Gatsby combined with best-of-breed Jamstack hosting platforms like Netlify are the ultimate solution for this.

Blocking JavaScript is a particularly bad practice, but also a very solvable one. Common offenders are personalization and optimization services that block the page load to dynamically inject content. If any service requires using scripts, we recommend you always add the async attribute. If the service doesn’t function properly this way, consider using another one, or else you’ll see the impact on your performance.

![Web perf culprit: blocking scripts](/img/blog/cwv-builder3.png)

Images are major culprits of inflated load times. Even when lazy-loaded, images can be oversized, use legacy formats, or be otherwise unoptimized. Builder and other API-driven services, including Imgix and Cloudinary, solve these issues out-of-the-box, but here’s how you can do this yourself:

* Use `<img />` and `<picture />` tags to support png, jpeg and webp formats
* Use dynamic `srcset` to deliver the optimal image based on resolution
* Jamstack tip: use the Image component of your framework to get additional optimizations (e.g. `Next/Image` or `Gatsby/Image`)

![Web perf culprit: oversized images](/img/blog/cwv-images-size.png)

The last culprit is an interesting one. E-commerce sites in particular love popups, but the Chrome UX report often counts them as the largest visual element on the page, adding up to seconds to your LCP metric. Google recommends to [avoid full screen interstitials](https://developers.google.com/search/blog/2016/08/helping-users-easily-access-content-on) however possible, which we agree with. But if you must use them, our recommendation is to only trigger popups upon user input, even if passive (e.g scrolling, mouse movements, etc.). This way, the popup will not be considered part of the full page load.



### Optimizing First Input Delay

FID measures interactivity. It measures the delay between interacting with a page and processing event handlers in response to this action. The main reason for long FIDs is hydration, which involves long running JavaScript processes to initialize a page.



Optimize your Jamstack site’s FID by ensuring you’re loading the minimal JavaScript required for the page. If you’re lazy-loading scripts to reduce blocking render times, you could still see poor FID scores if the browser is busy downloading and parsing large JavaScript files. Also avoid scroll, click, or other event handlers that run CPU-heavy JavaScript. These types of handlers will also hurt your FID.

To debug and improve FID, try profiling your JavaScript using Google Chrome’s [performance tab](https://developer.chrome.com/docs/devtools/evaluate-performance/) to see what is taking up so much execution time. Look for long running scripts (long bars on the flame graph, like below) and find ways to remove or defer that JavaScript.

![Core web vitals flame graph](/img/blog/cwv4-builder4.png)



### Optimizing Cumulative Layout Shift

CLS measures visual stability. It calculates the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page. This seems to be one of the hardest metrics for headless e-commerce sites to optimize for. Perhaps this is due to the dynamic aspect of e-commerce sites, whether used for personalization or merchandising. Regardless, injected content, embeds, ads, and even custom fonts all drive CLS scores into the red.

Thankfully, there are a few things you can do to improve your CLS score, including:

* Always specify dimensions of images, ads, embeds, etc. Using the Image components of your framework of choice will improve your CLS since they require an explicit width/height.
* Avoid dynamically injecting content, and use placeholders when needed to preserve the required space on the page.
* Preload your custom fonts and use `font-display: optional`

![](/img/blog/cls-optimization.png)

## Use Static Site Generation (SSG)

Beyond these very tactical tips for optimizing your Jamstack ecommerce site for each Core Web Vital, we also recommend you always statically generate your sites and pages. Whether it's in the browser or on the server, don’t render requests one at a time.

Always use SSG to pregenerate content on the server and push the results to a CDN. This will ensure ridiculously fast loads, and can be done relatively easily with modern frameworks like Next.js and Jamstack platforms like Netlify.

SSG is a technique where specific pages are pre-generated during build time and then served statically to users, which is extremely helpful in the case of what's classically considered dynamic pages that require several API requests to get all the information the page needs to render.

For example, a product page will require an API call to get the product data, then an API call to get all the related reviews, products, offers, etc. When using traditional server-side rendering, your visitors need to wait while all of this happens. With SSG this is all done once during the build, and served blazingly-fast.

## Conclusion

Google’s latest ranking update is based on data from Chrome UX report for three metrics called Core Web Vitals. The ranking update will roll out gradually through August 2021. Currently, most e-commerce sites fail CWVs and those that pass use very minimal design. Jamstack sites face extra challenges passing CWVs, as Chrome UX report only measures their first loads, neglecting their blazingly-fast subsequent loads.

In this post, we have shared proven techniques to optimize Jamstack e-commerce sites for ‘good’ LCP, FID and CLS scores. These are techniques we have learned doing Jamstack for large e-commerce sites for years and are built-into the Builder platform.

Combining the above techniques with a best of breed Jamstack hosting provider like Netlify will ensure best possible performance for your site visitors, and significantly help you pass Core Web Vitals.
