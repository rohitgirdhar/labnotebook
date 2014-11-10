#!/bin/bash
jekyll build 
rsync -a --delete ./_site/ /home/rohit/public_html/projects/002_memex/weblog
