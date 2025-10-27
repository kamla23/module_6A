const fs = require('fs');
const path = require('path');

// Path to file
const filePath = path.join(__dirname, 'test.txt');

// Write to file
fs.writeFile(filePath, 'Hello Kittu!', (err) => {
  if (err) throw err;
  console.log('File created!');

  // Read file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File Content:', data);
  });
});


