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

**Update**Tue 16 Dec 2014 12:53:19 PM EST 

New Dataset
-----------

I collected new People At Landmarks dataset, and the qualitative results on the ESVM on background vs full image are 
[here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/013_ESVMWithSeg/results3/publish/esvm_matches_with_people_masked/esvm_matches001.html)

Quantitatively,
 
```txt
With masking
------------
mP1 = 0.472574
mP3 = 0.367089
mP5 = 0.279325
mP10 = 0.191561
mP20 = 0.127637
mean recall 20 = 0.324321
at least 1 hit in 3 = 0.624473
at least 1 hit in 10 = 0.759494


Without masking (update - Tue 16 Dec 2014 10:23:17 PM EST)
---------------

mP1 = 0.447257
mP3 = 0.324895
mP5 = 0.260759
mP10 = 0.180169
mP20 = 0.119831
mean recall 20 = 0.300308
at least 1 hit in 3 = 0.573840
at least 1 hit in 10 = 0.742616

```

#### Note
- I remove the top match while computing the above numbers - since that is always the image itself.
- The evaluation was done for NxN retrieval (each image in training data was also the query).
- `recall-20` means the # of images from that class that were retrieved in the top 20.


Old Results
-----------

[Here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/013_ESVMWithSeg/results2/publish/esvm_matches_with_people_masked/esvm_matches001.html)
are the results following a similar evaluation as for Gym Selfies.
Each image has 2 rows, one without masking and next with masking.

Some interesting results:     
[6](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/013_ESVMWithSeg/results2/publish/esvm_matches_with_people_masked/esvm_matches001.html#row5) Observe match 4   

Will add more comments/observations as more results get computed.
(Couldn't set it up earlier as was a little busy with end-sem projects, assignments etc..)


