const user = {
    username: "Kiran",
    price: "Free",

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to my channel`);
        console.log(this);  // this is used for getting current content
    }

}

user.welcomeMessage()
user.username = "Kiran Bai"
user.welcomeMessage()

// console.log(this); // Current Content is empty {}

// function code(){
//     let username = "kiran"
//     console.log(this);
//     console.log(username);
// }

//code()

// const code = function () {
//     let username = "Kiran"
//     console.log(this.username); // undefined because we cannot use in function nut use in object
// }

const code =  () => {
    let username = "Kiran"
    console.log(this);
}


code()

// const addTwoNo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwoNo = (num1, num2) =>  num1 + num2  // Implict Return no need to provide return keyword

// const addTwoNo = (num1, num2) => ( num1 + num2 )

const addTwoNo = (num1, num2) => ({username: "Kiran"})


console.log(addTwoNo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// Inside Browser  globle object is window object 