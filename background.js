chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (tab.url.indexOf('accounts.google.com/') > -1 || tab.url.indexOf('staysignedout.com/') > -1) {
    chrome.pageAction.setIcon({
      "tabId": tabId,
      "path": "images/omnibox-icon.png"
    });
    chrome.pageAction.setTitle({
      "tabId": tabId,
      "title": chrome.i18n.getMessage("hoverTitle")
    });
    chrome.pageAction.show(tabId);
  }
});