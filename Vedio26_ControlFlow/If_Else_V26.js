// Learing about If  and else condition
const isUserLogin = true;
const Temperature = 41 ; 
// if(condition){
    // condition 4==4 , 2<2 , 4!=5 , 2=="2" , Temperature < 30
    // code to be executed if condition is true
    // console.log("Less then  30")
// }
// if( 2 == "2"){
//     console.log ("Code Executed");
// }
// else{
    // code to be executed if condition is false
    // console.log("Above 30")
//}
// comparsion operator like <, >, <= ,>= ,==,!= , === , !==

const grade = 150;
if ( grade > 80){
    const power = "fly"
    console.log( `User Power : ${power}`);
}
// console.log( `User Power : ${power}`); get error because it is out of scope

const balance = 3000 ;
if (balance > 1000)  console.log("test") // implicit Scope with in one line 
// if (balance > 1000)  console.log("Test 1") , 
// console.log("Test 2");    Don't Recommended b/c it Removes the code Readibility

if (balance < 1000){
    console.log("Low Balance");
}
else if (balance < 1250){
    console.log("Medium Balance");
}
else if (balance < 1500){
    console.log("High Balance");
}
else if (balance < 1750){
    console.log("Very High Balance");
}
else {
    console.log("Extremely High Balance");
}

const debitCard = true ;
const loginFromGoogle = false;
const loginFromEmail = true ;
if (isUserLogin && debitCard && 4 == 4){
    console.log("Transaction Success");
}

if (loginFromGoogle || loginFromEmail){
    console.log("User is logged in");
}

