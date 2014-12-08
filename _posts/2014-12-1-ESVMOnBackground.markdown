---
layout: post
title:  "ESVM on background for Gym Selfies dataset"
categories: matching gym_selfies
---

Now that we have Xiaolong's segmentations, I'm focusing on matching the backgrounds. I tried E-SVM on the gym selfies dataset. Nearest neighbour results here. Each image has 2 rows, first are the matches with masking, and the second row are matches without masking (for comparison).

The dataset actually isn't ideal for this evaluation as there are few images taken from the same background. In general I see similar backgrounds being picked up (on masking), and similar body poses being picked up (without masking).
There were some interesting results:     
[56](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/013_ESVMWithSeg/results/publish/esvm_matches_with_people_masked/esvm_matches003.html#row55)
: The top 3 matches are the exact same place/background, with the subject in different poses. Notice how these matches are missed without masking (next row).           
[178](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/013_ESVMWithSeg/results/publish/esvm_matches_with_people_masked/esvm_matches009.html#row178) : Same place but people in different poses. again see it is missed without masking     
[268](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/013_ESVMWithSeg/results/publish/esvm_matches_with_people_masked/esvm_matches014.html#row267)     
[299](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/013_ESVMWithSeg/results/publish/esvm_matches_with_people_masked/esvm_matches015.html#row299)        



