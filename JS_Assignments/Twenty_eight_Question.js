// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

// a).
// let n = 3;
// for (let i = 1; i <= n; i++) {
//   console.log("*");

// }

// b).

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    console.log("*");
  }
  console.log("\n");
}
