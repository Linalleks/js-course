"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  fullPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  rollback: 20,
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
  },
  asking: function () {
    appData.title = prompt("Введите название вашего проекта:");
    appData.screens = prompt(
      "Какие типы экранов нужно будет разработать? (введите через запятую)",
      "Простые, Сложные, Интерактивные"
    );

    do {
      appData.screenPrice = prompt(
        "На какую стоимость данной работы Вы расчитываете?"
      );
    } while (!appData.isNumber(appData.screenPrice));

    appData.adaptive = confirm(
      "Нужно ли будет разработать адаптив к вашему проекту?"
    );
  },
  getTitle: function () {
    return (
      appData.title.trim().charAt(0).toUpperCase() +
      appData.title.trim().slice(1).toLowerCase()
    );
  },
  getAllServicePrices: function () {
    let sum = 0;
    let price;

    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        appData.service1 = prompt("Какой дополнительный тип услуг нужен1?");
      } else {
        appData.service2 = prompt("Какой дополнительный тип услуг нужен2?");
      }

      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));

      sum += +price;
    }

    return sum;
  },
  getFullPrice: function () {
    return +appData.screenPrice + appData.allServicePrices;
  },
  getServicePercentPrices: function () {
    return Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },
  getRollbackMessage: function () {
    switch (true) {
      case appData.fullPrice >= 30000:
        return "Для Вас предусмотрена скидка в 10%";
      case appData.fullPrice >= 15000 && appData.fullPrice < 30000:
        return "Для Вас предусмотрена скидка в 5%";
      case appData.fullPrice > 0 && appData.fullPrice < 15000:
        return "Скидка не предусмотрена";
      default:
        return "Что-то пошло не так";
    }
  },
  logger: function () {
    for (const key in appData) {
      console.log(key + " = " + appData[key]);
    }
  },
  start: function () {
    appData.asking();
    appData.title = appData.getTitle();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    alert(
      "Проект " +
        appData.title +
        " принят в работу. " +
        appData.getRollbackMessage()
    );
    appData.logger();
  },
};

// const showTypeOf = function (variable) {
//   console.log(variable, typeof variable);
// };

appData.start();

// console.log(screens.toLowerCase().split(", "));
