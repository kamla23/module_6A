

class student{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    get name(){
        return this._name;
    }

    set name(newName){
        this._name = newName;
    }

    get age(){
        return this._age
    }

    set age(newAge){
        if(newAge < 0){
            console.log("invalid");
        }else{
             this._age = newAge;
        }
    }
}
const s = new student("reena", 20);
console.log(s.name);
console.log(s.age);
s.age = -5;
s.age = 25;
s.name = "seema";
console.log(s.name);
console.log(s.age);