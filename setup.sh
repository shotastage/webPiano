#!/usr/bin/env bash

NODE_TMP=".NODE_INSTALL_TMP/"


function DownloadFiles () {
	mkdir -p $NODE_TMP
	cd $NODE_TMP
	curl -O https://nodejs.org/dist/v6.2.2/node-v6.2.2-darwin-x64.tar.gz
	cd ..
}


function InstallNode () {
	cd $NODE_TMP
	tar -zxf node-v6.2.2-darwin-x64.tar.gz
	mv node-v6.2.2-darwin-x64/ $HOME/.node/v6.2.2/
	cd ..
}


function GenRC () {
	echo 'export PATH=$HOME/.node/v6.2.2/bin:"${PATH}"' >> $HOME/.bash_profile
}



function main () {
	DownloadFiles
	InstallNode
	GenRC
	source $HOME/.bash_profile
	npm install -g node-sass
	npm install -g jade
}


main

