// 07. Declare an array containing the multiple values and use lastIndexOf to determine the position of the first and last occurrence of a word "pw skills".

let instituteNames = [
  "ineuron",
  "learncodeonline",
  "pw skills",
  "udemy",
  "pw skills",
  "ineuron",
  "pw skills",
]; // pw skills is available at 2, 4, 6 index of the array

// For first occurence
console.log(
  "The first occurence of 'pw skills' is at index:",
  instituteNames.indexOf("pw skills")
); // 2, The index of string encountered first will be printed.
console.log(
  "The last occurence of 'pw skills' is at index:",
  instituteNames.lastIndexOf("pw skills")
); // 6, The index that is lastly matched will be printed.
