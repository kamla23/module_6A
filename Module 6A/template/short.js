
// let name = "kamla";
// let age = 20;
// let city = "Jashpur";

// const person = {
//     name,
//     age,
//     city
// }
// console.log(person);


let person = {
    name:"kamla",
    age:20,
    address(){
        return `hello, ${this.name}.`
    }
}
console.log(person.address()); 