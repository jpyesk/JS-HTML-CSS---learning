// The "name" property
function Wassap(){
    console.log("Hello");
}
console.log(Wassap.name); // Wassap
let sayHi = function() {
    alert("Hi");
  };
  
alert(sayHi.name); // sayHi (there's a name!)

function f(sayHi = function() {}) {
    alert(sayHi.name); // sayHi (works!)
  }
  
f();


//---------------------------------------------------------------------------------------
// the "length" property
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

alert(f1.length); // 1
alert(f2.length); // 2
alert(many.length); // 2

// Custom properties
function sayHi() {
    alert("Hi");
  
    // let's count how many times we run
    sayHi.counter++;
  }
  sayHi.counter = 0; // initial value
  
  sayHi(); // Hi
  sayHi(); // Hi
  
  alert( `Called ${sayHi.counter} times` ); // Called 2 times
