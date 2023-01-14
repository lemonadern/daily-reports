#!/bin/sh

iso_today=`date +%Y-%m-%d`
dir_today=`date +%Y/%m/%d`
nightly_dir=nightly
template="---\ntitle: \"$iso_today\"\noverview: overview\n---\n\n# やったこと\n- "

mkdir ./src/$nightly_dir/$dir_today
echo $template > src/$nightly_dir/$dir_today/$iso_today\_index.md 
