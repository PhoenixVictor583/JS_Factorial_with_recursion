'use strict'
function calculatesFactorial(number){
if (number ===1){
    return 1;
}
else return number*(calculatesFactorial(number-1))
}
