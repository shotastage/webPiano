/*
    Copyright (c) 2016 Shota Shimazu
    This program is freely distributed under the MIT, see LICENSE for detail.
*/
var keybordIDs = [
    "C2", "C2s", "D2", "D2s", "E2", "F2", "F2s", "G2", "G2s", "A3", "A3s", "B3", "C3", "C3s",
    "D3", "D3s", "E3", "F3", "F3s", "G3", "G3s", "A4", "A4s", "B4", "C4", "C4s", "D4", "D4s", "E4"
];
var soundFonts = [
    "c2.mp3", "c2s.mp3", "d2.mp3", "d2s.mp3", "e2.mp3", "f2.mp3", "f2s.mp3", "g2.mp3", "g2s.mp3",
    "a3.mp3", "a3s.mp3", "b3.mp3", "c3.mp3", "c3s.mp3", "d3.mp3", "d3s.mp3", "e3.mp3 ", "f3.mp3",
    "f3s.mp3", "g3.mp3", "g3s.mp3", "a4.mp3", "a4s.mp3", "b4.mp3", "c4.mp3", "c4s.mp3", "d4.mp3",
    "d4s.mp3", "e4.mp3"
];
var classicKeyElements = new Array(29);
var cuteKeyElements = new Array(29);
var rockKeyElements = new Array(29);
function getUrl(sfFile) {
    var baseUrl = "https://web.sfc.keio.ac.jp/webPiano/SoundFonts/";
    return baseUrl + sfFile;
}
for (var i = 0; i < 30; i++) {
    console.log("Get ELM " + i);
    classicKeyElements[i] = document.getElementById("classicPiano" + keybordIDs[i]);
    cuteKeyElements[i] = document.getElementById("cutePiano" + keybordIDs[i]);
    rockKeyElements[i] = document.getElementById("rockPiano" + keybordIDs[i]);
}
// Debug
for (var i = 0; i < 30; i++) {
    console.log("Classic ELM " + i + classicKeyElements[i]);
    console.log("Cute ELM " + i + cuteKeyElements[i]);
    console.log("Rock ELM " + i + rockKeyElements[i]);
}
// Event Listener
window.addEventListener('load', function (event) {
    for (var i = 0; i < 30; i++) {
        console.log(i);
        classicKeyElements[i].addEventListener('click', function (event) {
            alert("Clicked! " + i);
        }, false);
        console.log("CLASSIC" + i);
        cuteKeyElements[i].addEventListener('click', function (event) {
            alert("Clickesd! " + i);
        }, false);
        console.log("CUTE" + i);
        rockKeyElements[i].addEventListener('click', function (event) {
            alert("Clicked! " + i);
        }, false);
        console.log("ROCK" + i);
    }
}, false);
