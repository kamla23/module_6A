
function pizzaForWait(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("pizza is ready");
        }, 5000);
    });
}
async function orderPizza(){
    console.log("Placing Order...");
    let result = await pizzaForWait();
    console.log(result);
    console.log("order compelete");
}
orderPizza();  



