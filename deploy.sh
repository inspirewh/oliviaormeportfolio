#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd build

# if you are deploying to a custom domain
#echo 'myapp.com' > CNAME

# creating a git repo in the build folder
git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:inspirewh/oliviaormeportfolio.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:inspirewh/oliviaormeportfolio.git master:gh-pages

cd -