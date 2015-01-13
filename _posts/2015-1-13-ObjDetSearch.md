---
layout: post
title:  "Object Detection for Retrieval"
categories: CNN objdet
---

### Idea
An idea I've had is to use object detection for retrieval. As a first step, I plan to manually mark visually interesting object/region in the query image and construct an object detector for that, and then run that detector over the corpus. Take the top detections of the object as retrieval results (ESVM style). It is essentially a modification of the avg-pooling approach, where we avoid random patches from sky/ground.

### Current Approach

1. Manually annotated all the query images with a bounding box over discriminative stuff I would want to match on.
2. Computed CNN pool5 feature for this box.
3. Now for every corpus image, I used selective search to get region proposals (~3-4K/image), computed CNN features for each.
4. Used cosine-distance nearest neighbours to find closest match.
5. Taken the score of most similar bounding box for any retrieval image as the score for that image.

#### Note
- I went with selective search instead of sliding window (even after being advised otherwise by David) 
mainly for the ease of implementation and computational tractability :-). However I can try with
sliding window if needed..

### Results 

Qualitative: [here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/015_ObjDetRetrieval/out/1.html)
(still running)

- Initial results look pretty good (better than all earlier methods tried) 
- perform very well when a highly discriminative patch exists in the background (like [pg3](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/015_ObjDetRetrieval/out/3.html) of results)
- obviously can be compared fairly only if we can automate patch discovery.

Quantitative: TODO (once all computation finishes)

### Next steps/ideas
* Discover these query patches automatically
    - Mid level patches?
    - Canonical views over all proposals in the dataset?
* Improve the quality of matches. I think SVM (like in case of E-SVM) would work better than nearest neighbour, but not sure if its worth the extra computation.

