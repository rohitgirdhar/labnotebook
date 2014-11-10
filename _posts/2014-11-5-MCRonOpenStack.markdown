---
layout: post
title:  "Setting up Matlab Compiler Runtime on memex openstack"
categories: update
---

## Installation
1. Download the relevant MCR (relevant to platform the code is compiled in) from 
the [website](http://www.mathworks.com/products/compiler/mcr/). Unzip in the NFS directory. (The VMs are 64bit).
2. To install,

```bash
$ ./install -destinationFolder /exports/cyclops/software/matlab/MatlabCompilerRuntime -mode silent -agreeToLicense yes
# set the environment variables in /exports/cyclops/software/matlab/MatlabCompilerRuntime/v81/add_env.sh
```

Now MCR is installed in `/exports/cyclops/software/matlab/MatlabCompilerRuntime`.

## Running a program
Compile it in the source machine

```matlab
% Important to add the paths, else some files will be missed from the compiled version
>> addpath(genpath('/Path/To/Code/Root/Dir'));
>> mcc -m -v -w enable -R -startmsg -R -completemsg <prog_name>.m
```

Then, `scp <prog_name> run_<prog_name>.sh engine:`

Now to run it on `engine`:

```bash
$ bash run_<prog_name>.sh ${MCRROOTDIR}/v81
# for the above, it will be: bash run_<prog_name>.sh /exports/cyclops/software/matlab/MatlabCompilerRuntime/v81/
```

