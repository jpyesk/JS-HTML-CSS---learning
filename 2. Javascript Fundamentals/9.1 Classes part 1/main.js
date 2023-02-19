class User{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(this.name);
    }
}
let user = new User("John");
user.sayHi(); // John
// another way do do it using prototypes

function User_way2(name){
    this.name = name;
}
User_way2.prototype.sayHi2 = function(){
    console.log(this.name);
}

let user_2 = new User_way2("John_2");
user_2.sayHi2(); // John_2

//----------------------------------------------------------------------
// Class Expression

let Userr = class{
    sayHello(){
        console.log("Hello");
    }
};
let seconduser = new Userr();
seconduser.sayHello(); // Hello

//---------------------------------------------------------------------------------------
// Getters/setters


class MyClass{
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if (value.length < 4){
            console.log("Too short");
            return;
        }
        this._name = value;
    }
}
// We also have other way to type these

class MyclassOtherway{
  constructor(name){
    this.name = name;
  }
  getName(){
    return this._name;
  }
  setName(value){
    if (value.length < 4){
      console.log("too short");
      return;
    }
    this._name = value;
  }
}

let starter = new MyClass("Johnathan");
console.log(starter.name);
console.log(starter._name);
starter.name = "GOoooO";
console.log(starter._name);
console.log(starter.name);



//----------------------------------------------------------------------------------------------------
// Class inheritance
// extends keyword
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
  }
let animal = new Animal("My animal");

class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} hides!`);
    }
}
let rabbit = new Rabbit("White rabbit");
// rabbit will inherit the Animal class methods
rabbit.run(5)// White rait runs with speed 5;
rabbit.hide() // White rabbit hides;

//----------------------------------------------------------------------------
// Overriding a method
// if rabbit class extends animal class, rabbit also gets animals function
// rabbit.run() uses run fuctnion from animal class, but if we want to use .run() function from rabbit class itself we have "super" keyword for that
// super.method() is to call a parent method


class Animal_2{
    constructor(name) {
        this.speed = 0;
        this.name = name;
      }
    
      run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
      }
    
      stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
      }
      test(){
        console.log("GG");
      }
}

class Rabbit_2 extends Animal_2{
    hide() {
        console.log(`${this.name} hides!`);
      }
    
      stop() {
        super.stop(); // call parent stop
        this.hide(); // and then hide
      }
      test(){
        console.log("ff");
      }
}
let rabb = new Rabbit_2("White rabbit");
rabb.run(5) // White rabbit runs wit speed 5 // uses animal run function
rabb.test(); // rabbit overrides animal test with its own and prints "ff"
rabb.stop(); // this uses its own stop() which calss super.stop(reaching parent also known Animal class stop function using super keyword) and then calls hide


//--------------------------------------------------------------------------------------------------------------------------
// Overriding constructor


class Animal_3{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }//...
}
class Rabbit_3 extends Animal_3{
    constructor(name,earlength){
        // this.speed = 0; this.name = name; // this would be ERROR , instead we use super(name)
        super(name); // it will use the parent constructor(Animal_3 constructor)
        this.earlength = earlength;
    }
} 
let bunny = new Rabbit_3("Black Rabbit", 10);
console.log(bunny.name); // Black rabbit
console.log(bunny.earlength); // 10

// to understand it simply lets show example :
class Animal_4 {
    name = 'animal';
  
    constructor() {
      alert(this.name); // (*)
    }
  }
  
  class Rabbit_4 extends Animal_4 {
    name = 'rabbit';
  }
  
  new Animal_4(); // animal // uses its own constructor
  new Rabbit_4(); // animal // uses parent constructor


//--------------------------------------------------------------------------------------------------------------------
// Static properties and methods
// We can also assign a method to the class as a whole. Such methods are called static.
// In a class declaration, they are prepended by static keyword, like this:
class User {
    static staticMethod() {
      console.log(this === User);
    }
  }
  User.staticMethod(); // true

  
//-------------------------------------------------------------------------------------
//   Inheritance of static properties and methods
// Static properties and methods are inherited.
// For instance, Animal.compare and Animal.planet in the code below are inherited and accessible as Rabbit.compare and Rabbit.planet:

class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbits = [
  new Rabbit("White Rabbit", 10),
  new Rabbit("Black Rabbit", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.

alert(Rabbit.planet); // Earth