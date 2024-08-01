//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const grade = 50
const gradeValue = 50.5

const isLoggedIn = false
const insideTemp = null
let userEmail;

const Id1 = Symbol('123')
const Id2 = Symbol('123')

console.log(Id1 === Id2); // false return value never same

// const bigNumber = 543554356754675434565435766n



// Reference (Non primitive)

// Array, Objects, Functions

const Fruits = ["Apple", "Orange", "Mango"];
let myObj = {
    name: "Kiran",
    age: 24,
}

const myFunction = function(){
    console.log("Hello Kiran Bai");
}

console.log(typeof myFunction); // function
console.log(typeof insideTemp); // Object
console.log(typeof Id2); // Symbol