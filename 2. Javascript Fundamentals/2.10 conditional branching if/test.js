// we talk about 2 operators in this case and these are:
// "if" and "?"
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) {
    alert( 'You are right!' );
    alert("smartest human being");
}else{
    alert("not even close dud");
}
// if u type 2015, it will go in first bracket, if not it will go into else bracket
// lets enhance it a bit.
let year2 = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year2 < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
// if wee type 2000: it will be "Too early";
// if we type 4000; " Too late"
// if we type 2015, " Exactly"


// now lets talk about second operator
// which is simpler "if" statemnet
// example below:
let accessAllowed;
let yr = prompt('How old are you?', '');

if (yr > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

// general syntax is this: 
let result = condition ? value1 : value2;

alert(accessAllowed);
// could be written much simpler by using ?

let accessAllowed2 = age > 18 ? "YES": "no its not";
// if age is > 18 , accesallowed2 = "YES",
// if not, "no its not"

// harder example

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
// The first question mark checks whether age < 3.
// If true – it returns 'Hi, baby!'.
//  Otherwise, it continues to the expression after the colon “:”, checking age < 18.
// If that’s true – it returns 'Hello!'.
//  Otherwise, it continues to the expression after the next colon “:”, checking age < 100.
// If that’s true – it returns 'Greetings!'.
//  Otherwise, it continues to the expression after the last colon “:”, returning 'What an unusual age!'.

// same code using if,else
if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
  }

//non traditional use of ?
let company1 = prompt('Which company created JavaScript?', '');

(company1 == 'Netscape') ?
   alert('Right!') : alert('Wrong.');

// same code using if else,
let company2 = prompt('Which company created JavaScript?', '');

if (company2 == 'Netscape') {
     alert('Right!');
   } else {
     alert('Wrong.');
   }



// same code two ways
let rslt;
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

 rslt = (a+b < 4) ? "Below": "Over";