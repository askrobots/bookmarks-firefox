// popup.js
document.getElementById('openSettings').addEventListener('click', () => {
    chrome.runtime.sendMessage({action: 'openOptionsPage'});
});

document.getElementById("saveBookmark").addEventListener("click", async () => {
    const buttonElement = document.getElementById("saveBookmark");
    console.log("Button clicked.");

    let [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    let url = tab.url;
    let title = tab.title;

    try {
        let { apiToken: token } = await browser.storage.local.get('apiToken');  // Await the token retrieval

        console.log(`Attempting to bookmark: ${title} - ${url}`);

        const response = await fetch('https://q9.is/home/api/links/', {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`,  // Use backticks (`) for template strings
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                url: url
            })
        });

        const responseData = await response.text();
        
        if (!response.ok) {
            console.error(`Server responded with status: ${response.status}`);
            buttonElement.style.backgroundColor = "red";  // Set button color to red on error
            buttonElement.textContent = "Error!";  // Change button text to indicate error
        } else {
            buttonElement.style.backgroundColor = "green";  // Set button color to green on success
            buttonElement.textContent = "Bookmark Added!";  // Change button text to indicate success
        }
        
        console.log(`Response: ${responseData}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        buttonElement.style.backgroundColor = "red";  // Set button color to red on exception
        buttonElement.textContent = "Error!";  // Change button text to indicate error
    }
});
