---
layout: post
title:  "Setting up Caffe on OpenStack Cluster"
categories: Caffe systems memex OpenStack
---

Simply follow instructions [here](http://caffe.berkeleyvision.org/installation.html)    
Set `CPU_ONLY = 1` because there are no GPU on those machines

Other than that, the following are required
{% highlight bash %}
$ sudo apt-get install python-scipy
$ easy_install -U scikit-image
$ sudo apt-get install python-protobuf
{% endhighlight %}

### Enable ssh/https egress to be able to checkout code using git/easy_install

In access & security, add rules to 
{% highlight text %}
ALLOW IPv4 443/tcp to 0.0.0.0/0 (custom TCP, egress 443 (HTTPS), CIDR)
ALLOW IPv4 22/tcp to 0.0.0.0/0 (egress 22 (SSH), -rest same-)
ALLOW IPv4 9418/tcp to 0.0.0.0/0 (egress 9418)
{% endhighlight %}

