chrome.runtime.onMessage.addListener(function (message, sender, callback) {
    if (message === 'enable_page_action') {
        chrome.pageAction.show(sender.tab.id);
    }
});
