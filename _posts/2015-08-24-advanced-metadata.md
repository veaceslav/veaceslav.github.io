---
layout: post
title: Advanced Metadata Hub implemented
categories: [KDE]
tags: [digiKam, KDE]
---

One and a half months passed since the mid-term evaluation and now is the time to write down about
final result. I was somehow surprised that I managed to finish everything on time (just one day after the firm pencils down date, so almost on time). The reason of me always being late with implementation is the amount of unexpected complications that my appear while I implement mu project.

Since my project is done lets take a quick overview of new features that digiKam will include starting from next 5.0.0 release.
The first one: More user control over metadata namespaces and how digiKam handles read and write.
Compared to mid-term screenshot, the settings menu responsible for managing namespaces is fully functional and was redesigned to be more intuitive and easier to use. Also, more tips were added and button icons are in place.
![My helpful screenshot]({{ site.url }}/assets/images/2015-08-24/settingsmenu.png)

It allows full control over existing namespaces, such as adding, deleting, reordering and disabling namespaces. Because it is such a low level functionality, we had to enforce restrictions on what can be done in this menu, to avoid unexpected results.

First, we have a number of default namespaces which digiKam was using before. Default namespaces can't be deleted or edited. They can only be disabled. These entries are essential for digiKam,
so I decided that users might delete it by accident and then will be very hard to recover without a reset to default. Some namespaces hold special parameters designed for particular cases, so editing them is a bad idea, hence, the disabled edit.

The most powerfull part of this menu comes from reordering and disabling namespaces. The order is important for reading tags, rating and namespaces. digiKam will search for tags, comments and rating in given namespaces and return the first non-empty result. If you know that you have images tagged with a different program, you will like to prioritize that namespace.

The second powerfull option is disable. The list of namespaces is quite big, for greater compatibility. If you don't need them all, disable the ones you don't use, so metadata will be easier
to read.

Another important option comes with unified read and write. If this option is checked, both read and
write methods for seting and geting tags,rating, comments will use the same list. Previously this information was written for each method and some patches forget to fix both read and write. The result, you delete metadata and it keeps reappearing.

This concludes namespace changes operated on digiKam. Now it is the time for the second part of
the project: Lazy Metadata Syncronization

Before, digiKam was syncronizing metadata when you just applied a tag, rating or comment to an image.
Since some people use slow hard-drives, or collection is somewhere on NAS, writting metadata is a long process even for few files. Users were experiencing constant slow-downs.

With the new approach, we apply changes to database and keep a list of files to be syncronized later.

As you can see from screenshot, when you enable lazy syncronization in the menu, a new status item
will apear, which will inform you that there are no pending images for syncronization.
![My helpful screenshot]({{ site.url }}/assets/images/2015-08-24/nopending.png)

After you applied tags, ratings and comments, the status bar will inform you that there is a number of images which await syncronization.
To apply changes, you can use the button on the status bar. Also, when digiKam closes, changes are applied automatically.

![My helpful screenshot]({{ site.url }}/assets/images/2015-08-24/pendingImages.png)

This concludes my list of changes. Hope you will find my improvements useful. Use digiKam and 
have fun!
