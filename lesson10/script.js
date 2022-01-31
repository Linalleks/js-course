const lists = document.querySelectorAll(".list");
const elems = document.querySelectorAll(".elem");

console.log(lists);
console.log(elems);

// elems[2].remove();
// elems[4].remove();

// console.log(elems);
// ______________________________
// // перемещение в конец
// lists[1].append(elems[4]);
// // перемещение в начало
// lists[1].prepend(elems[5]);

// // перед первым списком поставь список номер 2
// lists[0].before(lists[1]);
// // после четвертого элемента поставь элемент первый
// elems[3].after(elems[0]);

// // замена элемента 4 на элемент 2
// elems[4].replaceWith(elems[2]);
// elems[5].replaceWith("замена эелемента 5");

// // в cloneElem только ссылка на 3 элемент
// const cloneElem = elems[3];
// _____________________________________________
// // а так клонируется сам элемент, и чтобы получить весь узел ццеликом (node) нужно указать true
// const cloneElem = elems[3].cloneNode(true);

// cloneElem.classList.add("green-color");
// cloneElem.innerHTML = "<strong>step 6</strong>";

// lists[1].append(cloneElem);

// console.log(cloneElem);

// // ___________________________
// // создание элемента через js
// const newElem = document.createElement("li");

// newElem.textContent = "step 6";
// newElem.classList.add("elem");

// lists[1].append(newElem);

// console.log(newElem);

const title = document.getElementById("title");

// title.insertAdjacentText("beforebegin", "beforebeg");
// title.insertAdjacentText("afterend", "aftere");
// title.insertAdjacentElement("afterbegin", elems[1]);
// title.insertAdjacentHTML("beforeend", "<span>span</span>");

// appendChild - устаревший метод: нельзя передавать строку, нельзя ередавать несколько элементов, получает сам элемент в отличие от append
// lists[1].appendChild();
// lists[1].insertBefore(elems[4], elems[1]); // зависит от родителя
// lists[1].replaceChild(); //зависит от родителя
// lists[1].removeChild(elems[5]); //зависит от родителя

console.log(title);
