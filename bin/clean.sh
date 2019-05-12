#!/bin/bash

timestamp=$( date +%T )

mv ../bot.js ../other_projects/${timestamp}_bot.js

git reset --hard origin/master
git init
git remote add origin https://github.com/hhoopes/GESTEM.git
git pull
