

function getuser(){
    return Promise.resolve("name: kamla");
}

function getaddress(){
    return Promise.resolve("city:jashpur");
}

function getuserphone(){
    return Promise.resolve("Phone:8817111791");
}

Promise.all([getuser(), getaddress(), getuserphone()])
.then((result => {
    console.log("successfully:", result);
}))

.catch((error => {
    console.log("error loading profile:", error);
}))

