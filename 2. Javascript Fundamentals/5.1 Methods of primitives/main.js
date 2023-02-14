//A  primitive
// Is a value of a primitive type.
// There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined

// The “object wrappers” are different for each primitive type and are called:
//  String, Number, Boolean, Symbol and BigInt. 
// Thus, they provide different sets of methods.

let text = "hello"
console.log(text.toUpperCase) // HELLO

let n = 1.23456;

alert( n.toFixed(2) ); // 1.23

alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"!

let zero = new Number(0);

if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}