#!/bin/sh
if [ -z "$1" ]; then
    echo "Missing name parameter: ./build.sh <name>"
    exit 1
fi
docker build -t snowflake:$1 .
docker save -o ./out/snowflake.$1.tar snowflake

