"use strict";

const cropText = function (str) {
  if (typeof str !== "string") {
    return "Неверные данные на входе";
  }
  str = str.trim();
  if (str.length > 30) {
    str = str.slice(0, 30) + "...";
  }
  return str;
};

alert(cropText(prompt("Строка:")));
