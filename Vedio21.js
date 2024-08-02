var c = 120
let a = 150
// {} It is called scope
if (true) {
    let a = 100
    const b = 200
    console.log("INNER: ", a);
    
}



console.log("OUTER: ", a);
// console.log(b);
console.log("C Value: " , c);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// Globle Scope work Differently within inspect on Browser or Work Node js

