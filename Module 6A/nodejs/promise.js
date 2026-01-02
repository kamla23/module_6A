
//==================Basic=================//
// let myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Task completed successfully!");
//   } else {
//     reject("Something went wrong!");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log("✅ " + message);
//   })
//   .catch((error) => {
//     console.log("❌ " + error);
//   });


//================async========================//
//   function getUserData() {
//   return new Promise((resolve, reject) => {
//     console.log("Fetching user data...");

//     setTimeout(() => {
//       let success = true; 
//       if (success) {
//         resolve("User data received!");
//       } else {
//         reject("Failed to fetch user data.");
//       }
//     }, 2000);
//   });
// }

// getUserData()
//   .then((data) => {
//     console.log("✅ " + data);
//   })
//   .catch((error) => {
//     console.log("❌ " + error);
//   });


  //======aycnc and await====================//

//   async function fetchData() {
//   console.log("Fetching data...");

//   const result = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("✅ Data received!");
//     }, 2000);
//   });

//   console.log(result);
// }

// fetchData();

//================================== handling err with try catch =============================================//

async function getUserData() {
  try {
    console.log("Fetching user data...");

    const data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = false;
        if (success) {
          resolve("User data received!");
        } else {
          reject("Failed to fetch user data.");
        }
      }, 2000);
    });

    console.log(data);
  } catch (error) {
    console.log("❌ " + error);
  }
}

getUserData();
 