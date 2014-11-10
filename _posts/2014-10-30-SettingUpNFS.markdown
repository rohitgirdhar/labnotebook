---
layout: post
title:  "Setting up NFS on the OpenStack cluster"
categories: NFS systems
---

I set up NFS on the DARPA OpenStack cluster. The steps are as follows:

### Security Settings
Add ingress/outgress rules to allow for the following on all the machines (on default, from Access & Security tab in the compute on Horizon)
{% highlight text %}
ALLOW IPv4 111/tcp from 0.0.0.0/0
ALLOW IPv4 2049/tcp to 0.0.0.0/0
ALLOW IPv4 111/tcp to 0.0.0.0/0
ALLOW IPv4 2049/tcp from 0.0.0.0/0
{% endhighlight %}

### Server

#### Getting the volume
1. Create a volume, attach to the server (`engine` in this case). It appears as a device `/dev/vdb`.
2. Use GParted to create a boot record(MBR/msdos) and format it into ext4.
3. Mount the device in the engine using `sudo mount -t ext4 /dev/vdb1 /exports/cyclops/` (note the vdb**1**)
4. The volume is now available on the server in `/exports/cyclops`.

#### Installing the server
From this [guide](https://help.ubuntu.com/community/SettingUpNFSHowTo).

{% highlight bash %}
$ sudo apt-get install nfs-kernel-server
$ chmod -R 777 /exports/cyclops
$ sudo cat >> /etc/export # to set up what directories to share
/exports            *(rw,fsid=0,insecure,no_subtree_check,async)
/exports/cyclops    *(rw,nohide,insecure,no_subtree_check,async)
$ # the * above means anyone can access. You can also give IP restrictions there.

$ sudo reboot
$ service nfs-kernel-server start
{% endhighlight %}


### Client
{% highlight bash %}
$ sudo apt-get install nfs-common
$ sudo mkdir -p /exports/cyclops
$ sudo mount -v -t nfs -o proto=tcp,port=2049 192.168.7.11:/exports/cyclops /exports/cyclops/
$ # where 192.. is the pvt IP of the server (on the internal network)
{% endhighlight %}


### Troubleshooting
Some [troubleshooting recommendations](http://wiki.linux-nfs.org/wiki/index.php/General_troubleshooting_recommendations).

1. Do `nmap <IP of server>` from the client. Make sure you see something like:
{% highlight text %}
80/tcp   open  http
111/tcp  open  rpcbind
2049/tcp open  nfs
{% endhighlight %}

(`nmap localhost` from the server may show these as open, so try it from the client. Typically this should be OK after the iptables security settings)
