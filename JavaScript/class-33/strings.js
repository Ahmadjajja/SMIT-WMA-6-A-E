// var greet = "Hey\tman you \n are doing great!";
// console.log(greet)

// var greet = "Hey man you are doing great!";
// console.log(greet.length)

// var greet = "Hey man you are doing great!";
// console.log(greet.charAt(2));

// var greet = "Hey mAn you are doing great!";
// console.log(greet.charCodeAt(5));

// var greet = "Hey  man you are doing great!a";
// console.log(greet.indexOf("a"));
// console.log(greet.lastIndexOf("a"));

// var count = 0;
// var secondAIndex;
// for (let index = 0; index < greet.length; index++) {
//       let ch = greet.charAt(index);      // Hey man you a
//       if (ch == 'a') {
//         count++;     // 1,2
//       }
//       if (count == 2) {
//         secondAIndex = index;
//         break;
//       }
// }

// console.log("Index of a stored second time is", secondAIndex)


// var greet = "Hey man you are doing great!a";

// var man = greet.slice(4,7);
// console.log(man);

// var greet = "Hey man you are doing great!a";

// var man = greet.replace("man", "ahmad");
// console.log(man);

// var firstHalfGreet = "Hey man yoU";
// var secondHalfGreet = "arE doing great!";
// // var greet = firstHalfGreet.concat(" " + secondHalfGreet)   // method 1
// var greet = firstHalfGreet + " " + secondHalfGreet   // method 2
// console.log(greet.toUpperCase());

// var greet = "Hey,man,you,are,doing,great!a";
// console.log(greet[1])
// console.log(greet.split("a"))



var x = "Hey Man how are you"
for(let i = 0; i < x.length; i++){
    if(i == 0){
        x[i] = x.charAt(i).toUpperCase();
    }
    if(x[i] == " "){
        x[i + 1] = x.charAt(i + 1).toUpperCase();
    }
    
}
console.log(x)

