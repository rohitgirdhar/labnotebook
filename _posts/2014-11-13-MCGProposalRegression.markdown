---
layout: post
title:  "Segmentation using MCG + Regression"
categories: segmentation
---

## Idea
We compute MCG proposals over a supervised dataset (with given groundtruth segmentations)
and learn a SV regresser to predict the segmentation quality of an MCG proposal on a test image.

## Training
I'm using PASCAL VOC 2012 for training. I compute MCG proposals over all the images
that have groundtruth segmentations, and then compute a score for each proposal, which is
given as the IoU of the proposal with a ground truth human segment in the image (hence high score
means the proposed segmentation highly overlaps with a human in the image).

[Here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/011_MCGBasedSegmentation/results/proposals/visSegs/publish/proposals_vis/s001.html) 
is a visualization of the top 5000 proposals over the whole dataset,
and the corresponding IoU scores.

I compute CNN `fc7` features of the top 5000 segmented regions, and learn a SV
regresser using the features and computed IoU values. I use `nu-SVR` from `libsvm` (python interface).
I observe that even for predicting scores for the training features, SVR does not perform well - gives seemingly random values.. (?)

## Testing

[Here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/011_MCGBasedSegmentation/results/ranked/publish/top_proposal/s001.html)
are the results. For each image I show 2 rows, first is 
ranked MCG proposals (by support vector regression) and the second is 
the original list of MCG proposals. These are on the PASCAL VOC 2012 iamges with people.

### Analysis
SVR doesn't seem to be doing a good job re-ranking the MCG proposals.
The main reason I think for that is SVR not performing well. 
It doesn't even work well for re-predicting the regression scores for the original training set.
Also, for most images it gives scores which are very close.

