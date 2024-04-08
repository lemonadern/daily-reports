#!/bin/sh

iso_date=`date +%Y-%m-%d`
dir_date=`date +%Y/%m/%d`

if [ $# -eq 1 ]; then
  # overwrite dates
  iso_date=`date +%Y-%m-%d -d "$1"`
  dir_date=`date +%Y/%m/%d -d "$1"`
fi

nightly_dir=nightly
template="---\ntitle: \"$iso_date\"\noverview: overview\n---\n\n## やったこと\n\n- \n\n"

echo $iso_date
mkdir -p ./src/$nightly_dir/$dir_date/
echo $template > src/$nightly_dir/$dir_date/$iso_date\_index.md 

vim src/$nightly_dir/$dir_date/$iso_date\_index.md
