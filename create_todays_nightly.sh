#!/bin/sh

today=`date +%Y-%m-%d`
template="---\ntitle: $today\noverview: overview\n---\n\n# やったこと\n- "

mkdir ./src/nightlies/`date +%Y/%m/%d`
echo $template > src/nightlies/`date +%Y/%m/%d`/$today\_index.md 
