#!/bin/sh

set -e

mkdir credentials
npm install
npm run build

mv dist output
