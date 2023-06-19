// // Synchronous JS
// // - Blocking Behavior

// var x = 2;
// var y;


// y = fetch("url")    // let's suppose this API will take 2 seconds to execute

// console.log("something")    // something will print after 2 seconds


// // Asynchronous JS
// // - Non Blocking behavior


// var x = 2;
// var y;


// y = fetch("url")    // let's suppose this API will take 2 seconds to execute

// console.log("something")    // something will print after 2 seconds


// // Concurency
//     // - multiple things happening at the same time 


// // callback
// //  This is just like a function that passes as argument to another function

// function greet(name) {
//     console.log(`Hello! ${name("Ahmad Sultan")}`)
// }
// function fullName(name) {
//     return name
// }

// greet(fullName);


// Two very important methods in JS
//  -1 setInterval

// Syntax:
// setInterval(callback, time)
    // Two things used in setInterval method
    //  1- callback (Just a function)
    //  2- time

var intervalIDOne = setInterval(callback1, 5000)
// setInterval(callback2, 2000)
// console.log("THis will print in no time")

function callback1() {
    console.log("I am printing after 5 seconds!")
}
// function callback2() {
//     console.log("I am printing after 2 seconds!")
// }


//  -2 setTimeOut

var timeOutIDone = setTimeout(callback3, 21000)
function callback3() {
    clearInterval(intervalIDOne)
}

setTimeout(callback4, 15000)
function callback4() {
    clearTimeout(timeOutIDone)
}