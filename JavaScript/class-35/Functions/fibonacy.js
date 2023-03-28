// 19. Write a js program to generate nth Fibonacci term using function.
// fibonacy series : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144


function fibonacy(num) {
    let firstNum = 0;     //  1
    console.log(firstNum);
    if (num == 0) {
        return
    }
    let secondNum = 1;   // 1
    console.log(secondNum);
    if (num == 1) {
        return
    }
    for (let index = 2; index < num; index++) {
        let thirdNumber = firstNum + secondNum;
        console.log(" " + thirdNumber); // 1
        firstNum = secondNum;
        secondNum = thirdNumber;
    }
}
fibonacy(5);


// output: 0, 1, 1, 2, 
