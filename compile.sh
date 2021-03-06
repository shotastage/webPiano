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
	if [ -e node_modules/.bin/node-sass/ ]; then
		./node_modules/.bin/node-sass Sources/piano.scss Sources/piano.css
	else
		echo "ERROR: node-sass is not installed on your system."
		echo "Please run setup.sh before you compile this project."
		exit 1
	fi

	if [ -e node_modules/.bin/pug/ ]; then
		./node_modules/.bin/pug Sources/index.pug
		./node_modules/.bin/pug Sources/acknowledgment.pug
	else
		echo "ERROR: jade is not installed on your system."
		echo "Please run setup.sh before you compile this project."
		exit 1
	fi

}


function CompileTS() {

	## Compile TypeScript
	if [ -e node_modules/.bin/tsc ]; then
		./node_modules/.bin/tsc Sources/Scripts/main.ts
		./node_modules/.bin/tsc Sources/Scripts/Initializer.ts
	else
		echo "ERROR: typescript is not installed on your system."
		echo "Please run setup.sh before you compile this project."
		exit 1
	fi


	## Check deploy directory
	if [ -e Deployment/Scripts/ ]; then
		:
	else
		mkdir -p Deployment/Scripts/
	fi

	## Move and deploy sources.
	if [ -e Sources/Scripts/Initializer.js ]; then
		mv -f Sources/Scripts/Initializer.js Deployment/Scripts/
	else
		echo "FAILED TO COMPILE: Initializer.js did not exists in source directory."
	fi
	if [ -e Sources/Scripts/main.js ]; then
		mv -f Sources/Scripts/main.js Deployment/Scripts/
	else
		echo "FAILED TO COMPILE: piano.css did not exists in source directory."
	fi
}



function deployLibSets() {
	if [ -e Sources/Libraries/ ]; then
		cp -r Sources/Libraries/ Deployment/Libraries/
	else
		echo "Libraries is not found."
	fi
}


function deployContents() {
	if [ -e Sources/Contents/ ]; then
		cp -r Sources/Contents/ Deployment/Contents/
	else
		echo "Contents is not found."
	fi
}

function main () {
	Clean
	Compile
	if [ -e Sources/index.html ]; then
		mv -f Sources/index.html Deployment/index.html
	else
		echo "ERROR: index.html is not found in source directory."
	fi

	if [ -e Sources/acknowledgment.html ]; then
		mv -f Sources/acknowledgment.html Deployment/acknowledgment.html
	else
		echo "ERROR: index.html is not found in source directory."
	fi

	if [ -e Sources/piano.css ]; then
		mv -f Sources/piano.css Deployment/piano.css
	else
		echo "ERROR: piano.css is not found in source directory."
	fi
	CompileTS
	deployLibSets
	deployContents
}


main
