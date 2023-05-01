// let arr = [1,3, 4, 5, 3, 5]


// console.log(arr.reduce((prew, current) => prew + current, 0))

// let index = arr.findIndex(item => item == 54)

// console.log(index)


// // splice method
//     // is used when we want add or remove value from array
// arr.splice(2,5,10, 100, 1000)  // [1, 3, 10, 100, 1000, 4, 5, 3, 5]
//     // 1- first parameter uses for where to start adding or removing elements
//     // 2- second parameter used for how many element you want to delete
//     // 3- optional: (if we give values after first two parameter then that values will be stored onward)
// console.log(arr)


// slice method
let arr = [1,3, 4, 5, 3, 5]
let modifiedArr = arr.slice(2,4)
console.log(modifiedArr)

