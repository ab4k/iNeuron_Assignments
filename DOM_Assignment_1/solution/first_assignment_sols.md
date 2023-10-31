## Assignment 1

### First Task

```Javascript

const newLists = `
    <li><a href="#" target="_blank">Projects</a></li>
    <li><a href="#" target="_blank">Hire Me</a></li>
`;

const ul = document.getElementById("list-parent");
ul.getElementsByTagName("li")[2].remove();
ul.innerHTML += newLists;

```

### Second Task

```Javascript

const searchBox = document.getElementsByTagName("input");
searchBox[0].placeholder = "Search My Project";

```

### Third Task

```Javascript

const socials = document.getElementById("social");
socials.style.display = "flex";


```

### Fourth Task

```Javascript

const profileImage = document.getElementById("avtar");
profileImage.src = "./person-image.jpg";

```

### Fifth Task

```Javascript

const newbtn = `<button>Support Me</button>`;
const btnContainer = document.getElementsByClassName("hero-right-section-btns");
btnContainer[0].innerHTML += newbtn;

```
