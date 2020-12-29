#! /bin/bash
cd tsFiles
for f in * ; do
  filename="${f%%.*}.wasm";
  ../node_modules/.bin/asc $f -b ../public/wasm/$filename;
  echo "$filename created"
done