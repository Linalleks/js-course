let title = "Проект";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 12;
let rollback = 50;
let fullPrice = 65000;
let adaptive = true;

console.log(typeof title + "," + typeof fullPrice + "," + typeof adaptive);
console.log("Длина строки " + screens);
console.log(
  "Стоимость верстки экранов " +
    screenPrice +
    " рублей\nСтоимость разработки сайта " +
    fullPrice +
    " рублей"
);

console.log(screens.toLowerCase().split(", "));

console.log(
  "Процент отката посреднику за работу " + fullPrice * (rollback / 100)
);
