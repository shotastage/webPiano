// webPiano
// Copyright (c) 2016 Shota Shimazu
// This program is freely distributed under the MIT, see LICENSE for detail.


function checkBrowser() {
	var Agent = navigator.userAgent;


	// Check your device.
	if (Agent.search("iPhone") != -1) {
		(function spAlert() {
			if (Agent.search("Safari") != -1 || Agent.search("Chrome") != -1) {
				// This browser is OK.
			} else {
				alert("Your browser is not fully supported.\nPlease open this page on Safari or Chrome.");
				var answer = confirm("Are you sure to continue on this browser?");
				if (answer !== true) {
					window.close();
				}
			}
		})();
	} else {
		// Android support
		
	} 


	// Check your browser.
	if (Agent.search("Chrome") != -1) {
		// Load required libraries
	} else {
		if (Agent.search("Safari") != -1) {
			console.log('Your browser "Safari" may be not fully supported.\nPlease open this page on latest Chrome.');
		} else if (Agent.search("Firefox") != -1) {
			console.log('Your browser "Firefox" may be not fully supported.\nPlease open this page on latest Chrome.');
		} else if (Agent.search("Edge") != -1) {
			console.log('Your browser "Edge" may be not fully supported.\nPlease open this page on latest Chrome.');
		} else {
			alert("Your browser is not supported.\nPlase open this page on latest Chrome.");
			window.close();
		}
	}
}
checkBrowser();

