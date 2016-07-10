/*
	Copyright (c) 2016 Shota Shimazu
	This program is freely distributed under the MIT, see LICENSE for detail.
*/


let keybordIDs: Array<string> = [
	 "C2", "C2s", "D2", "D2s", "E2", "F2", "F2s", "G2", "G2s", "A3", "A3s", "B3", "C3", "C3s", 
	 "D3", "D3s", "E3", "F3", "F3s", "G3", "G3s", "A4",  "A4s", "B4", "C4", "C4s", "D4", "D4s", "E4"
];

let classicSoundIDs: Array<string> = [
 	"c2.mp3", "c2s.mp3", "d2.mp3", "d2s.mp3", "e2.mp3", "f2.mp3", "f2s.mp3", "g2.mp3", "g2s.mp3",
	"a3.mp3", "a3s.mp3", "b3.mp3", "c3.mp3", "c3s.mp3", "d3.mp3", "d3s.mp3", "e3.mp3 ", "f3.mp3", 
	"f3s.mp3", "g3.mp3", "g3s.mp3", "a4.mp3", "a4s.mp3", "b4.mp3", "c4.mp3", "c4s.mp3", "d4.mp3",
	"d4s.mp3", "e4.mp3"
];

let cuteSoundIDs: Array<string> = [
 	"c2.mp3", "c2s.mp3", "d2.mp3", "d2s.mp3", "e2.mp3", "f2.mp3", "f2s.mp3", "g2.mp3", "g2s.mp3",
	"a3.mp3", "a3s.mp3", "b3.mp3", "c3.mp3", "c3s.mp3", "d3.mp3", "d3s.mp3", "e3.mp3 ", "f3.mp3", 
	"f3s.mp3", "g3.mp3", "g3s.mp3", "a4.mp3", "a4s.mp3", "b4.mp3", "c4.mp3", "c4s.mp3", "d4.mp3",
	"d4s.mp3", "e4.mp3"
];

let rockSoundIDs: Array<string> = [
 	"c2.mp3", "c2s.mp3", "d2.mp3", "d2s.mp3", "e2.mp3", "f2.mp3", "f2s.mp3", "g2.mp3", "g2s.mp3",
	"a3.mp3", "a3s.mp3", "b3.mp3", "c3.mp3", "c3s.mp3", "d3.mp3", "d3s.mp3", "e3.mp3 ", "f3.mp3", 
	"f3s.mp3", "g3.mp3", "g3s.mp3", "a4.mp3", "a4s.mp3", "b4.mp3", "c4.mp3", "c4s.mp3", "d4.mp3",
	"d4s.mp3", "e4.mp3"
];

let classicKeyElements: Array<HTMLElement> = new Array(29);
let cuteKeyElements: Array<HTMLElement> = new Array(29);
let rockKeyElements: Array<HTMLElement> = new Array(29);





function getUrl(sfFile: string): string {
	let baseUrl = "https://web.sfc.keio.ac.jp/~t16440ss/webPiano/SoundFonts/";
	return baseUrl + sfFile;
}


function splashSound(i: number): void {
	alert(i);
	let SfFile = getUrl(classicSoundIDs[i]);
	let KeyElms = document.createElement("audio");
	KeyElms.setAttribute("src", SfFile);
}




for (var i: number = 0 ; i <= 28; i++) {
	(function (i: number): any {
		classicKeyElements[i] = document.getElementById("classic" + keybordIDs[i]);
		return i;
	})(i);

	(function (i: number): any {
		cuteKeyElements[i] = document.getElementById("cute" + keybordIDs[i]);
		return i;
	})(i);

	(function (i: number): any {
		rockKeyElements[i] = document.getElementById("rock" + keybordIDs[i]);
		return i;
	})(i);
}








window.addEventListener('load', function (): void {
		
	for (var i: number = 0; i <= 28; i++) {

		(function (i): EventListenerObject {
			classicKeyElements[i].addEventListener('click', function () {
				splashSound(i);
			}, false);
			return i;
		})(i);
		

		(function (i): EventListenerObject {
			cuteKeyElements[i].addEventListener('click', function () {
				splashSound(i);
			}, false);
			return i;
		})(i);


		(function (i): EventListenerObject {
			rockKeyElements[i].addEventListener('click', function () {
				splashSound(i);
			}, false);
			return i;
		})(i);
	}
}, false);
