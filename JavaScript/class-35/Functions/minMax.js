// 3. Write a js program to find maximum and minimum between two numbers using functions.

function max(num1 , num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    }
    return `${num1} and ${num2} both are equal`;

}
console.log( max(50, 50))