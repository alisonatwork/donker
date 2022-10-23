#!/bin/sh

ver=$(awk -F\" '/"version"/ { print $4 }' manifest.json)
mkdir -p out
7z a out/donker-$ver.zip *.js *.css *.png manifest.json README.md UNLICENSE
