---
layout: post
title:  "ESVM on background for PeopleAtLandmarks dataset"
categories: matching gym_selfies
---

### Dataset

I collected a dataset of images of people taken at famous landmarks.
Couldn't get a lot of indoor images as people mostly take photos outside.
As of now I've 9 landmarks and total ~2200 photos.

I collected these images from Facebook, by logging in with my account and performing a graph search query for "Photos taken at XYZ" (returns mostly public photos).
I downloaded first 300-400 results returned by that query.
The reason I used FB instead of google images was that google didn't give many images with people in them, and "selfies at X" queries had a lot of junk images.

The dataset is [here](https://www.dropbox.com/sh/iwvzblqj3twe1wq/AAAMN98tJEqeUg51cGBuaKFea?dl=0).

### Results

[Here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/013_ESVMWithSeg/results2/publish/esvm_matches_with_people_masked/esvm_matches001.html)
are the results following a similar evaluation as for Gym Selfies.
Each image has 2 rows, one without masking and next with masking.

Some interesting results:     
[6](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/013_ESVMWithSeg/results2/publish/esvm_matches_with_people_masked/esvm_matches001.html#row5) Observe match 4   

Will add more comments/observations as more results get computed.

