---
layout: post
title:  "Segmentation Literature Survey"
categories: segmentation
---

## Contour Detection and Hierarchical Segmentation
- Arbelaez, Pablo and Maire, Michael and Fowlkes, Charless and Malik, Jitendra (UCB)
- TPAMI 2010
- [Project Page](http://www.eecs.berkeley.edu/Research/Projects/CS/vision/grouping/resources.html)
- [Results on Selfies-4K](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/007_SegBSR/results/publish/selfies_mix_4K/s001.html)
- Earlier SoA on BSDS500, 2010 to 2014 (gPb method) (before Crisp Boundaries paper)
- To run

```matlab
>> cd /IUS/vmr105/rohytg/projects/003_SelfieSeg/006_BSR/BSR/grouping/results/publish/selfies_mix_4K
>> runLoop('../../../datasets/selfies_mix_4K/mix_4K/mix/', 'results/mix_4K')
```

#### Notes
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

## Crisp Boundary Detection Using Pointwise Mutual Information
- Phillip Isola, Daniel Zoran, Dilip Krishnan, and Edward H. Adelson (MIT)
- ECCV 2014
- [Project Page](http://web.mit.edu/phillipi/pmi-boundaries/)
- [Results on Selfies-4K](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/009_CrispBoundaries/results/publish/selfies_mix_4K/s001.html)
- Claims to be current SoA on BSDS500

#### Notes
- Method supresses edges in highly textured regions
- statistical association within object high compared to across objects or obj-background
- uses pixel color values and very local variance info
    - P(A,B) is prob of A and B pixel values to occur in the image (formula in paper)
    - Pointwise mutual information (PMI) = $log \frac{P(A,B)^\rho}{P(A)P(B)}$ : A measure of affinity between pixels. It is predictive of whether 2 points are on the same object or not.
    - P(A,B) learnt specific to every image
- Boundary detection using spectral clustering on affinity matrix
    - Affinity (W): $W_{ij} = e^{PMI_\rho(f_i, f_j)}$
    - $f_i$ : feature at the pixel $i$: pixel color (in LAB space), diagonal of RGB color variance matrix in a 3x3 window around the pixel $\implies$ 2 3D vectors for each pixel.
    - Spectral clustering similar to Berkeley paper, also use OWT as post processing step, generates UCM.
    - They observe PMI is more effective in telling (given just 2 pixels), if they form a boundary of object or not (Empirically) 
- Uses Ultrameric contour map to generate segmentations (Arbelaez 2010)


## CPMC: Constrained Parametric Min-Cuts for Automatic Object Segmentation
- Joao Carreira and Cristian Sminchisescu
- ICCV 2010
- [Results on Selfies-4K](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/010_SegCPMC/publish/selfies-4K/s001.html). Results available for only few images (buggy and slow code - kept crashing).

#### Notes
TODO

## Multiscale Combinatorial Grouping
- Pablo Arbelaez*, Jordi Pont-Tuset*, Jonathan T. Barron, Ferran Marques, Jitendra Malik (UCB)
- CVPR 2014
- [Project Page](http://www.eecs.berkeley.edu/Research/Projects/CS/vision/grouping/mcg/)
- [Results on Selfies-4K](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/008_SegMCG/results/publish/selfies_mix_4K/s001.html)

#### Notes
- Somehow get a 20x speedup in eigen vector computation for spectral
clsutering
- 

## Simultaneous Detection and Segmentation
- Bharath Hariharan, Pablo Arbeláez, Ross Girshick, Jitendra Malik (UCB)
- ECCV 2014
- [Project Page](http://www.eecs.berkeley.edu/Research/Projects/CS/vision/shape/sds/)

#### Notes
- Uses MCG for initial proposals for regions and bounding boxes
- Use R-CNN style CNN feature extraction from the initial proposal, and train a SVM classifier
    - Use both networks (for bounding box and regions) together, each finetuned
    - Finetune the regions network by replacing the background regions with the mean image
- For test image, use above region classifier (SVM) to score each region, get the closest segmentation (class)
- Finally, region refinement
    - top down procedure to divide image into 10x10 blocks and classify as FG/BG



