## First Task

### Change the font and color of the heading

```Javascript

const h1 = document.querySelector("h1");
h1.style.color = "#DC143C";
h1.style.fontFamily = "Times new roman";


```

## Second Task

### Change the button color on hover

```Javascript

const addToCartBtn = document.querySelector(".add-to-cart");
const btnOnHover = () => {
  addToCartBtn.style.backgroundColor = "#DC143C";
};
const btnOriginal = () => {
  addToCartBtn.style.backgroundColor = "hsl(158, 36%, 37%)";
};
addToCartBtn.addEventListener("mouseover", btnOnHover);
addToCartBtn.addEventListener("mouseout", btnOriginal);


```
