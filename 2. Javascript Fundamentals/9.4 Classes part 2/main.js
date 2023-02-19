// Private and protected properties and methods
// In object-oriented programming, 
// properties and methods are split into two groups:


// Internal interface – methods and properties, accessible from other methods of the class, but not from the outside.
// External interface – methods and properties, accessible also from outside the class.



// In JavaScript, there are two types of object fields (properties and methods):

// Public: accessible from anywhere. They comprise the external interface. Until now we were only using public properties and methods.
// Private: accessible only from inside the class. These are for the internal interface.
// In many other languages there also exist “protected” fields:
//  accessible only from inside the class and those extending it
//  (like private, but plus access from inheriting classes)


// Privates should start with "#". They are only accessible from inside the class.
// For instance, here’s a private #waterLimit property and the water-checking private method #fixWaterAmount:
class CoffeeMachine {
    #waterLimit = 200;
  
    #fixWaterAmount(value) {
      if (value < 0) return 0;
      if (value > this.#waterLimit) return this.#waterLimit;
    }
  
    setWaterAmount(value) {
      this.#waterLimit = this.#fixWaterAmount(value);
    }
  
  }
  
  let coffeeMachine = new CoffeeMachine();
  
  // can't access privates from outside of the class
//   coffeeMachine.#fixWaterAmount(123); // Error because waterlimit is private not public
//   coffeeMachine.#waterLimit = 1000; // Error same here, to change these, we would neet setters
  coffeeMachine.setWaterAmount(23) // sets wateramount = 23



//----------------------------------------------------------------------------------------
// Extending built-in classes
//Built-in classes like Array, Map and others are extendable also.
// For instance, here PowerArray inherits from the native Array:
class PowerArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  }
  
  let arry = new PowerArray(1, 2, 5, 10, 50);
  alert(arry.isEmpty()); // false
  
  let filteredArr = arry.filter(item => item >= 10);
  alert(filteredArr); // 10, 50
  alert(filteredArr.isEmpty()); // false


//---------------------------------------------------------------------------------------------------------
// Class checking: "instanceof"
// The instanceof operator allows to check whether an object belongs to a certain class. 
// It also takes inheritance into account.
// Such a check may be necessary in many cases. 
// For example, it can be used for building a polymorphic function,
//  the one that treats arguments differently depending on their type.

// syntax is:
obj instanceof Class // It returns true if obj belongs to the Class or a class inheriting from it.

class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
console.log( rabbit instanceof Rabbit ); // true
console.log( new Rabbit() instanceof Rabbit ); // true
let arr = [1, 2, 3];
console.log( arr instanceof Array ); // true
console.log( arr instanceof Object ); // true
// this is because Array also inherits from Object lcass, basically every Class is instanceof Object class

// Summary  for type-checking methods

               // works for         returns
// typeof	      primitives	      string
// {}.toString	  primitives,       built-in objects, objects with Symbol.toStringTag	string
// instanceof	  objects	          true/false