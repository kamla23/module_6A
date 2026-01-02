
// ===callback==========
// function addsome(name, sum){
//     console.log("Hello," + name);
//     sum();
// }
// function number(){
//     console.log(2+3);
// }
// addsome("kamla", number);


//=====callback hell========

// setTimeout(() => {
//     console.log("cut vegetables");

//     setTimeout(() => {
//         console.log("I made chappati");

//         setTimeout(() => {
//             console.log("I served the food");
//         }, 30000)
//     }, 2000)

// },1000)

//=======callback hell use async/awiat======

// function wait(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function kitchenwork(){
//     await wait(1000);
//     console.log("I cut the vegetables");

//     await wait(2000);
//     console.log("I made chappati");

//     await wait(3000);
//     console.log("I served the food");
// }
// kitchenwork(); 

//==============.then()==============================

// let promise = new Promise((resolve, reject) => {
//     resolve("work is done");
// });

// promise.then(result => {
//     console.log("success:" + result);
// }) 

//===========.catch()==========================================

// let promise = new Promise((resolve, reject) => {
//     reject("work is failed");
// });

// promise.then(result => {
//     console.log("success:" + result);
// })
// .catch(error => {
//     console.log("error:" + error);
// }); 

//==========sync=================================

// console.log("my name is kamla");
// console.log("I from duldula");
// console.log("I am a student");

//=================async===========================

