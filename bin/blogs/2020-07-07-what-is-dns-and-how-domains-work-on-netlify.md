---
title: What is DNS and How Domains Work on Netlify
description: Netlify and Name.com have teamed up to offer domain names in
  Netlify’s platform. Learn the basics and how to set up DNS records or use the
  in-flow DNS hookup with Netlify.
authors:
  - Jared Ewy
  - Sarfaraz Rydhan
date: 2020-07-07
lastmod: 2020-07-08
topics:
  - tutorials
tags:
  - domain
  - domain names
  - dns
  - netlify
tweet: ""
format: blog
relatedposts:
  - Buy and secure a custom domain through Netlify
  - How to Set Up Netlify DNS - Custom Domains, CNAME, & A Records
seo:
  metatitle: Learn More About DNS Basics + How Domains Work on Netlify
  metadescription: Netlify and Name.com have teamed up to share insights and
    resources about DNS. Learn more about TLDs, DNS Records, Nameservers, and
    more. And how domains work on Netlify.
  ogimage: /img/blog/plugins-og-39-1-.png
---
Netlify and Name.com have teamed up to offer domain names in Netlify’s all-in-one platform. Netlify uses Name.com’s API to integrate domain purchasing and [DNS setup](https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-a-records/) within your sites, projects, and deployment processes. When you get a domain name from Netlify, their engineers have made it possible to configure the DNS automatically (as well as free SSL through Let’s Encrypt). And that’s amazing. It's so nice to have this all set up for you Like Magic™, but it's still good to have a foundation of what DNS is and how it works.

Some of the top domain extensions (TLDs) registered at Netlify:

![TLDs available to register on Netlify](/img/blog/1-netlify-domain-names.jpg)

1. .com
2. .net
3. .rocks
4. .codes
5. .live
6. .wtf
7. .io
8. .co

DNS is an important part of--well, it’s pretty much the part of the internet that helps network humans to computers. It’s what keeps our Dells from going Skynet on us. Ok, that may not be entirely true, but it’s nice to know how to take full control of your online presence.

## What is DNS

**A defining moment**

Understanding DNS is important to fully harness the capabilities of online computing. What you can do with one domain name, for example, is profound if you understand the Domain Name System (DNS). 

The impetus for DNS is actually pretty simple. At its core, computers are very good with numbers and humans are very good with names. DNS puts names to what otherwise is a number.

![DNS management A records example](/img/blog/2-netlify-manage-dns.jpg)

*The name points to the number. Here you see the domain `gadgetress.rocks` pointing to the IP address.*

Despite declaring that DNS is simple, it is very easy to get lost in the details. When people speak, they start to geek. That’s when you could get taken down a tortuous path of overwhelming detail. 

Before we get too deep, we should probably go over some core DNS terminology.

**What is TLD? TLD stands for Top-Level Domain.** It’s anything to the right of the dot in the web address. The .com in Netlify.com, for example. 

**What is SLD? SLD stands for Second-Level domain** and is anything to the left of the dot. In our example, it would be Netlify. 

**What is a Nameserver?** Nameserver is an internet server that points your domain to a hosting provider, and an important component of DNS records. 

**What are DNS records (or entries)?** They are typically called records, and there are well over a dozen different DNS record types that serve different purposes. 

Let’s dive into the four most common DNS records. How they work helps create a picture of the Domain Name System functions as a whole.

## DNS Records

#### The A Train – A Records

A records are called Address Records or sometimes Host Records. These records point your domain to the IP address of your website or hosting. Let’s say that you own the domain name thiscode.rocks. It is hosted at Name.com and the IP address of your hosting server is 127.0.0.1. Usually you would have two DNS records to point your domain to the hosting that look like this:

* `A   	thiscode.rocks             127.0.0.1`
* `A	*.thiscode.rocks         	127.0.0.1`

In this example, the first A record is pointing to the “bare” version of your domain. That means when someone goes to their browser and types in the domain name without www, it will resolve to the right server and website. The second A record is the wildcard version. This redirects any subdomains to your domain to the server; this includes www, and anything else people may type before your domain name.

You’d set up any specific subdomains the same way. So, if in the example above, you wanted to make a subdomain called `test.thiscode.rocks`, then you would create an A record that looks like this:

* `A	test.thiscode.rocks	127.0.0.1`

#### C, this is what we’re talking about – CNAME Records

CNAME stands for Canonical Name Record. CNAME records only resolve to domains and subdomains. A CNAME record points one of your subdomains to a different domain name. A CNAME cannot be set up on your bare domain (without the www.) You could set up a CNAME record on www.Name.com but not on simply Name.com. One thing that CNAME records are commonly used for is to direct a part of your domain to a site you have set up elsewhere, such as an eCommerce shop or something similar.

#### Don’t MX things up – MX Records

MX stands for Mail Exchange. Think email. MX records are used to direct emails sent to your domain name (like `coder@thiscode.rocks`) to the correct server so it can then be sent to your specific email address. Your email provider will provide you with the necessary MX records for your email. If you have email with Name.com, you can use our DNS Templates to automatically add the right records. Keep in mind that you can only have one set of MX records on your domain. All of your mail needs to be directed to the same place, and will then get sorted from there. This means that you cannot have two separate email providers on one domain. It also means that any email forwarding you set up has to be set up with your email provider, and not on the domain itself.

#### If you could just TXT, please – TXT Records

TXT just stands for Text. TXT records point to, for example, which computers can send mail on your behalf.

TXT records do not change anything on your domain, but they can be searched for your domain. These records tell other services about your domain, and are good for privacy and security purposes such as reducing spam email and verifying your ownership. Google, for example, will ask you to add a string of characters to a TXT record, so that they can search for the record and verify that you are the domain’s owner and have access to the domain’s DNS records.

Let’s jump on an A Record and take the journey from the web address in your head to the computer that can serve it up!

- - -

## What is DNS

**A Journey on the A Train**

So let’s take the A train (if you will) on the journey of an A record doing it’s job. When you type in [Netlfy.com](https://www.netlfy.com/), your computer first checks the cache. It consults with your browser and then it checks your operating system. Often deleting your cache is the go-to fixer for browser issues, so let’s say your cache comes back empty. 

Now your computer’s browser sends your search for Netlify.com to the recursive server. It lives with the ISP (Internet Service Provider). Name.com is in Colorado and, for the most part, we have Comcast and Centurylink. They have incredibly busy servers that are the workhorse for this journey. 

The recursive server sets out to resolve (it’s called a resolver, actually) your query quickly. Its first stop is the root server. Aptly named because they are the root to the DNS hierarchy in servers placed all around the world in 13 DNS root zones. The root zone checks to determine the domain extension. In this case it’s a .com. After the root server responds to the recursive resolver with the fact that it’s a .com, our request is pointed toward the .com TLD. The recursive resolver makes a request to the .com TLD’s server.

![DNS records common errors troubleshooting guide](/img/blog/3-netlify-dns-troubleshooting.jpg)

In this case for Netlify, the TLD server verifies the .com but then pretty much says that’s all I’ve got. So the .com has been confirmed and the search continues to where the domain name is registered. This is the left side of the dot. Netlify dot com is registered at a domain registrar, and that registrar will have the authoritative servers. 

This is where you and your domain come in. You've either set up the DNS records yourself or had a convenient in-flow DNS hookup like what you’ll find in Netlify. These are the servers that point to the computer that hosts your website’s data. The recursive resolver, now down to it’s final chore, sends a query to one of the domain’s authoritative nameservers (these are the ones you set up via Netlify or directly at the domain registrar like Name.com). You have now accessed the server that has the data. The website you’ve requested has been cracked open by the query and, after an HTTP request from the browser, will pour forth its contents onto your computer.

![DNS example guide graphic](/img/blog/4-netlify-dns-tacos.jpg)

There you have it. Troubleshooting, metaphors, and even more metaphors. The concept is simple but it mostly takes setting up your first records. You’re in control of making things happen (and screwing things up). That’s why Name.com is here to help and Netlify can do it automatically for you!

- - -

*This post was contributed by Name.com.*

About Name

[Name.com](https://www.name.com/) is a Denver-based domain registrar that helps people get online and get noticed. We offer website hosting, email, website builders, SSL certificates, and an API that the likes of Netlify uses to disperse automagic DNS configuration. We also have the most dedicated customer support team in the business. Learn more about what we do, why we do it, and how we can help you achieve your online dreams by visiting Name.com.

About Netlify

[Netlify](https://www.netlify.com/) is a San Francisco-based cloud computing company that offers hosting and serverless backend services for web applications and sites. At Netlify we want the web to win. We empower developers to create the modern web through our platform that includes continuous deployment from Git across [Netlify Edge](https://www.netlify.com/products/edge/), our global application delivery network, alongside form handling, serverless AWS Lambda functions, an SSL integration with Let’s Encrypt, and more.
