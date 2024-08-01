// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); True
// console.log("02" > 1);  True

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // True

// The reason is equality and check == and comparsion ><>=<= work differently.
// Compsarsion convert null to a number , trating it as 0.
// Equality check == does not convert null to a number. It checks if the values are the same
// and in this case they are not. So it returns false.

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false

// ===  Strict Check It also checks data type

console.log("4" === 2);