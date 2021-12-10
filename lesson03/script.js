"use strict";

// let answer = confirm("Да или нет");
// let answer = +prompt("Сколько", "Например, 18");

// switch (true) {
//   case answer > 3:
//     console.log("больше 3");
//     break;
//   case answer <= 3:
//     console.log("меньше 3");
//     break;
// }

// answer === 10 ? console.log(10) : console.log(0);

let title = prompt("Введите название вашего проекта:");
let screens = prompt(
  "Какие типы экранов нужно будет разработать? (введите через запятую)",
  "Простые, Сложные, Интерактивные"
);
let screenPrice = +prompt(
  "На какую стоимость разработки вашего проекта Вы расчитываете?"
);
let adaptive = confirm("Нужно ли будет разработать адаптив к вашему проекту?");
let service1 = prompt(
  "Введите дополнительный тип услуг №1, который Вам нужен:"
);
let servicePrice1 = +prompt("Сколько данная услуга будет стоить?");
let service2 = prompt(
  "Введите дополнительный тип услуг №2, который Вам нужен:"
);
let servicePrice2 = +prompt("Сколько данная услуга будет стоить?");

let rollback = 20;

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

console.log(servicePercentPrice);

switch (true) {
  case fullPrice >= 30000:
    alert("Для Вас предусмотрена скидка в 10%");
    break;
  case fullPrice >= 15000 && fullPrice < 30000:
    alert("Для Вас предусмотрена скидка в 5%");
    break;
  case fullPrice > 0 && fullPrice < 15000:
    console.log("Скидка не предусмотрена");
    break;
  default:
    alert("Что-то пошло не так");
}
