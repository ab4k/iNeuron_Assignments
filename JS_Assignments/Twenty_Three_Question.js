// 23. Write a program to check that the number given by the user is a prime number or not.

let num = prompt("Enter a number: ");
let isPrime = true;
if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  alert("Prime");
} else {
  alert("Not Prime");
}
