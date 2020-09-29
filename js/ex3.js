/*  Homework 4
    Example 3 Javascript code
*/

console.log("Gibson's Output from Example 3");
const add = values => values.reduce((a, b) => a + b, 0);
const minimum = values => Math.min(...values);
const maximum = values => Math.max(...values); 

const values = [3, 11, 7, 2, 9, 10];

var sum = add(values);
var min = minimum(values);
var max = maximum(values);

console.log(`The sum is ${sum}`)
console.log(`The maximum is ${max}`)
console.log(`The minimum is ${min}`)