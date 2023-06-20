// Synchronous Javascript
// Basically in synchronous javascript, code executes line by line and it have to must
// complete an operation to move to the next opertion. 

// Blocking behavior

var x = 2;
var x = 2;
var z = fetch("https:getData...");
var x = 2;
var x = 2;

function sum(params) {
    // calling api
    // let data = fetch("https:getData...")
    // let suppose this api takes 2 seconds to call
    return x + 2;
}
sum()
function sum1(params) {
    
}
function sum2(params) {
    
}

var y = 2;


// Asynchronous Javascript
// THis behavior follows the non blocking behavior

// one control is comming
var x = 2;
var z = fetch("https:getData...");
// Two controls happen at this stage
// 1- control 1 Will execute api code that will have to wait
// 2- control 2 will execute next line from that code where waiting happens
var x = 2;
var x = 2;


// Aynchronous javascript have concepts that are as follows:
// 1- concurreny
//      Concurrency means that when things are happening at the same time or parallel or simultaneosuly

// 2- callbacks
// 3- Promises
// 4- Async / Await
// 5- Event loop

