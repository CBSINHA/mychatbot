const API_URL = "https://pribate.onrender.com/chat"; // Your backend URL

async function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (!userInput.trim()) return;

    document.getElementById("chat-box").innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "message": userInput }) // Fixed JSON format issue
        });

        if (!response.ok) {
            throw new Error(`Server Error: ${response.statusText}`);
        }

        const data = await response.json();
        document.getElementById("chat-box").innerHTML += `<p><strong>Bot:</strong> ${data.response}</p>`;
    } catch (error) {
        document.getElementById("chat-box").innerHTML += `<p><strong>Bot:</strong> Error: ${error.message}</p>`;
    }

    document.getElementById("user-input").value = ""; // Clear input field
}
