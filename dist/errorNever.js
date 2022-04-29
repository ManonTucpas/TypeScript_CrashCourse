"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'ddd';
if (typeof userInput === 'string') {
    userName = userInput;
}
// the return of this function is never// it never returns anything
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
