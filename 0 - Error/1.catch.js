const fs = require('fs')
const path = require('path')
const basePath = './assets/'


const content = fs.readFileSync(path.resolve(basePath, 'invictus.txt'))

console.log('Begin')
try {
    if(typeof(content) !== "string")
        return err
}
// The catch statement defines a code block to handle any error.
  catch(err) {
    console.log(typeof(content).toString())
  }

console.log('end')