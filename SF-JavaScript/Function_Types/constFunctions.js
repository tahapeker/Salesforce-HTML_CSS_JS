var adder = new Function('a', 'b', 'return a + b');
var multiplier = new Function('a', 'b', 'return a * b');
var subtracter = new Function('a', 'b', 'return a - b');
var divider = new Function('a', 'b', 'return a / b');
var concater = new Function('a', 'b', 'return a.concat(b);') 

console.log(adder(10, 20));
console.log(subtracter(10, 20));
console.log(multiplier(10, 20));
console.log(divider(10, 20));
console.log(concater([1,2,3], [10,20,30]));