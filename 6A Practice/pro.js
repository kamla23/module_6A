
 let pizzapromise = new Promise((resolve, reject) => {
    let isAvailable = true;

    if(isAvailable){
        resolve("pizza is ready");
    }else{
        reject("pizza is not ready");
    }
 })

 pizzapromise 
    .then((message) => {
        console.log("sucess:", message);
    })
    .catch((error) => {
        console.log("failed:", error);
    });

 console.log("Main program is running..."); 
