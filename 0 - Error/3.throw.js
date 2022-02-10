// The throw statement defines a custom error.

function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) { //isNaN converts the argument to a Number and returns true if the resulting value is NaN
      throw 'Parameter is not a number!'; //NaN stands for Not a Number
    }
  }
  
  try {
    getRectArea(3, 'A');
  } catch (e) {
    console.error(e);
    // expected output: "Parameter is not a number!"
  }