const grade = 200
// console.log(grade);

const balance = new Number(100)
// console.log(balance);  // Number: [80]

// console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 673.856

console.log(otherNumber.toPrecision(4)); // Precise concise within 4 value according to precise value passed

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//Math

console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(3.7));
// console.log(Math.ceil(3.2));
// console.log(Math.floor(5.9));
// console.log(Math.min(2,4 , 1, 8));
// console.log(Math.max(1, 3, 6, 7));

console.log(Math.random()); // its value between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 50
const max = 80

console.log(Math.floor(Math.random() * (max - min + 1)) + min)