#!/bin/bash

set -e

cd `dirname $0`
r=`pwd`
echo $r

# project-brijframework-authorization
cd $r/project-brijframework-authorization
npm install
echo "Starting Angular project-brijframework-authorization..."
npm start  &

# project-brijframework-application
cd $r/project-brijframework-application
npm install
echo "Starting Angular project-brijframework-application.."
npm start &

# project-brijframework-inventory
cd $r/project-brijframework-inventory
npm install
echo "Starting Angular project-brijframework-inventory..."
npm start &

