function calculateCartPrice(val1, val2, ...num1){  // rest Operator Usage 
    return num1
}

// console.log(calculateCartPrice(700, 400, 900, 1000))  // Get an array

const user = {
    username: "Kiran",
    prices: 250
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Kiran",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray)); // 100
console.log(returnSecondValue([700, 400, 900, 1000])); // 900