---
layout: post
title:  "Segmentation Literature Survey"
categories: segmentation
---

## Contour Detection and Hierarchical Segmentation
- Arbelaez, Pablo and Maire, Michael and Fowlkes, Charless and Malik, Jitendra
- TPAMI 2010
- [Project Page](http://www.eecs.berkeley.edu/Research/Projects/CS/vision/grouping/resources.html)
- [Results on Selfies-4K dataset](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/007_SegBSR/results/publish/selfies_mix_4K/s001.html)
- To run

```matlab
>> cd /IUS/vmr105/rohytg/projects/003_SelfieSeg/006_BSR/BSR/grouping/results/publish/selfies_mix_4K
>> runLoop('../../../datasets/selfies_mix_4K/mix_4K/mix/', 'results/mix_4K')
```

### Notes
- contour detection and image segmentation
- contour: gPb
    - couple multiscale local brightness, color and texture cues
        - Process L, A, B, texture channels using Pb contour detector (oriented gradient signal) - basically gives a gradient map for every orientation $\theta$
        - Use linear combination of gradient in these 4 channels
        - sample $\theta$ at in 8 equal intervals in 0 and $\pi$, take max. Essentially get measure of boundary strength at each pixel ($= mPb(x,y)$)
    - Use spectral clustering (largest eig valued eig vector of M) for globalization (?)
        -  Affinity matrix constructed using `intervening contour cue`, which is max value of mPb joining the 2 pixels
- Segmentation
    - gPb contours might not be closed. Hence can't segment
    - Hierarchical segmentation - using Oriented Watershed Tranform (OWT), produces Ultrameric Contour Map (OCW)
    - UCM: a real valued bw image (weighted edges)
    - hierarchy constructed by greedy merging algorithm (initially segment at finest level)
        - dissimilarity between 2 regions = strength of common boundary

