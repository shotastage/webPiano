// webPiano
// Copyright (c) 2016 Shota Shimazu
// This program is freely distributed under the MIT, see LICENSE for detail.
var WarningMessgae = "Smartphone is not supported.\nPlease open on PC browser.";
function checkBrowser() {
    var Agent = navigator.userAgent;
    var WarningMessgae = "Smartphone is not supported.Please open on PC browser.";
    // Check your device.
    if (Agent.search("iPhone") != -1) {
        alert(WarningMessage);
    }
    else if (Agent.search("Android") != -1) {
        alert(WarningMessage);
    }
    // Check your browser.
    if (Agent.search("Chrome") != -1) {
    }
    else {
        if (Agent.search("Safari") != -1) {
            console.log('Your browser "Safari" may be not fully supported.\nPlease open this page on latest Chrome.');
        }
        else if (Agent.search("Firefox") != -1) {
            console.log('Your browser "Firefox" may be not fully supported.\nPlease open this page on latest Chrome.');
        }
        else if (Agent.search("Edge") != -1) {
            console.log('Your browser "Edge" may be not fully supported.\nPlease open this page on latest Chrome.');
        }
        else {
            alert("Your browser is not supported.\nPlase open this page on latest Chrome.");
            window.close();
        }
    }
}
function replaceProtocol() {
    if (location.protocol == 'http:') {
        location.replace(location.href.replace(/http:/, 'https:'));
    }
    else {
        console.log("SSL Support: OK");
    }
}
function main() {
    replaceProtocol();
    checkBrowser();
}
main();
