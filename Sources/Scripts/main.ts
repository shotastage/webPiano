/*
	Copyright (c) 2016 Shota Shimazu
	This program is freely distributed under the MIT, see LICENSE for detail.
*/
const enum KeyIds: string {
		[ "C2", "c2.mp3" ], [ "C2s", "c2s.mp3" ], [ "D2", "d2.mp3" ], [ "D2s", "d2s.mp3" ], [ "E2", "e2.mp3" ],
		[ "F2", "f2.mp3" ], [ "F2s", "f2s.mp3" ], [ "G2", "g2.mp3" ], [ "G2s", "g2s.mp3" ], [ "A3", "a3.mp3" ],
		[ "A3s", "a3s.mp3" ], [ "B3", "b3.mp3" ], [ "C3", "c3.mp3" ], [ "C3s", "c3s.mp3" ], [ "D3", "d3.mp3" ],
		[ "D3s", "d3s.mp3" ], [ "E3", "e3.mp3 "], [ "F3", "f3.mp3" ], [ "F3s", "f3s.mp3" ], [ "G3", "g3.mp3" ],
		[ "G3s", "g3s.mp3" ], [ "A4", "a4.mp3" ], [ "A4s","a4s.mp3" ], [ "B4", "b4.mp3" ], [ "C4", "c4.mp3" ],
		[ "C4s", "c4s.mp3" ], [ "D4", "d4.mp3" ], [ "D4s", "d4s.mp3" ], [ "E4", "e4.mp3" ]
}





if (window.touchEvent: TouchEvent) {
	console.log("Touch panel support avaiable.");
} else {
	console.log("This device does not support touch screen.");
}




// Event Listener
window.addEventListener('load', function (event: MouseEvent): void {
	// var document.getElementByID();

}, false);
