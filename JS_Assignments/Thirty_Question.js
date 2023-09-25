// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

function simpleCalculator(operand1, operand2, operation) {
  switch (operation) {
    case "addition":
      console.log(sum(operand1, operand2));
      break;
    case "subtraction":
      console.log(difference(operand1, operand2));
      break;
    case "multiplication":
      console.log(multiply(operand1, operand2));
      break;
    case "division":
      console.log(divide(operand1, operand2).toPrecision(2));
      break;
    default:
      console.log("Enter a valid operand/operation.");
      break;
  }
}

function sum(operand1, operand2) {
  return operand1 + operand2;
}
function difference(operand1, operand2) {
  return operand1 - operand2;
}
function multiply(operand1, operand2) {
  return operand1 * operand2;
}
function divide(operand1, operand2) {
  return operand1 / operand2;
}

simpleCalculator(32, 23, "division");
