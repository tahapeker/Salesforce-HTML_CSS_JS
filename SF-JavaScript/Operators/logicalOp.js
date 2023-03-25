let var1 = true;
let var2 = false;
let var3 = true;
let var4 = false;


console.log(var1 && var2);      // true && false
console.log(var2 && var1);      // false && true
console.log(var1 && var3);      // true && true
console.log(var2 && var4);      // false && false
console.log('----------------');
console.log(var1 || var2);      // true || false
console.log(var2 || var1);      // false || true
console.log(var1 || var3);      // true || true
console.log(var2 || var4);      // false || false
console.log('----------------');
console.log(!var1);      // !true
console.log(!var2);      // !false
console.log(!var3);      // !true
console.log(!var4);      // !false
console.log('----------------');
console.log(var1 ^ var2);      // true ^ false = 1 (true)
console.log(var2 ^ var1);      // false ^ true = 1 (true)
console.log(var1 ^ var3);      // true ^ true = 0 (false)
console.log(var2 ^ var4);      // false ^ false = 0 (false)


