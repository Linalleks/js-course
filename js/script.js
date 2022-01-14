"use strict";

const title = document.getElementsByTagName("h1")[0];
const handlerBtn = document.getElementsByClassName("handler_btn");
const screenBtn = document.querySelector(".screen-btn");
// const otherItems = document.querySelectorAll(".other-items");
const itemsPercent = document.querySelectorAll(".other-items.percent");
const itemsNumber = document.querySelectorAll(".other-items.number");
const inputRangeType = document.querySelector(".rollback input[type=range]");
const inputRangeValue = document.querySelector(".rollback span.range-value");
const inputsTotal = document.getElementsByClassName("total-input");

let screens = document.querySelectorAll(".screen");

console.log(title);
console.log(handlerBtn);
console.log(screenBtn);
console.log(itemsPercent);
console.log(itemsNumber);
console.log(inputRangeType);
console.log(inputRangeValue);
console.log(inputsTotal);

// const appData = {
//   title: "",
//   screens: [],
//   screenPrice: 0,
//   adaptive: true,
//   fullPrice: 0,
//   allServicePrices: 0,
//   servicePercentPrice: 0,
//   services: {},
//   rollback: 20,
//   isNumber: function (num) {
//     return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
//   },
//   asking: function () {
//     do {
//       appData.title = prompt("Введите название вашего проекта:");
//     } while (appData.isNumber(appData.title));

//     for (let i = 0; i < 2; i++) {
//       let name, price;

//       do {
//         name = prompt("Какие типы экранов нужно будет разработать?");
//       } while (appData.isNumber(name));

//       do {
//         price = prompt("На какую стоимость данной работы Вы расчитываете?");
//       } while (!appData.isNumber(price));

//       appData.screens.push({ id: i, name: name, price: price });
//     }

//     appData.adaptive = confirm(
//       "Нужно ли будет разработать адаптив к вашему проекту?"
//     );

//     for (let i = 0; i < 2; i++) {
//       let name, price;

//       do {
//         name = prompt("Какой дополнительный тип услуг нужен?");
//       } while (appData.isNumber(name));

//       do {
//         price = prompt("Сколько это будет стоить?");
//       } while (!appData.isNumber(price));

//       appData.services[name + i] = +price;
//     }
//   },
//   getTitle: function () {
//     appData.title =
//       appData.title.trim().charAt(0).toUpperCase() +
//       appData.title.trim().slice(1).toLowerCase();
//   },
//   addPrices: function () {
//     appData.screenPrice = appData.screens.reduce((total, screen) => {
//       total += +screen.price;
//       return total;
//     }, 0);

//     for (let key in appData.services) {
//       appData.allServicePrices += +appData.services[key];
//     }
//   },
//   getFullPrice: function () {
//     appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
//   },
//   getServicePercentPrices: function () {
//     appData.servicePercentPrice = Math.ceil(
//       appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
//     );
//   },
//   getRollbackMessage: function () {
//     switch (true) {
//       case appData.fullPrice >= 30000:
//         return "Для Вас предусмотрена скидка в 10%";
//       case appData.fullPrice >= 15000 && appData.fullPrice < 30000:
//         return "Для Вас предусмотрена скидка в 5%";
//       case appData.fullPrice > 0 && appData.fullPrice < 15000:
//         return "Скидка не предусмотрена";
//       default:
//         return "Что-то пошло не так";
//     }
//   },
//   logger: function () {
//     for (const key in appData) {
//       console.log(key + " = " + appData[key]);
//     }
//     console.log(appData.screens);
//     console.log(appData.services);
//   },
//   start: function () {
//     appData.asking();
//     appData.getTitle();
//     appData.addPrices();
//     appData.getFullPrice();
//     appData.getServicePercentPrices();
//     alert(
//       "Проект " +
//         appData.title +
//         " принят в работу. " +
//         appData.getRollbackMessage()
//     );
//     appData.logger();
//   },
// };

// appData.start();
