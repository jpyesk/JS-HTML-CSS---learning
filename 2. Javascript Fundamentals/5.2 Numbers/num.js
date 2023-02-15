// In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:
let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000
// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times

//========================================================
// toString(base)
let num = 255;
num.toString(16) // ff
num.toString(2) // 11111111

//--------------------------------------------------------
// Rounding
// Math.floor rounds down number
Math.floor(3,1) // 3
Math.floor(-1.1) // -2

// Math ceil rounds up number
Math.ceil(3.1) // 4
Math.ceil(-1.1) // -1

// Math round rounds to the nearest integer
Math.round(3.1) // 3
Math.round(3.6) // 4
Math.round(3.5) // 4 

// Math trunc removes anything after decimal point without rounding
Math.trunc(3.1)//3
Math.trunc(-1.1)//-1
console.log(Math.trunc(2.53252624)) // 2


// The method toFixed(n) rounds the number to n digits after 
// the point and returns a string representation of the result.
let numb = 12.34;
alert( numb.toFixed(1) ); // "12.3"



// ----------------------------------------------------------------------------
// Imprecise calculations
console.log(1e500)// Infinity

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5
alert( parseInt('a123') ); // NaN, the first symbol stops the process
alert( +"100px" ); // NaN "+" is same as just (Number)
alert( parseInt('12.3') ); // 12, only the integer part is returned
alert( parseFloat('12.3.4') ); // 12.3, the second point stops the reading


//-----------------------------------------------------------------------------------------
// Other math function
alert( Math.random() ); // 0.1234567894322
alert( Math.random() ); // 0.5435252343232
alert( Math.random() ); // ... (any random numbers)


// Mininmum and maximum
alert( Math.max(3, 5, -10, 0, 1) ); // 5
alert( Math.min(1, 2) ); // 1

// power function
alert(Math.pow(2,10)) // 2 in power 10 = 1024
alert(Math.pow(3,2)) // 3 in power 2 = 9

