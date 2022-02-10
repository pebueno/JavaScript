// The finally statement defines a code block to run regardless of the result.

try {
    console.logi("Welcome guest!")
  }
  catch(err) {
    console.log(err.message)
  }
  finally {
    console.log("Whatever the result above may be, this message will finally be displayed!");
  }