console.log('Testing....');

function add(n1: number, n2: number, showResult: boolean, phrase: string)
{
	// if(typeof n1 !== 'number' || typeof n2 !== 'number')
	// 	throw Error("Wrong input!");   
	const res = n1 + n2;
	if (showResult)
		console.log(phrase + res);
	else
		return n1 + n2;
}

let number1: number;
number1 = 9;
const number2 = 434;
const printResult = true;
const resultIs = "Result is: ";

add(number1, number2, printResult, resultIs);
