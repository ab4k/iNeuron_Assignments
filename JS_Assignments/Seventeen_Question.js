// 17. Write a program which tells the number of days in a month.

function noOfDays(year, month) {
  let date = new Date(year, month, 0);
  return date.getDate();
}

console.log(`Number of days: ${noOfDays(2023, 1, 0)}`);
