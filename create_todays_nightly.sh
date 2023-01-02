#!/bin/sh

template="---\noverview: overview\n---\n\n# やったこと\n- "

mkdir ./src/`date +%Y/%m/%d`
echo $template > src/`date +%Y/%m/%d`/`date +%Y-%m-%d`_index.md 
