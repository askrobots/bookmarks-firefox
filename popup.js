// popup.js
document.getElementById('openSettings').addEventListener('click', () => {
    chrome.runtime.sendMessage({action: 'openOptionsPage'});
});

// popup.js
document.addEventListener("DOMContentLoaded", async () => {
    let [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    let url = tab.url;
    let buttonElement = document.getElementById("saveBookmark");

    try {
        let { apiToken: token } = await browser.storage.local.get('apiToken');
        const response = await fetch(`https://q9.is/home/api/check_link/?url=${encodeURIComponent(url)}`, {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,
            },
        });

        const data = await response.json();
        if (data.bookmarked) {
            buttonElement.style.backgroundColor = "green";
            buttonElement.textContent = "Bookmark Exists!";
        } else {
            buttonElement.style.backgroundColor = "";
            buttonElement.textContent = "Save Bookmark";
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }

    buttonElement.addEventListener("click", saveBookmark);  // Assuming saveBookmark is your function to save a bookmark
});

async function saveBookmark() {
    const buttonElement = document.getElementById("saveBookmark");
    console.log("Button clicked.");

    let [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    let url = tab.url;
    let title = tab.title;

    console.log(`Attempting to bookmark: ${title} - ${url}`);

    try {
        let { apiToken: token } = await browser.storage.local.get('apiToken');
        const response = await fetch('https://q9.is/home/api/links/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                url: url,
            }),
        });

        const responseData = await response.json();
        
        if (!response.ok) {
            console.error(`Server responded with status: ${response.status}`);
            buttonElement.style.backgroundColor = "red";  // Set button color to red on error
            buttonElement.textContent = "Error!";
        } else {
            buttonElement.style.backgroundColor = "green";  // Set button color to green on success
            buttonElement.textContent = "Bookmark Added!";
        }
        
        console.log(`Response: ${responseData}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        buttonElement.style.backgroundColor = "red";  // Set button color to red on exception
        buttonElement.textContent = "Error!";
    }
}
