// OR operator funictons like this on booleans
// in OR operator, if we have at least one true, return will always be true
alert( true || true );   // true // both true -> true
alert( false || true );  // true // atleast 1 true -> true
alert( true || false );  // true // at least 1 true -> true
alert( false || false ); // false // both false -> false
// same goes for numbers
alert( 1 || 1 ); // true
alert( 0 || 1 );// true
alert( 1 || 0 ); // true
alert( 0 || 0 ); // false
// its mostly used for if statement to test if any of given conditions is true 
let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

let gg = 52;
let check = false;
if (gg %2 == 1 || gg%3 == 0 || check == true || check == null){ 
// ofc all of them are false so... no alert
    alert("whatever");
}

// syntax for OR
let result = value1 || value2 || value3;

// The OR || operator does the following:
// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.
alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
// empty strings are false so we get nickname which as value "supercoder"

// these are short-circuit evaluations
true || alert("not printed"); // first it true so it stops there
false || alert("printed"); // first is false so continues and alerts text



// now lets go over &&(AND) operator
//AND returns true if both operands are truthy and false otherwise:
alert( true && true );   // both true -> true
alert( false && true );  // at least one false -> false
alert( true && false );  // at least one false -> false
alert( false && false ); // both false -> false
// works same on numbers
alert( 1 || 1 ); // both true -> true
alert( 0 || 1 );// at least one false -> false
alert( 1 || 0 ); // at least one false -> false
alert( 0 || 0 ); // both false -> false

// we use it mostly  in `if` statements
let hours = 12;
let minute = 30;

if (hours == 12 && minute == 30) {
    // since both statement in `if` is true, it will go inside bracket
  alert( 'The time is 12:30' );
}

if (1 && 0) { // evaluated as true && false // so answer is 
    // wont alert anything since its false
    alert( "won't work, because the result is falsy" );
}


// AND syntax for values
result = value1 && value2 && value3;

// The AND && operator does the following:
// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
alert( 1 && 2 && null && 3 ); // null
alert( 1 && 2 && 3 ); // 3, the last one



// ! (NOT)
// Converts the operand to boolean type: true/false.
// Returns the inverse value.
alert( !true ); // false
alert( !0 ); // true

// A double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true // inverses twice so basically true becomes true
alert( !!null ); // false

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false



// ?? NULLISH concealing
// As it treats null and undefined similarly, we’ll use a special term here,
//  in this article. For brevity, 
// we’ll say that a value is “defined” when it’s neither null nor undefined.
// The result of a ?? b is:
// if a is defined, then a,
// if a isn’t defined, then b. 

let user;
alert(user ?? "Anonymous"); // -> Anonymous (user is undefined)
user = "John";
alert(user ?? "Anonymous"); // -> John (user is not null/undefined)


let firstName1 = null;
let lastName2 = null;
let nickName3 = "Supercoder";

// shows the first defined value:
alert(firstName1 ?? lastName2 ?? nickName3 ?? "Anonymous"); // Supercoder

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);
// area = 100 * 50
alert(area); // 5000



// small talk about "continue: and break"

let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );

// so here if user enters "" empty input, it will break the loop
// on the other hand,  continue is softer break function


outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');
// break the outer loop, we just name the first loop as "Outer" and we write it next to break




// now lets talk about the continue part: 
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
// for example when i becomes 2, it will stop there and go back to begining where i is increasing
// i = 3, alert, i= 4, i becomes 5, alert,i=6,i=7,alert ...




