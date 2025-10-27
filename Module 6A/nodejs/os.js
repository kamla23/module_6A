

const os = require('os');

//System name//
console.log(os.type());  

//OS platform//
console.log(os.platform());

//Free memory//
console.log('Free Memory:', os.freemem());

//Total memory//
console.log('Total Memory:', os.totalmem());

//Home directory//
console.log('Home Directory:', os.homedir());

//CPU info//
console.log(os.cpus());