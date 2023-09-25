// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();
let year = date.getFullYear();
console.log(`Year: ${year}`);

let month = date.getMonth();
console.log(`Month: ${month + 1}`);

let dateToday = date.getDate();
console.log(`Date: ${dateToday}`);

let day = date.getDay();
console.log(`Day: ${day}`);

let hours = date.getHours();
console.log(`Hours: ${hours}`);

let minutes = date.getMinutes();
console.log(`Minutes: ${minutes}`);

let noOfSeconds = Math.floor(date.getTime() / 1000);
console.log(`No. of seconds: ${noOfSeconds}`);
