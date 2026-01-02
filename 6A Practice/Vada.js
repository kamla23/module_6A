
function getSquare(n, delay){
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            if(n%2 == 0){
                res(n*n);
            } else{
                 rej("cant calculate square for odd numbers");
            }
            
        }, delay)
    })
    return promise;
}
async function getData(){
    try{
        const res = await Promise.any([getSquare(1, 1000), getSquare(7, 4000), getSquare(3, 3000)]);
        console.log(res);
    }catch(err){ 
        console.log("ERROR:", err);
    }
}
getData();