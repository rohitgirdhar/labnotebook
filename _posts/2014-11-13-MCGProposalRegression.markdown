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

Next I would learn CNN `pool5` features of the segmented regions, and learn a SV
regresser using the features and computed IoU values.

### Visualization
[Here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/011_MCGBasedSegmentation/results/proposals/visSegs/publish/proposals_vis/s001.html) 
is a visualization of the top 5000 proposals over the whole dataset,
and the corresponding IoU scores.

## Testing

TODO

