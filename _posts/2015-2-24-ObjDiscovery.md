---
layout: post
title:  "Patch Discovery for Retrieval"
categories: litsurvey
---

Data
----
I have, for every patch in the training image, a score associated with it that tells how well
that patch performs in retrieving images of the same class (note that the search set also contains ~270 distractors along with the training images).
In brief, scoring can be explained as: 

    I give a high score to a patch if it can pull out patches from *other* images of the *same* class with a *high* similarity score towards the *top* of the list.

For this experiment, I subsampled 800 patches/image, to get total ~95K training patches (just so that I can easily fit in memory and learning is fast).

I represent every patch with its 4096D ImageNet fc7 features for the following learning problem.
I scale the training features such that each dimension has mean = 0 and variance = 1 (and save the mean/var to transform the test features by the same amount).

Model (Training)
-----

I tried fitting various standard models to the data. Heres how each performed:

|  | Model | R2 Score (on train) | Image |
| ----| ----| ----| ---- |
| 1 | Linear Regression | 0.0008420761 | <img width="250" src="http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/017_ObjDiscover/test/train_predictions/linear_pred.png"/> |
| 2 | Regularized Linear (Ridge) | 0.000889882881 | <img width="250" src="http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/017_ObjDiscover/test/train_predictions/linear_ridge_pred.png"/> |
| 3 | SVR (polynomial kernel) | 0.149763631235 | Not computed|
| 4 | SVR (RBF kernel) | 0.19661088814952843 | <img width="250" src="http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/017_ObjDiscover/test/train_predictions/rbf_pred.png"/> |

#### Note

- R2 score measures how well a regression model works. R2 score = 1 is the best, and can also be negative
- The image shows each train data point on X axis and corresponding regression value on y axis. Red is the ground
truth for each patch and green is what the learned model predicts for training samples.

Testing
-------

I evaluated the RBF model on the test images.
[Here](http://pyrie.vmr.cs.cmu.edu/~rohit/projects/003_SelfieSegmentation/results/017_ObjDiscover/test/out/1.html)
are the top scoring patches.

First column is the ground truth top scoring patches. Second column is top scoring patches predicted by above model.

Concerns
--------

- Might be overfitting/memorizing the patches..

