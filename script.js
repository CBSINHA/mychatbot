const API_URL = "https://pribate.onrender.com/chat";

async function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (!userInput) return;

    // Append user's message
    document.getElementById("chat-box").innerHTML += `<div class="message user-message"><strong>You:</strong> ${userInput}</div>`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: userInput })
        });

        if (!response.ok) {
            throw new Error(`Server Error: ${response.statusText}`);
        }

        const data = await response.json();
        document.getElementById("chat-box").innerHTML += `<div class="message bot-message"><strong>Bot:</strong> ${data.response}</div>`;
    } catch (error) {
        document.getElementById("chat-box").innerHTML += `<div class="message bot-message"><strong>Bot:</strong> Error: ${error.message}</div>`;
    }

    document.getElementById("user-input").value = "";
    document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
}
