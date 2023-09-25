// 18. Write a program which tells the number of days in a month, now consider leap year.

const noOfDaysInAMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

console.log(noOfDaysInAMonth(2, 2024));
