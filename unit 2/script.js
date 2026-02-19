/* function boilWater() {
    return new Promise ((resolve) => {
        console.log("Boiling water...");
        setTimeout(() => {
            console.log("Water boiled.");
            resolve();
        }, 10000);
    })
}

function addMaggi(){
    return new Promise((resolve) => {
        console.log("Adding Maggi...");
        setTimeout(() => {
            console.log("Maggi added.");
            resolve();
        }, 2000);
    })
}
function addMasala(){
    return new Promise((resolve) => {
        console.log("Adding Masala...");
        setTimeout(() => {
            console.log("Masala added.");
            resolve();
        }, 5000);
    })
}
function serveMaggi(){
    console.log("Serving Maggi...");
}
boilWater()
.then(addMaggi)
.then(addMasala)
.then(serveMaggi)
.catch (()=>{
    console.log("An error occurred while making Maggi.");
})

async function makeMaggi(){
    await boilWater();
    await addMaggi();
    await addMasala();
    serveMaggi();
}
makeMaggi();
let btn = document.querySelector("#btn");
let alarm =setTimeout(() => {
    console.log("Alarm beeping...")
},1000)
btn.addEventListener('click', () => {
    clearTimeout(alarm);
    console.log("Alarm stopped.");
})

setInterval(()=>{
    console.log("Hello world");
},2000) */

/* let cart = ["Shirt","T-Shirt", "Pants", "Shoes"];
function createOrder(cart, callback){
    console.log("Creating order...");
    setTimeout(()=>{
        let orderID = 1234;
        callback(orderID);

    },5000)
}
function makePayment(orderID, callback){
    console.log("Making payment for orderID:", orderID);
    setTimeout(()=>{
        let updateInv = 'cart-1, inventory updated';
        callback(updateInv);
    },7000)
}

function uoapdateInventory(updateInv, callback){
    console.log("Updating inventory with:", updateInv);
    setTimeout(()=>{
        let message = "SUCCESS";
        callback(message);
    },4000)
}
function orderStatus(message){
    console.log(message);
}
createOrder(cart, function(orderID){
    makePayment(orderID, function(updateInv){
        uoapdateInventory(updateInv, function(message){
            orderStatus(message);
        })
})})
// This is called callback hell or pyramid of doom
// Difficulty in error handling
// Code becomes complex
// Inversion of control
// Solutions: Promises and async/await  */

// let time = prompt();
// let Restaurant = new Promise((resolve,reject)=> {
//     if(time<10){
//         resolve("Restaurant open!")
//     } else{
//         reject("Closed")
//     }
// })9

// console.log(wada)
// Restaurant.then(result=>console.log(result)).catch(error=>console.log(error))
/*let items = ["laptop", "mouse", "keyboard"]  
let inp = prompt()
let request = new Promise ((resolve,reject)=>{
    if(items.includes(inp)){
        resolve("Available!")
    } else{
        reject("Not Available!")
    }
})
request.then(result=>console.log(result)).catch(error=>console.log(error)) */

// function homeWork (){
    
//     return new Promise ((resolve,reject) =>{
//         let didHW = true;
//         setTimeout(()=>{
//             if (didHW){
//             resolve("HW Done")
//         } else {
//             reject("Not done yet")
//         }
//         },1000)
//     })
    
// }
// let temp = homeWork()
// console.log(temp)


let cart = ["laptop","mobile","earphones"]
function createOrder(cart){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(cart.length >0){
            resolve({
                orderID: 123,
                amount: 50000
            })
        } else {
            reject("Cart is empty!")
        }
    }, 5000)
    })
}

function makePayment(order){
    return new Promise((resolve,reject)=>{
        let network = true;
        setTimeout(()=>{
            if(network){
                resolve({
                    ...order,
                    paymentID:"PAY383"
                })
            } else{
                reject("Payment Failed")
            }
        },3000)
    })
}

function updateInventory(order){
    return new Promise((resolve,reject)=>{
        let inventoryAvailable = true;
        setTimeout(()=>{
            if (inventoryAvailable){
                resolve({
                    ...order,
                    updatedInventory: true
                })
            } else{
                reject("inventory not updated")
            }
        },5000)
    })
}

function orderStatus(){
    return new Promise ((resolve, reject)=>{
        let message = true;
        setTimeout(()=>{
            if (message){
                resolve({
                    ...order,
                    orderStatusKey: "Confirmed"
                })
            } else {
                reject("Order has not been confirmed yet!")
            }
        },5000)
    })
}

createOrder().then((order)=>{
    console.log("Order created for: ",order)
    return makePayment(order)
}).then ((order)=>{
    console.log("Payment Done ",order)
    return updateInventory(order)
}).then((order)=>{
    console.log("Inventory updated ",order)
    return orderStatus(order)
}).then ((order)=>{
    console.log("Confirmed order", order)
}).catch(error=>console.log(error))
