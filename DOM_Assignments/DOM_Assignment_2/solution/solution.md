## Task One

```Javascript

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


```

## Task Two

```javascript
const div = document.createElement("div");
div.classList.add("accordian");
const accHeading = document.createElement("h3");
const accPara = document.createElement("p");
accHeading.textContent = "Skills";
accPara.textContent =
  "I possess a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github";
div.append(accHeading, accPara);
const accWrapper = document.querySelector(".accordian-wrapper");
accWrapper.appendChild(div);
console.log(accWrapper);
```
