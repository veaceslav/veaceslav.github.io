---
layout: post
title: Protecting your data and forensinc investigatons
categories: [General]
tags: [legal, general]
---

Saturday was supposed to be a day off for me, and I wanted to relax.
Not until a relative of mine came with unusual request. Before digging deeper into the
problem, I should first describe the context.

Living in a corrupt country like Moldova makes life very complicated for onest people
which work in governmental structures. Since everything is controlled by local mafia,
you must be very careful not to dig something about their affairs.
This is my case for my relative, who works in police department. After sending an investigaton
case to other departmets, he was suddenly suspended from it's position and unknown persons began to
intimitate him. He did a forensinc course in Italy and he knew that computer hard drive may contain
sensitive information even after being deleted.

Somebody will ask: "if he didn't do anything, why bother?" Actually you must bother.
It is very common for your superior to send you back and modify your report, so it will fit
it's needs. You can't fight that, it is an order. And now, this can play against you, since
they will get your working station and say that you are responsible for fake reports. He asked
me to wipe his hard-drive to the point were no previous data can be recovered.

Now, back to technical part. This is not the type of job I like. It is not related to programming,
but to computer maintenace and system administration. For everybody, it is a little bit of magic
wht happens on hard disk. To keep it simple, you need space to store your content, but you also need 
to find it fast. So, with the content side by side, file system also have a table, where it will
search for filename, find the starting position on disk and jump to that position.
For performance reasons, when a file is deleted, only the entry is removed, and the data is still there. That why forensinc tools or other utilies can recover deleted files.

The troubles do not stop here, some techniques can even recover data even if something was written on top of it. To ensure a safe delete, you must write over the same place few times. Then data dissapears for good.

Now I booted into the system and see the worst case scenario: The whole disk has one partition:
Disk C. You don't know where the old data is, so you need to wipe whole disk, then reinstall the system. And this is what I'm doing now. To write zeros 7 times on 290 Gb disk, it will take 10
hours. And that what I'm doing now: Waiting for wipe to finish. If you are in a hurry, you are
busted. Imagine if you had one 1 Terabyte disk. That would took days to wipe.

My suggestions for everybody who may have similar problems:

* Have a small partition(15 Gb) with your sensitive data. Increase the size if you have videos or other large files, but try to keep it small
* You don't need to wipe the whole disk, only the partition that contained sensitive data
* Set up disk encryption if you can. System may be slower, due to decryption needed, but is a very secure way to protect everything
* Avoid using bios hard-drive password. It is usually weak and easy to bypass
* Have a program that can wipe disk always ready. (CCleaner for example)
 
It is easier to make a correct setup than to regret later.
