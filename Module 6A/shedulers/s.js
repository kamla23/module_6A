


// let counter = 0;
// setTimeout(function() {
//   console.log(counter);
//   counter = counter + 1;
// }, 1000);


// let counter = 0;
// let uniqueId = setTimeout(function() {
//   console.log(counter);
//   counter = counter+1;
// }, 1000);

// clearTimeout(uniqueId);

// let counter = 0;
// setInterval(function() {
//   console.log(counter);
//   counter = counter+1;
// }, 1000);



let a = 10;
for(let i = 1; i <= a; i++){
    setTimeout( () => {
        console.log(i);
    },i*1000);
}
clearTimeout(` ${i}`);