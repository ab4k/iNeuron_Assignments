## First Task

### Reduce the size of side details and make it scrollable

```Javascript

const box = document.querySelector(".new");
box.style.width = "300px";
box.style.height = "440px";
box.style.overflow = "auto";


```

## Second Task

### Change the background to white

```Javascript

document.body.style.background = "white";

```

## Third Task

### Create the hamburger menu

```javascript
const hamburgerIcon = document.querySelector(".navbar-toggler-icon");
const menu = document.getElementById("navbarTogglerDemo01");
hamburgerIcon.addEventListener("click", () => {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});
```
