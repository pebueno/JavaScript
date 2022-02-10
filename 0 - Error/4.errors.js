//   A RangeError is thrown if you use a number that is outside the range of legal values.
let num = 1;
try {
  num.toPrecision(500);   // A number cannot have 500 significant digits
}
catch(err) {
  console.log(err.name);
}

//   A ReferenceError is thrown if you use (reference) a variable that has not been declared:
let x = 5;
try {
  x = y + 1;   // y cannot be used (referenced)
}
catch(err) {
  console.log(err.name);
}

// A SyntaxError is thrown if you try to evaluate code with a syntax error.
try {
    eval("alert('Hello)");   // Missing ' will produce an error
}
catch(err) {
  console.log(err.name)
}

// A TypeError is thrown if you use a value that is outside the range of expected types:
let num2 = 1;
try {
  num2.toUpperCase();   // You cannot convert a number to upper case
}
catch(err) {
    console.log(err.name);
}

// A URIError is thrown if you use illegal characters in a URI function:
try {
    decodeURI("%%%");   // You cannot URI decode percent signs
  }
  catch(err) {
      console.log(err.name);
  }