"use strict";
console.log('Testing....');
function addBasics(n1, n2, showResult, phrase) {
    // if(typeof n1 !== 'number' || typeof n2 !== 'number')
    // 	throw Error("Wrong input!");   
    const res = n1 + n2;
    if (showResult)
        console.log(phrase + res);
    else
        return res;
}
let number1;
number1 = 9;
const number2 = 434;
const printResult = true;
const resultIs = "Result is: ";
addBasics(number1, number2, printResult, resultIs);
