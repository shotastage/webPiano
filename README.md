Web Piano for submission of IT class
------------------------------------

This program is made for a submission of IT class at Keio University.  
Visit [here](https://web.sfc.keio.ac.jp/~t16440ss/webPiano/) to show this page.  


## Introduction
You can play the piano on your browser that is made using Web-based technologies.  


### Features
- Play piano on your browser.
- Lightweight and clear sound.
- Support smart device.


### Required libraries
- [Bootstrap](http://getbootstrap.com)
- [ScrollReveal.js](https://scrollrevealjs.org)
- [Fontawesome](http://fontawesome.io)



### Required browser 

- Chrome 51+ ( OSX, Linux, Windows )


## How to build.
Before you build this project, please install build dependencies run following commands.

```
curl -O https://raw.githubusercontent.com/shotastage/webPiano/master/setup.sh && chmod 777 setup.sh && ./setup.sh
```

Next, you have to get source code of this project.

```
git clone https://github.com/shotastage/webPiano.git
```

After you got the source code, move `webPiano/` directory and run `compile.sh`.

```
cd webPiano/
./compile.sh
```

If building process success, you probably find `Deployment` directory. This directory contains compiled source code.


### WARNING
Firefox and IE is not supported. Please play on latest Chrome or Chromium.  
You can download it for free from [here](https://www.google.co.jp/chrome/browser/desktop/).
I think installing Chrome is not a bad way.


### License 
This program is freely distributed under the MIT, so everyone is able to copy, modify, redistribute this free of charge. See LICENSE for detail.