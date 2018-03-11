---
templateKey: blog-post
path: /schedule-a-d3-report
title: Scheduling a D3.js Report
date: 2016-11-03T15:04:10.000Z
description: Scheduling a report that is generated using d3 can be tricky, here's a solution I came up with.
---

About 4 months ago I had a problem. I needed to find a way to send out the reports generated from our app at work into various formats like HTML, CSV, & PDF. Sounds easy right? That’s what I thought too… Here were some of the main initial issues:

We have these pretty sweet d3 charts and we want those in an email. (yes, that’s right… d3.js charts in an email)

* The data in these charts (and reports for that matter) need to look just like they would in the app.
* This also needs to be a scheduled process that the user shouldn’t have to do every time they want to send one of these reports out.

After reading over those it doesn’t seem too bad right? I mean I’m sure in this modern JavaScript world that we live in that there’s some library that does this. I’m not the first one to think of this right? Well while there are solutions, it’s not quite that easy.

So being the Software Developer that I am, I did some research and development and when I say some I actually mean a lot. The first thing that I found was that converting an SVG into Canvas and then into a PNG is possible but complicated and even then it wouldn’t solve all the issues. The second was that if there’s a common issue that many people face, then there most likely some sort of solution. After about almost a week I kept getting redirected to stuff talking about phantomjs and how you could do a screen capture and convert it into a png.

Then what was a pretty successful session of research became a rather tricky development, at least initially. It took me a while to wrap my head around some of the core concepts behind headless browsers/webkit and how I could leverage them to solve my problems. So I decided to spend some time using it outside of work and seeing what I could do with it. I also found a few libraries built on top of phantom that were more appealing to me and made it faster for me to develop my ideas. Eventually I came across node-horseman and decided that was exactly what I would use at work.

So naturally I built a prototype that I could show off as a proof of concept before I got the rest of my team to sign off on it. ( feel free to check it out ) I also ended up finding a few more issues in the process but with every issue seemed to come at least a couple of possible solutions to solve it.

At this point I had a viable solution for the issues that were first presented to me as well as some others that I found along the way and here is the final approach to generating our scheduled d3.js reports.

So here what I would suggest to anyone that has similar issues to solve.

## Find a library that works for you

For me it was node-horseman but there are others out there like caperjs and nightmarejs each are open source and have their own benefits. What made me choose node-horseman was that I could run it in node.js, it had a pretty well explained API, it was based off of phantomjs, and the code was still being maintained and updated.

## Log in to your app

That was by far the biggest hurdle our team faced with this because it meant reworking our authentication. But we ended up leveraging cookies to log in as the user to generate the correct report & report data.

## Capture what you need

Since we had control of this node-horseman script and our front-application it was easier to show the data exactly how we wanted to and hide some elements of the page that we wanted to hide. Some key learnings for that were using media print for capturing PDF’s and using evaluate functions to run JavaScript in the DOM of the headless browser in order to manipulate that page before capturing it.

## Synchronous vs. Asynchronous

Since JavaScript is asynchronous it could be tricky passing values to and from the headless browser environment and node environment. Making some code changes or even leveraging the use of another library in order to make the code run synchronously might help with that. (at least it helped us out a ton).

## Use a queue system

This one depends on a few things but it really comes down to not mixing data between headless browser sessions and limiting the amount of scheduled task that run at once. Queues.io has a bunch of options for this type of system.

## Decide where to save the files

For us it came down to s3 or our database. We decided s3 due to the nature of the files. Since they will never be referenced by us or reused after sending them to the client, it made more sense to leverage s3 for saving the captured files.

## Send them out
There’s a few libraries out there for sending out emails but we already use nodemailer in our app so it was a no brainer really.