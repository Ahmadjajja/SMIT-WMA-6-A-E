// dry = do not repeat yourself.

// function declaration

// function printHelloWorld(){
//     console.log("Hello World!");
// }

// printHelloWorld();
// printHelloWorld();
// printHelloWorld();


// function addTwoNumbers(){
//     return 2 + 4;
// }

// let number = addTwoNumbers()
// console.log(number);


// function addTwoNumbers(num1, num2){  // parameters
//     return num1 + num2;
// }



// let result = addTwoNumbers(2, 3); // argument
// console.log(result);


// let array = [1,2,3,4];
// array.slice(1, 3)


// function expression

// let myFun = function(){
//     console.log('test');
// }

// myFun()

// const myFun = () => {

// }


// const printHelloWorld = (num1, num2) => {
    
//     return num1 + num2;
// }

// let result = printHelloWorld(1, 2);
// console.log(result);



// function declaration are hoisted

// greeting('Anas')

// const greeting = (userName) => {
//     console.log(`Hello ${userName}`);
// }

// function greeting (userName){
//     console.log(`Hello ${userName}`);
// }

// let greeting = function(userName){
//     console.log(`Hello ${userName}`);
// }


// function addTwoNumber(num1, num2){
    
//     console.log(typeof(num1));

//     return -1;
    
// }

// console.log(addTwoNumber('2', 3));


// console.log(a);
// var a = 10;
// console.log(a);


// function inside a function

// const greeting = (message, userName) => {

//     console.log(message);
//     const printUserName = (user) => {
//         console.log(user);
//     }

//     printUserName(userName)

    
// }

// greeting("Good evening", 'anas')


function fun1() {
    // let name = 'Hassan';
    console.log(name);
    function fun2(){
        // let name = 'Junaid'
        console.log(name);
    }
    fun2()
}

fun1()







