// we have3 types of strings
let single = 'single-quoted'; // using ''
let double = "double-quoted"; // using ""
let backticks = `backticks`; // using `` + ${something} can be inserted

function sum (a,b){
    return a+b;
}
console.log(`1 + 2 = ${sum(1,2)}.`) // 1 + 2 = 3


// ---------------------------------------------------------------------------------
// Special Characters
let guestList = "Guests:\n * John\n * Pete\n * Mary";
// console.log(guestList)
// Guests:
//  * John
//  * Pete
//  * Mary

// Character	Description
// \n	New line
// \r	In Windows text files a combination of two characters \r\n represents a new break, while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n.
// \', \", \`	Quotes
// \\	Backslash
// \t	Tab
// \b, \f, \v	Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).


//--------------------------------------------------------------------------------------------------
// String length
console.log(`MyBLalbalblablablab`.length)
console.log(`My\n`.length) // 3


// Accessing Charachters
let test = "Hello";
// console.log(str[0]) // H
// console.log(str.at(0)) // H

// console.log (str[str.length-1]) // o
// console.log(str.at(-1)) // o
// console.log(str.at(-2)) // l

for(let char of test){
    console.log(char) // H,e,l,l,o
}
for(let char in test){
    console.log(char) //0,1,2,3,4
}
//--------------------------------------------------------------
// str.IndexOF
let str = 'Widget with id';

console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

console.log( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)
console.log( str.indexOf('id', 2) ) // 12

//------------------------------------------------------------------
// Getting a sutbstring/ we have substring,substr,slice
// str.slice(start [, end])
// Returns the part of the string from start to (but not including) end.
let line = "stringify";
console.log(line.slice(0,5)) // 'strin', the substring from 0 to 5 (not including 5)
console.log(line.slice(0,1)) // s , not inclding index 1
console.log(line.slice(2)) // "ringify" from 2nd position till the end
// start at the 4th position from the right, end at the 1st from the right
console.log( line.slice(-4, -1) ); // 'gif


// str.substring(start [, end])
// Returns the part of the string between start and end (not including end).
// This is almost the same as slice,
//  but it allows start to be greater than end (in this case it simply swaps start and end values).
console.log( line.substring(2, 6) ); // "ring"
console.log( line.substring(6, 2) ); // "ring"


// str.substr(start [, length])
// Returns the part of the string from start, with the given length.
// In contrast with the previous methods,
//  this one allows us to specify the length instead of the ending position:
console.log( line.substr(2, 4) ); // 'ring', from the 2nd position get 4 character
// starts from position 2, and goes 4 character after