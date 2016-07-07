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
	curl -O "https://nodejs.org/dist/v6.3.0/node-v6.3.0-darwin-x64.tar.gz"
	cd ..
}


function InstallNode () {
	cd $NODE_TMP
	echo "Extracting package file..."
	tar -zxf node-v6.3.0-darwin-x64.tar.gz
	mkdir -p $HOME/.Toolchains/nodejs/
	echo "Installing..."
	mv node-v6.3.0-darwin-x64/ $HOME/.Toolchains/nodejs/v6.3.0/
	cd ..
}


function GenRC () {
	echo "Adding path..."
	echo 'export PATH=$HOME/.Toolchains/nodejs/v6.3.0/bin:"${PATH}"' >> $HOME/.bash_profile
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


function Clean () {
	if [ -e $NODE_TMP ]; then
		rm -rf $NODE_TMP
	fi
}

function main () {
	echo "Requirements Installer  v0.0.1"
	echo "Copyright (c) 2016 Shota Shimazu"
	echo "This program is freely distributed under the MIT, see LICENSE for detail."
	echo
	echo "Press [return] key to continue."
	read

	if ! command_exists node; then
		DownloadFiles
		InstallNode
		GenRC
	else 
		NODE_VER=$(node -v)
		if echo $NODE_VER | grep -q "v6.3.0"; then
			DownloadFiles
			InstallNode
			GenRC
		else
			if which node | grep -q "homebrew"; then
				DownloadFiles
				InstallNode
				GenRC
			else
				echo "Latest Node.js is already installed."
				echo "Skip installing node."
			fi
		fi
	fi
	source $HOME/.bash_profile
	InstallRequirements
	Clean
	echo "Completed."
	echo "Press [return] key to exit."
	read
	exit 0
}


main

