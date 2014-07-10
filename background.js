chrome.storage.local.get('OpVal', function (result) {
  if (result.OpVal == true) {
    chrome.tabs.executeScript(null, {file: "table-sort.js"});
  }
});

chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "settings.js"});
	chrome.storage.local.get('OpVal', function (result) {
  	if (result.OpVal == false) {
    	chrome.tabs.executeScript(null, {file: "table-sort.js"});
  	}
		else {
			//chrome.tabs.executeScript(null, {file: "unsort.js"});
		}
	});

});
