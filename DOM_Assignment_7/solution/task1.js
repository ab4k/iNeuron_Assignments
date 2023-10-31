// Assignment - 1: Remove the languages that have 2.0 in their name(Every alternative language)

const links = document.querySelectorAll("a");

links.forEach((li) => {
  if (li.innerHTML.includes("2.0")) {
    li.innerHTML = "";
  }
});
