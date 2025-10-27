
// 1. var example
console.log(a); // undefined
var a = 10;

// 2. let example
try {
    console.log(b); // ReferenceError
} catch(e) {
    console.log("b error:", e.message);
}
let b = 20;

// 3. const example
try {
    console.log(c); // ReferenceError
} catch(e) {
    console.log("c error:", e.message);
}
const c = 30;

// 4. Function Declaration
greet(); // "Hello from greet"
function greet() {
    console.log("Hello from greet");
}

// 5. Function Expression with var
try {
    sayHi(); // TypeError: sayHi is not a function
} catch(e) {
    console.log("sayHi error:", e.message);
}
var sayHi = function() {
    console.log("Hi from sayHi");
};

// 6. Arrow function with let
try {
    sayHello(); // ReferenceError
} catch(e) {
    console.log("sayHello error:", e.message);
}
let sayHello = () => {
    console.log("Hello from sayHello");
};
