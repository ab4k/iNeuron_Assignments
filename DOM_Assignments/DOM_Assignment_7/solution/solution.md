## First Task

### Remove the languages that have 2.0 in their name (Every alternative language)

```javascript
const links = document.querySelectorAll("a");

links.forEach((li) => {
  if (li.innerHTML.includes("2.0")) {
    li.innerHTML = "";
  }
});
```

## Second Task

### Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.

```javascript
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
```
