// background.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'openOptionsPage') {
        chrome.runtime.openOptionsPage();
    }
});
