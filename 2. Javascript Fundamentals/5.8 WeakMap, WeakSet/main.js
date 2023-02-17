// we learned map and set now lets look over weakmap weakset
// first differnce between Map and weakMap is that keys must be objects, not primitive values
let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); // works fine (object key)

// can't use a string as the key
weakMap.set("test", "Whoops"); // Error, because "test" is not an object

// WeakMap has only the following methods: it "DOES NOT" have keys(),values(),entries()

// weakMap.set(key, value)
// weakMap.get(key)
// weakMap.delete(key)
// weakMap.has(key)



// Weaksset behaves similarly;
// It is analogous to Set, but we may only add objects to WeakSet (not primitives).
// An object exists in the set while it is reachable from somewhere else.
// Like Set, it supports add, has and delete, but not size, keys() and no iterations.
let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now

// check if John visited?
alert(visitedSet.has(john)); // true

// check if Mary visited?
alert(visitedSet.has(mary)); // false

john = null;
// now weakset is empty
// visitedSet will be cleaned automatically



// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.