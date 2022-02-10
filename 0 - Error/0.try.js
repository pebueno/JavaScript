// The try statement defines a code block to run (to try).

try {
// In this example we misspelled "log" to deliberately produce an error:    
    console.logi("Welcome guest!");
  }
  catch(err) {
    console.log(err.message);
  }

