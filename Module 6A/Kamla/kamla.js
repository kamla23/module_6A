
// const add = (a, b) => {
//     let sum = a+b;
//     return sum;
// }
// console.log(add(5, 6));

//=======================//

// const greet = ( name = "kamla") => {
//     console.log(`hello, ${name};`)
// }
// greet();
// greet(); 

//===================//

const joinword = (...words) => {
    let d = words.join(" ");
    return d;
}
console.log(joinword("Hello", "kamla", "I am your friend"));