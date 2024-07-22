const fs = require('fs');
 
function readFile(file) {
  fs.readFile(file, (err, data) => {
    if (err) {
      console.error('Error reading the file:', err.message);
      return;
    }
    else{
        console.log(data.toString())
    }
    console.log(data);
  });
}
 
 
readFile('./files/hello.txt');