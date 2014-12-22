---
layout: post
title:  "BoW Windowing Analysis on CNN matching for Backpage data"
categories: CNN BoW-SURF backpage
---

Context
-------

Brute force CNN matching across 130K Nevada images from Backpage takes nearly 1 hour per image on the memex clusters
(CNN `pool5` features pre-computed; matching using `cosine`-distance). Primarily because of slow disk access - as I can't store
all features on memory (each feature descriptor is 256x6x6 D)

Based on my experience from Hussian hotels, initial BoW filtering doesn't reduce the retrieval accuracy a lot
(results shared over email on Sept 29/30, 2014).

Approach
---------

Now that I've a scalable BoW implementation, I tried the same thing for Backpage data.
Using SURF-BoW to initially re-rank images,
the test time is ~4 sec/image (vocabulary size 5000). Uses a disk-based index (~500MB), which took ~1 day to build.
Then I use Brute-force CNN feature matching for top-100 matches from above. This takes another 3-4 secs.


Results
-------

[Qualitative Results](http://10.3.2.61/~ubuntu/projects/001_backpage/results/006_BoW+CNN_Nevada500/BoWResults/1.html)
(VPN to memex)

The first row is the top matches after filtering with BoW
The second row is without filtering (Brute force matching over 130K images)


Quantitative evaluation in this case is hard, so I computed the IoU scores of 
the top 10 elements in the rank lists of each method (in the results above).        
Average IoU = 0.103890 => ~2 images are common between the lists, out of which 1 will be same as the query itself.

The number doesn't look good, but, I think it is misleading.. and more qualitative analysis would be useful.

