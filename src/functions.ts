function add(n1: number, n2: number): number // this is the type return of the ft
{
    return n1 + n2;  
}

function printResultFt(num: number) : void
{
    console.log('Result: ' + num);
}

//cb is a call back function
function addAndHandle(n1 : number, n2: number, cb: (num:number) => void)
{
    const result = n1 + n2;
    cb(result);
}

printResultFt(add(5, 13));

// ==> combineValues is a function '(arg1, arg2)' that returns a number
// which accepts arg1 et arg2 :numbers
let combineValues: (a: number , b: number) => number; 


combineValues = add;

console.log(combineValues(6,7));

addAndHandle(2,4, (result) => {

    console.log(result);
}); // passing an anonymous function

