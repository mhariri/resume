#!/bin/bash


python3 -m http.server &
pid=$!
docker run -u $(id -u ${USER}):$(id -g ${USER}) \
        --net host \
        -v $(pwd):/rr \
        -it buildkite/puppeteer \
        node /rr/print.js
kill $pid

echo
echo "Produced resume.pdf"
echo