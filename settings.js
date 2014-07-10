function toggle_script() {
  chrome.storage.sync.get({
    sortingActive: true
  }, function(items) {
		items.sortingActive = !items.sortingActive;
		if (items.sortingActive) {
			console.log('table sort activated');
		}
  });
}
chrome.browserAction.onClicked.addListener(toggle_script.call());
