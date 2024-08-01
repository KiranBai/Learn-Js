// Data type Conversion confusion
let grade = "44abc"

//  let grade = "Kiran"; then its value is NAN
//  let grade = 33; then its value is number
//  let grade = null; then its value is 0
//  let grade = undefined; then its value is NAN(Not a number)
//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(grade)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);  // It shows NAN (Not a number)


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

// let isLoggedIn = 1 // True
let isLoggedIn = "KIRAN" // True

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "KIRAN" => true

let Number = 33

let stringNumber = String(Number)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// Operations Working 
let value = 3
let negValue = -value
// console.log(negValue);

//  Basic Operations
// console.log(5+2);
// console.log(5-2);
// console.log(3*2);
// console.log(5**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Kiran"
let str2 = " Bai"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 5);  Output: 15
// console.log(1 + "5");  Output: 15
// console.log("1" + 3 + 5);  Output: 135
// console.log(1 + 2 + "4");  Output: 34

// console.log( (3 + 4) * 5 % 3);  // Use Parenthesis

// console.log(+true);  Output: 1
// console.log(+"");    Output: 0

let num1, num2, num3

num1 = num2 = num3 = 4 + 9

let Counter = 1000
++Counter;
console.log(Counter);