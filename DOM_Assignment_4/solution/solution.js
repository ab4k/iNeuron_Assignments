const clashCard = document.querySelectorAll(".clash-card");
const clashCardImage = document.querySelectorAll(".clash-card__image img");
const clashCardImage1 = document.querySelectorAll(".clash-card__image");
const clashCardLevelDiv = document.querySelectorAll(".clash-card__level + div");
const clashCardUnitDesc = document.querySelectorAll(
  ".clash-card__unit-description"
);
const slideContainerGap = document.querySelectorAll(".slide-container");
const clashCardUnitStats = document.querySelectorAll(".one-third");
const statValue = document.querySelectorAll(".stat-value");
const stat = document.querySelectorAll(".stat");
const clashCardLevel = document.querySelectorAll(".clash-card__level>div");
const firstCard = document.querySelector(".clash-card__unit-stats--barbarian");
const secondCard = document.querySelector(".clash-card__unit-stats--archer");
const thirdCard = document.querySelector(".clash-card__unit-stats--giant");
const fourthCard = document.querySelector(".clash-card__unit-stats--goblin");
const fifthCard = document.querySelector(".clash-card__unit-stats--wizard");

stat.forEach((s) => {
  s.style.fontSize = "20px";
});
statValue.forEach((sV) => {
  sV.style.fontSize = "9px";
});
clashCardUnitStats.forEach((cuStats) => {
  cuStats.style.height = "80px";
});
slideContainerGap.forEach((cGap) => {
  cGap.style.gap = "37px";
});
clashCardUnitDesc.forEach((ud) => {
  ud.style.fontSize = "10px";
  ud.style.lineHeight = "14px";
  ud.style.padding = "10px";
});

clashCardLevelDiv.forEach((clD) => {
  clD.style.fontSize = "17px";
});
clashCardImage1.forEach((cl1) => {
  cl1.style.height = "120px";
});
clashCard.forEach((card) => {
  card.style.width = "205px";
});
clashCardImage.forEach((c) => {
  c.style.width = "220px";
  c.style.marginLeft = "30px";
});

firstCard.style.backgroundColor = "#ec9b3b";
firstCard.style.color = "white";
document.querySelector(
  ".clash-card__unit-stats--barbarian .no-border"
).style.color = "white";

secondCard.style.backgroundColor = "#ee5487";
secondCard.style.color = "white";
document.querySelector(
  ".clash-card__unit-stats--archer .no-border"
).style.color = "white";

thirdCard.style.backgroundColor = "#f6901a";
thirdCard.style.color = "white";
document.querySelector(
  ".clash-card__unit-stats--giant .no-border"
).style.color = "white";

fourthCard.style.backgroundColor = "#82bb30";
fourthCard.style.color = "white";
document.querySelector(
  ".clash-card__unit-stats--goblin .no-border"
).style.color = "white";

fifthCard.style.backgroundColor = "#4facff";
fifthCard.style.color = "white";
document.querySelector(
  ".clash-card__unit-stats--wizard .no-border"
).style.color = "white";
