const h3 = document.querySelectorAll("h3");
const p = document.querySelectorAll("p");

for (let i = 0; i < h3.length; i++) {
  h3[i].addEventListener("click", function () {
    this.classList.toggle("active");
    if (p[i].style.display == "block") {
      p[i].style.display = "none";
    } else {
      p[i].style.display = "block";
    }
  });
}
