const { table } = require("table");
const { lodash } = require("lodash");
const data = [
  ["asdf0A", "0asdfB"],
  ["1A", "1B"],
  ["2A", "2B"],
];

// console.log(lodash.map([2, 3, 4], (num) => num * 2));

console.log(table(data));
