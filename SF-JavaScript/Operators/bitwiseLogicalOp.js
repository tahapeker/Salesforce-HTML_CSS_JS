let var1 = true;
let var2 = false;
let var3 = true;
let var4 = false;

console.log(var1 & var2);      // true & false = 0
console.log(var2 & var1);      // false & true = 0
console.log(var1 & var3);      // true & true = 1
console.log(var2 & var4);      // false & false = 0
console.log('----------------');
console.log(var1 | var2);      // true | false = 1
console.log(var2 | var1);      // false | true = 1
console.log(var1 | var3);      // true | true = 1
console.log(var2 | var4);      // false | false = 0

let num1 = 2;                   // (X *(-1))-1
let num2 = 5;
let num3 = -10;
console.log('----------------');
console.log(num1 & num2);
console.log(num1 | num2);
console.log('----------------');
console.log(~num1);
console.log(~num2);
console.log(~num3);
console.log('----------------');

// << => Left Shift
// >> => Right Shift
// m << n => m * 2^n
// m >> n => m / 2^n

console.log(10 << 2); // 10 << 2 => 10 * 2^2 => 40
console.log(10 << 3); // 10 << 3 => 10 * 2^3 => 80
console.log(10 << 4); // 10 << 3 => 10 * 2^4 => 160
console.log('----------------');
console.log(10 >> 2); // 10 >> 2 => 10 / 2^2 => 2
console.log(10 >> 3); // 10 >> 3 => 10 / 2^3 => 1
console.log(10 >> 4); // 10 >> 4 => 10 / 2^4 => 0
console.log(10 >> 5); // 10 >> 5 => 10 / 2^5 => 0
console.log('----------------');
console.log(10 >>> 2); // 10 >> 2 => 10 / 2^2 => 2
console.log(10 >>> 3); // 10 >> 3 => 10 / 2^3 => 1
console.log(10 >>> 4); // 10 >> 4 => 10 / 2^4 => 0
console.log(10 >>> 5); // 10 >> 5 => 10 / 2^5 => 0