// JavaScript execution Context where we let to know how javascript excute the code in a machine
// JavaScript execution Context is divided into 3 parts
// 1. Global Execution Context
// 2. Function Execution Context
// 3. Eval Execution Context
// Global Execution Context ?
// Global Execution Context is the execution context where the code is executed when the script is loaded in the
// browser or when the script is run in the Node.js environment like variable "this value is window object"
// Function Execution Context ?
// Function Execution Context is the execution context where the code is executed when a function is called
// Eval Execution Context ?
// Eval Execution Context is the execution context where the code is executed when the eval() function is called
// Memory Creation Phase where it allocate the memory to the varible but not execute it vaible like x,y = undefined addNo
// Execution Phase where we add value to the varible x=20 , y=30 addNo make its own execution context makes new varible environment and new execution thread
// Once Globle Execution Context Completes then it Delete
// Exceution context working on Last in first out Means Works as stack Call
// Inside Inspect source we can see the flow of call stack 
let x=20;
let y=30;
function addNo(no1 , no2){
let sum = no1 + no2;
return sum;
}
let R1 = addNo (x, y);
console.log(R1);

