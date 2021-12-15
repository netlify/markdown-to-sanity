---
title: How to Earn Cryptocurrency with your Netlify Site
description: >-
  An easy way to dip your toe in the crypto waters and earn Basic Attention
  Tokens when people visit your site!
authors:
  - swyx
date: '2018-11-02'
topics:
  - tutorials
tags:
  - Cryptocurrency
  - DNS
tweet: >-
  An easy way to dip your toe in the crypto waters and earn Basic Attention
  Tokens when people visit your site!
format: blog
---
In this blogpost, we'll show you how to set up your Netlify site as a Basic Attention Token (BAT) publisher in minutes. What better way to get started earning your first cryptocurrency?

## What is the Basic Attention Token?

We're passionate about empowering creators here at Netlify. That's why we took notice when Brendan Eich, the creator of JavaScript, launched the Basic Attention Token, which turns that empowerment into a literal attention economy.

BAT breaks the [Gordian knot](https://en.wikipedia.org/wiki/Gordian_Knot) of poor user experience, privacy-invading ads, and poor returns to publishers, offering you the chance to be directly and transparently paid by the people who visit your site.

In [Brave Software](https://en.wikipedia.org/wiki/Brave_(web_browser))'s words:

> **Basic Attention Token** radically improves the efficiency of digital advertising by creating a new token that can be exchanged between publishers, advertisers, and users. It all happens on the Ethereum blockchain.
>
> The token can be used to obtain a variety of advertising and attention-based services on the BAT platform. The utility of the token is based on user attention, which simply means a person’s focused mental engagement.

We think it's interesting how they propose to fundamentally reshape the dynamic between publisher, advertiser, and user:

![https://basicattentiontoken.org/images/bat_triad_diagram.png](https://basicattentiontoken.org/images/bat_triad_diagram.png)

You can read more on [their site](https://basicattentiontoken.org/) and [whitepaper](https://basicattentiontoken.org/BasicAttentionTokenWhitePaper-4.pdf) if you choose, but just know that **visitors to your site will never be charged without their consent**. In fact you will only be earning BAT from visitors who specifically use the [Brave browser](https://brave.com) and have set it up to pay publishers who opt in. Publishers like you!

## 5 Steps to Crypto

We'll assume you already have a Netlify site deployed with a [Custom Domain](https://www.netlify.com/blog/2018/06/19/buy-and-secure-a-custom-domain-through-netlify/) set up. You can buy one through us (😎), or if you already have one, [you can point your domain to us](https://www.netlify.com/docs/custom-domains/#assigning-a-custom-domain) for free.

1. [Sign up](https://publishers.basicattentiontoken.org/publishers/sign_up) for a Brave account with your email.
2. You will receive a verification email, which will take you to your [Creators Dashboard](https://publishers.basicattentiontoken.org/publishers/home).
3. Scroll down and click on **Add Channel**, and then **Website**:

    ![BAT signup](/v3/img/blog/batsignup.png)

4. Enter your domain, and choose a verification method.

    ![batsignup2](/v3/img/blog/batsignup2.png)

5. Implement your chosen verification method. If you choose the trusted file method, you can follow their instructions, or you can go the DNS route and [add the DNS records](https://www.netlify.com/docs/dns/#adding-dns-records) in the Netlify UI:

    ![batsignup3](/v3/img/blog/batsignup3.png)

After the verification process, which took a few minutes for me, you will have completed the setup process! From now onward, when someone who has set up the Brave browser to pay publishers visits your site, you will be earning BATs!

## Tweet us your new BAT Publisher sites!

We are obviously in the early adopter stage of where all these cryptocurrency ideas could be going, and we don't endorse or recommend any crypto asset as a company. But when the creator of JavaScript makes a whole new attention economy for the web, and it is so easy to try it, we just had to!

If you managed to make it to the end of this article and have a brand new BAT site on Netlify, [tweet us](https://twitter.com/Netlify)! We'd love to check it out, Brave browser in hand!
