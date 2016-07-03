#!/usr/bin/env bash
#
# Copyright (c) 2016 Shota Shimazu


function Clean () {
	if [ -e Deployment/ ]; then
		rm -rf Deployment
	fi
	mkdir Deployment
}

function Compile() {
	if [ -e $HOME/.npm/node-sass/ ]; then
		node-sass Sources/piano.scss Sources/piano.css
	else
		echo "ERROR: node-sass is not found on your system."
		echo "Please run setup.sh before you compile this project."
		exit 1
	fi

	if [ -e $HOME/.npm/jade/ ]; then
		jade Sources/index.jade
	else
		echo "ERROR: jade is not found on your system."
		echo "Please run setup.sh before you compile this project."
		exit 1
	fi
}


function main () {
	Clean
	Compile
	if [ -e Sources/index.html ]; then
		mv Sources/index.html Deployment/index.html
	else
		echo "ERROR: index.html is not found in source directory."
	fi
	if [ -e Sources/piano.css ]; then
		mv Sources/piano.css Deployment/piano.css
	else
		echo "ERROR: piano.css is not found in source directory."
	fi
	
	cp -r Sources/Scripts/ Deployment/Scripts/
}


main
