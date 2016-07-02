#!/usr/bin/env bash

NODE_TMP=".NODE_INSTALL_TMP/"


function DownloadFiles () {
	mkdir -p $NODE_TMP
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
	DownloadFiles
	InstallNode
	GenRC
	source $HOME/.bash_profile
	InstallRequirements
}


main

