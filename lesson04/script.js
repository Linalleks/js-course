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

let fullPrice;
let allServicePrices;
let servicePercentPrice;

function getFullPrice(screenPrice = 0, addPrice = 0) {
  return screenPrice + addPrice;
}

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getAllServicePrices = function (price1 = 0, price2 = 0) {
  return price1 + price2;
};

const getTitle = function (title) {
  return (
    title.trim().charAt(0).toUpperCase() + title.trim().slice(1).toLowerCase()
  );
};

const getServicePercentPrices = function (price = 0, rollback = 0) {
  return Math.ceil(price - price * (rollback / 100));
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

title = getTitle(title);

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);

fullPrice = getFullPrice(screenPrice, allServicePrices);

servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(rollback);
showTypeOf(adaptive);
showTypeOf(screens);

alert(getRollbackMessage(fullPrice));

console.log(screens.toLowerCase().split(", "));

console.log(servicePercentPrice);
