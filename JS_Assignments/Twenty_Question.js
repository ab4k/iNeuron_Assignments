// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}

console.log(shoppingCart); // Added 'Meat' in the start of the shoppingCart

if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

console.log(shoppingCart); //Added 'Sugar' in the last of the shoppingCart

console.log(shoppingCart);
shoppingCart.splice(shoppingCart.indexOf("Honey"), 1); // Removes 'Honey'
console.log(shoppingCart);

shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea"); // Modified 'Tea' to 'Green Tea'
console.log(shoppingCart);
