// Immediately Invoked Function Expressions (IIFE)
// Globle Scope Pollution maintainer

(function code(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// As Parameter Getting
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Kiran')