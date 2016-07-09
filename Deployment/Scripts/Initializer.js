// webPiano
// Copyright (c) 2016 Shota Shimazu
// This program is freely distributed under the MIT, see LICENSE for detail.
var WarningMessgae = "Smartphone is not supported.\nPlease open on PC browser.";
function checkBrowser() {
    var userAgent = navigator.userAgent;
    var getDeviceType = (function () {
        if (userAgent.indexOf('iPhone') > 0 || userAgent.indexOf('iPod') > 0 || userAgent.indexOf('Android') > 0 && userAgent.indexOf('Mobile') > 0) {
            return 'sp';
        }
        else if (userAgent.indexOf('iPad') > 0 || userAgent.indexOf('Android') > 0) {
            return 'tab';
        }
        else {
            return 'other';
        }
    })();
    if (getDeviceType == "sp") {
        alert("Smartphone is not supported.Please open on PC browser.");
    }
    // Check your browser.
    if (userAgent.search("Chrome") != -1) {
    }
    else {
        if (userAgent.search("Safari") != -1) {
            console.log('Your browser "Safari" may be not fully supported.\nPlease open this page on latest Chrome.');
        }
        else if (userAgent.search("Firefox") != -1) {
            console.log('Your browser "Firefox" may be not fully supported.\nPlease open this page on latest Chrome.');
        }
        else if (userAgent.search("Edge") != -1) {
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
