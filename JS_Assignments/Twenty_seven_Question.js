// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

function primeOrNot(num) {
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
    console.log(num);
  } else {
    return false;
  }
}

for (let j = 2; j <= 100; j++) {
  primeOrNot(j);
}
