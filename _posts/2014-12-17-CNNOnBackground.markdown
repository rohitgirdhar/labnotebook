---
layout: post
title:  "CNN on background for PeopleAtLandmarks dataset"
categories: matching CNN segmentation
---

For comparison, I also tried global CNN features performance for retrieval on PeopleAtLandmarks dataset.
I use ImageNet model `pool5` features, computed for the (1) whole image, and (2) after replacing the segmented part with the mean image.

The qualitative results are [here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/014_CNNWithSeg/CNNResults/publish/esvm_matches_with_people_masked/esvm_matches001.html).
It also shows image that was used to compute features (in the masked case). 


Quantitatively, (evaluation similar to as for ESVM)
```txt
Without Masking
---------------
mP1 = 0.472574
mP3 = 0.323488
mP5 = 0.266667
mP10 = 0.187764
mP20 = 0.127848
mean recall 20 = 0.325678
at least 1 hit in 3 = 0.590717
at least 1 hit in 10 = 0.789030

With Masking
------------
mP1 = 0.105485
mP3 = 0.070323
mP5 = 0.063291
mP10 = 0.048101
mP20 = 0.039241
mean recall 20 = 0.103763
at least 1 hit in 3 = 0.185654
at least 1 hit in 10 = 0.362869

With Inpainting -Thu 18 Dec 2014 01:55:29 PM EST 
---------------
mP1 = 0.113924
mP3 = 0.068917
mP5 = 0.059072
mP10 = 0.047257
mP20 = 0.040295
mean recall 20 = 0.105723
at least 1 hit in 3 = 0.185654
at least 1 hit in 10 = 0.358650

With maxpooling -Sun 21 Dec 2014 07:14:25 PM EST 
---------------
(Divide image into 4x4 blocks and maxpool CNN features from those blocks that are mostly background (>70%))
mP1 = 0.037975
mP3 = 0.035162
mP5 = 0.032911
mP10 = 0.034599
mP20 = 0.033544
mean recall 20 = 0.081246
at least 1 hit in 3 = 0.105485
at least 1 hit in 10 = 0.291139

```

The output without masking is almost comparable to the ESVM output-WITH masking.
However, as also evident from qualitative results, performance significantly degrades by replacing the human segmented portion with the model mean image.




A slight technicality:     
Note that I rank using cosine distance between segmented images with segmented images, and unsegmented with unsegmented. (This is different from ESVM, where the segmented features are removed only from the detector - or the test image. The corpus remains the same.)
