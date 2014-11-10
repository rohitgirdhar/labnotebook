---
layout: post
title:  "ESVM on Memex OpenStack cluster"
categories: matlab openstack esvm
---

### Connecting to the compute server
1. Connect to the memex VPN. Instructions for that are [here](https://memexproxy.com/wiki/display/MS/How+to+connect+to+the+Memex+VPN).
(You should *not* be connected to the VPN to view the instructions page).
2. `ssh` to the master compute server `zeus`. It requires private key file `memex.pem` which is available in our `NIJ2014` dropbox folder.

```bash
$ ssh -i /path/to/memex.pem ubuntu@10.3.2.61
```

### Running the ESVM code
1. `cd /exports/cyclops/work/003_Backpage/esvm_compiled`. This is where the compiled ESVM code is available.
Note: `/exports/cyclops` is the NFS directory, available across all nodes.
2. Run the code using:
        
```bash
$ bash run_esvm_run_eval.sh \
    /exports/cyclops/software/matlab/MatlabCompilerRuntime/v81/ \ # path to MCR
    path/to/datset/ \ # A folder with images. I typically use /class/image heirarchy in this folder
    path/to/TrainListFile \ # a file with all the corpus image paths, relative to the above directory. One path per line
    path/to/TestListFile \ # Similar to above, with Test image paths 
    path/to/negativeImagesSet # directory of negative imags for ESVM training
```

An example run would be

```bash
$ bash run_esvm_run_eval.sh \
    /exports/cyclops/software/matlab/MatlabCompilerRuntime/v81/ \
    ../dataset/hotel_adina/corpus/ \
    ../dataset/hotel_adina/TrainSet.txt \
    ../dataset/hotel_adina/TestSet.txt \
    ../dataset/negativeImages_tiny/
```

The output goes into the `res/` directory in the root folder.

### Resources

1. 1000 negative images for training available here: `/exports/cyclops/work/003_Backpage/dataset/negativeImages_1K/`

### Parallelizing

TODO


