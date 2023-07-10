// Modules
// Modules is used for better management of code
// Two of modules
// 1- Named modules
// 2- default modules

// named module
// we can export multiple modules from current file
export function add(num1, num2) {
  return num1 + num2;
}
export let x = 10;

// Default module
// we can export just one module(functions or variable or class) file because this is main module of our current file
export default function addThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
