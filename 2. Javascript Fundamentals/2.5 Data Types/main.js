alert( 1 / 0 ); // Infinity value in math
alert( Infinity ); // Infinity
alert("number" / 2) // NaN ( divisional error)
alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN


// BigInt type was recently added to the language to represent integers of arbitrary length.
// A BigInt value is created by appending n to the end of an integer:

// the "n" at the end means it's a BigInt
const numbr = 1234567890123456789012345678901234567890n;


let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;



// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

let new_name = "John";

// embed a variable
alert( `Hello, ${new_name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3


let iftrue = true; // boolean values
let IfFalse = false; // boolean values 
let age = null; // null value
let isgreater = 4>1; // true value


let age_2;
alert(age_2); // shows "undefined

// The typeof operator returns the type of the operand. 
// It’s useful when we want to process values of different types differently or just want to do a quick check.
// A call to typeof x returns a string with the type name:
typeof age_2 // undefined
typeof 0 // number;
typeof 10n //bigint;
typeof true // bolean
typeof "foo" //string
typeof Symbol("id") // symbol
typeof null // "obbject"
typeof Math // object
typeof alert // alert is function