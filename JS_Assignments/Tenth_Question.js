// 10. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3
//     - 4 >= 3
//     - 4 < 3
//     - 4 <= 3
//     - 4 == 4
//     - 4 === 4
//     - 4 != 4
//     - 4 !== 4
//     - 4 != '4'
//     - 4 == '4'
//     - 4 === '4'
//     - Find the length of python and jargon and make a falsy comparison statement.

// For correct expression the output will be true and for wrong expression, the output will be false
console.log(4 > 3); // true, because the value of expression is true
console.log(4 >= 3); // true
console.log(4 < 3); // false, because it is false
console.log(4 <= 3); // false
console.log(4 == 4); // true, this is normal comparison operator, hence it is true
console.log(4 === 4); // true, this is strict comparison operator it checks the datatype also, here the datatype is also same so the expression is correct
console.log(4 != 4); // false, since 4 is equal to 4, and here it is normal comparison
console.log(4 !== 4); // false, again the 4 is equal to 4 because both have same datatype and value, so the expression is wrong
console.log(4 != "4"); // false, this is because 4 == '4' in case of normal comparison the datatype will not be checked only values are compared.
console.log(4 == "4"); // true, the datatype will not be checked, so the expression is true
console.log(4 === "4"); // false, the datatype is not same

let pythonLength = "python".length;
let jargonLength = "jargon".length;
console.log(pythonLength); // 6
console.log(jargonLength); // 6
console.log(pythonLength !== jargonLength);
