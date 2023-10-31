const addToCartBtn = document.querySelector(".add-to-cart");
const btnOnHover = () => {
  addToCartBtn.style.backgroundColor = "#DC143C";
};
const btnOriginal = () => {
  addToCartBtn.style.backgroundColor = "hsl(158, 36%, 37%)";
};
addToCartBtn.addEventListener("mouseover", btnOnHover);
addToCartBtn.addEventListener("mouseout", btnOriginal);
