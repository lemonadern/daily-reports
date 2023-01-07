#!/bin/sh

today=`date +%Y-%m-%d`
nightly_dir=nightly
template="---\ntitle: \"$today\"\noverview: overview\n---\n\n# やったこと\n- "

mkdir ./src/$nightly_dir/`date +%Y/%m/%d`
echo $template > src/$nightly_dir/`date +%Y/%m/%d`/$today\_index.md 
