const fs = require("fs");

// 1. Write
fs.writeFileSync('kamla.txt', 'Hello I am Kamla');
// console.log('File created and written!');

// 2. Read
let data = fs.readFileSync('kamla.txt', 'utf8');
// console.log('File content:', data);

// 3. Update
fs.writeFileSync('kamla.txt', 'This is updated content!');
// console.log('File updated!');

// 4. Append
fs.appendFileSync('kamla.txt', '\nHow are you?');
// console.log('Data appended!');

// 5. Read again after append
data = fs.readFileSync('kamla.txt', 'utf8');
// console.log('Updated file content:', data);

// 6. Delete
// fs.unlinkSync('kamla.txt');
// console.log('File deleted!');


