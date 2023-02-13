alert("Hello") // pops little window with text "Hello"
// waits for user to click "OK";

// function prompt("argument1","argument2")
// second argument has default and is optional

// argument1 - text to show the visitor
// argument2 , initial 

let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`); // You are 100 years old!
// we can also not write 100 and the checkboxwhere we type age stays clear
//we can rewrite "100" by any number and it will change it 


// confirm  shows modal window with question and two butons "OK", "cancel"
// result is true if OK is pressed and false if Cancel is pressed
let isBoss = confirm("Are you the boss?");

alert( isBoss ); // true if OK is pressed