// This chapter briefly recaps the features of JavaScript that we’ve learned by now, 
// paying special attention to subtle moments.

// To fully enable all features of modern JavaScript, we should start scripts with "use strict".

// 3 ways to declare variables:
let x; // mostly used
const y = 15 // cant be changed 
var z; // old style let


// 8 data types
x = Number("23"); // for floating-pint and integers
let k = 23758239785273985897235n // this is bigint cuz it ends with n
//string
// boolean with true/false
// null and undefined
// object and symbol for complex data structures

typeof null == "object" // error in the language
typeof function(){} == "function" // functions are treated specially


let what;
prompt(question, [what]) // default is "" if u dont enter anything
// Ask a question, and return either what the visitor entered or null if they clicked “cancel”.
confirm(question)
// Ask a question and suggest to choose between Ok and Cancel. The choice is returned as true/false.



// The binary plus + concatenates strings.
//  And if any of the operands is a string,
//  the other one is converted to string too:
alert( '1' + 2 ); // '12', string
alert( 1 + '2' ); // '12', string