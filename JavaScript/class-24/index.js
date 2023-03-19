// let cars = ["Mehran", "Civic", "Corolla"];
// console.log(cars);

// cars[0] = "Suzuki";
// console.log(cars);

// cars.push("Cultus");
// console.log(cars);

// cars.pop();
// console.log(cars);


// cars.unshift("Cultus");
// console.log(cars);


// cars.shift();
// console.log(cars);


// let name = "Hassan";
// console.log(name);
// name[0] = "A";
// console.log(name);


// Permitive vs Reference Datatypes

// let num1 = 13;
// let num2 = num1;

// console.log(num1);
// console.log(num2);

// num1++;

// console.log(num1);
// console.log(num2);


// let fruits1 = ["Mango", "Banana", "Orange"];
// let fruits2 = fruits1;

// console.log(fruits1);
// console.log(fruits2);

// fruits1.push("Pineapple");


// console.log(fruits1);
// console.log(fruits2);

// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// let someFruits = fruits.slice(1, 3);
// console.log(someFruits);


// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// fruits.splice(2, 2, "Bear");
// console.log(fruits);


// let name = "Hassan";
// // let newName = name.slice(1, 3);
// // name.splice(1, 1, "B");
// name.pop();
// console.log(name);


// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// let newFruits = fruits.slice(0).concat("abc");
// let newFruits = [].concat(fruits, "abc", "an");
// let newFruits = [...fruits, "newElements"];
// fruits.push("Fruits");
// console.log(fruits);
// console.log(newFruits);

// let i = 0;
// while(i < fruits.length){
//     console.log(fruits[i]);
//     i++;
// }

// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     console.log(element);
    
// }

// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];
// fruits = ["Dates", "Mango"];
// // fruits.push("Dates");
// console.log(fruits);


// let fruits = ["Mango", "Banana", "Orange", "Pineapple"];

// for(let fruit of fruits){
//     console.log(a);
// }

// for(let index in fruits){
//     console.log(index, fruits[index]);
// }


let laptops = ["HP", "MAC"];

// let hp = laptops[0];
// let mac = laptops[1];

let [hp, mac, dell] = laptops;


console.log(hp, mac, dell);