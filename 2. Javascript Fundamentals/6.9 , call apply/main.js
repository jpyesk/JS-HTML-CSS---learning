// It runs func providing the first argument as this, and the next as the arguments.

// To put it simply, these two calls do almost the same:

// func(1, 2, 3);
// func.call(obj, 1, 2, 3)

function sayHi(){
    console.log(this.name);
}
let user = {name: "Joy"};
let admin = {name: "admin"};

// use call to pass idfferent objects as "this"
console.log(sayHi(user)); // undefined
console.log(sayHi(admin)); // undefined
console.log(sayHi.call(user)); //Joy
console.log(sayHi.call(admin)); // admin

function say(phrase) {
    alert(this.name + ': ' + phrase);
  }
  
  // user becomes this, and "Hello" becomes the first argument
  say.call( user, "Hello" ); // John: Hello

  //----------------------------------------------------------------------------------
  // func.apply


  function foo() {
    console.log("foo", this);
    }
    
    let personA = {
    name: "Jim",
    age: 31,
    height: 185,
    fooFunction: foo,
    logInfo: function(height, job) {
    console.group(this);
    console.log(`name: ${this.name}`);
    console.log(`age: ${this.age}`);
    console.log(`hight: ${height}`)
    console.log(`job: ${job}`)
    console.groupEnd();
    }
    }
    
    let personB = {
    name: "Saul",
    age: 42
    }
    
    personA.fooFunction(); // regular function call
    personA.logInfo(); // regular function call
    // personB.fooFunction(); // TypeError: personB.fooFunction is not a function
    // personB.logInfo(); // TypeError: personB.logInfo is not a function
    
    /* binds 'this' of personB to personA.loginfo function */
    /* 'bind' returns new function object so we call immediately */
    personA.logInfo.bind(personB, 176, "Janitor")();
    /* as 'bind' but calls implicitly */
personA.logInfo.call(personB, 176, "Janitor");

/* as 'call' but arguments must be in array */
personA.logInfo.apply(personB, [176, "Janitor"]);
    