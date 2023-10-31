// Assignment - 2: Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.

const inputForm = document.querySelector(".main__form-input");
const submitBtn = document.querySelector(".main__form-btn");

inputForm.value = "iNeuron";

(function () {
  submitBtn.click();

  const links = document.querySelectorAll("a");
  const mainLangs = document.querySelector(".main__languages");
  Array(links);
  for (let i = 0; i < links.length; i++) {
    links[i + 1].innerHTML = links[i].textContent + " 2.0";
    i++;
  }
})();
