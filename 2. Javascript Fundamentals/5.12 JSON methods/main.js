let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};
let json = JSON.stringify(student);

// JSON.stringify(student) takes the object and converts it into a string
// after converting to string, string uses double quotes so 'John' goes into "John"
// age:30 also goes into "age:"30
// JSON.stringify can be applied to primitives as well : 
// Objects, arrays,strings,numbers,boolean,null

console.log( JSON.stringify(1) ) // 1

// a string in JSON is still a string, but double-quoted
console.log( JSON.stringify('test') ) // "test"

console.log( JSON.stringify(true) ); // true

alconsole.logert( JSON.stringify([1, 2, 3]) ); // [1,2,3]

// there are stuff that json stngify skips:
// check example:
let user = {
    sayHi() { // ignored
      alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
  };
  
  alert( JSON.stringify(user) ); // {} (empty object)


//-----------------------------------------------------------
// JSON.parse
// sntax: let value = JSON.parse(str, [reviver]);
// reviver : Optional function(key,value) that will be called for each (key, value) pair and can transform the value.
// stringified array
let numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1


let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let user1 = JSON.parse(userData);

alert( user1.friends[1] ); // 1