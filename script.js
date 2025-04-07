const API_URL = "https://pribate.onrender.com/chat";

document.getElementById("send").addEventListener("click", async function () {
    const userInput = document.getElementById("user-input").value;
    
    if (!userInput) return;

    // Display user message
    const chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: userInput })
        });

        const data = await response.json();

        if (data.error) {
            chatBox.innerHTML += `<p><strong>BOT:</strong> Server Error</p>`;
        } else {
            chatBox.innerHTML += `<p><strong>BOT:</strong> ${data.bot_response}</p>`;
        }
    } catch (error) {
        chatBox.innerHTML += `<p><strong>BOT:</strong> Server Error</p>`;
    }

    document.getElementById("user-input").value = "";
});
