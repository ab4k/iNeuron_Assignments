// pro subscription Button

const subBtn = document.createElement("a");
const navCenterLastChild =
  document.querySelector(".nav-center").lastElementChild;
subBtn.textContent = "Pro Subscription";
subBtn.classList.add("btn");
subBtn.setAttribute("href", "index.html");
navCenterLastChild.appendChild(subBtn);

// New category (Chinese)

const leftMenu = document.querySelector(".tags-container div");
const newCategory = document.createElement("a");
newCategory.textContent = "Chinese (7)";
newCategory.href = "#";
newCategory.style.cursor = "pointer";
leftMenu.appendChild(newCategory);

const recipeName = document.querySelectorAll(".recipe-name");
const recipeDesc = document.querySelectorAll(".recipe-disp");
recipeName.forEach((card) => {
  card.style.color = "#551a8b";
});
recipeDesc.forEach((card) => {
  card.style.color = "#551a8b";
});

const recipeGallery = document.querySelector(".recipe-gallery");
const newCard = document.createElement("div");
const recipeLink = document.createElement("a");
const recipeImg = document.createElement("img");
const recipeHeading = document.createElement("h5");
const recipePara = document.createElement("p");

newCard.className = "card";
recipeLink.href = "#";
recipeImg.src = "../solution/recipe-6.jpg";
recipeImg.className = "recipe-img";
recipeHeading.textContent = "Cooked Ball Soup";
recipeHeading.style.color = "#551a8b";
recipeHeading.className = "recipe-name";
recipePara.textContent = "Prep : 10min | Cook : 25min";
recipePara.style.color = "#551a8b";
recipePara.className = "recipe-disp";
recipeLink.className = "recipe-text";

recipeLink.appendChild(recipeImg);
recipeLink.appendChild(recipeHeading);
recipeLink.appendChild(recipePara);
newCard.appendChild(recipeLink);
recipeGallery.appendChild(newCard);
