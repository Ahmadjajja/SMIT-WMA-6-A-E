// block and function scope
// let name = 'anas'
// {
//     console.log(name);
// }

// {
//     let name ='hassan'
//     console.log(name);
// }



// Default Parameters


// const addTwoNumbers = (num1 = 2, num2 = 3) => {
//     let result = num1 * num2;
//     return result;
// }



// console.log(addTwoNumbers(undefined, 10));




// Rest Parameters

// function print(...rest){
//     console.log(rest);
    
// }

// let message = 'hello'
// print('anas', message, 23, 34, 34, 'remainaing');



// Parameter Destructuring

// let person = {
//     name: 'Hassan',
//     age: 34,
//     country: 'Pakistan',
//     gender: 'Male',
//     running: function(){
//         console.log('running');
//     }
// }


// function printPersonDetails({name, age}){
//     console.log(name, age);
// }

// printPersonDetails(person)

// A very brief intro to callback functions


// function fun2(){
//     console.log("im function 2");
// }

// function fun1(fun2){
//     console.log("im function1 ");
//     fun2()
    
// }

// fun1(fun2)

// Functions returning Functions


// function fun2(){
//     console.log("im function 2");
// }

// function fun1(){
//     console.log("im function1");
//     return fun2;
    
// }

// console.log(fun1())


// Higher Order function

// store even numbers in a new array
// let numbers = [3,324,34,234,23,6576,78,34,324];
// let evenNumbers = [];


// for (let i = 0; i < numbers.length; i++) {
//     isEven(numbers[i]);
// }


// function isEven(num){
//     if(num % 2 == 0) {
//         evenNumbers.push(num)
//     }
// }

// console.log(evenNumbers);


// store odd numbers in a new array
// let numbers = [3,324,34,234,23,6576,78,34,324];
// let evenNumbers = [];


// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 != 0) {
//         evenNumbers.push(numbers[i])
//     }
// }

// console.log(evenNumbers);


// sort the array in accending order

let numbers = [-23,-324,34,234,23,6576,78,34,324];
// let numbers = [-23,-324,34,234,23,334,78,34,6576];


for(let j = 0; j < numbers.length; j++) {
    for (let i = 0; i < numbers.length - j; i++) {
        if (numbers[i] > numbers[i + 1]){
            let temp = numbers[i];
            numbers[i] = numbers[i + 1];
            numbers[i + 1] = temp;
        }
    }
}

console.log(numbers);





console.log(numbers);