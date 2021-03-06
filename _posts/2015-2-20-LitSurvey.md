---
layout: post
title:  "Literature Survey"
categories: litsurvey
---

# Papers

### Patch based retrieval

### General Retrieval

### Mid Level representation
1. [Style-aware Mid-level Representation for Discovering Visual Connections in Space and Time](http://web.cs.ucdavis.edu/~yjlee/projects/style_iccv2013.pdf)
2. [The State of the Art: Object Retrieval in Paintings using Discriminative Regions](http://www.robots.ox.ac.uk/~vgg/publications/2014/Crowley14/)
    - Crowley, Zisseman. BMVC 2014
    - Basically use mid-level patches for retrieval in painting images
    - Algo:
        - First get a initial set of matching images by using an object detector.
        - Then Re-rank, using MLDP (mid-level discriminative patches) matching between the images, spatially consistent.
        - MLDP detection in the retrieval set is done using training a LDA detector for each MLDP.

### Deep Features for retrieval/recognition


# Datasets

1. [INRIA Holidays](http://lear.inrialpes.fr/~jegou/data.php) (ECCV 2008)
    - 1491 images : 500 queries + 991 corpus
    - Oxford Buildings style evaluation lists (and code to compute mAP)
    - Current SoA
        - List [here](http://lear.inrialpes.fr/people/jegou/holidays_state_of_art.html)
        - Local descriptors (more relavant to us): 
            - [To aggregate or not to aggregate: selective match kernels for image search](https://hal.inria.fr/hal-00864684/document) (ICCV 2013)
                - 88% MAP                
            - [Multi-Scale Orderless Pooling of Deep Convolutional Activation Features](http://arxiv.org/pdf/1403.1840v3.pdf) (ECCV 2014)
                - **similar to us**
                - 80.18% MAP
                - Algo (MOP-CNN)
                    - Compute CNN features at multiple windows instead of the whole image
                    - Basically remove the spatial information that a global CNN feature would encode
                    - Combine the features computed from local patches at multiple scales via [VLAD encoding](https://lear.inrialpes.fr/pubs/2010/JDSP10/jegou_compactimagerepresentation.pdf)
                    - VLAD is orderless, so helps build a spatially invariant representation
                    - Basically the same as my experiment with extracting features at multiple patches, and pooling them using VLAD (instead of max/avg)
        - Global features
            - [Visual Reranking through Weakly Supervised Multi-Graph Learning](http://www.ee.columbia.edu/~wliu/ICCV13_rerank.pdf) (ICCV 2013)
                - 84.7% MAP
2. [TRECVID](http://www-nlpir.nist.gov/projects/tv2014/tv2014.html)
3. [Oxford Buildings](http://www.robots.ox.ac.uk/~vgg/data/oxbuildings/)
4. [Flickr 1M dataset](http://www.multimedia-computing.de/wiki/Flickr1M)
    - landmarks/scenes/objects/activities
5. TODO: see more [here](http://homepages.inf.ed.ac.uk/rbf/CVonline/Imagedbase.htm#retrieve).
