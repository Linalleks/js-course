// callstack - контейнер функций
// контейнер отложенных функций
// const one = function () {
//   console.log("start 1");
//   two();
//   console.log("end 1");
// };
// const two = function () {
//   console.log("start 2");
//   three();
//   console.log("end 2");
// };
// const three = function () {
//   console.log("run 3");
// };

// setTimeout(three, 2000);
// one();

// ---------------------------
// this - контекст вызова
// ссылка на объект в котором она вызвана
// чтобы из функционала нельзя было получить доступ к глобальному объяекту window - нужно использовать строгий режим
// var - регистрирует функцию в глобальном объекте как метод этого объекта
// const и let - выдаст ошибку, что есть хорошо

"use strict";

// const user1 = {
//   name: "Lina",
//   say: say,
// };
// const user2 = {
//   name: "Olivka",
//   say: say,
// };

// function say(a, b) {
//   console.log(a + b);
//   console.log(this.name);
// }

// user1.say();
// user2.say();

// // насильная/явная привязка объекта
// say.call(user1, 1, 2);
// say.apply(user1, [1, 2]);

// // фиксированная привязка, зафиксируем привязку к определенному объекту
// const newSay = say.bind(user1);
// const newSay1 = say.bind(user2);

// newSay();
// newSay1();

// -------------

// const user = {
//   name: "Aleks",
//   say: function () {
//     console.log(this.name);
//   },
// };

// // если метод объекта вызвать в отложенных функиях, то данная функия будет помещена в контейнер отл. функций, а объектом ее вызова по умолчанию станет виндов
// // чтобы избежать этого, можно поместить вызов функции в анонимную функцию
// setTimeout(function () {
//   user.say();
// }, 2000);

// ----------
// стрелочные функции
// полное отсутствие собственного контекста вызова
const counter = (a, b) => {
  return a + b;
};
const counter2 = (a, b) => a + b;
const counter3 = (a) => a + 3;

const obj = {
  array: [1, 2, 3, 4],
  someFunc: function () {
    this.array.forEach((item) => {
      console.log(this);
      console.log(item);
    });
  },
};

obj.someFunc();

const func = () => ({
  name: "Lina",
  city: "Kras",
});

console.log(func());

// УСЛОЖНЕННОЕ ЗАДАНИЕ:

// 1) В нашем проекте (в верстке) есть input[type=checkbox] с id=cms-open. При его выборе должен открываться блок с классом hidden-cms-variants.
// Внимание, блоку с классом hidden-cms-variants необходимо добавлять свойство display: flex, а не display: block.
// 2) При выборе option с значением "Другое" (value=other) должен открываться блок с классом main-controls__input, но только тот, что внутри блока с классом hidden-cms-variants (ВНИМАНИЕ, блоков с классом main-controls__input в проекте много, искать стоит внутри определенного элемента)
// 3) Если в input[type=checkbox] выбран вариант с числовым value (value=50) то высчитываем общую стоимость работы с учетом данного value. Значение - процент от общей стоимости работы

// Пример: общая стоимость работы равна 30.000. При выборе варианта WordPress с value=50 стоимость работы рассчитывается так: 30.000 + 15.000 = 45.000 (15.000 это 50% от 30.000)

// 4) При нажатии на кнопку Сброс метод reset() должен возвращать в исходное состояние и блок с классом hidden-cms-variants
