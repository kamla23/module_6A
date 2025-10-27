
class studets {
    constructor(name){
        this.name = name
    }

    get add(){
        return this.name;
    }

    set add(modern){  
        this.name = modern;
    }
}

const obj = new studets("reena");
console.log(obj);
obj.name = "meena";
console.log(obj.name);
