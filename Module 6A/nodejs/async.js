

//async oprations// 
// console.log("1. Start");

// setTimeout(() => {
//   console.log("2. Fetching data from server...");
// }, 2000);

// console.log("3. End"); 

//callback//
function getUserData(callback) {
  console.log("Fetching user data...");

  setTimeout(() => {
    console.log("User data received!");
    callback(); 
  }, 2000);
}

function showUserProfile() {
  console.log("Now showing user profile");
}

getUserData(showUserProfile);

