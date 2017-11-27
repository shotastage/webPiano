/*
    webPiano - Piano on your browser.
    Copyright (c) 2016 Shota Shimazu
    This program is freely distributed under the MIT, see LICENSE for detail.
*/
// Definisions
// ----------------------------------------------------------------------------------------------
var keybordIDs = [
    "C2", "C2s", "D2", "D2s", "E2", "F2", "F2s", "G2", "G2s", "A3", "A3s", "B3", "C3", "C3s",
    "D3", "D3s", "E3", "F3", "F3s", "G3", "G3s", "A4", "A4s", "B4", "C4", "C4s", "D4", "D4s", "E4"
];
// Sound files
var classicSoundIDs = [
    "048.mp3", "049.mp3", "050.mp3", "051.mp3", "052.mp3", "053.mp3", "054.mp3", "055.mp3", "056.mp3",
    "057.mp3", "058.mp3", "059.mp3", "060.mp3", "061.mp3", "062.mp3", "063.mp3", "064.mp3 ", "065.mp3",
    "066.mp3", "067.mp3", "068.mp3", "069.mp3", "070.mp3", "071.mp3", "072.mp3", "073.mp3", "074.mp3",
    "075.mp3", "076.mp3"
];
var cuteSoundIDs = [
    "c2.mp3", "c2s.mp3", "d2.mp3", "d2s.mp3", "e2.mp3", "f2.mp3", "f2s.mp3", "g2.mp3", "g2s.mp3",
    "a3.mp3", "a3s.mp3", "b3.mp3", "c3.mp3", "c3s.mp3", "d3.mp3", "d3s.mp3", "e3.mp3 ", "f3.mp3",
    "f3s.mp3", "g3.mp3", "g3s.mp3", "a4.mp3", "a4s.mp3", "b4.mp3", "c4.mp3", "c4s.mp3", "d4.mp3",
    "d4s.mp3", "e4.mp3"
];
var rockSoundIDs = [
    "c2.mp3", "c2s.mp3", "d2.mp3", "d2s.mp3", "e2.mp3", "f2.mp3", "f2s.mp3", "g2.mp3", "g2s.mp3",
    "a3.mp3", "a3s.mp3", "b3.mp3", "c3.mp3", "c3s.mp3", "d3.mp3", "d3s.mp3", "e3.mp3 ", "f3.mp3",
    "f3s.mp3", "g3.mp3", "g3s.mp3", "a4.mp3", "a4s.mp3", "b4.mp3", "c4.mp3", "c4s.mp3", "d4.mp3",
    "d4s.mp3", "e4.mp3"
];
// Keybord elements
var classicKeyElements = new Array(29);
var cuteKeyElements = new Array(29);
var rockKeyElements = new Array(29);
// Debug
// ----------------------------------------------------------------------------------------------
var debugMode = false;
function debugLog(str) {
    if (debugMode) {
        console.log(str);
    }
}
// Functions
// ----------------------------------------------------------------------------------------------
function touchStatus() {
    var touchStatus;
    if (('ontouchstart' in window)) {
        touchStatus = true;
    }
    else {
        touchStatus = false;
    }
    return touchStatus;
}
function getUrl(sfFile) {
    var baseUrl = "http://misohena.jp/art/js_piano/sounds/piano/44khz_mp3/";
    return baseUrl + sfFile;
}
function splashSound(i) {
    var SfFile = getUrl(classicSoundIDs[i]);
    var KeyElms = document.createElement("audio");
    KeyElms.setAttribute("src", SfFile);
    KeyElms.play();
    setTimeout(function () {
        KeyElms.pause();
    }, 600);
}
function addSplashEventTouch() {
    for (var i = 0; i <= 28; i++) {
        (function (i) {
            classicKeyElements[i].addEventListener('click', function () {
                splashSound(i);
                debugLog("Splash sound " + 1);
            }, false);
            return i;
        })(i);
        (function (i) {
            cuteKeyElements[i].addEventListener('click', function () {
                splashSound(i);
                debugLog("Splash sound " + 1);
            }, false);
            return i;
        })(i);
        (function (i) {
            rockKeyElements[i].addEventListener('click', function () {
                splashSound(i);
                debugLog("Splash sound " + 1);
            }, false);
            return i;
        })(i);
    }
}
function addSplashEventClick() {
    for (var i = 0; i <= 28; i++) {
        (function (i) {
            classicKeyElements[i].addEventListener('click', function () {
                splashSound(i);
                debugLog("Splash sound " + i);
            }, false);
            return i;
        })(i);
        (function (i) {
            cuteKeyElements[i].addEventListener('click', function () {
                splashSound(i);
                debugLog("Splash sound " + i);
            }, false);
            return i;
        })(i);
        (function (i) {
            rockKeyElements[i].addEventListener('click', function () {
                splashSound(i);
                debugLog("Splash sound " + i);
            }, false);
            return i;
        })(i);
    }
}
for (var i = 0; i <= 28; i++) {
    (function (i) {
        classicKeyElements[i] = document.getElementById("classic" + keybordIDs[i]);
        return i;
    })(i);
    (function (i) {
        cuteKeyElements[i] = document.getElementById("cute" + keybordIDs[i]);
        return i;
    })(i);
    (function (i) {
        rockKeyElements[i] = document.getElementById("rock" + keybordIDs[i]);
        return i;
    })(i);
}
window.addEventListener('load', function () {
    var touchSupport = touchStatus();
    if (touchSupport) {
        debugLog("This device support touch event.");
        addSplashEventTouch();
    }
    else {
        debugLog("This device did not support touch event.");
        addSplashEventClick();
    }
}, false);
