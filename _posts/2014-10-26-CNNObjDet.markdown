---
layout: post
title:  "Clustering using ImageNet trained CNN"
categories: CNN clustering
---

### Clustering using object detection output from ImageNet trained CNN
ImageNet trained CNN can be used to give object detection scores over 
1000 classes. I simply used those scores to cluster.
Ran this over a random mixed set of 4000 images `selfies_mix_4K (3999 good images)`, clustered into 100 clusters.
No segmentation performed in this case (used complete images).
The clusters are sorted from element closest to the cluster center first.

Clusters in general are quite meaningful.
Eg,

[2](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/005_ClusterCNNObjDet/selfies-mix_cnn/c001.html#row1),
[72](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/005_ClusterCNNObjDet/selfies-mix_cnn/c003.html#row71),
[85](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/005_ClusterCNNObjDet/selfies-mix_cnn/c003.html#row84)
Very similar close up shots   
[12](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/005_ClusterCNNObjDet/selfies-mix_cnn/c001.html#row11),
[15](http://pyrie.vmr.cs.cmu.eidu/~rohit/projects/003_SelfieSegmentation/results/005_ClusterCNNObjDet/selfies-mix_cnn/c001.html#row14),
[17](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/005_ClusterCNNObjDet/selfies-mix_cnn/c001.html#row16),
[29](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/005_ClusterCNNObjDet/selfies-mix_cnn/c001.html#row29)
[36](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/005_ClusterCNNObjDet/selfies-mix_cnn/c002.html#row35)
Similar based on clothing   
[44](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/005_ClusterCNNObjDet/selfies-mix_cnn/c002.html#row43)
Lipstick..     
[67](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/005_ClusterCNNObjDet/selfies-mix_cnn/c003.html#row66)
Common object (phone)     
[71](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/005_ClusterCNNObjDet/selfies-mix_cnn/c003.html#row70)
All taken in a car (detecting seat belt)    
[97](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/005_ClusterCNNObjDet/selfies-mix_cnn/c004.html#row96)
All with sunglasses    
[94](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/005_ClusterCNNObjDet/selfies-mix_cnn/c004.html#row93)
Taken near/in sea

In fact there are many more... CNN is really good with detecting objects..

These might have quite some value with the project in general,
can discover images taken in similar conditions/clothes (or lack thereof) etc


