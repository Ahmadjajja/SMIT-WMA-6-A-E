var p = 2345234523490572398457239475234572394057293845792834875293484572347589203445;

// console.log(p)
// console.log(pi.toFixed(0))     // 0-100

// console.log(Number(p))
// console.log(parseFloat(p))
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.POSITIVE_INFINITY)
// console.log(Number.NEGATIVE_INFINITY)


// var p2 = "3111.141"

// if (Number(p2) == NaN) {
//     console.log("Thi is not a number")
// } else {
//     console.log("Thi is a number")
// }


var arr = [1,20, 3,4,4]
let max_value = Number.MIN_VALUE;
for (let index = 0; index < arr.length; index++) {
    if (max_value < arr[index]) {
        max_value = arr[index];
    }
}
console.log(max_value)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.POSITIVE_INFINITY)
