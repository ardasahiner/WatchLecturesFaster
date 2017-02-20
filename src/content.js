function titleUpdate() {
     document.getElementsByTagName("video")[0].playbackRate = 3;

     // Element exists, remove the event listeners so we don't run this twice
     document.removeEventListener('DOMNodeInserted', titleUpdate);
     document.removeEventListener('DOMContentLoaded', titleUpdate);

     chrome.runtime.sendMessage('enable_page_action', function () {});
}

// event listeners
document.addEventListener('DOMNodeInserted', titleUpdate);
document.addEventListener('DOMContentLoaded', titleUpdate);
