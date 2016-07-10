// webPiano
// Copyright (c) 2016 Shota Shimazu
// This program is freely distributed under the MIT, see LICENSE for detail.




function checkBrowser(): void {
	let userAgent: string = navigator.userAgent;



	console.log(userAgent.indexOf('iPhone'));
	console.log(userAgent);

	function judgeUserAgent(): string {
		var DeviceType: string;

	    if(	userAgent.indexOf('iPhone') > 0 || userAgent.indexOf('iPod') > 0 ) {
	        DeviceType = 'sp';
	    } else if (userAgent.indexOf('Android') > 0 && userAgent.indexOf('Mobile') > 0) {
			DeviceType = 'sp';
		} else if (userAgent.indexOf('iPad') > 0 || userAgent.indexOf('Android') > 0){
	        DeviceType = 'tab';
	    } else {
	        DeviceType = 'other';
	    }
		return DeviceType;
	}




	var getDeviceType: string = judgeUserAgent();

	if (getDeviceType == "sp") {
		alert("Smartphone is not fully supported.\nPlease open on PC browser.");
	}


	// Check your browser.
	if (userAgent.search("Chrome") != -1) {
		// Load required libraries
	} else {
		if (userAgent.search("Safari") != -1) {
			console.log('Your browser "Safari" may be not fully supported.\nPlease open this page on latest Chrome.');
		} else if (userAgent.search("Firefox") != -1) {
			console.log('Your browser "Firefox" may be not fully supported.\nPlease open this page on latest Chrome.');
		} else if (userAgent.search("Edge") != -1) {
			console.log('Your browser "Edge" may be not fully supported.\nPlease open this page on latest Chrome.');
		} else {
			alert("Your browser is not supported.\nPlase open this page on latest Chrome.");
			window.close();
		}
	}
}





function main(): void {
		if(location.protocol == 'http:') {
			location.replace(location.href.replace(/http:/, 'https:'));
		} else {
			console.log("SSL Support: OK");
		}
		checkBrowser();
}


main();
