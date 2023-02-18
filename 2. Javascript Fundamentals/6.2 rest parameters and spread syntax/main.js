function sum(a,b){
    return a+b;
}
console.log(sum(1,2,3,4,5,6,7)); // still it will return only 1+2 = 3
// we can change this to sumall by using the rest argument

function sumAll(...args){ // args is now array
    let sum = 0;
    for(let k of args){
        sum +=k;
    }
    return sum;
}
console.log(sumAll(1)); // 1
console.log(sumAll(1,2)); // 3
console.log(sumAll(1,2,3,)); // 6
console.log(sumAll(1,2,3,4,5,6,7,8,9,10)); // 55


function showname(firstname,lastname, ...titles){
    console.log(firstname + ' '+ lastname); // Sova basedperson
    console.log(titles[0]); // Hater
    console.log(titles[1]); // Russian
    console.log(titles[2]); // Angry
    console.log(titles); // ['hater','russian','angry'];
}
showname("Sova", "BasedPerson","Hater","Russian","Angry");

//-----------------------------------------------------------------------------------
// The "arguments" variable

function showcase(){
    console.log(arguments.length); // 2
    console.log(arguments[0]); // Julius
    console.log(arguments[1]); // Caesar
}
showcase("Julius","caesar");


//---------------------------------------------------------------------------------------------
// spread syntax
// spread turns array into a list of arguments
// lets write example:
let arr1 = [1,3,5,7]; // array of numbers
let arr2 = [12,13,14,15,16,17];
console.log(Math.max(arr1)); // this is error it wont work on array and returns "NaN"

console.log(Math.max(...arr1)); // this is right way using the spread : answer is 7
// we can use this on multiple arrays at same time
console.log(Math.max(...arr1,...arr2)); // answer is 17 as u can see
// we can even add a number in this console.log
console.log(Math.max(...arr1,...arr2,99999)) ;// answer ofc will be 99999

// we can merge arrays using the spread syntax
let merged = [...arr1,...arr2,99999999] ;
console.log(merged); //[ 1, 3, 5, 7, 12, 13, 14, 15, 16, 17, 99999999 ]


let str = "Hello";
console.log([...str]); // H,e,l,l,o;

// we can copy arrays using this;
let first = [1,2,3];
let CopyOfFirst = [...first]  // they are not same refernce, they just have same contents
CopyOfFirst.push(4);
console.log(first); // 1,2,3
console.log(CopyOfFirst); // 1,2,3,4

// same goes for objects
let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters
                          // then return the result in a new object
