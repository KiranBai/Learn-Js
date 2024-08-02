// Learning Strings
const username = "Kiran"
const repoCount = 20

// console.log(username + repoCount + " Value"); // Now it is not used

console.log(`Hello my name is ${username} and my repository count is ${repoCount}`); // Back Tick

const Name = new String('Kiran-Bai')

// console.log(Name[0]); // k
// console.log(Name.__proto__); // {}


// console.log(Name.length); //9
// console.log(Name.toUpperCase()); // Convert All to upper case
console.log(Name.charAt(2)); // Which value at that index
console.log(Name.indexOf('a')); // At this char what is its index

const newString = Name.substring(0, 3)
console.log(newString);

const anotherString = Name.slice(-9, 4)
console.log(anotherString);

const newStringOne = "   KiranBai    "
console.log(newStringOne);
console.log(newStringOne.trim()); // It removes starting and ending spaces

const url = "https://Kiran.com/Kiran%20Bai"

console.log(url.replace('%20', '-'))

console.log(url.includes('talreja'))

console.log(Name.split('-'));