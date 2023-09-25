// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let time = new Date();
console.log(
  `${time.getFullYear()}-${
    time.getMonth() + 1
  }-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`
);
console.log(
  `${time.getDate()}-${
    time.getMonth() + 1
  }-${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`
);
console.log(
  `${time.getDate()}/${
    time.getMonth() + 1
  }/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`
);
