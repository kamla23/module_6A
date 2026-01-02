
//promise.all()
// const user = Promise.resolve("user data");
// const address = Promise.reject("address data");
// const phone = Promise.resolve("phone data");

// Promise.race([user, address, phone])
// .then(result => {
//     console.log("All data recieved:", result);
// })
// .catch(error => {
//     console.log("error:", error);
// })   

//promise.AllSettled()

// const p1 = Promise.resolve("user data");
// const p2 = Promise.reject("post api failed");
// const p3 = Promise.resolve("comments data");


// Promise.allSettled([p1, p2, p3]).then(results => {
//     results.forEach(result => {
//         if(result.status === "fulfilled"){
//             console.log("Success:", result.value);
//         }else{
//             console.log("Failed:", result.reason);
//         }
//     });
// });



//---------Promise.race()-------------

// const p1 = new Promise(res => setTimeout(() => res("api1"), 3000));
// const p2 = new Promise(res => setTimeout(() => res("api2"), 1000));
// const p3 = new Promise((_, rej) => setTimeout(() => rej("api3 failed"), 2000));


// Promise.race([p1, p2, p3]).then(result => {
//     console.log("Result:", result);
// })
// .catch(error => {
//     console.log("Error:", error);
// });


//Promise.any()

// const p1 = Promise.reject("server 1 failed");
// const p3 = Promise.resolve("server 3 success");
// const p2 = Promise.resolve("server 2 success");

// Promise.any([p1,p3,p2])
// .then(result => {
//     console.log("first success:", result);
// })
// .catch(error => {
//     console.log("all failed:", error);
// });


