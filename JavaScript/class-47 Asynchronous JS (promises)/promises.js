// Promise
//      promise is an object that connects the code that produce the result and the code 
//      that use the result

// States in promises are as follows:
// 1) Resolve
// 2) Rejection
// 3) pending

// // Method 1

// // Any thing that you create with the help of new keyword in JS called object.

// let promise = new Promise(function (resolved, rejected) {
//     let x = 16;
//     if(x < 15){
//         rejected(x);
//     }
//     resolved(x);
// });

// promise.then(
//     function (value) {  // will handle resolve state
//         console.log(value + " is resolved!");
//     },
//     function (error) {  // will handle reject state
//         console.log(error + " is rejected!")
//     },
// );

// // Method 2

// let promise = new Promise(function (resolved, rejected) {
//     let x = 16;
//     if(x < 15){
//         rejected(x);
//     }
//     resolved(x);
// })
// .then(function (value) {    // Then is it self a promise
//     console.log(value + " is resolved!");
// })
// .catch(function (value) {
//     console.log(error + " is rejected!")
// })

// Promise chaining (Chaining the then() methods)


// let promise = new Promise((resolve, reject) => reject("Let's don't start counting something! "))
// .then((value) => {      // Then is itself a promise
//     console.log(value);
//     return "One"    // If this then simple returning something means that returns resolve state
// })
// .then((value) => {
//     console.log(value)
//     throw new "error"
// })
// .then((value) => {
//     console.log(value)
//     return "Three"
// })
// .then((value) => {
//     console.log(value)
// })
// .catch((error) => { // catch is itself a promise
//     console.log("Error : " + error)
// })




