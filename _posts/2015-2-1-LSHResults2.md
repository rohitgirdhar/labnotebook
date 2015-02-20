---
layout: post
title:  "E2LSH retrieval"
categories: CNN objdet
---

### Method
Basically the same as [Greg Shakhnarovich's E2LSH](http://ttic.uchicago.edu/~gregory/download.html)
implementation.

2 main parameters: 

    - # of bits to represent a feature
    - # of tables to hash the features into.


### Code
Is [here](https://github.com/rohitgirdhar-cmu-experimental/ScalableLSH).
Main reason for re-implementation is scalability.
It uses a B+ tree index ([Google LevelDB](http://leveldb.org/))
to store the features on disk for fast
random access.
Uses [Eigen](http://eigen.tuxfamily.org/index.php?title=Main_Page) for fast hash/similarity computation.

The hash table is memory based. It uses a C++ map from 
\<hashed feature\> : \<list of matching feature ids\>.
Each hashed feature is 200 element integer array.

### Results

The current experiment was done on the 237
image PeopleAtLandmarks dataset (total ~0.65 million features indexed).

[Qualitative](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/016_HashedObjRetrieval/out/1.html).
For comparison, the brute force qualitative results are [here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/016_HashedObjRetrieval/out/1.html).

[Quantitative](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/016_HashedObjRetrieval/Quant/out/1.html).
Note that the quant results are not directly comparable with the previous retrieval results I've been sharing, because in these I consider the same image match also (while previously the exact image was always the top match and I'd ignore it for scoring).

### Runtime

Added speed up for other parameter settings 
[here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/016_HashedObjRetrieval/Quant/out_speedup/1.html).

On average, each search of the hash table outputs 5680.18 matches
which are further re-ranked using cosine distance.
This number can be controlled by #bits.
Since originally there are 641581 features, the speedup is 
641581/5680.18 = 112.95x

In practice, query took me 1-2 sec/image for the whole process/image.

Building the B+ tree store: Took 3-4 hours.

Building the hash table: On a computer with sufficiently fast
disk, it took ~15 sec/1000 images. Hence ~3 hours for this 
dataset.

### Real Data

ImagesNevada results: [here](http://10.3.2.61/~ubuntu/projects/001_backpage/results/007_HashSearch/out/1.html)       
Only showing results for those images for which a brute force output exists     
Quantitative, showing the [top-K Kendall's Tau](http://researcher.watson.ibm.com/researcher/files/us-fagin/topk.pdf) for each pair of lists (taken for top-5)       
Average Kendall's Tau = 7.61861861862 (top-5)

