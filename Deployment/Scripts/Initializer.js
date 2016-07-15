// webPiano
// Copyright (c) 2016 Shota Shimazu
// This program is freely distributed under the MIT, see LICENSE for detail.
function checkBrowser() {
    var userAgent = navigator.userAgent;
    function judgeUserAgent() {
        var DeviceType;
        if (userAgent.indexOf('iPhone') > 0 || userAgent.indexOf('iPod') > 0) {
            DeviceType = 'sp';
        }
        else if (userAgent.indexOf('Android') > 0 && userAgent.indexOf('Mobile') > 0) {
            DeviceType = 'sp';
        }
        else if (userAgent.indexOf('iPad') > 0 || userAgent.indexOf('Android') > 0) {
            DeviceType = 'tab';
        }
        else {
            DeviceType = 'other';
        }
        return DeviceType;
    }
    var getDeviceType = judgeUserAgent();
    if (getDeviceType == "sp" || getDeviceType == "tab") {
        alert("Smart device is not fully supported.\nPlease open on PC browser.");
    }
    // Check your browser.
    if (userAgent.search("Chrome") != -1) {
        console.log("Your browser is supported.");
    }
    else {
        if (userAgent.search("Safari") != -1) {
            alert('Your browser "Safari" is NOT supported.\nPlease open this page on latest Chrome or Firefox.');
        }
        else if (userAgent.search("Firefox") != -1) {
            console.log('Your browser "Firefox" may be not fully supported.\nPlease open this page on latest Chrome.');
        }
        else if (userAgent.search("Edge") != -1) {
            console.log('Your browser "Edge" may be not fully supported.\nPlease open this page on latest Chrome.');
        }
        else if (userAgent.search("MSIE") != -1) {
            alert("IE is not fully supported.\nPlease open this page on latesr Chrome.");
        }
        else {
            alert("Your browser is not supported.\nPlase open this page on latest Chrome.");
        }
    }
}
function main() {
    if (location.protocol == 'http:') {
        location.replace(location.href.replace(/http:/, 'https:'));
    }
    var roadStatus = "true";
    sessionStorage.setItem('roadStatus', roadStatus);
    if (sessionStorage.getItem('roadStatus') == "true") {
        console.log("Status: roaded");
    }
    else {
        console.log("Status: Init");
        checkBrowser();
    }
    checkBrowser();
}
main();
