
//scope//

// let a = 10;
// function test(){
//     let b = 20;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);
// console.log(b);


//Lexical Environment//

// function outer(){
//     let x = 10;
//     function inner(){
//         let a = 20;
//         console.log(x);
//     }
//     inner();
// }
// outer();

//scope chain//
let globalVar = "I am global";
function outer(){
    let outerVar = "I am outer";

    function inner(){
        let innerVar = "I am inner";
        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar);
    }
    inner();
}
outer();