// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

const month = prompt("Enter month name: ");
if (month == "September" || month == "October" || month == "November") {
  alert("This is Autumn.");
} else if (month == "December" || month == "January" || month == "February") {
  alert("This is Winter.");
} else if (month == "March" || month == "April" || month == "May") {
  alert("This is Spring.");
} else if (month == "June" || month == "July" || month == "August") {
  alert("This is Summer.");
} else {
  alert("Enter a valid month.");
}
