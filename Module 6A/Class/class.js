// class Vegetable{
//   constructor(name){
//     this.name = name;
//   }
// }
// const carrot = new Vegetable('carrot');
// console.log(carrot.name);


// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }
// const people =  new Person("kamla",20);
// console.log(people.name, people.age);


class Person{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

}

const person = new Person("kamla");

console.log(person.name);

person.name = "Reena";

console.log(person.name);



// Only change code below this line
// class Thermostat {
//   constructor(cel) {
//     this.cel = (cel - 32) * 5 / 9;;
//   }

//   get temperature() {
//     return this.cel;
//   }

//   set temperature(celn) {
//     this.cel = celn;
//   }
// }

// const thermos = new Thermostat(76); 
// let temp = thermos.temperature; 
// thermos.temperature = 26;
// temp = thermos.temperature; 

// console.log(temp);


