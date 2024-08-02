// It it is made by constructor then it is singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const UserINfo = {
    name: "Kiran",
    "full name": "Kiran bai",
    [mySym]: "mykey1",
    age: 24,
    location: "Daherki",
    email: "Kiran@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(UserINfo.email)
// console.log(UserINfo["email"])
// console.log(UserINfo["full name"])
// console.log(UserINfo[mySym])

UserINfo.email = "Kiran@chatgpt.com"
// Object.freeze(UserINfo)
UserINfo.email = "Kiran@microsoft.com"
// console.log(UserINfo);

UserINfo.greeting = function(){
    console.log("Hello JS Learner user");
}
UserINfo.greetingTwo = function(){
    console.log(`Hello JS  Learner user, ${this.name}`);
}

console.log(UserINfo.greeting());
console.log(UserINfo.greetingTwo());