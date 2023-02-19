// setTimeout allows us to run a function once after the interval of time.
// setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval.
function sayHi1() {
    console.log('Hello First time');
  }
  
  setTimeout(sayHi1, 1000);

  // with arguments
  function sayHi2(phrase, who) {
    console.log( phrase + ', ' + who );
  }
  
  setTimeout(sayHi2, 1000, "Hello Second time", "John"); // Hello, John

// another way to use it

setTimeout(() => console.log("Hello Third time"),1000);



//-------------------------------------------------------
// setInterval

let timerId = setInterval(() => console.log("ticktock"),2000);

// and we stop it after 5 seconds

setTimeout(() => {clearInterval(timerId); console.log("stopping");},5000);