---
title: "Improving and Extending the Voter Experience: Democracy Works deploys
  with Netlify"
description: Democracy Works is a nonpartisan nonprofit that builds tools to
  upgrade the infrastructure of American democracy and improve the voting
  experience for voters and election officials. Working with Netlify ensures it
  can handle traffic spikes and better serve its partners and users.
authors:
  - Netlify
date: 2020-07-01T00:00:00.000Z
lastmod: 2020-07-01T00:00:00.000Z
topics:
  - case-studies
tags:
  - Deploy
  - Case Studies
tweet: Learn how Democracy Works handles big traffic spikes with Netlify
format: blog
relatedposts:
  - How TunnelBear Streamlines DevOps and Speeds up Deploys by 10x with Netlify
  - How CNCF enables community-sourced ecosystem map with Netlify deploy previews
seo:
  metadescription: See how Netlify enables Democracy Works, a nonpartisan nonprofit improving the voting experience, to feel confident about handling huge spikes in traffic.
  ogimage: /v3/img/blog/og-netlify-and-democracy-works.png
  metatitle: Learn How Democracy Works handles huge traffic spikes with Netlify
---
## How Democracy Works deploys with Netlify to ensure smooth handling of big traffic spikes

Democracy Works is a nonpartisan nonprofit that builds tools to upgrade the infrastructure of American democracy, and improve the voting experience for voters and election officials. It works with colleges and universities, election officials, and corporate and nonprofit partners to increase civic participation and voter turnout. It hosts 500 partner sites on Netlify. 

Democracy Works built [TurboVote](https://www.democracy.works/tools-for-voters), an online tool that sends election reminders to over 7 million people, with information about how, when, and where to vote. Its Voting Information Project works directly with election officials to gather information for almost all local, state, and national races. It also built [Ballot Scout](https://www.democracy.works/ballot-scout), a ballot tracking service that provides transparency to the mail voting process.

![Register to Vote graphic from Democracy Works](/v3/img/blog/democracy-works-vote-image-2.png "Democracy Works is a nonpartisan nonprofit that builds tools to upgrade the infrastructure of American democracy.")

### Challenge

Democracy Works has an engineering team of 23 people. Prior to Netlify, it did custom website deploys, which was time and resource consuming. The challenge was particularly acute during voter registration periods, when Facebook, Snapchat, Instagram and others sent a huge amount of traffic to TurboVote, Democracy Works’s online tool that texts or emails people voting reminders, instructions and forms. Democracy Works needed to reliably host assets during traffic crunch times, such as National Voter Registration Day, and to test URLs ahead of time. “Election traffic is spiky. That’s the interesting problem we have that not a lot of other places do,” says Christopher Shea, Democracy Works’s vice president of engineering.

### Testing Netlify

Democracy Works discovered Netlify for one of its smaller projects, Ballot Scout, that enabled a good test of the technology. Ballot Scout tracks ballots through the mail stream, and provides notifications to users when ballots are received and counted, building trust in the mail voting system. After Ballot Scout, Democracy Works deployed Netlify for TurboVote.

The big issue for Democracy Works was having multiple frontend branches in flight, and needing to test them separately, a feature that Netlify provided that the nonprofit lacked.

“We were really excited about the ability to have staging environments and deploy previews,” says Gordon Stratton, principle engineer for Democracy Works. Given Netlify’s features, “it is easier to have it done for us,” Stratton says. The integration “was smooth and the automation was really nice.” Netlify’s command line tools also easily enable local previewing before changes are made. 

Before Netlify, Democracy Works did custom deploys. It evaluated other options but chose Netlify because it “fit really well,” with what the team needed, Stratton says, and “working with the Netlify team was a pleasant experience.”

The big test was moving to host TurboVote sites on Netlify. The first partner site to move was one that Facebook used. It was 2018 and the primary elections were approaching. Texas was the first state to put Netlify and Democracy Works to the test. “There was no ramp up for us. We didn’t get to practice with a small state like Delaware or Wyoming,” says Shea. “We needed to be confident early on, that however we were hosting the static assets for TurboVote, that it would be a robust solution that could handle state level Facebook traffic.”

### Results

The [TurboVote](https://turbovote.org/) migration was smooth, and big spikes in traffic were handled. Working with Netlify ensures Democracy Works can handle such spikes and that it can serve its partners and users. Netlify did not require changes to Democracy Works engineering workflow, and it makes it easy to preview changes and share that information before changes are made. Previously, such sharing was cumbersome. Also, Netlify, which handles the frontend of the sites, caches requests and relieves some of the pressure on Democracy Works’s backend technology.

Netlify enables Democracy Works to feel confident about handling huge spikes in traffic and better serve the electorate.

> “There is probably no quicker way to get your prototype into production than with Netlify,” Stratton says. “You can start small and grow with the company.” 

Given Democracy Works’s relatively small team, Netlify “takes a lot off our plate” because it no longer worries about scaling when social media sites bring in large loads of traffic. That enables Democracy Works to spend more time serving users in other ways.

Netlify is also optimal for developer deployment comfort, and Democracy Works looks forward to future Netlify features and improvements that make workflows even easier. 

---

Have a project in mind? One of our experts would love to [talk with you](https://www.netlify.com/enterprise/contact/) about the use-case and requirements.