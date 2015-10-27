// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/
/*global chrome*/
function search(info, tab) {
  chrome.tabs.create({'url': 'http://images.google.com/searchbyimage?image_url=' + info.srcUrl});
}

chrome.contextMenus.create({'title': 'Google Image Search',
                            'contexts': ['image'],
                            'onclick': search});
