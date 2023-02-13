alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) ); //0
alert( "6" / "2" ); // 3, strings are converted to numbers

let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0
// It actually does the same thing as Number(...), but is shorter.

let counter = 1;
let a = counter++; // (*) changed ++counter to counter++
let b = ++counter;
alert(a); // 1
alert(b); // 2

// undefined converts into --> NaN
// null	 converts into --> 0
// true and false converts into -->	1 and 0


// boolean conversion
// Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
// Other values become true.
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false


alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"


// bitwise operators
// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>>)

// TASKS below:
"" + 1 + 0 == "10" // (1)
"" - 1 + 0 == -1 // (2)
true + false == 1
6 / "3" == 2
"2" * "3" == 6
4 + 5 + "px" == "9px"
"$" + 4 + 5 == "$45"
"4" - 2 == 2
"4px" - 2 == NaN
"  -9  " + 5 == "  -9  5" // (3)
"  -9  " - 5 == -14 // (4)
null + 1 == 1 // (5)
undefined + 1 == NaN // (6)
" \t \n" - 2 == -2 // (7)


// we have operator "===" which cheks the equality without type conversion

alert(0 == false) // true
alert(0 === false) // false
alert( null == undefined ); // true
alert( null === undefined ); // false
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
