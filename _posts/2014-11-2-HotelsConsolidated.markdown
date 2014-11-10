---
layout: post
title:  "Consolidated results for Hussian Hotels dataset"
categories: CNN hotels
---

### CNN

I tried CNN features for the hotels dataset as well.
Used `pool5` layer features, and `1 - cosine similarity` as the distance for retrieval/ranking.
A visualization of results is [here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/001_IR/002_CNN/results/cnn_matches/c001.html)

Quantitatively, performs slightly worse compared to ESVM.
{% highlight text %}
Without distractors
mP1 = 0.550000
mP3 = 0.418182
mP5 = 0.358182
mP10 = 0.284091
mP20 = 0.207727
at least 1 hit in 3 = 0.668182
at least 1 hit in 10 = 0.850000
{% endhighlight %}

**update** Thu 06 Nov 2014 11:22:45 AM EST 

With distractors (Using `pool5` features over the hussian hotels + MIT distractors - Total ~19000 images.
Using cosine similarity, searching linearly over all the images, not over a subset selected by BoW)

```text
With Distractors
mP1 = 0.536364
mP3 = 0.403030
mP5 = 0.342727
mP10 = 0.260455
mP20 = 0.182045
at least 1 hit in 3 = 0.654545
at least 1 hit in 10 = 0.809091
```
#### Coding details
Run (on `engine`)

```bash
$ cd /exports/cyclops/work/002_Hotels/output
$ python3.4 ../../001_Selfies/001_ComputeFeatures/Matching/search.py -f features/hussian_plus_MIT_dist/pool5/ -o search -t TestSet.txt
```

Eval (on `yell`)

```bash
$ cd /IUS/vmr105/rohytg/projects/001_ESVM/ESVM/esvm_matching_vanilla
$ esvm_compute_scores('../../CNN/withDist/SearchResults_hotels_plus_dist_cnn_pool5/', '../../datasets/hussain_hotels/TestSet.txt')
```

### ESVM

For comparison, here is how ESVM performed (shared in an email sometime back)
{% highlight text %}
without distractors:
mP1 = 0.700000
mP3 = 0.562121
mP5 = 0.492727
mP10 = 0.386818
mP20 = 0.281591
at least 1 hit in top 3 = 0.786364
at least 1 hit in top 10 = 0.886364

with distractors (using BoW to get top 5000, and then searching using ESVM):
mP1 = 0.672727
mP3 = 0.548485
mP5 = 0.468182
mP10 = 0.364545
mP20 = 0.265000
at least 1 hit in top 3 = 0.777273
at least 1 hit in top 10 = 0.850000
{% endhighlight %}

**Update** Wed 05 Nov 2014 12:23:34 AM EST 


### Bag of words
- Sparse SIFT, clustered into 10K visual words
{% highlight text %}
Without distractors
mP1 = 0.131818
mP3 = 0.156061
mP5 = 0.181818
mP10 = 0.201818
mP20 = 0.177045
at least 1 hit in 3 = 0.300000
at least 1 hit in 10 = 0.640909
{% endhighlight %}

### Code Details
1. Evaluated using 
{% highlight matlab %}
>> esvm_compute_scores('/IUS/vmr105/rohytg/projects/001_ESVM/CNN/publish/www', '/IUS/vmr105/rohytg/projects/001_ESVM/CNN/publish/TestSet.txt')
{% endhighlight %}

