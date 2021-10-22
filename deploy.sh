#!/usr/bin/env bash

set -e
yarn build

cd dist
git init && git add -A && git commit -m "Deploy to GitHub Pages"
git push -f git@github.com:tuterdust/Intern-Hokudai.git master:gh-pages
