let fruits = ["Apple", "Orange", "Pear"];
alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Pear
alert( fruits ); // Apple,Orange,Pear

// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

alert( fruits.pop() ); // remove "Pear" and alert it
alert( fruits ); // Apple, Orange


fruits.push("Pear")
// now pear is again third item and
alert(fruits) // Apple,orange,pear


alert(fruits.shift()) // removes Apple and alerts it
alert(fruits) // Orange , pear


fruits.unshift('Apple');
alert( fruits ); // Apple, Orange, Pear


fruits.push("Orange", "Peach"); // can push multiple together
fruits.unshift("Pineapple", "Lemon"); // can push multiple together also

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );

// -----------------------------------------------
// ways to cycle array
let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  alert( arr[i] );
}
for (let fruit of fruits) {
    alert( fruit ); // apple orange pear
  }

  for (let key in arr) {
    alert( arr[key] ); // Apple, Orange, Pear
  }


  //--------------------------------------------------------------------------
let empty_fruit = [];
empty_fruit[123] = "Apple";

alert( empty_fruit.length ); // 124


//----------------------------------
// -- Multidimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
alert( matrix[1][1] ); // 5, the central element

//-----------------------------------------------------------------------------
// Some Array Methods

// arr.splice(start[, deleteCount, elem1, ..., elemN])
// splice
let ar = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
 let removed = ar.splice(0, 3, "Let's", "dance");
alert(removed) // "I", "Study", "Javascript"
alert( ar ) // now ["Let's", "dance", "right", "now"]





// slice
// arr.slice([start], [end])
let array = ["t", "e", "s", "t"];

alert( array.slice(1, 3) ); // e,s (copy from 1 to 3)
alert(array.slice(1)) // e,s,t
alert( array.slice(-2) ); // s,t (copy from -2 till the end)


// concat
// arr.concat(arg1, arg2...)
let starter = [1, 2];

// create an array from: arr and [3,4]
alert( starter.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
alert( starter.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
alert( starter.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6

let arrayLike = {
    0: "something",
    length: 1
  };
  
  alert( starter.concat(arrayLike) ); // 1,2,[object Object]




// Iterate:forEach
// arr.forEach(function(item, index, array) {
//     // ... do something with item
//   });

// for each element call alert
["Bilbo", "Gandalf", "Nazgul"].forEach(alert); // alerts each element

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.l(`${item} is at index ${index} in ${array}`);
  });


//----------------------------------------------------------------------------------
// Searching in array methods
// arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1.
// arr.includes(item, from) – looks for item starting from index from, returns true if found.
let tst = [1, 0, false];

alert( tst.indexOf(0) ); // 1
alert( tst.indexOf(false) ); // 2
alert( tst.indexOf(null) ); // -1
alert( tst.includes(1) ); // true

let xili = ['Apple', 'Orange', 'Apple']

alert( xili.indexOf('Apple') ); // 0 (first Apple)
alert( xili.lastIndexOf('Apple') ); // 2 (last Apple)

// ---------------------------------------------------------------------------
// find , findindex, findlastindex functions
let result = arr.find(function(item, index, array) {
    // if true is returned, item is returned and iteration is stopped
    // for falsy scenario returns undefined
  });

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];

let user = users.find(item => item.id == 1);
alert(user.name); // John
    // Find the index of the first John
alert(users.findIndex(user => user.name == 'John')); // 0
  
    // Find the index of the last John
alert(users.findLastIndex(user => user.name == 'John')); // 3


// filter function
let users2 = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  // returns array of the first two users
  let someUsers = users2.filter(item => item.id < 3);
  
  alert(someUsers.length); // 2


// map function
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6


//---------------------------------------------------------------------------------------
// sorting
let arrr = [ 1, 2, 15 ];

// the method reorders the content of arr
arrr.sort();

alert( arrr );  // 1, 15, 2

// the items are sorted as strign by default so "2" > "15"
// but we can change that using compare function which goes as attribute inside sort function
// sort("attribute ufnction")
 
arrr.sort( (a, b) => a - b ); // 1,2,15

// reverse
let rvrs = [1, 2, 3, 4, 5];
rvrs.reverse();

alert( rvrs ); // 5,4,3,2,1

// --------------------------------------------------------------------------------------------------------------
// split and join
let names = "Bilbo, Gandalf, Nazgul"; // transfers the string between given "," into array
/// str = "A+B+C+D+E+F+G" // split on "+" => [A,B,C,D,E,F,G]
let answer = names.split(",")
console.log(answer);

// The call to split(s) with an empty s would split the string into an array of letters:
let str1 = "test";

alert( str1.split('') ); // t,e,s,t


let arr3 = ['Bilbo', 'Gandalf', 'Nazgul'];

let str2 = arr3.join(';'); // glue the array into a string using ;

alert( str2 ); // Bilbo;Gandalf;Nazgul

//------------------------------------------------------------------------------------------
// reduce/ reduceright (also known as foldleft,foldright )
let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
  }, [initial]);
//   The function is applied to all array elements one after another and “carries on” its result to the next call.
//   accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
//   item – is the current array item.
//   index – is its position.
//   array – is the array.
let answ = [1,2,3,4,5]
let rslt = answer.reduce((sum,current) => sum + current,0)
console.log( rslt); // 15










// push(...items) – adds items to the end,
// pop() – extracts an item from the end,
// shift() – extracts an item from the beginning,
// unshift(...items) – adds items to the beginning.
// splice(pos, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.
// slice(start, end) – creates a new array, copies elements from index start till end (not inclusive) into it.
// concat(...items) – returns a new array: copies all members of the current one and adds items to it. If any of items is an array, then its elements are taken.
// To search among elements:

// indexOf/lastIndexOf(item, pos) – look for item starting from position pos, return the index or -1 if not found.
// includes(value) – returns true if the array has value, otherwise false.
// find/filter(func) – filter elements through the function, return first/all values that make it return true.
// findIndex is like find, but returns the index instead of a value.
// To iterate over elements:

// forEach(func) – calls func for every element, does not return anything.
// To transform the array:

// map(func) – creates a new array from results of calling func for every element.
// sort(func) – sorts the array in-place, then returns it.
// reverse() – reverses the array in-place, then returns it.
// split/join – convert a string to array and back.
// reduce/reduceRight(func, initial) – calculate a single value over the array by calling func for each element and passing an intermediate result between the calls.
// Additionally:

// Array.isArray(value) checks value for being an array, if so returns true, otherwise false.