// settings.js
document.getElementById("saveToken").addEventListener("click", () => {
    const token = document.getElementById("apiToken").value;
    browser.storage.local.set({ apiToken: token }).catch(err => {
        console.error('Error saving token:', err);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    browser.storage.local.get("apiToken").then(result => {
        document.getElementById("apiToken").value = result.apiToken || "";
    }).catch(err => {
        console.error('Error retrieving token:', err);
    });
});
