// Collapsible functionality
document.querySelectorAll(".collapsible").forEach(coll => {
    coll.addEventListener("click", function () {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
    });
});

// Get the current time formatted as HH:MM
function getTime() {
    let today = new Date();
    let hours = String(today.getHours()).padStart(2, '0');
    let minutes = String(today.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Display the first message from the bot
function firstBotMessage() {
    const firstMessage = "Gracias por contactarte con nosotros, estamos a tu servicio@";
    document.getElementById("botStarterMessage").innerHTML = `<p class="botText"><span>${firstMessage}</span></p>`;
    document.getElementById("chat-timestamp").append(getTime());
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieve and display the bot's response
function getHardResponse(userText) {
    const botResponse = getBotResponse(userText);
    const botHtml = `<p class="botText"><span>${botResponse}</span></p>`;
    $("#chatbox").append(botHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

// Process user input and display the response
function getResponse() {
    let userText = $("#textInput").val().trim();
    userText = userText || "Por favor estimad@, indícanos tus consultas";
    
    const userHtml = `<p class="userText"><span>${userText}</span></p>`;
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000);
}

// Send text via button clicks
function buttonSendText(sampleText) {
    const userHtml = `<p class="userText"><span>${sampleText}</span></p>`;
    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    // Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000);
}

function sendButton() {
    getResponse();
}

// Handle pressing enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
