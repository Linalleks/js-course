// const square = document.getElementById("square");
// let counter = 0;

// const logger = function () {
//   counter++;
//   if (counter === 3) {
//     square.removeEventListener("click", logger);
//   }
//   console.log("Клик по квадрату");
// };

// const logger1 = function () {
//   console.log("Клик по квадрату1");
// };

// square.onclick = function () {
//   logger();
//   logger1();
// };

// square.onclick = null;

// console.dir(square);

// square.addEventListener("click", logger);
// square.removeEventListener("click", logger); // удалять можно только именные функции
// square.addEventListener("click", function () {
//   console.log("Клик по квадрату1");
// });

// -----------------------------------------

// const square = document.getElementById("square");
// const loggerE = function (event) {
//   console.log(event.type);
// };

// square.addEventListener("click", loggerE);
// square.addEventListener("mouseup", loggerE);
// square.addEventListener("mousedown", loggerE);
// square.addEventListener("mousemove", loggerE);
// square.addEventListener("mouseenter", loggerE);
// square.addEventListener("mouseleave", loggerE);
// mouseenter, mouseleave похожи на mouseover, mouseout - разница видна когда в элементе есть вложенные элементы
// square.addEventListener("mouseover", loggerE);
// square.addEventListener("mouseout", loggerE);

// ------------------------------------------

// const range = document.getElementById("range");
// const text = document.getElementById("text");
// const rspan = document.getElementById("range-span");
// const span = document.getElementById("text-span");

// const loggerE = function (event) {
//   console.log(event.type);
//   rspan.textContent = event.target.value;
// };

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("DOM построен");
// });

// // работает криво и на данное событие все чаще ставят блокировку
// window.onbeforeunload = function () {
//   return "Вы уверены что хотите покинуть данную страницу";
// };

// // text.addEventListener("input", loggerE);
// // text.addEventListener("focus", loggerE);
// // text.addEventListener("blur", loggerE);
// // text.addEventListener("change", loggerE);
// // text.addEventListener("keyup", loggerE);
// // text.addEventListener("keydown", loggerE);

// range.addEventListener("input", loggerE);
// range.addEventListener("change", loggerE);

// -----------------------------------

// изменение стандартного поведения эл-тов на странице
const link = document.querySelector("a");

link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("клик по ссылке");
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  console.log("где меню?");
});

// --------------------

const btn = document.querySelector("#e_btn");
const circle = document.querySelector("#circle");
const square = document.querySelector("#square");

const toggler = function (e) {
  e.stopPropagation();
  // остановить всплытие (событий у родителя элемента) и перехват (наоборот от родителя к дочернему элементу)

  console.log(
    "событие ппроизошло на " +
      e.target.id +
      " и перенеслось на " +
      e.currentTarget.id
  );
  e.target.classList.toggle("green");
};

btn.addEventListener("click", toggler, true);
circle.addEventListener("click", toggler);
square.addEventListener("click", toggler);
