#!/bin/sh

SCRIPTPATH=$(dirname "$SCRIPT")
echo "Script path is $SCRIPTPATH"

if [ ! -d "$SCRIPTPATH/data/db" ];
then
    echo "/data/db does not exist! Creating directory..."
    mkdir $SCRIPTPATH/data/db
fi

echo "Running docker compose..."
docker-compose up --build