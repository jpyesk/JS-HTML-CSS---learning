// The property [[Prototype]] is internal and hidden, but there are many ways to set it.
// One of them is to use the special name __proto__, like this:

let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal
// Now if we read a property from rabbit, and it’s missing, JavaScript will automatically take it from animal.

console.log(rabbit.eats) // true // this because sets animal to be prorotype of rabbit
console.log(rabbit.jumps) // true


let animal2 = {
    eats:true,
    walk(){
        console.log("Animal walk");
    }
};
let rabbit2 = {
    jumps:true,
    __proto__:animal2 // gets animal2 properties
};

console.log(rabbit2.eats);
rabbit2.walk(); // "animal walks"

// we can make chain longer

let longEar = {
    earlength:10,
    __proto__ : rabbit2
};

longEar.walk() // Animal walk
console.log(longEar.jumps); // true ( from rabbit)


//writing dont use prototype 
// prorotype is only used for reading properties

// lets assign its own walk method to rabbit

rabbit2.walk = function(){
    console.log("Rabbit2 bouncing :D");
}

rabbit2.walk() // "rabbit2 bouncing :D"
// from now on, it will find this method immediatly and executes it
// it wont use prototype 

let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  alert(admin.fullName); // John Smith (*)
  
  // setter triggers!
  admin.fullName = "Alice Cooper"; // (**)
  
  alert(admin.fullName); // Alice Cooper, state of admin modified
  alert(user.fullName); // John Smith, state of user protected


  let animal3 = {
    eats: true
  };
  
  let rabbit3 = {
    jumps: true,
    __proto__: animal3
  };
  
  // Object.keys only returns own keys
  alert(Object.keys(rabbit3)); // jumps
  
  // for..in loops over both own and inherited keys
  for(let prop in rabbit3) alert(prop); // jumps, then eats


//--------------------------------------------------------------------------------------
// F.prototype

let animal_1 = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal_1;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
// so F.prototype and __proto__ are same basically
//--------------------------------------------------------------------------------------------------
// Native Protoypes 
let obj = {};

alert(obj.__proto__ === Object.prototype); // true

alert(obj.toString === obj.__proto__.toString); //true
alert(obj.toString === Object.prototype.toString); //true


// we Also have other built-in prototypes
//
// Other built-in objects such as Array, Date, Function and others also keep methods in prototypes.
// For instance, when we create an array [1, 2, 3], the default new Array() constructor is used internally.
//  So Array.prototype becomes its prototype and provides methods. That’s very memory-efficient.
let arr = [1, 2, 3];

// it inherits from Array.prototype?
alert( arr.__proto__ === Array.prototype ); // true

// then from Object.prototype?
alert( arr.__proto__.__proto__ === Object.prototype ); // true

// and null on the top.
alert( arr.__proto__.__proto__.__proto__ ); // null

alert(arr); // 1,2,3 <-- the result of Array.prototype.toString


//-------------------------------------------------------------------------------------------------------------
// Prototype methods, objects without __proto__
// The modern methods to get/set a prototype are:

// Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
// Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

let animal_new = {
  eats: true
};

// create a new object with animal as a prototype
let rabbit = Object.create(animal_new); // same as {__proto__: animal}

alert(rabbit.eats); // true

alert(Object.getPrototypeOf(rabbit) === animal_new); // true

Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}

// We can provide additional properties to the new object there, like this:
let rabbit = Object.create(animal_new, {
  jumps: {
    value: true
  }
});

alert(rabbit.jumps); // true