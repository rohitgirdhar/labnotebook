---
layout: post
title:  "Fullbody Segmentation"
categories: xinlei segmentation selfie
---

### Gym Selfie

**update** (Tue 21 Oct 2014 05:38:38 PM EDT)   
Updated the visualization to include the various detections and corresponding detectors averages.


[Here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s001.html)
are the results for Gym Selfie segmentation (760 images).

It's able to get full body at quite a number of places. Some interesting ones:
[3](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s001.html#row2),
[48](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s002.html#row47),
[80](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s003.html#row79),
[95](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s004.html#row94),
[97](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s004.html#row96),
[107](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s004.html#row106),
[125](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s005.html#row124),
[138](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s005.html#row137),
[141](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s005.html#row140),
[196](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s007.html#row195),
[201](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s007.html#row200),
[214](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s008.html#row213),
[216](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s008.html#row215),
[254](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s009.html#row253),
[256](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s009.html#row255),
[258](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s009.html#row257),
[263](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s009.html#row262),
[270,271](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s010.html#row270),
[328](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s011.html#row328),
[359](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s012.html#row359), 
[365-366,375](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s013.html#row365),
[411](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s014.html#row410),
[423](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s015.html#row422),
[425](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s015.html#row424),
[451](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s016.html#row450),
[486](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s017.html#row485),
[605](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s021.html#row604),
[655](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s022.html#row654), 
[735](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s025.html#row734),
[759](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/002_Vanilla_FullBody1K/fullbody/gym/publish/selfies-gym/s026.html#row758)  


