#!/bin/sh

essay_dir=essay
today_date=`date +%Y-%m-%d`
template="---\ntitle: new essay\npublished_at: \"$today_date\"\n---\n\n"

if [ $# -eq 1 ]; then
  filename=$today_date\_$1.md
else
  filename=$today_date.md
fi

echo $template > src/$essay_dir/$filename
echo "New file created: `ls src/$essay_dir/$filename`"

code src/$essay_dir/$filename
