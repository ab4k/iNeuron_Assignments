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
