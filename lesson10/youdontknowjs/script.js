"use strict";

const adv = document.querySelector(".adv");
const body = document.querySelector("body");
const books = document.querySelectorAll(".book");
const sections = document.querySelectorAll("li");
const titles = document.querySelectorAll(".book h2 a");

adv.remove();

body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

books[0].before(books[1]);
books[4].after(books[3]);
books[5].after(books[2]);

titles[4].textContent = "Книга 3. this и Прототипы Объектов";

sections[3].after(sections[6]);
sections[6].after(sections[8]);
sections[9].after(sections[2]);

sections[49].before(sections[55]);
sections[50].after(sections[48]);
sections[54].before(sections[51]);

sections[25].after("Глава 8: За пределами ES6");

console.log(sections);
console.log(books);
