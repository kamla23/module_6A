
// const user = {name:"kamla", age:20};
// const {name, age} = user;
// console.log(name);


// const person = {
//     name:"kamla",
//     add:{
//         city:"jashpur",
//         block:"duldula"
//     }
// }
// const {add:{city, block}} = person;
// console.log(city);


// const student = {
//     name:"kamla",
//     age:20,
//     city:"jashpur",
//     block:"duldula"
// }
// const {name, ...other} = student;
// console.log(other);


function add({name, city}){
    console.log("Hello", name);
    console.log("You are from", city);
}

const student = {
    name:"kamla",
    city:"jashpur"
}
add(student);