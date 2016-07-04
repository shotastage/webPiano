#!/usr/bin/env bash

BASIC_DIR=$HOME/Desktop/public_html

function Clean () {
	rm -rf $BASIC_DIR/Scripts/
	rm $BASIC_DIR/index.html
	rm $BASIC_DIR/piano.css
}


function Copy () {
	cp Deployment/index.html $BASIC_DIR/index.html
	cp Deployment/piano.css $BASIC_DIR/piano.css
	cp -r Deployment/Scripts/ $BASIC_DIR/Scripts/
}


function main () {
	Clean
	./compile.sh
	Copy
}


main 