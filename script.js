"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let fullPrice;
let allServicePrices;
let servicePercentPrice;
let service1;
let service2;
let rollback = 20;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
};

const asking = function () {
  title = prompt("Введите название вашего проекта:");
  screens = prompt(
    "Какие типы экранов нужно будет разработать? (введите через запятую)",
    "Простые, Сложные, Интерактивные"
  );

  do {
    screenPrice = prompt("На какую стоимость данной работы Вы расчитываете?");
  } while (!isNumber(screenPrice));

  adaptive = confirm("Нужно ли будет разработать адаптив к вашему проекту?");

  screenPrice.trim();
};

function getFullPrice(screenPrice = 0, addPrice = 0) {
  return screenPrice + addPrice;
}

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getAllServicePrices = function () {
  let sum = 0;
  let price;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуг нужен?");
    } else {
      service2 = prompt("Какой дополнительный тип услуг нужен?");
    }

    do {
      price = prompt("Сколько это будет стоить?");
    } while (!isNumber(price));

    price.trim();
    sum += +price;
  }

  return sum;
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

asking();
title = getTitle(title);
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(+screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(rollback);
showTypeOf(adaptive);
showTypeOf(screens);

alert(
  "Проект " + title + " принят в работу.<br>" + getRollbackMessage(fullPrice)
);

console.log(screens.toLowerCase().split(", "));

console.log(servicePercentPrice);
