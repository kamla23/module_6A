


//Global Excution//

var global = "I am global";
function greet(){
    console.log("Hello from the global function")
}

console.log(global);
greet();

//function Execution//

function add(a, b){
    var sum = a+b;
    console.log(sum);
}
add(5, 6);
add(10, 5);

//Eval Execution//
var x = 10;
eval(`
    var y = 20
    console.log("inside eval, x+y =", 2+2);
    `);

    console.log("y outside eval:", typeof y);


// call stack//
function greet(name) {
    console.log("Hello, " + name);
    sayBye();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Kittu");
