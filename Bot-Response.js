import { GoogleGenerativeAI } from "@google/generative-ai";

const sendBtn = document.getElementById("send");
const userInput = document.getElementById("input");
const massageBox = document.getElementById("massageBox");

let api_key;

fetch("secure.json").then(response => response.json()).then(data => {
    api_key = data.API_KEY;
})

function addBotMassage(botResponse) {
    const ThinkingTextElement = document.createElement("div");
    ThinkingTextElement.classList.add("bot");
    ThinkingTextElement.innerHTML = `<img src="robot-solid.svg" alt="bot"><p class="botText">Thinking...</p>`;
    massageBox.appendChild(ThinkingTextElement);
    setTimeout(() => {
        ThinkingTextElement.remove();
        let messageElement = `<div class="bot"><img src="robot-solid.svg" alt="bot"><p class="botText">${botResponse}</p></div>`;
        massageBox.insertAdjacentHTML("beforeend", messageElement);
    }, 600);
}

async function botResponse() {
    const genAI = new GoogleGenerativeAI(api_key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    let userMessage = userInput.value.trim();  
    const result = await model.generateContent(userMessage);
    let botResponse = await result.response.text();
    addBotMassage(botResponse);
}

function sendMassege() {
    sendBtn.addEventListener("click", () => {
        if (userInput.value != "") {
            botResponse();
            userInput.value = "";
        }
    })
}
sendMassege();