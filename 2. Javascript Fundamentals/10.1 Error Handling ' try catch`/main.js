// The try...catch construct has two main blocks: try, and then catch:

// An errorless example: shows alert (1) and (2):
try {

    console.log('Start of try runs');  // (1) <--
  
    // ...no errors here
  
    console.log('End of try runs');   // (2) <--
  
  } catch (err) {
  
    console.log('Catch is ignored, because there are no errors'); // (3)
  
  }

//   An example with an error: shows (1) and (3):
  try {
  
    console.log('Start of try runs');  // (1) <--
  
    lalala; // error, variable is not defined!
  
    console.log('End of try (never reached)');  // (2)
  
  } catch (err) {
    err.
    console.log(`Error has occurred!`); // (3) <--
  
  }

// 3 things we can use in catch block : name, message,stack
// name Error name. For instance, for an undefined variable that’s "ReferenceError".
// message Textual message about error details.
// stack Current call stack: a string with information about the sequence of nested calls that led to the error. Used for debugging purposes.

try {
    lalala; // error, variable is not defined!
  } catch (err) {
    console.log(err.name); // ReferenceError
    console.log(err.message); // lalala is not defined
    console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    console.log(err); // ReferenceError: lalala is not defined
  }


// real life use case of try catch

let json = '{"name" : "john", "age" : 30}';
let user = JSON.parse(json);// convert text representation to js object
console.log(user); // { name: 'john', age: 30 }




let bad_json = "{bad json}";
try{
    let bad_user = JSON.parse(bad_json); // error occurs here
    console.log(bad_user); // doesnot work
} catch (e) {
    console.log("Sorry for incovenience, data has errors");
    console.log(e.name);
    console.log(e.message);
}

// we have 4 types of errors : Error, SyntaxError, ReferenceError, Typerror and we use them to create objects
// here we use just Error
// ----------------------------------------------------------------
// "Throw" operator which generates an error
// syntax is "throw <error object>"

let error = new Error("Things happen and this is error");
console.log(error.name); // Error
console.log(error.message);; // "Things happen and this is error"

let jsonn = '{ "age": 30 }'; // incomplete data

try {

  let user = JSON.parse(jsonn); // <-- no errors

  if (!user.name) {
    throw new SyntaxError("Incomplete data: no name"); // (*)
  }

  console.log( user.name );

} catch (err) {
  console.log( "JSON Error: " + err.message ); // JSON Error: Incomplete data: no name
}

//-------------------------------------------------------------------
//try..catch..finally
// The try...catch construct may have one more code clause: finally.
// If it exists, it runs in all cases:

// after try, if there were no errors,
// after catch, if there were errors.

// finally section will always be executed no matter what
try {
    console.log( 'try' );
  } catch (err) {
    console.log( 'catch' );
  } finally {
    console.log( 'finally' );
  }

