const hamburgerIcon = document.querySelector(".navbar-toggler-icon");
const menu = document.getElementById("navbarTogglerDemo01");
hamburgerIcon.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
