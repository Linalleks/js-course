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
    this.addTitle();
    inputRange.value = this.rollback;
    this.changeRollback();
    this.changeScreen();
    select.addEventListener("change", appData.changeScreen);
    input.addEventListener("input", appData.changeScreen);
    btnStart.addEventListener("click", this.start);
    btnPlus.addEventListener("click", this.addScreenBlock);
    inputRange.addEventListener("input", appData.changeRollback);
  },
  addTitle: function () {
    document.title = title.textContent;
  },
  changeScreen: function () {
    appData.addScreens();
    btnStart.disabled = appData.disabledStart;
    btnPlus.disabled = appData.disabledStart;
    if (!appData.disabledStart) {
      btnStart.style.opacity = "100%";
      btnStart.style.cursor = "pointer";
      btnPlus.style.opacity = "100%";
      btnPlus.style.cursor = "pointer";
    } else {
      btnStart.style.opacity = "85%";
      btnStart.style.cursor = "auto";
      btnPlus.style.opacity = "85%";
      btnPlus.style.cursor = "auto";
    }
  },
  start: function () {
    appData.addServices();
    appData.addPrices();
    appData.showResult();
    appData.block();
    btnReset.addEventListener("click", appData.reset);
  },
  reset: function () {
    appData.removeServices();
    appData.clearResult();
    appData.deblock();
  },
  block: function () {
    btnStart.style.display = "none";
    btnStart.disabled = true;
    btnStart.style.opacity = "85%";
    btnStart.style.cursor = "auto";
    btnReset.style.display = "";
    btnPlus.disabled = true;
    btnPlus.style.opacity = "85%";
    btnPlus.style.cursor = "auto";
    screens = document.querySelectorAll(".screen");
    screens.forEach((screen) => {
      select = screen.querySelector("select");
      input = screen.querySelector("input");

      select.disabled = true;
      input.disabled = true;
    });
  },
  deblock: function () {
    btnStart.style.display = "";
    btnReset.style.display = "none";
    inputRange.value = 10;
    this.changeRollback();
    screens = document.querySelectorAll(".screen");
    screens.forEach((screen, index) => {
      if (index > 0) {
        screens[index].remove();
      } else {
        select = screen.querySelector("select");
        input = screen.querySelector("input");
        select.value = "";
        input.value = "";
        select.disabled = false;
        input.disabled = false;
      }
    });
  },
  showResult: function () {
    total.value = this.screenPrice;
    totalCountOther.value =
      this.servicePricesPercent + this.servicePricesNumber;
    fullTotalCount.value = this.fullPrice;
    totalCountRollback.value = this.priceRollback;
    totalCount.value = this.count;
  },
  clearResult: function () {
    total.value = 0;
    totalCountOther.value = 0;
    fullTotalCount.value = 0;
    totalCountRollback.value = 0;
    totalCount.value = 0;
  },
  addScreens: function () {
    let dis = 0;
    screens = document.querySelectorAll(".screen");
    appData.screens = [];
    appData.count = 0;
    screens.forEach((screen, index) => {
      select = screen.querySelector("select");
      input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      if (!select.value || !input.value) {
        dis++;
      } else {
        appData.count += +input.value;
        appData.screens.push({
          id: index,
          name: selectName,
          price: +select.value * +input.value,
        });
      }
    });

    if (dis > 0) {
      appData.disabledStart = true;
    } else {
      appData.disabledStart = false;
    }
  },
  addServices: function () {
    itemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    itemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");
      const label = item.querySelector("label");
      const input = item.querySelector("input[type=text]");

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },
  removeServices: function () {
    itemsPercent.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");

      if (check.checked) {
        check.checked = false;
      }
    });

    itemsNumber.forEach((item) => {
      const check = item.querySelector("input[type=checkbox]");

      if (check.checked) {
        check.checked = false;
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
    for (const key in this) {
      console.log(key + " = " + this[key]);
    }
    console.log(this.screens);
    console.log(this.services);
  },
};

appData.init();
