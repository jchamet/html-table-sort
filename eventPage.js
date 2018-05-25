
initEnable();
chrome.browserAction.onClicked.addListener(toggleEnable);

function toggleEnable(tab) {
  chrome.storage.local.get('sortEnabled', function (result) {
    if (result.sortEnabled != true) {
      chrome.storage.local.set({'sortEnabled': true});
    }
    else {
      chrome.storage.local.set({'sortEnabled': false});
    }
    setIcon();
  });
}

function initEnable(tab) {
  chrome.storage.local.get('sortEnabled', function (result) {
    if (result.sortEnabled === undefined) {
      chrome.storage.local.set({'sortEnabled': true});
    }
    setIcon();
  });
}

function setIcon() {
    chrome.storage.local.get('sortEnabled', function (result) {
      if (result.sortEnabled == true) {
        chrome.browserAction.setIcon({'path':'icon.png'});
      }
      else {
        chrome.browserAction.setIcon({'path':'icon_disabled.png'});
      }
    });
}
