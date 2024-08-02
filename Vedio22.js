function f1(){
    const username = "Kiran"

    function f2(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website); It show error

     f2()

}

f1()

if (true) {
    const username = "Kiran"
    if (username === "Kiran") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website); it shows rror because it is out of scope
}

//console.log(username);  it is out of scope


// Interesting  Example


console.log(add1(10))

function add1(num){
    return num + 1
}



// add2(5) //It show error because add2 varible after call the function
const add2 = function(num){
    return num + 2
}
console.log(add2(3));
