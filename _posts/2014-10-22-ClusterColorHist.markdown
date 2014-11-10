---
layout: post
title:  "New segmentation and Clustering"
categories: segmentation clustering
---

### Gym selfies
I changed a parameter controlling the min number of images in one cluster in Xinlei's algorithm.
So now it allows only clusters/detectors of size >= 5 (earlier was 1).
Results are [here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/003_FullBody_ClusterSize5/gym_002/publish/selfies-gym/s001.html)

Some segmentations are now somewhat better, such as 0, 6, 18, 27, 29, 36! etc

Some are worse, eg, 3, 24 etc

Don't have groundtruth to quantify the results, but visually I think they are overall better than previous.


### Simple clustering

I tried out a simple clustering all the 760 images using color histogram of the background part of 
the images. Results are [here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/004_ClusterColorHist_Gym/fullbody/publish/selfies-gym-clusters/c001.html).
Each row is a cluster. I think results are reasonable, though maybe not super-useful?

I'm now trying clustering using a bag of words over DSIFT from the background (Running codebook computation now).

#### DSIFT
**Update** Fri 24 Oct 2014 12:13:34 PM EDT  
Kmeans clustering (k = 60) using DSIFT from the background, quantized into 1000 Visual words. Results 
[here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/004_ClusterColorHist_Gym/fullbody/publish/selfies-gym-clusters_dsift/c001.html).

Some results are kind-of interesting, such as          
[45](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/004_ClusterColorHist_Gym/fullbody/publish/selfies-gym-clusters_dsift/c002.html#row44),
the same girl in multiple poses, but the same background             
[35](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/004_ClusterColorHist_Gym/fullbody/publish/selfies-gym-clusters_dsift/c002.html#row34)
has Justin Bieber in 2 similar images, and for whatever reason - all the selfies are taken in a slanting fashion


