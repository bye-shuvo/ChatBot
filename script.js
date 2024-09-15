const openButton = document.getElementById("chatBoxOpen");
const closeButton = document.getElementById("chatBoxClose");
const chatBot = document.getElementById("chatBox");
const massageBox = document.getElementById("massageBox");
const sendBox = document.getElementById("sendBox");
const botMessege = document.getElementsByClassName("bot");
const userMessege = document.getElementsByClassName("user");
const sendBtn = document.getElementById("send");
const userInput = document.getElementById("input");

function openBot() {
    openButton.addEventListener("click", () => {
        openButton.classList.remove("openChatBot");
        openButton.classList.add("closeChatBot");
        closeButton.classList.add("openChatBot");
        closeButton.classList.remove("closeChatBot");
        chatBot.classList.remove("closeChatBot");
        chatBot.classList.add("openChatBot");
    })
}
openBot();
function closeBot() {
    closeButton.addEventListener("click", () => {
        closeButton.classList.remove("openChatBot");
        closeButton.classList.add("closeChatBot");
        openButton.classList.remove("closeChatBot");
        openButton.classList.add("openChatBot");
        chatBot.classList.remove("openChatBot");
        chatBot.classList.add("closeChatBot");
    })
}
closeBot();

function sendMassege() {
    sendBtn.addEventListener("click", () => {
        if (userInput.value != "") {
            addMassege();
        }
        else {
            alert("Enter a prompt.");
        }
    })
}
sendMassege();

function addMassege() {
    let massage = userInput.value.trim();
    let messegeElement = `<div class="user"><p class="userText">${massage}</p><img src="user-solid.svg" alt="user"></div>`;
    massageBox.insertAdjacentHTML("beforeend", messegeElement);
    massageBox.scrollTo(0, massageBox.scrollHeight);
}