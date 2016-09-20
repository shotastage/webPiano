#!/usr/bin/env bash
# Copyright (c) 2016 Shota Shimazu
# This program is freely distributed under the MIT, see LICENSE for detail.

# <!> WARNING <!>
# THIS SCRIPT WILL CHANGE YOUR SYSTEM. DO NOT RUN THIS IF YOUR ARE NOT GOOD AT COMPUTER.
# AND EVEN IF YOU KNOW ABOUT THIS SCRIPT, PLEASE RUN CAREFULLY.
#
# This script will sets up build environment for compiling sources of this program.

NODE_TMP=".NODE_INSTALL_TMP/"
NODE_VERSION="v6.6.0"


command_exists () {
  command -v "$1" > /dev/null;
}


DownloadFiles () {
	if [ -e $NODE_TMP ]; then
		rm -rf $NODE_TMP
	else
		mkdir -p $NODE_TMP
	fi
	cd $NODE_TMP
	echo "Downloading latest Node.js ..."
	curl -O "https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-darwin-x64.tar.gz"
	cd ..
}


InstallNode () {
	cd $NODE_TMP
	echo "Extracting package file..."
	tar -zxf node-${NODE_VERSION}-darwin-x64.tar.gz
	mkdir -p $HOME/.Toolchains/nodejs/
	echo "Installing..."
	mv node-${NODE_VERSION}-darwin-x64/ $HOME/.Toolchains/nodejs/${NODE_VERSION}/
	cd ..
}


GenRC () {
	echo "Adding path..."
	echo 'export PATH=$HOME/.Toolchains/nodejs/v6.6.0/bin:"${PATH}"' >> $HOME/.bash_profile
}



InstallRequirements () {
	installNpmPkg () {
		if [ -e $HOME/.npm/${1} ]; then
			echo "${1} is already installed."
			echo "Skip installing ${1}."
		else
			echo "Installing ${1}..."
			npm install -g ${1}
		fi
	}

	installNpmPkg node-sass
	installNpmPkg pug
	installNpmPkg typescript
}


Clean () {
	if [ -e $NODE_TMP ]; then
		rm -rf $NODE_TMP
	fi
}






echo "Node.js Installer  for macOS v0.0.3"
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
	if echo $NODE_VER | grep -q "v6.6.0"; then
		echo "Latest Node.js is already installed."
		echo "Skip installing Node.js"
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
