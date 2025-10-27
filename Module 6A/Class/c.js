

class kamla{
    constructor(age, city){
        this._age = age;
        this._city = city;
    }
    show(){
        console.log(`${this._age}, ${this._city}`);
    }
}
const name = new kamla (12, "jashpur");
const name1 = new kamla (23, "kunkuri");
name.show();
name1.show();