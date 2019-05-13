#!/bin/bash

# save work from previous group
timestamp=$( date +%T )
mv bot.js saved_projects/${timestamp}_bot.js

# pull fresh, reinit-ing if necessary
git reset --hard origin/master
git init
git remote add origin https://github.com/hhoopes/GESTEM.git
git pull

# Glitch's command to sync up the console and IDE UI
refresh
