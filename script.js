"use strict";

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

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getRollbackMessage = function (price) {
  switch (true) {
    case price >= 30000:
      return "Для Вас предусмотрена скидка в 10%";
    case price >= 15000 && price < 30000:
      return "Для Вас предусмотрена скидка в 5%";
    case price > 0 && price < 15000:
      return "Скидка не предусмотрена";
    default:
      return "Что-то пошло не так";
  }
};

showTypeOf(rollback);
showTypeOf(adaptive);
showTypeOf(screens);

alert(getRollbackMessage(fullPrice));

console.log(screens.toLowerCase().split(", "));

console.log(servicePercentPrice);
