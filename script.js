"use strict";

const title = document.getElementsByTagName("h1")[0];
const btnStart = document.querySelector("#start");
const btnReset = document.querySelector("#reset");
const btnPlus = document.querySelector(".screen-btn");
const itemsPercent = document.querySelectorAll(".other-items.percent");
const itemsNumber = document.querySelectorAll(".other-items.number");
const inputRange = document.querySelector(".rollback input[type=range]");
const spanRange = document.querySelector(".rollback span.range-value");
const total = document.getElementsByClassName("total-input")[0];
const totalCount = document.getElementsByClassName("total-input")[1];
const totalCountOther = document.getElementsByClassName("total-input")[2];
const fullTotalCount = document.getElementsByClassName("total-input")[3];
const totalCountRollback = document.getElementsByClassName("total-input")[4];

let screens = document.querySelectorAll(".screen");
let select = document.querySelector("select");
let input = document.querySelector("input");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  count: 0,
  adaptive: true,
  fullPrice: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  priceRollback: 0,
  servicesPercent: {},
  servicesNumber: {},
  rollback: 10,
  disabledStart: true,
  init: function () {
    appData.addTitle();
    inputRange.value = 10;
    spanRange.textContent = "10%";
    btnStart.disabled = appData.disabledStart;
    btnStart.style.opacity = "85%";
    btnStart.style.cursor = "auto";
    select.addEventListener("change", appData.changeScreen);
    input.addEventListener("input", appData.changeScreen);
    btnStart.addEventListener("click", appData.start);
    btnPlus.addEventListener("click", appData.addScreenBlock);
    inputRange.addEventListener("input", appData.changeRollback);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  changeScreen: function () {
    appData.addScreens();
    btnStart.disabled = appData.disabledStart;
    if (!appData.disabledStart) {
      btnStart.style.opacity = "100%";
      btnStart.style.cursor = "pointer";
    } else {
      btnStart.style.opacity = "85%";
      btnStart.style.cursor = "auto";
    }
  },
  start: function () {
    appData.addServices();
    appData.addPrices();
    appData.showResult();
    console.log(appData);
    btnStart.style.display = "none";
    btnReset.style.display = "";
    // appData.logger();
  },
  showResult: function () {
    total.value = appData.screenPrice;
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    fullTotalCount.value = appData.fullPrice;
    totalCountRollback.value = appData.priceRollback;
    totalCount.value = appData.count;
  },
  addScreens: function () {
    screens = document.querySelectorAll(".screen");
    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.count += +input.value;

      if (!select.value || !input.value) {
        appData.disabledStart = true;
      } else {
        appData.disabledStart = false;
      }

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
      });
      console.log(select.value);
    });
  },
  addServices: function () {
    itemsPercent.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    itemsNumber.forEach(function (item) {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  addScreenBlock: function () {
    const cloneScreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneScreen);
    cloneScreen
      .querySelector("select")
      .addEventListener("change", appData.changeScreen);
    cloneScreen
      .querySelector("input")
      .addEventListener("input", appData.changeScreen);
    appData.changeScreen();
  },
  changeRollback: function () {
    spanRange.textContent = inputRange.value + "%";
    appData.rollback = +inputRange.value;
    if (btnStart.style.display == "none") {
      appData.priceRollback = Math.ceil(
        appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
      );
      totalCountRollback.value = appData.priceRollback;
    }
  },
  addPrices: function () {
    appData.screenPrice = appData.screens.reduce((total, screen) => {
      total += +screen.price;
      return total;
    }, 0);

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;

    appData.priceRollback = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },
  logger: function () {
    for (const key in appData) {
      console.log(key + " = " + appData[key]);
    }
    console.log(appData.screens);
    console.log(appData.services);
  },
};

appData.init();
