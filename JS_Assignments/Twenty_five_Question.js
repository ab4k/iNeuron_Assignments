// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

let weightInKg = 52;
let heightInMetre = 1.6;

function bmi(w, h) {
  let result;
  result = w / (h * h);
  return result;
}

console.log(bmi(weightInKg, heightInMetre));

if (bmi(weightInKg, heightInMetre) <= 18.5) {
  console.log("Underweight");
} else if (
  bmi(weightInKg, heightInMetre) > 18.5 ||
  bmi(weightInKg, heightInMetre) < 24.9
) {
  console.log("Normal Weight");
} else if (
  bmi(weightInKg, heightInMetre) > 25 ||
  bmi(weightInKg, heightInMetre) < 29.9
) {
  console.log("Overweight");
} else if (bmi(weightInKg, heightInMetre) > 30) {
  console.log("Obese");
} else {
  console.log("Enter valid data!");
}
