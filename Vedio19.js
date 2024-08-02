
function MyName(){
    console.log("K");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("N");
}

// MyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(6, 9)

// console.log("Result: ", result);


function loginUserMessage(username = "Default User Kiran"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("Kiran"))


