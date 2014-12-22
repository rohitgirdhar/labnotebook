---
layout: post
title:  "List of Contributions (Non-Research)"
categories: backpage contributions non-research
---

All the following experiments/data are mostly on the
computers provided by data-tactics.

### Done

#. ESVM on Nevada Backpage images
    - Observations:
        - Gets near duplicates
        - Gets subjects in similar pose
    - Speed : ~12-13 hours/image for NxN matching in 130K Nevada images
#. CNN features nearest neighbors
    - Observations
        - Gets near duplicates
    - Speed : ~1 hour/image for NxN matching in 130K Nevada images
#. Segmentation
    - Sample segmentations done for 10K images
    - A demo has been set up on Memex cluster. Instructions
[here]({{site.url}}{% post_url 2014-12-10-SegmentationDemo %})
#. Bag of Words
    - Built inverted index over all Nevada images
    - Search takes <4 sec per query to rank all 130K images
    - Gets exact duplicates for sure, not sure about performance otherwise.
#. BoW + CNN
    - Total retrieval time per image is 4 (BoW) + 3-4 (CNN) $\implies$ < 10seconds/image
    - More details in the [post]({{site.url}}{% post_url 2014-12-21-BoWWindowing %})




### Planned

#. Matching between Nevada and California images


