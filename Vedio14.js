// array
// Shallow Copy  sharing same refrence point
// Deep Copy do not sharing same reference point
const myArr = [2, 4, 6, 8, 10, 12]
const Fruits = ["Apple", "Banana"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(14)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0) // add at array start
// myArr.shift() // Remove from Start

console.log(myArr.includes(8));
console.log(myArr.indexOf(4));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice
// Use slice when you want to create a new array from a portion of an existing array without modifying it.
// Use splice when you want to modify an array by removing, replacing, or adding elements.

console.log("A ", myArr);

const mynew1 = myArr.slice(1, 3)

console.log(mynew1);
console.log("B ", myArr);


const mynew2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(mynew2);