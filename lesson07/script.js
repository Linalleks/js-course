"use strict";

let week = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];

let date = new Date();
let dayOfWeek = date.getDay();
let html = document.getElementById("week");

// for (let i = 0; i < week.length; i++) {
//   switch (i) {
//     case 0:
//     case 6:
//       html.innerHTML += "<i>" + week[i] + "</i><br>";
//       break;
//     case dayOfWeek:
//       html.innerHTML += "<b>" + week[i] + "</b><br>";
//       break;
//     default:
//       html.innerHTML += week[i] + "<br>";
//   }
// }

week.forEach((el, i) => {
  switch (i) {
    case 0:
    case 6:
      html.innerHTML += "<i>" + el + "</i><br>";
      break;
    case dayOfWeek:
      html.innerHTML += "<b>" + el + "</b><br>";
      break;
    default:
      html.innerHTML += el + "<br>";
  }
});
