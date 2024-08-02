const userEmail = []
// const useremail = "Kiranbai1999.gmail"
// if  it is String userEmail is empty then we said Don't have UserEmail
// if  it is Empty Array userEmail then we said Got User Email

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){} empty function

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10  data base or firebase using  this operator
// val1 = null ?? 10  // passes 10
// val1 = undefined ?? 15  //  passes 15
val1 = null ?? 10 ?? 20 // passes 10

console.log(val1);

// Terniary Operator

// condition ? true : false

const StationaryPrice = 200
StationaryPrice <= 180 ? console.log("less than 180") : console.log("more than 180")