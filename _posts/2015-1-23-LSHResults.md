---
layout: post
title:  "LSH retrieval results"
categories: CNN objdet
---

### Details
- Was able to run the original E2LSH implementation by Alex Andoni ([here](http://www.mit.edu/~andoni/LSH/)) for one image (seemed to work),
but it expected all the features to be loaded to memory - and seemed a little harder to modify (C++).
    - For future reference, his code expects memory size (input) to be < 2GB (since it reads it in as a 32bit register value). Thanks to an email discussion with him.
- Used E2LSH implementation in matlab by Greg Shakhnarovich [here](http://ttic.uchicago.edu/~gregorydownload.html).
    - Greg is a co-author in Nearest Neighbor Methods in Learning and Vision: Theory and Practice, by T. Darrell and P. Indyk and G. Shakhnarovich.
    - This was easy to modify - just read features from disk at the time of insertion into index.
    - From a very high level, it seems like a random projections implementation with multiple tables (meaning, random projections on multiple sets of hyperplanes).
    - I used 250 bit representation of each image, and 20 tables (i.e. 20 different sets of 250 random hyperplanes).

### Results
- **Note**: The matches for an image are in **no**-particular **order**. I simply show the patches that made it to the same bucket as the query feature.
- **Note2**: I was only able to index first 50000 features (would correspond to first 18 images). This is due to some scalability issues (discussed later).
- [Qualitative Results](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/015_ObjDetRetrieval/out_hash_matlab/1.html)
- Results are sort-of reasonable. Also very highly dependent on the parameters (# of bits, # of tables).

### Scalability Issues
- It takes ages to load the features into memory.
- Most of the time in hashing was gone in reading in a set of features (5000 features at a time in 5 minutes), and then hashing could be done in parallel (4-5 seconds).
- In a NFS based cluster, there is no way to speed this up (afaik) because the bottleneck is the networked-shared disk access.

### Possible Solutions
1. Compute hashes as features are generated from caffe (probably not a scalable approach - if we choose to change hashing scheme, we recompute features etc)
2. Use a distributed file system
    - Fortunately, we have access to a DataTactics hadoop cluster. It seems to have TBs of free HDFS (hadoop distributed file system) space, and ~100 nodes (not sure of these numbers though)
    - I think if we have to deal with the complete dataset, we will have to eventually move to such a distributed system.

