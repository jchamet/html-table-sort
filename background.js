chrome.tabs.executeScript(null, {file: "table-sort.js"});

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "settings.js"}, function (stuff){
		chrome.tabs.executeScript(null, {file: "table-sort.js"});
	});
});
