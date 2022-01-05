"use strict";

let arr = [
  "двадцать девять",
  "сто пять",
  "две тысячи сто тридцать восемь",
  "восемьсот пятьдесят",
  "семьдесят шесть",
  "сорок пять",
  "четыреста тридцать",
];

for (let i = 0; i < arr.length; i++) {
  if (
    arr[i].substr(0, 2) === "дв" ||
    arr[i].substr(0, 2) === "че" ||
    arr[i].substr(0, 2) === "со"
  ) {
    console.log(arr[i]);
  }
}

for (let i = 2; i < 100; i++) {
  let notSimple = false;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      notSimple = true;
      break;
    }
  }

  if (!notSimple) {
    console.log(i + " - Делители этого числа: 1 и " + i);
  }
}
