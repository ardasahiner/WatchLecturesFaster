function titleUpdate() {
     document.getElementById('eow-title').innerHTML = "Change Title to test Response";
     console.log("test");

     // Element exists, remove the event listeners so we don't run this twice
     document.removeEventListener('DOMNodeInserted', titleUpdate);
     document.removeEventListener('DOMContentLoaded', titleUpdate);

     chrome.runtime.sendMessage('enable_page_action', function () {});
}

// event listeners
document.addEventListener('DOMNodeInserted', titleUpdate);
document.addEventListener('DOMContentLoaded', titleUpdate);
