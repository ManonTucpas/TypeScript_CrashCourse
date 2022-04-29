"use strict";
/* UNION TYPES
*
* could be either a number or a string or other type defined:
* input1: number | string
* OR
* input1: number | string | boolean

* Alias: 'type' keyword to create union type and use it later on the code

*/
function combine(input1, // <==> input1: number | string,
input2, // <==> input2: number | string,
resultConversion // <==> 'as-number' | 'as-text' // <==>  resultConversion: string
) {
    let result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number')
        result = +input1 + +input2; //convert to number by putting '+' before the variable
    else
        result = input1.toString() + input2.toString();
    return result;
}
const combinedAges = combine(30, 60, 'as-number');
console.log(combinedAges);
const combinedAgesStr = combine('30', '60', 'as-number');
console.log(combinedAgesStr);
const combinedNames = combine('Manon', 'Lecuyer', 'as-text');
console.log(combinedNames);
