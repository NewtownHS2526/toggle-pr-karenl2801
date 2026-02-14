const heading = document.querySelector("#heading");

const changeFontColor = () => {
    heading.classList.toggle("blue-text");
};

heading.addEventListener("click", changeFontColor);

const subtitle = document.querySelector("#subheading");

const changeSubtitleColor = () => {
    subtitle.classList.toggle("blue-text");
};

subtitle.addEventListener("click", changeSubtitleColor);

const replyBtn = document.querySelector("#reply-button");
const replyMessage = document.querySelector("#reply-message");

const showReply = () => {
    replyMessage.classList.remove("hidden");
};

replyBtn.addEventListener("click", showReply);

const sendBtn = document.querySelector("#send-button");
const cancelBtn = document.querySelector("#cancel-button");

const hideReply = () => {
    replyMessage.classList.add("hidden");
};

sendBtn.addEventListener("click", hideReply);
cancelBtn.addEventListener("click", hideReply);

const openBtn = document.querySelector("#open-button");
const inbox = document.querySelector("#inbox");
const inboxMessage = document.querySelector("#inbox-message");
const unreadBtn = document.querySelector("#mark-button");

const openMessage = () => {
    inbox.classList.add("is-read");
    inboxMessage.classList.remove("hidden");
    unreadBtn.classList.remove("hidden");
};

openBtn.addEventListener("click", openMessage);

const closeBtn = document.querySelector("#close");

const closeMessage = () => {
    inboxMessage.classList.add("hidden");
};

closeBtn.addEventListener("click", closeMessage);

const markUnread = () => {
    inboxMessage.classList.add("hidden");
    inbox.classList.remove("is-read");
    unreadBtn.classList.add("hidden");
};

unreadBtn.addEventListener("click", markUnread);

const checkboxContainer = document.querySelector("#checkbox");
const checkbox = checkboxContainer.querySelector("input");
const actionButtons = document.querySelector("#action-buttons");

const handleCheckbox = () => {
    inbox.classList.toggle("is-selected");
    actionButtons.classList.toggle("hidden");
};

checkbox.addEventListener("click", handleCheckbox);

const deleteBtn = document.querySelector("#action-buttons button:nth-child(1)");

const handleDelete = () => {
    inbox.classList.toggle("hidden");

    if (deleteBtn.innerHTML === "Delete Message(s)") {
        deleteBtn.innerHTML = "Undo Deletion";
    } else {
        deleteBtn.innerHTML = "Delete Message(s)";
    }
};

deleteBtn.addEventListener("click", handleDelete);

const readBtn = document.querySelector("#action-buttons button:nth-child(2)");

const markRead = () => {
    unreadBtn.classList.remove("hidden");
    inbox.classList.remove("is-selected");
    inbox.classList.add("is-read");
    checkbox.checked = false;
};

readBtn.addEventListener("click", markRead);

const darkModeBtn = document.querySelector(".navbar-brand .button");
const body = document.querySelector("body");

const toggleDarkMode = () => {
    body.classList.toggle("dark-mode");
};

darkModeBtn.addEventListener("click", toggleDarkMode);