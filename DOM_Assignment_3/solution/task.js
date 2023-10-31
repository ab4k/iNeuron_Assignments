// USER INPUT
const userName = document.getElementsByClassName("userName")[0];
const userEmail = document.getElementsByClassName("userEmail")[0];
const userMessage = document.getElementsByClassName("userMessage")[0];

// Buttons
const submitBtn = document.querySelector("button[type=submit]");
const resetBtn = document.querySelector("button[type=reset]");

// USER OUTPUT
const enterName = document.getElementsByClassName("enterName")[0];
const enterMail = document.getElementsByClassName("enterMail")[0];
const enterMessage = document.getElementsByClassName("enterMessage")[0];

// Using local storage for storing the values, so we can show them on clicking the submit button.

submitBtn.addEventListener("click", () => {
  localStorage.setItem("userName", userName.value);
  localStorage.setItem("userEmail", userEmail.value);
  localStorage.setItem("userMessage", userMessage.value);

  enterMail.innerHTML = localStorage.getItem("userEmail");
  enterMessage.innerHTML = localStorage.getItem("userMessage");
  enterName.innerHTML = localStorage.getItem("userName");
});

resetBtn.addEventListener("click", () => {
  localStorage.setItem("userName", "");
  localStorage.setItem("userEmail", "");
  localStorage.setItem("userMessage", "");
});
