// syntax for declaring functions
function name(parameter1, parameter2, ... parameterN) {
    // body
}

function showMessage(from, text) { // parameters: from, text
    console.log(from + ': ' + text);
  }
  
showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)


// -----------------------------------------------------------------------------------------------------------------------------------------

// default values:
function showMessage(from, text = "no text given") { // here we give text default value so we can call with only 1 attribute also
    console.log( from + ": " + text );
  }
  
  showMessage("Ann"); // Ann: no text given // basically default added 
  showMessage("Ann", "text is given") // we give both arguments



// -----------------------------------------------------------------------------------------------------------------------------------------

// returning values part
function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }
// here we write one function which checks for ages, if age >= 18 then true else ask for permission
// then we declare age with prompt
// if age returns true : access granted else access denied


// min , max functions in javascript
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
    // or written like   return a < b ? a : b;
  }

function max(a,b){
    if (a > b){
        return a;
    }
    return b;
    // could be also written return a > b ? a : b
}

// -----------------------------------------------------------------------------------------------------------------------------------------

// now lets talk about function expressions
// we have used function declaration which is :
function sayHi1() {
    alert( "Hello" );
  }
// how ever, we alos have other way : function expression;;

let sayHi2 = function(){
    alert("Hello");
}
// no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  let func1 = sayHi;    // (2) copy
  
  func1(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)

// The Function Declaration (1) creates the function and puts it into the variable named sayHi.
// Line (2) copies it into the variable func. 
// Please note again: there are no parentheses after sayHi. 
// If there were, then func = sayHi() would write the result of the call sayHi() into func,
//  not the function sayHi itself.
// Now the function can be called as both sayHi() and func().

// same output with function expression:
let sayHi = function() { // (1) create
    alert( "Hello" );
  };
  
let func2 = sayHi;


// Callback functions // we can give functions as arguments
function ask(question, yes, no) {
    if (confirm(question)) yes() // confirm pops up modal box with 2 options : "OK" button and "Cancel" button; 
    else no();
  }
  // so here if we click "OK", showOK function activates and alerts "YOu agreed", if we click "Cancel" , showCancel function activates
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);

// we can do same while declaring Callback functions ( showOk , showCancel inside the attributes)
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
  // we wrtie ask function as :ask(
//     "Do you agree?",
//     function() {
    //  alert("You agreed.");
    //            },
//     function() {
    //  alert("You canceled the execution."); 
    //            }
                            //   );

// another example for it
let realage = prompt("What is your age?", 18);

let welcome = (realage < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now



// -----------------------------------------------------------------------------------------------------------------------------------------

// lets start about ARROW FUNCTIONS  also known as LAMBDA functions,  the basics;
//  snytax for arrow functions 
let firstfunc = (arg1, arg2, argN) => expression;
 // this is shorter version of  this
 let seconfunc = function(arg1, arg2, argN) {
    return expression;
  };

// lets write sum function
let sum = (a,b) => a+b; // arrow functions also known as lambda functions
let sum1 = function(a,b){
    return a+b;
    // function expression
}
function sum2(a,b){
    return a+b;
    // function declaration
}

let double = (n) => n*2; // with 1 argument lambda function
let saysomething = () => alert("something") // lambda function again but with 0 argument

// with this lambda function, we can  type last exercises much easier
function question_asked(question,yes,no){
    if (confirm(question)) yes()
    else no();
}
question_asked("Do you agree",
 () => alert("ye i agree"),
 () => alert("no i dont"));

 // or even simpler:
 let answer = prompt("What is your age?", 18);

let welcome_for_answer = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome_for_answer();


// multiline arow function works same asbefore but we eneed to add brackets

let whatever = (a,b) =>{
    let result = a+b;
    let x = a-b;
    return result*x;
}
alert(whatever(1,3))