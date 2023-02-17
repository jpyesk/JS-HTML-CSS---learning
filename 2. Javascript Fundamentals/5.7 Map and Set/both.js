// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.

let map = new Map();
map.set("1","string");
map.set(1,"num1");
map.set(true,"blala");
map.set("gonnaremove","thisalso")

map.get("1") // "string"
map.get(1) // "num1"
map.get(true) // "blala"
map.size; // 4
map.delete("gonnaremove");
map.size; // 4
// map.clear() // deletes all key,value s

// we can also add objects as keys
let john = {name: "john", age:152, Gender:"Male"}
map.set(john,"personvalue");
map.get(john) // "personvalue"

// iteration over the map
// map.keys() – returns an iterable for keys,
// map.values() – returns an iterable for values,
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.

for(let k of map.keys()){
    console.log(k); // 1, 1, true ,{ name: 'john', age: 152, Gender: 'Male' }
}
for(let k of map.values()){
    console.log(k); // string, num1, blabla, personvalue
}

for(let k of map.entries()){
    console.log(k);
//     [ '1', 'string' ]
// [ 1, 'num1' ]
// [ true, 'blala' ]
// [ { name: 'john', age: 152, Gender: 'Male' }, 'personvalue' ]
}


// basically if we create object named "obj", we cna convert it into map by using Object.entries(obj)
let obj = {
    name: "John",
    age: 30
  };
  
  let mapp = new Map(Object.entries(obj));
  
  alert( mapp.get('name') ); // John

// same goes in reverse, we can get object from map
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  
  // now prices = { banana: 1, orange: 2, meat: 4 }
  
  alert(prices.orange); // 2

//----------------------------------------------------------------------------------------------------------------------
// Set
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
// Its main methods are:
// new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.
let set = new Set();

let johny = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(johny);
set.add(pete);
set.add(mary);
set.add(johny);
set.add(mary);

// set keeps only unique values
console.log();( set.size ); // 3

for (let user of set) {
  console.log();(user.name); // John (then Pete and Mary)
}

// iteration over the set
let set2 = new Set(["oranges", "apples", "bananas"]);

for (let value of set2) alert(value);
// same methods are for set as it was for map
// keys(),entries(),values() just every member of set only occurs once