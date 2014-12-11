---
layout: post
title:  "Segmentation Demo"
categories: segmentation
---

I've set up a simple segmentation demo on the memex server. The steps to use it are:

1. Connect to memex VPN and ssh to 10.3.2.65
    
    ```
    $ ssh ubuntu@10.3.2.65 -i /path/to/memex.pem
    ```

2. `cd /exports/cyclops/work/003_Backpage/segmentation_demo/DeepSegmentation/Caffe_Segmentation/segscripts`
3. Copy the images you want to segment into `./data/corpus`
4. Create a list of images in `./data/ImgsList.txt` by:
    
    ```
    $ ls data/corpus > data/ImgsList.txt
    ```
5. Download caffemodels etc (if required). This step is usually NOT required since I've already copied the models to that directory
    
    ```
    $ bash get_seg_loc_models.sh
    ```
6. Run segmentation
    
    ```
    $ bash run_seg.sh ../
    ```

The results of segmentation will appear in `data/final_segmentations`.

Code
----

The code for this is available [here](https://github.com/xiaolonw/nips14_loc_seg_testonly/tree/master/Caffe_Segmentation).

