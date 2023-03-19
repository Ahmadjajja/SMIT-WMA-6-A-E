// filter

// let numbers = [4,34,345,54,-3,-324,324];
// const negitiveNumbers = numbers.filter((element) => element % 2 != 0 && element > 0)
// console.log(negitiveNumbers);

// reduce

// let numbers = [1,2,3,4,5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 50);
// console.log(sum);

// accumulator + currentValue = return
//    1000               2000            3000
//    3000               10000            13000
//    13000               500            13500



// let products = [
//     {pId: 1, pTitle: 'laptop', price: 1000},
//     {pId: 2, pTitle: 'mobile', price: 2000},
//     {pId: 3, pTitle: 'mouse', price: 10000},
//     {pId: 4, pTitle: 'keyboard', price: 500},
// ]

// const totalPrice = products.reduce((a, b) => a + b.price, 0);
// console.log(totalPrice);

// sort

// let names = ['1', '3', '4', '12', '3', 10101010];
// const sortedArray = names.sort((a,b)=> a-b);
// console.log(sortedArray);

// find


// let fruits = ['mango', 'cat1', 'dog', 'apple'];
// const fruit = fruits.find((item)=> item.length === 3);
// console.log(fruit);

// let fruits = [
//     {fruit: 'mango'}
// ]
// const a = fruits.find(item => item.fruit.length === 52)
// console.log(a);

// every
// let numbers = [-3,32,32,4,324,32,4];

// const isPositive = numbers.every(item => item > 0)
// console.log(isPositive);


// some

// let numbers = [3,32,32,4,324,32,4];

// const isNegitive = numbers.some(item => item < 0)
// console.log(isNegitive);


// fill

// let numbers = [3,32,32,4,324,32,4];
// numbers.fill('s', 3, 6);
// console.log(numbers);

// splice
let numbers = [3,32,32,4,324,32,4];
numbers.splice(2, 1, 'newVlaue')
numbers.splice(6, 1, 'second')
console.log(numbers);






