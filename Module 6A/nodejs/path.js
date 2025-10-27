
const path = require('path');

//Join paths//
const fullPath = path.join(__dirname, 'folder', 'file.txt');
console.log(fullPath);

//Get file extension//
const ext = path.extname('example.txt');
console.log(ext); 

//Get file name//
const name = path.basename('folder/example.txt');
console.log(name); 

//Get directory name//
const dir = path.dirname('folder/example.txt');
console.log(dir); 

