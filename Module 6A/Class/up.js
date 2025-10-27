

class students{
    #name;
    constructor(name){
        this.#name = name; 
    }
    get name(){
        return this.#name
        
    }
    
    set name(newName){
        this.#name = newName;
    }
}
const school = new students("reena");
console.log(school.name);

school.name = "seema";
console.log(school.name);