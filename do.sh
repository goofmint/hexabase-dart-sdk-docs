#!/bin/sh

export PORT=${PORT:-5007}
export BROWSER=${BROWSER:-none}

start () {
    yarn start --port $PORT
}

$*