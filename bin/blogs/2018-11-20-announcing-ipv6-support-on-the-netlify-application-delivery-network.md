---
title: Announcing IPv6 support on the Netlify Application Delivery Network
description: Announcing IPv6 support on the Netlify Application Delivery Network
authors:
  - Ricardo Bartolomé
date: '2018-11-26'
topics:
  - news
tags:
  - IPv6
  - adn
  - cdn
tweet: ''
format: blog
---
Every server and device that is connected to the internet has a unique IP address. In 1981, [RFC 791](https://tools.ietf.org/html/rfc791) (“Internet Protocol”) defined an IP address as a 32-bit entity, which provides a theoretical total amount of 4.3 billion unique addresses. These are known as IPv4 addresses and take the form of 4 numbers between 0 and 255, like `167.99.129.42`.

For a long time, the amount of IPv4 addresses  served the world well, even though a portion of them are reserved for special purposes. Nevertheless, with the growth of the internet, the [pool of public IPv4 addresses is almost empty](https://en.wikipedia.org/wiki/IPv4_address_exhaustion). Internet providers, companies, and governments have been forced to get creative, relying on solutions like [network address translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) and lately [carrier-grade or large-scale NAT (CGN/LSN)](https://en.wikipedia.org/wiki/Carrier-grade_NAT).    

As a solution for this IP address capacity problem, a draft of the new version of the Internet Protocol ([IPv6](https://en.wikipedia.org/wiki/IPv6)) was published in December 1995. IPv6 defines an IP address as a 128-bit entity, which offers 37 orders of magnitude more addresses than IPv4.

So, instead of the integer-based IPv4 addresses such as `167.99.129.42`, an IPv6 address would look like `2001:0db8:85a3:0000:0000:8a2e:0370:7334`. While the IPv6 format is more difficult to recite or remember, it creates vastly more possible addresses to help support the rapid growth of the internet.

Despite the trade-offs and costs derived from carrier-grade NAT solutions, IPv6 is not widely used yet. IPv6 adoption is still less than 30% in most of the member countries of the [OECD (Organisation for Economic Co-operation and Development)](https://en.wikipedia.org/wiki/OECD) according to [Akamai’s State of the internet report](https://www.akamai.com/uk/en/about/our-thinking/state-of-the-internet-report/state-of-the-internet-ipv6-adoption-visualization.jsp), and [only around 21% of the Alexa Top 500 sites support IPv6](http://www.delong.com/ipv6_alexa500.html).



## The road to IPv6 support

We have been keen to ship IPv6 support for quite some time, and are delighted that we can finally bring it to our customers. You might be curious about why this has taken longer than we had hoped, so here’s a little background:


- Netlify’s global [Application Delivery Network (ADN)](https://www.netlify.com/features/adn/) is deployed across [multiple cloud providers](https://www.netlify.com/blog/2018/05/14/how-netlify-migrated-to-a-fully-multi-cloud-infrastructure/), so evaluating the support for IPv6 in each of them took us some time. All major cloud providers offer IPv6 support, but most of them only support it in their load balancers. To fully support Netlify’s infrastructure we need IPv6 to be supported down to the instance level. Unfortunately, that is not yet available in all of our cloud providers. To properly handle scalability, feature parity, TLS compatibility, and other complexities inherent in providing a system which runs across multiple cloud providers, we needed to adjust many aspects of how we interfaced with those providers.
- Several of our production services needed to be adapted for IPv6. For example:
  - Our ns1controller service, written in Go, that is in charge of cache node health and DNS orchestration, needed to be migrated in addition to having its logic adapted.
  - Our DDoS and throttling systems needed to be updated so we could also react to attacks directed to us over IPv6.
- Internal tooling used by our Platform, Support, and other engineering teams needed to be reviewed and adapted accordingly. This includes internal diagnostics tools, logging frameworks, and a long list of components.

And the list goes on! Since the platform we provide at Netlify is meant to normalize and simplify the experience for people deploying to our infrastructure, there were quite a few more interesting technical challenges for us to clean up. The intention is that most developers would never need to worry about those deeper implementation details below the surface.


## Are we there yet?

We are delighted to announce that we have begun the rollout of our IPv6 support across our global [ADN](https://www.netlify.com/features/adn/). What should you expect?


- If you are serving your sites on a subdomain of netlify.com such as `your-site.netlify.com` you have nothing to do. Your sites will automatically begin using IPv6 on our ADN without any intervention from you.
- If you are using custom domains registered from an external domain registrar, you will also automatically begin using IPv6 on our ADN without intervention.
- If you use Netlify for [DNS management](https://www.netlify.com/docs/dns/), then you can go to the Domains section on our dashboard and enable IPv6 for each of your domains.
- If you are an Enterprise customer using our Enterprise ADN infrastructure, we advise you to contact our [support team](https://www.netlify.com/support/) or your account manager to ensure that your specific configuration is migrated to IPv6 appropriately.
- If IPv6 support is an important feature for you, and you have a more complex or bespoke DNS configuration, our [support team](https://www.netlify.com/support/) can advise you on how and when you can expect to have IPv6 support.


As the rollout of IPv6 support continues, more and more visitors on IPv6 enabled connections will be served from Netlify’s IPv6 network. The need for NAT or special IPv6-to-IPv4 network translation (usually provided by the ISP, adding inefficiencies and other potential problems) will disappear.

IPv6 support is an important step towards a greater, wider, more prosperous internet. And we hope to see more and more support for it across all ISPs, and cloud and content providers.

If you have more specific questions about how this upgrade across our network might impact your own configuration, you can contact our [support team](https://www.netlify.com/support/).
