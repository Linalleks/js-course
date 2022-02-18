// localStorage["name"] = "Lina";
// localStorage.name = "Lina";
// console.log(localStorage.name);

// localStorage.setItem("name", "Linaf");

// console.log(localStorage.getItem("name"));

// localStorage.removeItem("name");
// localStorage.clear();

// -------------------------

// const input = document.getElementById("input");
// const btnSave = document.getElementById("btn_save");
// const btnRemove = document.getElementById("btn_remove");
// const text = document.getElementById("text");

// const showText = function () {
//   text.textContent = sessionStorage.getItem("text");
// };

// btnSave.addEventListener("click", function () {
//   sessionStorage.setItem("text", input.value);
//   showText();
// });
// btnRemove.addEventListener("click", function () {
//   sessionStorage.clear();
//   localStorage.clear();
//   showText();
// });

// showText();

// --------------------------

// let date = new Date(2023, 02, 22, 14, 20, 00);

// console.log(date.toUTCString());
// document.cookie = "name=Lina; expires = " + date.toUTCString();

// --------------------

const user = {
  name: "Lina",
  city: "Kras",
};

document.cookie = "user=" + JSON.stringify(user);
