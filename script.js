const API_URL = "https://pribate.onrender.com";  // Replace with your actual Render URL

async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput) return;

    const chatBox = document.getElementById("chat-box");

    // Show user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Clear input
    document.getElementById("user-input").value = "";

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput })
        });

        const data = await response.json();
        if (data.bot_response) {
            chatBox.innerHTML += `<p><strong>Bot:</strong> ${data.bot_response}</p>`;
        } else {
            chatBox.innerHTML += `<p><strong>Bot:</strong> Error: ${data.error}</p>`;
        }
    } catch (error) {
        chatBox.innerHTML += `<p><strong>Bot:</strong> Server error</p>`;
    }

    // Auto-scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}
