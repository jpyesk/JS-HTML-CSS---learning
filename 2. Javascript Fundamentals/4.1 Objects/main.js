// An empty object (“empty cabinet”) can be created using one of two syntaxes:

let user1 = new Object(); // "object constructor" syntax
let user2 = {};  // "object literal" syntax
// both of them are empty 
let person = {name:"John",age:50};
console.log(person.name, person.age) //John 50

// 2 ways to add property
person.country = "Georgia"
person["likes bird"] = true;
person[generation] = "Karenoi";

delete person["likes bird"] // deletion of multiword property
delete person.generation // deletion of property of person
person["likes bird"] = true;
person[generation] = "Karenoi"
console.log(person) // { name: 'John', age: 50, country: 'Georgia' }

let test = { name:"guga", "likes bird":true}; // we can add custom sstring multiword  property names also
console.log(test)




let fruit1 = prompt("Which fruit to buy?", "apple");

let bag1 = {
  [fruit1]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

let fruit2 = 'apple';
let bag2 = {
  [fruit2 + 'Computers']: 5 // bag.appleComputers = 5
};



let nestuser = { // nested variety
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  alert( nestuser.sizes.height ); // 182

//---------------------------------------------------------------------------------------------------------------------

// property value shorthand

function makeUser(name, age) {
    return {
      name: name,
      age: age,
      // ...other properties
    };
  }
  
  let user = makeUser("John", 30);
  alert(user.name); // John
//instead of name:name we can just write name, like this: both are correct
  function makeUser(name, age) {
    return {
      name, // same as name: name
      age,  // same as age: age
      // ...
    };
  }

/// in syntax ------------------
// "key" in Object;

let use15r = { name: "John", age: 30 };

alert( "age" in use15r ); // true, user.age exists
alert( "blabla" in use15r ); // false, user.blabla doesn't exist

for (key in object) {
    // executes the body for each key among object properties
  }

let userr = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  for (let key in userr) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
  }

// we have funicton to copy all properties from many objects to one
// Object.assign(dest, ...sources) // copy from sources into destination
let usr = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(usr, permissions1, permissions2);// everything goes into usr

// now user = { name: "John", canView: true, canEdit: true }
alert(usr.name); // John
alert(usr.canView); // true
alert(usr.canEdit); // true


// ----------------------------------------------------------------------------------
// Object methods  and also  "This"

// these objects do the same

new_user1 = {
    sayHi: function() {
      alert("Hello");
    }
  };
  
  // method shorthand looks better, right?
new_user2 = {
    sayHi() { // same as "sayHi: function(){...}"
      alert("Hello");
    }
  };


let new_user3 = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" is the "current object"
      alert(this.name);
    }
  
  };
  
  new_user3.sayHi(); // John
  
  // --------------------------------------------------------------------------------------------
  // constructors , operator "new"
//   The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

// That can be done using constructor functions and the "new" operator.

// Constructor function
// Constructor functions technically are regular functions. There are two conventions though:

// They are named with capital letter first.
// They should be executed only with "new" operator.
function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
  }
  
  alert( new BigUser().name );  // Godzilla, got that object


function SmallUser() {

    this.name = "John";
  
    return; // <-- returns this
  }
  
  alert( new SmallUser().name );  // John

// methods in consturctor
function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      alert( "My name is: " + this.name );
    };
  }


//---------------------------------------------------------------------------------------------------------
// Symbol Type
// Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description,
//  they are different values. The description is just a label that doesn’t affect anything.

// For instance, here are two symbols with the same description – they are not equal:

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false

// Symbols in an object literal
// If we want to use a symbol in an object literal {...}, 
// we need square brackets around it.
// Like this:

let id = Symbol("id");

let usesr = {
  name: "John",
  [id]: 123 // not "id": 123
};

//Symbols are skipped by for…in
// Symbolic properties do not participate in for..in loop.




// Global symbols
// As we’ve seen, usually all symbols are different, even if they have the same name. But sometimes we want same-named symbols to be same entities.
//  For instance, different parts of our application want to access symbol "id" meaning exactly the same property.
// To achieve that, there exists a global symbol registry.
//  We can create symbols in it and access them later, 
// and it guarantees that repeated accesses by the same name return exactly the same symbol.
// In order to read (create if absent) a symbol from the registry,
//  use Symbol.for(key).
// That call checks the global registry,
//  and if there’s a symbol described as key, then returns it, otherwise creates a new symbol Symbol(key) and stores it in the registry by the given key.

// For instance:

// read from the global registry
let idd = Symbol.for("idd"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let idAgain = Symbol.for("idd");

// the same symbol
alert( idd === idAgain ); // true



// Symbol.keyFor
// We have seen that for global symbols, Symbol.for(key) returns a symbol by name. To do the opposite – return a name by global symbol – we can use: Symbol.keyFor(sym):

// For instance:

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id


// -----------------------------------------------------------------------------------------------
//Simple Example To Understand Symbol:
let lib = {
    name: "ABC",
    };
    
    lib["id"] = 5;
    lib["id"] = 6; // The value is changed because it is String [KEY]!!
    
    lib[Symbol("id")] = 123;
    lib[Symbol("id")] = 124; //Not changed
    
    console.log(lib); // { name: "ABC", id: 6, Symbol(id): 123, Symbol(id): 124 }