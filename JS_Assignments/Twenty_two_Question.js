// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sorting Age
const sortedAges = ages.sort();

// Maximum Age
const maxAge = sortedAges[ages.length - 1];

// Minimum Age
const minAge = sortedAges[0];

console.log(`Max age: ${maxAge}`);
console.log(`Min age: ${minAge}`);

// Median Age

let medianAge;

if (ages.length % 2 == 0) {
  medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
  medianAge = ages[(ages.length - 1) / 2];
}

console.log(`Median age: ${medianAge}`);
// Average Age
let sum = 0;
for (let i = 0; i < ages.length; i++) {
  sum += ages[i];
}
const avgAge = sum / ages.length;
console.log(`Avg age: ${avgAge}`);

// Range of ages(max -  min)
const range = maxAge - minAge;
console.log(`Range: ${range}`);

console.log(
  `Absolute difference between Max age and avg age: ${Math.abs(
    maxAge - avgAge
  ).toFixed(2)}`
);
console.log(
  `Absolute difference between Min age and avg age: ${Math.abs(
    minAge - avgAge
  ).toFixed(2)}`
);

Math.abs(maxAge - avgAge) > Math.abs(minAge - avgAge)
  ? console.log("Max age minus Avg age is greater than Min age minus Avg age.")
  : console.log("Min age minus Avg age is greater than Max age minus Avg age.");
