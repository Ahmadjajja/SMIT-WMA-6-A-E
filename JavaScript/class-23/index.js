// For loop

// let num = 13;
// for(let i = 1; i <= 10; i++){
//     console.log(`${num} * ${i} = ${num*i}`);
// }


// break and continue


let length = 13;
// for (let i = 0; i <= length; i++) {

//         for (let j = 0; j < 5; j++) {
//             continue;
//             // code
//         }
//     console.log(i);
// }



// for(let i = 0; i <= 10; i++) {
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }


// print
/* 
*****
*****
*****
*****
*****
*/

let row = 7;
let col = 2;

let str = '';
// for(let i = 0; i < row; i++){
//     for(let j = 0; j < col; j++){
//         str = str + "*";
        
//     }
//     console.log(str);
//     str = "";
// }



// let str1 = '';
// for(let i = 0; i < 5; i++){
//     for(let j = i; j < 5; j++){
//         str1 = str1 + "*";
        
        
//     }
//     console.log(str1);
//     str1 = "";
// }



// arrays

// let rollNo1 = 12;
// let rollNo2 = 12;
// let rollNo3 = 12;
// let rollNo4 = 12;
// let rollNo5 = 12;


// let age = [5];
// console.log(age[0]);

// age[13] = 100;

// console.log(age);


// let age = [5, 3, 34, 3, 342]

// for(let i = 0; i < age.length; i++){
//     console.log(age[i]*2);
// }


// find max from age
// console.log(Number.MIN_SAFE_INTEGER);

let age = [2131235, -323, 34, 3, 342]
let maximum = Number.MIN_SAFE_INTEGER;
for (let index = 0; index < age.length; index++) {
    
    if(maximum < age[index]){
        maximum = age[index];
    }
}

console.log(maximum);

// find minimum

let minimum = Number.MAX_SAFE_INTEGER;
for (let index = 0; index < age.length; index++) {
    
    if(minimum > age[index]){
        minimum = age[index];
    }
}

console.log(minimum);






