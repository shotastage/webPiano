#!/usr/bin/env bash
#
# Copyright (c) 2016 Shota Shimazu


function Clean () {
	if [ -e Deploy/ ]; then
		rm -rf Deploy
	fi
	mkdir Deploy
}

function Compile() {
	node-sass Sources/piano.scss Sources/piano.css
	jade Sources/index.jade
}


function main () {
	Clean
	Compile
	mv Sources/index.html Deploy/index.html
	mv Sources/piano.css Deploy/piano.css
	cp -r Sources/Scripts/ Deploy/Scripts/
}


main
