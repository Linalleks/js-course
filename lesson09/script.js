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

// Необходимо выполнить в отдельном js файле, подключенному к отдельной html странице

// 1) Выведите на страницу текущую дату и время в 2-х форматах:

//     a) 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'

//     б) '04.02.2020 - 21:05:33'

// 2) Для вывода в формате (а) напишите функцию, которая будет менять склонение слов в зависимости от числа, "час, часов, часа"

// 3) Для вывода в формате (б) напишите функцию, которая будет добавлять 0 перед значениями которые состоят из одной цифры (из 9:5:3 1.6.2019 сделает 09:05:03 01.06.2019)

// 4) С помощью функции setInterval, реализуйте обновление даты и времени каждую секунду

// 5) Добавить папку с уроком на свой GitHub
