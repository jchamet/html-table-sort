chrome.storage.local.get('OpVal', function (result0) {
	if (result0.OpVal == true) {
		chrome.storage.local.set({'OpVal': false}, function (result1) {
  	});
	}
	else {
  	chrome.storage.local.set({'OpVal': true}, function (result1) {
			alert('Table Sort Enabled');
  	});
	}
});

