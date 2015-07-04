---
layout: post
title: GSoC Midterm, Advanced Metadata Hub
categories: [KDE]
tags: [digiKam, KDE]
---

This is my 3rd consecutive year when I participate in Google Summer of Code program.
All three years I have been working on digiKam, an open source program for image management.
digiKam offer extensive tools for managing image collections such as tagging, quality sorting and managing image metadata. Metadata is usually human readable strings embedded into image.

The project that I'm currently working on is called Advanced Metadata Hub. Until now,
digiKam was able to read and write common metadata such as ratings, comments and tags into
image. To avoid confusion, metadata is structured in key, values pairs, so each program will
know where to read and what information to expect.

Until know, the keys were hard coded in digiKam sources and when user request for a new
metadata to be supported, that list must be manually extended by developer.

I'm working on building a settings menu, which will allow users to manage where the metadata is being written and also change some of default behavoir:

* Changing the order of where digiKam should search for data
* Unify read and write
* Disable or enable some keys

Due to midterm evaluation I was able to implement a good part of settings menu:

![My helpful screenshot]({{ site.url }}/assets/images/settings.png)

And some changes for underlying classes to save and load changes.
The project seem simple, but there are some tricky parts:

* Different keys need a special wrapping of information
* Storing tags, you must take care to put both paths and keywords
* Non unified read and write of metadata can lead to inconsistent behaviour

I'm looking forward to see the final result, and I hope it will be an amazing feature.