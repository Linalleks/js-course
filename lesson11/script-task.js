"use strict";

const btn = document.querySelector("#btn");
const eBtn = document.querySelector("#e_btn");
const input = document.querySelector("#text");
const range = document.querySelector("#range");
const rangeSpan = document.querySelector("#range-span");
const square = document.querySelector("#square");
const circle = document.querySelector("#circle");

const circleSize = function (e) {
  circle.style.height = e.target.value + "%";
  circle.style.width = e.target.value + "%";
  rangeSpan.textContent = e.target.value;
};

range.value = 0;
eBtn.style.display = "none";

btn.onclick = function () {
  square.style.backgroundColor = input.value;
};

range.addEventListener("input", circleSize);
