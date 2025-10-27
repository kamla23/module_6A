

class BankAccount{
    #balance;
    constructor(balance){
        this.#balance = balance;
    }

    get balance(){
        return this.#balance;
    }

    set balance(newBalance){
        if(newBalance  < 0){
            console.log("Balance cannot be negative")
        }else{
            this.#balance = newBalance;
        }
      
    }
}
const acc = new BankAccount(1000);
console.log(acc.balance);
acc.balance = -200;
acc.balance = 500;
console.log(acc.balance);
// console.log(acc.#balance);
