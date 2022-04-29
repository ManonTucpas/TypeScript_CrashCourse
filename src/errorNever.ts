let userInput: unknown;
let userName: string;

userInput= 5;
userInput = 'ddd';
if (typeof userInput === 'string')
{
    userName = userInput;
}


// the return of this function is never// it never returns anything
function generateError(message: string, code: number) : never
{
    throw { message: message, errorCode: code};
}

generateError('An error occured!', 500);

