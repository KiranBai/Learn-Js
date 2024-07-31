console.log("Kiran");
//  Why we need to learn Javascript ?
//     Because we want make multiple website like E-Commerce Social Media Website as responsive either fir web or mobile app view
// If we want to collect data from user then we make Registration login form where user enters its data and we need memory space to store such user data
//  That why we need to learn about Let , var and const

const Account_Id = 1;
let Email = "ktbonline1999@gmail.com";
var Password = "123";
City = "Daherki"
let State; //When we only intialize it then it gives undefined value in output;

// Not to use var todays because it create complexity as block scope and functional scope

Email = "ktbonline1099@gmail.com";
Password = "1234"
City = "Daherki Pakistan"


// Account_Id = 2; we get error because const datatype take only one value which can not be updated.
console.log(Account_Id);

console.table([Account_Id , Email , Password , City , State]);
