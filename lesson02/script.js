let num = 266219;

let multipl = 1;

while (num > 0) {
  multipl *= num % 10;
  num = Math.floor(num / 10);
}

console.log(multipl);

multipl **= 3;

console.log(multipl);
console.log((multipl + "").substr(0, 2));
