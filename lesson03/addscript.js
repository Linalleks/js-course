"use strict";

let lang = prompt("Введите необходимый язык");

let days = {
  en: [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ],
  ru: [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ],
};

// if (lang == "ru") {
//   alert("понедельник, вторник, среда, четверг, пятница, суббота, воскресенье");
// } else if (lang == "en") {
//   alert("monday, tuesday, wednesday, thursday, friday, saturday, sunday");
// } else {
//   alert("Вы ввели некорректный язык");
// }

// switch (lang) {
//   case "ru":
//     alert(
//       "понедельник, вторник, среда, четверг, пятница, суббота, воскресенье"
//     );
//     break;
//   case "en":
//     alert("monday, tuesday, wednesday, thursday, friday, saturday, sunday");
//     break;
//   default:
//     alert("Вы ввели некорректный язык");
// }

// alert(days[lang].join(", "));

let namePerson = prompt("Имя");

namePerson === "Артем"
  ? console.log("Директор")
  : namePerson === "Александр"
  ? console.log("Преподаватель")
  : console.log("Студент");
