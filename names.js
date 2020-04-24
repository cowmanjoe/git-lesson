

// Outputs all the lines of names.txt
function printNames() {
  const fs = require('fs')
  fs.readFile('names.txt', (err, data) => {
    if (err) throw err;

  console.log(data.toString());
  })
}

printNames();
