// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname);  // Smith
let [name11, name22] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name11); // Julius
console.log(name22); // Caesar
// Further items aren't assigned anywhere

// we can use "the rest parameter written as" "..."
let array =["a","b","c","d","e","f","g","h","z"]
let [first,second,third,fourth,...others] = array;
console.log(first);//first = "a"
console.log(second);// second = "b"
console.log(third);// third = "c";
console.log(fourth);// fourth = "d"
console.log(others); // [ 'e', 'f', 'g', 'h', 'z' ] we used "...others"


// default values
let [name1 = "Guest", surname1 = "Anonymous"] = ["Julius"];

console.log(name1);    // Julius (from array)
console.log(surname1); // Anonymous (default used)

// runs only prompt for surname
let [name2 = prompt('name?'), surname2 = prompt('surname?')] = ["Julius"];

console.log(name2);    // Julius (from array)
console.log(surname2); // whatever prompt gets

//------------------------------------------------------------------
// same goes for object desturcturing
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };
  
  let {title, width, height} = options;
  
  console.log(title);  // Menu
  console.log(width);  // 100
  console.log(height); // 200
  let options1 = {
    title1: "Menu"
  };
  
  let {width1 = prompt("width?"), title1 = prompt("title?")} = options;
  
  alert(title1);  // Menu
  alert(width1);  // (whatever the result of prompt is)


// same works the "... "patern(the rest)
  let options2 = {
    title2: "Menu",
    height2: 200,
    width2: 100
  };
  
  // title = property named title
  // rest = object with the rest of properties
  let {title2, ...rest} = options2;
  
  // now title="Menu", rest={height: 200, width: 100}
  alert(rest.height2);  // 200
  alert(rest.width2);   // 100 