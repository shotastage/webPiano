#!/usr/bin/env bash
# Copyright (c) 2016 Shota Shimazu
# This program is freely distributed under the MIT, see LICENSE for detail.

# <!> WARNING <!>
# THIS SCRIPT WILL CHANGE YOUR SYSTEM. DO NOT RUN THIS IF YOUR ARE NOT GOOD AT COMPUTER. 
# AND EVEN IF YOU KNOW ABOUT THIS SCRIPT, PLEASE RUN CAREFULLY.
#
# This script will sets up build environment for compiling sources of this program.

NODE_TMP=".NODE_INSTALL_TMP/"


function command_exists {
  command -v "$1" > /dev/null;
}


function DownloadFiles () {
	if [ -e $NODE_TMP ]; then
		rm -rf $NODE_TMP
	else
		mkdir -p $NODE_TMP
	fi
	cd $NODE_TMP
	echo "Downloading latest Node.js ..."
	curl -O https://nodejs.org/dist/v6.2.2/node-v6.2.2-darwin-x64.tar.gz
	cd ..
}


function InstallNode () {
	cd $NODE_TMP
	echo "Extracting package file..."
	tar -zxf node-v6.2.2-darwin-x64.tar.gz
	mkdir -p $HOME/.node/
	echo "Installing..."
	mv node-v6.2.2-darwin-x64/ $HOME/.node/v6.2.2/
	cd ..
}


function GenRC () {
	echo "Adding path..."
	echo 'export PATH=$HOME/.node/v6.2.2/bin:"${PATH}"' >> $HOME/.bash_profile
}



function InstallRequirements () {
	if [ -e $HOME/.npm/node-sass/ ]; then
		echo "node-sass is already installed."
		echo "Skip installing node-sass."
	else
		echo "Installing node-sass..."
		npm install -g node-sass
	fi
	if [ -e $HOME/.npm/jade/ ]; then
		echo "jade is already installed."
		echo "Skip installing jade."
	else
		echo "Installing jade..."
		npm install -g jade
	fi
}

function main () {
	cat << WELLCOME_MESSAGE
	Requirements Installer  v0.0.1
	Copyright (c) 2016 Shota Shimazu
	This program is freely distributed under the MIT, see LICENSE for detail.

	Press [return] key to continue.
	WELLCOME_MESSAGE
	read
	
	if ! command_exists node; then
		DownloadFiles
		InstallNode
		GenRC
	else 
		echo "Node.js is already installed."
	fi
	source $HOME/.bash_profile
	InstallRequirements
}


main

