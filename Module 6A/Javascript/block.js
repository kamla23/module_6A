
// known which is bolck and global//
// {
//     var a = 10;
//     let b = 20;
//     let c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(a);
// console.log(b);
// console.log(c);

// block scope, global scope//

//  const  c = 100;
// {
//     let a = 10;
//     let b = 20;
//     let c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(c);


//shadowing//

//  const  c = 100;
//  function x(){
//     var c = 30;
//     console.log(window.c);
//     window.c = 20;
// }
// x();
// console.log(c);

//lexicalblock//

const a = 20;
{
    const a = 100;
    {
        const a = 200;
      
    }
}
console.log(a);
